import { Component, OnInit, Output, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { InstitutionService } from 'app/service/academic-service/api/institution.service';
import { CommonComponent } from 'app/shared/common/common.component';
import { Router } from '@angular/router';
import { UsersService } from 'app/service/academic-service';
import { StoreService } from 'app/service/file-management/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RouteConfig } from 'app/url.config';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.scss']
})
export class InstituteDetailsComponent extends CommonComponent implements OnInit, OnChanges {

  institutionDetails: any = [];
// tslint:disable-next-line: no-input-rename
  @Input('data') data: any;
  loginDetails: any;
  editShow: boolean;

  logoImgProp: any;
  nameImgProp: any;

  constructor(private institutionService: InstitutionService, private router: Router, private userService: UsersService,
     private storeService: StoreService, private sanitizer: DomSanitizer, private cd: ChangeDetectorRef, public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
    this.userService.userCheckUserAccessGet().subscribe(response => this.checkLoginDetails(response));
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

  ngOnChanges(): void {
    this.userService.userCheckUserAccessGet().subscribe(response => this.checkLoginDetails(response));
  }

  checkLoginDetails(response: any): void {
    this.loginDetails = response;
    this.institutionDetailsById();
  }

  // method for get perticular institution details based on institute Id
  institutionDetailsById(): void {
    this.institutionService.institutionDetails(this.data)
      .subscribe(res => this.getResponse(res));
  }

  // response of institute details
  getResponse(data: any): void {
    if (this.loginDetails[0].schoolId != null || this.loginDetails[0].instititeId != null) {
      this.editShow = false;
    }
    else {
      this.editShow = true;
    }
    this.institutionDetails = data.institutionData;
    this.institutionDetails.line1 =   new Array(this.institutionDetails.line1, this.institutionDetails.line2, this.institutionDetails.line3).
    filter(x => x).join(', ');


    if (data.institutionData['brandingSymbolLogo']) {
      const imgUrl = this.storeService.getFilePath(data.institutionData['brandingSymbolLogo'].filename);
      this.storeService.storeFileEncryptByFileNameGet(data.institutionData['brandingSymbolLogo'].filename)
        .subscribe(data1 => {
          if (data) {
          }
        });
      this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, true);
    }
    if (data.institutionData['brandingNameLogo']) {
      const imgUrl = this.storeService.getFilePath(data.institutionData['brandingNameLogo'].filename);
      this.storeService.storeFileEncryptByFileNameGet(data.institutionData['brandingNameLogo'].filename)
        .subscribe(data2 => {
          if (data) {
          }
        });
      this.setImageProperties({ src: imgUrl, height: 100, width: 100 }, false);

      this.cd.markForCheck();
    }
  }

  editInstitute(): void {
    this.router.navigate([RouteConfig._Edit_Institute + this.institutionDetails.id]);
  }
  // End
}
