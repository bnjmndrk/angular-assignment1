import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Warning } from './warning/warning.component';
import { Success } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    Warning,
    Success
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
