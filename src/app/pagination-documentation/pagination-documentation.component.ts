import { Component } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-pagination-documentation',
  templateUrl: './pagination-documentation.component.html',
  styleUrls: ['./pagination-documentation.component.scss']
})
export class PaginationDocumentationComponent {

  pageCount = 10;
  activePage = 1;
  samplePagination = `
  <div *ngIf="pages > 1">
    <vgr-pagination [pages]="pages" (pageChanged)="onPageChanged($event)"></vgr-pagination>
  </div>`;

  constructor(htmlEncoder: HtmlEncodeService) {
    this.samplePagination = htmlEncoder.prepareHighlightedSection(this.samplePagination, 'HTML');
  }

  onPageChanged(page: number) {
    this.activePage = page;
  }

}
