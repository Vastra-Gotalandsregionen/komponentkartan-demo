import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from '../../../node_modules/vgr-komponentkartan/component-package/models/dropdownItem.model';

@Component({
  selector: 'app-dropdownmultiselect',
  templateUrl: './dropdownmultiselect.component.html',
  styleUrls: ['./dropdownmultiselect.component.scss']
})
export class DropdownmultiselectComponent implements OnInit {

  dropDownItems25: IDropdownItem[];
  dropDownItems200: IDropdownItem[];
  dropDownItems9: IDropdownItem[];
  dropDownItems8: IDropdownItem[];
  lastMultipleSelection: string;
  dropDownItems25All: IDropdownItem[];

  constructor() {
    this.dropDownItems25 = this.getDemoItems(25);
    this.dropDownItems200 = this.getDemoItems(200);
    this.dropDownItems8 = this.getDemoItems(8);
    this.dropDownItems9 = this.getDemoItems(9);
    this.dropDownItems25All = this.getDemoItems(25);

  }

  ngOnInit() {
  }

  private getDemoItems(numberOfItems: number): IDropdownItem[] {
    const items: IDropdownItem[] = [];
    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `Långt namn ${i}`, displayNameWhenSelected: `Alt ${i}` } as IDropdownItem);
    }
    return items;
  }


  onMultipleSelectionChanged(selectedItems: IDropdownItem[]) {
    this.lastMultipleSelection = selectedItems.map(x => x.displayName).join(',');
  }

}