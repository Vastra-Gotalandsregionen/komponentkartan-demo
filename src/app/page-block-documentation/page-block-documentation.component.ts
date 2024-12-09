import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-page-block-documentation',
    templateUrl: './page-block-documentation.component.html',
    standalone: false
})
export class PageBlockDocumentationComponent {
  samplePageBlock = `
  <vgr-page-block [transparent]="true">
    <!--Ett transparent page-block -->
  </vgr-page-block>`;

  constructor(private htmlEncoder: HtmlEncodeService) {
    this.samplePageBlock = htmlEncoder.prepareHighlightedSection(this.samplePageBlock);
  }
}
