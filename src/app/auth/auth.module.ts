import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from '@auth/components/register/register.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
