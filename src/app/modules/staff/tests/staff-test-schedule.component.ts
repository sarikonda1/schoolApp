import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { Component, OnInit } from '@angular/core';
import { TestScheduleService } from 'app/service/grading-service/api/test-schedule-service';

import { TestScheduleComponent } from '../../academics/grading/test-schedule/test-schedule.component';
import { AppSettings } from '../../../app.constants';
import { SchedulesComponent } from '../../academics/grading/test-schedule/schedules.component';
import { TestScoreService } from 'app/service/grading-service/api/testScore.service';


@Component({
    selector: 'staff-test-schedule',
    templateUrl: '../../academics/grading/test-schedule/test-schedule.component.html',
    styleUrls: ['../../academics/grading/test-schedule/test-schedule.component.scss'],
    providers: [ClassesConfigService, GradeSetupService, ClassesConfigService, ClassTimetableService, TestScheduleService, GardeTermConfigurationService, TestScoreService]
})
export class StaffTestScheduleComponent extends TestScheduleComponent implements OnInit {
    isStaffLogin = true;

    updateRowActions(row: any): void {
        if (!row.isEditable) {
            return;
        }
        if (row.isHomeWorkTest) {
            row.operations = [
                {
                    name: AppSettings.EDIT_VIEW_OPERATION,
                    icon: AppSettings.EDIT,
                    operationName: AppSettings.EDIT_VIEW_OPERATION
                }
            ];
        }
        else {
            row.operations = [
                {
                    name: AppSettings.EDIT_OPERATION,
                    icon: AppSettings.EDIT,
                    operationName: AppSettings.EDIT
                }
            ];
        }
    }

}

@Component({
    selector: 'app-schedules-list',
    templateUrl: '../../academics/grading/test-schedule/schedules.component.html',
    styleUrls: ['../../academics/grading/test-schedule/schedules.component.scss'],
    providers: [ClassesConfigService, GradeSetupService, ClassesConfigService, ClassTimetableService, TestScheduleService, GardeTermConfigurationService]
})
export class StaffTestScheduleListComponent extends SchedulesComponent implements OnInit {
        isStaffLogin = true;


}
