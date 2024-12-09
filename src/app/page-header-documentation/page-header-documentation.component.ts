import { Component } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-page-header-documentation',
    templateUrl: './page-header-documentation.component.html',
    standalone: false
})
export class PageHeaderDocumentationComponent {
  samplePageHeader = `
  <vgr-page-header [title]="'Enheter'">
    <!--En header med titeln Enheter och en knapp -->
    <vgr-button>En knapp</vgr-button>
  </vgr-page-header>`;

  constructor(private htmlEncoder: HtmlEncodeService) {
    this.samplePageHeader = htmlEncoder.prepareHighlightedSection(this.samplePageHeader);
  }
}
