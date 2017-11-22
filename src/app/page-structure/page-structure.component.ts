import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.scss']
})
export class PageStructureComponent implements OnInit {

  samplePageStructure: string;
  samplePage = `
  <vgr-page>
    <vgr-page-header>
      <!-- Lägg innehåll i header här -->
    </vgr-page-header>
    <vgr-action-panel [expanded]="actionPanelVisible">
      <!--
          Om sidan skall ha en action-panel, som kan öppnas från header, definiera dess innehåll här.
          Öppna genom att sätta expanded = true
      -->
    </vgr-action-panel>
    <vgr-page-body>
      <!--Detta är en container för sidans olika block -->
      <vgr-page-block>
        <!--Sidans första block-->
      </vgr-page-block>
      <vgr-page-block>
        <!--Sidans andra block-->
      </vgr-page-block>
      <vgr-page-block>
        <!--Sidans n:te block -->
      </vgr-page-block>
    </vgr-page-body>
  </vgr-page>`;
  constructor() {
    this.samplePageStructure = '<pre><code class="highlight html">' + this.htmlEscape(this.samplePage) + '</code></pre>';
  }

  ngOnInit() {
  }


  private htmlEscape(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

}
