import { Component, OnInit } from '@angular/core';
import {ClassAssessmentGradesComponent} from '../../academics/grading/class-assessment-grades/class-assessment-grades.component';
import {GardeTermConfigurationService} from '../../../service/grading-service/api/garde-term-configuration.service';
import {AssessmentParameterService} from '../../../service/assessment-service/api/assessment-parameters.service';
import {StudentAssessmentGradeService} from '../../../service/grading-service/api/student-assessment-grade.service';
import {StudentDBService} from '../../../service/student-information-system/student-db.service';
import {GradeReportService} from '../../../service/report-card-service/grade-report.service';
import {StudentDatabaseService} from '../../../service/academic-service/api/student-database.service';

@Component({
    selector: 'staff-class-assessment-grades',
    templateUrl: '../../academics/grading/class-assessment-grades/class-assessment-grades.component.html',
    styleUrls: ['../../academics/grading/class-assessment-grades/class-assessment-grades.component.scss'],
    providers: [ StudentDBService, GradeReportService, StudentDatabaseService, GardeTermConfigurationService, AssessmentParameterService, StudentAssessmentGradeService]
})
export class StaffClassAssessmentGradesComponent extends ClassAssessmentGradesComponent implements OnInit{
    
    ngOnInit(): void {
        this.isStaffLogin = true;
        this.initializeForm();
    }
}
