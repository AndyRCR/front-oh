import { Component } from '@angular/core';
import { VariablesService } from 'src/app/services/VariablesService.service'
import { ResumenService } from 'src/app/services/ResumenService.service'
import { LoaderService } from 'src/app/services/LoaderService.service'

@Component({
  selector: 'app-filter-ventas',
  templateUrl: './filter-ventas.component.html',
  styleUrls: ['./filter-ventas.component.css']
})
export class FilterVentasComponent {

  constructor(
    private variablesService: VariablesService,
    private resumenVentasService: ResumenService,
    private loaderService: LoaderService
  ){}

  addZero(numero: number): string {
    return numero < 10 ? '0' + numero : '' + numero;
}

  formatDate(fecha: Date): string {
    const año = fecha.getFullYear();
    const mes = this.addZero(fecha.getMonth() + 1);
    const dia = this.addZero(fecha.getDate());
    return `${año}-${mes}-${dia}`;
}

  dateHandler(nuevaFecha: Date) {
    this.variablesService.fechaResumenVentas = this.formatDate(nuevaFecha);
  }

  findResults(){
    this.loaderService.actualizarIsLoading(true);
    this.resumenVentasService.getResumenVenta(this.variablesService.pageConfig).subscribe(
      (resp) => {
        setTimeout(() => {
          this.resumenVentasService.actualizarDatos(resp);
          this.loaderService.actualizarIsLoading(false);
        }, 500)
      }
    )
  }
}
