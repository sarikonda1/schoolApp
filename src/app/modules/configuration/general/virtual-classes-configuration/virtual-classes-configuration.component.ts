import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { AppSettings } from 'app/app.constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'app/service/common.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { TypeService } from 'app/service/academic-service/api/type.service';
import { SchoolVirtualClassService } from 'app/service/general/api/school-virtual-class.service';
import { SchoolVirtualClassesView } from '../models/school-virtual-classes-view';
import { SearchVirtualClassesView } from '../models/search-virtual-classes-view';
import { SchoolVirtualClassStatusView } from '../models/school-virtual-class-status-view';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-virtual-classes-configuration',
  templateUrl: './virtual-classes-configuration.component.html',
  styleUrls: ['./virtual-classes-configuration.component.scss']
})
export class VirtualClassesConfigurationComponent extends CommonComponent implements OnInit {
  @ViewChild('virtualClassTemp') virtualClassTemp;
  @ViewChild('virtualClassNgForm') virtualClassNgForm;

  virtualForm: FormGroup;
  rows: Array<any>;
  totalItems: number;
  pageCnt: number;
  cols: any[];
  tabSettings: {};
  currentComponent = 'VirtualClassesConfigurationComponent';
  virtualClassModel: any;
  closeAddPanel = false;
  buttonName: any;
  classNames: any[] = [];
  sectionNames: any[] = [];
  courseList: any[] = [];
  configTypes: any[] = [];
  schoolVirtualClassesView: SchoolVirtualClassesView;
  searchVirtualClassesView: SearchVirtualClassesView;
  schoolVirtualClassStatusView: SchoolVirtualClassStatusView;
  totalRowsCount: any;

  constructor(public commonService: CommonService, private classTimetableService: ClassTimetableService, private schoolVirtualClassService: SchoolVirtualClassService,
    public snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.searchVirtualClassesView = {
      sortBy: '',
      sortOrder: 0,
      pageNumber: AppSettings.PAGENUMBER,
      pageSize: AppSettings.PAGESIZE,
      names: [],
      classes: [],
      sections: [],
      virtualClassId: [],
      courses: [],
      statuses: [],
    };
    const modelTableComponent = this.getModelComponent(this.currentComponent);
    if (modelTableComponent) {
      this.searchVirtualClassesView = modelTableComponent;
    }
    this.getVirtualClassesData();

    this.cols = [
      { field: 'className', header: 'Class', sort: true },
      { field: 'sectionName', header: 'Section', sort: true },
      { field: 'course', header: 'Course', sort: true },
      { field: 'virtualConfigClassName', header: 'Type', sort: true },
      { field: 'status', header: 'Status', sort: true },
      { field: 'actions', header: 'Actions', sort: false },
    ];

    this.schoolVirtualClassStatusView = {
      id: null,
      isActive: null
    };

    this.tabSettings = {
      rows: [],
      columns: this.cols,
      model: this.searchVirtualClassesView,
      tablename: 'Virtual Classes',
      componentName: this.currentComponent,
    };

    // initialization of form controls in form group
    this.virtualForm = new FormGroup({
      virtualClassConfigurationId: new FormControl('', [Validators.required]),
      classId: new FormControl('', [Validators.required]),
      sectionId: new FormControl(''),
      courseId: new FormControl(''),
    });
    this.getVirtualConfigs();
    this.getClasses();
  }

  addForm(): void {
    this.closeAddPanel = false;
    this.buttonName = AppSettings.SUBMIT;
    this.virtualClassNgForm.resetForm();
  }

  getVirtualClasses(searchVirtualClassesView: SearchVirtualClassesView): void {
    this.searchVirtualClassesView = searchVirtualClassesView;
    this.getVirtualClassesData();
  }

  getVirtualClassesData(): void {
    this.schoolVirtualClassService.schoolVirtualClassesList(
      this.searchVirtualClassesView.names,
      this.searchVirtualClassesView.virtualClassId,
      this.searchVirtualClassesView.classes,
      this.searchVirtualClassesView.sections,
      this.searchVirtualClassesView.courses, this.searchVirtualClassesView.statuses, this.searchVirtualClassesView.virtualConfigurationClass,
      this.searchVirtualClassesView.sortBy,
      this.searchVirtualClassesView.sortOrder,
      this.searchVirtualClassesView.pageNumber,
      this.searchVirtualClassesView.pageSize).subscribe(res => {
        this.bindVirtualClassResult(res);
      },
        error => {
          this.errorResponse(error);
        });
  }

  bindVirtualClassResult(result: any): void {
    if (!result.virtualClassDetailsView) {
      this.rows = [];
      this.totalRowsCount = 0;
      this.pageCnt = 0;
    } else {
      this.rows = result.virtualClassDetailsView.list;
      this.totalRowsCount = result.virtualClassDetailsView.totalItems;
      this.pageCnt = result.virtualClassDetailsView.totalPages;
      this.rows.forEach(e => {
        (e.status === AppSettings.ACTIVE_STATUS) ?
          e.operations = [
            {
              name: AppSettings.INACTIVE_OPERATION,
              icon: AppSettings.INACTIVE_ICON,
            },
            {
              name: AppSettings.JOIN_ROOM_NAME,
              icon: AppSettings.JOIN_ROOM_ICON,
            },
          ] :
          e.operations = [
            {
              name: AppSettings.ACTIVE_OPERATION,
              icon: AppSettings.ACTIVE_ICON,
            },
          ];
      });
      if (result.virtualClassDetailsView) {
        this.searchVirtualClassesView.pageNumber = result.virtualClassDetailsView.pageNumber;
      }
    }

    this.tabSettings = {
      columns: this.cols,
      model: this.searchVirtualClassesView,
      rows: this.rows,
      tablename: 'Virtual Class Rooms',
      componentName: this.currentComponent,
      isPaginationRequired: true,
      totalRowsCount: this.totalRowsCount,
      pageCnt: this.pageCnt,
      headerOperations: {
        infoButton: {
          required: true,
          text: 'Virtual Classes'
        },
        addingForm: {
          required: true,
          btnName: AppSettings.NEW
        },
      },
      filtersList: result.filters,
    };

  }

  rowActions(action: any): void {
    if (action.operation === AppSettings.JOIN_ROOM_OPERATION) {
      this.schoolVirtualClassService.createRoomHash(action.clickedRow.id).subscribe(res => this.virtualRoomResponse(res), error => {
        this.errorResponse(error);
      });
    }
    else {
      this.schoolVirtualClassStatusView.id = action.clickedRow.id;
      this.schoolVirtualClassStatusView.isActive = action.operation === AppSettings.STATUS_ACTIVE ? true : false;
      this.schoolVirtualClassService.virtualClassesStatusUpdate(this.schoolVirtualClassStatusView).subscribe(res => this.virtualClassResponse(res), error => {
        this.errorResponse(error);
      });
    }
  }

  virtualRoomResponse(response: any): void {
    if (response.roomHashUrl) {
      window.open((response.roomHashUrl));
    }
  }

  getClasses(): void {
    this.classNames = [];
    this.commonService.schoolAcademicClasses(null, null).subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.classNames.push({
            label: element.name,
            value: element.id
          });
        });
      }
    }, error => {
      this.errorResponse(error);
    });
  }

  // on selection of class
  onSelectClass(data: any): void {
    if (data.value) {
      this.getSectionsBasedOnClass(data.value);
    } else {
      this.virtualForm.controls['sectionId'].setValue('');
      this.sectionNames = [];
    }
  }

  getSectionsBasedOnClass(classId: any): void {
    if (classId) {
      this.sectionNames = [];
      this.classTimetableService.classTimetableSectionsGet(classId).subscribe(res => {
        if (res.classTimetableSectionsView != null) {
          res.classTimetableSectionsView.map(x => {
            this.sectionNames.push({ value: x.sectionId, label: x.sectionName, boardId: x.boardId, boardName: x.boardName });
          });
          this.virtualForm.controls['sectionId'].reset();
        }
      });
    }
  }

  onSelectSection(sectionId: any): void {
    if (sectionId.value !== undefined) {
      this.getCourseList();
    }
    else{
      this.courseList = [];
      this.virtualForm.controls['courseId'].reset();
    }
  }

  getCourseList(): void {
    this.courseList = [];
    const sectionId = this.virtualForm.value.sectionId;
    const boardId = this.sectionNames.filter(function (val): boolean {
      return val.value === sectionId;
    });

    this.classTimetableService.classTimetableCoursesGet(boardId[0].boardId, this.virtualForm.value.classId).subscribe(res => {
      if (res.commonViewModel != null) {
        this.courseList = [];
        res.commonViewModel.map(x => {
          this.courseList.push({ value: x.id, label: x.name });
        });
      }
    });
  }

  getVirtualConfigs(): void {
    this.configTypes = [];
    this.schoolVirtualClassService.virtualClassesList().subscribe(response => {
      if (response.listViews && response.listViews.length) {
        response.listViews.forEach(element => {
          this.configTypes.push({
            label: element.name,
            value: element.id
          });
        });
      }
    });
  }

  onCancelClick(): void {
    this.closeAddPanel = true;
    this.sectionNames = [];
    this.courseList = [];
    this.virtualForm.reset();
    this.virtualClassNgForm.resetForm();
  }

  addVisualClass(): void {
    if (this.virtualForm.invalid) {
      return;
    }
    this.schoolVirtualClassesView = this.virtualForm.value;
    this.schoolVirtualClassService.postSchoolVirtualClass(this.schoolVirtualClassesView).subscribe(res => this.virtualClassResponse(res), error => {
      this.errorResponse(error);
    });
  }

  virtualClassResponse(response: any): void {
    this.openSnackBar(response.messages.ResultMessage);
    this.closeAddPanel = true;
    this.getVirtualClassesData();
  }
}
