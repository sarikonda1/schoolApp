import { Component } from '@angular/core';
import { ClassesConfigService } from 'app/service/general/api/classes-config.service';
import { GradeSetupService } from 'app/service/grading-service/api/grade-setup.service';
import { ClassTimetableService } from 'app/service/class-schedules/class-time-table.service';
import { ClassHomeWorkService } from 'app/service/assignments/class-home-work.service';
import { GardeTermConfigurationService } from 'app/service/grading-service/api/garde-term-configuration.service';
import { StoreService } from 'app/service/file-management/store.service';
import {HomeworksAssignmentsComponent} from '../assignments/homeworks-assignments/homeworks-assignments.component';
import {AppSettings} from '../../../app.constants';

@Component({
  selector: 'staff-homeworks-assignments',
  templateUrl: '../assignments/homeworks-assignments/homeworks-assignments.component.html',
  styleUrls: ['../assignments/homeworks-assignments/homeworks-assignments.component.scss'],
  providers: [ClassesConfigService, GradeSetupService, ClassesConfigService, ClassTimetableService, ClassHomeWorkService, GardeTermConfigurationService, StoreService]
})
export class StaffHomeworksAssignmentsComponent extends HomeworksAssignmentsComponent {
  updateActions(): void {

    this.filterRowData.forEach(element => {
      if (element.isEditable) {

        element.operations = [
          // {
          //   name: AppSettings.EDIT_OPERATION,
          //   icon: AppSettings.EDIT,
          //   operationName: AppSettings.EDIT
          // },
           {
            name: AppSettings.DETAILS,
            icon: AppSettings.DETAILS_ICON,
            operationName: AppSettings.DETAILS
          },
          {
            name: AppSettings.DELETE_OPERATION,
            icon: AppSettings.DELETE,
            operationName: AppSettings.DELETE
          },
        ];
        if (element.testScheduleId !== null) {
          element.operations.push(
              {
                name: AppSettings.MARKS,
                icon: AppSettings.MARKS_ICON,
                operationName: AppSettings.MARKS
              });
        }

      }
    });
  }
}
