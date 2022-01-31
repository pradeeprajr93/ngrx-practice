import { Product } from './../product';
import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
    '[Product] Set Current Product', 
    props<{product: Product}>()
);

export const clearCurrentProduct = createAction('[Product] Clear Current Product');

export const initializeNewProdcut = createAction('[Product] Initialize New Product');