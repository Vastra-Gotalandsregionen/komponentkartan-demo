import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthpicker',
  templateUrl: './monthpicker.component.html',
  styleUrls: ['./monthpicker.component.scss']
})
export class MonthpickerComponent implements OnInit {
  lastSelectedDate: Date;
  preselectedDate: Date = new Date(2015, 0, 13);
  maxDate: Date = new Date(2018, 7, 1);
  firstOfMay2015 = new Date(2015, 4, 1);
  lastOfMarch2016 = new Date(2016, 2, 31);
  constructor() { }

  ngOnInit() {
  }

}
