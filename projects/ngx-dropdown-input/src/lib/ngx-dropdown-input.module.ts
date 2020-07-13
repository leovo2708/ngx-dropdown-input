import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropdownInputComponent } from './ngx-dropdown-input.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    NgxDropdownInputComponent
  ],
  exports: [NgxDropdownInputComponent
  ]
})
export class NgxDropdownInputModule { }
