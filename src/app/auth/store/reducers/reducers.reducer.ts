import {IAuthState} from '@auth/types';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction} from '@auth/store/actions';

const initialState: IAuthState = {
    isSubmitting: false,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state: IAuthState): IAuthState => ({
            ...state,
            isSubmitting: true,
        }),
    ),
);

export function reducer(state: IAuthState, action: Action) {
    return authReducer(state, action);
}
