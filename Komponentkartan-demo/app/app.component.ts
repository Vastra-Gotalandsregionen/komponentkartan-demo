import { Component } from "@angular/core";
import { ISelectableItem } from "../node_modules/vgr-komponentkartan/component-package/models/selectableItem.model";

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

    constructor() {
        this.buttonDisabled = true;
        this.buttonSecondaryDisabled = true;
        this.selectedRadioOption = { displayName: "Inget" } as ISelectableItem;
        this.lockMessage = "Ingen";
        this.saveCancelMessage = "Ingen";
    }
    
    onSelectedRadioOptionChanged(option: ISelectableItem) {
        this.selectedRadioOption = option;
    }
}


