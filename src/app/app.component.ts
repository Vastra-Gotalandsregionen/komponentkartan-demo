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
              { title: 'Validering', url: '/validation', child: true } as IMenuItem,
              { title: 'Temahantering', url: '/theming', child: true } as IMenuItem,
              {
                title: 'Komponenter', menuItems: [
                  { title: 'Back to top', url: '/backtotop', child: true } as IMenuItem,
                  { title: 'Button', url: '/textbuttons', child: true } as IMenuItem,
                  { title: 'Checkbox', url: '/checkbox', child: true } as IMenuItem,
                  { title: 'Datepicker', url: '/datepicker', child: true } as IMenuItem,
                  { title: 'Dropdown', url: '/dropdowns', child: true } as IMenuItem,
                  { title: 'Dropdown multiselect', url: '/dropdownmultiselect', child: true } as IMenuItem,
                  { title: 'Header', url: '/headers', child: true } as IMenuItem,
                  { title: 'Input', url: '/inputFields', child: true } as IMenuItem,
                  { title: 'List', url: '/lists', child: true } as IMenuItem,
                  { title: 'Loader', url: '/loader' } as IMenuItem,
                  { title: 'Lock button', url: '/lockbutton', child: true } as IMenuItem,
                  { title: 'Modal dialog', url: '/modaldialog', child: true } as IMenuItem,
                  { title: 'Monthpicker', url: '/monthpicker', child: true } as IMenuItem,
                  { title: 'Panel', url: '/panels', child: true } as IMenuItem,
                  { title: 'Title-value', url: '/titlevalue', child: true } as IMenuItem,
                  { title: 'Save/Cancel', url: '/savecancel', child: true } as IMenuItem,
                  { title: 'Radio group', url: '/radioButtons', child: true } as IMenuItem
                ] as IMenuItem[]
              } as IMenuItem,
            ] as IMenuItem[]
          } as IMenuGroup
        ] as IMenuGroup[]
      } as IMenu,


    ] as IMenu[];

    this.menus = this.singleMenu;
  }

}


