import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  datepicker_Min: Date = new Date(2016, 0, 15)
  datepicker_Max: Date = new Date(2018, 11, 27);
  datepicker_selectedDate: Date = new Date(2017, 9, 17);
  datepicker_selectedDateNew: Date;

  constructor() { }

  ngOnInit() {
  }

}
