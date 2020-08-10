import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from '../base/configuration';
import { UsersService } from './api/user.service';
import { UIThemeService  } from './api/uitheme.service';
import {AcademicSessionService} from './api/academic-session.service';
import {StudentDatabaseService} from './api/student-database.service';
import { ClassPeriodTypeService } from './api/class-period-type.service';
import { CoursesConfigurationService } from '../general/api/courses_configuration.service';
import { SectionService } from '../general/api/section.service';
import { AssessmentCategoriesService } from '../assessment-service/api/assessment-categories.service';
import { SequenceService } from './api/sequence.service';

@NgModule({
    imports:      [ CommonModule, HttpClientModule ],
    declarations: [],
    exports:      [],
    providers: [
        UsersService,
        UIThemeService,
        AcademicSessionService,
        StudentDatabaseService,
        AssessmentCategoriesService,
        ClassPeriodTypeService,
        SectionService,
        CoursesConfigurationService,
        StudentDatabaseService, SequenceService     
    ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
