import { Injectable } from '@angular/core';
import {ohEnvironment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { IDetalleVenta } from '../interfaces/IVentasModule'

@Injectable({
    providedIn: 'root'
})
export class DetalleVentaService {
    data?: IDetalleVenta[];
    dataObservable = new Subject<IDetalleVenta[]>();

    constructor(
        private _http: HttpClient
    ){}

    actualizarDatos(nuevosDatos: IDetalleVenta[]): void {
        this.data = nuevosDatos;
        this.dataObservable.next(this.data);
    }

    getDetallesVenta(idCliente: number, fecha: string): Observable<IDetalleVenta[]> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('idCliente', String(idCliente));
        queryParams = queryParams.append('fecha', String(fecha));
        return this._http.get<IDetalleVenta[]>(`${ohEnvironment.apiVentas}/ventas/detalleVenta`,
        { params: queryParams });
    }
}