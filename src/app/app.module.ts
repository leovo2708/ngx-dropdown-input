import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDropdownInputModule } from 'ngx-dropdown-input';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxDropdownInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
