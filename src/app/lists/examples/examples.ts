export class Examples {
  htmlBasicListStructureMarkup = `
  <vgr-list">
  <!-- Rootelementet -->
  <vgr-list-header>
  <!-- Header kan inhehålla flera kolumn-headers -->
    <vgr-list-column-header>
    <!-- Lägg rubriktext i kolumn-header här -->
    </vgr-list-column-header>
  </vgr-list-header>
  <vgr-list-item>
  <!-- Motsvarar en rad -->
    <vgr-list-item-header>
    <!-- List-item-header-element för ett list-item, kan innehålla flera kolumner med rubrik  -->
      <vgr-list-column></vgr-list-column>
      <!-- Anger rubrik för list-item-kolumnen -->
    </vgr-list-item-header>
    <vgr-list-item-content>
    <!-- Innehåll för ett list-item -->
    </vgr-list-item-content>
  </vgr-list-item>
</vgr-list>`;

  typeScriptSimpleListMarkup = `import { Component, OnInit } from '@angular/core';
    import {
      SortDirection,  // Enum för vilket håll sorteringen skall ske.
      SortChangedArgs // Args när sorteringordningen ändras.
    } from 'vgr-komponentkartan/';

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
          { id: '1', firstName: 'Git', lastName: 'Hubsson', occupation: 'Ninja codewarrior', income: 300000 } as ExamplePerson,
          { id: '2', firstName: 'Stud', lastName: 'Visualizer', occupation: 'Black Dragon', income: 450000 } as ExamplePerson,
          { id: '3', firstName: 'See', lastName: 'Charper', occupation: 'Chrome wizard', income: 230000 } as ExamplePerson,
          { id: '3', firstName: 'IT-Lasse', lastName: 'Andersson', occupation: 'Data', income: 600000 } as ExamplePerson
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
      income: number;
    }`;

  htmltSimpleListMarkup = ` <vgr-list [flexibleHeader]="true" (sortChanged)="onSortChanged($event)">
  <vgr-list-header>
    <vgr-list-column-header text="Förnamn" width="5" sortKey="firstName"
     [sortDirection]="sortDirections.Ascending"></vgr-list-column-header>
    <vgr-list-column-header text="Efternamn" width="5" align="left" sortKey="lastName"></vgr-list-column-header>
    <vgr-list-column-header text="Yrke" width="5" sortKey="occupation"></vgr-list-column-header>
    <vgr-list-column-header text="Inkomst" align="right" width="5" sortKey="income"></vgr-list-column-header>
  </vgr-list-header>
  <vgr-list-item *ngFor="let row of peopleRowsSimpleList">
    <vgr-list-item-header>
      <vgr-list-column [text]="row.firstName"></vgr-list-column>
      <vgr-list-column [text]="row.lastName"></vgr-list-column>
      <vgr-list-column [text]="row.occupation"></vgr-list-column>
      <vgr-list-column [text]="row.income| number:'2.2-2':'sv'"></vgr-list-column>
    </vgr-list-item-header>
    <vgr-list-item-content>
        <span>Förnamn: {{row.firstName}}</span>
        <br>
        <span>Efternamn: {{row.lastName}}</span>
        <br>
        <span>Yrke: {{row.occupation}}</span>
        <br>
        <span>Inkomst: {{row.income | currency : 'SEK'}}</span>
    </vgr-list-item-content>
  </vgr-list-item>
</vgr-list>`;

  typeScriptAdvancedListMarkup = `import { Component, OnInit } from '@angular/core';
  import {
    ExpandableRow, NotificationIcon, RowNotification, NotificationType, ModalService,
    ModalButtonConfiguration, SortChangedArgs, ListHeaderComponent, SortDirection
  } from 'vgr-komponentkartan/';

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
  htmlAdvancedListMarkup = `<vgr-list [flexibleHeader]="true" [allowMultipleExpandedItems]="false" (sortChanged)="onSortChanged($event)">
  <vgr-list-header>
    <vgr-list-column-header [text]="'Förnamn'" [width]="10" [sortKey]="'firstName'"
    [sortDirection]="sortDirections.Ascending"></vgr-list-column-header>
    <vgr-list-column-header [text]="'Efternamn'" [width]="10" [sortKey]="'lastName'"></vgr-list-column-header>
  </vgr-list-header>
  <vgr-list-item *ngFor="let row of peopleRows" [notification]="row.notification" [expanded]="row.expanded">
    <vgr-list-item-header>
      <vgr-list-column [text]="row.previewObject.firstName"></vgr-list-column>
      <vgr-list-column [text]="row.previewObject.lastName"></vgr-list-column>
    </vgr-list-item-header>
    <vgr-list-item-content>
      <vgr-button [secondary]="true" (click)="updateRow(row)">Uppdatera</vgr-button>
      <vgr-button [secondary]="true" (click)="deleteRow(row)">Ta bort</vgr-button>
    </vgr-list-item-content>
  </vgr-list-item>
</vgr-list>`;

  htmlActionButtonsListMarkup = `<vgr-list [flexibleHeader]="true" (sortChanged)="onSortChanged($event)">
  <vgr-list-header>
    <vgr-list-column-header text="Förnamn" width="10" align="left" sortKey="firstName"></vgr-list-column-header>
    <vgr-list-column-header text="Efternamn" width="5" sortKey="lastName"></vgr-list-column-header>
    <vgr-list-column-header text="Årsbelopp" width="3" align="right" sortKey="amount"></vgr-list-column-header>
    <vgr-list-column-header width="1"></vgr-list-column-header>
    <vgr-list-column-header width="1" align="center" text="Val" sortKey="selected"></vgr-list-column-header>
  </vgr-list-header>
  <vgr-list-item *ngFor="let row of peopleRows" [notification]="row.notification" (deleted)="notifyOnDelete(row)">
    <vgr-list-item-header>
      <vgr-list-column [text]="row.previewObject.firstName"></vgr-list-column>
      <vgr-list-column [text]="row.previewObject.lastName"></vgr-list-column>
      <vgr-list-column [text]="row.previewObject.amount | number:'2.2-2':'sv'"></vgr-list-column>
      <vgr-list-column-trashcan [disabled]="row.previewObject.deleted" (delete)="onDeleteRow(row)"></vgr-list-column-trashcan>
      <vgr-list-column-checkbox [disabled]="row.previewObject.deleted" [checked]="row.previewObject.selected"
       (checkedChanged)="onSelectRowChanged(row, $event)"></vgr-list-column-checkbox>
    </vgr-list-item-header>
    <vgr-list-item-content>
      <span>Mer information</span>
    </vgr-list-item-content>
  </vgr-list-item>
</vgr-list>
<br>
<p>Du har valt {{ getSelectedRows() }} rader</p>`;

  typeScriptActionButtonsListMarkup = `import { Component } from '@angular/core';
    import { HtmlEncodeService } from '../../../html-encode.service';
    import { Examples } from '../examples';
    import {
        ModalService, ModalButtonConfiguration, NotificationIcon, ExpandableRow,
        SortDirection, SortChangedArgs
    } from 'vgr-komponentkartan/';

    @Component({
        selector: 'app-listexamplewithactionbuttons',
        templateUrl: './listexamplewithactionbuttons.component.html',
        styleUrls: ['./listexamplewithactionbuttons.component.scss']
    })
    export class ListExampleWithActionButtonsComponent {

        public peopleRows: ExpandableRow<ExamplePerson, any>[];
        typeScriptSimpleListMarkup: string;
        htmlSimpleListMarkup: string;
        examples: Examples = new Examples();


        createExampleList(): ExpandableRow<ExamplePerson, any>[] {
            return [
                new ExpandableRow<ExamplePerson, any>({ id: '1', firstName: 'Git', lastName: 'Hubsson', amount: 125000 }),
                new ExpandableRow<ExamplePerson, any>({ id: '2', firstName: 'Adam', lastName: 'Lind', amount: 235000 }),
                new ExpandableRow<ExamplePerson, any>({ id: '3', firstName: 'Bjarne', lastName: 'Chi', amount: 25000 }),
                new ExpandableRow<ExamplePerson, any>({ id: '4', firstName: 'Carola', lastName: 'Bengtsson', amount: 720000 }),
                new ExpandableRow<ExamplePerson, any>({ id: '5', firstName: 'Erik', lastName: 'Karlsson', amount: 401200 }),
            ];
        }

        loadData() {
            this.peopleRows = this.createExampleList();
        }

        onSelectRowChanged(row: any, checked: boolean) {
            row.previewObject.selected = checked;
        }

        onDeleteRow(row: any) {
            this.removeRow(row);
        }

        notifyOnDelete(row: any) {
          this.modalService.openDialog('Info', 'Du tog bort detta objektet: ' + JSON.stringify(row, null, "\\t"),
              new ModalButtonConfiguration('Stäng', () => {
              })
          );
        }

        removeRow(row: any) {
            this.modalService.openDialog('Ta bort raden', 'Vill du verkligen ta bort ' + row.previewObject.firstName + '?',
                new ModalButtonConfiguration('Ja', () => {
                    row.notifyOnRemove(row.previewObject.firstName + ' togs bort', NotificationIcon.Ok);
                    row.previewObject.selected = false;
                    row.previewObject.deleted = true;

                    /*
                      Remove for real...
                    */
                }),
                new ModalButtonConfiguration('Nej', () => { }));
        }

        getSelectedRows(): number {
            return this.peopleRows && this.peopleRows.filter(r => r.previewObject.selected).length;
        }

        onSortChanged(event: SortChangedArgs) {

            if (event.key === 'selected') {
                if (event.direction === SortDirection.Ascending) {
                    this.peopleRows = this.peopleRows.sort(function (x, y) {
                        return (x.previewObject.selected === y.previewObject.selected) ? 0 : x.previewObject.selected ? -1 : 1;
                    });
                } else {
                    this.peopleRows = this.peopleRows.sort(function (x, y) {
                        return (x.previewObject.selected === y.previewObject.selected) ? 0 : y.previewObject.selected ? -1 : 1;
                    });
                }
            } else {
                this.peopleRows = this.peopleRows.sort((row1, row2) => {
                    return row1.previewObject[event.key] > row2.previewObject[event.key] ?
                        (event.direction === SortDirection.Ascending ? 1 : -1) :
                        row1.previewObject[event.key] < row2.previewObject[event.key] ?
                            (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
                });
            }
        }


        constructor(htmlEncoder: HtmlEncodeService, private modalService: ModalService) {

            this.typeScriptSimpleListMarkup =
                htmlEncoder.prepareHighlightedSection(this.examples.typeScriptActionButtonsListMarkup, 'typescript');
            this.htmlSimpleListMarkup =
                htmlEncoder.prepareHighlightedSection(this.examples.htmlActionButtonsListMarkup);
        }

    }

    export interface ExamplePerson {
        id: string;
        firstName: string;
        lastName: string;
        amount: number;
        selected?: boolean;
    }

    `;
}
