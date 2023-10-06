import {createAction, props} from '@ngrx/store';
import {EActionTypes} from '@auth/store/action-types';
import {IRegisterRequest} from '@auth/types';
import {ICurrentUser} from '@shared/types';

export const registerAction = createAction(
    EActionTypes.Register,
    props<{request: IRegisterRequest}>(),
);

export const registerSuccessAction = createAction(
    EActionTypes.RegisterSuccess,
    props<{currentUser: ICurrentUser}>(),
);

export const registerFailureAction = createAction(EActionTypes.RegisterFailure);
