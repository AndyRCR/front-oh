import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable'
import { BsModalRef } from 'ngx-bootstrap/modal'
import { ICliente, IDetalleVenta, IResumenVenta } from 'src/app/interfaces/IVentasModule'

@Component({
  selector: 'app-modal-ventas',
  templateUrl: './modal-ventas.component.html',
  styleUrls: ['./modal-ventas.component.css']
})
export class ModalVentasComponent {
  cliente?: ICliente;
  title?: string;
  closeBtnName?: string;
  ColumnMode = ColumnMode;
  detalleVenta?: IDetalleVenta[];
  resumenVenta?: IResumenVenta;

  constructor(public bsModalRef: BsModalRef) {}

  fixNumber(numero: number): number{
    return parseFloat(numero.toFixed(2));
  }

  toFloat(numero: number): number{
    return parseFloat(numero.toFixed(2));
  }

}