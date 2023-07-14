import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emiStatus'
})
export class EmiStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value == 1) {
      return "Unpaid";
    } else if (value == 2) {
      return "Paid";
    } 
  }
  }


