import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setTheme(theme: string) {
    document.getElementById('theme-root').classList.remove('theme--default');
    document.getElementById('theme-root').classList.remove('theme--blue');
    document.getElementById('theme-root').classList.remove('theme--red');
    document.getElementById('theme-root').classList.remove('theme--green');
    document.getElementById('theme-root').classList.add('theme--' + theme);
  }

}
