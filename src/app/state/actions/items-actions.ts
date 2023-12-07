import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';


//estas son las acciones que se crean tienen que llevar un nombre
//cargando articulos
export const loadItems = createAction(
    '[Items List] Load items'
);

//los articulos se cargaron de forma exitosa
export const loadedItems = createAction(
    '[Items List] Loaded success',
    props<{items: ItemModel[]}>()
);


//disparar la accion de cargar articulos