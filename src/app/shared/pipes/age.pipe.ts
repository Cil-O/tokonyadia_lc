import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: string | moment.Moment, ...args: unknown[]): number | null {
    if (!value) {
      return null;
    }

    const birthDate: moment.Moment = moment(value);
    const currentDate: moment.Moment = moment();

    const ageInYears: number = currentDate.diff(birthDate, 'years');
    return ageInYears;
  }

}
