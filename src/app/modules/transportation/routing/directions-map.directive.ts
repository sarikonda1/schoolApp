import {Directive, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

// You can use any other interface for origin and destination, but it must contain latlng data
export interface ILatLng {
  latitude: number;
  longitude: number;
}

// the will keep typescript from throwing errors w.r.t the google object
declare var google: any;

@Directive({
  selector: '[appDirectionsMap]'
})
export class DirectionsMapDirective implements OnInit, OnChanges {
  @Input() markers: any[] = [];
  @Output() getDirections: EventEmitter<any> = new EventEmitter<any>();

  // We'll keep a single google maps directions renderer instance so we get to reuse it.
  // using a new renderer instance every time will leave the previous one still active and visible on the page
  private directionsRenderer: any;
  showDirection = true;
  // We inject AGM's google maps api wrapper that handles the communication with the Google Maps Javascript
  constructor(private gmapsApi: GoogleMapsAPIWrapper) {}

  drawDirectionsRoute(): void {
      this.gmapsApi.getNativeMap().then(map => {
        if (!this.directionsRenderer) {
          this.directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport: true});
        }
        const directionsRenderer = this.directionsRenderer;
        if (this.showDirection) {
            const directionsService = new google.maps.DirectionsService; 
            directionsRenderer.setMap(map);
            directionsService.route({
                origin: this.getFormatedValues(this.markers[0]),
                destination: this.getFormatedValues(this.markers[this.markers.length - 1]),
                waypoints: this.getwayPoints(),
                travelMode: 'DRIVING',
                transitOptions: { modes: ['BUS'] },
                unitSystem: google.maps.UnitSystem.METRIC 
            }, (response, status) => {
                if (response){
                  this.getDirections.emit(response);
                }
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    // console.log('Directions request failed due to ' + status);
                }
            });
        }

      });
  }
  getFormatedValues(point): any{
      return {
        lat: point.latitude,
        lng: point.longitude
      };
  }
  getwayPoints(): any {
    const wayPoints = [];
    if (this.markers.length > 2) {
      for (let i = 1; i < this.markers.length - 1; i++) {
        wayPoints.push({
          location: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
          stopover: true
        });
      }
      return wayPoints;
    } else {
      return [];
    }
  }
  ngOnInit(): void{
    if (this.directionsRenderer !== undefined) { 
        this.directionsRenderer.setDirections({routes: []});
        return;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes.markers.currentValue && changes.markers.currentValue.length > 1){
        this.drawDirectionsRoute();
      }else{
        if (this.directionsRenderer !== undefined) { 
            this.directionsRenderer.setDirections({routes: []});
            return;
        }
      }
  }
}
