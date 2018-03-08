import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { RowNotification, NotificationType, SortDirection, SortChangedArgs, ExpandableRow } from 'vgr-komponentkartan';
import { ExampleUnit } from './unit.model';
import { ModalService } from 'vgr-komponentkartan';
import { UnitService } from './unitService';

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
  noSearchResult = false;

  includeInactiveUnits = false;
  startdate: Date;
  enddate: Date;

  constructor(private changeDetector: ChangeDetectorRef, private unitService: UnitService, public modalService: ModalService) {
    this.includeInactiveUnits = false;
    this.items = Array(3).fill(0).map((x, i) => i);
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

  ngOnInit() {
    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  searchForUnits() {
    this.loading = true;
    this.noSearchResult = false;

    this.unitService.getUnits(this.filtertext)
      .subscribe(units => {
        if (units.length > 0) {
          this.mapToListItems(units);
        } else {
          this.noSearchResult = true;
        }
        this.loading = false;
      });
  }

  private mapToListItems(enheter: ExampleUnit[]) {
    this.exampleData = enheter.map(x => new ExpandableRow<ExampleUnit, any>(x));
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
