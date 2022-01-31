import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from './../../state/app.state';
import { toggleMaskUserName } from './user.action';

export interface UserState {
    maskUserName: boolean;
}

export interface State extends AppState.State {
    user: UserState;
}

const userFeatureSelector = createFeatureSelector<UserState>("user");

export const getMaskUserName = createSelector(
    userFeatureSelector,
    state => state.maskUserName
);

export const userReducer = createReducer<UserState>(
    {
        maskUserName: false
    }, 
    on(
        toggleMaskUserName, 
        state => ({...state, maskUserName: !state.maskUserName})
    )
);