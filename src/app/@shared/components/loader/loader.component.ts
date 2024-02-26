import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { LoaderService } from 'src/app/services/LoaderService.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
    isLoading: Boolean = true;
    subscription?: Subscription;

    constructor(
        private loaderService: LoaderService
    ){   
    }

    ngOnInit(): void {
        this.subscription = this.loaderService.isLoadingObservable.subscribe((nuevoDato) => {
            this.isLoading = nuevoDato;
        });
    }
    
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
