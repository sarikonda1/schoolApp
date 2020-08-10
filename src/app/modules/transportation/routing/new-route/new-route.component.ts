import { Component, OnInit, ElementRef, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { RoutingService } from 'app/service/Transport/routing.service';
import { TransportRoutesView } from '../model/transport-routes-view';
import { RoutePointsView } from '../model/route-points-view';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';

declare var google: any;

// just an interface for type safety.
interface Marker {
  name: string;
  latitude: number;
  longitude: number;
  label?: number;
  draggable: boolean;
  pointAddress: string;
  latlng?: { lat?: number, lng?: number };
  id?: number;
}


@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.scss'],
  providers: [RoutingService]
})
export class NewRouteComponent extends CommonComponent implements OnInit {
  latitude = 20.5937;
  longitude = 78.9629;
  public searchControl: FormControl;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  @ViewChild('table') table;
  public renderOptions = {
    suppressMarkers: true,
  };
  distance: any;
  duration: any;
  markers: Marker[] = [];
  rows = Promise.resolve([]);
  routeForm: FormGroup;
  validate = true;
  routeTypeList: any[] = [];
  columns = [
    { field: 'label', header: 'Stop No.', sort: false },
    { field: 'name', header: 'Name', sort: false },
    { field: 'latitude', header: 'Latitute', sort: false },
    { field: 'longitude', header: 'Longitude', sort: false },
    { field: 'pointAddress', header: 'Position Address', sort: false },
    { field: 'delete', header: 'Action', sort: false }
  ];
  displayedColumns = ['label', 'name', 'latitude', 'longitude', 'pointAddress', 'delete'];
  transportRouteData: TransportRoutesView;
  pointsView: RoutePointsView;
  updateRouteId: any;
  id: number;
  isSingleClick: Boolean = true;
  currentLocation: any;
  selectedPoint: any;
  public infoWindow: FormControl;
  lastmarkerForWayPoint: any;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private changedetector: ChangeDetectorRef,
    public dialogRef: MatDialog, public commonService: CommonService, private _formBuilder: FormBuilder, private routingService: RoutingService,
    private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) {
    super();

    this.setCurrentLoation();
  }
  setCurrentLoation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.changedetector.detectChanges();
      });
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.updateRouteId = params.id;
        this.getRouteInfo(params.id);
      }
    });
    this.getRouteTypes();
    this.routeForm = this._formBuilder.group({
      routePointsView: this._formBuilder.array([]),
      name: [null, [Validators.required, Validators.maxLength(45)]],
      routeNumber: [null, [Validators.required, Validators.pattern(Pattern.ALPHANUMERIC), Validators.maxLength(5)]],
      routeTypeId: [null, Validators.required],
      routeDescription: [null, [Validators.required, Validators.maxLength(135)]],
    });
    this.searchControl = new FormControl();
    this.infoWindow = new FormControl(null, [Validators.required, Validators.min(1), Validators.max(99)]);
    this.mapsAPILoader.load().then(() => {
      const input = document.getElementById('inputId');
      google.maps.event.addDomListener(input, 'keydown', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
        }
      });
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['establishment']
      });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          const currentMarker = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
            draggable: true,
            name: place.name,
            pointAddress: place.formatted_address.substring(0, 200),
            latlng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }
          };
          this.infoWindow.setValue(this.markers.length + 1);
          this.selectedPoint = currentMarker;
          this.searchControl.setValue(null);
        });
      });
    });
  }
  addRoute(currentMarker): void {
    this.addRouteMarker(currentMarker);
  }
  updateRoute(currentMarker, index): void {
    this.updateRouteMarker(currentMarker, index);
  }
  setPositionsForUpdate(currentMarker, index): any {
    const start = this.setLatLngForDirections(this.markers);
    start[index] = currentMarker.latlng;
    start.pop();
    const end = this.setLatLngForDirections(this.markers);
    end[index] = currentMarker.latlng;
    end.shift();
    return { start: start, end: end };
  }
  addRouteMarker(currentMarker): void {
    this.ngZone.run(() => {
      if (this.isMarkerAlreadyExists(currentMarker) === -1) {
        (this.routeForm.controls['routePointsView'] as FormArray).push(this._formBuilder.group({
          name: [currentMarker.name, [Validators.required, Validators.maxLength(45)]]
        }));
        this.lastmarkerForWayPoint = {
          index : this.infoWindow.value > this.markers.length ? this.markers.length + 1 : this.infoWindow.value,
          point: this.selectedPoint
        };
        if (this.infoWindow.value > this.markers.length) {
          this.markers.push(currentMarker);
        } else {
          this.markers.splice(this.infoWindow.value - 1, 0, currentMarker);
          const pointsData = this.routeForm.value.routePointsView;
          pointsData.splice(this.infoWindow.value - 1, 0, { name: currentMarker.name });
          pointsData.pop();
          (this.routeForm.controls['routePointsView'] as FormArray).setValue(pointsData);
        }
        this.selectedPoint = null;
        this.setMarkerAndRows();
      } else {
        this.openSnackBar(AppSettings.LOCATION_ALREADY_EXISTS, true);
      }
    });
  }
  isMarkerAlreadyExists(currentMarker): any {
    return this.markers.findIndex(e =>
      (e.latitude === currentMarker.latitude && e.longitude === currentMarker.longitude));
  }
  updateRouteMarker(currentMarker, index): void {
    this.ngZone.run(() => {
      Object.assign(this.lastmarkerForWayPoint = {}, {
        point: this.markers[index],
        index: index,
        formValues: this.routeForm.value.routePointsView,
        isDrag: true
      });

      (this.routeForm.controls['routePointsView'] as FormArray).controls[index].setValue({ name: currentMarker.name });
      currentMarker.label = index + 1;
      this.markers[index] = currentMarker;
      this.setMarkerAndRows();
    });
  }
  setPositionsForAdd(marker): any {
    let start;
    let end;
    if (this.markers.length > 0) {
      start = this.setLatLngForDirections(this.markers);
      end = this.setLatLngForDirections(this.markers);
      end.push(marker.latlng);
      end.shift();
    }
    return { start: start, end: end };
  }
  setLatLngForDirections(markers): any {
    const latLng = [];
    for (const marker of markers) {
      latLng.push(marker.latlng);
    }
    return latLng;
  }
  getRouteInfo(id): void {
    this.routingService.transportRoutesDetails(id)
      .subscribe(res => this.setRouteDetails(res.transportRouteDetailsView));
  }
  setRouteDetails(res): void {
    this.routeForm.patchValue(res);
    this.markers = [];
    const locationArray = (this.routeForm.controls['routePointsView'] as FormArray);
    res.routePointsDetailsView.sort((a, b) => a.position - b.position);
    for (const marker of res.routePointsDetailsView) {
      locationArray.push(this._formBuilder.group({
        name: [marker.name, [Validators.required, Validators.maxLength(45)]]
      }));
      this.ngZone.run(() => {
        this.markers.push({
          name: marker.name,
          latitude: marker.latitude,
          longitude: marker.longitude,
          label: marker.position,
          draggable: true,
          pointAddress: marker.pointAddress,
          latlng: { lat: marker.latitude, lng: marker.longitude },
          id: marker.id
        });
      });
    }
    this.rows = Promise.resolve(this.markers);
    this.mapsAPILoader.load().then(() => {
      if (this.markers.length > 1) {
         this.setMarkerAndRows();
      }
    });
    this.changedetector.detectChanges();
  }
  getRouteTypes(): void {
    this.routingService.routeTypes()
      .subscribe(res => this.routeTypeList = res);
  }
  onAction(submit = false): void {
    if (submit) {
      if (this.routeForm.valid && this.routeForm.value.routePointsView.length > 1) {
        const positionArray = this.routeForm.value.routePointsView;
        for (let i = 0; i < this.routeForm.value.routePointsView.length; i++) {
          this.markers[i].name = positionArray[i].name;
        }
        const pointsView = [];
        for (const marker of this.markers) {
          pointsView.push(this.setUpApiData(marker));
        }
        if (this.updateRouteId) {
          this.transportRouteData = {
            id: this.updateRouteId
          };
          for (const key in this.routeForm.value) {
            if (this.routeForm.value.hasOwnProperty(key) && key !== 'routePointsView') {
              this.transportRouteData[key] = this.routeForm.value[key];
            }
          }
          this.transportRouteData.routePoints = [];
          this.transportRouteData.routePoints = pointsView;
          this.routingService.updateTransportRoute(this.transportRouteData).subscribe(res => this.addUpdateRoute(res), err => this.errorResponse(err));
        } else {
          this.transportRouteData = this.routeForm.value;
          this.transportRouteData.routePointsView = [];
          this.transportRouteData.routePointsView = pointsView;
          this.routingService.addVehicleRoutes(this.transportRouteData).subscribe(res => this.addUpdateRoute(res), err => this.errorResponse(err));
        }
      } else if (this.routeForm.valid && this.routeForm.value.routePointsView.length < 2) {
        this.openSnackBar(AppSettings.ATLEAST_TWO_ROUTES_ERROR, true);
      } else {
        if (this.routeForm.controls.routePointsView.valid) {
          this.scrollIntoViewById('route-form');
        }
      }
    } else {
      this.onCancel();
    }
  }
  onCancel(): void {
    this.router.navigate([RouteConfig._Route_Database]);
  }
  setUpApiData(marker): any {
    return {
      name: marker.name, latitude: marker.latitude, longitude: marker.longitude, position: parseInt(marker.label, 0),
      pointAddress: marker.pointAddress, id: marker.id ? marker.id : 0
    };
  }
  addUpdateRoute(res): void {
    this.onCancel();
    this.openSnackBar(res.messages.ResultMessage);
  }
  markerAction($event, index = 0, clicked = true): void {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng($event.coords.lat, $event.coords.lng);
      const request = { latLng: latlng };
      geocoder.geocode(request, (results: any, status: any) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          if (result) {
            const currentMaker = {
              latitude: $event.coords.lat,
              longitude: $event.coords.lng,
              pointAddress: result.formatted_address.substring(0, 200),
              draggable: true,
              name: this.getAddressObject(result),
              latlng: {
                lat: $event.coords.lat,
                lng: $event.coords.lng
              }
            };
            if (!clicked) {
              this.updateRoute(currentMaker, index);
            } else {
              this.infoWindow.setValue(this.markers.length + 1);
              this.selectedPoint = currentMaker;
            }
            this.changedetector.detectChanges();
          } else {
            this.openSnackBar(AppSettings.ADDRESS_NOT_FOUND, true);
          }
        }
      });
    }
  }
  addSelectedPoint(currentMaker): void {
    this.addRoute(currentMaker);
  }
  getAddressObject(response): any {
    const ShouldBeComponent = {
      premise: 'premise',
      route: 'route',
      sublocality_level_2: 'sublocality_level_2',
      sublocality_level_1: 'sublocality_level_1'
    };

    const address = {
      premise: '',
      route: '',
      sublocality_level_2: '',
      sublocality_level_1: ''
    };
    response.address_components.forEach(component => {
      for (const shouldBe in ShouldBeComponent) {
        if (component.types.indexOf(ShouldBeComponent[shouldBe]) !== -1) {
          address[shouldBe] = component.long_name ? component.long_name + ',' : '';
        }
      }
    });
    const data = (address.premise + '' + address.route + '' + address.sublocality_level_2 + '' + address.sublocality_level_1).replace(/,+/g, ',').replace(/,\s*$/, '');
    return data ? data.substring(0, 45) : response.formatted_address.substring(0, 45);
  }
  mapClicked($event: any): void {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.markerAction($event);
      }
    }, 300);
  }
  mapDoubleClicked($event: any): void {
    this.isSingleClick = false;
  }
  markerDragEnd(i: number, $event: any): void {
    this.markerAction($event, i, false);
  }
  deleteAction(index): void {
    (<FormArray>this.routeForm.controls['routePointsView']).removeAt(index);
    this.markers.splice(index, 1);
    if (this.markers.length > 1) {
      const positions = this.setPositionsForDelete();
        this.setMarkerAndRows();
    } else {
      this.distance = 0;
      this.duration = 0;
      this.setMarkerAndRows();
    }
    this.changedetector.detectChanges();

  }
  setPositionsForDelete(): any {
    const start = this.setLatLngForDirections(this.markers);
    start.pop();
    const end = this.setLatLngForDirections(this.markers);
    end.shift();

    return { start: start, end: end };
  }
  setMarkerAndRows(): void {
    this.rows = Promise.resolve(this.markers);
    const markerPoints = [];
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].label = i + 1;
      markerPoints.push(this.markers[i]);
    }
    this.markers = markerPoints;
    this.changedetector.detectChanges();
  }
  trimTextBoxSpacesForTable(i): void {
    (this.routeForm.controls['routePointsView'] as FormArray).controls[i].setValue({ name: this.commonService.trimSpaces(this.routeForm.value.routePointsView[i].name) });
  }
  dropTable(event): void {
    const prevIndex = this.markers.findIndex((d) => d === event.item.data);
    if (prevIndex < 0 || event.currentIndex < 0) {
      return;
    }
    const tempMarker = this.markers[prevIndex];
    this.markers[prevIndex] = this.markers[event.currentIndex];
    this.markers[event.currentIndex] = tempMarker;
    const temp = this.routeForm.value.routePointsView[prevIndex].name;

    (this.routeForm.controls['routePointsView'] as FormArray).controls[prevIndex].setValue({ name: this.routeForm.value.routePointsView[event.currentIndex].name });

    (this.routeForm.controls['routePointsView'] as FormArray).controls[event.currentIndex].setValue({ name: temp });

    this.table.renderRows();
    this.markers.map((e, i) => e.label = i + 1);
    if (this.markers.length > 1) {
       this.setMarkerAndRows();
    }
  }
  getDirections(res): void{
    if (res.status === 'OK'){
        this.distance = 0;
        this.duration = 0;
        const response = res.routes[0].legs;
        for (let i = 0; i < response.length; i++) {
          if (response[i].distance) {
            this.distance += response[i].distance.value;
          }
          if (response[i].duration) {
            this.duration += response[i].duration.value;
          }
        }
        this.distance = Math.round(this.distance / 1000);
        this.duration = this.duration / 60;
        this.duration = (Math.floor(this.duration / 60) ? Math.floor(this.duration / 60) + 'hr ' : '') + Math.round(this.duration % 60) + 'min ';
          this.changedetector.detectChanges();
    }else{
      if (this.lastmarkerForWayPoint && this.lastmarkerForWayPoint.isDrag){
          if (this.lastmarkerForWayPoint.formValues){
            (this.routeForm.controls['routePointsView'] as FormArray).setValue(this.lastmarkerForWayPoint.formValues);
          }
          this.markers[this.lastmarkerForWayPoint.index] = this.lastmarkerForWayPoint.point;
          this.setMarkerAndRows();
      } else{
          this.markers.splice(this.lastmarkerForWayPoint.index - 1, 1);
        const pointsData = this.routeForm.value.routePointsView;
        pointsData.splice(this.lastmarkerForWayPoint.index - 1, 1);
        (this.routeForm.controls['routePointsView'] as FormArray).removeAt(this.lastmarkerForWayPoint.index - 1);
        (this.routeForm.controls['routePointsView'] as FormArray).setValue(pointsData);
        this.setMarkerAndRows();
      }
      if (res.status === 'ZERO_RESULTS'){
        if (!this.lastmarkerForWayPoint.isDrag){
          this.selectedPoint = this.lastmarkerForWayPoint.point;
          this.selectedPoint.label = '';
          this.changedetector.detectChanges();
        }
      return this.openSnackBar(AppSettings.DISTANCE_NOT_FOUND_VIA_ROAD, true);
      }else if (res.status === 'MAX_WAYPOINTS_EXCEEDED'){
        this.selectedPoint = null;
        return this.openSnackBar(AppSettings.MAX_WAY_POINTS_EXCEEDS, true);
      } 
    }
  }
}


