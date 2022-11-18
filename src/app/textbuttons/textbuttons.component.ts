import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbuttons',
  templateUrl: './textbuttons.component.html',
  styleUrls: ['./textbuttons.component.scss']
})
export class TextbuttonsComponent implements OnInit {
  lastButtonPressed: string;
  buttonDisabled = true;
  buttonSecondaryDisabled = true;
  buttonDiscreetDisabled = true;
  loadingState = true;
  constructor() {
    this.lastButtonPressed = '';
  }

  ngOnInit() {
  }

  toggleLoadingState() {
    this.loadingState = !this.loadingState;
  }

  testarLogg() {
    console.log('KLICKAD PÅ!')
  }

}
