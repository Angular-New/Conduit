import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from '@auth/components/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule],
})
export class AuthModule {}
