import { IPageable, ISort } from "./IPaginationModule"

export interface ICliente{
    id: number;
    nombres: string;
    apellidos: string;
    dni: string;
    telefono: string;
    email: string;
}

export interface IVenta{
    id: number;
    clienteDTO: ICliente;
    fecha: string;
}

export interface IProducto{
    id: number;
    nombre: string;
    precio: number;
}

export interface IDetalleVenta{
    id: number;
    ventaDTO: IVenta;
    productoDTO: IProducto;
    cantidad: number;
}

export interface IResumenVenta {
    cliente: string;
    total: number;
    fecha: string;
}

export interface IResumenVentaPageable {
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    content?: IResumenVenta[];
    sort: ISort;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: IPageable;
    empty: boolean;
}