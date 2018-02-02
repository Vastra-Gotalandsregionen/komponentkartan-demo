import { Component, OnInit, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SaveCancelComponent, SortDirection, SortChangedArgs, SelectableItem, DropdownItem, ExpandableRow, NotificationIcon } from 'vgr-komponentkartan';
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
  examplenamnd: DropdownItem<string>[];
  exampleagare: DropdownItem<string>[];
  exempelUtbetalningssatt: DropdownItem<string>[];
  exempelMedverkanIfamiljecentral: DropdownItem<string>[];
  cardLocked: boolean;
  includeInactiveUnits = false;
  startdate: Date;
  enddate: Date;
  exempelVersions: DropdownItem<any>[] = [];
  submitted: boolean = false;
  newUnitForm: FormGroup;
  privateOwnerForm: FormGroup;
  editUnitForm: FormGroup;
  editprivateOwnerForm: FormGroup;

  userFormSubmitted: boolean = false;



  @ViewChild(SaveCancelComponent) saveCancelComponent: SaveCancelComponent;

  constructor(private changeDetecor: ChangeDetectorRef) {

    this.newUnits = [{ displayName: 'Närhälsan Lerum', value: 'SE2321000131-E000000011801' } as DropdownItem<any>,
    { displayName: 'Fredriks Rehab/Massage', value: 'SE2321000131-E000000011802' } as DropdownItem<any>,
    { displayName: 'Bvc för alla', value: 'SE2321000131-E000000011803' } as DropdownItem<any>] as DropdownItem<any>[];

    this.exampleDetail = {
      enhetschef: 'Sarah Larsson',
      enhetschef_epost: 'sarah.larsson@minmail.se',
      enhetschef_telefon: '+461 111 1111',
      agare_kod: 101,
      agare_form: 'privat',
      avtalskod: 1234,
      kontonummer: '1234 1234 12',
      utbetalningsssätt: 'PG',
      geokod: 'x:6471784 y:6471784',
      kommun: 'Mölndal', kommunkod: 123,
      telefon: '123456789',
      organisationsnummer: '123456789',
      versions: [1, 2, 3],
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

    this.examplenamnd = [{ displayName: 'Göteborgs hälso- och sjukvårdsnämnden', value: 'Göteborgs hälso- och sjukvårdsnämnden' } as DropdownItem<string>,
    { displayName: 'Norra hälso- och sjukvårdsnämnden', value: 'Norra hälso- och sjukvårdsnämnden' } as DropdownItem<string>,
    { displayName: 'Södra hälso- och sjukvårdsnämnden', value: 'Södra hälso- och sjukvårdsnämnden' } as DropdownItem<string>,
    { displayName: 'Västra hälso- och sjukvårdsnämnden', value: 'Västra hälso- och sjukvårdsnämnden' } as DropdownItem<string>,
    { displayName: 'Östra hälso- och sjukvårdsnämnden', value: 'Östra hälso- och sjukvårdsnämnden' } as DropdownItem<string>] as DropdownItem<string>[];
    this.exempelUtbetalningssatt = [{ displayName: 'BG', value: 'BG' } as DropdownItem<string>,
    { displayName: 'PG', value: 'PG' } as DropdownItem<string>] as DropdownItem<string>[];

    this.exempelMedverkanIfamiljecentral = [{ value: 'ja', displayName: 'Ja' } as DropdownItem<string>,
    { value: 'nej', displayName: 'Nej' } as DropdownItem<string>] as DropdownItem<string>[];
    this.initExampleData();

    this.cardLocked = true;
    this.includeInactiveUnits = false;
  }

  ngOnInit() {
    this.createOnSubmitForm();
    this.createPrivateOwnerForm();
    this.createEditForm();
    this.createEditPrivateOwnerForm();
    this.onSortChanged({ key: 'enhet', direction: SortDirection.Ascending } as SortChangedArgs);
  }

  createOnSubmitForm() {
    this.newUnitForm = new FormGroup({
      avtalskod: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)] }),
      enhetskod: new FormControl('', { validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)] }),
      namnd: new FormControl('', { validators: [Validators.required] }),
      avtalsperiod_start: new FormControl('', { validators: [Validators.required] }),
      avtalsperiod_slut: new FormControl('', { validators: [Validators.required] }),
      enhetschef: new FormControl('', { validators: [Validators.required] }),
      agare: new FormControl('', { validators: [Validators.required] }),
      leverantorsid: new FormControl('', { validators: [Validators.required] })

    }, { updateOn: 'blur' });

  }

  createEditForm() {
    this.editUnitForm = new FormGroup({
      hsaid: new FormControl('', {}),
      avtalskod: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)] }),
      enhetskod: new FormControl('', { validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)] }),
      namnd: new FormControl('', { validators: [Validators.required] }),
      avtalsperiod_start: new FormControl('', { validators: [Validators.required] }),
      avtalsperiod_slut: new FormControl('', { validators: [Validators.required] }),
      enhetschef: new FormControl('', { validators: [Validators.required] }),
      enhetschef_telefon: new FormControl('', {}),
      enhetschef_epost: new FormControl('', {}),
      agare: new FormControl('', { validators: [Validators.required] }),
      leverantorsid: new FormControl('', { validators: [Validators.required] }),
      agarkod: new FormControl('', {}),
      agarform: new FormControl('', {}),
      kundreferens: new FormControl('', {}),
      regionsovergripandegrupper: new FormControl('', {}),
      medverkanIFamiljecentral: new FormControl('', { validators: [Validators.required] }),
    }, { updateOn: 'blur' });

  }

  createPrivateOwnerForm() {
    this.privateOwnerForm = new FormGroup({
      organisationsnummer: new FormControl('', { validators: [Validators.required] }),
      utbetalningssatt: new FormControl('', { validators: [Validators.required] }),
      kontonummer: new FormControl('', { validators: [Validators.required] })
    }, { updateOn: 'blur' });
  }

  createEditPrivateOwnerForm() {
    this.editprivateOwnerForm = new FormGroup({
      organisationsnummer: new FormControl('', { validators: [Validators.required] }),
      utbetalningssatt: new FormControl('', { validators: [Validators.required] }),
      kontonummer: new FormControl('', { validators: [Validators.required] })
    }, { updateOn: 'blur' });
  }

  onFormSubmitted() {
    this.userFormSubmitted = true;
  }



  onNewUnitAgareChanged(value: string) {

    this.agareChanged(value, this.newUnit);

    if (this.newUnit.details.agare_form === "Privat") {
      this.privateOwnerForm.setValidators([Validators.required])
    }
    else
      this.privateOwnerForm.setValidators(null);

    this.privateOwnerForm.updateValueAndValidity();


  }

  agareChanged(agare: string, unit: ExampleUnit) {
    switch (agare) {
      case 'Närhälsan': {
        unit.details.agare_form = 'Offentlig';
        unit.details.agare_kod = 1000
        break;
      };
      case 'Kalle Karlsson': {
        unit.details.agare_form = 'Privat';
        unit.details.agare_kod = 1001
        break;
      };
      case 'Hemmabolaget': {
        unit.details.agare_form = 'Privat';
        unit.details.agare_kod = 1002
        break;
      };
      case 'Närhälsan Rehab': {
        unit.details.agare_form = 'Offentlig';
        unit.details.agare_kod = 1003
        break;
      };
      case 'Hälsoakuten': {
        unit.details.agare_form = 'Privat';
        unit.details.agare_kod = 1004
        break;
      };
    }

  }
  onUnitAgareChanged(value: string, item: ExpandableRow<ExampleUnit, ExampleUnit>) {

    this.agareChanged(value, item.previewObject);

    console.log(item.previewObject.details.agare_form);
    if (item.previewObject.details.agare_form === "Privat") {
      this.editprivateOwnerForm.setValidators([Validators.required])
    }
    else
      this.editprivateOwnerForm.setValidators(null);

    this.editprivateOwnerForm.updateValueAndValidity();
  }


  validationMessages = {
    avtalskod: {
      'minlength': 'Avtalskoden skall vara fyra siffror',
      'maxlength': 'Avtalskoden skall vara fyra siffror',
    },
    enhetskod: {
      'minlength': 'Enhetskoden skall vara sex siffror',
      'maxlength': 'Enhetskoden skall vara sex siffror',
    },

  };

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

    for (let i = 1; i <= 100; i++) {
      const indexForNames = this.getRandomInt(0, 12);
      const indexForAgare = this.getRandomInt(0, 4);
      const indexForEnhetskod = this.getRandomInt(0, 12);
      const indexForNamnd = this.getRandomInt(0, 4);
      let isActive;
      let year;
      const details = Object.create(this.exampleDetail);
      details.enhet = 'copy';

      if (i < 2) {
        isActive = false;
        year = (new Date().getFullYear() - 1);
      } else {
        isActive = true;
        year = (new Date().getFullYear());
      }

      details.avtalsperiod_start = new Date(year, 0, 1);
      details.avtalsperiod_slut = new Date(year, 11, 0);

      items.push({
        vald: false,
        id: i,
        enhet: exampleNames[indexForNames] + ' ' + i.toString(),
        hsaid: examplehsaid + (200 + i).toString(),
        agare: this.exampleagare[indexForAgare].displayName,
        enhetskod: examplehenhetskod[indexForEnhetskod],
        namnd: this.examplenamnd[indexForNamnd].displayName,
        isActive: isActive,
        details: details
      } as ExampleUnit);
    }
    this.exampleData = items.map(x => new ExpandableRow<ExampleUnit, ExampleUnit>(x));
  }

  onSelectedChangedVersion(selectedItem: string) {
    // if (selectedItem === "3")
    //   this.saveCancelComponent.hideLock = false;
    // else
    //   this.saveCancelComponent.hideLock = true;

  }

  onSelectedChangedUnit(selectedItem: string) {
    this.itemSelected = true;
    this.selectedUnit = this.newUnits.find(u => u.value === selectedItem).displayName;
  }

  onExpandedChanged(expanded: boolean, item: ExpandableRow<ExampleUnit, ExampleUnit>) {

    if (expanded && !item.previewObject.vald) {
      this.unitInFocus = item.previewObject.enhet;
      item.previewObject.vald = true;

      this.updateCardDropdowns(item.previewObject);

      this.editUnitForm.setValue({
        hsaid: item.previewObject.hsaid,
        avtalskod: item.previewObject.details.avtalskod,
        enhetskod: item.previewObject.enhetskod,
        namnd: item.previewObject.namnd,
        avtalsperiod_start: item.previewObject.details.avtalsperiod_start,
        avtalsperiod_slut: item.previewObject.details.avtalsperiod_slut,
        enhetschef: item.previewObject.details.enhetschef,
        leverantorsid: item.previewObject.details.leverantorsid_RD,
        enhetschef_telefon: item.previewObject.details.enhetschef_telefon,
        enhetschef_epost: item.previewObject.details.enhetschef_epost,
        agare: item.previewObject.agare,
        agarkod: item.previewObject.details.agare_kod,
        agarform: item.previewObject.details.agare_form,
        kundreferens: item.previewObject.details.kundreferens,
        regionsovergripandegrupper: item.previewObject.details.regionsovergripandegrupper,
        medverkanIFamiljecentral: ""//item.previewObject.details.medverkanfamiljecentral 
      })

      if (item.previewObject.details.agare_form === 'Privat') {
        this.editprivateOwnerForm.setValue({
          organisationsnummer: item.previewObject.details.organisationsnummer,
          utbetalningssatt: item.previewObject.details.utbetalningsssätt,
          kontonummer: item.previewObject.details.kontonummer
        });
      }

      this.editUnitForm.updateValueAndValidity();

    } else {
      item.previewObject.vald = false;
      this.submitted = false;
    }




  }

  updateCardDropdowns(item: ExampleUnit) {
    this.exampleagare.forEach(a => a.selected = false);
    this.exampleagare.find(a => a.displayName === item.agare).selected = true;

    this.exempelVersions = [];
    item.details.versions.forEach(x => {
      this.exempelVersions.push({ displayName: x.toString(), value: x.toString(), marked: x === 3, selected: x === 3 } as DropdownItem<any>);
    });
    this.changeDetecor.detectChanges();
  }
  onCardCancel(row: ExpandableRow<ExampleUnit, any>) {
    this.cardLocked = true;

    row.notifyOnCollapse('Redigering av ' + row.previewObject.enhet + ' avbröts', NotificationIcon.Exclamation);

  }

  onMedverkaniFamiljecentralChanged(value: string) {
  }

  onCardSave(event: Event, row: ExpandableRow<ExampleUnit, any>) {
    this.submitted = true;

    if (!this.editprivateOwnerForm.valid || !this.editUnitForm.valid) {
      console.log('en valid');
      return;
    }

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
    this.newUnit = null;
  }

  onNewUnitSave() {
    this.submitted = true;

    if (!this.privateOwnerForm.valid || !this.newUnitForm.valid) {
      return;
    }

    this.newUnit.details.avtalskod = this.newUnitForm.controls.avtalskod.value;
    this.newUnit.details.avtalsperiod_slut = this.newUnitForm.controls.avtalsperiod_slut.value;
    this.newUnit.details.avtalsperiod_start = this.newUnitForm.controls.avtalsperiod_start.value;

    this.newUnit.agare = this.newUnitForm.controls.agare.value;

    if (this.newUnit.details.agare_form === 'Privat') {

      this.newUnit.details.organisationsnummer = this.privateOwnerForm.controls.organisationsnummer.value;
      this.newUnit.details.kontonummer = this.privateOwnerForm.controls.kontonummer.value;
      this.newUnit.details.utbetalningsssätt = this.privateOwnerForm.controls.utbetalningssatt.value;
    }
    this.newUnit.details.leverantorsid_RD = this.newUnitForm.controls.leverantorsid.value;
    this.newUnit.namnd = this.newUnitForm.controls.namnd.value;
    this.newUnit.enhetskod = this.newUnitForm.controls.enhetskod.value;
    this.newUnit.enhet = this.selectedUnit;

    this.newUnit.isActive = true;

    let newRow = new ExpandableRow<ExampleUnit, ExampleUnit>(this.newUnit);
    newRow.notifyOnCollapse(newRow.previewObject.enhet + ' sparades', NotificationIcon.OkGreen);
    this.exampleData.push(newRow);

    this.actionPanelClose();
    this.newUnit = null;
  }

  onActionPanelClose() {
    this.actionPanelClose();
  }

  actionPanelClose() {
    this.showActionPanel = false;
    this.addNewUnit = false;
    this.newUnits.forEach(u => u.selected = false);
    this.itemSelected = false;
    this.cardLocked = true;
    this.newUnitForm.reset();
    this.privateOwnerForm.reset();
    this.submitted = false;

  }

  onSortChanged(event: SortChangedArgs) {
    this.exampleData = this.exampleData.sort((row1, row2) => {
      return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :
        row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;
    });
  }



}
