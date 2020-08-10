import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { CommonComponent } from 'app/shared/common/common.component';
import { TimeValidator } from 'app/shared/custom-timepicker/custom-timepicker.validators';
import { RoutingService } from 'app/service/Transport/routing.service';
import { SearchTransportRoutesView } from '../model/search-transport-routes-view';
import { AppSettings } from 'app/app.constants';
import { ScheduleService } from 'app/service/Transport/schedule.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { StaffCommonService } from 'app/service/staff/staffCommon.service';
import { TransportScheduleView } from '../model/transport-schedule-view';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import { TransportScheduleRoutesUpdateView } from '../model/transport-schedule-routes-update-view';

@Component({
  selector: 'app-add-transport-schedules',
  templateUrl: './add-transport-schedules.component.html',
  styleUrls: ['./add-transport-schedules.component.scss'],
  providers: [RoutingService, ScheduleService, ClassTimetableService, StaffCommonService]
})
export class AddTransportSchedulesComponent extends CommonComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('scheduleform') scheduleform;
  currentComponent = 'AddTransportSchedulesComponent';
  rows: any = [];
  routeTypeList: any[] = [];
  routesList: any[] = [];
  driversList: any[] = [];
  vehiclesList: any[] = [];
  driversAssistantsList: any[] = [];
  tableName = 'Routes Covered in this schedule';
  validate = true;
  scheduleForm: FormGroup;
  routeListForm: FormGroup;
  routeSelectionForm: FormGroup;
  schoolBoardsList: any = [];
  classes: any = [];
  activeColumn: any = '';
  sortDirection: any = '';
  staffList: any = [];
  isOnEdit = false;
  teachersData: any = [];
  selectedSchoolBoardId: any;
  schoolHasBoard = false;
  padding = false;
  updateRouteId: any;
  firstClick = true;
  filterViewModel: SearchTransportRoutesView;
  transportSchedule: TransportScheduleView;
  isShowRoutesForm = false;
  @ViewChild('transportTemplate') transportTemplate;
  constructor(private routingService: RoutingService, private _formBuilder: FormBuilder, private classTimetableService: ClassTimetableService,
    private staffCommonService: StaffCommonService, private scheduleService: ScheduleService, public dialogRef: MatDialog,
    public commonService: CommonService, private router: Router, private route: ActivatedRoute, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.setScheduleForm();
    this.getRouteTypes();
    this.getStaff();
    this.getStaff(true);
    this.getVehicles();
    this.initializeFilterView();
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.updateRouteId = params.id;
        // this.isShowRoutesForm = true;
        this.getTransportScheduleDetails();
      }
      else {
        this.focus();
      }
    });
  }

  focus(): void {
    if (document.getElementById('focusField')) {
      document.getElementById('focusField').focus();
    }
  }
  getTransportScheduleDetails(): void {
    this.scheduleService.transportSchedulesDetails(this.updateRouteId)
      .subscribe(res => {
        this.setTransportScheduleDetails(res.transportSchedulesDataView);
      }, error => {
        this.errorResponse(error);
      });
  }
  setTransportScheduleDetails(response): void {
    this.scheduleForm.patchValue(response);
    response.transportScheduleRoutesDataView.forEach((element, i) => {
      (this.routeListForm.controls['routesList'] as FormArray).push(this.setRouteListArray(element));
    });
    this.getRoutes();
    this.focus();
  }
  getRoutes(): void {
    const id = this.routeTypeList.find(e => {
      return e.code === this.scheduleForm.value.inboundOrOutbound;
    }).id;
    this.scheduleService.fetchTransportRoutes(id)
      .subscribe(res => this.setRoutes(res));
  }
  setRoutes(response): void {
    if (response) {
      this.routesList = response.transportScheduleDetailsView;
    }
    this.routeListForm.value.routesList.map((e, i) => {
      this.actionOptions(true, i, true);
    });
  }
  getStaff(assistant = false): void {
    let code;
    if (assistant) {
      code = AppSettings.DRIVER_ASSISTANT_STAFF_CODE;
    } else {
      code = AppSettings.DRIVER_STAFF_CODE;
    }
    this.staffCommonService.fetchStaffs(code)
      .subscribe(res => this.setStaffData(res, assistant));
  }
  getVehicles(): void {
    this.scheduleService.fetchVehicle()
      .subscribe(res => this.setVehiclesData(res));
  }
  setVehiclesData(response): void {
    this.vehiclesList = response.commonViewModel;
  }
  setStaffData(response, assistant): void {
    if (assistant) {
      this.driversAssistantsList = response;
    } else {
      this.driversList = response;
    }
  }
  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      routeName: [],
      routeNumber: [],
      routeTypeId: [],
      routeDescription: [],
    };
  }
  setRouteListArray(route): any {
    return this._formBuilder.group({
      id: [route.id],
      routeNumber: [route.routeNumber, [Validators.required]],
      transportRouteId: [route.transportRouteId, [Validators.required]],
      routeDescription: [route.routeDescription, [Validators.required]],
      vehicleId: [route.vehicleId, [Validators.required]],
      driverStaffId: [route.driverStaffId, [Validators.required]],
      assistantStaffId: [route.assistantStaffId, [Validators.required]]
    });
  }
  onTypeChange($event): void {
    this.routeListForm.setControl('routesList', this._formBuilder.array([]));
    this.routesList = [];
    this.getRoutes();
    this.resetAllDropDowns();
  }
  onRouteChange($event): void {
    const route = this.routesList.find(e => {
      return e.id === $event.value;
    });
    this.routeSelectionForm.patchValue({ routeNumber: route.routeNumber, routeDescription: route.routeDescription });
  }
  getRouteTypes(): void {
    this.routingService.routeTypes()
      .subscribe(res => this.routeTypeList = res);
  }
  removeRoute(route, i): void {
    this.actionOptions(false, route);
    (this.routeListForm.controls['routesList'] as FormArray).removeAt(i);
  }
  setScheduleForm(): void {
    this.scheduleForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
      inboundOrOutbound: new FormControl(null, [Validators.required]),
      startTime: new FormControl(null, [TimeValidator.validateTimeRequired]),
      endTime: new FormControl(null, [TimeValidator.validateOnlyTimeRequired])
    });
    this.routeSelectionForm = new FormGroup({
      routeNumber: new FormControl(null),
      routeDescription: new FormControl(null),
      transportRouteId: new FormControl(null),
      vehicleId: new FormControl(null),
      driverStaffId: new FormControl(null),
      assistantStaffId: new FormControl(null)
    });
    this.routeListForm = new FormGroup({
      routesList: this._formBuilder.array([])
    });
  }
  onSelectRoute(): void {
    this.showValidations();
    this.setRoutesValidators();
    if (this.routeSelectionForm.valid && this.scheduleForm.valid) {
      (this.routeListForm.controls['routesList'] as FormArray).push(this.setRouteListArray(this.routeSelectionForm.value));
      this.actionOptions();
      setTimeout(() => this.form.resetForm(), 0);
    }
  }
  actionOptions(disable = true, routeOnIndex = null, onEdit = false): void {
    let route;
    if (disable) {
      route = !onEdit ? this.routeSelectionForm.value : this.routeListForm.value.routesList[routeOnIndex];
    } else {
      route = routeOnIndex.value;
    }
    this.vehiclesList.find(e => {
      return e.id === route.vehicleId;
    }).disable = disable;
    this.driversList.find(e => {
      return e.id === route.driverStaffId;
    }).disable = disable;
    if (this.driversAssistantsList && this.driversAssistantsList.length) {
      this.driversAssistantsList.find(e => {
        return e.id === route.assistantStaffId;
      }).disable = disable;
    }
    this.routesList.find(e => {
      return e.id === route.transportRouteId;
    }).disable = disable;
  }
  addRoutes(): void {

  }
  getLabelById(arrayName, value): string {
    if (value === '' || value === 0) {
      return '';
    }
    let x;
    return (x = this[arrayName] && this[arrayName].find(element => element.id === value)) ? (arrayName === 'routesList' ? x.routeName : x.name) : '';
  }
  onAction(cancel = false): void {
    if (!cancel) {
      this.setRoutesValidators();
      if (!this.scheduleForm.valid) {
        this.showValidations();
        return;
      }
      if (this.updateRouteId) {
        this.transportSchedule = this.scheduleForm.value;
        this.setEndTime();
        this.transportSchedule['transportScheduleRoutesUpdateView'] = [];
        this.routeListForm.value.routesList.forEach(element => {
          if (!element.id) {
            element.id = 0;
          }
          this.transportSchedule['transportScheduleRoutesUpdateView'].push(element);
        });
        this.transportSchedule['id'] = this.updateRouteId;
        this.scheduleService.updateSchedule(this.transportSchedule).subscribe(res => this.onPageAction(res), err => this.errorResponse(err));
      } else {
        this.transportSchedule = this.scheduleForm.value;
        this.setEndTime();
        this.transportSchedule.transportScheduleRoutesView = this.routeListForm.value.routesList;
        this.scheduleService.createSchedule(this.transportSchedule)
          .subscribe(res => this.onPageAction(res), err => this.errorResponse(err));
      }
    } else {
      this.clearRouteValidators();
      this.redirectPage();
    }
  }
  onPageAction(response): void {
    this.updateRouteId = null;
    this.redirectPage();
    this.openSnackBar(response.messages.ResultMessage);
  }
  redirectPage(): void {
    this.router.navigate([RouteConfig._Transport_Schedule]);
  }
  resetAllDropDowns(): void {
    this.vehiclesList.map(e => {
      e.disable = false;
    });
    this.driversList.map(e => {
      e.disable = false;
    });
    this.driversAssistantsList.map(e => {
      e.disable = false;
    });
    this.routesList.map(e => {
      e.disable = true;
    });
  }
  showValidations(): void {
    this.scheduleform.submitted = true;
    this.scheduleForm.controls.startTime.markAsDirty();
    this.scheduleForm.controls.startTime.updateValueAndValidity();
  }
  setRoutesValidators(): void {
    this.routeSelectionForm.controls.transportRouteId.setValidators([Validators.required]);
    this.routeSelectionForm.controls.transportRouteId.updateValueAndValidity();

    this.routeSelectionForm.controls.vehicleId.setValidators([Validators.required]);
    this.routeSelectionForm.controls.vehicleId.updateValueAndValidity();

    this.routeSelectionForm.controls.driverStaffId.setValidators([Validators.required]);
    this.routeSelectionForm.controls.driverStaffId.updateValueAndValidity();

    this.routeSelectionForm.controls.assistantStaffId.setValidators([Validators.required]);
    this.routeSelectionForm.controls.assistantStaffId.updateValueAndValidity();
  }
  clearRouteValidators(): void {
    this.routeSelectionForm.controls.transportRouteId.clearValidators();
    this.routeSelectionForm.controls.transportRouteId.updateValueAndValidity();

    this.routeSelectionForm.controls.vehicleId.clearValidators();
    this.routeSelectionForm.controls.vehicleId.updateValueAndValidity();

    this.routeSelectionForm.controls.driverStaffId.clearValidators();
    this.routeSelectionForm.controls.driverStaffId.updateValueAndValidity();

    this.routeSelectionForm.controls.assistantStaffId.clearValidators();
    this.routeSelectionForm.controls.assistantStaffId.updateValueAndValidity();
  }
  setEndTime(): void {
    if (this.scheduleForm.value.endTime) {
      let endTime = this.scheduleForm.value.endTime.trim();
      endTime = endTime.replace(/^([:]*)/g, '');
      this.transportSchedule.endTime = endTime;
    }
  }
  onClickForm(): void {
    if (this.firstClick) {
      this.firstClick = false;
      this.setRoutes(false);
    }
  }
}
