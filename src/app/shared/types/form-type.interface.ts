import { FormControl } from '@angular/forms';

import { EField } from '@shared/enums';

export interface IFormType {
  [EField.Username]: FormControl<null | string>;
  [EField.Email]: FormControl<null | string>;
  [EField.Password]: FormControl<null | string>;
}

export type TFormType = Record<EField, string | null>;
