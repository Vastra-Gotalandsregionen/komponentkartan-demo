import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { RowNotification, NotificationType, SortDirection, SortChangedArgs, ExpandableRow } from 'vgr-komponentkartan';
import { ExampleUnit } from './unit.model';
import { ModalService } from 'vgr-komponentkartan';

@Component({
  selector: 'app-examples-listwithlists',
  templateUrl: './examples-listwithlists.component.html',
  styleUrls: ['./examples-listwithlists.component.scss']

})
export class ExamplesListwithlistsComponent implements OnInit {
  sortDirections = SortDirection;
  items = [];
  exampleData: ExpandableRow<ExampleUnit, any>[] = [];
  filtertext = '';
  itemSelected = false;
  selectedUnit = '';
  rowToRemove: ExpandableRow<ExampleUnit, any>;
  loading = false;

  includeInactiveUnits = false;
  startdate: Date;
  enddate: Date;

  constructor(private changeDetector: ChangeDetectorRef, public modalService: ModalService) {
    this.includeInactiveUnits = false;
    this.items = Array(3).fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  get allChecked() {
    if (this.exampleData.length === 0) {
      return false;
    }

    return this.exampleData && !this.exampleData.filter(r => !r.previewObject.deleted).find(x => !x.previewObject.vald);
  }

  get selectedRows(): ExpandableRow<ExampleUnit, any>[] {
    return this.exampleData.filter(r => r.previewObject.vald);
  }

  loadExampleData(value: string) {
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

    this.exampleData.forEach(element => {
      if (this.getRandomInt(0, 5) === 2) {
        element.setNotification('Meddelande om denna rad som ligger permanent', 'vgr-icon-exclamation');
      }
    });
  }

  searchForUnits() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.loadExampleData(this.filtertext);
    }, 1500);
  }

  onListCheckedChanged(event: boolean) {
    if (this.exampleData) {
      this.exampleData.filter(r => !r.previewObject.deleted).forEach(element => element.previewObject.vald = event);

    }
  }

  onSelectRowChanged(row: any, checked: boolean) {
    row.previewObject.vald = checked;
  }

  onSelectedChangedUnit(selectedItem: string) {
    this.itemSelected = true;
  }

  onDeleteRow(row: any) {
    this.removeRow(row);
  }
  removeRow(row: ExpandableRow<ExampleUnit, any>) {
    this.rowToRemove = row;
    this.modalService.openDialog('deleteRowModal');
  }

  getSelectedRows(): string {
    let result;
    if (this.exampleData.length === 0) {
      return '';
    } else {
      result = this.selectedRows.map(u => u.previewObject.enhet);
      if (result.length === 1) {
        return result;
      } else {
        return [result.slice(0, -1).join(', '), result.slice(-1)[0]].join(result.length < 2 ? ', ' : ' och ');
      }
    }
  }

  removeSelectedRow() {
    this.rowToRemove.notifyOnRemove(this.rowToRemove.previewObject.enhet + ' togs bort', 'vgr-icon-ok-check');
    this.rowToRemove.previewObject.vald = false;
    this.rowToRemove.previewObject.deleted = true;
    /*
      Remove for real...
    */
    this.modalService.closeDialog('deleteRowModal');
  }

  removeSelectedRows() {
    this.selectedRows.forEach(x => {
      x.notifyOnRemove(x.previewObject.enhet + ' togs bort', 'vgr-icon-ok-check');
      x.previewObject.vald = false;
      x.previewObject.deleted = true;
    });
  }

  printSelectedRows() {
    this.exampleData.forEach(element => element.previewObject.vald = false);
    this.modalService.closeDialog('printModal');
  }


  closeModal(modalId: string) {

    this.modalService.closeDialog(modalId);
  }

  onSortChanged(event: SortChangedArgs) {
    this.exampleData = this.exampleData.sort((row1, row2) => {
      return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }
}
