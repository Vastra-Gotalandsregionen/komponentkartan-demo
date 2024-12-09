import { Component } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-page-body-documentation',
    templateUrl: './page-body-documentation.component.html',
    standalone: false
})
export class PageBodyDocumentationComponent {
  samplePageBody = `
  <vgr-page-body>
    <!--Detta är en container för sidans olika block -->
    <vgr-page-block>
      <!--Sidans första block-->
    </vgr-page-block>
    <vgr-action-panel>
      <!--Sidans första action panel-->
    </vgr-action-panel>
    <vgr-page-block>
      <!--Sidans andra block-->
    </vgr-page-block>
  </vgr-page-body>`;

  constructor(private htmlEncoder: HtmlEncodeService) {
    this.samplePageBody = htmlEncoder.prepareHighlightedSection(this.samplePageBody);
  }
}
