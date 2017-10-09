import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthpicker',
  templateUrl: './monthpicker.component.html',
  styleUrls: ['./monthpicker.component.scss']
})
export class MonthpickerComponent implements OnInit {
  selectedDate: Date;
  preselectedDate: Date = new Date(2015, 0, 13);
  maxDate: Date = new Date(2018, 7, 1);
  constructor() { }

  ngOnInit() {
  }

}
