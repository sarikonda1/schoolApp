import { Component, OnInit, Input, forwardRef, ViewChild, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { FormControl, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeValidator } from './custom-timepicker.validators';

@Component({
  selector: 'app-custom-timepicker',
  templateUrl: './custom-timepicker.component.html',
  styleUrls: ['./custom-timepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTimepickerComponent),
      multi: true
    }
  ]
})
export class CustomTimepickerComponent implements OnInit, OnChanges {
  @Input() is24HoursFormat = true;
  @Input() isIconRequired = false;
  @Input() label: string;
  @Input() appearance: any;
  @Input() isRequired = false;
  @Input() showLabel = true;
  @Input() prefill = false;
  @Input() name: string;
  @Input() rangeMode = false;
  @Input() errorClass = null;
  @Input() requiredValidator = null;
  @Input() timeValidator = null;
  @Input() formClass = null;
  @ViewChild('hourSelect') hourSelect;
  @ViewChild('minuteSelect') minuteSelect;
  @ViewChild('meridiemSelect') meridiemSelect;
  @ViewChild('hourSelectEnd') hourSelectEnd;
  @ViewChild('minuteSelectEnd') minuteSelectEnd;
  @ViewChild('meridiemSelectEnd') meridiemSelectEnd;
  hours: any[] = [];
  minutes: any[] = [];
  meridiems: any[] = [
    { value: 'AM', viewValue: 'AM' },
    { value: 'PM', viewValue: 'PM' }
  ];
  time: any;
  hourStart = '';
  minuteStart = '';
  meridiemStart = '';
  hourEnd = '';
  minuteEnd = '';
  meridiemEnd = '';

  timecontrol = new FormControl(null, TimeValidator.validateOnlyTimeRequired);
  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < 60; i++) {
      this.minutes.push({ value: (i < 10) ? '0' + i.toString() : i.toString(), viewValue: (i < 10) ? '0' + i.toString() : i.toString() });
    }
    this.createHoursArray(this.is24HoursFormat);
    this.createTimeDisplay();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const requiredValidator: SimpleChange = changes.requiredValidator;
    const timeValidator: SimpleChange = changes.timeValidator;
    if (requiredValidator !== undefined && requiredValidator.currentValue) {
      this.setRequiredValidators();
    }
    if ((requiredValidator !== undefined && !requiredValidator.currentValue) || 
      (timeValidator !== undefined && !timeValidator.currentValue)) {
      this.removeValidators();
    }
    if (timeValidator !== undefined && timeValidator.currentValue) {
      this.setTimedValidators();
    }
  }

  openHoursDropdown(index): void {
    (index === 0) ? this.hourSelect.open() : this.hourSelectEnd.open();
  }
  openMinutesDropdown(index): void {
    (index === 0) ? this.minuteSelect.open() : this.minuteSelectEnd.open();
  }
  openMeridiemDropdown(index): void {
    (index === 0) ? this.meridiemSelect.open() : this.meridiemSelectEnd.open();
  }
  minutesChange($event, index): void {
    index === 0 ? this.minuteStart = $event.value : this.minuteEnd = $event.value;
    this.createTimeDisplay();
    if (!this.is24HoursFormat) {
      this.openMeridiemDropdown(index);
    }

  }

  hoursChange($event, index): void {
    index === 0 ? this.hourStart = $event.value : this.hourEnd = $event.value;
    if (!this.minuteStart) {
      this.minuteStart = '00';
    }
    this.createTimeDisplay();
    this.openMinutesDropdown(index);
  }

  changeMeridiem($event, index): void {
    index === 0 ? this.meridiemStart = $event.value : this.meridiemEnd = $event.value;
    this.createTimeDisplay();
  }


  createHoursArray(is24HoursFormat): void {
    let maxHr;
    let minHr;
    (!is24HoursFormat) ? (maxHr = 12, minHr = 1) : (maxHr = 23, minHr = 0);
    for (let i = minHr; i <= maxHr; i++) {
      this.hours.push({ value: (i < 10) ? '0' + i.toString() : i.toString(), viewValue: (i < 10) ? '0' + i.toString() : i.toString() });
    }
  }

  createTimeDisplay(): void {
    const startTime = this.hourStart + ':' + this.minuteStart;
    let endTime = '';
    if (this.rangeMode) {
      endTime = this.hourEnd && this.minuteEnd ? '-' + this.hourEnd + ':' + this.minuteEnd : '';
    }
    this.time = startTime + endTime;

    this.propagateChange(this.time);
  }

  propagateChange = (_: any) => { };
  writeValue(value: any): void {
    // set initial selection
    if (value) {
      this.time = value;
      if (this.rangeMode) {
        const timeRamges = value.split('-');
        if (timeRamges[0] !== undefined) {
          const startTimeSplit = timeRamges[0].split(':');
          this.hourStart = startTimeSplit[0];
          this.minuteStart = startTimeSplit[1].split(' ')[0];
          this.meridiemStart = (!this.is24HoursFormat && startTimeSplit[1].split(' ')[1] !== undefined)
            ? startTimeSplit[1].split(' ')[1] : '';
        }

        if (timeRamges[1] !== undefined) {
          const endTimeSplit = timeRamges[1].split(':');
          this.hourEnd = endTimeSplit[0];
          this.minuteEnd = endTimeSplit[1].split(' ')[0];
          this.meridiemStart = (!this.is24HoursFormat && endTimeSplit[1].split(' ')[1] !== undefined)
            ? endTimeSplit[1].split(' ')[1] : '';
        }
      }
      else {
        const timeSplit = value.split(':');
        this.hourStart = timeSplit[0];
        this.minuteStart = timeSplit[1];
        this.meridiemStart = (!this.is24HoursFormat && timeSplit[1].split(' ')[1] !== undefined)
          ? timeSplit[1].split(' ')[1] : '';
      }
    }else{
      this.hourStart = '';
      this.minuteStart = '';
      this.hourEnd = '';
      this.minuteEnd = '';
      this.createTimeDisplay();
    }

  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void { }

  setRequiredValidators(): void {
    this.timecontrol.setValidators([TimeValidator.validateTimeRequired]);
    this.timecontrol.updateValueAndValidity();
  }

  removeValidators(): void {
    this.timecontrol.clearValidators();
    this.timecontrol.markAsPristine();
    this.timecontrol.updateValueAndValidity();
  }

  setTimedValidators(): void {
    this.timecontrol.setValidators([TimeValidator.validateOnlyTimeRequired]);
    this.timecontrol.updateValueAndValidity();
  }
}
