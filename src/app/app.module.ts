import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getBsDatepickerConfiguration, getBsModulesForRoot } from './bootstrap/bootstrap.module';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './@shared/shared.module'
import { ColumnChangesService, DimensionsHelper, ScrollbarHelper } from '@swimlane/ngx-datatable'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ...getBsModulesForRoot()
  ],
  providers: [
    // Ngx-Bootstrap Datepicker Default Configuration
    {
      provide: BsDatepickerConfig,
      useFactory: getBsDatepickerConfiguration,
    },
    ScrollbarHelper, DimensionsHelper, ColumnChangesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
