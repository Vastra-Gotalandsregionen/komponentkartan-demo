import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from 'vgr-komponentkartan';

@Component({
  selector: 'app-dropdownmultiselect',
  templateUrl: './dropdownmultiselect.component.html',
  styleUrls: ['./dropdownmultiselect.component.scss']
})
export class DropdownmultiselectComponent implements OnInit {

  dropDownItems6: IDropdownItem[];
  dropDownItems6AndSelected: IDropdownItem[];
  dropDownItems6AndThreeSelected: IDropdownItem[];
  dropDownItems7: IDropdownItem[];
  dropDownItems25: IDropdownItem[];
  dropDownItems25All: IDropdownItem[];
  dropDownItems200: IDropdownItem[];
  isReadonlyAndDisabled: boolean;

  lastMultipleSelection: string;

  constructor() {
    this.dropDownItems6 = this.getDemoItemsMixedName(6);
    this.dropDownItems6AndSelected = this.getDemoItemsWithSelected(6, [1]);
    this.dropDownItems6AndThreeSelected = this.getDemoItemsWithSelected(6, [0, 2, 5]);
    this.dropDownItems7 = this.getDemoItemsMixedName(7);
    this.dropDownItems25All = this.getDemoItems(25);
    this.dropDownItems25 = this.getDemoItemsLongName(25);
    this.dropDownItems200 = this.getDemoItemsMixedName(200);
    this.isReadonlyAndDisabled = true;
  }

  ngOnInit() {
  }

  private getDemoItems(numberOfItems: number): IDropdownItem[] {
    const items: IDropdownItem[] = [];
    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `Min mottagning ${i}` } as IDropdownItem);
    }
    return items;
  }

  private getDemoItemsLongName(numberOfItems: number): IDropdownItem[] {
    const items: IDropdownItem[] = [];
    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `${i} - En mottagning med långt namn i landstinget`, displayNameWhenSelected: `Alt ${i}` } as IDropdownItem);
    }
    return items;
  }


  private getDemoItemsMixedName(numberOfItems: number): IDropdownItem[] {
    const items: IDropdownItem[] = [];

    const demoitems: string[] = ['En mottagning med långt namn', 'Min mottagning', 'Hennes mottagning', 'Hans mottagning', 'Evas mottagning', 'Karl-Johan Fredrikssons mottagning - Östra Göteborg']

    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `${demoitems[this.getRandomInt(0, 6)]}` } as IDropdownItem);
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


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

}
