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
  private singleMenu: IMenu[];
  constructor() {

    this.singleMenu = [
      {
        title: 'Innehåll',
        groups: [
          {
            order: '0',
            menuItems: [
              { title: 'Start', url: '/start' } as IMenuItem,
              { title: 'Formatmall', url: '/formattemplate' } as IMenuItem,
              { title: 'Färgkarta', url: '/colours' } as IMenuItem,
              { title: 'Temahantering', url: '/theming', child: true } as IMenuItem,
              {
                title: 'Komponenter', menuItems: [
                  { title: 'Back to top', url: '/backtotop', child: true } as IMenuItem,
                  { title: 'Checkbox', url: '/checkbox', child: true } as IMenuItem,
                  { title: 'Datepicker', url: '/datepicker', child: true } as IMenuItem,
                  { title: 'Dropdown', url: '/dropdowns', child: true } as IMenuItem,
                  { title: 'Dropdown multiselect', url: '/dropdownmultiselect', child: true } as IMenuItem,
                  { title: 'Header', url: '/headers', child: true } as IMenuItem,
                  { title: 'Inputfält', url: '/inputFields', child: true } as IMenuItem,
                  { title: 'Knappar', url: '/textbuttons', child: true } as IMenuItem,
                  { title: 'Lista', url: '/lists', child: true } as IMenuItem,
                  { title: 'Loader', url: '/loader' } as IMenuItem,
                  { title: 'Lock button', url: '/lockbutton', child: true } as IMenuItem,
                  { title: 'Modal', url: '/modaldialog', child: true } as IMenuItem,
                  { title: 'Monthpicker', url: '/monthpicker', child: true } as IMenuItem,
                  { title: 'Panel', url: '/panels', child: true } as IMenuItem,
                  { title: 'Spara/Abryt', url: '/savecancel', child: true } as IMenuItem,
                  { title: 'Radioknappar', url: '/radioButtons', child: true } as IMenuItem
                ] as IMenuItem[]
              } as IMenuItem,
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

}


