import { Injectable } from '@angular/core';
import {ohEnvironment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { ICliente, IDetalleVenta } from '../interfaces/IVentasModule'

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    data?: ICliente;
    dataObservable = new Subject<ICliente>();

    constructor(
        private _http: HttpClient
    ){}

    actualizarDatos(nuevosDatos: ICliente): void {
        this.data = nuevosDatos;
        this.dataObservable.next(this.data);
    }

    getCliente(idCliente: number): Observable<ICliente> {
        return this._http.get<ICliente>(`${ohEnvironment.apiVentas}/clientes/cliente/${idCliente}`);
    }
}