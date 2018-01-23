import { Component, OnInit } from '@angular/core';
import { SortDirection } from 'vgr-komponentkartan'

@Component({
  selector: 'app-examples-listwithcards',
  templateUrl: './examples-listwithcards.component.html',
  styleUrls: ['./examples-listwithcards.component.scss']
})
export class ExamplesListwithcardsComponent implements OnInit {
  sortDirections = SortDirection;
  exampleData: ExampleUnits[] = [];
  constructor() { this.exampleData = this.initExampleData(); }

  ngOnInit() {

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


    for (let i = 1; i <= 10; i++) {
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

}
export interface ExampleUnits {
  id: number;
  enhet: string;
  hsaid: string;
  agare: string;
  enhetskod: number;
  namnd: string;
}