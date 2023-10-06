import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from '@auth/types';

export const featureKey = 'auth';

export const authSelector = createFeatureSelector<IAuthState>(featureKey);

export const isSubmittingSelector = createSelector(
    authSelector,
    (authState: IAuthState): boolean => authState.isSubmitting,
);
