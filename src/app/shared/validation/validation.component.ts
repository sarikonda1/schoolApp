import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'app/service/common.service';
import { PatternConfig, AppSettings } from 'app/app.constants';
import { AbstractControl } from '@angular/forms';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent extends CommonComponent implements OnInit {

  // input parameters
  @Input() validationControl: AbstractControl;
  @Input() doValidate: boolean;
  @Input() labelName: string;
  @Input() isTollTip = false;
  // we will use this param if custom validation message if required
  // @Input() customValidationMessage: any;

  // parameter to show validation message
  message: string;

  constructor(public commonService: CommonService) {
    super();
  }

  ngOnInit(): void {
  }

  // method to prepare validation messages
  get showMessage(): any {

    if (this.doValidate && this.validationControl !== undefined && this.validationControl && this.validationControl.errors) {

      this.message = '';
      // tslint:disable-next-line:forin
      for (const key in this.validationControl.errors) {
        switch (key) {
          case AppSettings.REQUIRED:
            this.requiredMessage(this.labelName);
            break;
          case 'email':
            this.emailMessage(this.labelName);
            break;
          case AppSettings.PATTERN:
            this.patternMessage(this.labelName,
              this.validationControl.errors[key]);
            break;
          case AppSettings.MINLENGTH:
            this.minLengthMessage(this.labelName, this.validationControl.errors[key]);
            break;
          case AppSettings.MAXLENGTH:
            this.maxLengthMessage(this.labelName, this.validationControl.errors[key]);
            break;
          case AppSettings.MAXRANGE:
            this.maxRangeMessage(this.labelName, this.validationControl.errors[key]);
            break;
          case AppSettings.MINRANGE:
            this.minRangeMessage(this.labelName, this.validationControl.errors[key]);
            break;
          case 'matDatepickerParse':
            this.message = this.commonService.getTranslation(AppSettings.DATE_MSG_DYNAMIC,
                {
                          label: this.labelName,
                          value: this.getSchoolDateFormat()
                }
            );
            break;
          case 'matDatepickerMin':
            const minDate = this.validationControl.errors[key].min.format(this.getSchoolDateFormat());

            this.message = this.commonService.getTranslation(AppSettings.DATE_MSG_MIN, { label: this.labelName, value: minDate });
            break;
          case 'matDatepickerMax':
            const maxDate = this.validationControl.errors[key].max.format(this.getSchoolDateFormat());
            this.message = this.commonService.getTranslation(AppSettings.DATE_MSG_MAX, { label: this.labelName, value: maxDate });
            break;
          case AppSettings.INVALID_MOBILE:
            this.invalidMobileNumberMessage(this.labelName);
            break;
          case 'invalidTime':
            this.message = 'Invalid time';
            break;

        }
      }
      return true;
    }
    return false;
  }
  // end

  // method to show validation message for required
  requiredMessage(label: string): void {
    this.message = this.commonService.getTranslation(AppSettings.IS_REQUIRED, { value: label });
  }

  emailMessage(label: string): void {
    this.message = this.commonService.getTranslation(AppSettings.NOT_VALID_MSG, { value: label });
  }
  // end

  // method to show validation message for specified pattern
  patternMessage(label: string, pattern: any): void {
    this.message = AppSettings.ENTER_VALID_INPUT;
    const patternMessage = PatternConfig.globalPatterns.find(x => x.pattern.source === new RegExp(pattern.requiredPattern.substr(1, pattern.requiredPattern.length - 2)).source);
    if (patternMessage) {
      this.message = this.commonService.getTranslation(patternMessage.message, { value: label });
    }
  }
  // end

  // method to show validation message for minimum length
  minLengthMessage(label: string, length: any): void {
    const requiredLength = length.requiredLength;
    this.message = this.commonService.getTranslation(AppSettings.SHOULD_NOT_LESS_THAN, { value1: label, value2: requiredLength });
  }
  // end

  // method to show validation message for maximum length
  maxLengthMessage(label: string, length: any): void {
    const requiredLength = length.requiredLength;
    this.message = this.commonService.getTranslation(AppSettings.SHOULD_NOT_EXCEED, { value1: label, value2: requiredLength });
  }

  // method to show validation message for maximum length
  maxRangeMessage(label: string, value: any): void {
    this.message = this.commonService.getTranslation(AppSettings.SHOULD_NOT_MORE_THAN_RANGE, { value1: label, value2: value.max });
  }
  // end

  // method to show validation message for maximum length
  minRangeMessage(label: string, value: any): void {
    this.message = this.commonService.getTranslation(AppSettings.SHOULD_NOT_LESS_THAN_RANGE, { value1: label, value2: value.min });
  }

  invalidMobileNumberMessage(label: string): void {
    this.message = this.commonService.getTranslation(AppSettings.MOBILE_MSG, { value: label });
  }
  // end

}
