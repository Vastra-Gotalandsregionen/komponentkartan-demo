import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-title-value',
  templateUrl: './title-value.component.html',
  styleUrls: ['./title-value.component.scss']
})
export class TitleValueComponent implements OnInit {
  markupExample = `<vgr-title-value-layout>
  <vgr-title-value>
    <vgr-title-value-heading>Bruttobelopp</vgr-title-value-heading>
    <vgr-title-value-container>
      <vgr-input [value]="10000" [suffix]="'kr'" [alignRight]="true"></vgr-input>
    </vgr-title-value-container>
  </vgr-title-value>

</vgr-title-value-layout>`;

  constructor(private htmlEncoder: HtmlEncodeService) { }

  ngOnInit() { }
}
