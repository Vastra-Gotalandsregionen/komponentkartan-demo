import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  datepicker_selectedDate1: Date;
  datepicker_selectedDate2: Date;
  datepicker_selectedDate3: Date;
  datepicker_selectedDate4: Date;
  datepicker_selectedDateNew: Date;

  constructor() { }

  ngOnInit() {
    this.datepicker_selectedDate4 = new Date();
  }
}
