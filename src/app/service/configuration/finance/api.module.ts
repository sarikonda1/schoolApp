import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from '../../base/configuration';
import { HttpClient } from '@angular/common/http';


import { InvoiceAdjustmentTypeService } from './api/invoice-adjustment-type.service';
import { LateFeeRulesService } from './api/late-fee-rules.service';
import { FeeAccountService } from './api/fee-account.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    InvoiceAdjustmentTypeService, LateFeeRulesService, FeeAccountService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
    }
}
