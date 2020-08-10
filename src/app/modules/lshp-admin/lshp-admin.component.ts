import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

import { fuseAnimations } from '../../../@fuse/animations';
import { Observable, } from 'rxjs';
import { InstitutionService } from 'app/service/academic-service/api/institution.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router } from '@angular/router';
import { UsersService } from 'app/service/academic-service';
import { RouteConfig } from 'app/url.config';
import { MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
@Component({
    selector: 'lshp-admin',
    templateUrl: './lshp-admin.component.html',
    styleUrls: ['./lshp-admin.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LshpAdminComponent extends CommonComponent implements OnInit {

    // DropDown Variables 
    institutions: any = [];
    instituteFormControl = new FormControl();
    filteredOptions: Observable<any[]>;
    display = false;
    HttpStatus: any;

    // Tab Conditions 
    showUsers = false;
    showInstituteDetails = false;
    showUserLicence = false;
    currentInstitute: any;
    instituteName: any;
    instituteid: any = '';
    index: any = 0;
    selectedChanged: string;
    selectedUserChanged: string;
    editShow: boolean;
    detailsShow: boolean;
    liscenseShow: boolean;
    userShow: boolean;


    constructor(private institutionService: InstitutionService, private router: Router, private userService: UsersService, public snackBar: MatSnackBar) {
        super();

    }
    @HostListener('window:popstate', ['$event'])
    onPopState(event): void {
     this.selectTabByHash(window.location.hash);
    }
  
    ngOnInit(): void {
        this.userService.userCheckUserAccessGet().subscribe(response => this.checkLoginDetails(response));
        if (!window.location.hash) {
            this.selected(this.index);
          }
    }


    checkLoginDetails(response: any[]): void {
        if (response[0].schoolId != null || response[0].instituteId != null) {
            this.editShow = false;
            this.currentInstitute = response.find(x => x.instituteId).instituteId;
            this.selectedChanged = this.currentInstitute;
            this.currentInstitute != null ? this.getAllInstitutes(this.currentInstitute) :
                this.selected(this.index);
        }
        else {
            this.editShow = true;
            this.getAllInstitutes(null);
            // this.selected(this.index);
        }
    }

    displayFn(user?: any): string | undefined {
        return user ? user.name : undefined;
    }


    // get All Institutes
    getAllInstitutes(instituteId: string): void {
        this.institutionService.getInstitutions(instituteId).subscribe(response => {
            this.institutions = response.institutes;
            const currentInstituteCode = localStorage.getItem('_cic') || '';
            if (currentInstituteCode && !this.currentInstitute) {
                const currentInstituteInfo = _.find(this.institutions, {code: currentInstituteCode});
                this.selectedChanged = (currentInstituteInfo === null || currentInstituteInfo === undefined) ?
                    this.currentInstitute : currentInstituteInfo['id'];
                this.instituteid =  this.selectedChanged;
                this.currentInstitute =  this.selectedChanged;
            }
            if (this.currentInstitute != null) {
               // this.institutions.forEach((element, index) => {
                    if (!window.location.hash) {
                        this.selected(0);
                    }
                    else {
                        this.selectTabByHash(window.location.hash);
                    }
                    this.display = true;
               // });
            }
        }, error => {
            this.errorResponse(error);
        });
    }
    // End

    // onSelection of Institute
    instituteNameDetails(value: any): void {
       this.selectedChanged = value.value;
       const currentInstituteInfo = _.find(this.institutions, {id: value.value});
       if (currentInstituteInfo !== null && currentInstituteInfo !== undefined) {
           // @ts-ignore
           localStorage.setItem('_cic', currentInstituteInfo.code);
       }
        this.display = true;
        this.selected(this.index);

    }
    // End

    // tab Selection
    selected(value: any): void {
        this.index = value;
        switch (value) {
          case 0:
            window.location.hash = '';
            this.userShow = false;
            this.liscenseShow = false;
            this.detailsShow = true;
            break;
          case 1:
              this.detailsShow = false;
              this.userShow = false;
              this.liscenseShow = true;
            window.location.hash = 'License';
            break;

          case 2:
            this.detailsShow = false;
            this.liscenseShow = false;
              this.userShow = true;
            window.location.hash = 'Users';
            break;
        }
    }

    // tab Selection
    selectTabByHash(value: any): void {
        switch (value) {
            case '#License':
                this.detailsShow = false;
                this.userShow = false;
                this.liscenseShow = true;
                this.index = 1;
                break;

            case '#Users':
                this.detailsShow = false;
                this.liscenseShow = false;
                this.userShow = true;
                this.index = 2;
                break;
            default :
                this.userShow = false;
                this.liscenseShow = false;
                this.detailsShow = true;
                this.index = 0;
                break;
        }
    }

    addInstitute(): void {
        this.router.navigate([RouteConfig._Add_Institute]);
    }
    // End
}
