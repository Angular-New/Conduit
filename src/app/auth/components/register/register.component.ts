import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EField } from '@shared/enums';

@Component({
  selector: 'ngrx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    [EField.Username]: [null, Validators.required],
    [EField.Email]: [null, [Validators.required, Validators.email]],
    [EField.Password]: [null, Validators.required],
  });

  constructor(private readonly fb: FormBuilder) {
  }

  onSubmit(): void {
    console.log('submit', this.form.value);
  }
}
