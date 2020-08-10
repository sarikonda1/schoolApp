import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent, AF_DATE_FORMATS } from 'app/shared/common/common.component';
import { StudentDBSearchView } from '../model/StudentDBSearchView';
import { AppSettings } from 'app/app.constants';
import { StudentDBService } from 'app/service/student-information-system/student-db.service';
import { StudentResultView } from '../model/student-result-view';
import { CommonService } from 'app/service/common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from 'saturn-datepicker';
import { CustomDateAdapter } from 'app/shared/custom-date-adaptor';
import { Router } from '@angular/router';
import { RouteConfig } from 'app/url.config';
import 'rxjs/add/operator/debounceTime';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { StatusService } from '../../../../service/academic-service/api/status.service';
import { MatAutocompleteTrigger, MatSnackBar } from '@angular/material';
import { AcademicSessionService } from 'app/service/academic-service';


@Component({
  selector: 'app-student-database',
  templateUrl: './student-database.component.html',
  styleUrls: ['./student-database.component.scss'],
  providers: [StudentDBService,
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: AF_DATE_FORMATS }]
})
export class StudentDatabaseComponent extends CommonComponent implements OnInit {

  tableSettings: {};
  columns: any[];
  totalRowsCount: number;
  pageCnt: number;
  rows: Array<any>;
  filterViewModel: StudentDBSearchView;
  currentComponent = 'StudentDatabaseComponent';
  searchForm: FormGroup;
  classes: Array<{ label: string, value: string }> = [];
  studentStatuses: Array<{ label: string, value: string }> = [];
  filterdStudents: Array<any> = [];
  customCardDetails: { title: string, message: string } = { title: 'Students', message: 'Search Student' };
  showCustomCard = true;
  @ViewChild(MatAutocompleteTrigger) _auto: MatAutocompleteTrigger;
  @ViewChild('studentName') studentNameAutoInput: any;
  academicSessions = [];
  academicSessionId: any;


  constructor(public commonService: CommonService,
    private studentDbService: StudentDBService,
    private router: Router,
    private classService: ClassesConfigService,
    private statusService: StatusService,
    private cd: ChangeDetectorRef,
    private academicSessionService: AcademicSessionService, public snackBar: MatSnackBar) {
    super();
    this.initializeFilterView();
    this.setColumnHeaders();
    this.initializeTableSettings();
    this.getRequiredDropdownOptions();
  }

  ngOnInit(): void {
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    this.initializeForm();
    if (modelTableComponent) {
      this.filterViewModel = modelTableComponent;
      // this.searchForm.patchValue(this.filterViewModel);
      if (modelTableComponent.studentNames && modelTableComponent.studentNames.length) {
        this.searchForm.controls['studentNames'].patchValue(modelTableComponent.studentNames[0], { emitEvent: false });
      }
      this.getAllFilteredStudents();
    }


    this.searchForm.controls['studentNames'].valueChanges.debounceTime(200).subscribe((name) => {
      name = typeof (name) === 'string' ? name.trim() : name;
      if (name !== null && name.length >= 3) {
        this.studentDbService.studentNames(name).subscribe((res) => {
          this.filterdStudents = (res.students.length > 0) ? res.students : [];
          this.cd.detectChanges();
        });

      }
      else {
        this.filterdStudents = [];
      }
    });

  }

  getRequiredDropdownOptions(): void {
    this.classService.getFilteredClasses(null, null, null, null, 0, name, null, 1, 1000).subscribe((res) => {
      this.classes = res.pagedClassViewModels.list.map((obj: any) => ({ value: obj.id, label: obj.name }));

    });

    this.statusService.getAllStatuses('STU').subscribe((res) => {
      this.studentStatuses = res.statusViewModel.map((obj: any) => ({ value: obj.id, label: obj.name }));
    });
    this.getAcademicSession();
  }

  initializeForm(): void {
    this.searchForm = new FormGroup({
      studentNames: new FormControl(null),
      parentNames: new FormControl(null),
      classIds: new FormControl(null),
      statusIds: new FormControl(null),
      admissionNumbers: new FormControl(null),
      dateOfBirth: new FormControl(null),
      academicSessions: new FormControl(null)
    });
  }

  initializeFilterView(): void {
    this.filterViewModel = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      classIds: [],
      admissionNumbers: [],
      studentNames: [],
      studentId: '',
      parentNames: [],
      statusIds: [],
      academicSessions: []
    };
  }

  setColumnHeaders(): void {
    this.columns = [
      { field: 'studentName', header: 'Student Name', sort: true },
      { field: 'academicSession', header: 'Academic Session', sort: true },
      { field: 'fatherName', header: 'Father Name', sort: true },
      { field: 'motherName', header: 'Mother Name', sort: true },
      { field: 'guardianName', header: 'Guardian Name', sort: true },
      { field: 'class', header: 'Current Class', sort: true },
      { field: 'admissionNumber', header: 'Admission Number', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'dateOfBirth', header: 'Date Of Birth', sort: true },
      { field: 'actions', header: 'Actions ', sort: false }
    ];
  }

  initializeTableSettings(): void {
    this.tableSettings = {
      rows: [],
      columns: this.columns,
      tablename: 'Students',
      componentName: this.currentComponent,
      model: this.filterViewModel,
      filtersList: [],
      headerOperations: {
        addingForm: {
          required: true
        }
      }
    };
  }

  tableData(_event: StudentDBSearchView): void {
    Object.assign(_event, {studentId: this.filterViewModel.studentId});
    this.filterViewModel = _event;
    this.updateFilterViewModel();
    this.getAllFilteredStudents();
  }

  getAllFilteredStudents(): void {
    if (this.searchForm === undefined) {
      return;
    }
    // this.updateFilterViewModel();

    this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
    this.studentDbService.filteredStudents(this.filterViewModel.studentId,
      this.filterViewModel.studentNames,
      this.filterViewModel.academicSessions, this.filterViewModel.parentNames,
      this.filterViewModel.admissionNumbers,
      this.filterViewModel.classIds,
      this.filterViewModel.statusIds, this.filterViewModel.dateOfBirthBegin, this.filterViewModel.dateOfBirthEnd, this.filterViewModel.sortOrder, this.filterViewModel.sortBy,
      this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
      subscribe(res => {
        this.bindStudentResult(res);
      }, error => {
        this.errorResponse(error);
      });
  }

  updateFilterViewModel(): void {
    
    const data = this.searchForm.value;
    if (data.parentNames != null) {
      this.filterViewModel.parentNames = [data.parentNames];
    } else {
      this.filterViewModel.parentNames = [];
    }
    if (data.studentNames != null) {
      this.filterViewModel.studentNames = typeof (data.studentNames) === 'object' ? [data.studentNames.studentName] : [data.studentNames];
    } else {
      this.filterViewModel.studentNames = [];
      this.filterViewModel.studentId = '';
    }
    this.filterViewModel.classIds = data.classIds;
    this.filterViewModel.statusIds = data.statusIds;
    this.filterViewModel.academicSessions = data.academicSessions;

    if (data.admissionNumbers != null) {
      this.filterViewModel.admissionNumbers = [data.admissionNumbers];
    } else {
      this.filterViewModel.admissionNumbers = [];
    }
    if (data.dateOfBirth != null) {
      this.filterViewModel.dateOfBirthBegin = data.dateOfBirth.begin.format(AppSettings.API_DATE_PATTERN);
      this.filterViewModel.dateOfBirthEnd = data.dateOfBirth.end.format(AppSettings.API_DATE_PATTERN);
    }
    else {
      this.filterViewModel.dateOfBirthBegin = this.filterViewModel.dateOfBirthEnd = null;
    }
  }

  bindStudentResult(data: StudentResultView): void {
    this.showCustomCard = false;
    if (data !== null && data.filters !== null) {
      data.filters.forEach(filter => {

        switch (filter.name) {
          case 'classIds':
            this.classes = filter.options;
            break;
          case 'statusIds':
            this.studentStatuses = filter.options;
            break;
          case 'academicSessions':
            this.academicSessions = filter.options;
            break;
        }
        if (filter.options && filter.options.find(option => option.isSelected === true) !== undefined) {
          this.searchForm.controls[filter.name].setValue(
            filter.options.find(option => option.isSelected === true).value
          );
        }
        else if (this.searchForm.controls[filter.name] !== undefined && filter.value) {
          if (filter.name === 'studentNames') {
            this.studentNameAutoInput.nativeElement.value = filter.value;
          }
          else if (filter.name === 'dateOfBirth' && this.filterViewModel.dateOfBirthBegin) {
            const dateRangeObj = { begin: new Date(this.filterViewModel.dateOfBirthBegin), end: new Date(this.filterViewModel.dateOfBirthEnd) };
            this.searchForm.controls[filter.name].setValue(dateRangeObj);
          }
          else {
            this.searchForm.controls[filter.name].setValue(filter.value);
          }
        }


      });
    }
    if (!data.pagedStudentViewModels) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {

      data.pagedStudentViewModels.list.forEach(element => {
        element.dateOfBirth = element.dateOfBirth != null ? this.commonService.customDateFormat(element.dateOfBirth.toString(), this.getSchoolDateFormat()).date : null;
      });
      this.rows = data.pagedStudentViewModels.list;
      this.totalRowsCount = data.pagedStudentViewModels.totalItems;
      this.pageCnt = data.pagedStudentViewModels.totalPages;
      this.rows.forEach(e => {
        e.operations = [
          {
            name: AppSettings.EDIT_OPERATION,
            icon: AppSettings.EDIT,
            operationName: AppSettings.EDIT
          }, {
            name: AppSettings.VIEW,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.VIEW
          }
        ];
      });
    }

    if (data.pagedStudentViewModels) {
      this.filterViewModel.pageNumber = data.pagedStudentViewModels.pageNumber;
    }
    this.tableSettings = {
      model: this.filterViewModel,
      rows: this.rows,
      columns: this.columns,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      tablename: 'Student Database',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      filtersList: [], // data.filters,
      hideHeader: true
    };
    setTimeout(() => {
      this.scrollIntoViewById('student-database-table');
    });
    this.cd.detectChanges();
  }

  // Actions Performing on the row
  actions(operationData: any): void {
    if (operationData.operation === AppSettings.VIEW.toLowerCase()) {
      this.router.navigate([RouteConfig._Student_Details + '/' + operationData.clickedRow.id]);
    } else if (operationData.operation === AppSettings.EDIT.toLowerCase()) {
      this.router.navigate([RouteConfig._Add_Edit_Student + '/' + operationData.clickedRow.id]);
    }
  }

  displayFn(data: any): void {
    return data ? data.studentName : undefined;
  }

  getSelectedStudent(value: any): void {
    if (value.studentName) {
      this.initializeFilterView();
      this.filterViewModel.studentNames = [value.studentName];
      this.filterViewModel.studentId = value.id;
      this.getAllFilteredStudents();
      if (value) {
        this.searchForm.controls['studentNames'].setValue(value);
      }
    }
  }

  searchStudent(data: any): void {
    if (!this.searchForm.valid) {
      return;
    }
    this.searchForm.controls['studentNames'].patchValue(null);
    this.updateFilterViewModel();
    this.getAllFilteredStudents();
  }


  openForm(): void {
    this.router.navigate([RouteConfig._Add_Edit_Student]);
  }

  onClear(): void {
    this.searchForm.reset();
    this.initializeFilterView();
    this.filterViewModel.reset = true;
    this.initializeTableSettings();
    // this.setModelDataTableComponent(this.currentComponent, null);
    this.clearStorageComponent(this.currentComponent);
    this.showCustomCard = true;
  }

  getAcademicSession(): void {
    // const currentSchool = JSON.parse(localStorage.getItem('_s'));
    this.academicSessionService.academicSessionAllAcademicSessionsBySchoolIdGet()
      .subscribe(
        response => {
          if (response.academicSessionView.length) {
            let setAcdademicSessionId = null;
            const newAcademicSessions = [];
            const completedAcademicSessions = [];
            this.academicSessions = [];
            response.academicSessionView.forEach(element => {
              if (element.statusCode === AppSettings.ACADEMICSESSION_ACTIVE) {
                setAcdademicSessionId = element.id;
              } else if (element.statusCode === AppSettings.ACADEMICSESSION_NEW) {
                newAcademicSessions.push(element);
              }
              else {
                completedAcademicSessions.push(element);
              }
              this.academicSessions.push({
                value: element.id, label: element.displayName
              });
            });
            setAcdademicSessionId = setAcdademicSessionId ?
              setAcdademicSessionId : newAcademicSessions.length ? newAcademicSessions[0].id : completedAcademicSessions.length ? completedAcademicSessions[0].id : null;
              
            if (!this.filterViewModel.reset) {
              this.searchForm.controls['academicSessions'].setValue(setAcdademicSessionId);
            }
          }
        });
  }

}

