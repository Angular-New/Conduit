import { Component } from '@angular/core';
import { REGISTER } from '@shared/constants';

@Component({
  selector: 'ngrx-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public register = REGISTER;
}
