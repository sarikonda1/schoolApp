
import { Component, Input, ChangeDetectorRef, OnInit, OnChanges } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router } from '@angular/router';
import { SchoolService } from 'app/service/manage-school/school.service';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RouteConfig } from 'app/url.config';
import { AppSettings } from 'app/app.constants';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent extends CommonComponent implements OnInit, OnChanges {

  // variable declarations
  schoolDetails: any = [];
  logoImgProp: any;
  nameImgProp: any;
  defaultImgLogo = 'assets/images/logos/academy-front-logo.png';
  // tslint:disable-next-line:no-input-rename
  @Input('data') data: any;

  constructor(private schoolService: SchoolService, private router: Router, private storeService: StoreService, private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.schoolDetailsById();
  }

  ngOnChanges(): void {
    this.schoolDetailsById();
  }

  setImageProperties(image, logo = false): void {
    const data = {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(image.src),
      width: image.width,
      height: image.height
    };
    if (logo) {
      this.logoImgProp = {};
      this.logoImgProp = data;
    } else {
      this.nameImgProp = {};
      this.nameImgProp = data;
    }
    this.cd.detectChanges();
  }

  // method for get perticular school details based on school Id
  schoolDetailsById(): void {
    this.setImageProperties({ src: null, height: 100, width: 100 }, true);
    this.schoolService.schoolDetails(this.data)
      .subscribe(res => this.getResponse(res));
  }

  // response of school details
  getResponse(res: any): void {
    this.schoolDetails = res.schoolData;
    this.schoolDetails.line1 = [this.schoolDetails.line1, this.schoolDetails.line2, this.schoolDetails.line3].filter(val => val).join(',');

    this.schoolDetails.institutionLicenseSchools.billingAmount = res.schoolData.currencyView.symbol + this.schoolDetails.institutionLicenseSchools.billingAmount;
    if (res.schoolData['brandingSymbolLogo']) {
      const imgUrl = this.storeService.getFilePath(res.schoolData['brandingSymbolLogo'].filename);
      this.storeService.storeFileEncryptByFileNameGet(res.schoolData['brandingSymbolLogo'].filename)
        .subscribe(result => {
          if (result) {
            return;
          }
        });
      this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, true);
    }
    else {
      this.setImageProperties({ src: this.defaultImgLogo, height: 100, width: 100 }, true);
    }
    if (res.schoolData['brandingNameLogo']) {
      const imgUrl = this.storeService.getFilePath(res.schoolData['brandingNameLogo'].filename);
      this.storeService.storeFileEncryptByFileNameGet(res.schoolData['brandingNameLogo'].filename)
        .subscribe(result => {
          if (result) {
            return;
          }
        });
      this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, false);

      this.cd.markForCheck();
    }
    else {
      this.setImageProperties({ src: this.defaultImgLogo, height: 100, width: 100 }, false);
    }
  }
  editSchool(): void {
    this.router.navigate([RouteConfig._Edit_School + this.schoolDetails.id]);
  }

  // End
}
