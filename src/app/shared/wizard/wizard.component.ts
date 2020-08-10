import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { MatStepper } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WizardService } from './wizard.service';
import { ClassesComponent } from '../../modules/configuration/general/classes/classes.component';
import { SectionComponent } from '../../modules/configuration/general/section/section.component';
import { CoursesComponent } from '../../modules/configuration/general/courses/courses.component';
import { ManageSchoolComponent } from '../../modules/school-admin/manage-school/manage-school.component';
import { SchoolInfrastructureComponent } from '../../modules/school-admin/school-infrastructure/school-infrastructure.component';
import { SequenceConfigurationComponent } from '../../modules/school-admin/sequence-configuration/sequence-configuration.component';
import { CourseCategoriesComponent } from '../../modules/configuration/general/course-categories/course-categories.component';
import { ClassperiodtypesComponent } from '../../modules/configuration/general/classperiodtypes/class-period-types.component';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentApplicationCategoriesComponent } from '../../modules/configuration/general/student-application-categories/student-application-categories.component';
import { EventTypesComponent } from '../../modules/configuration/general/event-types/event-types.component';
import { SchoolFacilitiesComponent } from '../../modules/configuration/general/school-facilities/school-facilities.component';
import { SchoolFacilityRepresentativesComponent } from '../../modules/staff/staff-information-system/school-facility-representatives/school-facility-representatives.component';
import { StudentGroupRepresentativeRoleComponent } from '../../modules/configuration/general/student-group-representative-role/student-group-representative-role.component';
import { AssessmentGroupsComponent } from '../../modules/configuration/assessment/assessment-groups/assessment-groups.component';
import { AssessmentCategoriesComponent } from '../../modules/configuration/assessment/assessment-categories/assessment-categories.component';
import { AssessmentParametersComponent } from '../../modules/configuration/assessment/assessment-parameters/assessment-parameters.component';
import { ClassAssessmentConfigurationComponent } from '../../modules/configuration/assessment/class-assessment-configuration/class-assessment-configuration.component';
import { AcademicGradesComponent } from '../../modules/configuration/grading/academic-grades/academic-grades.component';
import { AssessmentGradesComponent } from '../../modules/configuration/grading/assessment-grades/assessment-grades.component';
import { TestTypeComponent } from '../../modules/configuration/grading/test-type/test-type.component';
import { GradingTermsComponent } from '../../modules/configuration/grading/grading-terms/grading-terms.component';
import { FeeTermsComponent } from '../../modules/configuration/finance/fee-terms/fee-terms.component';
import { FeeTypeComponent } from '../../modules/configuration/finance/fee-type/fee-type.component';
import { FeeTypeTranchesComponent } from '../../modules/configuration/finance/fee-type-tranches/fee-type-tranches.component';
import { FeeConcessionGroupComponent } from '../../modules/configuration/finance/fee-concession-group/fee-concession-group.component';
import { LateFeeRulesComponent } from '../../modules/configuration/finance/late-fee-rules/late-fee-rules.component';
import { ManageFeesComponent } from '../../modules/configuration/finance/manage-fees/manage-fees.component';
import { ManageFeeTranchesComponent } from '../../modules/configuration/finance/manage-fee-tranches/manage-fee-tranches.component';
import { SchoolScheduleTemplatesComponent } from '../../modules/configuration/class-schedules/school-schedule-templates/school-schedule-templates.component';
import { ClassTimetableComponent } from '../../modules/configuration/class-schedules/class-timetable/class-timetable.component';
import { HolidaysComponent } from '../../modules/configuration/class-schedules/holidays/holidays.component';
import { SchoolServiceProviderConfigView } from '../../modules/school-admin/models/school-service-provider-config-view';
import { ServiceConfigurationComponent } from '../../modules/school-admin/service-configuration/service-configuration.component';
import { CommunicationTypesComponent } from '../../modules/configuration/communication/communication-types/communication-types.component';
import { FeeAccountsComponent } from 'app/modules/configuration/finance/fee-accounts/fee-accounts.component';

import { SchoolRepRoleComponent } from 'app/modules/configuration/general/school-rep-role/schoolreprole/schoolreprole.component';
import { Location } from '@angular/common';
import { CommonComponent } from '../common/common.component';
import { AcademicSessionComponent } from 'app/modules/configuration/academic/academic-session/academic-session.component';
import { ClassTimetablesComponent } from 'app/modules/configuration/class-schedules/class-timetables/class-timetables.component';
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent extends CommonComponent  implements AfterViewInit, AfterViewChecked, OnInit {
  @ViewChild('wizardStepper')
  wizardStepper: MatStepper;
  currentSetup: string;
  wizardInfo: any;
  steps = [];
  wizardStatus: {};
  public selectedIndex = 0;
  @HostListener('window:popstate', ['$event'])


  components = {
    'ClassesComponent': ClassesComponent,
    'SectionComponent': SectionComponent,
    'CoursesComponent': CoursesComponent,
    'ManageSchoolComponent': ManageSchoolComponent,
    'SchoolInfrastructureComponent': SchoolInfrastructureComponent,
    'SequenceConfigurationComponent': SequenceConfigurationComponent,
    'CourseCategoriesComponent': CourseCategoriesComponent,
    'ClassperiodtypesComponent': ClassperiodtypesComponent,
    'StudentApplicationCategoriesComponent': StudentApplicationCategoriesComponent,
    'AcademicSessionsComponent': AcademicSessionComponent,
    'EventTypesComponent': EventTypesComponent,
    'SchoolFacilitiesComponent': SchoolFacilitiesComponent,
    'SchoolRepRoleComponentComponent': SchoolRepRoleComponent,
    'StudentGroupRepresentativeRoleComponent': StudentGroupRepresentativeRoleComponent,
    'AssessmentGroupsComponent': AssessmentGroupsComponent,
    'AssessmentCategoriesComponent': AssessmentCategoriesComponent,
    'AssessmentParametersComponent': AssessmentParametersComponent,
    'ClassAssessmentConfigurationComponent': ClassAssessmentConfigurationComponent,
    'AcademicGradesComponent': AcademicGradesComponent,
    'AssessmentGradesComponent': AssessmentGradesComponent,
    'TestTypeComponent': TestTypeComponent,
    'GradingTermsComponent': GradingTermsComponent,
    'FeeTermsComponent': FeeTermsComponent,
    'FeeTypeComponent': FeeTypeComponent,
    'FeeTypeTranchesComponent': FeeTypeTranchesComponent,
    'FeeConcessionGroupComponent': FeeConcessionGroupComponent,
    'LateFeeRulesComponent': LateFeeRulesComponent,
    'ManageFeesComponent': ManageFeesComponent,
    'ManageFeeTranchesComponent': ManageFeeTranchesComponent,
    'SchoolScheduleTemplatesComponent': SchoolScheduleTemplatesComponent,
    'ClassTimetableComponent': ClassTimetablesComponent,
    'HolidaysComponent': HolidaysComponent,
    'ServiceConfigurationComponent': ServiceConfigurationComponent,
    'CommunicationTypesComponent': CommunicationTypesComponent,
    'FeeAccountsComponent': FeeAccountsComponent,

  };

  loadedSteps = [];
  setIndex: number;
  constructor(activatedRoute: ActivatedRoute,
    public wizardService: WizardService,
    private sanitizer: DomSanitizer,
    public location: Location
  ) {
    super();
    this.currentSetup = activatedRoute.snapshot.url[0].path;  // to print only path eg:"/login
    this.getWizardSettings();
  }
  // onPopState(event): void {
  //   this.switchTabs(window.location.hash);
  // }

  ngOnInit(): void {
    if (!window.location.hash) {
      this.selected(this.selectedIndex);
    }
    else {
      this.switchTabs(window.location.hash);
    }
  }

  public selectionChanged(event: any): void {
    this.selectedIndex = event.selectedIndex;
    this.setIndex = event.selectedIndex - 1;
    this.loadedSteps[event.selectedIndex] = true;
  }

  public stepLoaded(step): boolean {

    return (this.loadedSteps[step] !== undefined && this.loadedSteps[step]) ? true : false;

  }
  public ngAfterViewInit(): void {

  }

  public ngAfterViewChecked(): void {
    // this.wizardStepper.selectedIndex = this.selectedIndex;
  }

  public startWizard(): void {
    // this.wizardStepper.next();
    this.selectedIndex = this.selectedIndex + 1;
  }

  public getWizardSettings(): any {
    this.wizardService.wizardGet(this.currentSetup)
      .subscribe(
        response => {
          this.selectedIndex = 0;
          const stepsInfo = JSON.parse(response.wizardConfigData.config);
          this.wizardInfo =  this.sanitizer.bypassSecurityTrustHtml(response.wizardConfigData.description);
          const stepsStatus = (response.wizardConfigData.status == null) ? {} : JSON.parse(response.wizardConfigData.status);
          let i = 1;
          let completedIndex = null;
          stepsInfo.forEach(componentDetails => {
            const ComponentType = this.components[componentDetails.component];
            componentDetails.componentObj = ComponentType;
            if (stepsStatus[componentDetails.component] === undefined) {
              stepsStatus[componentDetails.component] = 'pending';
            }
            if (stepsStatus[componentDetails.component] === 'pending' && !this.selectedIndex) {
              this.selectedIndex = i;
            }
            if (stepsStatus[componentDetails.component] === 'complete') {
              completedIndex = i + 1;
            }
            this.selectedIndex = (response.wizardConfigData.status == null) ? 0 : this.selectedIndex;
            i++;
          });
          if (completedIndex && !this.selectedIndex){
            this.selectedIndex = completedIndex;
          }
          this.steps = stepsInfo;
          this.wizardStatus = [];
          this.wizardStatus = stepsStatus;
          if (!window.location.hash) {
            this.selected(this.selectedIndex);
          }
          else {
            this.switchTabs(window.location.hash);
          }
        }, error => {
          this.errorResponse(error);
        }
      );
  }

  public markAsCompleted(event, component): any {
    const currentStatus = (!event.checked) ? 'pending' : 'complete';
    this.updateStatus(currentStatus, component);
  }

  public updateStatus(status: string, component: string): any {
    this.wizardStatus[component] = status;
    this.wizardService.update(this.currentSetup, JSON.stringify(this.wizardStatus))
      .subscribe(
        response => {
          if (status === 'complete') {
            let nextIndex = null;
            Object.keys(this.wizardStatus).forEach((key, index) => {
              if (component === key) {
                nextIndex = index + 1;
              }
            });
            if (this.steps.length !== nextIndex && this.wizardStatus[this.steps[nextIndex].component] === 'pending') {
              this.selectedIndex = this.selectedIndex + 1;
            } else {
              let i = null;
              for (let index = 0; index < this.steps.length; index++) {
                if (this.wizardStatus[this.steps[index].component] === 'pending') {
                  i = index;
                  break;
                }
              }
              if (this.selectedIndex === this.steps.length && i !== null) {
                this.selectedIndex = i + 1;
              } else if (this.selectedIndex !== this.steps.length && i !== null) {
                this.selectedIndex = i + 1;
              } else {
                this.selectedIndex = this.steps.length + 1;
              }
            }
          }
        }
      );
  }

  selected(value: number): void {
    if (value > this.steps.length) {
      window.location.hash = 'Done';
    } else if (value === 0) {
      window.location.hash = 'Start';
    }
    else {
      const i = value > 0 ? value - 1 : value;
      window.location.hash = this.steps[i].title;
    }

  }

  switchTabs(value): void {
    if (decodeURIComponent(value).split('#')[1]) {
      this.selectedIndex = this.steps.findIndex(x => x.title === decodeURIComponent(value).split('#')[1]) + 1;
      if (this.selectedIndex === 0) {
        this.selectedIndex = (decodeURIComponent(value).split('#')[1] === 'Done') ? this.steps.length + 2 : 0;
      }
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event): void {
    this.switchTabs(window.location.hash);
  }
}
