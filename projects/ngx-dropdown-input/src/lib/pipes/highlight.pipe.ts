import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxHighlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: any, keyword: any): any {
    if (!keyword) {
      return text;
    }

    var re = new RegExp(keyword, 'gi');
    return text.replace(re, "<b>$&</b>");
  }
}
