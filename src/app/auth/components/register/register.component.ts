import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EField } from '@shared/enums';
import { select, Store } from '@ngrx/store';
import { registerAction } from '@auth/store/actions';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '@auth/store/selectors';

@Component({
  selector: 'ngrx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }

  onSubmit(): void {
    const { username, email, password } = this.form.value;
    this.store.dispatch(registerAction({ username, email, password }));
    this.form.reset();
  }

  /**
   * Initialize form component
   * @private
   */
  private initializeForm(): void {
    this.form = this.fb.group({
      [EField.Username]: [null, Validators.required],
      [EField.Email]: [null, [Validators.required, Validators.email]],
      [EField.Password]: [null, Validators.required],
    });
  }

  /**
   * Initialize all default values
   * @private
   */
  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
