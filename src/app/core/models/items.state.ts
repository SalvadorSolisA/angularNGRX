import { ItemModel } from "./Item.interface";

export interface ItemsState{
    loading: boolean,
    items: ReadonlyArray<ItemModel>,//array de solo lectura
}