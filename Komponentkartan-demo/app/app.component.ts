import { Component, ViewChild } from "@angular/core";
import { IMenu, IMenuGroup, IMenuItem } from "../node_modules/vgr-komponentkartan/component-package/models/menu.model";


@Component({
    selector: "komponentkartan-demo",
    templateUrl: "/app/app.component.html"
})

export class KomponentkartanApplicationComponent {
    menus: IMenu[];


    constructor() {
        this.menus = [{
            title: "Innehåll",
            groups: [
                {
                    order: "0",
                    menuItems: [
                        { title: "Meny 1", url: "/meny1" } as IMenuItem,
                        { title: "Meny 2", url: "/meny2" } as IMenuItem,
                        { title: "Meny 3", url: "/meny3" } as IMenuItem,
                    ] as IMenuItem[]
                } as IMenuGroup
            ] as IMenuGroup[]
        } as IMenu,
        ] as IMenu[];
    }
}


