import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    isLoading: Boolean = false;
    isLoadingObservable = new Subject<Boolean>();

    actualizarIsLoading(nuevoDato: Boolean): void {
        this.isLoading = nuevoDato;
        this.isLoadingObservable.next(this.isLoading);
    }
}