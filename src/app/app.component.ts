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
            menuItems: [
              { title: 'Start', url: '/start' } as IMenuItem,
              { title: 'Validering', url: '/validation' } as IMenuItem,
              { title: 'Temahantering', url: '/theming' } as IMenuItem] as IMenuItem[]
          } as IMenuGroup,
          {
            menuItems: [
              { title: 'Sidhantering', url: '/pagestructure' } as IMenuItem,
              { title: 'Formatmall', url: '/formattemplate' } as IMenuItem,
              { title: 'Färgkarta', url: '/colours' } as IMenuItem,
              { title: 'Upplösning', url: '/sizes' } as IMenuItem] as IMenuItem[]

          } as IMenuGroup,
          {
            menuItems: [{
              title: 'Komponenter', menuItems: [
                { title: 'Back to top', url: '/backtotop' } as IMenuItem,
                { title: 'Button', url: '/textbuttons' } as IMenuItem,
                { title: 'Card', url: '/card' } as IMenuItem,
                { title: 'Checkbox', url: '/checkbox' } as IMenuItem,
                { title: 'Datepicker', url: '/datepicker' } as IMenuItem,
                { title: 'Dropdown', url: '/dropdowns' } as IMenuItem,
                { title: 'Dropdown multiselect', url: '/dropdownmultiselect' } as IMenuItem,
                { title: 'Filter textbox', url: '/filtertextbox' } as IMenuItem,
                { title: 'Header/header menu', url: '/headers' } as IMenuItem,
                { title: 'Input', url: '/inputFields' } as IMenuItem,
                { title: 'List', url: '/lists' } as IMenuItem,
                { title: 'Loader', url: '/loader' } as IMenuItem,
                { title: 'Lock button', url: '/lockbutton' } as IMenuItem,
                { title: 'Menu', url: '/menu' } as IMenuItem,
                { title: 'Modal dialog', url: '/modaldialog' } as IMenuItem,
                { title: 'Monthpicker', url: '/monthpicker' } as IMenuItem,
                { title: 'Panel', url: '/panels' } as IMenuItem,
                { title: 'Title-value', url: '/titlevalue' } as IMenuItem,
                { title: 'Save/Cancel', url: '/savecancel' } as IMenuItem,
                { title: 'Radio group', url: '/radioButtons' } as IMenuItem] as IMenuItem[]
            } as IMenuItem,
            {
              title: 'Kodexempel', menuItems: [
                { title: 'Lista (enkel)', url: '/listexample-simple' } as IMenuItem,
                { title: 'Lista (notifieringar)', url: '/listexample-notifications' } as IMenuItem
              ] as IMenuItem[]
            } as IMenuItem] as IMenuItem[]
          } as IMenuGroup
        ] as IMenuGroup[]
      } as IMenu
    ] as IMenu[];

    this.menus = this.singleMenu;
  }

}


