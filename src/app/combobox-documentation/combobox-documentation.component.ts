import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ComboboxComponent } from 'vgr-komponentkartan';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-combobox-documentation',
  templateUrl: './combobox-documentation.component.html'
})
export class ComboboxDocumentationComponent {
  @ViewChild('myCombobox', { read: ComboboxComponent }) myCombobox: ComboboxComponent;
  items5: string[];
  items10: string[];
  items50: string[];
  form: UntypedFormControl;
  itemLabel = 'Ett långt alternativ som skrivs ut i helhet';
  itemValue = 1;

  examples = [
    `<vgr-combobox [small]="true">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`,
    `<vgr-combobox>
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`,
    `<vgr-combobox [width]="'50%'">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`,
        `<vgr-combobox [formControl]="form">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>
    `,
        `<vgr-combobox [small]="true" [disabled]="true" [formControl]="form">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`,
`<!-- Det blir en radbrytning i texten då den håller samma storlek som dropdownen.
I detta fallet om man vet att man har långa texter kanske man skall sätta en
egen storlek på dropdownen -->
<vgr-combobox [small]="false" [readonly]="true" [formControl]="form">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`,
`<vgr-combobox [showButton]="false">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`,
`<vgr-combobox [listAlignRight]="true" [width]="'40%'">
  <vgr-combobox-item *ngFor="let item of items">{{item}}</vgr-combobox-item>
</vgr-combobox>`
  ];

  constructor(public htmlEncoder: HtmlEncodeService) {
    this.items5 = this.getItems(5);
    this.items10 = this.getItems(10);
    this.items50 = this.getItems(50);
    this.form = new UntypedFormControl(this.itemValue);
  }

  getItems(length: number): string[] {
    const items = [];
    for (let item = 1; item <= length; item++) {
      items.push(`Val ${item}`);
    }
    return items;
  }

}
