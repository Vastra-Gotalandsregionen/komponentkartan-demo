import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  datepicker_minDate20160515: Date;
  datepicker_maxDate20170326: Date;
  selectedDateTodaysDatePlusOneDay: Date = new Date();
  datepicker_selectedDate: Date;


  constructor() {
    this.datepicker_selectedDate = new Date();
    this.datepicker_minDate20160515 = new Date(2016, 4, 15);
    this.datepicker_maxDate20170326 = new Date(2017, 2, 25);
    this.selectedDateTodaysDatePlusOneDay.setDate(this.selectedDateTodaysDatePlusOneDay.getDate() + 1);
  }

  ngOnInit() { }
}
