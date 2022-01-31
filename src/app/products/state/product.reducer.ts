import { Product } from './../product';
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import * as AppState from './../../state/app.state';
import * as ProductActions from './product.action';

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
    selectedProduct: Product | null;
}

export interface State extends AppState.State {
    products: ProductState
}

const initialState: ProductState = {
    showProductCode: false,
    products: [],
    selectedProduct: null
};

const getProductFeatureSelector = createFeatureSelector<ProductState>("products");

export const getShowProductCode = createSelector(getProductFeatureSelector, state => state.showProductCode);
export const getProducts = createSelector(getProductFeatureSelector, state => state.products);
export const getSelectedProduct = createSelector(getProductFeatureSelector, state => state.selectedProduct);

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);

