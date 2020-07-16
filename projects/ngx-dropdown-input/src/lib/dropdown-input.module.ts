import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropdownInputComponent } from './components/dropdown-input.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';
import { DropdownInputDirective } from './directives/dropdown-input.directive';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownInputDirective,
    DropdownInputComponent,
    HighlightPipe
  ],
  exports: [
    DropdownInputComponent
  ]
})
export class NgxDropdownInputModule { }
