import { Component, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ISelectableItem } from 'vgr-komponentkartan/component-package/models/selectableItem.model';
import { SidebarMenuComponent } from 'vgr-komponentkartan/component-package/controls/sidebar-menu/sidebarMenu.component';
import { IMenu, IMenuGroup, IMenuItem } from 'vgr-komponentkartan/component-package/models/menu.model';
import { ModalService } from 'vgr-komponentkartan/component-package/services/modalService';
import { IHeaderMenu, IHeaderMenuItem } from 'vgr-komponentkartan/component-package/models/headerMenu.model';
@Component({
  selector: 'app-komponentkartan',
  templateUrl: 'app.component.html'
})

export class KomponentkartanApplicationComponent {
  menus: IMenu[];
  headerMenu: IHeaderMenu;
  @ViewChild(SidebarMenuComponent) sidebarMenu: SidebarMenuComponent;
  private largeMenu: IMenu[];
  private singleMenu: IMenu[];
  constructor() {
    this.singleMenu = [
      {
        title: 'Innehåll',
        groups: [
          {
            order: '0',
            menuItems: [
              /*              { title: 'Formatmall', url: '/formatmall' } as IMenuItem,
                           { title: 'Färgkarta', url: '/fargkarta' } as IMenuItem,
                           { title: 'Listor', url: '/lists' } as IMenuItem,
                           { title: 'Kalender', url: '/calendars' } as IMenuItem,
                           { title: 'Komponenter', url: '/komponentkartan' } as IMenuItem,
                           */

              { title: 'Inputfält', url: '/inputFields' } as IMenuItem
            ] as IMenuItem[]
          } as IMenuGroup
        ] as IMenuGroup[]
      } as IMenu,


    ] as IMenu[];

    this.menus = this.singleMenu;

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

  // onSelectedMenuChanged(newMenu: string) {
  //   console.log(newMenu);
  // }

  // setSelectedMenu(menuSize: number) {
  //   if (menuSize > 1) {
  //     this.menus = this.largeMenu;
  //   } else { this.menus = this.singleMenu; }

  //   this.sidebarMenu.ngAfterViewInit();

  // }

}


