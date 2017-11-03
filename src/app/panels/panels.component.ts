import { Component, OnInit } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  columnWidth = ColumnWidth;
  constructor() { }

  ngOnInit() {
  }

}
