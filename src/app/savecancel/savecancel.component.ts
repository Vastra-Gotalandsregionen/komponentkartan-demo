import { Component } from '@angular/core';

@Component({
    selector: 'app-savecancel',
    templateUrl: './savecancel.component.html',
    styleUrls: ['./savecancel.component.scss'],
    standalone: false
})
export class SavecancelComponent {

  saveCancelMessage: string;

  constructor() { }

}
