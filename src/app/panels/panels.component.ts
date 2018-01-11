import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

const htmlMarkup = `
<vgr-panel-container>
  <vgr-panel width="4" color="green">
    <!-- html för panel-innehåll -->
  </vgr-panel>
  <vgr-panel width="8" color="green">
    <!-- html för panel-innehåll -->
  </vgr-panel>
</vgr-panel-container>

<vgr-panel-container>
  <vgr-panel width="4" noborder="true">
    <!-- html för panel-innehåll -->
  </vgr-panel>
  <vgr-panel width="8" color="red">
    <!-- html för panel-innehåll -->
  </vgr-panel>
</vgr-panel-container>`;

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  private htmlMarkup: string;

  constructor(htmlEncoder: HtmlEncodeService) {
    this.htmlMarkup =
      htmlEncoder.prepareHighlightedSection(htmlMarkup);
  }

  ngOnInit() {
  }

}
