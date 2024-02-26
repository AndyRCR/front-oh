import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { SharedModule } from '../@shared/shared.module';
import { ModalVentasComponent } from './components/modal-ventas/modal-ventas.component'

@NgModule({
  declarations: [
    VentasRoutingModule.declarations,
    ModalVentasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    BsDatepickerModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class VentasModule { }
