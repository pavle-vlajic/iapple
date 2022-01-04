import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../models/phone';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(phones: Phone[], phoneName: string) {

    if (!phones) {
      return [];
    }

    if (!phoneName) {
      return phones;
    }

    return phones.filter((phone) => {
      return phone.name.toLowerCase().includes(phoneName.toLowerCase());
    });
  }

}
