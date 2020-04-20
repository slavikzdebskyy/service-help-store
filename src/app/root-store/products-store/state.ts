import { IProductResponse } from '@service-help/interfaces';

export interface State {
  products: IProductResponse[];
}

export const initState: State = {
  products: [],
};
