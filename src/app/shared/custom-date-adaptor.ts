import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Inject, Injectable, Optional } from '@angular/core';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { AppSettings } from '../app.constants';
// import { default as _rollupMoment } from 'moment';
const moment = _moment;

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {

    constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
        super(dateLocale);
    }

    parse(value, parseFormat): Moment {

        const format = localStorage.getItem('_df');
        parseFormat = (parseFormat === null || parseFormat === undefined) ?  format : parseFormat;
        parseFormat = (parseFormat === null || parseFormat === undefined) ?  AppSettings.DATE_PATTERN : parseFormat;
        if (!value.length){
            return null;
        }
       /* if (value.length < 8 || value.length > 10) {
            return moment(NaN, parseFormat).utc(true);
        }*/
        if (value && typeof value === 'string') {
            if (!moment(value.trim(), parseFormat, this.locale, true).isValid()) {
                return moment(NaN, parseFormat).utc(true);
                // return moment(value, parseFormat).utc(true);
            }
            return moment(value.trim(), parseFormat, this.locale, true).utc(true);
        }
        return value ? moment(value).locale(this.locale) : null;
    }

    createDate(year: number, month: number, date: number): Moment {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }

        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }

        const result = moment.utc({ year, month, date }).locale(this.locale);

        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }

        return result;
    }

    public format(date: Moment, displayFormat: string): string {
        let format = localStorage.getItem('_df');

        format = (format !== null && format !== undefined) ? format : AppSettings.DATE_PATTERN;
        return date.format(format);
    }
}
