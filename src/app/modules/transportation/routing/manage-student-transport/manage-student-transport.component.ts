import { Component, OnInit, ViewChild, TemplateRef, NgZone, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonComponent } from 'app/shared/common/common.component';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { StudentTransportService } from 'app/service/student-transport/student-transport.service';
import { StudentTransportView } from '../model/student-transport-view';
import { StudentAdmissionService } from 'app/service/student-admissions-service/student-admission.service';
import { CustomDialogComponent } from 'app/shared/custom-dialog/custom-dialog.component';
import { AppSettings } from 'app/app.constants';
import { RouteConfig } from 'app/url.config';
import { MapsAPILoader } from '@agm/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
declare var google: any;

@Component({
  selector: 'app-manage-student-transport',
  templateUrl: './manage-student-transport.component.html',
  styleUrls: ['./manage-student-transport.component.scss'],
  providers: [StudentTransportService, StudentAdmissionService]
})
export class ManageStudentTransportComponent extends CommonComponent implements OnInit {
  @ViewChild('manualForm') manualForm: any;
  @ViewChild('pickUpForm') pickUpForm: any;
  @ViewChild('dropOffForm') dropOffForm: any;
  @ViewChild('popupMap') popupMap: TemplateRef<any>;
  @ViewChild('picUpLocation')
  private picUpLocation: ElementRef;
  @ViewChild('dropOffLocation')
  private dropOffLocation: ElementRef;
  schedulesList: any[] = [];
  inBoundroutesList: any[] = [];
  outBoundroutesList: any[] = [];
  studentId: any;
  studentInfo: any;
  pickupPoint: FormGroup;
  dropoffPoint: FormGroup;
  studentTransport: FormGroup;
  viewDialog: MatDialogRef<any>;
  validate = true;
  routePoints: any;
  inBound = true;
  studentTransportView: StudentTransportView;
  studentTransportAssignmentInfo: any;
  routePointsData = {
    inBound: [],
    outBound: []
  };
  requestedPoint = {
    inBound: null,
    outBound: null
  };
  studetRouteInfo = {
    inBound: null,
    outBound: null
  };
  constructor(private router: Router, private route: ActivatedRoute,
    public dialog: MatDialog, public commonService: CommonService, private studentTransportService: StudentTransportService, public dialogRef: MatDialog,
    private studentAdmissionService: StudentAdmissionService, public snackBar: MatSnackBar, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
    public changeDetector: ChangeDetectorRef, public location: Location) {
    super();
  }

  ngOnInit(): void {
    this.getSchedules();
    this.studentTransport = new FormGroup({
      assigneeId: new FormControl(null, [Validators.required]),
      requestedPickupAddress: new FormControl(null, Validators.maxLength(180)),
      requestedDropoffAddress: new FormControl(null, Validators.maxLength(180)),
      pickupPointId: new FormControl(null),
      dropoffPointId: new FormControl(null)
    });
    this.pickupPoint = new FormGroup({
      transportScheduleId: new FormControl(null, [Validators.required]),
      transportRouteId: new FormControl(null, [Validators.required]),
      name: new FormControl(null),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
      position: new FormControl(null),
      pointAddres: new FormControl(null),
      id: new FormControl(null)
    });

    this.dropoffPoint = new FormGroup({
      transportScheduleId: new FormControl(null, [Validators.required]),
      transportRouteId: new FormControl(null, [Validators.required]),
      name: new FormControl(null),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
      position: new FormControl(null),
      pointAddres: new FormControl(null),
      id: new FormControl(null)
    });
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.studentId = params.id;
        this.getStudentDetails(this.studentId);
        this.getStudentTrasportAssignmentDetails(this.studentId);
        this.studentTransport.controls.assigneeId.setValue(this.studentId);
      }
    });
    this.studentTransport.controls.requestedPickupAddress.valueChanges.pipe(distinctUntilChanged()).subscribe(val => {
      if (!val) {
        this.requestedPoint.inBound = null;
      }
    });
    this.studentTransport.controls.requestedDropoffAddress.valueChanges.pipe(distinctUntilChanged()).subscribe(val => {
      if (!val) {
        this.requestedPoint.outBound = null;
      }
    });
    this.initializeMap();
    this.initializeMap(true);
  }
  getStudentDetails(id): void {
    this.studentAdmissionService.studentDetails(id)
      .subscribe(res => {
        this.setStudentDetails(res);
      }, error => {
        this.errorResponse(error);
      });
  }
  initializeMap(pickUp = false): void {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(pickUp ? this.picUpLocation.nativeElement : this.dropOffLocation.nativeElement, {
        types: ['establishment']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          const currentMarker = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
            label: '',
            draggable: true,
            name: place.name,
            pointAddres: place.formatted_address.substring(0, 200),
            latlng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }
          };
          if (pickUp) {
            this.requestedPoint.inBound = currentMarker;
          } else {
            this.requestedPoint.outBound = currentMarker;
          }
        });
      });
    });
  }
  setStudentDetails(res): void {
    this.studentInfo = res.studentDetailsView;
  }
  getStudentTrasportAssignmentDetails(id): void {
    this.studentTransportService.fetchTransportAssignment(id).subscribe(res => {
      this.setStudentTransportDetails(res);
    }, error => {
      this.errorResponse(error);
    });
  }
  setStudentTransportDetails(res): void {
    if (res.studentTransportDataView) {
      this.studentTransportAssignmentInfo = res.studentTransportDataView;
      this.studentTransport.patchValue(this.studentTransportAssignmentInfo);

      if (this.studentTransportAssignmentInfo.pickupPoint) {
        if (this.studentTransportAssignmentInfo.pickupPoint.id !== null && this.studentTransportAssignmentInfo.pickupPoint.id !== 0) {
          this.studentTransport.controls.pickupPointId.patchValue(this.studentTransportAssignmentInfo.pickupPoint.id);
          this.pickupPoint.patchValue(this.studentTransportAssignmentInfo.pickupPoint);
          this.getTransportRoutes(this.pickupPoint.value.transportScheduleId);
          this.onSelectRoute(true, true);
        } else {
          this.studentTransportAssignmentInfo.pickupPoint = null;
        }
      }

      if (this.studentTransportAssignmentInfo.dropoffPoint) {
        if (this.studentTransportAssignmentInfo.dropoffPoint.id !== null && this.studentTransportAssignmentInfo.dropoffPoint.id !== 0) {
          this.studentTransport.controls.dropoffPointId.patchValue(this.studentTransportAssignmentInfo.dropoffPoint.id);
          this.dropoffPoint.patchValue(this.studentTransportAssignmentInfo.dropoffPoint);
          this.getTransportRoutes(this.dropoffPoint.value.transportScheduleId, false);
          this.onSelectRoute(false, true);
        } else {
          this.studentTransportAssignmentInfo.dropoffPoint = null;
        }
      }

    }
  }
  getSchedules(): void {
    this.studentTransportService.fetchTransportSchedules()
      .subscribe(res => this.setTransportSchedules(res));
  }
  setTransportSchedules(res): void {
    this.schedulesList = res.typeListViewModels;
  }
  getTransportRoutes(id, inBound = true): void {
    this.studentTransportService.fetchTransportRoutes(id)
      .subscribe(res => this.setTransportRoutes(res, inBound));
  }
  setTransportRoutes(res, inBound = true): void {
    if (inBound) {
      this.inBoundroutesList = res.transportScheduleRoutesView;
    } else {
      this.outBoundroutesList = res.transportScheduleRoutesView;
    }
  }
  clearFormData(formField, inBound = true): void {
    this[inBound ? 'pickupPoint' : 'dropoffPoint'].patchValue({
      transportRouteId: (formField === 'schedule') ? null : this[inBound ? 'pickupPoint' : 'dropoffPoint'].value.transportRouteId,
      name: null,
      latitude: null,
      longitude: null,
      position: null,
      pointAddres: null,
      id: null
    });
    if (inBound) {
      this.studentTransport.patchValue({ pickupPointId: null });
      this.routePointsData.inBound = [];
    } else {
      this.studentTransport.patchValue({ dropoffPointId: null });
      this.routePointsData.outBound = [];
    }
  }
  setValidatorsOnSelect(selectedForm): void {
    this[selectedForm].controls.transportRouteId.setValidators(Validators.required);
    this[selectedForm].controls.transportRouteId.updateValueAndValidity();

    this[selectedForm].controls.transportScheduleId.setValidators(Validators.required);
    this[selectedForm].controls.transportScheduleId.updateValueAndValidity();

    this[selectedForm].controls.pointAddres.clearValidators();
    this[selectedForm].controls.pointAddres.updateValueAndValidity();
  }
  onSelectRoute(inBound = true, onUpdate = false): void {
    if (inBound) {
      this.setValidatorsOnSelect('pickupPoint');
    } else {
      this.setValidatorsOnSelect('dropoffPoint');
    }
    if (inBound && this.pickupPoint.valid || !inBound && this.dropoffPoint.valid) {
      if (inBound || !inBound || onUpdate) {
        this.studentTransportService.fetchRoutePoints(inBound ? this.pickupPoint.value.transportRouteId : this.dropoffPoint.value.transportRouteId)
          .subscribe(res => this.setRoutePoints(res, inBound, onUpdate));
      } else {
        this.inBound = inBound;
        this.routePoints = this.routePointsData[inBound ? 'inBound' : 'outBound'];
        this.viewDialog = this.dialogRef.open(this.popupMap,
          {
            disableClose: true,
            width: '100%',
            panelClass: 'rootmap-popup'
          }
        );
      }
    }
  }
  setRoutePoints(res, inBound, onUpdate): void {
    this.inBound = inBound;
    if (res.routePointsView) {
      res.routePointsView.forEach(element => {
        element.transportRouteId = inBound ? this.pickupPoint.value.transportRouteId : this.dropoffPoint.value.transportRouteId;
      });
      this.routePoints = res.routePointsView;
      if (this.studentTransportAssignmentInfo) {
        this.routePointsData[inBound ? 'inBound' : 'outBound'] = res.routePointsView.sort((a, b) => a.position - b.position);
      }
      if (!onUpdate) {
        this.viewDialog = this.dialogRef.open(this.popupMap,
          {
            disableClose: true,
            width: '100%',
            panelClass: 'rootmap-popup'
          }
        );
      } else {
        this.calculateFinalDistanceDuration(inBound);
      }
    }
  }
  calculateFinalDistanceDuration(inBound): void {
    const directionsService = new google.maps.DirectionsService;
    directionsService.route({
      origin: this.setMarkerData(inBound ? this.routePointsData['inBound'][+this.pickupPoint.value.position - 1] : this.routePointsData['outBound'][0]),
      // tslint:disable-next-line: max-line-length
      destination: this.setMarkerData(!inBound ? this.routePointsData['outBound'][+this.dropoffPoint.value.position - 1] : this.routePointsData['inBound'][this.routePointsData['inBound'].length - 1]),
      waypoints: this.getwayPoints(inBound, +this[inBound ? 'pickupPoint' : 'dropoffPoint'].value.position - 1),
      travelMode: 'DRIVING',
      transitOptions: { modes: ['BUS'] },
      unitSystem: google.maps.UnitSystem.METRIC
    }, (response, status) => {
      if (inBound) {
        this.studetRouteInfo.inBound = {
          distance: response.routes[0].legs[0].distance.value,
          duration: response.routes[0].legs[0].duration.value
        };
      } else {
        this.studetRouteInfo.outBound = {
          distance: response.routes[0].legs[0].distance.value,
          duration: response.routes[0].legs[0].duration.value
        };
      }
      this.getTotalDuration();
      this.changeDetector.detectChanges();
    });
  }
  getTotalDistance(): any {
    if (this.studetRouteInfo.inBound || this.studetRouteInfo.outBound) {
      const dist = ((this.studetRouteInfo.inBound ? this.studetRouteInfo.inBound.distance : 0) +
        (this.studetRouteInfo.outBound ? this.studetRouteInfo.outBound.distance : 0));
      this.changeDetector.markForCheck();
      return Math.round(dist / 1000);
    }
  }
  getTotalDuration(): any {
    if (this.studetRouteInfo.inBound || this.studetRouteInfo.outBound) {
      const dur = ((this.studetRouteInfo.inBound ? this.studetRouteInfo.inBound.duration : 0) +
        (this.studetRouteInfo.outBound ? this.studetRouteInfo.outBound.duration : 0)) / 60;
      this.changeDetector.markForCheck();
      return (Math.floor(dur / 60) ? Math.floor(dur / 60) + 'hr ' : '') + Math.round(dur % 60) + 'min ';
    }
  }
  getwayPoints(inBound, index): any {
    const wayPoints = [];
    if (this.routePointsData[inBound ? 'inBound' : 'outBound'].length > 2) {
      for (let i = (inBound ? index + 1 : 1); i < (inBound ? this.routePointsData[inBound ? 'inBound' : 'outBound'].length - 1 : index); i++) {
        wayPoints.push({
          location: { lat: this.routePointsData[inBound ? 'inBound' : 'outBound'][i].latitude, lng: this.routePointsData[inBound ? 'inBound' : 'outBound'][i].longitude },
          stopover: false
        });
      }
      return wayPoints;
    } else {
      return [];
    }
  }
  setMarkerData(point): any {
    return { lat: point.latitude, lng: point.longitude };
  }
  onSelectFromPopUp(event): void {
    this.viewDialog.close();
    if (!event) {
      return;
    }
    if (event.selectedRouteMarker) {
      if (event.inBound) {
        this.studentTransport.controls.pickupPointId.patchValue(event.selectedPoint.id);
        this.routePointsData.inBound = event.updatedPoints;
      } else {
        this.studentTransport.controls.dropoffPointId.patchValue(event.selectedPoint.id);
        this.routePointsData.outBound = event.updatedPoints;
      }
    } else {
      if (event.inBound) {
        this.routePointsData.inBound = event.updatedPoints;
        this.studentTransport.controls.pickupPointId.patchValue(null);
      } else {
        this.routePointsData.outBound = event.updatedPoints;
        this.studentTransport.controls.dropoffPointId.patchValue(null);
      }
    }
    const selectedLocation = {
      latitude: event.selectedPoint.latitude,
      longitude: event.selectedPoint.longitude,
      name: event.selectedPoint.name ? event.selectedPoint.name.substring(0, 45) : null,
      pointAddres: event.selectedPoint.pointAddres ? event.selectedPoint.pointAddres.substring(0, 200) : null,
      position: event.selectedPoint.position,
      id: event.selectedPoint.id
    };
    if (event.inBound) {
      this.pickupPoint.patchValue(selectedLocation);
    } else {
      this.dropoffPoint.patchValue(selectedLocation);
    }
    this.calculateFinalDistanceDuration(event.inBound);
  }
  getFormatedName(data): void {
    if (data) {
      if (data.middleName) {
        const fullName: any = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
        return fullName.replace(/  +/g, ' ').trim();
      }
      else {
        const fullName: any = data.firstName + ' ' + data.lastName;
        return fullName.replace(/  +/g, ' ').trim();
      }
    }
  }
  setUpFormValidations(formName): void {
    if (this[formName].value.transportScheduleId || this[formName].value.transportRouteId) {
      this[formName].controls.pointAddres.setValidators([Validators.required]);
      this[formName].controls.pointAddres.updateValueAndValidity();
    } else {
      this[formName].controls.transportRouteId.clearValidators();
      this[formName].controls.transportRouteId.updateValueAndValidity();

      this[formName].controls.transportScheduleId.clearValidators();
      this[formName].controls.transportScheduleId.updateValueAndValidity();

      this[formName].controls.pointAddres.clearValidators();
      this[formName].controls.pointAddres.updateValueAndValidity();
    }
  }
  setAPiDataForRoutePoints(inBound = true): void {
    if (this.routePointsData[inBound ? 'inBound' : 'outBound'].length) {
      this.routePointsData[inBound ? 'inBound' : 'outBound'] = this.routePointsData[inBound ? 'inBound' : 'outBound'].filter(e => {
        if (e.id) {
          return e.position = e.position;
        }
      });
    }
  }
  submitRoute(onSubmit = false): void {
    if (onSubmit) {
      this.setUpFormValidations('pickupPoint');
      this.setUpFormValidations('dropoffPoint');
      if (this.studentTransport.valid && this.pickupPoint.valid && this.dropoffPoint.valid) {
        if (!(this.pickupPoint.value.latitude || this.dropoffPoint.value.latitude)) {
          this.openSnackBar(AppSettings.ATLEAST_ONE_LOCATION_ERROR, true);
          return;
        }
        if (this.studentTransport.value.requestedPickupAddress) {
          // tslint:disable-next-line: max-line-length
          this.studentTransport.controls.requestedPickupAddress.setValue(this.requestedPoint.inBound ? this.requestedPoint.inBound.name : this.studentTransport.value.requestedPickupAddress);
        }

        if
          (this.studentTransport.value.requestedDropoffAddress) {
          // tslint:disable-next-line: max-line-length
          this.studentTransport.controls.requestedDropoffAddress.setValue(this.requestedPoint.outBound ? this.requestedPoint.outBound.name : this.studentTransport.value.requestedDropoffAddress);
        }
        this.studentTransportView = this.studentTransport.value;
        this.setAPiDataForRoutePoints();
        this.setAPiDataForRoutePoints(false);
        this.studentTransportView.routePointDetails = this.routePointsData.inBound.concat(this.routePointsData.outBound);
        if (!this.studentTransportView.routePointDetails.length) {
          this.studentTransportView.routePointDetails = null;
        }
        // tslint:disable-next-line: max-line-length
        this.studentTransportView.transportScheduleInboundRouteId = this.pickupPoint.value.transportRouteId ? this.inBoundroutesList.find(e => e.transportRouteId === this.pickupPoint.value.transportRouteId).id : null;

        // tslint:disable-next-line: max-line-length
        this.studentTransportView.transportScheduleOutboundRoutesId = this.dropoffPoint.value.transportRouteId ? this.outBoundroutesList.find(e => e.transportRouteId === this.dropoffPoint.value.transportRouteId).id : null;
        this.setPointsDataForApi('pickupPoint');
        this.setPointsDataForApi('dropoffPoint');
        if (this.studentTransportAssignmentInfo) {
          this.studentTransportView['id'] = this.studentTransportAssignmentInfo.id;
          this.studentTransportService.updateTransportAssignments(this.studentTransportView)
            .subscribe(res => this.afterSubmit(res), err => this.errorResponse(err));
        } else {
          this.studentTransportService.createTransportAssignments(this.studentTransportView).subscribe(res => this.afterSubmit(res), err => this.errorResponse(err));
        }
      } else {
        this.manualForm.submitted = true;
        this.pickUpForm.submitted = true;
        this.dropOffForm.submitted = true;
      }
    } else {
      this.onCancel();
    }
  }
  setPointsDataForApi(key): void {
    if (this.studentTransport.value[key === 'pickupPoint' ? 'pickupPointId' : 'dropoffPointId']) {
      this.studentTransportView[key] = null;
    } else if (this[key].value.transportRouteId) {
      this.studentTransportView[key] = this[key].value;
      this.studentTransportView[key].position = this.studentTransportView[key].position;
    } else {
      this.studentTransportView[key] = null;
    }
  }
  onCancel(): void {
    this.back();
  }
  afterSubmit(res): void {
    this.onCancel();
    this.openSnackBar(res.messages.ResultMessage);
  }
  onClear(pickUp = true): void {
    if (pickUp) {
      this.pickupPoint.reset();
      this.studentTransport.controls.pickupPointId.reset();
      this.routePointsData.inBound = [];
      this.pickUpForm.submitted = false;
      this.studetRouteInfo.inBound = null;
    } else {
      this.dropoffPoint.reset();
      this.studentTransport.controls.dropoffPointId.reset();
      this.routePointsData.outBound = [];
      this.dropOffForm.submitted = false;
      this.studetRouteInfo.outBound = null;
    }
  }
}
