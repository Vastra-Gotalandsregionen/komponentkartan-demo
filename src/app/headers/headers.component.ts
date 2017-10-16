import { Component, OnInit } from '@angular/core';
import { IHeaderMenu, IHeaderMenuItem } from '../../../node_modules/vgr-komponentkartan/component-package/models/headerMenu.model';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  headerMenu : IHeaderMenu;

  
  constructor() {
    this.headerMenu = {
      menuItems: [
        {
          displayName: 'Min sida',
          url: '/minsida',
          isInternalLink: true
        },
        {
          isSeparator: true
        },
        {
          displayName: 'Krav- och kvalitetsbok',
          menuItems: [
            {
              displayName: 'VGPV',
              url: `http://www.vgregion.se/halsa-och-vard/vardgivarwebben/uppdrag-och-avtal/vardval-vg-primarvard/krav--och-kvalitetsbok-vg-primarvard/`,
              isInternalLink: false
            },
            {
              displayName: 'Rehab',
              url: 'http://www.vgregion.se/halsa-och-vard/vardgivarwebben/uppdrag-och-avtal/vardval-rehab/krav--och-kvalitetsbok/',
              isInternalLink: false
            }
          ] as IHeaderMenuItem[]
        },
        {
          displayName: 'FAQ',
          menuItems: [
            {
              displayName: 'VGPV',
              url: 'http://www.vgregion.se/sv/Vastra-Gotalandsregionen/startsida/Vard-och-halsa/Forvardgivare/VG-Primarvard1/Fragor-och-svar/',
              isInternalLink: false
            },
            {
              displayName: 'Rehab',
              url: 'http://www.vgregion.se/halsa-och-vard/vardgivarwebben/uppdrag-och-avtal/vardval-rehab/fragor-och-svar/',
              isInternalLink: false
            }
          ] as IHeaderMenuItem[]
        },
        {
          displayName: 'Kontakt',
          url: 'http://www.vgregion.se/halsa-och-vard/vardgivarwebben/it/it-system/it-stod-for-vardval-rehab/kontaktpersoner/',
          isInternalLink: false
        }
      ] as IHeaderMenuItem[]
    } as IHeaderMenu;
  
   }

  ngOnInit() {
  }

}
