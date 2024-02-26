import { Injectable } from '@angular/core';
import { IPage } from '../interfaces/IPaginationModule'

@Injectable({
    providedIn: 'root'
})
export class VariablesService {
    fechaResumenVentas: string = new Date().toISOString().slice(0,10);
    pageConfig: IPage = {
        size: 10,
        page: 0,
    };
}