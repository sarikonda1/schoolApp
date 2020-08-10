import { Component, OnInit, ViewChild, Input, SimpleChanges, SimpleChange, forwardRef, ViewChildren, QueryList, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatOption, MatMenuTrigger } from '@angular/material';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';


@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true
    }
  ]
})
export class CustomDropdownComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('customDropdownSelect') customDropdownSelect;
  @Input() dropDownConf: {};
  @Input() errorCheck: any;
  @Input() disable: boolean;
  @Output() selectedData: EventEmitter<any> = new EventEmitter<any>();
  multiple = false;
  dropDownPlaceholder = '';
  serchBoxPalceholder = '';
  noEntryFoundLabel = '';

  /** list of banks */
  protected inputData: any = [];

  /** control for the selected data for selection */
  public dropDownCtrl: FormControl = new FormControl();

  /** control for the selected data for selection */
  public dropDownMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword selection */
  public dropDownFilterCtrl: FormControl = new FormControl();

  /** list of data filtered by search keyword */
  public filteredDropDownValue: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('allSelected') private allSelected: MatOption;

  @ViewChildren(MatMenuTrigger) public menuTriggers: QueryList<MatMenuTrigger>;
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  allhide = true;
  filteredData: any[] = [];
  noDataFoundClass = false;
  unSelectAll = false;
  selectAll: string;
  maxCount: any;
  isRequired = false;
  control: any;
  errorMessage: any;


  constructor(private commonService: CommonService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const dropdownconf: SimpleChange = changes.dropDownConf;
    if (dropdownconf){
      this.multiple = dropdownconf.currentValue.multiSelect;
      this.dropDownPlaceholder = dropdownconf.currentValue.placeholder;
      dropdownconf.currentValue.serchBoxPalceholder ? this.serchBoxPalceholder =
        dropdownconf.currentValue.serchBoxPalceholder : this.serchBoxPalceholder = 'Search ' + this.dropDownPlaceholder;
      this.noEntryFoundLabel = dropdownconf.currentValue.noEntryFoundLabel;
      this.inputData = dropdownconf.currentValue.data;
      dropdownconf.currentValue.isRequired ? this.isRequired = dropdownconf.currentValue.isRequired : this.isRequired = false;
      dropdownconf.currentValue.maxCount ? this.maxCount = dropdownconf.currentValue.maxCount : this.maxCount = 1;
      this.errorMessage = this.commonService.getTranslation(AppSettings.IS_REQUIRED, { value: this.dropDownPlaceholder });
    }
  }

  ngOnInit(): void {
    // load the initial list
    this.filteredDropDownValue.next(this.inputData.slice());

    // listen for search field value changes
    this.dropDownFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDropDown();
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected filterDropDown(): void {
    if (!this.inputData) {
      return;
    }
    // get the search keyword
    let search = this.dropDownFilterCtrl.value;
    if (!search) {
      this.filteredDropDownValue.next(this.inputData.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredDropDownValue.next(
      this.inputData.filter(bank => bank.label.toLowerCase().indexOf(search) > -1)
    );
  }


  onSelect(selectedValue: any): void {
    if (selectedValue.length) {
      const index = selectedValue.indexOf(0, 0);
      if (index > -1) {
        selectedValue.splice(index, 1);
      }
    }
    if (!selectedValue.value.length && this.multiple) {
      this.propagateChange([]);
      this.dropDownCtrl.setValue(null);
      this.selectedData.emit([]);

    } else {
      if (selectedValue.value.length === this.inputData.length && this.multiple){
        this.customDropdownSelect.close();
      }
      this.dropDownCtrl.setValue(selectedValue.value);
      this.selectedData.emit(selectedValue.value);
      this.propagateChange(selectedValue.value);
    }
  }

  propagateChange = (_: any) => { };
  writeValue(value: any): void {
    if (value) {
      // set initial selection
      this.dropDownCtrl.setValue(value);
    } else {
      this.dropDownCtrl.reset();
    }
  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void { }
  clear(): void {
    this.multiple ? this.dropDownCtrl.patchValue([]) : this.dropDownCtrl.patchValue(null);
    this.onSelect(this.dropDownCtrl.value);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.value === o2.value : false;
  }

}
