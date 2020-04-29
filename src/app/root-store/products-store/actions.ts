import { Action } from '@ngrx/store';
import { IProductResponse } from '@service-help/interfaces';

export const enum ActionTypes {
  INIT_PRODUCTS_STATE = '[Products] Init products in Store',
  ADD_PRODUCTS = '[Products] Add products in Store',
}

export class InitStoreProducts implements Action {
  public readonly type: ActionTypes = ActionTypes.INIT_PRODUCTS_STATE;
}

export class AddProducts implements Action {
  public readonly type: any = ActionTypes.ADD_PRODUCTS;
  constructor(public products: IProductResponse[]) {}
}

export type Actions = AddProducts | InitStoreProducts;
