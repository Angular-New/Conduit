import { createAction, props } from '@ngrx/store';
import { EActionTypes } from '@auth/store/actionTypes';

export const registerAction = createAction(
  EActionTypes.Register,
  props<{ username: string; email: string; password: string }>(),
);
