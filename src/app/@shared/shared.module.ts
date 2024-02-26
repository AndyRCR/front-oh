import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AccordionModule } from 'ngx-bootstrap/accordion'

@NgModule({
  declarations: [LoaderComponent, SidenavComponent],
  exports: [LoaderComponent, SidenavComponent],
  imports: [CommonModule, AccordionModule]
})
export class SharedModule { }
