import {createAction, props} from '@ngrx/store';
import {EActionTypes} from '@auth/store/action-types';
import {IRegisterRequest} from '@auth/types';

export const registerAction = createAction(
    EActionTypes.Register,
    props<IRegisterRequest>(),
);
