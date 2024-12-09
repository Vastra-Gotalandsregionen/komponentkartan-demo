import { Component } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-expandable-div',
    templateUrl: './expandable-div.component.html',
    styleUrls: ['./expandable-div.component.scss'],
    standalone: false
})
export class ExpandableDivComponent {

  exampleCode = `<div style="margin: 10px 0;">
      <vgr-expandable-div [expanded]="false" (expandedChanged)="onExpandedChanged($event)">
      <vgr-expandable-div-header>
        <p><strong>Expandable div med ett underliggande expandable div</strong></p>
        </vgr-expandable-div-header>
        <vgr-expandable-div-content>
          <div style="margin-left: 10px;">
            <vgr-expandable-div [expanded]="false" (expandedChanged)="onExpandedChanged($event)">
              <vgr-expandable-div-header>
                <p><strong>Expandable div nivå 2</strong></p>
                </vgr-expandable-div-header>
                <vgr-expandable-div-content>
                  <p style="margin-left: 10px;">Kan innehålla både text, tabeller eller interaktiva element</p>
                </vgr-expandable-div-content>
              </vgr-expandable-div>
          </div>
        </vgr-expandable-div-content>
      </vgr-expandable-div>

      <vgr-expandable-div [expanded]="false" (expandedChanged)="onExpandedChanged1($event)">
        <vgr-expandable-div-header>
          <p>En annan expandable div</p>
        </vgr-expandable-div-header>
        <vgr-expandable-div-content>
          <p style="margin-left: 10px;">Lite innehåll</p>
        </vgr-expandable-div-content>
      </vgr-expandable-div>

      <vgr-expandable-div [expanded]="false" (expandedChanged)="onExpandedChanged2($event)">
        <vgr-expandable-div-header>
          <p>Ytterligare en expandable div</p>
        </vgr-expandable-div-header>
        <vgr-expandable-div-content>
          <p style="margin-left: 10px;">Mer innehåll</p>
        </vgr-expandable-div-content>
      </vgr-expandable-div>
    </div>`;

  exampleCodeMarkup;

  constructor(htmlEncoder: HtmlEncodeService) {
    this.exampleCodeMarkup =
      htmlEncoder.prepareHighlightedSection(this.exampleCode, 'HTML');
  }
  onExpandedChanged(flag: Boolean) { }
  onExpandedChanged1(flag: Boolean) { }
  onExpandedChanged2(flag: Boolean) { }
}
