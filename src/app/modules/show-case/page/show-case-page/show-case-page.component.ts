import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems, loadedItems } from 'src/app/state/actions/items-actions';
import { selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  //listItems: ItemModel[] = []
  loading$: Observable<boolean> = new Observable();

  constructor(
    private _store: Store<any>,
    //con efects deberian poder sustituir las inyecciones de servicios
    //private _showcaseService: ShowCaseService
  ) {


  }

  ngOnInit(): void {
    this.loading$ = this._store.select(selectLoading);
    //dispara una accion cargar articulos
    this._store.dispatch(loadItems());//aqui comienza la fiesta

    /* this._showcaseService.getDataApi().subscribe((response: ItemModel[]) => {
      console.log(response);//respuesta del service
      this._store.dispatch(loadedItems({items: response}));//le decimos que los items son la respuesta del service
    }); */

  }

}
