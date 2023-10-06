import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';

import {ICurrentUser} from '@shared/types';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '@shared/constants';
import {IAuthResponse, IRegisterRequest} from '@auth/types';
import {USERS_API} from '@auth/constants';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly http: HttpClient) {}

    register(data: IRegisterRequest): Observable<ICurrentUser> {
        const url = `${BASE_URL}${USERS_API}`;
        const body = {
            user: {...data},
        };

        return this.http
            .post<IAuthResponse>(url, body)
            .pipe(map((response: IAuthResponse) => response.user));
    }
}
