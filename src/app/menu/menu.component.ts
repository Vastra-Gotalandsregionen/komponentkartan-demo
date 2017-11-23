import { Component, OnInit } from '@angular/core';
import { IMenu, IMenuItem, IMenuGroup } from 'vgr-komponentkartan';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  exampleCodeSimpleMeny = ` this.singleMenu = [
    {
        title: 'En nivå',
        groups: [
            {
                order: '0',
                menuItems: [
                    { title: 'Sida 1', url: '/1' } as IMenuItem,
                    { title: 'Sida 2', url: '/2' } as IMenuItem,
                    { title: 'Sida 3', url: '/3' } as IMenuItem
                ] as IMenuItem[]
            } as IMenuGroup
        ] as IMenuGroup[]
    } as IMenu,
] as IMenu[];`;
  exampleCodeSimpleMenyMarkup: string;
  constructor(htmlEncoder: HtmlEncodeService) {
    this.exampleCodeSimpleMenyMarkup = htmlEncoder.prepareHighlightedSection(this.exampleCodeSimpleMeny, 'typescript');
  }

  ngOnInit() {
  }

}
