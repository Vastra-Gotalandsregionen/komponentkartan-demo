import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from '../../../node_modules/vgr-komponentkartan/component-package/models/dropdownItem.model';

@Component({
  selector: 'app-dropdownmultiselect',
  templateUrl: './dropdownmultiselect.component.html',
  styleUrls: ['./dropdownmultiselect.component.scss']
})
export class DropdownmultiselectComponent implements OnInit {

  dropDownItems8: IDropdownItem[];
  dropDownItems8AndSelected: IDropdownItem[];
  dropDownItems9: IDropdownItem[];
  dropDownItems25: IDropdownItem[];
  dropDownItems25All: IDropdownItem[];
  dropDownItems200: IDropdownItem[];

  lastMultipleSelection: string;

  constructor() {

    this.dropDownItems8 = this.getDemoItems(8);
    this.dropDownItems8AndSelected = this.getDemoItemsWithOneSelected(8, 1);
    this.dropDownItems9 = this.getDemoItems(9);
    this.dropDownItems25All = this.getDemoItems(25);
    this.dropDownItems25 = this.getDemoItems(25);
    this.dropDownItems200 = this.getDemoItems(200);
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

  private getDemoItemsWithOneSelected(numberOfItems: number, selectedIndex: number): IDropdownItem[] {
    const list = this.getDemoItems(numberOfItems);
    list.forEach((dpItem, index) => {
      if (dpItem != null) {
        if (index === selectedIndex) {
          dpItem.selected = true;
        }
      }
    });
    return list;
  }

  onMultipleSelectionChanged(selectedItems: IDropdownItem[]) {
    this.lastMultipleSelection = selectedItems.map(x => x.displayName).join(',');
  }

}
