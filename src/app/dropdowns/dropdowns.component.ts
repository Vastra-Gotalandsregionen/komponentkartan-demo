import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from 'vgr-komponentkartan/dist';
@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {

  dropDownItems25: IDropdownItem[];
  dropDownItems200: IDropdownItem[];
  dropDownItems9: IDropdownItem[];
  dropDownItems8AndSelected: IDropdownItem[];
  lastSingleSelection: string;
  dropDownItems25All: IDropdownItem[];
  dropDownItems8: IDropdownItem[];
  isReadonlyAndDisabled: boolean;

  constructor() {
    this.dropDownItems25 = this.getDemoItems(25);
    this.dropDownItems200 = this.getDemoItems(200);
    this.dropDownItems8 = this.getDemoItems(8);
    this.dropDownItems8AndSelected = this.getDemoItemsWithOneSelected(8, 2);
    this.dropDownItems9 = this.getDemoItems(9);
    this.dropDownItems25All = this.getDemoItems(25);
    this.isReadonlyAndDisabled = true;
  }

  ngOnInit() {
  }

  private getDemoItems(numberOfItems: number): IDropdownItem[] {
    const items: IDropdownItem[] = [];
    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `Jättelångt namn ${i}` } as IDropdownItem);
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

  onSingleSelectionChanged(selectedItem: IDropdownItem) {
    this.lastSingleSelection = selectedItem.displayName;
  }

}
