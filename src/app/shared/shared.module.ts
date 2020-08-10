import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { Error500Module } from './errors/500/error-500.module';
import { Error404Module } from './errors/404/error-404.module';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { TableComponent } from './table/table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { HostDirective } from './host.directive';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ValidationComponent } from './validation/validation.component';
import { CommonService } from 'app/service/common.service';
import { MatRangeDatepickerModule, MatRangeNativeDateModule } from 'mat-range-datepicker';
import { UpdateInstituteComponent } from './update-institute/update-institute.component';
import { DATE_ADAPTER, MAT_CUSTOM_DATE_FORMATS } from './common/common.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AddEditInstituteComponent } from 'app/modules/lshp-admin/add-edit-institute/add-edit-institute.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SatDatepickerModule } from 'saturn-datepicker';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomTimepickerComponent } from './custom-timepicker/custom-timepicker.component';
import { AfSelectComponent } from './af-select/af-select.component';
import { TimeValidator } from './custom-timepicker/custom-timepicker.validators';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Error403Module } from './errors/403/error-403.module';
import { RangesFooterComponent } from './table/ranges-footer.component';
import { AddStaffAdmissionFormComponent } from './add-staff-admission-form/add-staff-admission-form.component';
import { StudentBasicSearchComponent } from './student-basic-search/student-basic-search.component';
import { AfDetailsComponent } from './af-details/af-details.component';
import { AfRazorpayComponent } from './payment-gateway/razorpay/af-razorpay.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { RegisterComponent } from './register/register.component';
import { CommunicationTypesService } from 'app/service/configuration/communication-types.service';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarComponent } from './calendar/calendar.component';
import { UserService } from 'app/service/user-management/api/user.service';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FuseSidebarModule, FuseWidgetModule} from '../../@fuse/components';
import {PayemtGatewayOptionsComponent} from './payment-gateway/payemt-gateway-options/payemt-gateway-options.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewsWidgetComponent} from './widgets/news/news-widget.component';
import { StudentSummaryComponent } from './widgets/student-summary/student-summary.component';
import {TestSchedulesWidgetComponent} from './widgets/test-schedules/test-schedules-widget.component';
import { FeeComponent } from './widgets/fee/fee.component';
import { TransportationComponent } from './widgets/transportation/transportation.component';
import { StaffSummaryComponent } from './widgets/staff-summary/staff-summary.component';
import { BirthdaysComponent } from './widgets/birthdays/birthdays.component';
import { NoticeboardComponent } from './widgets/noticeboard/noticeboard.component';
import { AttendanceComponent } from './widgets/attendance/attendance.component';
import { CalendarDataComponent } from './widgets/calendar-data/calendar-data.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {AfPaypalComponent} from './payment-gateway/paypal/af-paypal.component';
import {DemoComponent} from './demo/demo.component';
import { ClassSummaryComponent } from './widgets/class-summary/class-summary.component';
import {CalendarModule as AngularCalendarModule} from 'angular-calendar';
import {MatProgressSpinnerModule} from '@angular/material';
import { AfLoaderComponent } from './af-loader/af-loader.component';
import { JobApplicationDetailsViewComponent } from './job-application-details-view/job-application-details-view.component';
import { AddEditStudentAdmissionComponent } from './add-edit-student-admission/add-edit-student-admission.component';
import { TestGradingComponent } from './test-grading/test-grading.component';
import { AfFiltersComponent } from './af-filters/af-filters.component';
import { AfSimpleTableComponent } from './af-simple-table/af-simple-table.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { AfReportTableComponent } from './af-report-table/af-report-table.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { OnlineStudentApplicationsComponent } from './online-student-applications/online-student-applications.component';
import { AddEditStudentApplicationComponent } from './add-edit-student-application/add-edit-student-application.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FuseSharedModule,
        Error404Module,
        Error500Module,
        Error403Module,
        CdkTableModule,
        MatcomponentsModule,
        TranslateModule,
        NgxMatSelectSearchModule,
        ScrollingModule,
        MatRangeDatepickerModule,
        MatRangeNativeDateModule,
        Ng2TelInputModule,
        SatDatepickerModule,
        CalendarModule,
        AngularCalendarModule,
        ChartsModule,
        NgxChartsModule,
        DragDropModule,
        FuseWidgetModule,
        FuseSidebarModule,
        // BrowserAnimationsModule,
        NgxPayPalModule,
        MatProgressSpinnerModule,
        ProgressBarModule

    ],
  declarations: [
    HomeComponent,
    LoginComponent,
      DemoComponent,
    CustomDialogComponent,
    AddStaffAdmissionFormComponent,
    TableComponent,
    CustomDropdownComponent,
    HostDirective,
    BreadcrumbsComponent,
    ValidationComponent,
    UpdateInstituteComponent,
    AddEditInstituteComponent,
    CustomCardComponent,
    CustomTimepickerComponent,
    AfSelectComponent,
    AfRazorpayComponent,
    AfPaypalComponent,
    TimeValidator,
    ForgotPasswordComponent,
    RangesFooterComponent,
    StudentBasicSearchComponent,
    AfDetailsComponent,
    CustomSnackbarComponent,
    RegisterComponent,
    PayemtGatewayOptionsComponent,
      NewsWidgetComponent,
      StudentSummaryComponent,
      TestSchedulesWidgetComponent,
      FeeComponent,
      TransportationComponent,
      StaffSummaryComponent,
      BirthdaysComponent,
      NoticeboardComponent,
      AttendanceComponent,
      CalendarDataComponent,
      ClassSummaryComponent,
      AfLoaderComponent,
      JobApplicationDetailsViewComponent,
      AddEditStudentAdmissionComponent,
      TestGradingComponent,
      AfFiltersComponent,
      AfSimpleTableComponent,
      AfReportTableComponent,
      ReportHeaderComponent,
      OnlineStudentApplicationsComponent,
      AddEditStudentApplicationComponent
  ],
  exports: [
    CustomDialogComponent,
    TableComponent,
    BreadcrumbsComponent,
    ValidationComponent,
    CustomDropdownComponent,
    AddStaffAdmissionFormComponent,
    AddEditInstituteComponent,
    CustomCardComponent,
    CustomTimepickerComponent,
    AfSelectComponent,
    AfRazorpayComponent,
    RangesFooterComponent,
    AfDetailsComponent,
    CustomSnackbarComponent,
    CalendarComponent,
    PayemtGatewayOptionsComponent,
    JobApplicationDetailsViewComponent,
    AddEditStudentAdmissionComponent,
    AfLoaderComponent,
    TestGradingComponent,
    AfFiltersComponent,
    AfSimpleTableComponent,
    AfReportTableComponent,
    AddEditStudentApplicationComponent
  ],
  providers: [
    DATE_ADAPTER,
    DatePipe,
    MAT_CUSTOM_DATE_FORMATS,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }, CommunicationTypesService, UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA],
  entryComponents: [
    RangesFooterComponent,
    CustomSnackbarComponent,
    NewsWidgetComponent,
    StudentSummaryComponent,
    TestSchedulesWidgetComponent,
    FeeComponent,
    TransportationComponent,
    StaffSummaryComponent,
    BirthdaysComponent,
    NoticeboardComponent,
    AttendanceComponent,
    CalendarDataComponent,
    ClassSummaryComponent,
    AfLoaderComponent
  ],

})

export class SharedManagementModule { }
