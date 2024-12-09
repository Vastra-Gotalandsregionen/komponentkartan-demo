import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ModalService, TabManagementService } from 'vgr-komponentkartan';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-tab-button',
    templateUrl: './tab-button.component.html',
    styleUrls: ['./tab-button.component.css'],
    standalone: false
})
export class TabButtonComponent implements OnInit {
  pages = [
    { 'text': 'Favoriter' },
    { 'text': 'Avtal' , 'active': true},
    { 'text': 'Valda' }
  ];
  centrera = false;

  exampleCodeMarkup;
  exampleTest = `
  <vgr-action-panel [showCloseButton]="true" (openChanged)="open=$event" [open]="open"
    [title]="'Ett exempel på en action panel'">
    <vgr-button>En knapp</vgr-button>
    <p>Lite text...</p>
  </vgr-action-panel>`;

  constructor(private router: Router, public htmlEncoder: HtmlEncodeService, public modalService: ModalService, private tabManagementService: TabManagementService) {
    this.exampleCodeMarkup =
      htmlEncoder.prepareHighlightedSection(this.exampleTest, 'HTML');
  }

  ngOnInit() {
    this.router.navigate( ['tab-button/tab-start'],  { skipLocationChange: true });
  }

  navigate(id) {

    const page = this.pages.filter(tab => tab.text === id)[0];
    this.pages.forEach(element => {
      element.active = false;
      if (element.text === page.text) {
        element.active = true;
      }
    });
    this.tabManagementService.navigationCancelled(false);
    switch (id) {
      case 'Favoriter':
        this.router.navigate( ['tab-button/favoriter'],  { skipLocationChange: true });
        break;
      case 'Valda':
        this.modalService.openDialog('modal1');
        break;
        case 'Avtal':
          this.router.navigate( ['tab-button/tab-start'],  { skipLocationChange: true });
          break;
      default:
        this.router.navigate(['/tab-button']);
        break;
    }
  }

  lamnaTab() {
    this.tabManagementService.navigationCancelled(false);
    this.router.navigate( ['tab-button/valda'],  { skipLocationChange: true });
    this.closeModal();
  }

  stannaPaTab() {
    this.tabManagementService.navigationCancelled(true);
    this.closeModal();
  }

  closeModal() {
    this.modalService.closeDialog('modal1');
  }
}
