import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-dropdown-select-documentation',
    templateUrl: './dropdown-select-documentation.component.html',
    standalone: false
})
export class DropdownSelectDocumentationComponent {

  items5: string[];
  items10: string[];
  items50: string[];
  form: FormControl;
  form1: FormControl;
  itemLabel = 'Ett långt alternativ som skrivs ut i helhet';
  itemValue = 1;

  examples = [
    `<vgr-dropdown-select [small]="true" [deselectable]="true">
    <vgr-dropdown-item *ngFor="let item of items">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>`,
    `<vgr-dropdown-select>
    <vgr-dropdown-item *ngFor="let item of items">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>`,
    `<vgr-dropdown-select [multi]="true" [width]="'50%'">
    <vgr-dropdown-item *ngFor="let item of items">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>`,
    `<vgr-dropdown-select [formControl]="form" width="100px">
  <vgr-dropdown-item *ngFor="let item of items">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>
`,
    `<vgr-dropdown-select [small]="true" [formControl]="form1">
  <vgr-dropdown-item *ngFor="let item of items">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>`,
    `<!-- Det blir en radbrytning i texten då den håller samma storlek som dropdownen.
    I detta fallet om man vet att man har långa texter kanske man skall sätta en
    egen storlek på dropdownen -->
<vgr-dropdown-select [small]="false" [readonly]="true" [formControl]="form">
  <vgr-dropdown-item *ngFor="let item of items">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>`,
`<div>
<h3>Vänsterjusterad</h3>
<vgr-dropdown-select [deselectable]="true">
  <vgr-dropdown-item *ngFor="let item of items50">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>
</div>
<div>
<h3>Högerjusterad</h3>
<vgr-dropdown-select [deselectable]="true" [rightAlign]="true">
  <vgr-dropdown-item *ngFor="let item of items50">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>
</div>`,
`<div>
<h4>Vänsterjusterad och upptill</h4>
<vgr-dropdown-select [deselectable]="true" [topAlign]="true">
  <vgr-dropdown-item *ngFor="let item of items50">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>
</div>
<div>
<h3>Högerjusterad och upptill</h3>
<vgr-dropdown-select [deselectable]="true" [topAlign]="true" [rightAlign]="true">
  <vgr-dropdown-item *ngFor="let item of items50">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>
</div>`
  ];


  constructor(public htmlEncoder: HtmlEncodeService) {
    this.items5 = this.getItems(5);
    this.items10 = this.getItems(10);
    this.items50 = this.getItems(50);
    this.form = new FormControl(this.itemValue);
    this.form1 = new FormControl({ value: this.itemValue, disabled: true });
  }

  getItems(length: number): string[] {
    const items = [];
    for (let item = 1; item <= length; item++) {
      items.push(`Val ${item}`);
    }
    return items;
  }

}
