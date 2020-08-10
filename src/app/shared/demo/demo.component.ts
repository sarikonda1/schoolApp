import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FuseConfigService} from '../../../@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import {AuthService} from '../../auth/auth.service';
import {CommonComponent} from '../common/common.component';



@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls    : ['./demo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class DemoComponent extends CommonComponent implements OnInit
{
    loginForm: FormGroup;
    environment = 'dev';
    loginDetails = {
      dev: {
         lshp: {
             email: 'lsitsmgt@gmail.com',
             password: 'Launchship1234'
         },
          ia: {
              email: 'astroninstituteadmin@gmail.com',
              password: 'Launchship1234'
          },
          sa: {
              email: 'edenschooluser@gmail.com',
              password: 'Launchship1234'
          },
          parent: {
              email: 'sravan.nandyala@launchship.com',
              password: 'Launchship1234'
          },
          staff: {
              email: 'sravan.nandyala@launchship.com',
              password: 'Launchship1234'
          }
      },
        qa: {
            lshp: {
                email: 'lsitsmgt@gmail.com',
                password: 'Launchship1234'
            },
            ia: {
                email: 'adithya.boyapati@launchship.com',
                password: 'Launchship1234'
            },
            sa: {
                email: 'adithyab@gmail.com',
                password: 'Launchship1234'
            },
            parent: {
                email: 'adithyab@yahoo.com',
                password: 'Launchship1234'
            },
            staff: {
                email: 'raithareddy09@gmail.com',
                password: 'Launchship1234'
            }
        }
    };
    constructor(
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        private _fuseConfigService: FuseConfigService,
    ) {
        super();
        localStorage.clear();
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
    }
    ngOnInit(): void {
        if (window.location.origin.indexOf('qa') > 0) {
            this.environment = 'qa';
        }
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

        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    loginAs(loginType: string): void {
        this.loginForm.value.email = this.loginDetails[this.environment][loginType].email;
        this.loginForm.value.password =  this.loginDetails[this.environment][loginType].password;

        this.authService.login(this.loginForm.value);
    }

}
