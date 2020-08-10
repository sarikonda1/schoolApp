import { Component, Input, TemplateRef, ViewChild, ElementRef, OnInit, AfterViewInit, OnChanges, QueryList, ChangeDetectorRef, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as HttpStatus from 'http-status-codes';
import { AppSettings, Pattern } from 'app/app.constants';

import { SchoolInfrastructureService } from 'app/service/school-admin/api/school-Infrastructure.service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from 'app/shared/common/common.component';

import { ListOfSchoolBuildingsView } from 'app/models/school-admin/list-Of-school-buildings-view';
import { SchoolRoomView } from 'app/models/school-admin/school-room-view';
import { SchoolRoomDataView } from 'app/models/school-admin/school-room-data-view';
import { SchoolFloorDataView } from 'app/models/school-admin/school-floor-data-view';
import { SchoolFloorView } from 'app/models/school-admin/school-floor-view';
import { DialogView } from 'app/models/dialog-view';
import { SchoolBuildingUpdateView } from 'app/models/school-admin/school-building-update-view';

@Component({
  selector: 'app-school-infrastructure',
  templateUrl: './school-infrastructure.component.html',
  styleUrls: ['./school-infrastructure.component.scss'],
  animations: fuseAnimations,
})
export class SchoolInfrastructureComponent extends CommonComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: any;
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  @ViewChild('floorname') floorname: ElementRef;
  @ViewChild('roomName') roomName: ElementRef;
  @ViewChildren('buildingName') buildingName: QueryList<any>;

  buildingsViewList: ListOfSchoolBuildingsView;
  schoolRoomView: SchoolRoomView;
  updateRoomView: SchoolRoomDataView;
  updateFloorView: SchoolFloorDataView;
  updateBuildingView: SchoolBuildingUpdateView;
  addRoomView: SchoolFloorView;
  dialogData: DialogView;

  addBuildingForm: FormGroup;
  floorsForm: FormGroup;
  addFloorForm: FormGroup;
  roomsForm: FormGroup;

  buildingIcons = true;
  buildingFormShow = false;
  addBuildingFormSubmitted = true;
  editFloor = false;
  buildingDetailsShow = false;
  addFloor = false;
  floorDetails: boolean;
  floorHeader = true;
  editFloorName = false;
  editRoomForm = false;
  editRoom = false;
  isAddRoomShow = true;
  isFloorEdit: boolean;
  isNewFloor = false;
  roomFormSubmitted = true;
  closeAddPanel = false;
  isBuildingEdit: boolean;
  floorIsValid = true;
  addRooms: boolean;
  desiableForm = false;
  desiableRoomForm = false;
  submitBtnDisable = false;

  buildingDetails: any;
  schoolBuildings: any;
  floorsIndex: any;
  buildingId: any;
  buildingData: any;
  roomDetails: any;
  roomIndex: any;
  roomId: any;
  roomTypesList: any = [];
  coustomDialog: any;
  desiablePage: boolean;
  roomCount = 0;
  floorsCount = 0;
  innerWidth: number;
  desiableFloorForm: boolean;
  addRoomBtnDisable = false;

  constructor(private _fb: FormBuilder, private SchoolInfrastrService: SchoolInfrastructureService, public commonService: CommonService,
    public dialog: MatDialog, public snackBar: MatSnackBar, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.updateFloorView = {
      name: '',
      number: '',
      id: ''
    };
    this.addRoomView = {
      name: '',
      schoolBuildingId: ''
    };
    this.updateBuildingView = {
      id: '',
      code: '',
      name: '',
      schoolId: ''
    };
    this.buildingsViewList = {
      schoolBuildings: [],
      schoolId: ''
    };
    // Fetch All Buildings Details
    this.getBuildings();
    // Rooms Types for Drop Down
    this.roomTypes();

    // Initialise Buildings Form
    this.addBuildingForm = this._fb.group({
      buildings: this._fb.array([this.buildingFields()]),
    });
    // Floors Form
    this.floorsForm = this._fb.group({
      floorName: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      floorNumber: new FormControl('', Validators.maxLength(10)),
    });
    // Rooms Form
    this.roomsForm = this._fb.group({
      floorId: new FormControl(),
      rooms: this._fb.group({
        id: new FormControl(null),
        name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
        roomNumber: new FormControl('', [Validators.maxLength(10)]),
        roomCapacity: new FormControl('', [Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(999)]),
        typeId: new FormControl('', Validators.required)
      }),
    });
    this.getdeviceSize();
  }

  ngOnChanges(): void {
    this.buildingDetailsShow = false;
    this.buildingIcons = true;
    this.getBuildings();
  }

  getdeviceSize(): void {
    this.innerWidth = window.innerWidth - 1025;
  }
  // get All Buildings
  getBuildings(): void {
    this.SchoolInfrastrService.getSchoolbuildings(this.data).subscribe((res: any) => this.resBuildings(res),
      error => {
        this.errorResponse(error);
      });
  }
  resBuildings(data: any): void {
    this.schoolBuildings = data.schoolBuildings;
  }
  // Get Room Types for Drop downs
  roomTypes(): void {
    this.SchoolInfrastrService.getRoomTypes().subscribe(res => this.roomTypeRes(res));
  }
  roomTypeRes(data: any): void {
    for (let i = 0; i < data.roomTypes.length; i++) {
      this.roomTypesList.push({ value: data.roomTypes[i].id, label: data.roomTypes[i].name });
    }
  }

  // return type for educaion details form
  get addRowBuildingForm(): FormArray {
    return <FormArray>this.addBuildingForm.get('buildings');
  }
  // list all your form controls here, which belongs to your form array
  buildingFields(): FormGroup {
    return this._fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      code: new FormControl('', [Validators.maxLength(10)])
    });
  }

  // return add rooms form
  get addRoomForm(): FormArray {
    return <FormArray>this.roomsForm.get('rooms');
  }
  // Declare Rooms Fields
  roomFeilds(): FormGroup {
    return this._fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      roomNumber: new FormControl('', [Validators.maxLength(10)]),
      roomCapacity: new FormControl('', [Validators.pattern(Pattern.NUMBER_PATTERN), Validators.min(1), Validators.max(999)]),
      typeId: new FormControl('', Validators.required)
    });
  }
  // on New Building icon click
  newBuilding(): void {
    this.desiablePage = true;
    this.commonService.setOverlay(AppSettings.SHOW);
    this.buildingIcons = false;
    this.buildingFormShow = true;
    this.cd.detectChanges();
    this.buildingName.last.nativeElement.focus();
  }
  // // on Building Form Cancel Button
  onBuildingCancel(): void {
    this.commonService.setOverlay(AppSettings.HIDE);
    this.buildingIcons = true;
    this.buildingFormShow = false;
    this.addBuildingForm.reset();
    const controls = <FormArray>this.addBuildingForm.controls['buildings'];
    for (let i = controls.length - 1; i >= 0; i--) {
      controls.removeAt(i);
    }
    controls.push(this.buildingFields());
  }
  // Deleting a row of AddBuilding onClick ReMove
  onClearBuilding(index: number): void {
    const control = <FormArray>this.addBuildingForm.controls['buildings'];
    control.removeAt(index);
  }
  // Adding a row of AddBuilding  onClick AddBuilding Button
  addNewBuilding(): void {
    this.commonService.setOverlay(AppSettings.SHOW);
    this.isBuildingEdit = false;
    // this.addBuildingFormSubmitted = false;
    const control = <FormArray>this.addBuildingForm.controls['buildings'];
    control.push(this.buildingFields());
    this.cd.detectChanges();
    this.buildingName.last.nativeElement.focus();
  }
  // On Submit click of Buildings
  onSubmitBuildings(data: any): void {
    this.addBuildingFormSubmitted = true;
    if (data.status === AppSettings.VALID) {
      this.submitBtnDisable = true;
      if (!this.isBuildingEdit) {
        this.buildingsViewList.schoolBuildings = data.value.buildings;
        this.buildingsViewList.schoolId = this.data;
        this.SchoolInfrastrService.addBuildings(this.buildingsViewList).subscribe(res => { this.buildingSubmitResponce(res); }, error => {
          this.submitBtnDisable = false, this.errorResponse(error);
        });
      }
      else {
        this.updateBuildingView.code = data.value.buildings[0].code;
        this.updateBuildingView.name = data.value.buildings[0].name;
        this.updateBuildingView.id = this.buildingId;
        this.updateBuildingView.schoolId = this.data;
        this.SchoolInfrastrService.updateSchoolBuilding(this.updateBuildingView).subscribe(res => this.buildingSubmitResponce(res), error => {
          this.submitBtnDisable = false;
          this.errorResponse(error);
        });
      }
    }
  }
  // Buildings Responce
  buildingSubmitResponce(res: any): void {
    this.openSnackBar(res.messages.ResultMessage);
    // this.addBuildingFormSubmitted = false;
    this.submitBtnDisable = false;
    if (res.statusCode === HttpStatus.OK) {
      if (this.isBuildingEdit) {
        this.coustomDialog.close();
        this.buildingAllDetails();
      }
      else {
        this.getBuildings();
        this.onBuildingCancel();
      }
    }
    else {
      this.closeAddPanel = false;
    }
  }
  // on Building Click to 
  onBuildingClick(data): void {
    this.roomCount = 0;
    this.floorsCount = 0;
    this.buildingId = data.id;
    this.buildingData = data;
    this.buildingDetails = [];
    this.buildingAllDetails();
  }
  // Get all Building Details(Flloors and Rooms)
  buildingAllDetails(): void {
    this.buildingDetailsShow = true;
    this.buildingIcons = false;
    this.SchoolInfrastrService.getBuildingFloorsAndRooms(this.buildingId).subscribe(res => this.buildingDetailsRes(res), error => {
      this.errorResponse(error);
    });
  }
  buildingDetailsRes(data: any): void {
    this.buildingData.name = data.schoolBuildingData.schoolBuildingName;
    this.buildingData.code = data.schoolBuildingData.schoolBuildingCode;
    this.buildingDetails = data.schoolBuildingData;
    this.floorAndRoomsCount();
  }
  onBuildingDelete(): void {
    const dialogRef = this.commonService.dialog(AppSettings.DELETE_CONFORMATION, true, AppSettings.No, AppSettings.YES);

    // Conformation for Delete Building
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.SchoolInfrastrService.deleteSchoolBuilding(this.buildingId).subscribe(res => this.buildingDeleteRes(res), error => {
          this.errorResponse(error);
        });
      }
    });

  }
  buildingDeleteRes(data): void {
    this.openSnackBar(data.messages.ResultMessage);
    if (data.statusCode === HttpStatus.OK) {
      this.getBuildings();
      this.onBackClick();
    }
    else {
      this.closeAddPanel = false;
    }
  }
  // on Floor edit
  editFloorDetails(floorIndex): void {
    setTimeout(() => this.floorname.nativeElement.focus());
    this.desiableRoomForm = false;
    this.desiableForm = true;
    this.editFloor = true;
    this.isFloorEdit = true;
    this.floorsIndex = floorIndex;
    this.editFloorName = true;
    this.isNewFloor = false;
    this.addRoomBtnDisable = true;
    this.commonService.setOverlay(AppSettings.SHOW);
    this.floorsForm.controls['floorName'].setValue(this.buildingDetails.schoolFloors[floorIndex].name)
  }
  // on Floor Submit
  onFloorSubmit(data, floorId): void {
    this.floorIsValid = true;
    this.floorsForm.controls.floorName.markAsTouched();
    if (data.status === AppSettings.VALID) {
      this.submitBtnDisable = true;
      if (this.isNewFloor) {
        this.addRoomView.name = data.value.floorName;
        this.addRoomView.schoolBuildingId = this.buildingId;
        this.SchoolInfrastrService.addFloor(this.addRoomView).subscribe(res => this.floorRes(res), error => {
          this.submitBtnDisable = false;
          this.errorResponse(error);
        });
      }
      else {
        this.updateFloorView.id = floorId;
        this.updateFloorView.name = data.value.floorName;
        this.SchoolInfrastrService.updateFloor(this.updateFloorView).subscribe(res => this.floorRes(res), error => {
          this.submitBtnDisable = false;
          this.errorResponse(error);
        });
      }
    }
  }
  floorRes(data): void {
    this.submitBtnDisable = false;
    this.desiableForm = false;
    this.openSnackBar(data.messages.ResultMessage);
    this.editFloor = false;
    this.isFloorEdit = false;
    this.editFloorName = false;
    this.isNewFloor = false;
    this.commonService.setOverlay(AppSettings.HIDE);
    this.buildingAllDetails();
    this.addRoomBtnDisable = false;

  }
  // on Close Floor Form(X button click)
  closeFloorForm(): void {
    this.commonService.setOverlay(AppSettings.HIDE);
    this.desiableRoomForm = true;
    this.desiableForm = false;
    // this.floorIsValid = false;
    this.editFloor = false;
    this.isNewFloor = false;
    this.addRoomBtnDisable = false;
    this.isFloorEdit = false;
    this.editFloorName = false;
    this.buildingDetails.schoolFloors.forEach((element: any, i: any) => {
      const index = (element.id === '');
      if (index) {
        this.buildingDetails.schoolFloors.splice(i, 1);
      }
    });
    this.floorsForm.reset();
  }
  // on Room Edit click
  onRoomEdit(room, roomIndex, floorIndex): void {
    this.commonService.setOverlay(AppSettings.SHOW);
    this.editRoom = true;
    this.floorsIndex = floorIndex;
    this.roomIndex = roomIndex;
    this.roomId = room.id;
    this.roomDetails = room;
    this.editFloor = true;
    this.desiableForm = true;
    this.desiableRoomForm = true;
    setTimeout(() => this.roomName.nativeElement.focus());
    setTimeout(() => this.scrollIntoViewById('rooms-form'));
  }
  // on Cancel Button at Room Form
  cancelRoom(): void {
    this.commonService.setOverlay(AppSettings.HIDE);
    this.desiableForm = false;
    this.desiableRoomForm = true;
    this.isAddRoomShow = true;
    this.editRoom = false;
    this.roomId = null;
    this.editRoomForm = false;
    this.editFloor = false;
    this.addRoomBtnDisable = false;
  }
  // On Back Button Click
  onBackClick(): void {
    this.isFloorEdit = false;
    this.addBuildingForm.reset();
    this.isBuildingEdit = false;
    this.buildingDetailsShow = false;
    this.buildingIcons = true;
    this.getBuildings();
    this.cancelRoom();
  }
  // on New Room Click
  onNewRoomClick(floorIndex: any): void {
    this.desiableForm = true;
    this.desiableRoomForm = true;
    this.roomsForm.reset();
    this.roomFormSubmitted = true;
    this.editRoom = false;
    this.isAddRoomShow = false;
    this.addRooms = true;
    this.editRoomForm = true;
    this.floorsIndex = floorIndex;
    this.editFloor = true;
    this.commonService.setOverlay(AppSettings.SHOW);
    setTimeout(() => this.roomName.nativeElement.focus());
    setTimeout(() => this.scrollIntoViewById('rooms-form'));
  }

  onAddFloorClick(): void {
    setTimeout(() => this.floorname.nativeElement.focus());
    // this.floorIsValid = false;
    this.commonService.setOverlay(AppSettings.SHOW);
    this.desiableRoomForm = false;
    this.desiableForm = true;
    this.editFloor = true;
    this.isFloorEdit = true;
    this.editFloorName = true;
    this.editRoomForm = false;
    this.isNewFloor = true;
    this.buildingDetails.schoolFloors.push({ id: '' });
    this.floorsIndex = this.buildingDetails.schoolFloors.length - 1;
  }
  // list all your form controls here, which belongs to your form array
  floorRows(): FormGroup {
    return this._fb.group({
      name: new FormControl(''),
    });
  }
  // on Delete Floor Click
  deleteFloor(floor: any): void {
    const dialogRef = this.commonService.dialog(AppSettings.DELETE_CONFORMATION, true, AppSettings.No, AppSettings.YES);

    // Conformation for Delete CourseCategory
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.SchoolInfrastrService.deleteFloor(floor.id).subscribe(res => this.deleteFloorRes(res), error => {
          this.errorResponse(error);
        });
      }
    });
  }
  // Delete Floor Responce
  deleteFloorRes(data): void {
    this.openSnackBar(data.messages.ResultMessage);
    this.floorsForm.reset();
    this.buildingAllDetails();
  }
  // On Room Submit Form
  onSubmitRoom(data: any, floorId: any, roomId): void {
    this.roomFormSubmitted = true;
    if (data.status === AppSettings.VALID) {
      this.submitBtnDisable = true;
      if (!this.editRoom) {
        this.schoolRoomView = data.value.rooms;
        this.schoolRoomView['schoolFloorId'] = floorId;
        this.SchoolInfrastrService.addRoom(this.schoolRoomView).subscribe(res => { this.addRoomRes(res); }, error => {
          this.submitBtnDisable = false;
          this.errorResponse(error);
        });
      }
      else {
        this.updateRoomView = data.value.rooms;
        this.updateRoomView['id'] = roomId;
        this.SchoolInfrastrService.updateRoom(this.updateRoomView).subscribe(res => { this.addRoomRes(res); }, error => {
          this.submitBtnDisable = false;
          this.errorResponse(error);
        });
      }
    }
  }
  // Room responce
  addRoomRes(data: any): void {
    this.submitBtnDisable = false;
    this.desiableRoomForm = true;
    this.desiableForm = false;
    this.openSnackBar(data.messages.ResultMessage);
    if (data.statusCode === HttpStatus.OK) {
      this.buildingAllDetails();
      this.roomsForm.reset();
      this.editRoomForm = false;
      this.editFloor = false;
      this.editRoom = false;
      this.cancelRoom();
    }
    else {
      this.closeAddPanel = false;
    }
  }

  // On Delete Room click
  onDeleteRoom(data: any): void {
    const dialogRef = this.commonService.dialog(AppSettings.DELETE_CONFORMATION, true, AppSettings.No, AppSettings.YES);

    // Conformation for Delete CourseCategory
    dialogRef.afterClosed().subscribe(action => {
      if (action === AppSettings.YES) {
        this.SchoolInfrastrService.deleteRoom(data).subscribe(res => this.deleteRoomRes(res), error => {
          this.errorResponse(error);
        });
      }
    });
  }
  // Delete Room Responce
  deleteRoomRes(data: any): void {
    this.openSnackBar(data.messages.ResultMessage);
    if (data.statusCode === HttpStatus.OK) {
      this.buildingAllDetails();
    }
    else {
      this.closeAddPanel = false;
    }

  }
  // on Building Edit
  onBuildingEdit(): void {
    this.isBuildingEdit = true;
    this.coustomDialog = this.dialog.open(this.customTemplate, { disableClose: true, width: '400px' });
    this.buildingAllDetails();
  }
  closeDialog(): void {
    this.commonService.setOverlay(AppSettings.HIDE);
    this.addBuildingForm.reset();
    this.isBuildingEdit = false;
    this.dialog.closeAll();
  }


  // trimFloorName(key: string): void {
  //   this.floorsForm.controls[key].setValue(this.commonService.trimSpaces(this.floorsForm.controls[key].value));
  // }

  // Count for Rooms and Floors
  floorAndRoomsCount(): void {
    this.roomCount = 0;
    this.floorsCount = this.buildingDetails.schoolFloors.length;
    this.buildingDetails.schoolFloors.forEach(element => {
      this.roomCount = this.roomCount + element.schoolRooms.length;
    });
  }
  trimTextBoxSpacesForRooms(form, control): void {
    form.get(control).patchValue(this.commonService.trimSpaces(form.value[control]));
  }
}
