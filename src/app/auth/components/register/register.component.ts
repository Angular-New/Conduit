import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EField } from '@shared/enums';

@Component({
  selector: 'ngrx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    console.log('submit', this.form.value);
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
