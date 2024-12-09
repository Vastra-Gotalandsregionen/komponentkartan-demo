import { Component } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-page-structure',
    templateUrl: './page-structure.component.html',
    styleUrls: ['./page-structure.component.scss'],
    standalone: false
})
export class PageStructureComponent {

  samplePageStructure: string;
  samplePage = `
  <vgr-page>
    <vgr-page-header>
      <!-- Lägg innehåll i header här -->
    </vgr-page-header>
    <vgr-page-body>
      <!--Detta är en container för sidans olika block -->
      <vgr-page-block>
        <!--Sidan kan innehålla en eller flera block-->
      </vgr-page-block>
      <vgr-action-panel>
        <!--Sidan kan innehålla en eller flera action paneler-->
      </vgr-action-panel>
      <vgr-grid>
        <!--Sidan kan innehålla en eller flera griddar-->
      </vgr-grid>
    </vgr-page-body>
  </vgr-page>`;
  constructor(private htmlEncoder: HtmlEncodeService) {
    this.samplePageStructure = htmlEncoder.prepareHighlightedSection(this.samplePage);
  }
}
