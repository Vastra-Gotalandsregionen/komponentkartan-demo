import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-grid-documentation',
    templateUrl: './grid-documentation.component.html',
    styleUrls: ['./grid-documentation.component.scss'],
    standalone: false
})
export class GridDocumentationComponent implements OnInit {

  people: any[] = [
    { fornamn: 'Arvid', efternamn: 'Johansson', status: 'klar', belopp: 300, expanded: false, checked: false },
    { fornamn: 'Fredrik', efternamn: 'Pettersson', status: 'pågår', belopp: 500, expanded: false, checked: false },
    { fornamn: 'Caroline', efternamn: 'Andersson', status: 'klar', belopp: 6000, expanded: false, checked: false },
    { fornamn: 'Torin', efternamn: 'Hansson', status: 'ej startad', belopp: 400, expanded: false, checked: false },
    { fornamn: 'Olga', efternamn: 'Gran', status: 'klar', belopp: 300, expanded: false, checked: false },
    { fornamn: 'Markus', efternamn: 'Björk', status: 'pågår', belopp: 4000, expanded: false, checked: false },
    { fornamn: 'Jörgen', efternamn: 'Karlsson', status: 'klar', belopp: 50, expanded: false, checked: false },
    { fornamn: 'Sofia', efternamn: 'Carlsson', status: 'ej startad', belopp: 500, expanded: false, checked: false },
  ];
  loading = false;
  activePage = 1;
  pageCount = 1;
  itemsPerPage = 3;
  paginatedPeople: any[] = [];

  exampleCode = `<vgr-grid>
  <vgr-grid-header-toolbar></vgr-grid-header-toolbar>
  <vgr-grid-header>
    <vgr-grid-header-column></vgr-grid-header-column>
  </vgr-grid-header>
  <vgr-grid-row>
    <vgr-grid-column></vgr-grid-column>
    <vgr-notification></vgr-notification>
    <vgr-grid-content></vgr-grid-content>
  </vgr-grid-row>
</vgr-grid>`;

  exampleCodeMarkup;

  constructor(htmlEncoder: HtmlEncodeService) {
    this.exampleCodeMarkup =
      htmlEncoder.prepareHighlightedSection(this.exampleCode, 'HTML');
  }

  ngOnInit() {
    this.setPagingData(this.activePage);
  }

  onPageChanged(page: number) {
    this.setPagingData(page);
  }

  setPagingData(page: number) {
    this.loading = true;

    this.activePage = page;
    this.pageCount = Math.ceil(this.people.length / this.itemsPerPage);
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedPeople = this.people.slice(start, end);
    setTimeout(() => {
      this.loading = false;
    }, 400);
  }
}
