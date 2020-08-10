import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';

import { UsersService } from 'app/service/academic-service';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { CommonService } from 'app/service/common.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-school-admin',
  templateUrl: './school-admin.component.html',
  styleUrls: ['./school-admin.component.scss']
})
export class SchoolAdminComponent extends CommonComponent implements OnInit {


  schools: any = [];
  display = false;

  // Tab Conditions 
  showUsers = false;
  showSchoolDetails = false;
  schoolName: any;
  index: any = 0;
  selectedChanged: string;
  HttpStatus: any;

  showEditSchoolDetails = false;
  showSequenceConfiguartion = false;
  showSchoolInfrastructure: boolean;
  showServiceConfiguration = false;
  schoolid: any;
  selectedSchoolDetails: any;

  constructor(private schoolUserService: UsersService, private router: Router, public commonService: CommonService,
    public snackBar: MatSnackBar, public location: Location) {
    super();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event): void {

    this.switchTabs(window.location.hash);
  }

  ngOnInit(): void {

    // status codes
    this.HttpStatus = require('http-status-codes');

    this.schoolName = JSON.parse(localStorage.getItem('_s'));
    this.schoolName != null ? this.getAllSchools(this.schoolName.id) : this.getAllSchools(null);

    if (!window.location.hash) {
      this.selected(this.index);
    }
    else {
      this.switchTabs(window.location.hash);
    }

  }


  // get All Institutes
  getAllSchools(schoolId: string): void {
    this.schoolUserService.getSchoolList(schoolId).subscribe(response => {
      this.schools = response.schools;
      if (response.statusCode === this.HttpStatus.OK && this.schoolName != null && this.schoolName.id != null) {
        this.schools.forEach(element => {
          if (element.isCheck) {
            this.schoolName.id = element.id;
            this.schoolid = element.id;
            if (this.schoolName.id != null && this.schoolName != null) {
              this.display = true;
            }
          }
        });
      }
      const selectedSchool = JSON.parse(localStorage.getItem('_s'));
      if (selectedSchool){
        if (this.schools.find(e => e.code === selectedSchool.code)){
          this.schoolid = this.schools.find(e => e.code === selectedSchool.code).id;
          this.display = true;
          this.selectedChanged = this.schoolid;
        }
      } 
    }, error => {
      this.errorResponse(error);
    });
  }
  // End


  // onSelection of Institute
  schoolNameDetails(value: any): void {
    const selectedSchool = this.schools.find(e => e.id === value.value);
   localStorage.setItem('_s', JSON.stringify(selectedSchool));
    this.selectedChanged = value.value;
    this.display = true;
    this.selected(this.index);
    this.commonService.dropDown(value.value);
  }
  // End


  // tab Selection
  selected(value: any): void {
    this.index = value;
    switch (value) {
      case 0: {
        // statements; 
        this.showSchoolDetails = true;
        this.showSchoolInfrastructure = false;
        this.showEditSchoolDetails = false;
        this.showSequenceConfiguartion = false;
        this.showServiceConfiguration = false;
        this.showUsers = false;
        window.location.hash = '';
        break;
      }
      case 1: {
        this.showSchoolInfrastructure = true;
        this.showSchoolDetails = false;
        this.showEditSchoolDetails = false;
        this.showSequenceConfiguartion = false;
        this.showServiceConfiguration = false;
        this.showUsers = false;
        window.location.hash = 'InfraStructure';
        break;
      }
      case 2: {
        this.showUsers = true;
        this.showSchoolDetails = false;
        this.showEditSchoolDetails = false;
        this.showSequenceConfiguartion = false;
        this.showServiceConfiguration = false;
        this.showSchoolInfrastructure = false;
        window.location.hash = 'Users';
        break;
      }
      case 3: {
        this.showEditSchoolDetails = true;
        this.showSchoolDetails = false;
        this.showUsers = false;
        this.showSequenceConfiguartion = false;
        this.showServiceConfiguration = false;
        this.showSchoolInfrastructure = false;
        window.location.hash = 'EditSchoolDetails';
        break;
      }
      case 4: {
        this.showSequenceConfiguartion = true;
        this.showServiceConfiguration = false;
        this.showSchoolDetails = false;
        this.showUsers = false;
        this.showEditSchoolDetails = false;
        this.showSchoolInfrastructure = false;
        window.location.hash = 'SequenceConfiguration';
        break;
      }
      case 5: {
        this.showServiceConfiguration = true;
        this.showSequenceConfiguartion = false;
        this.showSchoolDetails = false;
        this.showUsers = false;
        this.showEditSchoolDetails = false;
        this.showSchoolInfrastructure = false;
        window.location.hash = 'ServiceProviderConfiguration';
        break;
      }
      default: {
        // statements; 
        break;
      }
    }

  }
  addSchool(): void {
    this.router.navigate([RouteConfig._Add_School]);
  }
  // End


  switchTabs(value): void {
    switch (value) {
      case '': {
        this.index = 0;
        break;
      }
      case '#InfraStructure': {
        this.index = 1;
        break;
      }
      case '#Users': {
        this.index = 2;
        break;
      }
      case '#EditSchoolDetails': {
        this.index = 3;
        break;
      }
      case '#SequenceConfiguration': {
        this.index = 4;
        break;
      }
      case '#ServiceProviderConfiguration': {
        this.index = 5;
        break;
      }
      default: {
        // statements; 
        break;
      }
    }
    this.selected(this.index);
  }

  getSchoolNameByValue(value: any): any {
   this.selectedSchoolDetails = this.schools.filter(x => x.id === value)[0];    
   return this.selectedSchoolDetails;
  }

}
