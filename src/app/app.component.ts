import { Component } from '@angular/core';
import { Option } from 'ngx-dropdown-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dropdown-input';

  options: Option[] = [
    {
      text: 'Option1',
      value: 1
    },
    {
      text: 'Option2',
      value: '2'
    }
  ]
}
