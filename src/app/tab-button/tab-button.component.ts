import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css']
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

  constructor(private router: Router, public htmlEncoder: HtmlEncodeService) {
    this.exampleCodeMarkup =
      htmlEncoder.prepareHighlightedSection(this.exampleTest, 'HTML');
  }

  ngOnInit() {
    this.router.navigate( ['/tab-start'],  { skipLocationChange: true });
    // console.log('hello from app')
  }

  navigate(id) {

    const page = this.pages.filter(tab => tab.text === id)[0];
    this.pages.forEach(element => {
      element.active = false;
      if (element.text === page.text) {
        element.active = true;
      }
    });

    switch(id) {
      case 'Favoriter':
        this.router.navigate( ['/favoriter'],  { skipLocationChange: true });
        break;
      case 'Valda':
        this.router.navigate( ['/valda'],  { skipLocationChange: true });
        break;
        case 'Avtal':
          this.router.navigate( ['/tab-start'],  { skipLocationChange: true });
          break;
      default:
        this.router.navigate(['/tab-button']);
        break;
    }
  }
}
