import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardExample = ` <vgr-card>
  <div class="card__top flex-row">
    <!--Ange klassen .card__top för att sätta innehållet i toppen på kortet -->
    <vgr-button class="flex-right" [secondary]="true">Åtgärd</vgr-button>
  </div>
  <!-- Ett kort består av en eller flera kortsektioner -->
  <vgr-card-section class="card__left" [title]="'Rubrik'" [subtitle]="'vänster 1'">
    <!-- En kortsektion med klassen .card__left hamnar till vänster -->
    <span>Innehåll</span>
  </vgr-card-section>
  <vgr-card-section class="card__left" [title]="'Rubrik'" [subtitle]="'vänster 2'">
    <span>Innehåll</span>
  </vgr-card-section>
  <vgr-card-section class="card__right" [expanded]="true" [title]="'Rubrik'" [subtitle]="'Höger 1'" [readonly]="false">
    <!-- En kortsektion med klassen .card__right hamnar till höger -->
    <div>Innehåll</div>
  </vgr-card-section>
</vgr-card>`;
  cardExampleMarkup: string;
  constructor(htmlEncoder: HtmlEncodeService) {
    this.cardExampleMarkup = htmlEncoder.prepareHighlightedSection(this.cardExample);
  }

  ngOnInit() {
  }

}
