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

  constructor() {
    const examplePeople = [
      { id: '1', firstName: 'Adam', lastName: 'Andersson' } as ExamplePerson,
      { id: '2', firstName: 'Bjarne', lastName: 'Bengtsson' } as ExamplePerson,
      { id: '3', firstName: 'Carola', lastName: 'Claesson' } as ExamplePerson,
      { id: '4', firstName: 'Daniella', lastName: 'Di Maria Marquez ' } as ExamplePerson,
      { id: '5', firstName: 'Erik', lastName: '' } as ExamplePerson,
    ];

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

  deleteRow(row: ExpandableRow<ExamplePerson, ExamplePerson>) {
    // Remove visually
    row.notifyOnRemove(row.previewObject.firstName + ' togs bort och kommer inte längre att kunna logga in', NotificationIcon.Ok);

    // Delete object for real...


  }


  /*   removeRowWithoutExpand(row: ExpandableRow<ExamplePerson, ExamplePerson>, event: Event) {
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
    } */

  savePerson(row: ExpandableRow<ExamplePerson, ExamplePerson>) {
    row.notifyOnCollapse(row.previewObject.firstName + ' sparades', NotificationIcon.OkGreen);
  }

  /*   cardSaved() {
      this.cardUnlocked = false;
      this.cardRow.notifyOnCollapse('Användaren sparades', NotificationIcon.OkGreen);
    }
  
    cardCancelled() {
      this.cardUnlocked = false;
      this.cardRow.notifyOnCollapse('Åtgärden avbröts', NotificationIcon.Ok);
    } */

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
}
