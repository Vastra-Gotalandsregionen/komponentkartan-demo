import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  private currentVersion: string;

  constructor() {
    const { dependencies: appVersion } = require('../../../package.json');
    this.currentVersion = appVersion["vgr-komponentkartan"];
    this.currentVersion = this.currentVersion.replace('^', '');
  }

  ngOnInit() {
  }

}
