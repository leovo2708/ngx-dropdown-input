import { Component } from '@angular/core';
import { Option } from 'ngx-dropdown-input';
import cities from './cities.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dropdown-input';
  placeholder = 'Please choose your city';
  options: Option[] = cities;
}
