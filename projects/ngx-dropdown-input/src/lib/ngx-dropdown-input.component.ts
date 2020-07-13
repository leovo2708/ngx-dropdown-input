import { Component, OnInit, Input } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'ngx-dropdown-input',
  templateUrl: './ngx-dropdown-input.component.html',
  styleUrls: ['./ngx-dropdown-input.component.scss']
})
export class NgxDropdownInputComponent implements OnInit {

  @Input() options: Option[];
  isDropdownShown: false;

  constructor() { }

  ngOnInit(): void {
  }

}
