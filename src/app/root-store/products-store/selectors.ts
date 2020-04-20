import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductResponse } from '@service-help/interfaces';

import { State } from './state';

export const FEATURE_NAME: string = 'Products';

const getProducts: any = (state: State): IProductResponse[] => state.products;

export const selectProductsState: MemoizedSelector<object, State> = createFeatureSelector<State>(FEATURE_NAME);

export const selectProducts: MemoizedSelector<object, IProductResponse[]> = createSelector(
  selectProductsState,
  getProducts,
);
