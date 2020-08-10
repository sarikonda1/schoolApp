import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedManagementModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatcomponentsModule } from 'app/main/matcomponents.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { PreAddmStdApplicationReportComponent } from './pre-addm-std-application-report/pre-addm-std-application-report.component';
import { ReportsComponent } from './reports/reports.component';
import { AdmAppSummaryReportComponent } from './adm-app-summary-report/adm-app-summary-report.component';
import { SchoolReportsService } from 'app/service/reports/reports.service';
import { InactiveStdApplicationsReportComponent } from './inactive-std-applications-report/inactive-std-applications-report.component';
import { StudentsStrengthComponent } from './students-strength/students-strength.component';
import { StudentsAttendanceReportComponent } from './students-attendance-report/students-attendance-report.component';
import { ConcessionStdReportComponent } from './concession-std-report/concession-std-report.component';
import { PaymentCorrectionReportComponent } from './payment-correction-report/payment-correction-report.component';
import { StaffAttndReportComponent } from './staff-attnd-report/staff-attnd-report.component';
import { AdmStdReportComponent } from './adm-std-report/adm-std-report.component';
import { FailedPaymentReportComponent } from './failed-payment-report/failed-payment-report.component';
import { PaymentDueReportComponent } from './payment-due-report/payment-due-report.component';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { ReportGenerationService } from 'app/service/reports/generate-pdf.service';
import { FeeCollectionReportComponent } from './fee-collection-report/fee-collection-report.component';
import { ExaminationScheduleReportComponent } from './examination-schedule-report/examination-schedule-report.component';
import { StudentFeeReceiptComponent } from './student-fee-receipt/student-fee-receipt.component';
import { StudentDatabaseService } from 'app/service/academic-service/api/student-database.service';
import { SatDatepickerModule } from 'saturn-datepicker';
import { MarksEntryReportComponent } from './marks-entry-report/marks-entry-report.component';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';

@NgModule({
  declarations: [PreAddmStdApplicationReportComponent, ReportsComponent, AdmAppSummaryReportComponent, 
    InactiveStdApplicationsReportComponent, StudentsStrengthComponent, StudentsAttendanceReportComponent, ConcessionStdReportComponent, 
    PaymentCorrectionReportComponent, StaffAttndReportComponent, 
    AdmStdReportComponent, FailedPaymentReportComponent, 
    PaymentDueReportComponent, FeeCollectionReportComponent, ExaminationScheduleReportComponent, StudentFeeReceiptComponent, MarksEntryReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    RouterModule,
    FormsModule,
    SharedManagementModule,
    TranslateModule,
    FuseSharedModule,
    MatcomponentsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    SatDatepickerModule
  ],
  providers: [SchoolReportsService, ClassesConfigService, ReportGenerationService, StudentDatabaseService, GradeSetupService, ClassTimetableService]
})
export class ReportsModule { }
