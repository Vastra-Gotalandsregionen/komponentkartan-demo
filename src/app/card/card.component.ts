import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardExampleMarkup: string;
  cardExampleMarkup2: string;

  birthDate: Date;
  cardExample = ` <vgr-card [mode]="2">
  <div class="card__top flex-row">
    <vgr-save-cancel class="flex-right" [secondary]="true" (unlock)="unlocked = true" (save)="unlocked = false"
        (cancel)="unlocked = false"></vgr-save-cancel>
  </div>
  <vgr-card-section class="card__left" [expanded]="true" [title]="'Rubrik'" [subtitle]="'Exempel med kontroller'" [readonly]="!unlocked">
    <div class="title-value-layout">
      <vgr-title-value [title]="'Förnamn'" [slim]="!unlocked">
        <vgr-input [value]="'Per-Åke'" [readonly]="!unlocked"></vgr-input>
      </vgr-title-value>
      <vgr-title-value [title]="'Efternamn'" [slim]="!unlocked">
        <vgr-input [value]="'Berg'" [readonly]="!unlocked"></vgr-input>
      </vgr-title-value>
      <vgr-title-value [title]="'Boende'" [slim]="!unlocked">
        <vgr-dropdown [values]="['Hus','Lägenhet','Kartong']" [selectedValue]="'Hus'" [readonly]="!unlocked"></vgr-dropdown>
      </vgr-title-value>
      <vgr-title-value [title]="'Födelsedatum'" [slim]="!unlocked">
        <vgr-datepicker [selectedDate]="birthDate" [readonly]="!unlocked"></vgr-datepicker>
      </vgr-title-value>
      <vgr-title-value [title]="'Serienummer'" [slim]="!unlocked">
        <span>7a787b27-c2cc-441f-a732</span>
      </vgr-title-value>
    </div>
  </vgr-card-section>
  <vgr-card-section class="card__left" [expanded]="true" [title]="'Rubrik'" [subtitle]="'vänster 2'">
    <span>Innehåll</span>
  </vgr-card-section>
  <vgr-card-section class="card__right" [expanded]="false" [title]="'Rubrik'" [subtitle]="'Höger 1'">
    <span>Innehåll</span>
  </vgr-card-section>
</vgr-card>`;

  cardExample2 = ` <vgr-card [mode]="1">
<div class="card__top flex-row">
  <vgr-save-cancel class="flex-right" [secondary]="true" (unlock)="unlocked = true" (save)="unlocked = false"
      (cancel)="unlocked = false"></vgr-save-cancel>
</div>
<vgr-card-section [expanded]="true" [title]="'Rubrik'" [subtitle]="'Exempel med kontroller'" [readonly]="!unlocked">
  <div class="title-value-layout">
    <vgr-title-value [title]="'Förnamn'" [slim]="!unlocked">
      <vgr-input [value]="'Per-Åke'" [readonly]="!unlocked"></vgr-input>
    </vgr-title-value>
    <vgr-title-value [title]="'Efternamn'" [slim]="!unlocked">
      <vgr-input [value]="'Berg'" [readonly]="!unlocked"></vgr-input>
    </vgr-title-value>
    <vgr-title-value [title]="'Boende'" [slim]="!unlocked">
      <vgr-dropdown [values]="['Hus','Lägenhet','Kartong']" [selectedValue]="'Hus'" [readonly]="!unlocked"></vgr-dropdown>
    </vgr-title-value>
    <vgr-title-value [title]="'Födelsedatum'" [slim]="!unlocked">
      <vgr-datepicker [selectedDate]="birthDate" [readonly]="!unlocked"></vgr-datepicker>
    </vgr-title-value>
    <vgr-title-value [title]="'Serienummer'" [slim]="!unlocked">
      <span>7a787b27-c2cc-441f-a732</span>
    </vgr-title-value>
  </div>
</vgr-card-section>
<vgr-card-section  [expanded]="true" [title]="'Rubrik'" [subtitle]="'vänster 2'">
  <span>Innehåll</span>
</vgr-card-section>
<vgr-card-section  [expanded]="false" [title]="'Rubrik'" [subtitle]="'Höger 1'">
  <span>Innehåll</span>
</vgr-card-section>
</vgr-card>`;


  constructor(htmlEncoder: HtmlEncodeService) {
    this.cardExampleMarkup = htmlEncoder.prepareHighlightedSection(this.cardExample);
    this.cardExampleMarkup2 = htmlEncoder.prepareHighlightedSection(this.cardExample2);
    this.birthDate = new Date(1976, 5, 17);
  }



  ngOnInit() {
  }

}
