import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { IPage } from 'src/app/interfaces/IPaginationModule'
import { IResumenVentaPageable } from 'src/app/interfaces/IVentasModule'
import { VariablesService } from 'src/app/services/VariablesService.service'
import { ResumenService } from 'src/app/services/ResumenService.service'
import { ColumnMode } from '@swimlane/ngx-datatable'
import { Subscription, forkJoin } from 'rxjs'
import { DetalleVentaService } from 'src/app/services/DetalleVentaService.service'
import { ClienteService } from 'src/app/services/ClienteService.service'
import { LoaderService } from 'src/app/services/LoaderService.service'
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
import { ModalVentasComponent } from '../modal-ventas/modal-ventas.component'

@Component({
    selector: 'app-table-ventas',
    templateUrl: './table-ventas.component.html',
    styleUrls: ['./table-ventas.component.css']
})
export class TableVentasComponent implements OnInit, OnDestroy {
    bsModalRef?: BsModalRef;
    data? : IResumenVentaPageable;
    subscription?: Subscription;
    ColumnMode = ColumnMode;
    
    constructor(
        private resumenVentaService: ResumenService,
        private variablesService: VariablesService,
        private detalleVentaService: DetalleVentaService,
        private clienteService: ClienteService,
        private loaderService: LoaderService,
        private modalService: BsModalService
    ) {}

    ngOnInit(): void {
        this.subscription = this.resumenVentaService.dataObservable.subscribe((nuevosDatos) => {
            this.data = nuevosDatos;
          });
        this.loadResumenVentas();
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    loadResumenVentas(){
        this.loaderService.actualizarIsLoading(true);
        this.resumenVentaService.getResumenVenta(this.variablesService.pageConfig).subscribe(
            (resp) => {
                setTimeout(() => {
                    this.resumenVentaService.data = resp;
                    this.loaderService.actualizarIsLoading(false);
                    this.data = resp;
                }, 500);
            }
        );
    }

    selectResumenVenta(row: any){
        const requests = forkJoin({
            detallesVenta: this.detalleVentaService.getDetallesVenta(row.idCliente, row.fecha),
            cliente: this.clienteService.getCliente(row.idCliente),
        });

        requests.subscribe(
            (resp) => {
                this.resumenVentaService.actualizarResumenVenta(row);
                this.detalleVentaService.actualizarDatos(resp.detallesVenta);
                this.clienteService.actualizarDatos(resp.cliente);
                
                const initialState: ModalOptions = {
                    initialState: {
                      resumenVenta: row,
                      detalleVenta: resp.detallesVenta,
                      cliente: resp.cliente
                    }
                  };
                  this.bsModalRef = this.modalService.show(ModalVentasComponent, initialState);
                  this.bsModalRef.content.closeBtnName = 'Close';
            }
        )
    }
}