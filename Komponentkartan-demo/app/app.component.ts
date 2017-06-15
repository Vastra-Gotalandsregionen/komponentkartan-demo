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
    dropDownItems25: IDropdownItem[];
    dropDownItems9: IDropdownItem[];
    dropDownItems8: IDropdownItem[];
    dropDownItems25All: IDropdownItem[];

    constructor() {
        this.buttonDisabled = true;
        this.buttonSecondaryDisabled = true;
        this.selectedRadioOption = { displayName: "Inget" } as ISelectableItem;
        this.lockMessage = "Ingen";
        this.saveCancelMessage = "Ingen";

        this.dropDownItems25 = this.getDemoItems(25);
        this.dropDownItems25All = this.getDemoItems(25);
        this.dropDownItems8 = this.getDemoItems(8);
        this.dropDownItems9 = this.getDemoItems(9);
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


