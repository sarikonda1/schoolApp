import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonComponent } from '../common/common.component';
import { GeneratePasswordViewModel } from 'app/modules/lshp-admin/models/generate-password-view-model';
import { MatDialog, MatSnackBar, ErrorStateMatcher } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { UsersService } from 'app/service/academic-service';
import { AppSettings, Pattern } from 'app/app.constants';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { FuseConfigService } from '@fuse/services/config.service';
import { MustMatch } from './match-validators';
import { AuthService } from 'app/auth/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent extends CommonComponent {

  createPasswordForm: FormGroup;
  email: string;
  code: string;
  createAdminSubmit = true;
  generatePasswordViewModel: GeneratePasswordViewModel;
  errorMsg: string;
  HttpStatus: any;
  isResetPassword = false;
  titleMessage: string;
  parentTransferedData: Observable<any[]>;
  clearSubscription: Subscription;
  parentData: any;
  previousPath: any;
  staffDataView: any;
  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router, public commonService: CommonService, public dialogRef: MatDialog,
    private _fuseConfigService: FuseConfigService, private formBuilder: FormBuilder, public snackBar: MatSnackBar, public authService: AuthService) {
    super();
    this.clearSubscription = this.commonService.isCorrectionClear().subscribe(res => {
      this.parentData = res.clear;
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    if (this.authService.hasValidAccessToken) {
      this.authService.redirectIfAlreadyLoggedin();
    }

    this.HttpStatus = require('http-status-codes');

    // Configure the layout
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
    this.createPassword();
    this.currentRouteParamas(this.route);
  }

  /**
  * This is the currentRouteParamas function gives user email and user code from route params.
  * @param data parameter consists of params value
  **/
  currentRouteParamas(data: any): void {
    this.previousPath = data.url.value[0].path;
    if (data.url.value[0].path === 'parent-password' || data.url.value[0].path === 'staff-password') {
      this.code = data.params.value.code;
    }
    // else if (data.url.value[0].path === 'staff-password') {
    //   this.code = data.params.value.code;
    // }
    else { this.code = encodeURIComponent(data.params.value.code); }
    this.email = data.params.value.email;
    this.createPasswordForm.controls['email'].setValue(data.params.value.email);
    this.router.url.includes('reset-password') ? (this.isResetPassword = true,
      this.titleMessage = 'Please Reset Your Password') : (this.isResetPassword = false, this.titleMessage = 'Please Create Your Password');
  }

  /**
  * This is the createPassword function which initializes password and confirm password fiels with required validations.
  **/
  createPassword(): void {
    this.createPasswordForm = this.formBuilder.group({
      email: new FormControl(this.email),
      password: new FormControl('', [Validators.required, Validators.pattern(Pattern.PASSWORD_PATTERN)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  /**
  * This is the onSubmit function submits form data if form is valid.
  * @param data parameter consists of params value
  **/
  onSubmit(data: any): boolean {
    this.createAdminSubmit = true;
    if (this.createPasswordForm.invalid) {
      this.errorMsg = '';
      return false;
    }
    else {
      data.value.code = this.code;
      data.value.email = this.email;
      this.generatePasswordViewModel = {
        email: data.value.email,
        code: data.value.code,
        password: data.value.password
      };
      this.errorMsg = '';
      if (this.previousPath === 'parent-password') {
        this.parentData.password = data.value.password;
        this.userService.registerParent(this.parentData).subscribe(result => {
          this.openSnackBar(result.messages.ResultMessage);
          this.router.navigateByUrl('/login');
        }, error => {
          this.errorResponse(error);
        });
      }
      else if (this.previousPath === 'staff-password') {
        this.parentData.password = data.value.password;
        this.userService.registerStaff(this.parentData).subscribe(result => {
          this.openSnackBar(result.messages.ResultMessage);
          this.router.navigateByUrl('/login');
        }, error => {
          this.errorResponse(error);
        });
      }
      else {
        if (this.isResetPassword) {
          this.userService.resetPassword(this.generatePasswordViewModel).subscribe(res => {
            this.userCretePasswordResponse(res);
          },
            errors => {
              this.errorResponse(errors);
            });
        } else {
          this.userService.confirmEmailandCreatePassword(this.generatePasswordViewModel).subscribe(res => {this.userCretePasswordResponse(res);
          },
          errors => {
            this.errorResponse(errors);
          });
        }
      }
    }
  }

  /**
  * This is the userCretePasswordResponse function checks create password is succeeded or not.
  * @param data parameter consists of succeeded or not
  **/
  userCretePasswordResponse(data: any): void {
    if (data.statusCode === 200) {
      this.openSnackBar(AppSettings.PASSWORD_SAVED);
      this.authService.login(this.generatePasswordViewModel);
    }
    else {
      this.openSnackBar(data.messages.ResultMessage);
    }
  }
  snackBarMessage(message: any): any {
    this.openSnackBar(message);
  }
}
