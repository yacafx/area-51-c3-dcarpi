import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, ProductsData } from './products.reducer';
import * as fromProduct from './products.reducer';

const getProductsState = createFeatureSelector<ProductsData>('products');

const getProducts = createSelector(getProductsState, (state) => state.products);

const getUser = createSelector(getProductsState, (state) => state.user);

export const productsQuery = {
  getProducts,
  getUser
};
