import { Component, OnInit } from '@angular/core';
import {
  ExpandableRow, NotificationIcon, RowNotification, NotificationType, ModalService,
  ModalButtonConfiguration, SortChangedArgs, ListHeaderComponent, SortDirection
} from 'vgr-komponentkartan';

@Component({
  selector: 'app-listexample',
  templateUrl: './listexample.component.html',
  styleUrls: ['./listexample.component.scss']
})
export class ListexampleComponent {
  sortDirections = SortDirection;
  public peopleRows: ExpandableRow<ExamplePerson, ExamplePerson>[];
  public cardUnlocked: boolean;
  public cardRow: ExpandableRow<string, string> = new ExpandableRow<string, string>('Foo');
  get netAmount(): number {
    if (isNaN(this.grossAmount) || isNaN(this.taxPercent)) {
      return NaN;
    } else {
      return this.grossAmount - ((this.taxPercent / 100) * this.grossAmount);
    }
  }
  public grossAmount: number;
  public taxPercent: number;
  public selectedDate: Date;
  constructor(private modalService: ModalService) {
    const examplePeople = [
      { id: '1', firstName: 'Adam', lastName: 'Andersson', organisations: ['Team 1', 'Team 2'] } as ExamplePerson,
      { id: '2', firstName: 'Bjarne', lastName: 'Bengtsson', organisations: ['Team 1'], canBeDeleted: true } as ExamplePerson,
      { id: '3', firstName: 'Carola', lastName: 'Claesson', organisations: ['Team 1', 'Team 2', 'Team 3'] } as ExamplePerson,
      { id: '4', firstName: 'Daniella', lastName: 'Di Maria Marquez ', organisations: ['Team 4'], canBeDeleted: true } as ExamplePerson,
      { id: '5', firstName: 'Erik', lastName: '', organisations: ['Team 2', 'Team 4'] } as ExamplePerson,
    ];

    this.grossAmount = 15000;
    this.taxPercent = 32;
    this.selectedDate = new Date(2017, 9, 10);

    this.peopleRows = examplePeople.map(x => new ExpandableRow<ExamplePerson, ExamplePerson>(x));

    this.peopleRows[0].notification = {
      message: 'Information saknas', icon: NotificationIcon.ExclamationRed,
      type: NotificationType.Permanent
    } as RowNotification;
    this.peopleRows[4].notification = {
      message: 'Personen är inaktiv', icon: NotificationIcon.Exclamation,
      type: NotificationType.Permanent
    } as RowNotification;
  }

  removeRow(row: ExpandableRow<ExamplePerson, ExamplePerson>) {
    this.modalService.openDialog('Ta bort person', 'Vill du verkligen ta bort ' + row.previewObject.firstName + '?',
      new ModalButtonConfiguration('Ja', () => {

        row.notifyOnRemove(row.previewObject.firstName + ' togs bort och kommer inte längre att kunna logga in', NotificationIcon.Ok);
        row.previewObject.deleted = true;
      }),
      new ModalButtonConfiguration('Nej', () => { }));
  }


  removeRowWithoutExpand(row: ExpandableRow<ExamplePerson, ExamplePerson>, event: Event) {
    event.cancelBubble = true;
    this.modalService.openDialog('Ta bort person', 'Vill du verkligen ta bort ' + row.previewObject.firstName + '?',
      new ModalButtonConfiguration('Ja', () => {
        row.notifyOnRemove(row.previewObject.firstName + ' togs bort och kommer inte längre att kunna logga in', NotificationIcon.Ok);
        row.previewObject.deleted = true;
      }),
      new ModalButtonConfiguration('Nej', () => { }));
  }

  removeCardRow(row: ExpandableRow<string, string>) {
    this.modalService.openDialog('Ta bort rad', 'Vill du verkligen ta bort raden?',
      new ModalButtonConfiguration('Ja', () => {
        row.notifyOnRemove('Raden togs bort', NotificationIcon.Ok);
      }),
      new ModalButtonConfiguration('Nej', () => { }));
  }

  savePerson(row: ExpandableRow<ExamplePerson, ExamplePerson>) {
    row.notifyOnCollapse(row.previewObject.firstName + ' sparades', NotificationIcon.OkGreen);
  }

  cardSaved() {
    this.cardUnlocked = false;
    this.cardRow.notifyOnCollapse('Användaren sparades', NotificationIcon.OkGreen);
  }

  cardCancelled() {
    this.cardUnlocked = false;
    this.cardRow.notifyOnCollapse('Åtgärden avbröts', NotificationIcon.Ok);
  }

  onSortChanged(event: SortChangedArgs) {
    this.peopleRows = this.peopleRows.sort((row1, row2) => {
      return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }
}

export interface ExamplePerson {
  id: string;
  firstName: string;
  lastName: string;
  organisations: string[];
  canBeDeleted: boolean;
  deleted: boolean;
}
