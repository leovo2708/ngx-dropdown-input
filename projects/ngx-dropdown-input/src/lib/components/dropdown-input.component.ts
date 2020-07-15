import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Option } from '../models/option';
import { DropdownDirective } from '../directives/dropdown.directive';

@Component({
  selector: 'ngx-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})
export class DropdownInputComponent {
  @Input() placeholder: string;
  @Input() options: Option[];
  @ViewChild(DropdownDirective) dropdown: DropdownDirective;
  text: string;
  filterOptions: Option[];

  constructor() { }

  onTextChange() {
    if (this.text) {
      this.dropdown.open();
    }
  }

  onOptionSelect(option: Option){
    this.text = option.text;
  }
}
