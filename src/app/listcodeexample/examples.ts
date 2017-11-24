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
}
