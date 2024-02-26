import { Injectable } from '@angular/core';
import {ohEnvironment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { IPage } from '../interfaces/IPaginationModule'
import { IResumenVenta, IResumenVentaPageable } from '../interfaces/IVentasModule'
import { VariablesService } from './VariablesService.service'

@Injectable({
    providedIn: 'root'
})
export class ResumenService {
    urlVentas: string = ohEnvironment.apiVentas;

    data?: IResumenVentaPageable;
    dataObservable = new Subject<IResumenVentaPageable>();

    resumenVenta?: IResumenVenta;
    resumenVentaObservable = new Subject<IResumenVenta>();

    constructor(
        private _http: HttpClient,
        private variablesService: VariablesService
    ){}

    actualizarDatos(nuevosDatos: IResumenVentaPageable): void {
        this.data = nuevosDatos;
        this.dataObservable.next(this.data);
    }

    actualizarResumenVenta(nuevoDato: IResumenVenta): void {
        this.resumenVenta = nuevoDato;
        this.resumenVentaObservable.next(this.resumenVenta);
    }

    getResumenVenta(pageConfig: IPage): Observable<IResumenVentaPageable> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('page', String(pageConfig.page));
        queryParams = queryParams.append('size', String(pageConfig.size));
        return this._http.get<IResumenVentaPageable>(`${this.urlVentas}/ventas/resumenventa/${this.variablesService.fechaResumenVentas}`,
        { params: queryParams });
    }
}