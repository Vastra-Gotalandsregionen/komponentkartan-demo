import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbuttons',
  templateUrl: './textbuttons.component.html',
  styleUrls: ['./textbuttons.component.scss']
})
export class TextbuttonsComponent implements OnInit {
  lastButtonPressed: string;
  buttonDisabled: boolean = true;
  buttonSecondaryDisabled: boolean = true;
  constructor() {
    this.lastButtonPressed = '';
  }

  ngOnInit() {
  }

}
