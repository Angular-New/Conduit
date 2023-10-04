import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EField } from '@shared/enums';
import { Store } from '@ngrx/store';
import { registerAction } from '@auth/store/actions';

@Component({
  selector: 'ngrx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    const { username, email, password } = this.form.value;
    this.store.dispatch(registerAction({ username, email, password }));
    this.form.reset();
  }

  private initForm(): void {
    this.form = this.fb.group({
      [EField.Username]: [null, Validators.required],
      [EField.Email]: [null, [Validators.required, Validators.email]],
      [EField.Password]: [null, Validators.required],
    });
  }
}
