import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { UserService } from 'app/service/user-management/api/user.service';
import { ForgotPasswordView } from 'app/models/forgot-password-view';
import { MatSnackBar } from '@angular/material';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [UserService]
})
export class ForgotPasswordComponent extends CommonComponent implements OnInit {
  forgotPassowrdForm: any;
  fogotPasswordView: ForgotPasswordView;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private _fuseConfigService: FuseConfigService, private userService:
    UserService, public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    if (this.authService.hasValidAccessToken) {
      this.authService.redirectIfAlreadyLoggedin();
    }

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
    this.fogotPasswordView = {
      email: ''
    };
    if (this.authService.hasValidAccessToken) {
      this.authService.redirectIfAlreadyLoggedin();
    }

    this.forgotPassowrdForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onForgotPassowrdFormSubmit(): void {
    if (this.forgotPassowrdForm.valid) {
      this.fogotPasswordView.email = this.forgotPassowrdForm.value.email;
      this.userService.forgotPassword(this.fogotPasswordView).subscribe(res => {
        res.succeeded ? this.openSnackBar('Check mail to reset password') : this.openSnackBar('Invalid email');
      });
    }
  }

}
