import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';
import { ModalService } from 'vgr-komponentkartan';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-modaldialog',
    templateUrl: './modaldialog.component.html',
    styleUrls: ['./modaldialog.component.scss'],
    standalone: false
})
export class ModaldialogComponent implements OnInit {
  vardvalForm: FormGroup;
  vardvalForm2: FormGroup;
  vardval1Answer: string;
  vardval2Answer: string;
  validateOnSubmit: boolean;
  textareaVisible = true;

  exampleCodeHtml = `
  <vgr-button (click)="modalService.openDialog('myModalId')">Open Modal</vgr-button>

  <vgr-modal id="myModalId" (outsideClick)="modalService.closeDialog('myModalId')">
  <vgr-modal-header>En header från app</vgr-modal-header>
  <vgr-modal-content>
    <p>Ändringarna går förlorade om du inte sparar dem</p>
    <p>Klickar du utanför så stängs modalen</p>
  </vgr-modal-content>
  <vgr-modal-footer>
    <vgr-button [buttonStyle]="'secondary'" >Spara</vgr-button>
    <vgr-button [buttonStyle]="'secondary'" default="true" (click)="modalService.closeDialog('myModalId')">Avbryt</vgr-button>
  </vgr-modal-footer>
</vgr-modal>`;

  exampleCodeTs = `
  import { Component } from '@angular/core';
  import { ModalService } from 'vgr-komponentkartan';

  constructor(modalService: ModalService) {}
`;

  exampleCodeMarkup: string;
  exampleCodeTypescript: string;
  form: FormGroup;

  constructor(public modalService: ModalService, htmlEncoder: HtmlEncodeService) {
    this.exampleCodeMarkup =
      htmlEncoder.prepareHighlightedSection(this.exampleCodeHtml, 'HTML');
    this.exampleCodeTypescript =
      htmlEncoder.prepareHighlightedSection(this.exampleCodeTs, 'typescript');
  }

  ngOnInit() {
    this.createForms();
  }

  showOneButtonModal() {
    this.modalService.openDialog('modal1');
  }

  showOneButtonModalOverview() {
    this.modalService.openDialog('modal2');
  }

  showTwoButtonModal() {
    this.modalService.openDialog('modal3');
  }

  toggleTextarea() {
    this.textareaVisible = !this.textareaVisible;
    this.modalService.updateDialog('changableModal');
  }


  showThreeButtonModal() {
    this.modalService.openDialog('modal4');
  }

  showSaveDontSaveCancelModal() {
    this.modalService.openDialog('modal4');
  }

  showChooseVardvalWithTextModal() {
    this.modalService.openDialog('vardvalWithTextModal');
  }

  showChooseVardvalWithoutTextModal() {
    this.modalService.openDialog('vardvalWithoutTextModal');
  }

  showCommentAnswerWithTextModal() {
    this.modalService.openDialog('commentAnswerWithTextModal');
  }

  showCommentAnswerWithoutTextModal() {
    this.modalService.openDialog('commentAnswerWithoutTextModal');
  }

  showChangableModal() {
    this.modalService.openDialog('changableModal');
  }

  createForms() {
    this.vardvalForm = new FormGroup({
      vardval: new FormControl(null, { validators: [Validators.required] }),
    }, { updateOn: 'change' });

    this.vardvalForm2 = new FormGroup({
      vardval: new FormControl(null, { validators: [Validators.required] }),
    }, { updateOn: 'change' });

    this.form = new FormGroup({
      textarea: new FormControl('', { validators: [Validators.required] })
    }, { updateOn: 'blur' });
  }

  closeModal(elementId: string): void {
    this.modalService.closeDialog(elementId);
  }

  closeModalSave(elementId: string): void {
    this.validateOnSubmit = true;
    if (this.form.valid) {
      this.modalService.closeDialog(elementId);
      this.validateOnSubmit = false;
    }
  }

  closeModalCancel(elementId: string): void {
    this.form.reset();
    this.modalService.closeDialog(elementId);
  }
}
