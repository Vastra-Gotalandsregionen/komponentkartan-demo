"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MyComponent = (function () {
    function MyComponent() {
        this.buttonDisabled = true;
        this.buttonSecondaryDisabled = true;
        this.selectedRadioOption = { displayName: "Inget" };
        this.lockMessage = "Ingen";
        this.saveCancelMessage = "Ingen";
        this.dropDownItemsAll = this.getDemoItems(7);
    }
    MyComponent.prototype.onSelectedRadioOptionChanged = function (option) {
        this.selectedRadioOption = option;
    };
    MyComponent.prototype.getDemoItems = function (numberOfItems) {
        var items = [];
        for (var i = 1; i <= numberOfItems; i++) {
            items.push({ id: i.toString(), displayName: "L\u00E5ngt namn " + i, displayNameWhenSelected: "Alt " + i });
        }
        return items;
    };
    return MyComponent;
}());
MyComponent = __decorate([
    core_1.Component({
        selector: "my-component",
        templateUrl: "/app/components/myComponent.component.html"
    }),
    __metadata("design:paramtypes", [])
], MyComponent);
exports.MyComponent = MyComponent;
//# sourceMappingURL=MyComponent.component.js.map