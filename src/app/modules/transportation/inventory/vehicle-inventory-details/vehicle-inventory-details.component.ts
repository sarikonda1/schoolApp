import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
@Component({
  selector: 'app-vehicle-inventory-details',
  templateUrl: './vehicle-inventory-details.component.html',
  styleUrls: ['./vehicle-inventory-details.component.scss']
})
export class VehicleInventoryDetailsComponent extends CommonComponent implements OnInit {
  index: any;
  vehicleInsurance: boolean;
  showShowServiceHistory: boolean;
  showVehicleDetails = true;
  showPollutionCheck: boolean;
  showInspection: boolean;
  selectedChanged: any;

  constructor(public location: Location, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  // tab Selection
  selected(value: any): void {
    this.index = value;
    switch (value) {
      case 0: {
        // statements; 
        this.showShowServiceHistory = false;
        this.showVehicleDetails = true;
        this.vehicleInsurance = false;
        this.showPollutionCheck = false;
        this.showInspection = false;
        window.location.hash = 'VehicalDetails';
        break;
      }
      case 1: {
        this.showShowServiceHistory = true;
        this.showVehicleDetails = false;
        this.vehicleInsurance = false;
        this.showPollutionCheck = false;
        this.showInspection = false;
        window.location.hash = 'ServiceHistory';
        break;
      }
      case 2: {
        this.showShowServiceHistory = false;
        this.showVehicleDetails = false;
        this.vehicleInsurance = true;
        this.showPollutionCheck = false;
        this.showInspection = false;
        window.location.hash = 'Insurance';
        break;
      }
      case 3: {
        this.showShowServiceHistory = false;
        this.showVehicleDetails = false;
        this.vehicleInsurance = false;
        this.showPollutionCheck = true;
        this.showInspection = false;
        window.location.hash = 'PollutionCheck';
        break;
      }
      case 4: {
        this.showShowServiceHistory = false;
        this.showVehicleDetails = false;
        this.vehicleInsurance = false;
        this.showPollutionCheck = false;
        this.showInspection = true;
        window.location.hash = 'Inspection';
        break;
      }
      default: {
        // statements; 
        break;
      }
    }
    /*const instituteDetails = JSON.parse(localStorage.getItem('_s'));
    if (instituteDetails != null) {
      this.selectedChanged = JSON.parse(localStorage.getItem('_s')).id;
    }*/
  }

  back(): void {
    this.router.navigate([RouteConfig._Vehicle_Details]);
  }

}
