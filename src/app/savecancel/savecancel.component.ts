import { Component, OnInit } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  selector: 'app-savecancel',
  templateUrl: './savecancel.component.html',
  styleUrls: ['./savecancel.component.scss']
})
export class SavecancelComponent implements OnInit {
  columnWidth = ColumnWidth;
  constructor() { }

  ngOnInit() {
  }

}
