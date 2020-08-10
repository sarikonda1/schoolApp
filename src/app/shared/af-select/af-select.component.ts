import { Component, ViewChild, EventEmitter, Input, Output, OnInit, OnChanges, OnDestroy, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CommonService } from 'app/service/common.service';
import { AppSettings } from 'app/app.constants';

@Component({
    selector: 'af-select',
    templateUrl: 'af-select.component.html',
    styleUrls: ['af-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AfSelectComponent),
            multi: true
        }
    ]
})
export class AfSelectComponent implements OnInit, OnChanges, OnDestroy {
    @ViewChild('afSelect') afSelect;
    @ViewChild('itemSelect') itemSelect;
    @ViewChild('matSelectSearch') matSelectSearch: ElementRef<HTMLInputElement>;
    @Input() optionGroupRequired = false;
    @Input() groups: any[];
    @Input() options: any[];
    @Input() placeholder: string;
    @Input() label: string;
    @Input() showChips: false;
    @Input() required: false;
    @Input() multiple = false;
    @Input() value: any;
    @Input() appearance: any;
    @Input() isValueIsObject = false;
    @Input() disabled = false;
    message: string;

    filteredOptions: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    filteredOptionGroups: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    public inputSearchFormControl: FormControl = new FormControl();
    public selectFormControl: FormControl = new FormControl();
    selectedOptions: any;
    showSelectAll = true;
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() searchText: EventEmitter<any> = new EventEmitter<any>();
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();

    constructor(public commonService: CommonService) {

    }

    ngOnInit(): void {
        if (this.optionGroupRequired) {
            this.initializeSearchOptionGroup();
            this.filterOptionGroups();
        }
        else if (this.options) {
            this.initializeSearch();
        }
    }

    get showMessage(): any {
        this.label = this.label ? this.label : this.placeholder;
        this.message = '';
        if (this.required && this.label) {
            const translateLabel = this.commonService.getTranslation(this.label);
            this.message = this.commonService.getTranslation(AppSettings.IS_REQUIRED, { value: translateLabel });
            return true;
        }
        return false;
    }

    compareObjects(o1: any, o2: any): boolean {
        return o1 && o2 ? typeof o1 === 'number' && typeof o2 === 'number' ? o1 === o2 : (o1.label === o2.label && o2.isValueObject ? (o1.value.classId === o2.value.classId &&
            o1.value.sectionId === o2.value.sectionId) : o1.value === o2.value) : false;
    }

    initializeSearch(): void {
        if (this.options !== undefined && this.options !== null) {
            this.filteredOptions.next(this.options.slice());
        }


        // listen for search field value changes
        this.inputSearchFormControl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterOptions();
            });
    }

    initializeSearchOptionGroup(): void {
        this.filteredOptionGroups.next(this.copyOptionGroups(this.groups));

        // listen for search field value changes
        this.inputSearchFormControl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterOptionGroups();
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.options && changes.options.currentValue) {
            this.filteredOptions.next(changes.options.currentValue.slice());
            // this.initializeSearch();
            if (this.optionGroupRequired) {
                this.initializeSearchOptionGroup();
                this.filterOptionGroups();
            }
            else if (this.options) {
                this.initializeSearch();
            }
        }
        if (changes.groups && changes.groups.currentValue) {
            this.groups = changes.groups.currentValue;
            const optionGroupsCopy = this.copyOptionGroups(this.groups);
            this.filteredOptionGroups.next(optionGroupsCopy);
        }
        if (changes.value && changes.value.currentValue && this.options && !this.optionGroupRequired) {
            this.selectedOptions = [];
            if (typeof changes.value.currentValue === 'object' && changes.value.currentValue.length) {
                for (const item of this.options) {
                    if (changes.value.currentValue.findIndex(e => e.value === item.value) !== -1) {
                        this.selectedOptions.push(item);
                    }
                }

                this.updateSelectedValues(this.selectedOptions);
            }
            else {

                this.updateSelectedValues(changes.value.currentValue);
            }

        }
    }
    ngOnDestroy(): void {
    }

    selectAll(select: NgModel): void {
        const values: any[] = []; // array which will contain all values
        const selectedValues = select.value || [];
        // loop through all groups and add their items' values to the array
        if (this.optionGroupRequired) {
            for (const group of this.groups) {
                for (const item of group.items) {
                    if (this.showOption(item.label, this.matSelectSearch.nativeElement.value) || selectedValues.indexOf(item) >= 0) {
                        values.push(item);
                    }

                }
            }
        }
        else {
            for (const item of this.options) {
                if (this.showOption(item.label, this.matSelectSearch.nativeElement.value) || selectedValues.indexOf(item) >= 0) {
                    values.push(item);
                }

            }
        }

        // submit the array with all values
        // select.update.emit(values);
        this.afSelect.close();
        this.updateSelectedValues(values);
    }

    deselectAll(select: NgModel): void {
        const values: any[] = []; // array which will contain all values
        const selectedValues = select.value || [];
        if (this.optionGroupRequired) {
            for (const group of this.groups) {
                for (const item of group.items) {
                    if (!this.showOption(item.label, this.matSelectSearch.nativeElement.value) && selectedValues.indexOf(item) >= 0) {
                        values.push(item);
                    }

                }
            }
        }
        else {
            for (const item of this.options) {
                if (!this.showOption(item.label, this.matSelectSearch.nativeElement.value) && selectedValues.indexOf(item) >= 0) {
                    values.push(item);
                }

            }
        }

        // select.update.emit(values);
        this.afSelect.close();
        this.updateSelectedValues(values);
    }

    toggleOptionGroupSelection(group): void {
        // alert(group.id);
    }



    showOption(optionLabel, searchVal): boolean {
        return (searchVal === '' || (optionLabel).toUpperCase().includes(searchVal.toUpperCase()));
    }

    filterOptions(): void {
        if (!this.options) {
            return;
        }
        // get the search keyword
        let search = this.inputSearchFormControl.value;
        this.showSelectAll = false;

        if (!search) {
            this.showSelectAll = true;
            this.filteredOptions.next(this.options.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredOptions.next(
            this.options.filter(item => {
                this.showSelectAll = (this.showSelectAll || (item.label.toLowerCase().indexOf(search) > -1));
                return (item.label.toLowerCase().indexOf(search) > -1);
            })
        );
    }

    protected filterOptionGroups(): void {
        if (!this.groups) {
            return;
        }
        // get the search keyword
        let search = this.inputSearchFormControl.value;
        const optionGroupsCopy = this.copyOptionGroups(this.groups);
        this.showSelectAll = false;

        if (!search) {
            this.showSelectAll = true;
            this.filteredOptionGroups.next(optionGroupsCopy);
            return;
        } else {
            search = search.toLowerCase();
        }

        // filter the banks
        this.filteredOptionGroups.next(
            optionGroupsCopy.filter(optionGroup => {
                const showOptionGroup = optionGroup.name.toLowerCase().indexOf(search) > -1;
                if (!showOptionGroup) {
                    optionGroup.items = optionGroup.items.filter(option => option.label.toLowerCase().indexOf(search) > -1);
                }
                this.showSelectAll = (this.showSelectAll || optionGroup.items.length > 0);
                return optionGroup.items.length > 0;
            })
        );

    }

    clearSearch(): void {
        this.inputSearchFormControl.setValue('');
    }

    openedChange(isOpen): void {
        if (!isOpen) {
            this.inputSearchFormControl.setValue('');
        }
    }

    onChangeSelect(event): void {
        const selectedValues = event.value || [];
        if (this.inputSearchFormControl.value !== '') {
            if (this.optionGroupRequired) {
                for (const group of this.groups) {
                    for (const item of group.items) {
                        if (!this.showOption(item.label, this.matSelectSearch.nativeElement.value) &&
                            (typeof this.selectedOptions === 'object' && this.selectedOptions.indexOf(item) >= 0)
                        ) {
                            selectedValues.push(item);
                        }

                    }
                }
            }
            else {
                for (const item of this.options) {
                    if (!this.showOption(item.label, this.matSelectSearch.nativeElement.value) && (
                        (typeof this.selectedOptions === 'object' && this.selectedOptions.indexOf(item) >= 0)

                    )) {
                        selectedValues.push(item);
                    }

                }
            }
        }
        this.updateSelectedValues(selectedValues);
    }

    copyOptionGroups(optionGroups: any[]): any {
        const optionGroupsCopy = [];
        optionGroups.forEach(optionGroup => {
            optionGroupsCopy.push({
                name: optionGroup.name,
                items: optionGroup.items.slice()
            });
        });
        return optionGroupsCopy;
    }

    removeChip(option): void {
        let selectedValues = this.itemSelect.value || [];
        selectedValues = selectedValues.filter(item => item !== option);
        this.updateSelectedValues(selectedValues);
    }

    propagateChange = (_: any) => { };

    writeValue(value: any): void {
        if (!value) {
            this.itemSelect.reset();
        }
    }

    registerOnChange(fn): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void { }

    updateSelectedValues(selectedValues: any): void {
        this.itemSelect.update.emit(selectedValues);
        this.selectedOptions = selectedValues;
        this.selectionChange.emit(selectedValues);
        this.itemSelect.control.setValue(selectedValues);
        this.propagateChange(selectedValues);
    }

    clearAllOptions(event): void {
        this.value = undefined;
        this.updateSelectedValues(this.value);
        event.stopPropagation();
    }

    showClear(): boolean {
        if (this.value === undefined || this.value === null) {
            return false;
        }
        return (this.multiple) ? (this.value.length) : (this.value);
    }

    onSearch(event): void {
        this.searchText.emit(event);
    }
    getNameForGroup(selectedItem): any {
        if (this.optionGroupRequired) {
            const parentItem = this.groups.find(e =>
                e.items.filter(el => this.compareObjects(el, selectedItem)).length > 0
            );
            if (parentItem) {
                return selectedItem.label + '(' + parentItem.name + ')';
            }
        } else {
            return selectedItem.label;
        }
    }

}
