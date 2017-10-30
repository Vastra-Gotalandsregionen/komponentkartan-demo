import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  minDate20160515: Date;
  maxDate20170326: Date;
  tomorrow: Date = new Date();
  lastselectedDate: Date;


  constructor() {
    const today = new Date();
    this.minDate20160515 = new Date(2016, 4, 15);
    this.maxDate20170326 = new Date(2017, 2, 25);
    this.tomorrow.setDate(today.getDate() + 1)
  }

  ngOnInit() { }
}
