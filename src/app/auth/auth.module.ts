import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {reducer} from '@auth/store/reducers';
import {RegisterEffect} from '@auth/store/effects';
import {RegisterComponent} from '@auth/components/register/register.component';
import {AuthRoutingModule} from '@auth/auth-routing.module';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducer),
        EffectsModule.forFeature([RegisterEffect]),
    ],
})
export class AuthModule {}
