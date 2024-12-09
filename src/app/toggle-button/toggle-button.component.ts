import { Component } from '@angular/core';

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.css'],
    standalone: false
})
export class ToggleButtonComponent {
  active = false;
  state = false;
  states = [
    { 'text': 'Favoriter', 'state': true },
    { 'text': 'Avtal', 'state': false },
    { 'text': 'Valda', 'state': false }
  ];
  constructor() { }

  toggle() {
    this.state = !this.state;
  }

  toggleStates(state: any) {
    this.states.forEach(element => {
      element.state = false;
      if (element.text === state.text) {
        element.state = true;
      }
    });

  }

}
