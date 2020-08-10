import {Component, Inject, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {CommonComponent} from '../../../shared/common/common.component';
import {LOCALE_ID} from '@angular/core';
import { StaffJobApplicationService } from 'app/service/staff/staff-job-application.service';
import { StoreService } from 'app/service/file-management/store.service';

@Component({
    selector: 'student-staff-directory',
    templateUrl: './staff-directory.component.html',
    styleUrls: ['./staff-directory.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    providers: [StaffJobApplicationService, StoreService]
})
export class StaffDirectoryComponent extends CommonComponent implements OnInit { 
    courseDetails: any;
    DefaultProfileImagePath = 'assets/images/profile/profile.jpg';
    onLoadApi = false;
    staffDetailsLength: any;
    isClassTeacher = false;
    constructor(@Inject(LOCALE_ID) public locale: string, private staffJobApplicationService: StaffJobApplicationService, public storeService: StoreService) {
        super();
    } 
    ngOnInit(): void {
        this.getStaff();
    }
    getStaff(): void { 
        this.staffJobApplicationService.fetchStaffDetailsByStudentId()
        .subscribe(res => this.setStaffData(res), err => this.errorResponse(err));
    }
    setStaffData(res): void {
        this.courseDetails = res.staffDirectoryDataView;
        this.isClassTeacher = (this.courseDetails != null ? (this.courseDetails.classTeacherName === '' ? false : true) : false);
        this.staffDetailsLength = (this.isClassTeacher ? 1 : (this.courseDetails != null ? (this.courseDetails.staffDetails.length !== 0 ? 
            this.courseDetails.staffDetails.length : 0)  : 0));
        if (this.courseDetails) {
            this.courseDetails.staffDetails.unshift({
                staffName: this.courseDetails.classTeacherName,
                fileNameWithExtension: this.courseDetails.fileNameWithExtension,
                courseDetails: [{
                    courseName: 'Class Teacher'
                }]
            }); 
        }
        this.onLoadApi = true;
    } 
    getFormatedName(data): string { 
        return data.replace(/,\s*$/, '');
    }
    getFormatedCourses(courses): any{
        let data = '';
        for (const course of courses){
            if (course.courseName !== null){
                data += course.courseName + ', ' ;
            }
        }
        return data ? this.getFormatedName(data) : '---'; 
    }
}


