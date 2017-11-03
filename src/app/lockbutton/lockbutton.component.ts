import { Component, OnInit } from '@angular/core';

import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  selector: 'app-lockbutton',
  templateUrl: './lockbutton.component.html',
  styleUrls: ['./lockbutton.component.scss']
})
export class LockbuttonComponent implements OnInit {
  columnWidth = ColumnWidth;
  lockMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
