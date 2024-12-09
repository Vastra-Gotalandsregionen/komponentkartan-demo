import { Component } from '@angular/core';
import { TabManagementService } from 'vgr-komponentkartan';
import { HtmlEncodeService } from '../../html-encode.service';

@Component({
    selector: 'vgr-tab-start',
    templateUrl: './tab-start.component.html',
    styleUrls: ['./tab-start.component.css'],
    standalone: false
})
export class TabStartComponent {
  active = true;
  active2 = true;

  pages = [
    { 'text': 'Favoriter', 'active': false },
    { 'text': 'Avtal', 'active': true },
    { 'text': 'Valda', 'active': false }
  ];
  activeTab: any = 'inget än';
  activeTab2: any = 'inget än';
  tabPressed: string;
  panelColor: string;

  exampleCode = `<vgr-tab-button [width]="'110px'" [active]="active2" [tabId]="'oversikt'" (selectedChanged)="setActiveTab2($event)">Översikt</vgr-tab-button>
  <vgr-tab-button [width]="'110px'" [active]="!active2" [tabId]="'innehall'" (selectedChanged)="setActiveTab2($event)">Innehåll</vgr-tab-button>`;

  exampleCode2 = `<vgr-tab-button-group>
  <vgr-tab-button (selectedChanged)="setActivePanelText('Till vänster')">Till vänster</vgr-tab-button>
  <vgr-tab-button (selectedChanged)="setActivePanelText('I mitten')">I mitten</vgr-tab-button>
  <vgr-tab-button (selectedChanged)="setActivePanelText('Till höger')">Till höger</vgr-tab-button>
  <vgr-panel-container>

    <vgr-panel noborder="true" style="border: 1px solid grey">
      <p>{{tabPressed}}</p>
    </vgr-panel>
  </vgr-panel-container>
</vgr-tab-button-group>`

  constructor(public htmlEncoder: HtmlEncodeService, private tabManagementService: TabManagementService) {
    this.tabManagementService.tabChangeRequested({ tabId: 'Avtal' }, 'sidor')
  }

  printLog(id) {
    this.activeTab = id;
    this.active = !this.active;
  }

  setActiveTab2(id) {
    this.activeTab2 = id;
    this.active2 = !this.active2;
  }

  setActivePanelText(text: string) {
    this.tabPressed = text;
  }
}
