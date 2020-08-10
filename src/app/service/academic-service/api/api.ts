import { AcademicSessionService } from './academic-session.service';
import { StudentDatabaseService } from './student-database.service';
import { UsersService } from './user.service';
import { UIThemeService  } from './uitheme.service';
import { ClassPeriodTypeService } from './class-period-type.service';
import { AssessmentCategoriesService } from 'app/service/assessment-service/api/assessment-categories.service';

export * from './user.service';
export * from './uitheme.service';
export * from './academic-session.service';
export const APIS = [UsersService, UIThemeService, AcademicSessionService, StudentDatabaseService, AssessmentCategoriesService, ClassPeriodTypeService];
