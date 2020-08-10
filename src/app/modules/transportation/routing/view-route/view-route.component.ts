import { Component, OnInit, ChangeDetectorRef, NgZone, ViewChild, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoutingService } from 'app/service/Transport/routing.service';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { RouteConfig } from 'app/url.config';
import { Location } from '@angular/common';
import { CommonService } from 'app/service/common.service';
import { MatSnackBar } from '@angular/material';
declare var google: any;
// just an interface for type safety.
interface Marker {
  name: string;
  latitude: number;
  longitude: number;
  position: string;
  pointAddress: string;
  latlng?: { lat?: number, lng?: number };
  studentIcon: boolean;
}

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.component.html',
  styleUrls: ['./view-route.component.scss'],
  providers: [RoutingService]
})
export class ViewRouteComponent extends CommonComponent implements OnInit, OnChanges {
  transportRoutesId: any;
  markers: Marker[] = [];
  markerOptions = { origin: { label: '1' }, destination: { label: '2' } };
  markerOptionsData: any;
  wayPoints: any[];
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  public renderOptions = {
    suppressMarkers: true,
  };
  zoom = 4;
  fitBounds = false;
  distance: any;
  duration: any;
  @Input() routePoints: any;
  @Input() fromStudentTransport: boolean;
  @Input() routeName: any;
  @Input() trackingPoint: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClosePanel: EventEmitter<any> = new EventEmitter<any>();
  icon: any;
  constructor(
    public commonService: CommonService,
    private ngZone: NgZone,
    private router: Router,
    private routes: ActivatedRoute,
    private routingService: RoutingService,
    private changedetector: ChangeDetectorRef,
    public mapsAPILoader: MapsAPILoader,
    public location: Location, public snackBar: MatSnackBar) {
    super();
    this.icon = {
      url: 'assets/images/custom-icons/navigation.gif',
      scaledSize: {
        width: 80,
        height: 80
      }
    };
  }

  ngOnInit(): void {
    this.routes.params
      .subscribe((params: Params) => {
        if (params['id']) {
          this.transportRoutesId = params['id'];
          this.routeName = params['routeName'];
          this.getTransportRouteDetails();
        }
      });
    this.markers = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.routePoints && JSON.stringify(changes.routePoints.previousValue) !== JSON.stringify(changes.routePoints.currentValue)){
      this.setRouteDetails(this.routePoints);
    }
  }
  getTransportRouteDetails(): void {
    this.routingService.transportRoutesDetails(this.transportRoutesId)
      .subscribe(res => {
        this.setRouteDetails(res.transportRouteDetailsView.routePointsDetailsView);
      }, error => {
        this.errorResponse(error);
      });
  }

  setRouteDetails(data: any): any {
    this.markers = [];
    for (const marker of data) {
      this.ngZone.run(() => {
        this.markers.push({
          name: marker.name,
          latitude: marker.latitude,
          longitude: marker.longitude,
          position: marker.position.toString(),
          pointAddress: this.fromStudentTransport ? marker.pointAddres : marker.pointAddress,
          latlng: { lat: marker.latitude, lng: marker.longitude },
          studentIcon: marker.studentIcon || false
        });
      });
    }

    if (this.markers && !this.markers.length) {
      return;
    }
    this.markerOptionsData = this.markers;
    this.markerOptionsData.sort((a, b) => parseFloat(a.position) - parseFloat(b.position));
    this.markers = this.markerOptionsData;
    this.changedetector.detectChanges();
    if (this.markers[0].studentIcon) {
      this.markerOptions.origin['icon'] = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    } else {
      this.markerOptions.origin['icon'] = '';
    }
    if (this.markers[this.markers.length - 1].studentIcon) {
      this.markerOptions.destination['icon'] = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    } else {
      this.markerOptions.destination['icon'] = '';
    }
    this.markerOptions.destination.label = this.markers.length.toString();
    this.wayPoints = [];
    if (this.markers.length > 2) {
      for (let i = 1; i < this.markers.length - 1; i++) {
        this.wayPoints.push({
          location: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
          stopover: false
        });
      }
    } else {
      this.wayPoints = [];
    }
    this.changedetector.detectChanges();
    this.changedetector.markForCheck();
  }
  setLatLngForDirections(markers): any {
    const latLng = [];
    for (const marker of markers) {
      latLng.push(marker.latlng);
    }
    return latLng;
  }

  
  getDirections(res): void{
    this.distance = 0;
    this.duration = 0;
        const response = res.routes[0].legs;
        for (let i = 0; i < response.length; i++) {
          if (response[i].distance){
            this.distance += response[i].distance.value;
          }
          if (response[i].duration){
            this.duration += response[i].duration.value;
          }
        }
        this.distance = Math.round(this.distance / 1000);
        this.duration = this.duration / 60;
        this.duration = (Math.floor(this.duration / 60) ? Math.floor(this.duration / 60) + 'hr ' : '') + Math.round(this.duration % 60) + 'min ';
  }
  onBackButtonClick(): void {
    if (this.fromStudentTransport) {
      this.onClosePanel.emit();
    } else {
      this.location.back();
    }
  }
}
