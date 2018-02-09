import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  varning = `<div class="icon-varning"></div>`;
  varningCode: string;
  plus = `<div class="vgr-icon-plus"></div>`;
  plusCode: string;
  minus = `<div class="vgr-icon-minus"></div>`;
  minusCode: string;
  edit = `<div class="vgr-icon-edit"></div>`;
  editCode: string;
  message = `<div class="vgr-icon-message"></div>`;
  messageCode: string;
  trashcan = `<div class="vgr-icon-trashcan"></div>`;
  trashcanCode: string;
  green = `<div class="vgr-icon-ok-check-green"></div>`;
  greenCode: string;
  exclamation = `<div class="vgr-icon-exclamation"></div>`;
  exclamationCode: string;
  exclamationRed = `<div class="vgr-icon-exclamation--red"></div>`;
  exclamationRedCode: string;
  question = `<div class="vgr-icon-question"></div>`;
  questionCode: string;

  constructor(htmlEncoder: HtmlEncodeService) {
    this.varningCode = htmlEncoder.prepareHighlightedSection(this.varning, 'html');
    this.plusCode = htmlEncoder.prepareHighlightedSection(this.plus, 'html');
    this.minusCode = htmlEncoder.prepareHighlightedSection(this.minus, 'html');
    this.editCode = htmlEncoder.prepareHighlightedSection(this.edit, 'html');
    this.messageCode = htmlEncoder.prepareHighlightedSection(this.message, 'html');
    this.trashcanCode = htmlEncoder.prepareHighlightedSection(this.trashcan, 'html');
    this.greenCode = htmlEncoder.prepareHighlightedSection(this.green, 'html');
    this.exclamationCode = htmlEncoder.prepareHighlightedSection(this.exclamation, 'html');
    this.exclamationRedCode = htmlEncoder.prepareHighlightedSection(this.exclamationRed, 'html');
    this.questionCode = htmlEncoder.prepareHighlightedSection(this.question, 'html');
  }

  ngOnInit() {
  }

}
