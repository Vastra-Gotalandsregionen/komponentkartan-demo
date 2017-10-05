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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var expandableRow_model_1 = require("../../component-package/models/expandableRow.model");
var notificationIcon_model_1 = require("../../component-package/models/notificationIcon.model");
var notificationType_model_1 = require("../../component-package/models/notificationType.model");
var ListsComponent = (function () {
    function ListsComponent() {
        this.cardRow = new expandableRow_model_1.ExpandableRow('Foo');
        var examplePeople = [
            { id: '1', firstName: 'Adam', lastName: 'Andersson', organisations: ['Team 1', 'Team 2'] },
            { id: '2', firstName: 'Bjarne', lastName: 'Bengtsson', organisations: ['Team 1'] },
            { id: '3', firstName: 'Carola', lastName: 'Claesson', organisations: ['Team 1', 'Team 2', 'Team 3'] },
            { id: '4', firstName: 'Daniella', lastName: 'Di Maria Marquez ', organisations: ['Team 4'] },
            { id: '5', firstName: 'Erik', lastName: '', organisations: ['Team 2', 'Team 4'] },
        ];
        this.peopleRows = examplePeople.map(function (x) { return new expandableRow_model_1.ExpandableRow(x); });
        this.peopleRows[0].notification = { message: 'Information saknas', icon: notificationIcon_model_1.NotificationIcon.ExclamationRed, type: notificationType_model_1.NotificationType.Permanent };
        this.peopleRows[4].notification = { message: 'Personen är inaktiv', icon: notificationIcon_model_1.NotificationIcon.Exclamation, type: notificationType_model_1.NotificationType.Permanent };
    }
    ListsComponent.prototype.savePerson = function (row) {
        row.notifyOnCollapse(row.object.firstName + ' sparades', notificationIcon_model_1.NotificationIcon.OkGreen);
    };
    ListsComponent.prototype.cardSaved = function () {
        this.cardUnlocked = false;
        this.cardRow.notifyOnCollapse('Användaren sparades', notificationIcon_model_1.NotificationIcon.OkGreen);
    };
    ListsComponent.prototype.cardCancelled = function () {
        this.cardUnlocked = false;
        this.cardRow.notifyOnCollapse('Åtgärden avbröts', notificationIcon_model_1.NotificationIcon.Ok);
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vgr-lists',
        templateUrl: 'lists.component.html'
    }),
    __metadata("design:paramtypes", [])
], ListsComponent);
exports.ListsComponent = ListsComponent;
//# sourceMappingURL=lists.component.js.map