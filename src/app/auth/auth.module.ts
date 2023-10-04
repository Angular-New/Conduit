import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@auth/store/reducers';

import { RegisterComponent } from '@auth/components/register/register.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
  ],
})
export class AuthModule {
}
