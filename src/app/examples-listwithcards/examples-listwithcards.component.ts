import { Component, OnInit } from '@angular/core';
import { SortDirection, SortChangedArgs, SelectableItem, DropdownItem } from 'vgr-komponentkartan';

@Component({
  selector: 'app-examples-listwithcards',
  templateUrl: './examples-listwithcards.component.html',
  styleUrls: ['./examples-listwithcards.component.scss']
})
export class ExamplesListwithcardsComponent implements OnInit {
  exampleDetail: ExampleUnitDetails;
  sortDirections = SortDirection;
  exampleData: ExampleUnit[] = [];
  filtertext = '';
  newUnits: SelectableItem<string>[] = [];
  itemSelected = false;
  addNewUnit = false;
  showActionPanel = false;
  selectedUnit = '';
  readonly = true;
  unitInFocus = '';
  examplenamnd: DropdownItem<any>[];


  constructor() {
    this.newUnits = [{ displayName: 'Närhälsan Lerum', value: 'SE2321000131-E000000011801' },
    { displayName: 'Fredriks Rehab/Massage', value: 'SE2321000131-E000000011802' },
    { displayName: 'Bvc för alla', value: 'SE2321000131-E000000011803' }];
    this.exampleDetail = { enhetschef: 'Sarah Larsson', enhetschef_epost: 'sarah.larsson@minmail.se', enhetschef_telefon: '+461 111 1111', avtalsperiod_slut: new Date(2019, 11, 31), avtalsperiod_start: new Date(2018, 0, 1), agare_kod: 101, avtalskod: 1234, kontonummer: '1234 1234 12', geokod: 'x:6471784 y:6471784', kommun: 'Mölndal', kommunkod: 123, telefon: '123456789', organisationsnummer: '123456789', versions: [1, 2, 3, 4, 5, 6], utbetalningsssätt: 'PG' } as ExampleUnitDetails;
    this.examplenamnd = [{ value: 'Göteborgs hälso- och sjukvårdsnämnden', selected: true } as DropdownItem<any>,
    { value: 'Norra hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { value: 'Södra hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { value: 'Västra hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { value: 'Östra hälso- och sjukvårdsnämnden' } as DropdownItem<any>] as DropdownItem<any>[];
    this.exampleData = this.initExampleData();

  }

  ngOnInit() {

    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  initExampleData() {
    const items: ExampleUnit[] = [];
    const exampleNames: string[] = ['Närhälsan Mellerud', 'Närhälsan Lunden', 'Närhälsan Kungälv',
      'Närhälsan psykologenheten för mödravård', 'BB-mottagningen Östra', 'Kalle Karlssons fotvårdsenhet',
      'Närhälsan rehabmottagning', 'Närhälsan Kristinedal', 'Janne Karlssons hudvårdsspecialist',
      'Hälsoakuten Mölndal', 'Hälsoakuten Göteborg', 'Hälsoakuten Alingsås',
      'Rehabmottagningen Hemma'];
    const examplehsaid = 'SE2321000131-E000000011800';
    const exampleagare: string[] = ['Närhälsan', 'Hälsoakuten', 'Kalle Karlsson', 'Närhälsan Rehab', 'Hemmabolaget'];
    const examplehenhetskod: number[] = [802200, 663300, 663200, 623300, 627600, 432300, 435600, 806600, 834500, 678500, 458700, 648900, 804500];


    for (let i = 1; i <= 20; i++) {
      const indexForNames = this.getRandomInt(0, 12);
      const indexForAgare = this.getRandomInt(0, 4);
      const indexForEnhetskod = this.getRandomInt(0, 12);
      const indexForNamnd = this.getRandomInt(0, 4);
      // console.log(i + '=>' + indexForNames + ' ' + indexForAgare + ' ' + indexForEnhetskod + ' ' + indexForNamnd)
      // if (i === 1)
      //   items.push({
      //     vald: false, id: i, enhet: exampleNames[indexForNames], hsaid: examplehsaid, agare: exampleagare[indexForAgare], enhetskod: examplehenhetskod[indexForEnhetskod], namnd: examplenamnd[indexForNamnd]
      //   } as ExampleUnit);

      // else
      items.push({
        vald: false, id: i, enhet: exampleNames[indexForNames], hsaid: examplehsaid, agare: exampleagare[indexForAgare], enhetskod: examplehenhetskod[indexForEnhetskod], namnd: this.examplenamnd[indexForNamnd].value,
        details: this.exampleDetail
      } as ExampleUnit);

      // console.log(i);
      // items.push({
      //   id: i, enhet: 'Enhet', hsaid: 'hsaid', agare: 'Ägare', enhetskod: 123456, namnd: 'nämnd'
      // } as ExampleUnits);
    }

    console.log(items);
    return items;
  }

  onSelectedChanged(selectedItem: string) {
    this.itemSelected = true;
    this.selectedUnit = this.newUnits.find(u => u.value === selectedItem).displayName;

  }

  onExpandedChanged(expanded: boolean, item: ExampleUnit) {
    if (expanded && !item.vald) {
      this.unitInFocus = item.enhet;
      item.vald = true;
    } else { item.vald = false; }

    console.log(item);
  }

  onActionPanelClose() {
    this.showActionPanel = false;
    this.addNewUnit = false;
    this.newUnits.forEach(u => u.selected = false);
    this.itemSelected = false;
    console.log(this.newUnits);
  }

  onSortChanged(event: SortChangedArgs) {
    this.exampleData = this.exampleData.sort((row1, row2) => {
      return row1[event.key] > row2[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1[event.key] < row2[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }

}
export interface ExampleUnit {
  id: number;
  enhet: string;
  hsaid: string;
  agare: string;
  enhetskod: number;
  namnd: string;
  vald: boolean;
  details: ExampleUnitDetails;

}
export interface ExampleUnitDetails {
  versions: number[];
  avtalskod: number;
  enhet: string;
  avtalsperiod_start: Date;
  avtalsperiod_slut: Date;
  enhetschef: string;
  enhetschef_telefon: string;
  enhetschef_epost: string;
  agare_kod: number;
  organisationsnummer: string;
  utbetalningsssätt: string;
  kontonummer: string;
  postadress: ExampleUnitAdress;
  besöksadress: ExampleUnitAdress;
  kommun: string;
  kommunkod: number;
  geokod: string;
  telefon: string;
  ersättningsinformation: ExampleUnitPaymentinformation;
  justeringar: ExampleUnitJusteringar;
}

export interface ExampleUnitAdress {
  gata: string;
  postnummer: string;
  stad: string;
}

export interface ExampleUnitPaymentinformation {
  medverkanfamiljecentral: string;
  regionsövergripandegrupper: string;
}
export interface ExampleUnitJusteringar {
  typ: string;
  betalningavser: string;
  belopp: number;
}
