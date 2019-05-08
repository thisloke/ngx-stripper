import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxStripperPipe} from './ngx-stripper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgxStripperPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgxStripperPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
