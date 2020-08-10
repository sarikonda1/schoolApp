import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { SharedManagementModule } from './shared/shared.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AcademicSessionService, UsersService, UIThemeService } from './service/academic-service';
import { RightService } from './service/user-management/api/right.service';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { MatcomponentsModule } from './main/matcomponents.module';
import {
    MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatStepperModule, MatPaginatorModule, MatDatepickerModule
} from '@angular/material';
import { ClassPeriodTypeService } from './service/academic-service/api/class-period-type.service';
import { ConfigurationModule } from './modules/configuration/configuration.module';

import { CommonComponent } from './shared/common/common.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AssessmentCategoriesService } from './service/assessment-service/api/assessment-categories.service';
import { CommonService } from './service/common.service';
import { MatRangeDatepickerModule, MatRangeNativeDateModule } from 'mat-range-datepicker';
import { CreatePasswordComponent } from './shared/create-password/create-password.component';
import { SatNativeDateModule } from 'saturn-datepicker';
import { SchoolService } from './service/manage-school/school.service';
import { AcademicsModule } from './modules/academics/academics.module';
import { CountryService } from './service/academic-service/api/country.service';
import { StateService } from './service/academic-service/api/state.service';
import { TypeService } from './service/academic-service/api/type.service';
import { LanguageService } from './service/academic-service/api/language.service';
import { StoreService } from './service/file-management/store.service';
import { ClassSectionService } from './service/academic-service/api/class-section.service';
import { LocalizationService } from './modules/manage-role-right/service/localization.service';
import {Error403Module} from './shared/errors/403/error-403.module';
import { AfLoaderComponent } from './shared/af-loader/af-loader.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { LeaveRequestService } from './service/academic-service/api/leave-request.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginLayoutComponent,
        HomeLayoutComponent,
        CreatePasswordComponent,
        CommonComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        MatMomentDateModule,
        MatStepperModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatRangeDatepickerModule,
        MatRangeNativeDateModule,
        MatInputModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        NgHttpLoaderModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        LayoutModule,
        SharedManagementModule,
        OAuthModule.forRoot(),
        MatcomponentsModule,
        MatTableModule,
        SatNativeDateModule,
        Error403Module,
        ProgressBarModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        Title,
        ClassSectionService,
        LeaveRequestService,
        CommonService,
        AuthGuard,
        AuthService,
        UsersService,
        UIThemeService,
        AcademicSessionService,
        AssessmentCategoriesService,
        ClassPeriodTypeService,
        RightService,
        SchoolService,
        LocalizationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },

        CommonComponent,
        CountryService,
        StateService,
        TypeService,
        LanguageService,
        StoreService
    ],
    entryComponents: [
        AfLoaderComponent
    ]
})
export class AppModule {
}
