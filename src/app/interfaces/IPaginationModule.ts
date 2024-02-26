export interface ISort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
  
export interface IPage {
    page: number;
    size: number;
    sort?: string[];
}

export interface IPageable {
    offset: number;
    sort: ISort;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
}