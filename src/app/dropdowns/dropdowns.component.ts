import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from 'vgr-komponentkartan';
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
    this.dropDownItems200 = this.getDemoItemsMixedName(200);
    this.dropDownItems8 = this.getDemoItemsMixedName(8);
    this.dropDownItems8AndSelected = this.getDemoItemsWithOneSelected(8, 2);
    this.dropDownItems9 = this.getDemoItemsLongName(9);
    this.dropDownItems25All = this.getDemoItemsMixedName(25);
    this.isReadonlyAndDisabled = true;
  }

  ngOnInit() {
  }

  private getDemoItems(numberOfItems: number): IDropdownItem[] {
    const items: IDropdownItem[] = [];
    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `${i} - Min mottagning`, displayNameWhenSelected: `Alt ${i}` } as IDropdownItem);
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

    const demoitems: string[] = ['En mottagning med långt namn', 'Min mottagning', 'Hennes mottagning', 'Hans mottagning', 'Evas mottagning', 'Karl-Johan Fredrikssons mottagning - Östra Göteborg', 'Karl-Johan Fredrikssons mottagning - Västra Göteborg']

    for (let i = 1; i <= numberOfItems; i++) {
      items.push({ id: i.toString(), displayName: `${demoitems[this.getRandomInt(0, 7)]}` } as IDropdownItem);
    }
    return items;
  }

  private getDemoItemsWithOneSelected(numberOfItems: number, selectedIndex: number): IDropdownItem[] {
    const list = this.getDemoItemsMixedName(numberOfItems);
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


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

}
