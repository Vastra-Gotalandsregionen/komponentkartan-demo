import { Component, OnInit } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  selector: 'app-textbuttons',
  templateUrl: './textbuttons.component.html',
  styleUrls: ['./textbuttons.component.scss']
})
export class TextbuttonsComponent implements OnInit {
  columnWidth = ColumnWidth;
  lastButtonPressed: string;
  buttonDisabled: boolean = true;
  buttonSecondaryDisabled: boolean = true;
  constructor() {
    this.lastButtonPressed = '';
  }

  ngOnInit() {
  }

}
