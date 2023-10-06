import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';

import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from '@auth/store/actions';
import {AuthService} from '@auth/services';
import {ICurrentUser} from '@shared/types';

@Injectable()
export class RegisterEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService,
    ) {}

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction), // filter actions; return desired action
            switchMap(({request}) => {
                console.log('request >>>', request);

                return this.authService.register(request).pipe(
                    // success handler
                    map((currentUser: ICurrentUser) => {
                        return registerSuccessAction({currentUser});
                    }),
                    // error handler
                    catchError(() => of(registerFailureAction())),
                );
            }),
        ),
    );
}
