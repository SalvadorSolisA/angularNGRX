import { Injectable } from "@angular/core";
import { ShowCaseService } from "@modules/show-case/services/show-case.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class ItemsEffects{

    loadItems$ = createEffect(() => this.action$.pipe(
        ofType('[Items List] Load items'),
        mergeMap(() => this.showCaseService.getDataApi().pipe(
            map(items => ({type: '[Items List] Loaded success', items })),
            catchError(() => EMPTY)
        ))
    ));

    constructor(
        private action$: Actions,
        private showCaseService: ShowCaseService
    ){
    }
}