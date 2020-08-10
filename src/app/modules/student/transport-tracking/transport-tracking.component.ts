import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentTransportService } from 'app/service/student-transport/student-transport.service';
import { fuseAnimations } from '@fuse/animations';
import { MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';
import { interval } from 'rxjs';
import { AppSettings } from 'app/app.constants';

@Component({
  selector: 'app-transport-tracking',
  templateUrl: './transport-tracking.component.html',
  styleUrls: ['./transport-tracking.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [StudentTransportService]
})
export class TransportTrackingComponent extends CommonComponent implements OnInit, OnDestroy {
  routeDetails: any;
    clickedOnInBound: boolean;
    openMap: boolean;
    onLoadApi: Boolean;
    routeName: string;
    routeId: any;
    scheduleId: any;
    trackingPoint: any;
    staticPoints: any [] = [];
    routePoints: any [] = [];
    interval: any;
    apiData: any;
    constructor(private studentTransportService: StudentTransportService,
     public snackBar: MatSnackBar, public route: ActivatedRoute, public cd: ChangeDetectorRef) {
       super();
    }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param.routeId) {
        this.routeId = param.routeId;
      }
      if (param.scheduleId) {
        this.scheduleId = param.scheduleId;
      }
      this.getRouteDetails(true);
      this.interval = setInterval(() => {
        this.getRouteDetails();
        this.cd.detectChanges();
      }, 10000);
    });
}
ngOnDestroy(): void{
  clearInterval(this.interval);
}
getRouteDetails(isFirstTime?: boolean): void{ 
    this.studentTransportService.fetchRouteTripProgressStudentId(this.routeId, this.scheduleId)
    .subscribe(res => this.setTransPortDetails(res, isFirstTime), err => { clearInterval(this.interval); this.errorResponse(err); });
}
setTransPortDetails(res, isFirstTime): void{
    this.apiData = res;
    if (res.routePointsDetailsView && isFirstTime){
      this.routePoints = res.routePointsDetailsView;
      this.routePoints.map(e => e.position = e.position.toString());
      this.cd.detectChanges();
    }
    if (res.routeTripProgressView && res.routeTripProgressView.length){
      const last = res.routeTripProgressView[res.routeTripProgressView.length - 1];
      this.trackingPoint = {
        lat: last.latitude,
        lng: last.longitude
      };
    }
    this.onLoadApi = true;
    this.openMap = true;
    if (!res.routeTripProgressView || (res.routeTripProgressView && res.routeTripProgressView.length && res.routeTripProgressView[0].routeTrip.startTime && res.routeTripProgressView[0].routeTrip.endTime)){
        this.openSnackBar(AppSettings.Route_Ended, true);
        clearInterval(this.interval);
        return;
    }
}  

}
