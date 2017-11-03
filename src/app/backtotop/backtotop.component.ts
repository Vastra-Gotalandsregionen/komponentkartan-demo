import { Component, OnInit } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.scss']
})
export class BacktotopComponent implements OnInit {
  columnWidth = ColumnWidth;
  constructor() { }

  ngOnInit() {
  }

}
