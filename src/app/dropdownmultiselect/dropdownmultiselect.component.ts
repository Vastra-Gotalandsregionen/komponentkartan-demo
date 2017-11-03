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
  dropDownItems8AndThreeSelected: IDropdownItem[];
  dropDownItems9: IDropdownItem[];
  dropDownItems25: IDropdownItem[];
  dropDownItems25All: IDropdownItem[];
  dropDownItems200: IDropdownItem[];
  isReadonlyAndDisabled: boolean;

  lastMultipleSelection: string;

  constructor() {
    this.dropDownItems8 = this.getDemoItems(8);
    this.dropDownItems8AndSelected = this.getDemoItemsWithSelected(8, [1]);
    this.dropDownItems8AndThreeSelected = this.getDemoItemsWithSelected(8, [0, 2, 5]);
    this.dropDownItems9 = this.getDemoItems(9);
    this.dropDownItems25All = this.getDemoItems(25);
    this.dropDownItems25 = this.getDemoItems(25);
    this.dropDownItems200 = this.getDemoItems(200);
    this.isReadonlyAndDisabled = true;
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

  private getDemoItemsWithSelected(numberOfItems: number, selectedIndexes: Array<number>): IDropdownItem[] {
    const list = this.getDemoItems(numberOfItems);
    list.forEach((dpItem, index) => {
      if (dpItem != null) {
        if (selectedIndexes.indexOf(index) > -1) {
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
