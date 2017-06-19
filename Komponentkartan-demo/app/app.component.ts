import { Component } from "@angular/core";
import { ISelectableItem } from "../node_modules/vgr-komponentkartan/component-package/models/selectableItem.model";
import { IDropdownItem } from "../node_modules/vgr-komponentkartan/component-package/models/dropdownItem.model";

@Component({
    selector: "komponentkartan-demo",
    templateUrl: "/app/app.component.html"
})

export class KomponentkartanApplicationComponent {
    buttonDisabled: boolean;
    buttonSecondaryDisabled: boolean;
    selectedRadioOption: ISelectableItem;
    lockMessage: string;
    saveCancelMessage: string;
    dropDownItemsAll: IDropdownItem[];

    constructor() {
        this.buttonDisabled = true;
        this.buttonSecondaryDisabled = true;
        this.selectedRadioOption = { displayName: "Inget" } as ISelectableItem;
        this.lockMessage = "Ingen";
        this.saveCancelMessage = "Ingen";


        this.dropDownItemsAll = this.getDemoItems(7);
    }

    onSelectedRadioOptionChanged(option: ISelectableItem) {
        this.selectedRadioOption = option;
    }

    private getDemoItems(numberOfItems: number): IDropdownItem[] {
        var items: IDropdownItem[] = [];
        for (var i = 1; i <= numberOfItems; i++) {
            items.push({ id: i.toString(), displayName: `Långt namn ${i}`, displayNameWhenSelected: `Alt ${i}` } as IDropdownItem);
        }
        return items;
    }
}


