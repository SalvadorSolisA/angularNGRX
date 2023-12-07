import { ItemsState } from "@core/models/items.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items-reducers";

export interface AppState {
    items: ItemsState,
}

//lo exporta para que toda la aplicacion tenga los estads
export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    items: itemsReducer
}