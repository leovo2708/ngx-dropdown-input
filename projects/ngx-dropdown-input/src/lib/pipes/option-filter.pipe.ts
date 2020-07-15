import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../models/option';

@Pipe({
  name: 'ngxOptionFilter'
})
export class OptionFilterPipe implements PipeTransform {
  transform(options: Option[], text: string): Option[] {
    if (!options) {
      return options;
    }

    if (!text) {
      return options;
    }

    const lowercaseText = text.toLowerCase();
    return options.filter(option => option.text.toLowerCase().indexOf(lowercaseText) !== -1);
  }
}
