import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { SortDirection, SortChangedArgs, SelectableItem, DropdownItem, ExpandableRow, NotificationIcon } from 'vgr-komponentkartan';
import { ExampleUnit, ExampleUnitDetails, ExampleUnitJusteringar } from './unit.model';

@Component({
  selector: 'app-examples-listwithcards',
  templateUrl: './examples-listwithcards.component.html',
  styleUrls: ['./examples-listwithcards.component.scss']
})
export class ExamplesListwithcardsComponent implements OnInit {
  exampleDetail: ExampleUnitDetails;
  sortDirections = SortDirection;
  notificationIcon = NotificationIcon;
  exampleData: ExpandableRow<ExampleUnit, any>[] = [];
  filtertext = '';
  newUnits: DropdownItem<any>[] = [];
  itemSelected = false;
  addNewUnit = false;
  newUnit: ExampleUnit;
  showActionPanel = false;
  selectedUnit = '';
  unitInFocus = '';
  examplenamnd: DropdownItem<any>[];
  exampleagare: DropdownItem<string>[];
  exempelUtbetalningssatt: DropdownItem<any>[];
  exempelMedverkanIfamiljecentral: DropdownItem<any>[];
  cardLocked: boolean;


  constructor(private changeDetecor: ChangeDetectorRef) {

    this.newUnits = [{ displayName: 'Närhälsan Lerum', value: 'SE2321000131-E000000011801' } as DropdownItem<any>,
    { displayName: 'Fredriks Rehab/Massage', value: 'SE2321000131-E000000011802' } as DropdownItem<any>,
    { displayName: 'Bvc för alla', value: 'SE2321000131-E000000011803' } as DropdownItem<any>] as DropdownItem<any>[];

    this.exampleDetail = {
      enhetschef: 'Sarah Larsson',
      enhetschef_epost: 'sarah.larsson@minmail.se',
      enhetschef_telefon: '+461 111 1111',
      avtalsperiod_slut: new Date(2019, 11, 31),
      avtalsperiod_start: new Date(2018, 0, 1),
      agare_kod: 101,
      agare_form: 'privat',
      avtalskod: 1234,
      kontonummer: '1234 1234 12',
      geokod: 'x:6471784 y:6471784',
      kommun: 'Mölndal', kommunkod: 123,
      telefon: '123456789',
      organisationsnummer: '123456789',
      versions: [1, 2, 3, 4, 5, 6],
      leverantorsid_RD: '123456',
      kundreferens: 'A233',
      postadress_stad: 'Vänersborg',
      postadress_gata: 'Regeringsgatan 12',
      postadress_postnummer: '12345',
      besoksadress_stad: 'Göteborg',
      besoksadress_gata: 'Torgatan',
      besoksadress_postnummer: '32133',
      regionsovergripandegrupper: '1000 kr'
    } as ExampleUnitDetails;

    this.exampleagare = [{ displayName: 'Närhälsan', value: 'Närhälsan' } as DropdownItem<any>,
    { displayName: 'Hälsoakuten', value: 'Hälsoakuten' } as DropdownItem<any>,
    { displayName: 'Kalle Karlsson', value: 'Kalle Karlsson' } as DropdownItem<any>,
    { displayName: 'Närhälsan Rehab', value: 'Närhälsan Rehab' } as DropdownItem<any>,
    { displayName: 'Hemmabolaget', value: 'Hemmabolaget' } as DropdownItem<any>] as DropdownItem<any>[];

    this.examplenamnd = [{ displayName: 'Göteborgs hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { displayName: 'Norra hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { displayName: 'Södra hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { displayName: 'Västra hälso- och sjukvårdsnämnden' } as DropdownItem<any>,
    { displayName: 'Östra hälso- och sjukvårdsnämnden' } as DropdownItem<any>] as DropdownItem<any>[];
    this.exempelUtbetalningssatt = [{ displayName: 'BG' } as DropdownItem<any>,
    { displayName: 'PG' } as DropdownItem<any>] as DropdownItem<any>[];

    this.exempelMedverkanIfamiljecentral = [{ displayName: 'ja' } as DropdownItem<any>,
    { displayName: 'nej' } as DropdownItem<any>] as DropdownItem<any>[];
    this.initExampleData();

    this.cardLocked = true;
  }

  ngOnInit() {

    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  initExampleData() {
    const items: ExampleUnit[] = [];
    const exampleNames: string[] = ['Närhälsan Mellerud', 'Närhälsan Lunden', 'Närhälsan Kungälv',
      'Närhälsan psykologenheten för mödravård', 'BB-mottagningen Östra', 'Kalle Karlssons fotvårdsenhet',
      'Närhälsan rehabmottagning', 'Närhälsan Kristinedal', 'Janne Karlssons hudvårdsspecialist',
      'Hälsoakuten Mölndal', 'Hälsoakuten Göteborg', 'Hälsoakuten Alingsås',
      'Rehabmottagningen Hemma'];
    const examplehsaid = 'SE2321000131-E000000011800';
    const examplehenhetskod: number[] = [802200, 663300, 663200, 623300, 627600, 432300, 435600, 806600, 834500, 678500, 458700, 648900, 804500];


    for (let i = 1; i <= 4; i++) {
      const indexForNames = this.getRandomInt(0, 12);
      const indexForAgare = this.getRandomInt(0, 4);
      const indexForEnhetskod = this.getRandomInt(0, 12);
      const indexForNamnd = this.getRandomInt(0, 4);

      items.push({

        vald: false, id: i, enhet: exampleNames[indexForNames], hsaid: examplehsaid, agare: this.exampleagare[indexForAgare].displayName, enhetskod: examplehenhetskod[indexForEnhetskod], namnd: this.examplenamnd[indexForNamnd].displayName,
        details: this.exampleDetail
      } as ExampleUnit);
    }
    this.exampleData = items.map(x => new ExpandableRow<ExampleUnit, ExampleUnit>(x));

    // return items;
  }

  onSelectedChanged(selectedItem: string) {
    this.itemSelected = true;
    this.selectedUnit = this.newUnits.find(u => u.value === selectedItem).displayName;
  }

  onExpandedChanged(expanded: boolean, item: ExpandableRow<ExampleUnit, ExampleUnit>) {

    if (expanded && !item.previewObject.vald) {
      this.unitInFocus = item.previewObject.enhet;
      item.previewObject.vald = true;

      this.updateCardDropdowns(item.previewObject);

    } else { item.previewObject.vald = false; }
  }

  updateCardDropdowns(item: ExampleUnit) {
    this.exampleagare.forEach(a => a.selected = false);
    this.exampleagare.find(a => a.displayName === item.agare).selected = true;


    this.changeDetecor.detectChanges();

  }
  onCardCancel(row: ExpandableRow<ExampleUnit, any>) {
    this.cardLocked = true;
    row.notifyOnCollapse('redigering av ' + row.previewObject.enhet + ' avbröts', NotificationIcon.Exclamation);
  }

  onCardSave(row: ExpandableRow<ExampleUnit, any>) {
    this.cardLocked = true;
    row.notifyOnCollapse(row.previewObject.enhet + ' sparades', NotificationIcon.OkGreen);
  }

  onCardUnlocked() {

    this.cardLocked = false;
  }

  onNewUnitClick() {
    this.addNewUnit = true;
    this.newUnit = {
      hsaid: this.newUnits.find(u => u.displayName === this.selectedUnit).value,
      details: {
        enhet: this.selectedUnit,
        postadress_stad: 'Vänersborg',
        postadress_gata: 'Regeringsgatan 12',
        postadress_postnummer: '12345',
        besoksadress_stad: 'Göteborg',
        besoksadress_gata: 'Torgatan',
        besoksadress_postnummer: '32133',
        geokod: 'x:6471784 y:6471784',
        kommun: 'Mölndal', kommunkod: 123,
      }
    } as ExampleUnit;
    this.cardLocked = false;
  }

  onNewUnitCancel() {
    this.actionPanelClose();
    this.cardLocked = true;
  }

  onActionPanelClose() {
    this.actionPanelClose();
  }

  actionPanelClose() {
    this.showActionPanel = false;
    this.addNewUnit = false;
    this.newUnits.forEach(u => u.selected = false);
    this.itemSelected = false;

  }

  onSortChanged(event: SortChangedArgs) {
    this.exampleData = this.exampleData.sort((row1, row2) => {
      return row1[event.key] > row2[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1[event.key] < row2[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }



}
