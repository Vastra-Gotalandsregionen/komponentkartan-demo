import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbuttons',
  templateUrl: './textbuttons.component.html',
  styleUrls: ['./textbuttons.component.scss']
})
export class TextbuttonsComponent implements OnInit {
  lastButtonPressed: string;
  constructor() {
    this.lastButtonPressed = '';
  }

  ngOnInit() {
  }

}
