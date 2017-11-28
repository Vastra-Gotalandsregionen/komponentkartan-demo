export class Examples {
  typeScriptSimpleListMarkup = `import { Component, OnInit } from '@angular/core';
    import {
      SortDirection,  // Enum för vilket håll sorteringen skall ske.
      SortChangedArgs // Args när sorteringordningen ändras.
    } from 'vgr-komponentkartan';

    @Component({
      selector: 'app-listcodeexample',
      templateUrl: './listcodeexample.component.html',
      styleUrls: ['./listcodeexample.component.scss']
    })
    export class ListcodeexampleComponent implements OnInit {
      public peopleRowsSimpleList: ExamplePerson[];

      sortDirections = SortDirection; // Fix för att kunna använda sig utav enum.
      constructor() {
        this.peopleRowsSimpleList = [
          { id: '1', firstName: 'Git', lastName: 'Hubsson', occupation: 'Ninja codewarrior' } as ExamplePerson,
          { id: '2', firstName: 'Stud', lastName: 'Visualizer', occupation: 'Black Dragon' } as ExamplePerson,
          { id: '3', firstName: 'See', lastName: 'Charper', occupation: 'Chrome wizard' } as ExamplePerson,
          { id: '3', firstName: 'IT-Lasse', lastName: 'Andersson', occupation: 'Data' } as ExamplePerson
        ];
      }

      onSortChanged(event: SortChangedArgs) {
        this.peopleRowsSimpleList = this.peopleRowsSimpleList.sort((row1, row2) => {
          return row1[event.key] > row2[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
            row1[event.key] < row2[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
        });
      }
      ngOnInit() {
      }
    }
    export interface ExamplePerson {
      id: string;
      firstName: string;
      lastName: string;
      occupation: string;
    }`;

  htmltSimpleListMarkup = `<vgr-list [flexibleHeader]="true" (sortChanged)="onSortChanged($event)">
    <vgr-list-header>
      <vgr-list-column-header [text]="'Förnamn'" [width]="5" [sortKey]="'firstName'" [sortDirection]="sortDirections.Ascending"></vgr-list-column-header>
      <vgr-list-column-header [text]="'Efternamn'" [width]="5" [sortKey]="'lastName'"></vgr-list-column-header>
      <vgr-list-column-header [text]="'Yrke'" [width]="10" [sortKey]="'occupation'"></vgr-list-column-header>
    </vgr-list-header>
    <vgr-list-item *ngFor="let row of peopleRowsSimpleList">
      <div class="list-item__header">
        <vgr-list-column [text]="row.firstName"></vgr-list-column>
        <vgr-list-column [text]="row.lastName"></vgr-list-column>
        <vgr-list-column [text]="row.occupation"></vgr-list-column>
      </div>
      <div class="list-item__content">
        <span>Förnamn: {{row.firstName}}</span>
        <br>
        <span>Efternamn: {{row.lastName}}</span>
        <br>
        <span>Yrke: {{row.occupation}}</span>
      </div>
    </vgr-list-item>
  </vgr-list>`;

  typeScriptAdvancedListMarkup = `import { Component, OnInit } from '@angular/core';
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
    examplePeople: ExamplePerson[];

    constructor() {
      this.examplePeople = [
        { id: '1', firstName: 'Adam', lastName: 'Andersson' } as ExamplePerson,
        { id: '2', firstName: 'Bjarne', lastName: 'Bengtsson' } as ExamplePerson,
        { id: '3', firstName: 'Carola', lastName: 'Claesson' } as ExamplePerson,
        { id: '4', firstName: 'Daniella', lastName: 'Di Maria Marquez ' } as ExamplePerson,
        { id: '5', firstName: 'Erik', lastName: '' } as ExamplePerson,
      ];

      this.peopleRows = this.examplePeople.map(x => new ExpandableRow<ExamplePerson, ExamplePerson>(x));

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
      // Remove visually.
      row.notifyOnRemove(row.previewObject.firstName + ' togs bort och kommer inte längre att kunna logga in', NotificationIcon.Ok);

      /*
       Remove for real...
      */
    }

    updateRow(row: ExpandableRow<ExamplePerson, ExamplePerson>) {
      row.notifyOnCollapse(row.previewObject.firstName + ' sparades', NotificationIcon.OkGreen);
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
  }
  `;
  htmlAdvancedListMarkup = `<vgr-page>
  <vgr-page-header [title]="'Exempellista'">
  </vgr-page-header>
  <vgr-page-body>
    <vgr-page-block>
      <div>
        <h2>Enkel lista</h2>
        <p>Här har vi exempel på en lista med notifieringar. även bredden på kolumnerna är satta. För att se dokumentationen
          på komponenten, klicka
          <a href="/lists">här.</a>
        </p>
      </div>
      <vgr-list [flexibleHeader]="true" [allowMultipleExpandedItems]="false" (sortChanged)="onSortChanged($event)">
        <vgr-list-header>
          <vgr-list-column-header [text]="'Förnamn'" [width]="10" [sortKey]="'firstName'"
           [sortDirection]="sortDirections.Ascending"></vgr-list-column-header>
          <vgr-list-column-header [text]="'Efternamn'" [width]="10" [sortKey]="'lastName'"></vgr-list-column-header>
        </vgr-list-header>
        <vgr-list-item *ngFor="let row of peopleRows" [notification]="row.notification" [expanded]="row.expanded">
          <div class="list-item__header">
            <vgr-list-column [text]="row.previewObject.firstName"></vgr-list-column>
            <vgr-list-column [text]="row.previewObject.lastName"></vgr-list-column>
          </div>
          <div class="list-item__content">
            <vgr-button [secondary]="true" (click)="updateRow(row)">Uppdatera</vgr-button>
            <vgr-button [secondary]="true" (click)="deleteRow(row)">Ta bort</vgr-button>
          </div>
        </vgr-list-item>
      </vgr-list>
    </vgr-page-block>
  </vgr-page-body>
</vgr-page>`;
}
