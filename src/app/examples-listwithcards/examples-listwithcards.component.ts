import { Component, OnInit } from '@angular/core';
import { SortDirection, SortChangedArgs, SelectableItem } from 'vgr-komponentkartan'

@Component({
  selector: 'app-examples-listwithcards',
  templateUrl: './examples-listwithcards.component.html',
  styleUrls: ['./examples-listwithcards.component.scss']
})
export class ExamplesListwithcardsComponent implements OnInit {
  sortDirections = SortDirection;
  exampleData: ExampleUnits[] = [];
  filtertext: string = "";
  newUnits: SelectableItem<string>[] = [];
  itemSelected: boolean = false;
  addNewUnit: boolean = false;
  showActionPanel: boolean = false;
  selectedUnit: string = "";
  constructor() {
    this.exampleData = this.initExampleData();
    this.newUnits = [{ displayName: 'Närhälsan Lerum', value: 'SE2321000131-E000000011801' },
    { displayName: 'Fredriks Rehab/Massage', value: 'SE2321000131-E000000011802' },
    { displayName: 'Bvc för alla', value: 'SE2321000131-E000000011803' }]


  }

  ngOnInit() {

    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs)
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  initExampleData() {
    const items: ExampleUnits[] = [];
    const exampleNames: string[] = ['Närhälsan Mellerud', 'Närhälsan Lunden', 'Närhälsan Kungälv',
      'Närhälsan psykologenheten för mödravård', 'BB-mottagningen Östra', 'Kalle Karlssons fotvårdsenhet',
      'Närhälsan rehabmottagning', 'Närhälsan Kristinedal', 'Janne Karlssons hudvårdsspecialist',
      'Hälsoakuten Mölndal', 'Hälsoakuten Göteborg', 'Hälsoakuten Alingsås',
      'Rehabmottagningen Hemma'];
    const examplehsaid: string = 'SE2321000131-E000000011800';
    const exampleagare: string[] = ['Närhälsan', 'Hälsoakuten', 'Kalle Karlsson', 'Närhälsan Rehab', 'Hemmabolaget'];
    const examplehenhetskod: number[] = [802200, 663300, 663200, 623300, 627600, 432300, 435600, 806600, 834500, 678500, 458700, 648900, 804500];
    const examplenamnd: string[] = ['Göteborgs hälso- och sjukvårdsnämnden', 'Norra hälso- och sjukvårdsnämnden', 'Södra hälso- och sjukvårdsnämnden', 'Västra hälso- och sjukvårdsnämnden', 'Östra hälso- och sjukvårdsnämnden'];


    for (let i = 1; i <= 15; i++) {
      const indexForNames = this.getRandomInt(0, 12);
      const indexForAgare = this.getRandomInt(0, 4);
      const indexForEnhetskod = this.getRandomInt(0, 12);
      const indexForNamnd = this.getRandomInt(0, 4);
      console.log(i + '=>' + indexForNames + ' ' + indexForAgare + ' ' + indexForEnhetskod + ' ' + indexForNamnd)
      items.push({
        id: i, enhet: exampleNames[indexForNames], hsaid: examplehsaid, agare: exampleagare[indexForAgare], enhetskod: examplehenhetskod[indexForEnhetskod], namnd: examplenamnd[indexForNamnd]
      } as ExampleUnits);
      // console.log(i);
      // items.push({
      //   id: i, enhet: 'Enhet', hsaid: 'hsaid', agare: 'Ägare', enhetskod: 123456, namnd: 'nämnd'
      // } as ExampleUnits);
    }
    return items;
  }

  onSelectedChanged(selectedItem: string) {
    console.log(selectedItem);
    this.itemSelected = true;
    this.selectedUnit = this.newUnits.find(u => u.value === selectedItem).displayName;

  }

  onActionPanelClose() {
    this.showActionPanel = false;
    this.addNewUnit = false;


    this.newUnits.forEach(u => u.selected = false);
    this.itemSelected = false
    console.log(this.newUnits);

  }
  onSortChanged(event: SortChangedArgs) {
    this.exampleData = this.exampleData.sort((row1, row2) => {
      return row1[event.key] > row2[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1[event.key] < row2[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }

}
export interface ExampleUnits {
  id: number;
  enhet: string;
  hsaid: string;
  agare: string;
  enhetskod: number;
  namnd: string;
}