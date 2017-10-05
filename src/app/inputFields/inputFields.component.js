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
var cityService_1 = require("./cityService");
var InputFieldsComponent = (function () {
    function InputFieldsComponent(cityService) {
        var _this = this;
        this.cityService = cityService;
        this.cityName = 'Houstons';
        this.cityValidator = {
            validate: function (s) { return _this.validateCityName(s); }
        };
        this.amount1 = 15000;
        this.amount2 = -25.5;
        this.percentValue = 0.02;
        this.kmValue = 11;
        this.intValue = 0;
    }
    InputFieldsComponent.prototype.validateCityName = function (cityName) {
        var allCities = this.cityService.getCities();
        if (allCities.filter(function (x) { return x.city === cityName; }).length === 0) {
            return { validationError: 'Ange en av de 1000 största städerna i USA', isValid: false };
        }
        return { isValid: true, validationError: '' };
    };
    InputFieldsComponent.prototype.validateEmail = function (email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValid = regex.test(email);
        return { isValid: isValid, validationError: isValid ? '' : 'Ogiltig e-postadress' };
    };
    InputFieldsComponent.prototype.formatNumericValue = function (value) {
        return isNaN(value) ? 'Inget' : value;
    };
    return InputFieldsComponent;
}());
InputFieldsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vgr-input-fields',
        templateUrl: 'inputFields.component.html'
    }),
    __metadata("design:paramtypes", [cityService_1.CityService])
], InputFieldsComponent);
exports.InputFieldsComponent = InputFieldsComponent;
//# sourceMappingURL=inputFields.component.js.map