import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { RowNotification, NotificationType, SortDirection, SortChangedArgs, ExpandableRow } from 'vgr-komponentkartan';
import { ExampleUnit } from './unit.model';

@Component({
  selector: 'app-examples-listwithlists',
  templateUrl: './examples-listwithlists.component.html'
})
export class ExamplesListwithlistsComponent implements OnInit {
  sortDirections = SortDirection;

  exampleData: ExpandableRow<ExampleUnit, any>[] = [];
  filtertext = '';
  itemSelected = false;
  selectedUnit = '';

  includeInactiveUnits = false;
  startdate: Date;
  enddate: Date;

  validationMessages = {
    avtalskod: {
      'minlength': 'Avtalskoden skall vara fyra siffror',
      'maxlength': 'Avtalskoden skall vara fyra siffror',
    },
    enhetskod: {
      'minlength': 'Enhetskoden skall vara sex siffror',
      'maxlength': 'Enhetskoden skall vara sex siffror',
    }
  };

  constructor(private changeDetector: ChangeDetectorRef) {
    this.initExampleData();
    this.includeInactiveUnits = false;
  }

  ngOnInit() {
    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  initExampleData() {
    const items: ExampleUnit[] = [];
    const exampleNames: string[] = ['Närhälsan Mellerud', 'Närhälsan Lunden', 'Närhälsan Kungälv',
      'Närhälsan psykologenheten för mödravård', 'BB-mottagningen Östra', 'Kalle Karlssons fotvårdsenhet',
      'Närhälsan rehabmottagning', 'Närhälsan Kristinedal', 'Janne Karlssons hudvårdsspecialist',
      'Hälsoakuten Mölndal', 'Hälsoakuten Göteborg', 'Hälsoakuten Alingsås',
      'Rehabmottagningen Hemma'];
    const examplehsaid = 'SE2321000131-E000000011';
    const examplehenhetskod: number[] = [802200, 663300, 663200, 623300, 627600, 432300, 435600, 806600, 834500, 678500, 458700, 648900, 804500];
    let item: ExampleUnit;
    for (let i = 1; i <= 200; i++) {
      const indexForNames = this.getRandomInt(0, 12);
      const indexForAgare = this.getRandomInt(0, 4);
      const indexForEnhetskod = this.getRandomInt(0, 12);
      const indexForNamnd = this.getRandomInt(0, 4);
      const isActive = Math.random() >= 0.5;
      const amout = this.getRandomInt(1, 99) * 100;

      item = {
        vald: false,
        id: i,
        enhet: exampleNames[indexForNames] + ' ' + i.toString(),
        hsaid: examplehsaid + (200 + i).toString(),
        belopp: amout,
        isActive: isActive
      } as ExampleUnit;

      items.push(item);
    }

    this.exampleData = items.map(x => new ExpandableRow<ExampleUnit, ExampleUnit>(x));
  }

  onSelectedChangedUnit(selectedItem: string) {
    this.itemSelected = true;
  }

  onExpandedChanged(expanded: boolean, item: ExpandableRow<ExampleUnit, ExampleUnit>) {
    if (expanded && !item.previewObject.vald) {
      item.previewObject.vald = true;
    } else {
      item.previewObject.vald = false;
    }
    this.changeDetector.detectChanges();
  }

  onSortChanged(event: SortChangedArgs) {
    this.exampleData = this.exampleData.sort((row1, row2) => {
      return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }
}
