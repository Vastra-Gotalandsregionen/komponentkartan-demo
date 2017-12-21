import { Component, OnInit } from '@angular/core';
import { ISelectableItem } from 'vgr-komponentkartan/lib/index';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent implements OnInit {

  themes: ISelectableItem[];
  constructor() {
    this.themes = [
      { displayName: 'Neutralt', id: 'theme--neutral' } as ISelectableItem,
      { displayName: 'Blått', id: 'theme--blue' } as ISelectableItem,
      { displayName: 'Rött', id: 'theme--red' } as ISelectableItem,
      { displayName: 'Grönt', id: 'theme--green' } as ISelectableItem
    ] as ISelectableItem[];
  }

  ngOnInit() {
    this.themes.forEach(x => x.selected = this.isThemeActive(x.id));
  }

  themeChanged(theme: ISelectableItem) {
    document.getElementById('theme-root').classList.remove('theme--neutral');
    document.getElementById('theme-root').classList.remove('theme--blue');
    document.getElementById('theme-root').classList.remove('theme--red');
    document.getElementById('theme-root').classList.remove('theme--green');
    document.getElementById('theme-root').classList.add(theme.id);
  }

  isThemeActive(themeName: string): boolean {
    return document.getElementById('theme-root').classList.contains(themeName);
  }

}
