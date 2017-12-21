import { Component, ViewChildren, QueryList } from '@angular/core';
import { IValidationResult, ValidationErrorState, IValidation } from 'vgr-komponentkartan/lib/index';
import { ISelectableItem } from 'vgr-komponentkartan/lib/index';
import { ValidationComponent } from '../../../node_modules/vgr-komponentkartan/lib/controls/validation/validation.component';
@Component({
  selector: 'app-validation',
  templateUrl: './demovalidation.component.html',
  styleUrls: ['./demovalidation.component.scss']
})
export class DemoValidationComponent {
  validationStatus: string;
  items: ISelectableItem[];
  multiItems: ISelectableItem[];
  @ViewChildren(ValidationComponent) validatedComponents: QueryList<ValidationComponent>;
  constructor() {
    this.validationStatus = 'Inte validerad';
    this.items = [
      { displayName: 'Sverige' } as ISelectableItem,
      { displayName: 'Danmark' } as ISelectableItem,
    ] as ISelectableItem[];

    this.multiItems = [
      { displayName: 'Sverige' } as ISelectableItem,
      { displayName: 'Danmark' } as ISelectableItem,
      { displayName: 'Norge' } as ISelectableItem,
      { displayName: 'Finland' } as ISelectableItem,
      { displayName: 'Island' } as ISelectableItem,
    ] as ISelectableItem[];
  }

  onSave() {
    this.validationStatus = 'Inga fel (kontrollerar ' + this.validatedComponents.length + ' fält)';
    let isValid = true;

    this.validatedComponents.forEach(validatedComponent => {
      const result = validatedComponent.validate();
      if (result.isValid) {
      } else {
        isValid = false;
      }
    });
    if (!isValid) {
      this.validationStatus = 'Ett eller flera av ' + this.validatedComponents.length + ' fält har fel, se markering';
    }
  }

}
