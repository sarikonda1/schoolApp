import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/auth/auth.service';
import { UsersService } from 'app/service/academic-service';
import { CommonService } from 'app/service/common.service';
import { CommonComponent } from '../common/common.component';
import { MatSnackBar } from '@angular/material';
import { ParentData } from 'app/modules/lshp-admin/models/parent-data';
import { FuseConfigService } from '@fuse/services/config.service';
import { Router } from '@angular/router';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { timer } from 'rxjs/observable/timer';
import { MobileNumberView } from 'app/modules/communication/model/mobile-number-view';
import { CommunicationTypesService } from 'app/service/configuration/communication-types.service';
import { AppSettings } from 'app/app.constants';
import { OtpView } from 'app/modules/lshp-admin/models/otpView';
import { EmailResendModel } from 'app/modules/lshp-admin/models/emailResendModel';
import { UserService } from 'app/service/user-management/api/user.service';
import { EmailView } from 'app/models/user-management/email-view';
import { EmailOtpVerificationModel } from 'app/modules/lshp-admin/models/email-otp-verification-model';
import * as HttpStatus from 'http-status-codes';
import { StaffDataView } from 'app/modules/staff/staff-admissions/model/staff-data-view';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: fuseAnimations
})
export class RegisterComponent extends CommonComponent implements OnInit {
  @ViewChild('registerForm') registerForm;
  registrationForm: FormGroup;
  parentData: ParentData;
  telOptions = { initialCountry: 'in', preferredCountries: ['in', 'us', 'gb'], separateDialCode: true, };
  finalMobileNumbers = '';
  intialCountryCode = '+91';
  isParent: boolean;
  isMobileOtp: boolean;
  countDown: any;
  counter = 60;
  tick = 1000;
  mobileNumberView: MobileNumberView;
  reSendOtpCounter: any = 0;
  otpView: OtpView;
  isEmailOtp: boolean;
  emailResendModel: EmailResendModel;
  showDetails: boolean;
  resultMessage: any;
  emailView: EmailView;
  emailOtpVerificationModel: EmailOtpVerificationModel;
  isStaff: boolean;
  staffDataView: StaffDataView;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService,
    private userService: UsersService, public snackBar: MatSnackBar, private _fuseConfigService: FuseConfigService, private router: Router,
    private communicationService: CommunicationTypesService, private usersService: UserService, public commonService: CommonService) {
    super();
  }

  ngOnInit(): any {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
    if (this.authService.hasValidAccessToken) {
      this.authService.redirectIfAlreadyLoggedin();
    }
    this.registrationForm = this._formBuilder.group({
      schoolCode: ['', [Validators.required]],
      admissionNumber: [''],
      staffCode: [''],
      mobileNumber: ['', Validators.required],
      mobileOtp: [''],
      emailOtp: ['']
    },
    // { updateOn: 'blur' }
    
    );
    this.parentData = {
      otp: null,
      parentId: null,
      email: null,
      schoolId: null,
      mobileNumber: null,
      admissionNumber: null
    };
    this.mobileNumberView = {
      mobileNumber: null
    };
    this.otpView = {
      mobileNumber: null,
      otp: null,
      email: null,
      parentId: null,
      admissionNumber: null,
      schoolId: null
    };
    this.emailResendModel = {
      email: null,
      schoolId: null
    };
    this.emailOtpVerificationModel = {
      email: null,
      otp: null,
      schoolId: null
    };
    this.staffDataView = {
      email: null,
      staffId: null,
      schoolId: null,
      mobileNumber: null,
      password: null
    };
  }
  getNumber(e, label): void {
    this.finalMobileNumbers = e.replace(this.intialCountryCode, this.intialCountryCode + ' ');
  }
  onCountryChangeMobile(e, label): boolean {
    if (this.isEmptyObject(e)) {
      return;
    }
    this.intialCountryCode = '+' + e.dialCode;
    this.registrationForm.controls[label].setValue('');
  }
  isEmptyObject(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }
  onError(obj, label): void {
    if (!obj && this.registrationForm.value[label] !== '') {
      this.registrationForm.get(label).setErrors({ 'invalid_mobile': true });
    }
  }
  onregistrationFormSubmit(registrationForm): any {
    if (document.getElementById('schoolCode')){
     document.getElementById('schoolCode').focus();
    }
    registrationForm.value.mobileNumber = this.finalMobileNumbers;

    setTimeout(() => {
      this.registerForm.submitted = false;
    });
    if (!this.isMobileOtp) {
      if (this.isParent) {
        this.userService.verifyParentCredentials(registrationForm.value).subscribe(res => {
          this.showDetails = true;
          this.isMobileOtp = true;
          this.reSendOtpCounter = 0;
          this.countDown = this.getCounter().do(() => -this.counter);
          this.parentData = res.parentDetails;
          this.resultMessage = res.messages.ResultMessage;
        }, error => {
          this.errorResponse(error);
        });
      }
      else {
        this.userService.verifyStaffCredentials(registrationForm.value.schoolCode, registrationForm.value.staffCode, registrationForm.value.mobileNumber).subscribe(res => {
          this.showDetails = true;
          this.isMobileOtp = true;
          this.reSendOtpCounter = 0;
          this.countDown = this.getCounter().do(() => -this.counter);
          this.staffDataView = res.staffDetails;
          this.parentData = res.staffDetails;
          this.resultMessage = res.messages.ResultMessage;
        }, error => {
          this.errorResponse(error);
        });
      }
    }
    else {
      this.otpView = this.parentData;
      this.otpView.otp = registrationForm.value.mobileOtp;
      // this.registerForm.submitted = false;
      if (this.isParent) {
        this.userService.processOtpVefication(this.otpView).subscribe(res => {
          this.isMobileOtp = false;
          this.isEmailOtp = true;
          this.counter = 60;
          this.countDown = this.getCounter().do(() => -this.counter);
          this.reSendOtpCounter = 0;
          this.resultMessage = res.messages.ResultMessage;
        }, error => {
          this.errorResponse(error);
        });
      }
      else {
        this.userService.processOtpVefication(this.otpView).subscribe(res => {
          this.isMobileOtp = false;
          this.isEmailOtp = true;
          this.counter = 60;
          this.countDown = this.getCounter().do(() => -this.counter);
          this.reSendOtpCounter = 0;
          this.resultMessage = res.messages.ResultMessage;
        }, error => {
          this.errorResponse(error);
        });
      }
    }
  }
  parentClick(): any {
    this.resetData();
    this.isParent = true;
    window.location.hash = 'Parent';
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event): void {
    const path = window.location.hash;
    if (path === '#Staff') {
      this.isStaff = true;
    }
    else if (path === '#Parent') {
      this.isParent = true;
    }
    else{
      this.isParent = false;
      this.isStaff = false;
    }
  }
  onRegisterClick(otp): any {
    this.parentData.otp = otp.value;
    this.emailView = this.parentData;
    this.parentData.password = '';
    this.emailOtpVerificationModel = this.parentData;
    this.userService.emailOtpVerification(this.emailOtpVerificationModel).subscribe(result => {
      if (result.statusCode === HttpStatus.OK) {
        this.usersService.userNameAvailability(this.emailView).subscribe(res => {
          if (!res.succeeded) {
            if (this.isParent) {
              this.userService.registerParent(this.parentData).subscribe(data => {
                this.isMobileOtp = true;
                this.openSnackBar(data.messages.ResultMessage);
                this.router.navigateByUrl('/login');
              }, error => {
                this.errorResponse(error);
              });
            }
            else {
              // this.staffDataView = this.parentData;
              this.userService.registerStaff(this.staffDataView).subscribe(data => {
                this.isMobileOtp = true;
                this.openSnackBar(data.messages.ResultMessage);
                this.router.navigateByUrl('/login');
              }, error => {
                this.errorResponse(error);
              });
            }

          }
          else {
            if (this.isParent) {
              this.commonService.setClearCorrection(this.parentData);
              this.router.navigateByUrl('parent-password' + '/' + this.parentData.email + '/' + '');
            }
            else {
              this.commonService.setClearCorrection(this.staffDataView);
              this.router.navigateByUrl('staff-password' + '/' + this.staffDataView.email + '/' + '');
            }
          }
        }, error => {
          this.errorResponse(error);
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  getCounter(): any {
    return timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter);
  }

  reSendOtp(): any {
    this.counter = 60;
    this.reSendOtpCounter++;
    if (this.reSendOtpCounter > 2) {
      this.counter = 0;
      this.openSnackBar(AppSettings.RESEND_OTP_LIMIT_ERROR, true);
    }
    else {
      this.countDown = this.getCounter().do(() => -this.counter);
      if (this.isMobileOtp) {
        this.mobileNumberView.mobileNumber = this.parentData.mobileNumber;
        this.mobileNumberView.schoolId = this.parentData.schoolId;
        this.communicationService.resendOtp(this.mobileNumberView).subscribe(res => {
          this.openSnackBar(res.messages.ResultMessage);
        }, error => {
          this.errorResponse(error);
        });
      }
      else {
        this.emailResendModel.email = this.parentData.email;
        this.emailResendModel.schoolId = this.parentData.schoolId;
        this.userService.putEmailOtp(this.emailResendModel).subscribe(res => {
          this.openSnackBar(res.messages.ResultMessage);
        }, error => {
          this.errorResponse(error);
        });
      }
    }
  }
  staffClick(): any {
    this.resetData();
    this.isStaff = true;
    window.location.hash = 'Staff';
    this.registrationForm.get('staffCode').setValidators([Validators.required]);
  }
  resetData(): void{
    this.showDetails = false;
    this.isMobileOtp = false;
    this.isEmailOtp = false;
    this.reSendOtpCounter = 0;
    this.registrationForm.controls.mobileOtp.clearValidators();
    this.registrationForm.controls.mobileOtp.updateValueAndValidity();
    this.registrationForm.controls.emailOtp.clearValidators();
    this.registrationForm.controls.emailOtp.updateValueAndValidity();
  }

}
