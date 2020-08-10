import {Component, Inject, OnInit, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {CommonComponent} from '../../../shared/common/common.component';
import {LOCALE_ID} from '@angular/core';
import { StudentTransportService } from 'app/service/student-transport/student-transport.service';
import { MatSnackBar } from '@angular/material'; 
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
@Component({
    selector: 'student-transportation',
    templateUrl: './transportation.component.html',
    styleUrls: ['./transportation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [StudentTransportService]
})
export class StudentTransportationComponent extends CommonComponent implements OnInit {
    routeDetails: any;
    clickedOnInBound: boolean;
    openMap: boolean;
    onLoadApi: Boolean;
    routeName: string;
    constructor(@Inject(LOCALE_ID) public locale: string, private studentTransportService: StudentTransportService,
     public snackBar: MatSnackBar, public changeDetector: ChangeDetectorRef, public router: Router) {
        super();
    }

    ngOnInit(): void { 
        this.getRouteDetails();
    }
    getRouteDetails(): void{ 
        this.studentTransportService.fetchTransportAssignmentStudentId()
        .subscribe(res => this.setTransPortDetails(res), err => this.errorResponse(err));
    }
    setTransPortDetails(response): void{
        this.routeDetails = response.studentTransportAssignView;
        if (this.routeDetails && this.routeDetails.inbound){
            this.routeDetails.inbound.pointDetails.sort((a, b) => a.position - b.position);
            this.routeDetails.inbound.pointDetails[this.routeDetails.inbound.point.position - 1].studentIcon = true; 
            this.routeDetails.inbound.startingPoint  = this.routeDetails.inbound.pointDetails.find(e => e.position === 1).name;
        }
        if (this.routeDetails && this.routeDetails.outBound){
            this.routeDetails.outBound.pointDetails.sort((a, b) => a.position - b.position);
            
            if (this.routeDetails.outBound.pointDetails[this.routeDetails.outBound.point.position - 1]){
                this.routeDetails.outBound.pointDetails[this.routeDetails.outBound.point.position - 1].studentIcon = true;
            } else{
                this.routeDetails.outBound.pointDetails[this.routeDetails.outBound.pointDetails.length - 1].studentIcon = true; 
            }
            this.routeDetails.outBound.endingPoint  = this.routeDetails.outBound.pointDetails.find(e => e.position === this.routeDetails.outBound.pointDetails.length).name;
        }  
        this.onLoadApi = true;
    }   
    onSelect(inBound = true): void{
        this.clickedOnInBound = inBound;
        if (this.clickedOnInBound){
            this.routeName = 'In-Bound';
        }
        else{this.routeName = 'Out-Bound'; }
        this.openMap = true;
        this.changeDetector.detectChanges();
        this.changeDetector.markForCheck();
        this.scrollIntoViewById('accordion-map');
    }
    onClosePanel(): void{
        this.openMap = false;
        this.changeDetector.detectChanges();
        this.changeDetector.markForCheck();
        this.scrollIntoViewById('map-grid'); 
    }
    onClickNavigation(data): void{
      this.router.navigate([RouteConfig._Student_Tracking + `/${data.transportRouteId}/${data.transportScheduleRouteId}`]);
    }
}


