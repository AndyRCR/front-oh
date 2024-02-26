import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component'
import { TableVentasComponent } from './components/table-ventas/table-ventas.component'
import { FilterVentasComponent } from './components/filter-ventas/filter-ventas.component'

const routes: Routes = [{ path: '', component: VentasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {
  static declarations = [VentasComponent, TableVentasComponent, FilterVentasComponent];
}