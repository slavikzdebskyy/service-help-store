import { Actions, ActionTypes, AddProducts } from './actions';
import { initState, State } from './state';
import { IProductResponse } from './../../shared/interfaces/product-response.interface';

export function productsReducer(state: State = initState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.INIT_PRODUCTS_STATE:
      return {
        ...state,
        products: [],
      };
    case ActionTypes.ADD_PRODUCTS:
      const products: IProductResponse[] = (action as AddProducts).products;
      return {
        ...state,
        products,
      };
    default:
      return state;
  }
}
