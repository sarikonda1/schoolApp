import { Component, OnInit, ChangeDetectorRef, NgZone, ViewChild, Input, EventEmitter, Output, Inject, SimpleChanges } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { RoutingService } from 'app/service/Transport/routing.service';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings, Pattern } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';
import { FormControl, Validators } from '@angular/forms';
import { moveItemInArray } from '@angular/cdk/drag-drop';

declare var google: any;
// just an interface for type safety.
interface Marker {
  name: string;
  latitude: number;
  longitude: number;
  position: number;
  pointAddres: string;
  latlng?: { lat?: number, lng?: number };
  distance?: any;
  studentIcon?: boolean;
  id?: number;
  transportRouteId?: number;
  draggable?: boolean;
  openInfoWindow?: boolean;
  studentCount?: number;
}

@Component({
  selector: 'app-view-common-route',
  templateUrl: './view-common-route.component.html',
  styleUrls: ['./view-common-route.component.scss'],
  providers: [RoutingService]
})
export class ViewCommonRouteComponent extends CommonComponent implements OnInit {
  @Input() routePoints: any;
  @Input() inBound: any;
  @Input() selectedPoint: any;
  @Input() requestedPoint: any;
  @Output() onSelectLocation: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  markers: Marker[] = [];
  markerOptionsData: any;
  wayPoints: any[];
  fitBounds = false;
  distance: any;
  duration: any;
  // selectedPoint:any;
  outputData: any;
  zoom = 4;
  markersCount = 0;
  isSingleClick: Boolean = true;
  currentLocation: any;
  public infoWindow: FormControl; 
  lastPointIndexPosition = 0;
  constructor(private ngZone: NgZone,
     private changedetector: ChangeDetectorRef, private dialogRef: MatDialog, public commonService: CommonService, private mapsAPILoader: MapsAPILoader,
      public snackBar: MatSnackBar) {
    super();
    this.infoWindow = new FormControl(null, [Validators.required, Validators.pattern(Pattern.NATURAL_NUMBER_PATTERN)]);
  }
  ngOnInit(): void {
    this.markers = [];
    if (this.routePoints){
      this.setRouteDetails(this.routePoints);
    }
    this.setCurrentLoation(); 
  } 
  setCurrentLoation(): void{
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(position =>  { 
         this.currentLocation = {
           latitude:  position.coords.latitude,
           longitude: position.coords.longitude
         };
         this.changedetector.detectChanges();
     });
    } 
  }
  setRouteDetails(data: any): void {
    this.markers = [];
    var pointMatched = false;
    for (const marker of data) {
      this.ngZone.run(() => {
        this.markers.push({
          name: marker.name,
          latitude: marker.latitude,
          longitude: marker.longitude,
          position: marker.position,
          pointAddres: marker.pointAddres,
          latlng: { lat: marker.latitude, lng: marker.longitude },
          id: marker.id ?  marker.id : null,
          transportRouteId: marker.transportRouteId,
          studentCount: marker.studentCount
        });
        if (marker.id === this.selectedPoint.id) {
          pointMatched = true;
          this.markers[this.markers.length - 1].studentIcon = true;
          this.markers[this.markers.length - 1].openInfoWindow = true;
        }
      });
    } 

    if (!pointMatched){
      if (!this.selectedPoint.id && this.selectedPoint.latitude){
        this.selectedPoint.latlng = { lat: this.selectedPoint.latitude, lng: this.selectedPoint.longitude };
        this.selectedPoint.studentIcon = true;
        this.selectedPoint.openInfoWindow = true;
        this.markers.splice(this.selectedPoint.position - 1, 0, this.selectedPoint);
        const temp = [];
        for (let i = 0; i < this.markers.length; i++ ){
            if (i >= +this.selectedPoint.position){
              this.markers[i].position = this.markers[i].position + 1;
            }
            temp.push(this.markers[i]);
        }
        this.markers = temp; 
        this.selectedPoint = {}; 
      }else{
        this.selectedPoint = this.requestedPoint;
      } 
    }else{
      this.selectedPoint = {};
    }  
    this.markerOptionsData = this.markers;
    this.infoWindow.setValue(this.markers.length + 1);
    this.markerOptionsData.sort((a, b) => a.position - b.position);
    this.markers = this.markerOptionsData; 
     this.changedetector.detectChanges();
  } 
  onBackButtonClick(): void {
    this.onSelectLocation.emit(this.outputData); 
  }
  getwayPoints(index): any {
    const wayPoints = [];
    if (this.markers.length > 2) {
      for (let i = (this.outputData.inBound ? index + 1 : 1); i < (this.outputData.inBound ? this.markers.length - 1 : index - 1); i++) {
        wayPoints.push({
          location: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
          stopover: false
        });
      }
      return wayPoints;
    } else {
      return [];
    }
  } 
  setMarkerData(point): any{
    return {lat: point.latitude, lng: point.longitude};
  }
  mapDoubleClicked($event: any): void{
    this.isSingleClick = false;
  }
  mapClicked($event: any): void{
    this.isSingleClick = true;
      setTimeout(() => {
        if (this.isSingleClick){
          this.resetMarkerPoints();
          this.addMarker($event);
        }
    }, 500);
  }
  resetMarkerPoints(marker: any = false): void{ 
    const temp = [];
    this.routePoints = this.routePoints.filter(e => e.id);
    this.routePoints = this.routePoints.sort((a, b) => a.position - b.position); 
    for (let i = 0; i < this.routePoints.length; i++){
      this.routePoints[i].position = i + 1;
      if (marker && (this.routePoints[i].latitude === marker.latitude && this.routePoints[i].longitude === marker.longitude)){
        this.routePoints[i].studentIcon = true;
      }else{
        this.routePoints[i].studentIcon = false;
      }
      temp.push(this.routePoints[i]); 
    }
    this.markers = temp;
  }
  addSelectedPoint(): void{ 
    if (this.isMarkerAlreadyExists(this.selectedPoint) === -1){
      this.findClosest(this.selectedPoint); 
    }else{
      this.openSnackBar(AppSettings.LOCATION_ALREADY_EXISTS, true);
    }
  } 
  addMarker($event, onDrag = false): void {  
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng($event.coords.lat, $event.coords.lng);
      const request = { latLng: latlng };
      geocoder.geocode(request, (results: any, status: any) => {
        if (status === google.maps.GeocoderStatus.OK) { 
          const result = results[0];
          if (result) {
            this.ngZone.run(() => {
              this.selectedPoint = {
                latitude: $event.coords.lat,
                longitude: $event.coords.lng,
                pointAddres: result.formatted_address,
                draggable: true,
                label: '',
                position: '',
                name: this.getAddressObject(result),
                latlng: {
                  lat: $event.coords.lat,
                  lng: $event.coords.lng
                },
                inBound: this.inBound
              }; 
              this.infoWindow.setValue(this.markers.length  + 1);
            });
          } else {
           this.openSnackBar(AppSettings.ADDRESS_NOT_FOUND, true);
          }
        }
      });
    }
  }
  findClosest(pt): void{
    const closest = [];
    for (let i = 0; i < this.markers.length; i++) {
       this.markers[i].distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pt.latitude, pt.longitude),
        new google.maps.LatLng(this.markers[i].latitude, this.markers[i].longitude));
       closest.push(this.markers[i]);
    }
    closest.sort((a, b) => (a.distance - b.distance));
     const distanceBWpoints = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(closest[0].latitude, closest[0].longitude),
        new google.maps.LatLng(closest[1].latitude, closest[1].longitude));
        let finalPosition;
        if (closest[1].distance > distanceBWpoints){
          if (closest[0].position > closest[1].position){
            finalPosition = closest[0].position + 1;
          }else{
            finalPosition = closest[0].position;
          }
        }else{
          if (closest[0].position > closest[1].position){
            finalPosition =  closest[0].position;
          }else{
            finalPosition = closest[0].position + 1;
          }
        }
        finalPosition = this.infoWindow.value > this.markers.length ? this.markers.length + 1 : this.infoWindow.value;
        // this is for removing marker if points way_points_exceeds
        this.lastPointIndexPosition = finalPosition;

        this.selectedPoint.position = finalPosition;
        this.selectedPoint.label = finalPosition;
        this.selectedPoint.studentIcon = true;
        this.markers.splice(finalPosition - 1, 0, this.selectedPoint );
        this.selectedPoint = {}; 
      const temp = [];
      for (let i = 0; i < this.markers.length; i++ ){
          if (i >= finalPosition){
            this.markers[i].position = i + 1;
          }
          temp.push(this.markers[i]);
      }
      this.markers = temp;  
      this.outputData = {
          selectedPoint: this.markers[finalPosition - 1] ? this.markers[finalPosition - 1] : this.markers[this.markers.length - 1],
          selectedRouteMarker: false,
          inBound: this.inBound,
          updatedPoints: this.markers
      };
    this.changedetector.detectChanges();
  }
  onClickRouteMarker(obj, i): void{
      this.resetMarkerPoints(obj);  
      const updatedPosition = this.markers.findIndex(e => e.latitude === obj.latitude && e.longitude === obj.longitude);
      
      obj.position = updatedPosition + 1;
      this.outputData = {
          selectedPoint: obj,
          selectedRouteMarker: true,
          inBound: this.inBound,
          updatedPoints: this.markers
      };  
  }
  isMarkerAlreadyExists(currentMarker): any {
    return this.markers.findIndex(e => 
      (e.latitude.toPrecision(6) === currentMarker.latitude.toPrecision(6) && e.longitude.toPrecision(6) === currentMarker.longitude.toPrecision(6)));
 } 
  getAddressObject(result): any {
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
    result.address_components.forEach(component => {
      for (const shouldBe in ShouldBeComponent) {
        if (component.types.indexOf(ShouldBeComponent[shouldBe]) !== -1) {
          address[shouldBe] = component.long_name ? component.long_name + ',' : '';
        }
      }
    });
    const data = (address.premise + '' + address.route + '' + address.sublocality_level_2 + '' + address.sublocality_level_1).replace(/,+/g, ',').replace(/,\s*$/, '') ;
    return data ? data : result.formatted_address.substring(0, 45);
  }
  getDirections(event): void{
     if (event.status === 'OK'){
        this.distance = 0;
        this.duration = 0;
        const myroute = event.routes[0];
        for (let i = 0; i < myroute.legs.length; i++) {
          this.distance += myroute.legs[i].distance.value;
          this.duration += myroute.legs[i].duration.value;
        }  
        this.distance = Math.round(this.distance / 1000);
        this.duration = this.duration / 60;
        this.duration = (Math.floor(this.duration / 60) ? Math.floor(this.duration / 60) + 'hr ' : '') + Math.round(this.duration % 60) + 'min '; 
        return;
      }else if (event.status === 'ZERO_RESULTS'){
        this.openSnackBar(AppSettings.DISTANCE_NOT_FOUND_VIA_ROAD, true);
    }else if (event.status === 'MAX_WAYPOINTS_EXCEEDED'){
      this.openSnackBar(AppSettings.MAX_WAY_POINTS_EXCEEDS, true);
    }
    this.resetMarkerPoints();
    this.outputData = null;
  }
  onListDrop(event): void{ 
    moveItemInArray(this.markers, event.previousIndex, event.currentIndex);
    const temp = [];
    this.markers.map((e, i) => {
       e.position = i + 1; 
       temp.push(e);
      }); 
    this.markers = temp; 
    this.changedetector.detectChanges(); 
  }
}
