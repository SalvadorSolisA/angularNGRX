import { ItemModel } from "@core/models/Item.interface";
import { createReducer, on } from "@ngrx/store";
import { loadItems, loadedItems } from "../actions/items-actions";
import { ItemsState } from "@core/models/items.state";

//inicializar el estado 1 y toma lo que hay declarado en la clase ItemsState
export const initialState: ItemsState = { 
    loading: false, items: [] 
}


//funciones que cambian los estados
//deben ser funciones puras
//no tener efectos colaterales
export const itemsReducer = createReducer(
    //toma el estado inicial
    initialState,
    on(loadItems, (state) => {
        return {...state, loading: true}//clona el objeto dando el valor a loading en true
    }),
    on(loadedItems, (state, {items}) => {
        return {...state, loading: false, items}//clona el objeto dando el valor a loading en true
    })
)

