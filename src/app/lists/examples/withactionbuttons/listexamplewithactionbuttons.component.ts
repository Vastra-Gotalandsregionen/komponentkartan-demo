import { Component } from '@angular/core';
import { HtmlEncodeService } from '../../../html-encode.service';
import { Examples } from '../examples';
import { ModalService, ModalButtonConfiguration, NotificationIcon, ExpandableRow } from 'vgr-komponentkartan';

@Component({
  selector: 'app-listexamplewithactionbuttons',
  templateUrl: './listexamplewithactionbuttons.component.html',
  styleUrls: ['./listexamplewithactionbuttons.component.scss']
})
export class ListExampleWithActionButtonsComponent {

  public peopleRowsSimpleList: ExpandableRow<ExamplePerson, any>[];
  typeScriptSimpleListMarkup: string;
  htmlSimpleListMarkup: string;
  examples: Examples = new Examples();


  peopleRowSimpleList() {
    this.peopleRowsSimpleList = [
      new ExpandableRow<ExamplePerson, any>({ id: '1', firstName: 'Git', lastName: 'Hubsson' }),
      new ExpandableRow<ExamplePerson, any>({ id: '2', firstName: 'Adam', lastName: 'Lind' }),
      new ExpandableRow<ExamplePerson, any>({ id: '3', firstName: 'Bjarne', lastName: 'Chi' }),
      new ExpandableRow<ExamplePerson, any>({ id: '4', firstName: 'Carola', lastName: 'Bengtsson' }),
      new ExpandableRow<ExamplePerson, any>({ id: '5', firstName: 'Erik', lastName: 'Karlsson' }),
    ];
  }

  onSelectRowChanged(row: any, checked: boolean) {
    row.previewObject.selected = checked;
  }

  onDeleteRow(row: any) {
    this.removeRow(row);
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
    return this.peopleRowsSimpleList && this.peopleRowsSimpleList.filter(r => r.previewObject.selected).length;
  }


  constructor(htmlEncoder: HtmlEncodeService, private modalService: ModalService) {
    this.peopleRowSimpleList();
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
  selected?: boolean;
}

