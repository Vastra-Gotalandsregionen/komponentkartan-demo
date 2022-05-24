import { Component } from '@angular/core';
import { ModalService, PaginationManagementService } from 'vgr-komponentkartan';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-pagination-documentation',
  templateUrl: './pagination-documentation.component.html',
  styleUrls: ['./pagination-documentation.component.scss']
})
export class PaginationDocumentationComponent {

  samplePagination = `
  <div *ngIf="pages > 1">
    <vgr-pagination [pages]="pages" (pageChanged)="onPageChanged($event)"></vgr-pagination>
  </div>`;

  constructor(htmlEncoder: HtmlEncodeService, private paginationManagementService: PaginationManagementService, public modalService: ModalService) {
    this.samplePagination = htmlEncoder.prepareHighlightedSection(this.samplePagination, 'HTML');
  }

  onPageChanged(e) {
    console.log(e)
    if (e === 3 || e === 10) {
      this.modalService.openDialog('modal1');
    } else {
      this.paginationManagementService.navigationCancelled(false);
    }

  }

  lamnaTab() {
    this.paginationManagementService.navigationCancelled(false);

    this.closeModal();
  }

  stannaPaTab() {
    this.paginationManagementService.navigationCancelled(true);
    this.closeModal();
  }

  closeModal() {
    this.modalService.closeDialog('modal1');
  }

}
