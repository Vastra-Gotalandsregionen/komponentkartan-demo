(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"komponentkartan-demo","version":"0.0.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","build-prod":"ng build --prod","lint":"ng lint","install-latest":"npm install vgr-komponentkartan@latest --save","install-demo":"npm install vgr-komponentkartan@demo --save","install-dev":"npm install vgr-komponentkartan@dev --save"},"private":true,"dependencies":{"@angular/animations":"6.0.3","@angular/common":"6.0.3","@angular/compiler":"6.0.3","@angular/core":"6.0.3","@angular/forms":"6.0.3","@angular/http":"6.0.3","@angular/platform-browser":"6.0.3","@angular/platform-browser-dynamic":"6.0.3","@angular/router":"6.0.3","angular2-highlight-js":"^6.0.1-alpha","classlist.js":"^1.1.20150312","core-js":"^2.4.1","eslint":"^4.14.0","ngx-perfect-scrollbar":"^5.3.5","rxjs":"^6.2.0","rxjs-compat":"^6.2.0","smoothscroll-polyfill":"^0.4.3","vgr-komponentkartan":"^3.1.0-beta5","web-animations-js":"^2.3.1","zone.js":"^0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"0.6.7","@angular-devkit/build-ng-packagr":"0.6.6","@angular/cli":"6.0.7","@angular/compiler-cli":"6.0.3","@angular/language-service":"6.0.3","@types/jasmine":"~2.5.53","@types/jasminewd2":"~2.0.2","@types/node":"^6.0.100","angular2-template-loader":"^0.6.2","codelyzer":"^4.0.1","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","ng-packagr":"^3.0.0-rc.2","ts-node":"~3.2.0","tsickle":"^0.27.2","tslib":"^1.7.1","tslint":"~5.7.0","typescript":"2.7.2"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actionpanels/actionpanels.component.html":
/*!**********************************************************!*\
  !*** ./src/app/actionpanels/actionpanels.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page class=\"no-sort\">\r\n  <vgr-page-header title=\"Action panel\">\r\n  </vgr-page-header>\r\n  <vgr-action-panel [showCloseButton]=\"true\" (expandedChanged)=\"expanded=$event\" [expanded]=\"expanded\" [title]=\"'Ett exempel på en action panel'\">\r\n    <vgr-button>En knapp</vgr-button>\r\n    <p>Lite text...</p>\r\n    <vgr-datepicker></vgr-datepicker>\r\n  </vgr-action-panel>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list [allowMultipleExpandedItems]=\"true\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header text=\"Dokumentation för Action panel\" [width]=\"20\"></vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item [expanded]=\"true\">\r\n          <vgr-list-item-header>\r\n            <h4>Översikt</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"content-overview\">\r\n              <p>\r\n                <code>&lt;vgr-action-panel&gt;</code> visas alltid på en fixed position på sidan. För mer information, se dokumentation\r\n                för\r\n                <a href=\"../pagestructure\">sidhantering</a>. Öppna och stäng panelen högst upp på denna sida med knappen nedan:\r\n              </p>\r\n              <br>\r\n              <vgr-button *ngIf=\"expanded\" (click)=\"expanded=!expanded\">Stäng panel</vgr-button>\r\n              <vgr-button *ngIf=\"!expanded\" (click)=\"expanded=!expanded\">Öppna panel</vgr-button>\r\n              <br>\r\n              <br>\r\n              <p>Förändras med tema:\r\n                <strong>nej</strong>\r\n              </p>\r\n            </div>\r\n            <!-- Översikt -->\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\" false \">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <h2>HTML</h2>\r\n            <section [innerHTML]=\"exampleCodeMarkup\" highlight-js-content=\".highlight\"></section>\r\n            <!-- Exempel -->\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\" false \">\r\n          <vgr-list-item-header>\r\n            <h4>API</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- API -->\r\n            <table class=\"property-table \">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>title: string</td>\r\n                <td>Anger action panelens titel.</td>\r\n                <td>[title]=\"'En titel'\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>expanded: boolean</td>\r\n                <td>Anger om panelen ska vara öppen eller stängd.</td>\r\n                <td>[expanded]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>showCloseButton: boolean</td>\r\n                <td>Anger huruvida en stänga-knapp ska visas i övre högra hörnet av panelen. Default är false.</td>\r\n                <td>[showCloseButton]=\"true\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>Tillgänglighet</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- Tillgänglighet -->\r\n            <i>Ej aktuellt.</i>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/actionpanels/actionpanels.component.ts":
/*!********************************************************!*\
  !*** ./src/app/actionpanels/actionpanels.component.ts ***!
  \********************************************************/
/*! exports provided: ActionPanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPanelsComponent", function() { return ActionPanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionPanelsComponent = /** @class */ (function () {
    function ActionPanelsComponent(htmlEncoder) {
        this.expanded = false;
        this.exampleCode = "\n  <vgr-action-panel [showCloseButton]=\"true\" (expandedChanged)=\"expanded=$event\" [expanded]=\"expanded\"\n    [title]=\"'Ett exempel p\u00E5 en action panel'\">\n    <vgr-button>En knapp</vgr-button>\n    <p>Lite text...</p>\n  </vgr-action-panel>";
        this.exampleCodeMarkup =
            htmlEncoder.prepareHighlightedSection(this.exampleCode, 'HTML');
    }
    ActionPanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-panel',
            template: __webpack_require__(/*! ./actionpanels.component.html */ "./src/app/actionpanels/actionpanels.component.html")
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], ActionPanelsComponent);
    return ActionPanelsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"theme-root\" class=\"theme--neutral\">\r\n  <vgr-scroll-to-top></vgr-scroll-to-top>\r\n  <vgr-modal></vgr-modal>\r\n  <vgr-header [userName]=\"userName\" [systemText]=\"systemText\" textColor=\"black\" circleColor=\"#f9dede\"></vgr-header>\r\n  <vgr-sidebar-menu>\r\n    <vgr-menu title=\"Innehåll\">\r\n      <vgr-menu-item link=\"/\" text=\"Start\"></vgr-menu-item>\r\n      <vgr-menu-item link=\"/theming\" text=\"Temahantering\"></vgr-menu-item>\r\n      <vgr-menu-item link=\"/pagestructure\" text=\"Sidhantering\"></vgr-menu-item>\r\n      <vgr-menu-item link=\"/formattemplate\" text=\"Formatmall\"></vgr-menu-item>\r\n      <vgr-menu-item link=\"/colours\" text=\"Färgkarta\"></vgr-menu-item>\r\n      <vgr-menu-item link=\"/icons\" text=\"Ikoner\"></vgr-menu-item>\r\n      <vgr-menu-item link=\"/sizes\" text=\"Upplösning\"></vgr-menu-item>\r\n      <vgr-menu-separator></vgr-menu-separator>\r\n      <vgr-submenu text=\"Komponenter\">\r\n        <vgr-menu-item link=\"/actionPanels\" text=\"Action panel\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/backtotop\" text=\"Back to top\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/textbuttons\" text=\"Button\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/togglebutton\" text=\"Toggle button\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/card\" text=\"Card\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/checkbox\" text=\"Checkbox\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/closebutton\" text=\"Close button\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/datepicker\" text=\"Datepicker\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/dropdowns\" text=\"Dropdown\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/dropdownmultiselect\" text=\"Dropdown multiselect\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/expandablediv\" text=\"Expandable div\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/filter-tag\" text=\"Filter tag\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/filtertextbox\" text=\"Filter textbox\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/headers\" text=\"Header/header menu\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/inputFields\" text=\"Input\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/lists\" text=\"List\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/loader\" text=\"Loader\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/lockbutton\" text=\"Lock button\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/menu\" text=\"Menu\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/modaldialog\" text=\"Modal dialog\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/monthpicker\" text=\"Monthpicker\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/panels\" text=\"Panel/Dashboard\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/radioButtons\" text=\"Radio Group\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/ring-with-text\" text=\"Ring med text (för ex. initialer)\"></vgr-menu-item>\r\n\r\n        <vgr-menu-item link=\"/savecancel\" text=\"Save/Cancel\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/search-result\" text=\"Search results\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/table\" text=\"Table\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/textareafield\" text=\"Textarea\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/titlevalue\" text=\"Title-value\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/dummy\" text=\"Inaktivt Menyval\" [disabled]=\"true\"></vgr-menu-item>\r\n\r\n      </vgr-submenu>\r\n      <vgr-submenu text=\"Kodexempel\">\r\n        <vgr-menu-item link=\"/listexample-simple\" text=\"Lista (enkel)\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/listexample-expandable-div\" text=\"Lista (expandable div)\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/listexample-notification\" text=\"Lista (notifiering)\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/listexample-notifications\" text=\"Lista (med radnotifieringar)\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/listexample-actionbuttons\" text=\"Lista (checkbox & papperskorg)\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/reactiveformsexample\" text=\"Reactive Forms\"></vgr-menu-item>\r\n      </vgr-submenu>\r\n      <vgr-submenu text=\"Exempelsidor\">\r\n        <vgr-menu-item link=\"/examples-listwithcards\" text=\"Lista med kort\"></vgr-menu-item>\r\n        <vgr-menu-item link=\"/examples-listwithlists\" text=\"Lista med full layout\"></vgr-menu-item>\r\n      </vgr-submenu>\r\n    </vgr-menu>\r\n  </vgr-sidebar-menu>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: KomponentkartanApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomponentkartanApplicationComponent", function() { return KomponentkartanApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KomponentkartanApplicationComponent = /** @class */ (function () {
    function KomponentkartanApplicationComponent(router) {
        this.router = router;
        var appVersion = __webpack_require__(/*! ../../package.json */ "./package.json").dependencies;
        this.komponentkartanVersion = appVersion['vgr-komponentkartan'];
        this.komponentkartanVersion = this.komponentkartanVersion.replace('^', '');
        var angularVersion = __webpack_require__(/*! ../../node_modules/@angular/core/package.json */ "./node_modules/@angular/core/package.json").version;
        this.angularVersion = angularVersion;
        var cliVersion = __webpack_require__(/*! ../../package.json */ "./package.json").devDependencies;
        this.angularCliVersion = cliVersion['@angular/cli'];
        this.angularCliVersion = this.angularCliVersion ? this.angularCliVersion.replace('^', '') : this.angularCliVersion;
    }
    KomponentkartanApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].of('Göte Borg').delay(1000).subscribe(function (x) { _this.userName = x; });
        this.systemText = "DEMO vgr-komponentkartan version: " + this.komponentkartanVersion + ", Angular: " + this.angularVersion + " och Angular-Cli: " + this.angularCliVersion;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    KomponentkartanApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-komponentkartan',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], KomponentkartanApplicationComponent);
    return KomponentkartanApplicationComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var angular2_highlight_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-highlight-js */ "./node_modules/angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var angular2_highlight_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_highlight_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _examples_listwithcards_unitfilterpipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples-listwithcards/unitfilterpipe */ "./src/app/examples-listwithcards/unitfilterpipe.ts");
/* harmony import */ var _examples_listwithlists_unitfilterpipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples-listwithlists/unitfilterpipe */ "./src/app/examples-listwithlists/unitfilterpipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inputfields_inputfields_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inputfields/inputfields.component */ "./src/app/inputfields/inputfields.component.ts");
/* harmony import */ var _inputfields_cityservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inputfields/cityservice */ "./src/app/inputfields/cityservice.ts");
/* harmony import */ var _monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./monthpicker/monthpicker.component */ "./src/app/monthpicker/monthpicker.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/checkbox/checkbox.component.ts");
/* harmony import */ var _colours_colours_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./colours/colours.component */ "./src/app/colours/colours.component.ts");
/* harmony import */ var _dropdownmultiselect_dropdownmultiselect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dropdownmultiselect/dropdownmultiselect.component */ "./src/app/dropdownmultiselect/dropdownmultiselect.component.ts");
/* harmony import */ var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dropdowns/dropdowns.component */ "./src/app/dropdowns/dropdowns.component.ts");
/* harmony import */ var _formattemplate_formattemplate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formattemplate/formattemplate.component */ "./src/app/formattemplate/formattemplate.component.ts");
/* harmony import */ var _headers_headers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./headers/headers.component */ "./src/app/headers/headers.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _lockbutton_lockbutton_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lockbutton/lockbutton.component */ "./src/app/lockbutton/lockbutton.component.ts");
/* harmony import */ var _closebutton_closebutton_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./closebutton/closebutton.component */ "./src/app/closebutton/closebutton.component.ts");
/* harmony import */ var _modaldialog_modaldialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modaldialog/modaldialog.component */ "./src/app/modaldialog/modaldialog.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/panels/panels.component.ts");
/* harmony import */ var _radiobuttons_radiobuttons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./radiobuttons/radiobuttons.component */ "./src/app/radiobuttons/radiobuttons.component.ts");
/* harmony import */ var _textbuttons_textbuttons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./textbuttons/textbuttons.component */ "./src/app/textbuttons/textbuttons.component.ts");
/* harmony import */ var _savecancel_savecancel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./savecancel/savecancel.component */ "./src/app/savecancel/savecancel.component.ts");
/* harmony import */ var _backtotop_backtotop_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./backtotop/backtotop.component */ "./src/app/backtotop/backtotop.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _theming_theming_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./theming/theming.component */ "./src/app/theming/theming.component.ts");
/* harmony import */ var _lists_examples_withnotification_listexample_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lists/examples/withnotification/listexample.component */ "./src/app/lists/examples/withnotification/listexample.component.ts");
/* harmony import */ var _lists_examples_withrownotifications_listexamplewithrownotification_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lists/examples/withrownotifications/listexamplewithrownotification.component */ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.ts");
/* harmony import */ var _lists_examples_simple_listcodeexample_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lists/examples/simple/listcodeexample.component */ "./src/app/lists/examples/simple/listcodeexample.component.ts");
/* harmony import */ var _lists_examples_withactionbuttons_listexamplewithactionbuttons_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lists/examples/withactionbuttons/listexamplewithactionbuttons.component */ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.ts");
/* harmony import */ var _reactiveforms_example_reactiveforms_example_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./reactiveforms-example/reactiveforms-example.component */ "./src/app/reactiveforms-example/reactiveforms-example.component.ts");
/* harmony import */ var _component_docs_component_docs_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component-docs/component-docs.component */ "./src/app/component-docs/component-docs.component.ts");
/* harmony import */ var _title_value_title_value_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./title-value/title-value.component */ "./src/app/title-value/title-value.component.ts");
/* harmony import */ var _filtertexbox_filtertexbox_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./filtertexbox/filtertexbox.component */ "./src/app/filtertexbox/filtertexbox.component.ts");
/* harmony import */ var _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./page-structure/page-structure.component */ "./src/app/page-structure/page-structure.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var _sizes_sizes_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sizes/sizes.component */ "./src/app/sizes/sizes.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _expandable_div_expandable_div_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./expandable-div/expandable-div.component */ "./src/app/expandable-div/expandable-div.component.ts");
/* harmony import */ var _actionpanels_actionpanels_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./actionpanels/actionpanels.component */ "./src/app/actionpanels/actionpanels.component.ts");
/* harmony import */ var _filter_tag_filter_tag_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./filter-tag/filter-tag.component */ "./src/app/filter-tag/filter-tag.component.ts");
/* harmony import */ var _lists_examples_withexpandablediv_listexamplewithexpandablediv_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./lists/examples/withexpandablediv/listexamplewithexpandablediv.component */ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.ts");
/* harmony import */ var _examples_listwithcards_examples_listwithcards_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./examples-listwithcards/examples-listwithcards.component */ "./src/app/examples-listwithcards/examples-listwithcards.component.ts");
/* harmony import */ var _examples_listwithlists_examples_listwithlists_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./examples-listwithlists/examples-listwithlists.component */ "./src/app/examples-listwithlists/examples-listwithlists.component.ts");
/* harmony import */ var _examples_listwithlists_unitService__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./examples-listwithlists/unitService */ "./src/app/examples-listwithlists/unitService.ts");
/* harmony import */ var _textareafield_textareafield_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./textareafield/textareafield.component */ "./src/app/textareafield/textareafield.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _ring_with_text_ring_with_text_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ring-with-text/ring-with-text.component */ "./src/app/ring-with-text/ring-with-text.component.ts");
/* harmony import */ var _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./toggle-button/toggle-button.component */ "./src/app/toggle-button/toggle-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/common/locales/sv */ "./node_modules/@angular/common/locales/sv.js");
/* harmony import */ var _angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core





// Komponentkartan

// Vendors

// Pipe


// Domain
















































// Locale registration



Object(_angular_common__WEBPACK_IMPORTED_MODULE_57__["registerLocaleData"])(_angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_58___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["KomponentkartanApplicationComponent"],
                _inputfields_inputfields_component__WEBPACK_IMPORTED_MODULE_10__["InputfieldsComponent"],
                _monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_12__["MonthpickerComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerComponent"],
                _backtotop_backtotop_component__WEBPACK_IMPORTED_MODULE_28__["BacktotopComponent"],
                _savecancel_savecancel_component__WEBPACK_IMPORTED_MODULE_27__["SavecancelComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"],
                _colours_colours_component__WEBPACK_IMPORTED_MODULE_15__["ColoursComponent"],
                _dropdownmultiselect_dropdownmultiselect_component__WEBPACK_IMPORTED_MODULE_16__["DropdownmultiselectComponent"],
                _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_17__["DropdownsComponent"],
                _formattemplate_formattemplate_component__WEBPACK_IMPORTED_MODULE_18__["FormattemplateComponent"],
                _headers_headers_component__WEBPACK_IMPORTED_MODULE_19__["HeadersComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_20__["ListsComponent"],
                _lockbutton_lockbutton_component__WEBPACK_IMPORTED_MODULE_21__["LockbuttonComponent"],
                _modaldialog_modaldialog_component__WEBPACK_IMPORTED_MODULE_23__["ModaldialogComponent"],
                _panels_panels_component__WEBPACK_IMPORTED_MODULE_24__["PanelsComponent"],
                _radiobuttons_radiobuttons_component__WEBPACK_IMPORTED_MODULE_25__["RadiobuttonsComponent"],
                _textbuttons_textbuttons_component__WEBPACK_IMPORTED_MODULE_26__["TextbuttonsComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_30__["StartComponent"],
                _theming_theming_component__WEBPACK_IMPORTED_MODULE_31__["ThemingComponent"],
                _lists_examples_withnotification_listexample_component__WEBPACK_IMPORTED_MODULE_32__["ListexampleComponent"],
                _lists_examples_withrownotifications_listexamplewithrownotification_component__WEBPACK_IMPORTED_MODULE_33__["ListexamplewithrownotificationComponent"],
                _component_docs_component_docs_component__WEBPACK_IMPORTED_MODULE_37__["ComponentDocsComponent"],
                _title_value_title_value_component__WEBPACK_IMPORTED_MODULE_38__["TitleValueComponent"],
                _filtertexbox_filtertexbox_component__WEBPACK_IMPORTED_MODULE_39__["FiltertexboxComponent"],
                _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_40__["PageStructureComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_41__["CardComponent"],
                _sizes_sizes_component__WEBPACK_IMPORTED_MODULE_43__["SizesComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_44__["MenuComponent"],
                _lists_examples_simple_listcodeexample_component__WEBPACK_IMPORTED_MODULE_34__["ListcodeexampleComponent"],
                _lists_examples_withactionbuttons_listexamplewithactionbuttons_component__WEBPACK_IMPORTED_MODULE_35__["ListExampleWithActionButtonsComponent"],
                _reactiveforms_example_reactiveforms_example_component__WEBPACK_IMPORTED_MODULE_36__["ReactiveformsexampleComponent"],
                _expandable_div_expandable_div_component__WEBPACK_IMPORTED_MODULE_45__["ExpandableDivComponent"],
                _lists_examples_withexpandablediv_listexamplewithexpandablediv_component__WEBPACK_IMPORTED_MODULE_48__["ListexamplewithexpandabledivComponent"],
                _examples_listwithcards_examples_listwithcards_component__WEBPACK_IMPORTED_MODULE_49__["ExamplesListwithcardsComponent"],
                _examples_listwithlists_examples_listwithlists_component__WEBPACK_IMPORTED_MODULE_50__["ExamplesListwithlistsComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_53__["IconsComponent"],
                _examples_listwithcards_unitfilterpipe__WEBPACK_IMPORTED_MODULE_7__["UnitFilterPipe"],
                _examples_listwithlists_unitfilterpipe__WEBPACK_IMPORTED_MODULE_8__["UnitFilter2Pipe"],
                _actionpanels_actionpanels_component__WEBPACK_IMPORTED_MODULE_46__["ActionPanelsComponent"],
                _closebutton_closebutton_component__WEBPACK_IMPORTED_MODULE_22__["ClosebuttonComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_54__["TableComponent"],
                _textareafield_textareafield_component__WEBPACK_IMPORTED_MODULE_52__["TextareafieldComponent"],
                _filter_tag_filter_tag_component__WEBPACK_IMPORTED_MODULE_47__["FilterTagComponent"],
                _ring_with_text_ring_with_text_component__WEBPACK_IMPORTED_MODULE_55__["RingWithTextComponent"],
                _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_56__["ToggleButtonComponent"],
                _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_59__["SearchResultComponent"]
            ],
            imports: [
                vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_5__["KomponentkartanModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                angular2_highlight_js__WEBPACK_IMPORTED_MODULE_6__["HighlightJsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["appRoutes"])
            ],
            exports: [_examples_listwithcards_unitfilterpipe__WEBPACK_IMPORTED_MODULE_7__["UnitFilterPipe"]],
            providers: [
                _inputfields_cityservice__WEBPACK_IMPORTED_MODULE_11__["CityService"],
                angular2_highlight_js__WEBPACK_IMPORTED_MODULE_6__["HighlightJsService"],
                _html_encode_service__WEBPACK_IMPORTED_MODULE_42__["HtmlEncodeService"],
                _examples_listwithlists_unitService__WEBPACK_IMPORTED_MODULE_51__["UnitService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'sv-SE'
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["KomponentkartanApplicationComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backtotop/backtotop.component.html":
/*!****************************************************!*\
  !*** ./src/app/backtotop/backtotop.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'back to top'\">\r\n  <div class=\" docs__overview \">\r\n    <p>Knapp som vid klick för användaren tillbaka till toppen på sidan. När man scrollar neråt visas back-to-top komponenten\r\n      och ger en genväg till toppen av sidan. Back to top aktiveras när man scrollat ner några pixlar från toppen av sidan.\r\n    </p>\r\n    <br>\r\n    <div class=\"back-to-top back-to-top--inline \"></div>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples \">\r\n    <p> Här visas en lång text för att aktivera komponenten back to top. I själv exemplet så visas knappen på höger sida, detta\r\n      eftersom alla sidor under\r\n      <strong>Komponenter</strong> använder sig utav\r\n      <code> &lt;vgr-list&gt;</code> för att strukturera upp innehållet.</p>\r\n    <br>\r\n    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tristique libero. Proin non aliquet ligula. Etiam\r\n      ante diam, volutpat at tempor quis, pulvinar eget leo. Vestibulum ac nisi sed odio commodo lacinia. Etiam pulvinar\r\n      convallis diam, quis convallis dui fermentum a. Donec nunc massa, pharetra ac vulputate vel, bibendum a dolor. Nam\r\n      interdum, ex vel varius feugiat, nisl urna faucibus nulla, quis mattis lacus mi at mauris. Fusce interdum a ligula\r\n      sit amet scelerisque. Sed nec metus vitae ipsum luctus mollis eget eu libero. Proin lacinia vehicula felis ut mollis.\r\n      Mauris aliquet ante ac mauris imperdiet imperdiet. Duis nec ullamcorper lorem. Morbi id sem velit. Nunc tortor sem,\r\n      fermentum et mauris gravida, sagittis tempor metus. Cras ut nisl vestibulum, iaculis risus quis, condimentum tellus.\r\n      Nunc eu nisl pretium, euismod mauris pretium, pretium dui. Nulla feugiat lacus lectus, at mollis metus ornare ac. Mauris\r\n      nec eleifend neque. Nullam malesuada lacus elit, et rutrum leo tristique porta. Donec velit tellus, lacinia ut dictum\r\n      nec, bibendum a magna. Maecenas ultricies faucibus dui, eu dignissim arcu aliquet congue. Curabitur sit amet quam mauris.\r\n      Donec eu gravida dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit augue eget aliquam\r\n      pellentesque. Duis nec lobortis purus. Vestibulum vitae dolor faucibus, luctus lacus tincidunt, tincidunt dolor. Nunc\r\n      vitae aliquet elit. Suspendisse accumsan lobortis euismod. Curabitur non luctus orci. Orci varius natoque penatibus\r\n      et magnis dis parturient montes, nascetur ridiculus mus. Quisque leo ligula, tempus vel enim ut, mollis tristique neque.\r\n      Fusce quis tortor eu ante rhoncus sodales at quis enim. Integer venenatis ullamcorper nibh, vel porttitor nisl luctus\r\n      vitae. Nulla hendrerit nisl augue. Aliquam vel laoreet odio, sed imperdiet eros. Proin eget pellentesque leo. Donec\r\n      ut odio laoreet tortor semper lobortis. Phasellus posuere, est ut mollis pharetra, mauris velit volutpat turpis, ut\r\n      ullamcorper ligula turpis nec justo. Sed vitae suscipit leo. Suspendisse lorem neque, placerat id enim vel, sollicitudin\r\n      venenatis urna. Morbi maximus nisl sed neque laoreet, non laoreet libero dapibus. Nullam nibh nisl, eleifend nec commodo\r\n      vel, scelerisque vitae urna. Fusce ullamcorper convallis risus in pellentesque. Duis porta erat at enim tincidunt dignissim.\r\n      Pellentesque nec placerat tortor. Nam ultricies et odio sit amet ultricies. Orci varius natoque penatibus et magnis\r\n      dis parturient montes, nascetur ridiculus mus. Nulla blandit iaculis sapien pellentesque rutrum. Cras sodales ex nunc,\r\n      ut suscipit risus vehicula at. Donec leo turpis, varius ac facilisis vel, hendrerit eu diam. Curabitur interdum urna\r\n      eget pellentesque maximus. Integer et eleifend mi. Sed dui neque, rutrum quis libero at, faucibus maximus nisl. Sed\r\n      semper accumsan venenatis. Suspendisse a nunc condimentum augue scelerisque accumsan ut et felis. Aliquam vestibulum\r\n      ex nulla, vitae feugiat lacus efficitur sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra,\r\n      per inceptos himenaeos. Duis sit amet volutpat dui, in commodo urna. Morbi finibus enim orci, ac facilisis justo dignissim\r\n      sit amet. Ut eu malesuada massa, sit amet aliquam eros. Donec vel quam ac ligula egestas ornare in non nunc. Mauris\r\n      vestibulum turpis nibh, ut pellentesque elit sollicitudin quis. Aliquam non accumsan leo, sed rutrum nisi. Aenean pharetra\r\n      sapien ipsum, eu tristique dolor fermentum et. Suspendisse potenti. Integer pretium lacus at feugiat fermentum. Cras\r\n      imperdiet purus vel velit finibus auctor. Aliquam erat volutpat. Mauris dignissim turpis dictum nibh ultrices condimentum.\r\n      Etiam facilisis est in cursus aliquet. Pellentesque nec bibendum tellus, quis mattis risus. Cras dolor augue, ornare\r\n      a lacus ut, placerat viverra risus. In varius, est sed tempus pretium, lorem turpis gravida lacus, et condimentum elit\r\n      urna aliquet lacus. Etiam ut lacinia enim, eu laoreet lectus. Sed consequat magna quis auctor elementum. Morbi non\r\n      lectus et est pulvinar sollicitudin quis eu libero. Nullam finibus, dui eu volutpat ultricies, erat erat mollis orci,\r\n      sit amet posuere ex eros sit amet quam. Nam nec turpis urna. Nulla a arcu vitae augue tempor porttitor ac et eros.\r\n      Ut lacinia libero mauris, eget efficitur ipsum gravida non. Etiam lorem sapien, mollis in scelerisque vitae, consequat\r\n      et tortor. Nullam in neque ex. Maecenas dapibus tortor massa, eget congue est tristique non. Suspendisse convallis\r\n      erat non hendrerit fringilla. Morbi nec nunc massa. Curabitur eleifend, felis sed cursus accumsan, arcu risus congue\r\n      odio, eget ornare massa dolor id quam. Mauris tincidunt eros sed sollicitudin vestibulum. Sed elit sem, congue nec\r\n      lorem non, gravida tempor elit. Vestibulum at accumsan lectus, nec gravida neque. Vivamus ornare a lacus a elementum.</i>\r\n  </div>\r\n  <div class=\"docs__api \">\r\n    <p>För att aktivera funktionen måste man inkudera\r\n      <code>&lt;vgr-scroll-to-top&gt;&lt;/vgr-scroll-to-top&gt;</code> i app.component.html eller på en specifik sida om man inte\r\n      vill att den skall ligga globalt.\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__wcag \">\r\n    <i>Ej aktuellt.</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/backtotop/backtotop.component.scss":
/*!****************************************************!*\
  !*** ./src/app/backtotop/backtotop.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/backtotop/backtotop.component.ts":
/*!**************************************************!*\
  !*** ./src/app/backtotop/backtotop.component.ts ***!
  \**************************************************/
/*! exports provided: BacktotopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacktotopComponent", function() { return BacktotopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BacktotopComponent = /** @class */ (function () {
    function BacktotopComponent() {
    }
    BacktotopComponent.prototype.ngOnInit = function () {
    };
    BacktotopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backtotop',
            template: __webpack_require__(/*! ./backtotop.component.html */ "./src/app/backtotop/backtotop.component.html"),
            styles: [__webpack_require__(/*! ./backtotop.component.scss */ "./src/app/backtotop/backtotop.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BacktotopComponent);
    return BacktotopComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page class=\"no-sort\">\r\n  <vgr-page-header title=\"Card\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list [allowMultipleExpandedItems]=\"true\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header text=\"Dokumentation för Card\" [width]=\"20\"></vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item [expanded]=\"true\">\r\n          <vgr-list-item-header>\r\n            <h4>Översikt</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"content-overview\">\r\n              <p>\r\n                <code>&lt;vgr-card&gt;</code> används för att skapa kort, ofta i listor som expanderat innehåll. Ett kort har tre\r\n                delar: Topp, vänster och höger. Dessa fylls med innehåll genom att använda css-klasser. Ett kort innehåller\r\n                en eller flera\r\n                <code>&lt;vgr-card-section&gt;</code> som kan expanderas.\r\n              </p>\r\n              <vgr-card>\r\n                <vgr-card-header>\r\n                  <vgr-button class=\"flex-right\" [secondary]=\"true\">Åtgärd</vgr-button>\r\n                </vgr-card-header>\r\n                <vgr-card-column>\r\n                  <vgr-card-section [title]=\"'Rubrik'\" [subtitle]=\"'vänster 1'\">\r\n                    <span>Innehåll</span>\r\n                  </vgr-card-section>\r\n                  <vgr-card-section [title]=\"'Rubrik'\" [subtitle]=\"'vänster 2'\">\r\n                    <span>Innehåll</span>\r\n                  </vgr-card-section>\r\n                </vgr-card-column>\r\n                <vgr-card-column>\r\n                  <vgr-card-section class=\"card__right\" [expanded]=\"true\" [title]=\"'Rubrik'\" [subtitle]=\"'Höger 1'\" [readonly]=\"false\">\r\n                    <div>Innehåll</div>\r\n                  </vgr-card-section>\r\n                </vgr-card-column>\r\n              </vgr-card>\r\n\r\n              <p>Förändras med tema:\r\n                <strong>nej</strong>\r\n              </p>\r\n            </div>\r\n            <!-- Översikt -->\r\n          </vgr-list-item-content>\r\n\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel - två kolumner</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- Exempel -->\r\n            <vgr-card>\r\n              <vgr-card-header>\r\n                <vgr-save-cancel class=\"flex-right\" [secondary]=\"true\" (unlock)=\"unlocked = true\" (save)=\"unlocked = false\" (cancel)=\"unlocked = false\"></vgr-save-cancel>\r\n              </vgr-card-header>\r\n              <vgr-card-column>\r\n                <vgr-card-section [expanded]=\"true\" [title]=\"'Rubrik'\" [subtitle]=\"'Personuppgifter'\" [readonly]=\"!unlocked\">\r\n                  <vgr-title-value-layout>\r\n                    <vgr-title-value [title]=\"'Förnamn'\" [slim]=\"!unlocked\">\r\n                      <vgr-input [value]=\"'Per-Åke'\" [readonly]=\"!unlocked\"></vgr-input>\r\n                    </vgr-title-value>\r\n                    <vgr-title-value [title]=\"'Efternamn'\" [slim]=\"!unlocked\">\r\n                      <vgr-input [value]=\"'Berg'\" [readonly]=\"!unlocked\"></vgr-input>\r\n                    </vgr-title-value>\r\n                    <vgr-title-value [title]=\"'Boende'\" [slim]=\"!unlocked\">\r\n                      <vgr-dropdown [values]=\"['Hus','Lägenhet','Kartong']\" [readonly]=\"!unlocked\"></vgr-dropdown>\r\n                    </vgr-title-value>\r\n                    <vgr-title-value [title]=\"'Födelsedatum'\" [slim]=\"!unlocked\">\r\n                      <vgr-datepicker [selectedDate]=\"birthDate\" [readonly]=\"!unlocked\"></vgr-datepicker>\r\n                    </vgr-title-value>\r\n                    <vgr-title-value [title]=\"'Serienummer'\" [slim]=\"!unlocked\">\r\n                      <span>7a787b27-c2cc-441f-a732</span>\r\n                    </vgr-title-value>\r\n                  </vgr-title-value-layout>\r\n                </vgr-card-section>\r\n                <vgr-card-section [expanded]=\"true\" [title]=\"'Rubrik'\" [subtitle]=\"'Adressuppgifter'\">\r\n                  <vgr-title-value-layout>\r\n\r\n                    <vgr-title-value [title]=\"'Kommun'\" [slim]=\"true\">\r\n                      <span>Vänersborg</span>\r\n                    </vgr-title-value>\r\n                    <vgr-title-value [title]=\"'Besöksaddress'\" [slim]=\"true\">\r\n                      <span>Duellvägen\r\n                        <br>462 60\r\n                        <br>Vänersborg\r\n                      </span>\r\n                    </vgr-title-value>\r\n                    <vgr-title-value [title]=\"'Geokod (PT90)'\" [slim]=\"true\">\r\n                      <span>x: 6471784</span>\r\n                    </vgr-title-value>\r\n                  </vgr-title-value-layout>\r\n                </vgr-card-section>\r\n              </vgr-card-column>\r\n              <vgr-card-column>\r\n                <vgr-card-section [expanded]=\"false\" [title]=\"'Rubrik'\" [subtitle]=\"'Övrig information'\">\r\n                  <span>Innehåll</span>\r\n                </vgr-card-section>\r\n              </vgr-card-column>\r\n            </vgr-card>\r\n            <br>\r\n            <h3>Markup</h3>\r\n            <section [innerHTML]=\"cardExampleMarkup\" highlight-js-content=\".highlight\"></section>\r\n            <br>\r\n\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\" [notification]=\"notification\">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel - en kolumn</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- Exempel2 -->\r\n            <vgr-card>\r\n              <vgr-card-header>\r\n                <vgr-save-cancel class=\"flex-right\" [secondary]=\"true\" (unlock)=\"unlocked = true\" (save)=\"unlocked = false\" (cancel)=\"unlocked = false\"></vgr-save-cancel>\r\n              </vgr-card-header>\r\n              <vgr-card-column>\r\n                <table style=\"width:100%;text-align:left\">\r\n                  <thead>\r\n                    <th>Kolumn 1</th>\r\n                    <th>Kolumn 2</th>\r\n                    <th>Kolumn 3</th>\r\n                    <th>Kolumn 4</th>\r\n                    <th>Kolumn 5</th>\r\n                    <th>Kolumn 6</th>\r\n                    <th>Kolumn 7</th>\r\n                    <th>Kolumn 8</th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Värde 1</td>\r\n                      <td>Värde 2</td>\r\n                      <td>Värde 3</td>\r\n                      <td>Värde 4</td>\r\n                      <td>Värde 5</td>\r\n                      <td>Värde 6</td>\r\n                      <td>Värde 7</td>\r\n                      <td>Värde 8</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Värde 1</td>\r\n                      <td>Värde 2</td>\r\n                      <td>Värde 3</td>\r\n                      <td>Värde 4</td>\r\n                      <td>Värde 5</td>\r\n                      <td>Värde 6</td>\r\n                      <td>Värde 7</td>\r\n                      <td>Värde 8</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Värde 1</td>\r\n                      <td>Värde 2</td>\r\n                      <td>Värde 3</td>\r\n                      <td>Värde 4</td>\r\n                      <td>Värde 5</td>\r\n                      <td>Värde 6</td>\r\n                      <td>Värde 7</td>\r\n                      <td>Värde 8</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Värde 1</td>\r\n                      <td>Värde 2</td>\r\n                      <td>Värde 3</td>\r\n                      <td>Värde 4</td>\r\n                      <td>Värde 5</td>\r\n                      <td>Värde 6</td>\r\n                      <td>Värde 7</td>\r\n                      <td>Värde 8</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </vgr-card-column>\r\n            </vgr-card>\r\n            <br>\r\n            <h3>Markup</h3>\r\n            <section [innerHTML]=\"cardExampleMarkup2\" highlight-js-content=\".highlight\"></section>\r\n            <br>\r\n\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- API -->\r\n            <h3>Templatestruktur</h3>\r\n            <ul>\r\n              <li>\r\n                <code>&lt;vgr-card&gt;</code>, första elementet som representerar hela kortet</li>\r\n              <li>\r\n                <code>&lt;vgr-card-header&gt;</code>, ger titelyta på en vgr-card. Plats för knappar och rubriker för hela kortet.</li>\r\n              <li>\r\n                <code>&lt;vgr-card-column&gt;</code>, kolumner i kortet.\r\n                <ul>\r\n                  <li>\r\n                    Om det bara finns en kolumn blir den fullbredd.\r\n                  </li>\r\n                  <li>\r\n                    Om det finns två kolumner så hamnar den första till vänster och den andra till höger.\r\n                  </li>\r\n                  <li>\r\n                    Fler än två kolumner stöds ej.\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n\r\n              <li>\r\n                <code>&lt;vgr-card-section&gt;</code>, expanderbar sektion som placeras i en kolumn.</li>\r\n            </ul>\r\n            <br>\r\n            <strong>OBS!</strong> API nedan avser\r\n            <code>&lt;vgr-card-section&gt;</code>\r\n\r\n\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>expanded: boolean</td>\r\n                <td>Anger om sektionen är expanderad eller ej</td>\r\n                <td>[expanded]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>title: string</td>\r\n                <td>Sektionens rubrik</td>\r\n                <td>[title]=\"'Rubrik'\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>subTitle: string</td>\r\n                <td>Sektionens underrubrik</td>\r\n                <td>[title]=\"'Underrubrik'\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>readonly: boolean</td>\r\n                <td>Anger om symbolen för redigeringsläge skall visas eller ej. False = visa. True = dölj. Default är TRUE.</td>\r\n                <td>[readonly]=\"true\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Tillgänglighet</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <p>\r\n              Navigering i kortet:\r\n              <br>\r\n              <br> - Enter och Space: När fokus är på listradens header togglas kortraden expanderad / kollapsad.\r\n            </p>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".property-table {\n  margin-top: 10px; }\n\nul {\n  list-style-type: disc;\n  list-style-position: inside; }\n\nul li ul li {\n    padding-left: 26px; }\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent(htmlEncoder) {
        this.cardExample = "<vgr-card>\n  <vgr-card-header>\n    <vgr-save-cancel class=\"flex-right\" [secondary]=\"true\" (unlock)=\"unlocked = true\"\n    (save)=\"unlocked = false\" (cancel)=\"unlocked = false\"></vgr-save-cancel>\n  </vgr-card-header>\n  <vgr-card-column>\n    <vgr-card-section [expanded]=\"true\" [title]=\"'Rubrik'\" [subtitle]=\"'Personuppgifter'\" [readonly]=\"!unlocked\">\n    <vgr-title-value-layout>\n\n        <vgr-title-value [title]=\"'F\u00F6rnamn'\" [slim]=\"!unlocked\">\n          <vgr-input [value]=\"'Per-\u00C5ke'\" [readonly]=\"!unlocked\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value [title]=\"'Efternamn'\" [slim]=\"!unlocked\">\n          <vgr-input [value]=\"'Berg'\" [readonly]=\"!unlocked\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value [title]=\"'Boende'\" [slim]=\"!unlocked\">\n          <vgr-dropdown [values]=\"['Hus','L\u00E4genhet','Kartong']\" [readonly]=\"!unlocked\"></vgr-dropdown>\n        </vgr-title-value>\n        <vgr-title-value [title]=\"'F\u00F6delsedatum'\" [slim]=\"!unlocked\">\n          <vgr-datepicker [selectedDate]=\"birthDate\" [readonly]=\"!unlocked\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value [title]=\"'Serienummer'\" [slim]=\"!unlocked\">\n          <span>7a787b27-c2cc-441f-a732</span>\n        </vgr-title-value>\n     </vgr-title-value-layout>\n    </vgr-card-section>\n    <vgr-card-section [expanded]=\"true\" [title]=\"'Rubrik'\" [subtitle]=\"'Adressuppgifter'\">\n     <vgr-title-value-layout>\n        <vgr-title-value [title]=\"'Kommun'\" [slim]=\"true\">\n          <span>V\u00E4nersborg</span>\n        </vgr-title-value>\n        <vgr-title-value [title]=\"'Bes\u00F6ksaddress'\" [slim]=\"true\">\n          <span>Duellv\u00E4gen\n            <br>462 60\n            <br>V\u00E4nersborg\n          </span>\n        </vgr-title-value>\n        <vgr-title-value [title]=\"'Geokod (PT90)'\" [slim]=\"true\">\n          <span>x: 6471784</span>\n        </vgr-title-value>\n      </vgr-title-value-layout>\n    </vgr-card-section>\n  </vgr-card-column>\n  <vgr-card-column>\n    <vgr-card-section [expanded]=\"false\" [title]=\"'Rubrik'\" [subtitle]=\"'\u00D6vrig information'\">\n      <span>Inneh\u00E5ll</span>\n    </vgr-card-section>\n  </vgr-card-column>\n</vgr-card>";
        this.cardExample2 = " <vgr-card>\n  <vgr-card-header>\n    <vgr-save-cancel class=\"flex-right\" [secondary]=\"true\" (unlock)=\"unlocked = true\"\n    (save)=\"unlocked = false\" (cancel)=\"unlocked = false\"></vgr-save-cancel>\n  </vgr-card-header>\n  <vgr-card-column>\n      <table style=\"width:100%;text-align:left\">\n        <!-- Table data -->\n      </table>\n  </vgr-card-column>\n</vgr-card>";
        this.notification = {
            message: 'Meddelande som visas här, visas även när kortet är öppet. Meddelande som visas här, visas även när kortet är öppet. Meddelande som visas här,', icon: 'vgr-icon-exclamation',
            type: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Permanent
        };
        this.cardExampleMarkup = htmlEncoder.prepareHighlightedSection(this.cardExample);
        this.cardExampleMarkup2 = htmlEncoder.prepareHighlightedSection(this.cardExample2);
        this.birthDate = new Date(1976, 5, 17);
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/checkbox/checkbox.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkbox/checkbox.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Checkbox'\">\r\n    <div class=\"docs__overview\">\r\n        <p>\r\n            <code>\r\n        &lt;vgr-checkbox&gt;</code> har samma beteende som en kryssruta.</p>\r\n        <br>\r\n        <vgr-checkbox [label]=\"'Klicka på mig!'\"></vgr-checkbox>\r\n        <br>\r\n        <p>Förändras med tema:\r\n            <strong>nej</strong>\r\n        </p>\r\n    </div>\r\n    <div class=\"docs__examples\">\r\n        <div class=\"row-layout \">\r\n            <div class=\"full \">\r\n                <div class=\"column-layout \">\r\n                    <vgr-checkbox [label]=\" 'Med ledtext' \"></vgr-checkbox>\r\n                    <vgr-checkbox [disabled]=\"true\" [label]=\" 'Inaktiverad' \"></vgr-checkbox>\r\n                    <vgr-checkbox [checked]=\"true\" [label]=\" 'Vald' \"></vgr-checkbox>\r\n                    <vgr-checkbox [checked]=\"true\" [disabled]=\"true\" [label]=\" 'Inaktiverad vald' \"></vgr-checkbox>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br> Under \"kodexempel\" finns exempel på hur checkbox-komponenten kan användas i Angular Reactive Forms:\r\n        <br>\r\n        <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n    </div>\r\n    <div class=\"docs__api\">\r\n        <table class=\"property-table\">\r\n            <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    label : string </td>\r\n                <td>Text som man vill sätta på checkboxen. Kan lämnas tom för att inte ha en ledtext</td>\r\n                <td>\r\n                    [label]=\" 'Inaktiverad' \"\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    checked : boolean\r\n                </td>\r\n                <td>true/false, defaultvärde false. Sätter om checkboxen är vald eller inte</td>\r\n                <td>[checked]=True</td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    disabled : boolean\r\n                </td>\r\n                <td>true/false, defaultvärde false. Sätter om checkboxen är inaktiverad eller inte</td>\r\n                <td>[disabled]=True</td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    checkedChanged : EventEmitter&lt;boolean&gt;\r\n                </td>\r\n                <td>Event som triggas när man checkar i eller ur checkboxen</td>\r\n                <td>(checkedChanged)=\"onCheckedChanged($event) \"</td>\r\n            </tr>\r\n\r\n        </table>\r\n    </div>\r\n    <div class=\"docs__wcag\">\r\n        <p>\r\n            <code>&lt;vgr-checkbox&gt;</code> har en intern div vars roll är satt till checkbox. Förutom rollen så används attributen: attr.aria-disabled\r\n            (inaktiv/aktiv), attr.aria-checked (kryssad/ej ikryssad) och attr.aria-labelledby (pekning till interna label\r\n            i\r\n            <code>&lt;vgr-checkbox&gt;</code>)\r\n        </p>\r\n    </div>\r\n</app-component-docs>"

/***/ }),

/***/ "./src/app/checkbox/checkbox.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkbox/checkbox.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkbox/checkbox.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkbox/checkbox.component.ts ***!
  \************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/closebutton/closebutton.component.html":
/*!********************************************************!*\
  !*** ./src/app/closebutton/closebutton.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Close button'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-close-button&gt;</code>\r\n    </p>\r\n    <div style=\"height:35px; margin-top:20px; margin-bottom:20px\">\r\n      <vgr-close-button></vgr-close-button>\r\n    </div>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong> (bakgrundsfärg)\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <vgr-close-button></vgr-close-button>\r\n    <vgr-close-button [disabled]=\"true\"></vgr-close-button>\r\n    <br>\r\n    <br>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled : boolean</td>\r\n        <td>Om knappen ska vara inaktiverad.</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>click : EventEmitter</td>\r\n        <td>Event som triggas när knappen trycks ner.\r\n          <td>(click)=\"OnClick()\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <code>&lt;vgr-close-button&gt;</code> använder följande attribut:\r\n    aria-disabled (inaktiv/aktiv), aria-label (stäng). <br><br>Läs mer om hur fokus ska flyttas efter knappaktivering på dokumentationssidan\r\n    för\r\n    <a href=\"../textbuttons\">buttons</a> under Tillgänglighet.\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/closebutton/closebutton.component.ts":
/*!******************************************************!*\
  !*** ./src/app/closebutton/closebutton.component.ts ***!
  \******************************************************/
/*! exports provided: ClosebuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosebuttonComponent", function() { return ClosebuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClosebuttonComponent = /** @class */ (function () {
    function ClosebuttonComponent() {
    }
    ClosebuttonComponent.prototype.ngOnInit = function () {
    };
    ClosebuttonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closebutton',
            template: __webpack_require__(/*! ./closebutton.component.html */ "./src/app/closebutton/closebutton.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ClosebuttonComponent);
    return ClosebuttonComponent;
}());



/***/ }),

/***/ "./src/app/colours/colours.component.html":
/*!************************************************!*\
  !*** ./src/app/colours/colours.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Färgkarta'\">\r\n  </vgr-page-header>\r\n\r\n  <vgr-page-body>\r\n    <!-- Färger -->\r\n    <vgr-page-block class=\"column-layout\">\r\n      <div class=\"color-sample neutral--primary\">\r\n        <span class=\"color-sample__name\">Neutral primärfärg</span>\r\n        <span class=\"color-sample__code\">R: 49 G: 65 B: 82\r\n          <strong>#314152</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample neutral--primary-dimmed\">\r\n        <span class=\"color-sample__name\">Neutral primärfärg dimmad</span>\r\n        <span class=\"color-sample__code\">R: 234 G: 236 B: 237\r\n          <strong>#EAECED</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample neutral--secondary\">\r\n        <span class=\"color-sample__name\">Neutral sekundärfärg</span>\r\n        <span class=\"color-sample__code\">R: 53 G: 58 B: 62\r\n          <strong>#87939F</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample background-color--default\">\r\n        <span class=\"color-sample__name\">Bakgrund</span>\r\n        <span class=\"color-sample__code\">R: 240 G: 240 B: 240\r\n          <strong>#F0F0F0</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample background-color--text\">\r\n        <span class=\"color-sample__name\">Textfärg</span>\r\n        <span class=\"color-sample__code\">R: 30 G: 30 B: 30\r\n          <strong>#151515</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample red--primary\">\r\n        <span class=\"color-sample__name\">Röd primärfärg</span>\r\n        <span class=\"color-sample__code\">R: 157 G: 34 B: 53\r\n          <strong>#9D2235</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample red--primary-dimmed\">\r\n        <span class=\"color-sample__name\">Röd primärfärg dimmad</span>\r\n        <span class=\"color-sample__code\">R: 245 G: 232 B: 234\r\n          <strong>#F5E8EA</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample red--secondary\">\r\n        <span class=\"color-sample__name\">Röd sekundärfärg</span>\r\n        <span class=\"color-sample__code\">R: 186 G: 98 B: 113\r\n          <strong>#BA6271</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample blue--primary\">\r\n        <span class=\"color-sample__name\">Blå primärfärg</span>\r\n        <span class=\"color-sample__code\">R: 0 G: 98 B: 152\r\n          <strong>#006298</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample blue--primary-dimmed\">\r\n        <span class=\"color-sample__name\">Blå primärfärg dimmad</span>\r\n        <span class=\"color-sample__code\">R: 229 G: 239 B: 244\r\n          <strong>#E5EFF4</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample blue--secondary\">\r\n        <span class=\"color-sample__name\">Blå sekundärfärg</span>\r\n        <span class=\"color-sample__code\">R: 80 G: 143 B: 184\r\n          <strong>#508FB8</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample green--primary\">\r\n        <span class=\"color-sample__name\">Grön primärfärg</span>\r\n        <span class=\"color-sample__code\">R: 74 G: 119 B: 60\r\n          <strong>#4A773C</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample green--primary-dimmed\">\r\n        <span class=\"color-sample__name\">Grön primärfärg dimmad</span>\r\n        <span class=\"color-sample__code\">R: 236 G: 241 B: 235\r\n          <strong>#ECF1EB</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample green--secondary\">\r\n        <span class=\"color-sample__name\">Grön sekundärfärg</span>\r\n        <span class=\"color-sample__code\">R: 127 G: 162 B: 118\r\n          <strong>#7FA276</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample focus-color\">\r\n        <span class=\"color-sample__name\">Färg för fokusmarkering</span>\r\n        <span class=\"color-sample__code\">R: 74 G: 144 B: 226\r\n          <strong>#4a90e2</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample primary-color--success\">\r\n        <span class=\"color-sample__name\">Färg för success</span>\r\n        <span class=\"color-sample__code\">R: 61 G: 118 B: 48\r\n          <strong>#3D7630</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample primary-color--error\">\r\n        <span class=\"color-sample__name\">Färg för error</span>\r\n        <span class=\"color-sample__code\">R: 140 G: 25 B: 25\r\n          <strong>#8C1919</strong>\r\n        </span>\r\n      </div>\r\n      <div class=\"color-sample secondary-color--error\">\r\n        <span class=\"color-sample__name\">Sekundärfärg för error</span>\r\n        <span class=\"color-sample__code\">R: 249 G: 222 B: 222\r\n          <strong>#f9dede</strong>\r\n        </span>\r\n      </div>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/colours/colours.component.scss":
/*!************************************************!*\
  !*** ./src/app/colours/colours.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/colours/colours.component.ts":
/*!**********************************************!*\
  !*** ./src/app/colours/colours.component.ts ***!
  \**********************************************/
/*! exports provided: ColoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoursComponent", function() { return ColoursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColoursComponent = /** @class */ (function () {
    function ColoursComponent() {
    }
    ColoursComponent.prototype.ngOnInit = function () {
    };
    ColoursComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colours',
            template: __webpack_require__(/*! ./colours.component.html */ "./src/app/colours/colours.component.html"),
            styles: [__webpack_require__(/*! ./colours.component.scss */ "./src/app/colours/colours.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColoursComponent);
    return ColoursComponent;
}());



/***/ }),

/***/ "./src/app/component-docs/component-docs.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component-docs/component-docs.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page class=\"no-sort\">\r\n  <vgr-page-header [title]=\"componentName\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list [allowMultipleExpandedItems]=\"true\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header [width]=\"20\">Dokumentation för {{componentName}}</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item [expanded]=\"true\">\r\n          <vgr-list-item-header>\r\n            <h4>Översikt</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"content-overview\">\r\n              <!-- Översikt -->\r\n              <ng-content select=\".docs__overview\"></ng-content>\r\n            </div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- Exempel -->\r\n            <ng-content select=\".docs__examples\"></ng-content>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>API</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- API -->\r\n            <ng-content select=\".docs__api\"></ng-content>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Tillgänglighet</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <!-- tILLGÄNGLIGHET -->\r\n            <ng-content select=\".docs__wcag\"></ng-content>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/component-docs/component-docs.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component-docs/component-docs.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component-docs/component-docs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component-docs/component-docs.component.ts ***!
  \************************************************************/
/*! exports provided: ComponentDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocsComponent", function() { return ComponentDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentDocsComponent = /** @class */ (function () {
    function ComponentDocsComponent() {
    }
    ComponentDocsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentDocsComponent.prototype, "componentName", void 0);
    ComponentDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-docs',
            template: __webpack_require__(/*! ./component-docs.component.html */ "./src/app/component-docs/component-docs.component.html"),
            styles: [__webpack_require__(/*! ./component-docs.component.scss */ "./src/app/component-docs/component-docs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentDocsComponent);
    return ComponentDocsComponent;
}());



/***/ }),

/***/ "./src/app/datepicker/datepicker.component.html":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Datepicker'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-datepicker&gt;</code> är en kalender där användaren kan välja ett datum. I kalendern visas valt datum (satt\r\n      av användaren eller av systemet) och dagens datum.\r\n      <br>\r\n    </p>\r\n    <br>\r\n    <div class=\"row-layout\">\r\n      <vgr-datepicker></vgr-datepicker>\r\n    </div>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Default formaterad</p>\r\n          <vgr-datepicker (selectedDateChanged)=\"lastselectedDate=$event\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          Med defaultinställningar sätts min- och maxdatum till innevarande år.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>yyyy MM dd</p>\r\n\r\n          <vgr-datepicker [selectedDateFormat]=\"'yyyy MM dd'\" [selectedDate]=\"tomorrow\" (selectedDateChanged)=\"lastselectedDate=$event\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är\r\n            <code>selectedDate</code> dagens datum + 1 dag.\r\n            <code>minDate</code> och\r\n            <code>maxDate</code> är ej satta, perioden blir då samma som exemplet ovan.\r\n            <br> Datumformat: yyyy MM dd\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Med min- och maxdatum innan innevarande datum.</p>\r\n\r\n          <vgr-datepicker [minDate]=\"minDate20160515\" [maxDate]=\"maxDate20161225\" (selectedDateChanged)=\"lastselectedDate=$event\" noDateSelectedLabel=\"Välj ett datum\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är\r\n            <code>minDate</code> satt till 2016-05-15 och\r\n            <code>maxDate</code> är 2016-12-25. Notera att min och maxdatum är satt innan innevarande datum. Det går endast att\r\n            nagivera mellan maj 2016 och fram till nuvarande år och månad. Hela maj visas för 2016 även fast mindatumet är\r\n            satt 2016-05-15. Det går bara att välja de dagar som ingår i perioden mellan min och max.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Disabled</p>\r\n          <vgr-datepicker [disabled]=\"isReadonlyAndDisabled\" [selectedDate]=\"selectedDate\" (selectedDateChanged)=\"lastselectedDate=$event\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i disable-läge och\r\n            <code>selectedDate</code> satt till 2017-07-25</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Readonly</p>\r\n          <vgr-datepicker [selectedDate]=\"selectedDate\" [readonly]=\"isReadonlyAndDisabled\" (selectedDateChanged)=\"lastselectedDate=$event\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i readonly-läge och\r\n            <code>selectedDate</code> satt till 2017-07-25</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Disabled inget valt datum</p>\r\n          <vgr-datepicker [disabled]=\"isReadonlyAndDisabled\" [selectedDate]=\"\" (selectedDateChanged)=\"lastselectedDate=$event\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i disable-läge och inget datum valt</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Readonly inget valt datum</p>\r\n          <vgr-datepicker [selectedDate]=\"\" [readonly]=\"isReadonlyAndDisabled\" (selectedDateChanged)=\"lastselectedDate=$event\"></vgr-datepicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i readonly-läge och inget datum valt</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <br>\r\n      <p>Växla readonly och disabled</p>\r\n      <vgr-lock-button (lockChanged)=\"isReadonlyAndDisabled = !isReadonlyAndDisabled;\"></vgr-lock-button>\r\n    </div>\r\n    <div style=\"margin-top:20px\">\r\n      <span>Senast valt datum: </span>\r\n      <span>{{lastselectedDate | date : 'yyyy MMM dd'}}</span>\r\n    </div>\r\n    <br>\r\n    <br> Under \"kodexempel\" finns exempel på hur datepicker-komponenten kan användas i Angular Reactive Forms:\r\n    <br>\r\n    <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>selectedDateFormat: string</td>\r\n        <td>Datumformatet på valt datum i dropdownen.</td>\r\n        <td>\r\n          [selectedDateFormat]=yyyymmDD\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>tooltipDateFormat: string</td>\r\n        <td>Datumformatet på valt datum i dropdownens tooltip.</td>\r\n        <td>\r\n          [selectedDateFormat]=yyyymmDD\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>minDate: Date</td>\r\n        <td>Sätter vilket datum kalendern börjar på. Sätts inget datum är standard första dagen i januari månad för innevarande\r\n          år.\r\n        </td>\r\n        <td>\r\n          [minDate]=someDate\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>maxDate: Date</td>\r\n        <td>Sätter vilket datum kalendern slutar på. Sätts inget datum är standard sista dagen i december månad för innevarande\r\n          år.\r\n        </td>\r\n        <td>\r\n          [maxDate]=someDate\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>selectedDate: Date</td>\r\n        <td> Valt datum som visas i kalendern. När kalendern instansieras och man öppnar den första gången så positioneras man\r\n          på den valda månaden. Om inget datum är valt så positioneras man på dagens datum.</td>\r\n        <td>\r\n          [selectedDate] = someDate\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled: boolean</td>\r\n        <td>Inaktiverar kalendern.</td>\r\n        <td>\r\n          [disabled]=true/false\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>selectedDateChanged = EventEmitter&lt;date&gt;\r\n        </td>\r\n        <td>Event som trigas när man väljer ett datum i kalendern.</td>\r\n        <td>\r\n          (selectedDateChanged)=\"selectedDate=$event\"\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>readonly: boolean\r\n        </td>\r\n        <td>Om datepicker är satt som readonly så ska bara textfält med datum visas. Om datum är förvalt så visas det som är\r\n          satt i\r\n          <code>selectedDate</code> annars visas ingenting. Datumet är formaterat på\r\n          <code>selectedDateFormat</code>.</td>\r\n        <td>\r\n          [readonly]=\"true/false\"\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>showValidation: boolean</td>\r\n        <td>Anger om valideringsfel ska visas eller ej. Default = true.</td>\r\n        <td>[showValidation]=\"true\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      <i>Under utveckling</i>\r\n    </p>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.scss":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.ts ***!
  \****************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.minDate20160515 = new Date();
        this.maxDate20161225 = new Date();
        this.tomorrow = new Date();
        var today = new Date();
        this.tomorrow.setDate(today.getDate() + 1);
        this.selectedDate = new Date(2017, 6, 25);
        this.isReadonlyAndDisabled = true;
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.minDate20160515 = new Date(2016, 4, 15);
            _this.maxDate20161225 = new Date(2016, 11, 25);
        }, 5000);
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/datepicker/datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/dropdownmultiselect/dropdownmultiselect.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dropdownmultiselect/dropdownmultiselect.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Dropdown Multiselect'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-dropdown-multiselect&gt;</code> innehåller en lista där man kan välja flera alternativ.\r\n      <br>- Kompletteras med filter och ett \"visa alla\" alternativ över 20 items.\r\n      <br>- Kompletteras med scroll vid över 6 items.\r\n      <br> Dropdown stängs inte när man väljer alternativ, förutom vid val av \"Välja alla\".\r\n      <br>\r\n      <vgr-dropdown-multiselect [items]=\"dropDownItems6\"></vgr-dropdown-multiselect>\r\n    </p>\r\n\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div class=\"row-layout\">\r\n      <div>\r\n        <p>6 items (förvald)</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems6AndSelected\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>7 items</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems7\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>25 items</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems25All\" [selectAllItemText]=\"'Välj alla alternativ'\" [allItemsSelectedLabel]=\"'Alla'\"\r\n          [showAllItemText]=\"'Visa alla alternativ'\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>200 items</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems200\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n    </div>\r\n    <div class=\"row-layout\">\r\n      <div>\r\n        <p>Disabled</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems6AndSelected\" [disabled]=\"isReadonlyAndDisabled\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>Readonly</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems6AndSelectedReadonly\" [readonly]=\"isReadonlyAndDisabled\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>Disabled (inget valt)</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems7\" [disabled]=\"isReadonlyAndDisabled\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>Readonly (inget valt)</p>\r\n        <vgr-dropdown-multiselect [items]=\"dropDownItems7Readonly\" [readonly]=\"isReadonlyAndDisabled\" (selectionChanged)=\"onMultipleSelectionChanged($event)\"></vgr-dropdown-multiselect>\r\n      </div>\r\n      <div>\r\n        <p>Växla readonly och disabled</p>\r\n        <vgr-lock-button (lockChanged)=\"isReadonlyAndDisabled = !isReadonlyAndDisabled;\"></vgr-lock-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <br>\r\n      <span>Senaste val:</span>\r\n      <span>{{lastMultipleSelection}}</span>\r\n    </div>\r\n    <br>\r\n    <br> Under \"kodexempel\" finns exempel på hur dropdownmulti-komponenten kan användas i Angular Reactive Forms:\r\n    <br>\r\n    <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n  </div>\r\n\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table \">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          items : DropdownItem&lt;T&gt;[]\r\n        </td>\r\n        <td>Samling av\r\n          <code>DropdownItem&lt;T&gt;</code> som utgör valbara alternativ</td>\r\n        <td>[items]=\"[item1, item2, ...] \"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          disabled : boolean\r\n        </td>\r\n        <td>Defaultvärde false</td>\r\n        <td>[disabled]=\"true \"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          showAllItemText : string\r\n        </td>\r\n        <td>Värde för att sätta vilken text det skall stå på raden för att ta bort filtrering och visa alla. Defaultvärde \"Visa\r\n          alla\"\r\n        </td>\r\n        <td>[showAllItemText]=\"Visa alla alternativ\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          noItemSelectedLabel : string\r\n        </td>\r\n        <td>Värde för att sätta vilken text det skall stå i dropdownen då man inte valt något värde. Defaultvärde \"Välj\"\r\n        </td>\r\n        <td>[noItemSelectedLabel]=\"Välj alternativ\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n\r\n          allItemsSelectedLabel : string\r\n        </td>\r\n        <td>Värde för att sätta vilken text det skall stå i dropdownen då man valt alla. Defaultvärde \"Alla\"\r\n        </td>\r\n        <td>[allItemsSelectedLabel]=\"Alla alternativ valda\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          selectAllItemText : string\r\n        </td>\r\n        <td>Värde för att sätta vilken text det skall stå på alternativet för att välja alla. Defaultvärde \"Välj alla\"\r\n        </td>\r\n        <td>[selectAllItemText]=\"Välj alla alternativ\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td> selectionChanged : EventEmitter&lt;any[]&gt;</td>\r\n        <td>Event som triggas när man väljer ett alternativ i dropdownen</td>\r\n        <td>(selectionChanged)=\"onMultipleSelectionChanged($event) \"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>readonly : boolean</td>\r\n        <td>Om dropdownen är satt som readonly så ska en lista med valda värden visas. Om inget värde är satt så visas ingenting.\r\n        </td>\r\n        <td>\r\n          [readonly]=\"true/false\"\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>showValidation: boolean</td>\r\n        <td>Anger om valideringsfel ska visas eller ej. Default = true.</td>\r\n        <td>[showValidation]=\"true\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      <code>&lt;vgr-dropdown-multiselect&gt;</code> har en intern div vars roll är satt till dropdown. Listan med val har rollen\r\n      listbox och valen rollen option. Förutom rollen så används attributen: attr.aria-disabled (inaktiv/aktiv), attr.aria-selected\r\n      (vald/ej vald) och attr.aria-labelledby (pekning till interna label på de val man har valt.\r\n    </p>\r\n  </div>\r\n\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/dropdownmultiselect/dropdownmultiselect.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dropdownmultiselect/dropdownmultiselect.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dropdownmultiselect/dropdownmultiselect.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dropdownmultiselect/dropdownmultiselect.component.ts ***!
  \**********************************************************************/
/*! exports provided: DropdownmultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownmultiselectComponent", function() { return DropdownmultiselectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownmultiselectComponent = /** @class */ (function () {
    function DropdownmultiselectComponent() {
        this.dropDownItems6 = this.getDemoItemsMixedName(6);
        this.dropDownItems6AndSelected = this.getDemoItemsWithSelected(6, [1]);
        this.dropDownItems6AndThreeSelected = this.getDemoItemsWithSelected(6, [0, 2, 5]);
        this.dropDownItems7 = this.getDemoItemsMixedName(7);
        this.dropDownItems25All = this.getDemoItems(25);
        this.dropDownItems25 = this.getDemoItemsLongName(25);
        this.dropDownItems200 = this.getDemoItemsMixedName(200);
        this.dropDownItems6AndSelectedReadonly = this.getDemoItemsWithSelected(6, [1]);
        this.dropDownItems7Readonly = this.getDemoItemsMixedName(7);
        this.isReadonlyAndDisabled = true;
    }
    DropdownmultiselectComponent.prototype.ngOnInit = function () {
    };
    DropdownmultiselectComponent.prototype.getDemoItems = function (numberOfItems) {
        var items = [];
        for (var i = 1; i <= numberOfItems; i++) {
            items.push({ value: "Min mottagning " + i, displayName: "Min mottagning " + i });
        }
        return items;
    };
    DropdownmultiselectComponent.prototype.getDemoItemsLongName = function (numberOfItems) {
        var items = [];
        for (var i = 1; i <= numberOfItems; i++) {
            items.push({ value: i + " - En mottagning med l\u00E5ngt namn i landstinget", displayName: i + " - En mottagning med l\u00E5ngt namn i landstinget", displayNameWhenSelected: "Alt " + i });
        }
        return items;
    };
    DropdownmultiselectComponent.prototype.getDemoItemsMixedName = function (numberOfItems) {
        var items = [];
        var demoitems = ['En mottagning med långt namn', 'Min mottagning', 'Hennes mottagning', 'Hans mottagning', 'Evas mottagning', 'Karl-Johan Fredrikssons mottagning - Östra Göteborg'];
        for (var i = 1; i <= numberOfItems; i++) {
            var index = this.getRandomInt(0, 6);
            items.push({ value: "" + demoitems[index], displayName: "" + demoitems[index] });
        }
        return items;
    };
    DropdownmultiselectComponent.prototype.getDemoItemsWithSelected = function (numberOfItems, selectedIndexes) {
        var list = this.getDemoItems(numberOfItems);
        list.forEach(function (dpItem, index) {
            if (dpItem != null) {
                if (selectedIndexes.indexOf(index) > -1) {
                    dpItem.selected = true;
                }
            }
        });
        return list;
    };
    DropdownmultiselectComponent.prototype.onMultipleSelectionChanged = function (selectedItems) {
        this.lastMultipleSelection = selectedItems.join(',');
    };
    DropdownmultiselectComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
    };
    DropdownmultiselectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdownmultiselect',
            template: __webpack_require__(/*! ./dropdownmultiselect.component.html */ "./src/app/dropdownmultiselect/dropdownmultiselect.component.html"),
            styles: [__webpack_require__(/*! ./dropdownmultiselect.component.scss */ "./src/app/dropdownmultiselect/dropdownmultiselect.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownmultiselectComponent);
    return DropdownmultiselectComponent;
}());



/***/ }),

/***/ "./src/app/dropdowns/dropdowns.component.html":
/*!****************************************************!*\
  !*** ./src/app/dropdowns/dropdowns.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Dropdown'\">\r\n\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-dropdown&gt;</code> innehåller en lista över valbara alternativ.\r\n      <br>- Kompletteras med filter och ett\"visa alla\" alternativ över 20 items.\r\n      <br>- Kompletteras med scroll vid över 8 items.\r\n      <br>\r\n      <vgr-dropdown [items]=\"dropDownItems8\"></vgr-dropdown>\r\n    </p>\r\n\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"docs__examples\">\r\n    <div class=\"row-layout\">\r\n      <div>\r\n        <p>8 items (förvald)</p>\r\n        <vgr-dropdown [items]=\"dropDownItems8AndSelected\" (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>9 items</p>\r\n        <vgr-dropdown [items]=\"dropDownItems9\" [noItemSelectedLabel]=\"'Välj alternativ'\" (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>25 items</p>\r\n        <vgr-dropdown [items]=\"dropDownItems25All\" [noItemSelectedLabel]=\"'Välj nåt då'\" [showAllItemText]=\"'Visa alla alternativ'\"\r\n          (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>200 items</p>\r\n        <vgr-dropdown [items]=\"dropDownItems200\" [noItemSelectedLabel]=\"'Välj alternativ'\" (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"row-layout\">\r\n      <div>\r\n        <p>Disabled</p>\r\n        <vgr-dropdown [items]=\"dropDownItems8AndSelected\" [noItemSelectedLabel]=\"'Välj alternativ'\" [disabled]=\"isReadonlyAndDisabled\"\r\n          (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>Readonly</p>\r\n        <vgr-dropdown [items]=\"dropDownItems8AndSelected\" [noItemSelectedLabel]=\"'Välj alternativ'\" [readonly]=\"isReadonlyAndDisabled\"\r\n          (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>Disabled (inget valt)</p>\r\n        <vgr-dropdown [items]=\"dropDownItems9\" [noItemSelectedLabel]=\"'Välj alternativ'\" [disabled]=\"isReadonlyAndDisabled\" (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>Readonly (inget valt)</p>\r\n        <vgr-dropdown [items]=\"dropDownItems9\" [noItemSelectedLabel]=\"'Välj alternativ'\" [readonly]=\"isReadonlyAndDisabled\" (selectedChanged)=\"onSingleSelectionChanged($event)\"></vgr-dropdown>\r\n      </div>\r\n      <div>\r\n        <p>Växla readonly och disabled</p>\r\n        <vgr-lock-button (lockChanged)=\"isReadonlyAndDisabled = !isReadonlyAndDisabled;\"></vgr-lock-button>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <br>\r\n      <span>Senaste val:</span>\r\n      <span>{{lastSingleSelection}}</span>\r\n    </div>\r\n    <br>\r\n    <br> Under \"kodexempel\" finns exempel på hur dropdown-komponenten kan användas i Angular Reactive Forms:\r\n    <br>\r\n    <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n  </div>\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n\r\n          items : DropdownItem&lt;T&gt;[]\r\n        </td>\r\n        <td>Samling av\r\n          <code>DropdownItem&lt;T&gt;</code> som utgör valbara alternativ</td>\r\n        <td>[items]=\"[item1, item2, ...]\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          disabled : boolean\r\n        </td>\r\n        <td>Defaultvärde false</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          showAllItemText : string\r\n        </td>\r\n        <td>Värde för att sätta vilken text det skall stå på raden för att ta bort filtrering och visa alla. Defaultvärde\"Visa\r\n          alla\"\r\n        </td>\r\n        <td>[showAllItemText]=\"Visa alla alternativ\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          noItemSelectedLabel : string\r\n        </td>\r\n        <td>Värde för att sätta vilken text det skall stå i dropdownen då man inte valt något värde\r\n        </td>\r\n        <td>[noItemSelectedLabel]=\"Välj alternativ\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td> onSelectedChanged : EventEmitter&lt;any&gt;</td>\r\n        <td>Event som triggas när man väljer ett nytt alternativ i dropdownen</td>\r\n        <td>(selectedChanged)=\"onSelectedChanged($event)\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>showValidation: boolean</td>\r\n        <td>Anger om valideringsfel ska visas eller ej. Default = true.</td>\r\n        <td>[showValidation]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>readonly : boolean</td>\r\n        <td>Om dropdownen är satt som readonly så ska bara textfält med valt värde visas. Om inget värde är satt så visas ingenting.\r\n        </td>\r\n        <td>\r\n          [readonly]=\"true/false\"\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      <code>&lt;vgr-dropdown&gt;</code> har en intern div vars roll är satt till combobox. Förutom rollen så används attributen:\r\n      attr.aria-disabled (inaktiv/aktiv) och attr.aria-readonly (skrivskyddad/ej skrivskyddad)\r\n    </p>\r\n  </div>\r\n\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/dropdowns/dropdowns.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dropdowns/dropdowns.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dropdowns/dropdowns.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dropdowns/dropdowns.component.ts ***!
  \**************************************************/
/*! exports provided: DropdownsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function() { return DropdownsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent() {
        this.dropDownItems25 = this.getDemoItems(25);
        this.dropDownItems200 = this.getDemoItemsMixedName(200);
        this.dropDownItems8 = this.getDemoItemsMixedName(8);
        this.dropDownItems8AndSelected = this.getDemoItemsWithOneSelected(8, 2);
        this.dropDownItems9 = this.getDemoItemsLongName(9);
        this.dropDownItems25All = this.getDemoItemsMixedName(25);
        this.isReadonlyAndDisabled = true;
    }
    DropdownsComponent.prototype.ngOnInit = function () {
    };
    DropdownsComponent.prototype.getDemoItems = function (numberOfItems) {
        var items = [];
        for (var i = 1; i <= numberOfItems; i++) {
            items.push({ value: i + " - Min mottagning", displayName: i + " - Min mottagning", displayNameWhenSelected: "Alt " + i });
        }
        return items;
    };
    DropdownsComponent.prototype.getDemoItemsLongName = function (numberOfItems) {
        var items = [];
        for (var i = 1; i <= numberOfItems; i++) {
            items.push({ value: i + " - En mottagning med l\u00E5ngt namn i landstinget", displayName: i + " - En mottagning med l\u00E5ngt namn i landstinget", displayNameWhenSelected: "Alt " + i });
        }
        return items;
    };
    DropdownsComponent.prototype.getDemoItemsMixedName = function (numberOfItems) {
        var items = [];
        var demoitems = ['En mottagning med långt namn', 'Min mottagning', 'Hennes mottagning', 'Hans mottagning', 'Evas mottagning', 'Karl-Johan Fredrikssons mottagning - Östra Göteborg', 'Karl-Johan Fredrikssons mottagning - Västra Göteborg'];
        for (var i = 1; i <= numberOfItems; i++) {
            var index = this.getRandomInt(0, 7);
            items.push({ value: i + " - " + demoitems[index], displayName: "" + demoitems[index] });
        }
        return items;
    };
    DropdownsComponent.prototype.getDemoItemsWithOneSelected = function (numberOfItems, selectedIndex) {
        var list = this.getDemoItemsMixedName(numberOfItems);
        list.forEach(function (dpItem, index) {
            if (dpItem != null) {
                if (index === selectedIndex) {
                    dpItem.selected = true;
                }
            }
        });
        return list;
    };
    DropdownsComponent.prototype.onSingleSelectionChanged = function (selectedItemValue) {
        this.lastSingleSelection = selectedItemValue;
    };
    DropdownsComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
    };
    DropdownsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdowns',
            template: __webpack_require__(/*! ./dropdowns.component.html */ "./src/app/dropdowns/dropdowns.component.html"),
            styles: [__webpack_require__(/*! ./dropdowns.component.scss */ "./src/app/dropdowns/dropdowns.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownsComponent);
    return DropdownsComponent;
}());



/***/ }),

/***/ "./src/app/examples-listwithcards/examples-listwithcards.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/examples-listwithcards/examples-listwithcards.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Enheter'\">\r\n\r\n    <div class=\"column-layout column-layout--pull-left\">\r\n      <h3>Filtrera enheter</h3>\r\n      <div class=\"row-layout row-layout--equal-height\">\r\n        <vgr-filter-textbox (valueChanged)=\"filtertext = $event\"></vgr-filter-textbox>\r\n        <vgr-button (click)=\"openActionPanel()\">Lägg till ny enhet</vgr-button>\r\n      </div>\r\n      <vgr-checkbox (checkedChanged)=\"includeInactiveUnits = $event\" [checked]=\"includeInactiveUnits\" [label]=\"'Inkludera stängda enheter'\"></vgr-checkbox>\r\n    </div>\r\n  </vgr-page-header>\r\n  <vgr-action-panel (expandedChanged)=\"onPanelExpandedChanged($event)\" [showCloseButton]=\"!addNewUnit && showActionPanel\" [expanded]=\"showActionPanel\"\r\n    [title]=\"'Lägg till ny enhet'\">\r\n    <div *ngIf=!addNewUnit>\r\n      <div class=\"row-layout\">\r\n        <label style=\"width: 150px\">Välj enhet</label>\r\n        <vgr-dropdown [items]=\"newUnits\" (selectedChanged)=\"onSelectedChangedUnit($event)\"></vgr-dropdown>\r\n        <vgr-button secondary=true [disabled]=!itemSelected (click)=\"onNewUnitClick()\">Lägg till</vgr-button>\r\n      </div>\r\n\r\n    </div>\r\n    <vgr-card *ngIf=addNewUnit>\r\n      <vgr-card-header>\r\n        <div class=\"row-layout\">\r\n          <label style=\"width:200px\">Enhet</label>\r\n          <label>{{selectedUnit}}</label>\r\n        </div>\r\n        <div class=\"flex-right\">\r\n          <vgr-button class=\"enhet-card__abort-button\" (click)=\"onNewUnitCancel()\" [secondary]=\"true\">Avbryt</vgr-button>\r\n          <vgr-button [secondary]=\"true\" (click)=\"onNewUnitSave()\">Spara enhet</vgr-button>\r\n        </div>\r\n      </vgr-card-header>\r\n      <vgr-card-column>\r\n        <form [formGroup]=\"newUnitForm\">\r\n          <vgr-card-section [title]=\" 'Enhetsinformation'\" expanded=\"true\" [readonly]=\"newCardLocked\">\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value [title]=\" 'HSA-id'\" [slim]=\"newCardLocked\">\r\n                <vgr-input [readonly]=\"true\" formControlName=\"hsaid\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\"'Avtalskod*'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"avtalskod\" [showValidation]=\"newUnitForm.controls.avtalskod.touched || submitted\" [errorMessage]=\"validationMessages.avtalskod\"\r\n                  [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\" 'Enhetskod*'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"enhetskod\" [showValidation]=\"newUnitForm.controls.enhetskod.touched || submitted\" [errorMessage]=\"validationMessages.enhetskod\"\r\n                  [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n            <form [formGroup]=\"onChangeForm\">\r\n              <vgr-title-value-layout>\r\n                <vgr-title-value [title]=\" 'Nämnd*'\" [slim]=\"newCardLocked\">\r\n                  <vgr-dropdown formControlName=\"namnd\" [showValidation]=\"onChangeForm.controls.namnd.touched || submitted\" [items]=\"examplenamnd\"\r\n                    [noItemSelectedLabel]=\" 'Välj nämnd'\" [readonly]=\"newCardLocked\"></vgr-dropdown>\r\n                </vgr-title-value>\r\n                <vgr-title-value [title]=\" 'Avtalsperiod*'\" [slim]=\"newCardLocked\">\r\n                  <div class=\"row-layout row-layout--tight\">\r\n                    <vgr-monthpicker formControlName=\"avtalsperiod_start\" [showValidation]=\"onChangeForm.controls.avtalsperiod_start.touched || submitted\"\r\n                      [readonly]=\"newCardLocked\"></vgr-monthpicker>\r\n                    <vgr-monthpicker formControlName=\"avtalsperiod_slut\" [showValidation]=\"onChangeForm.controls.avtalsperiod_slut.touched || submitted\"\r\n                      [readonly]=\"newCardLocked\"></vgr-monthpicker>\r\n                  </div>\r\n                </vgr-title-value>\r\n              </vgr-title-value-layout>\r\n            </form>\r\n          </vgr-card-section>\r\n          <vgr-card-section [title]=\" 'Enhetschef'\" [expanded]=\"true\" [readonly]=\"newCardLocked\">\r\n            <vgr-title-value-layout>\r\n              <!-- <vgr-title-value [title]=\" 'Lägg till enhetschef*'\" *ngIf=\"!cardLocked\">\r\n                  <div class=\"column-layout column-layout--pull-left column-layout--component\">\r\n                    <vgr-filter-textbox></vgr-filter-textbox>\r\n                    <vgr-button style=\"padding-left:63%\" [secondary]=\"true\" (click)=\"onAddEnhetschef(newUnit)\">Lägg till</vgr-button>\r\n                  </div>\r\n                </vgr-title-value> -->\r\n              <vgr-title-value [title]=\" 'Enhetschef*'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"enhetschef\" [showValidation]=\"newUnitForm.controls.enhetschef.touched || submitted\" [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\" 'Telefon'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"enhetschef_telefon\" [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\" 'E-post'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"enhetschef_epost\" [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n          </vgr-card-section>\r\n          <vgr-card-section [title]=\" 'Avtalspart'\" [expanded]=\"true\" [readonly]=\"newCardLocked\">\r\n            <form [formGroup]=\"agarOwnerForm\">\r\n              <vgr-title-value-layout>\r\n                <vgr-title-value [title]=\" 'Ägare*'\" [slim]=\"newCardLocked\">\r\n                  <vgr-dropdown formControlName=\"agare\" [showValidation]=\"agarOwnerForm.controls.agare.touched || submitted\" [items]=\"exampleagare\"\r\n                    [noItemSelectedLabel]=\"'Välj ägare'\" [readonly]=\"newCardLocked\"></vgr-dropdown>\r\n                </vgr-title-value>\r\n              </vgr-title-value-layout>\r\n            </form>\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value [title]=\" 'Ägarkod'\" [slim]=\"newCardLocked\">\r\n                <vgr-input [readonly]=\"true\" formControlName=\"agarkod\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\" 'Ägarform'\" [slim]=\"newCardLocked\">\r\n                <vgr-input [readonly]=\"true\" formControlName=\"agarform\"></vgr-input>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n            <form [formGroup]=\"privateOwnerForm\">\r\n              <vgr-title-value-layout>\r\n                <vgr-title-value *ngIf=\"newUnitForm.controls.agarform.value==='Privat'\" [title]=\" 'Organisationsnr*'\" [slim]=\"newCardLocked\">\r\n                  <vgr-input formControlName=\"organisationsnummer\" [showValidation]=\"privateOwnerForm.controls.organisationsnummer.touched || submitted\"\r\n                    [readonly]=\"newCardLocked\"></vgr-input>\r\n                </vgr-title-value>\r\n                <vgr-title-value *ngIf=\"newUnitForm.controls.agarform.value==='Privat'\" [title]=\" 'Utbetalningssätt*'\" [slim]=\"newCardLocked\">\r\n                  <vgr-dropdown formControlName=\"utbetalningssatt\" [showValidation]=\"privateOwnerForm.controls.utbetalningssatt.touched || submitted\"\r\n                    [items]=\"exempelUtbetalningssatt\" [noItemSelectedLabel]=\" 'Välj Utbetalningssätt'\" [readonly]=\"newCardLocked\"></vgr-dropdown>\r\n                </vgr-title-value>\r\n                <vgr-title-value *ngIf=\"newUnitForm.controls.agarform.value==='Privat'\" [title]=\" 'Kontonummer*'\" [slim]=\"newCardLocked\">\r\n                  <vgr-input formControlName=\"kontonummer\" [showValidation]=\"privateOwnerForm.controls.kontonummer.touched || submitted\" [readonly]=\"newCardLocked\"></vgr-input>\r\n                </vgr-title-value>\r\n              </vgr-title-value-layout>\r\n            </form>\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value [title]=\" 'Leverantörsid RD*'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"leverantorsid\" [showValidation]=\"newUnitForm.controls.leverantorsid.touched || submitted\" [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\" 'Kundreferens'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"kundreferens\" [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n          </vgr-card-section>\r\n        </form>\r\n      </vgr-card-column>\r\n      <vgr-card-column>\r\n        <vgr-card-section [title]=\" 'Adressinformation'\" [readonly]=\"true\" [expanded]=\"true\">\r\n          <vgr-title-value-layout>\r\n            <vgr-title-value [title]=\" 'Kommun'\" [slim]=\"newCardLocked\">\r\n              <span>{{newUnit?.details.kommun}}</span>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Kommunkod'\" [slim]=\"newCardLocked\">\r\n              <span>{{newUnit?.details.kommunkod}}</span>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Postadress'\" [slim]=\"true\">\r\n              <span>{{newUnit?.details.postadress_gata}}\r\n                <br> {{newUnit?.details.postadress_postnummer}}\r\n                <br> {{newUnit?.details.postadress_stad}}\r\n              </span>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Besöksadress'\" [slim]=\"true\">\r\n              <span>{{newUnit?.details.besoksadress_gata}}\r\n                <br> {{newUnit?.details.besoksadress_postnummer}}\r\n                <br> {{newUnit?.details.besoksadress_stad}}\r\n              </span>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Geokod (PT90)'\" [slim]=\"newCardLocked\">\r\n              <span>{{newUnit?.details.geokod}}</span>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Telefon'\" [slim]=\"newCardLocked\">\r\n              <span>{{newUnit?.details.telefon}}</span>\r\n            </vgr-title-value>\r\n          </vgr-title-value-layout>\r\n        </vgr-card-section>\r\n\r\n        <vgr-card-section [title]=\" 'Ersättningsgrundande information'\" [expanded]=\"true\" [readonly]=\"newCardLocked\">\r\n          <form [formGroup]=\"newUnitForm\">\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value [title]=\" 'Medverkan i familjecentral* '\" [slim]=\"newCardLocked\">\r\n                <vgr-dropdown formControlName=\"medverkanIFamiljecentral\" [items]=\"exempelMedverkanIfamiljecentral\" [showValidation]=\"newUnitForm.controls.medverkanIFamiljecentral.touched || submitted\"\r\n                  [noItemSelectedLabel]=\" 'Välj'\" [readonly]=\"newCardLocked\"></vgr-dropdown>\r\n              </vgr-title-value>\r\n              <vgr-title-value [title]=\" 'Regionsövergripande grupper (kr/månad)'\" [slim]=\"newCardLocked\">\r\n                <vgr-input formControlName=\"regionsovergripandegrupper\" [readonly]=\"newCardLocked\"></vgr-input>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n          </form>\r\n        </vgr-card-section>\r\n\r\n      </vgr-card-column>\r\n    </vgr-card>\r\n  </vgr-action-panel>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list (sortChanged)=\"onSortChanged($event)\" [notification]=\"listNotification\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"enhet\" [sortDirection]=\"sortDirections.Ascending\">Enhet</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" align=\"left\" sortKey=\"hsaid\">HSA-ID</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"3\" sortKey=\"agare\">Ägare</vgr-list-column-header>\r\n          <vgr-list-column-header align=\"right\" width=\"2\" sortKey=\"enhetskod\">Enhetskod</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"namnd\">Nämnd</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item *ngFor=\"let row of exampleData | unitfilter:filtertext: includeInactiveUnits\" [notification]=\"row.notification\"\r\n          (expandedChanged)=\"onExpandedChanged($event,row)\" (notificationChanged)=\"removeNotification($event,row)\">\r\n          <vgr-list-item-header>\r\n            <vgr-list-column width=\"5\">{{row.previewObject.enhet}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.previewObject.hsaid}}</vgr-list-column>\r\n            <vgr-list-column width=\"3\">{{row.previewObject.agare}}</vgr-list-column>\r\n            <vgr-list-column align=\"right\" width=\"2\">{{row.previewObject.enhetskod}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.previewObject.namnd}}</vgr-list-column>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div *ngIf=\"row.previewObject.vald\">\r\n              <vgr-card>\r\n                <vgr-card-header>\r\n                  <div class=\"row-layout\">\r\n                    <label style=\"width:189px\">Version</label>\r\n                    <vgr-dropdown #unitVersions (selectedChanged)=\"onSelectedChangedVersion($event, row.previewObject)\" [items]=\"exempelVersions\"></vgr-dropdown>\r\n                  </div>\r\n                  <div class=\"flex-right\">\r\n                    <vgr-save-cancel [secondary]=\"true\" [locked]=\"cardLocked\" (cancel)=\"onCardCancel(row)\" (save)=\"onCardSave($event, row)\"\r\n                      (unlock)=\"onCardUnlocked(row)\"></vgr-save-cancel>\r\n                  </div>\r\n                </vgr-card-header>\r\n                <vgr-card-column>\r\n                  <form [formGroup]=\"editUnitForm\">\r\n                    <vgr-card-section [title]=\" 'Enhetsinformation'\" expanded=\"true\" [readonly]=\"cardLocked\">\r\n                      <vgr-title-value-layout>\r\n                        <vgr-title-value [title]=\" 'HSA-id'\" [slim]=\"cardLocked\">\r\n                          <vgr-input [readonly]=\"true\" formControlName=\"hsaid\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\"'Avtalskod*'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"avtalskod\" [showValidation]=\"editUnitForm.controls.avtalskod.touched || submitted\" [errorMessage]=\"validationMessages.avtalskod\"\r\n                            [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Enhetskod*'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"enhetskod\" [showValidation]=\"editUnitForm.controls.enhetskod.touched || submitted\" [errorMessage]=\"validationMessages.enhetskod\"\r\n                            [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Nämnd*'\" [slim]=\"cardLocked\">\r\n                          <vgr-dropdown formControlName=\"namnd\" [showValidation]=\"editUnitForm.controls.namnd.touched || submitted\" [items]=\"examplenamnd\"\r\n                            [noItemSelectedLabel]=\" 'Välj nämnd'\" [readonly]=\"cardLocked\"></vgr-dropdown>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Avtalsperiod*'\" [slim]=\"cardLocked\">\r\n                          <div class=\"row-layout  row-layout--tight\">\r\n                            <vgr-monthpicker formControlName=\"avtalsperiod_start\" [showValidation]=\"editUnitForm.controls.avtalsperiod_start.touched || submitted\"\r\n                              [readonly]=\"cardLocked\"></vgr-monthpicker>\r\n                            <vgr-monthpicker formControlName=\"avtalsperiod_slut\" [showValidation]=\"editUnitForm.controls.avtalsperiod_slut.touched || submitted\"\r\n                              [readonly]=\"cardLocked\"></vgr-monthpicker>\r\n                          </div>\r\n                        </vgr-title-value>\r\n                      </vgr-title-value-layout>\r\n                    </vgr-card-section>\r\n                    <vgr-card-section [title]=\" 'Enhetschef'\" [expanded]=\"false\" [readonly]=\"cardLocked\">\r\n                      <vgr-title-value-layout>\r\n                        <!-- <vgr-title-value [title]=\" 'Lägg till enhetschef*'\" *ngIf=\"!cardLocked\">\r\n                          <div class=\"column-layout column-layout--pull-left column-layout--component\">\r\n                            <vgr-filter-textbox></vgr-filter-textbox>\r\n                            <vgr-button style=\"padding-left:63%\" [secondary]=\"true\" (click)=\"onAddEnhetschef(newUnit)\">Lägg till</vgr-button>\r\n                          </div>\r\n                        </vgr-title-value> -->\r\n                        <vgr-title-value [title]=\" 'Enhetschef*'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"enhetschef\" [showValidation]=\"editUnitForm.controls.enhetschef.touched || submitted\" [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Telefon'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"enhetschef_telefon\" [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'E-post'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"enhetschef_epost\" [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                      </vgr-title-value-layout>\r\n                    </vgr-card-section>\r\n                    <vgr-card-section [title]=\" 'Avtalspart'\" [expanded]=\"false\" [readonly]=\"cardLocked\">\r\n                      <vgr-title-value-layout>\r\n                        <vgr-title-value [title]=\" 'Ägare*'\" [slim]=\"cardLocked\">\r\n                          <vgr-dropdown formControlName=\"agare\" [showValidation]=\"editUnitForm.controls.agare.touched || submitted\" [items]=\"exampleagare\"\r\n                            [noItemSelectedLabel]=\"'Välj ägare'\" [readonly]=\"cardLocked\"></vgr-dropdown>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Ägarkod'\" [slim]=\"cardLocked\">\r\n                          <vgr-input [readonly]=\"true\" formControlName=\"agarkod\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Ägarform'\" [slim]=\"cardLocked\">\r\n                          <vgr-input [readonly]=\"true\" formControlName=\"agarform\"></vgr-input>\r\n                        </vgr-title-value>\r\n                      </vgr-title-value-layout>\r\n\r\n                      <form [formGroup]=\"editprivateOwnerForm\">\r\n                        <vgr-title-value-layout>\r\n                          <vgr-title-value *ngIf=\"editUnitForm.controls.agarform.value==='Privat'\" [title]=\" 'Organisationsnr*'\" [slim]=\"cardLocked\">\r\n                            <vgr-input formControlName=\"organisationsnummer\" [showValidation]=\"editprivateOwnerForm.controls.organisationsnummer.touched || submitted\"\r\n                              [readonly]=\"cardLocked\"></vgr-input>\r\n                          </vgr-title-value>\r\n                          <vgr-title-value *ngIf=\"editUnitForm.controls.agarform.value==='Privat'\" [title]=\" 'Utbetalningssätt*'\" [slim]=\"cardLocked\">\r\n                            <vgr-dropdown formControlName=\"utbetalningssatt\" [showValidation]=\"editprivateOwnerForm.controls.utbetalningssatt.touched || submitted\"\r\n                              [items]=\"exempelUtbetalningssatt\" [noItemSelectedLabel]=\" 'Välj Utbetalningssätt'\" [readonly]=\"cardLocked\"></vgr-dropdown>\r\n                          </vgr-title-value>\r\n                          <vgr-title-value *ngIf=\"editUnitForm.controls.agarform.value==='Privat'\" [title]=\" 'Kontonummer*'\" [slim]=\"cardLocked\">\r\n                            <vgr-input formControlName=\"kontonummer\" [showValidation]=\"editprivateOwnerForm.controls.kontonummer.touched || submitted\"\r\n                              [readonly]=\"cardLocked\"></vgr-input>\r\n                          </vgr-title-value>\r\n                        </vgr-title-value-layout>\r\n                      </form>\r\n                      <vgr-title-value-layout>\r\n                        <vgr-title-value [title]=\" 'Leverantörsid RD*'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"leverantorsid\" [showValidation]=\"editUnitForm.controls.leverantorsid.touched || submitted\" [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Kundreferens'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"kundreferens\" [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                      </vgr-title-value-layout>\r\n                    </vgr-card-section>\r\n                  </form>\r\n                </vgr-card-column>\r\n                <vgr-card-column>\r\n                  <vgr-card-section [title]=\" 'Adressinformation'\" [readonly]=\"true\" [expanded]=\"true\">\r\n                    <vgr-title-value-layout>\r\n                      <vgr-title-value [title]=\" 'Kommun'\" [slim]=\"cardLocked\">\r\n                        <span>{{row.previewObject.details.kommun}}</span>\r\n                      </vgr-title-value>\r\n                      <vgr-title-value [title]=\" 'Kommunkod'\" [slim]=\"cardLocked\">\r\n                        <span>{{row.previewObject.details.kommunkod}}</span>\r\n                      </vgr-title-value>\r\n                      <vgr-title-value [title]=\" 'Postadress'\" [slim]=\"true\">\r\n                        <span>{{row.previewObject.details.postadress_gata}}\r\n                          <br> {{row.previewObject.details.postadress_postnummer}}\r\n                          <br> {{row.previewObject.details.postadress_stad}}\r\n                        </span>\r\n                      </vgr-title-value>\r\n                      <vgr-title-value [title]=\" 'Besöksadress'\" [slim]=\"true\">\r\n                        <span>{{row.previewObject.details.besoksadress_gata}}\r\n                          <br> {{row.previewObject.details.besoksadress_postnummer}}\r\n                          <br> {{row.previewObject.details.besoksadress_stad}}\r\n                        </span>\r\n                      </vgr-title-value>\r\n                      <vgr-title-value [title]=\" 'Geokod (PT90)'\" [slim]=\"cardLocked\">\r\n                        <span>{{row.previewObject.details.geokod}}</span>\r\n                      </vgr-title-value>\r\n                      <vgr-title-value [title]=\" 'Telefon'\" [slim]=\"cardLocked\">\r\n                        <span>{{row.previewObject.details.telefon}}</span>\r\n                      </vgr-title-value>\r\n                    </vgr-title-value-layout>\r\n                  </vgr-card-section>\r\n                  <vgr-card-section [title]=\" 'Ersättningsgrundande information'\" [expanded]=\"false\" [readonly]=\"cardLocked\">\r\n                    <form [formGroup]=\"editUnitForm\">\r\n                      <vgr-title-value-layout>\r\n                        <vgr-title-value [title]=\" 'Medverkan i familjecentral*'\" [slim]=\"cardLocked\">\r\n                          <vgr-dropdown formControlName=\"medverkanIFamiljecentral\" [items]=\"exempelMedverkanIfamiljecentral\" [showValidation]=\"editUnitForm.controls.medverkanIFamiljecentral.touched || submitted\"\r\n                            [noItemSelectedLabel]=\" 'Välj'\" [readonly]=\"cardLocked\"></vgr-dropdown>\r\n                        </vgr-title-value>\r\n                        <vgr-title-value [title]=\" 'Regionsövergripande grupper (kr/månad)'\" [slim]=\"cardLocked\">\r\n                          <vgr-input formControlName=\"regionsovergripandegrupper\" [readonly]=\"cardLocked\"></vgr-input>\r\n                        </vgr-title-value>\r\n                      </vgr-title-value-layout>\r\n                    </form>\r\n                  </vgr-card-section>\r\n                </vgr-card-column>\r\n              </vgr-card>\r\n            </div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/examples-listwithcards/examples-listwithcards.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/examples-listwithcards/examples-listwithcards.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples-listwithcards/examples-listwithcards.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/examples-listwithcards/examples-listwithcards.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExamplesListwithcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesListwithcardsComponent", function() { return ExamplesListwithcardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamplesListwithcardsComponent = /** @class */ (function () {
    function ExamplesListwithcardsComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.sortDirections = vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["SortDirection"];
        this.exampleData = [];
        this.filtertext = '';
        this.newUnits = [];
        this.itemSelected = false;
        this.addNewUnit = false;
        this.showActionPanel = false;
        this.selectedUnit = '';
        this.includeInactiveUnits = false;
        this.exempelVersions = [];
        this.submitted = false;
        this.userFormSubmitted = false;
        this.listNotification = null;
        this.validationMessages = {
            avtalskod: {
                'minlength': 'Avtalskoden skall vara fyra siffror',
                'maxlength': 'Avtalskoden skall vara fyra siffror',
            },
            enhetskod: {
                'minlength': 'Enhetskoden skall vara sex siffror',
                'maxlength': 'Enhetskoden skall vara sex siffror',
            }
        };
        this.newUnits = [{ displayName: 'Offentlig verksamhet Lerum', value: 'SE2329999131-E000000011801' },
            { displayName: 'Fredriks verksamhet', value: 'SE2328888131-E000000011802' },
            { displayName: 'Verksamhet för alla', value: 'SE2327777131-E000000011803' }];
        this.exampleDetail = {
            enhetschef: 'Sarah Larsson',
            enhetschef_epost: 'sarah.larsson@minmail.se',
            enhetschef_telefon: '+461 111 1111',
            agare_kod: 101,
            avtalskod: 1234,
            kontonummer: '1234 1234 12',
            utbetalningsssätt: 'PG',
            geokod: 'x:6471784 y:6471784',
            kommun: 'Mölndal', kommunkod: 123,
            telefon: '123456789',
            organisationsnummer: '123456789',
            versions: [],
            leverantorsid_RD: '123456',
            kundreferens: 'A233',
            postadress_stad: 'Vänersborg',
            postadress_gata: 'Regeringsgatan 12',
            postadress_postnummer: '12345',
            besoksadress_stad: 'Göteborg',
            besoksadress_gata: 'Torgatan',
            besoksadress_postnummer: '32133',
            regionsovergripandegrupper: '1000 kr',
            medverkanfamiljecentral: 'nej'
        };
        this.exampleagare = [{ displayName: 'Offentlig verksamhet', value: 'Offentlig verksamhet' },
            { displayName: 'Privat verksamhet', value: 'Privat verksamhet' },
            { displayName: 'Kalle Karlsson', value: 'Kalle Karlsson' },
            { displayName: 'Offentlig verksamhet Specialist', value: 'Offentlig verksamhet Specialist' },
            { displayName: 'Hemmabolaget', value: 'Hemmabolaget' }];
        this.examplenamnd = [{ displayName: 'Göteborgsnämnden', value: 'Göteborgsnämnden' },
            { displayName: 'Norra nämnden', value: 'Norra nämnden' },
            { displayName: 'Södra nämnden', value: 'Södra nämnden' },
            { displayName: 'Västra nämnden', value: 'Västra nämnden' },
            { displayName: 'Östra nämnden', value: 'Östra nämnden' }];
        this.exempelUtbetalningssatt = [{ displayName: 'BG', value: 'BG' },
            { displayName: 'PG', value: 'PG' }];
        this.exempelMedverkanIfamiljecentral = [{ value: 'ja', displayName: 'Ja' },
            { value: 'nej', displayName: 'Nej' }];
        this.initExampleData();
        this.cardLocked = true;
        this.newCardLocked = true;
        this.includeInactiveUnits = false;
    }
    ExamplesListwithcardsComponent.prototype.ngOnInit = function () {
        this.createNewUnitForm();
        this.createPrivateOwnerForm();
        this.createEditForm();
        this.createEditPrivateOwnerForm();
        this.createAgarOwnerForm();
        this.agareChanged();
        this.createOnChangeForm();
        this.onSortChanged({ key: 'enhet', direction: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].Ascending });
    };
    ExamplesListwithcardsComponent.prototype.createOnChangeForm = function () {
        this.onChangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            namnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            avtalsperiod_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            avtalsperiod_slut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        }, { updateOn: 'change' });
    };
    ExamplesListwithcardsComponent.prototype.createAgarOwnerForm = function () {
        this.agarOwnerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            agare: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        }, { updateOn: 'change' });
    };
    ExamplesListwithcardsComponent.prototype.createNewUnitForm = function () {
        this.newUnitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hsaid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            avtalskod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)] }),
            enhetskod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)] }),
            enhetschef: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            enhetschef_telefon: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            enhetschef_epost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            leverantorsid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            agarkod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            agarform: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            kundreferens: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            regionsovergripandegrupper: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            medverkanIFamiljecentral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        }, { updateOn: 'blur' });
    };
    ExamplesListwithcardsComponent.prototype.createEditForm = function () {
        this.editUnitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hsaid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            avtalskod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)] }),
            enhetskod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)] }),
            namnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            avtalsperiod_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            avtalsperiod_slut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            enhetschef: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            enhetschef_telefon: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            enhetschef_epost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            agare: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            leverantorsid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            agarkod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            agarform: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            kundreferens: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            regionsovergripandegrupper: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {}),
            medverkanIFamiljecentral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        }, { updateOn: 'change' });
    };
    ExamplesListwithcardsComponent.prototype.createPrivateOwnerForm = function () {
        this.privateOwnerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            organisationsnummer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            utbetalningssatt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            kontonummer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        }, { updateOn: 'blur' });
    };
    ExamplesListwithcardsComponent.prototype.createEditPrivateOwnerForm = function () {
        this.editprivateOwnerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            organisationsnummer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            utbetalningssatt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            kontonummer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        }, { updateOn: 'blur' });
    };
    ExamplesListwithcardsComponent.prototype.onFormSubmitted = function () {
        this.userFormSubmitted = true;
    };
    ExamplesListwithcardsComponent.prototype.setAgareDetaljer = function (unit) {
        switch (unit.agare) {
            case 'Offentlig verksamhet': {
                unit.details.agare_form = 'Offentlig';
                unit.details.agare_kod = 1000;
                break;
            }
            case 'Kalle Karlsson': {
                unit.details.agare_form = 'Privat';
                unit.details.agare_kod = 1001;
                break;
            }
            case 'Hemmabolaget': {
                unit.details.agare_form = 'Privat';
                unit.details.agare_kod = 1002;
                break;
            }
            case 'Offentlig verksamhet Specialist': {
                unit.details.agare_form = 'Offentlig';
                unit.details.agare_kod = 1003;
                break;
            }
            case 'Privat verksamhet': {
                unit.details.agare_form = 'Privat';
                unit.details.agare_kod = 1004;
                break;
            }
        }
    };
    ExamplesListwithcardsComponent.prototype.updateAgarDetaljerForm = function (agare, form, agarForm) {
        var agareform;
        var agarekod;
        switch (agare) {
            case 'Offentlig verksamhet': {
                agareform = 'Offentlig';
                agarekod = 1000;
                break;
            }
            case 'Kalle Karlsson': {
                agareform = 'Privat';
                agarekod = 1001;
                break;
            }
            case 'Hemmabolaget': {
                agareform = 'Privat';
                agarekod = 1002;
                break;
            }
            case 'Offentlig verksamhet Specialist': {
                agareform = 'Offentlig';
                agarekod = 1003;
                break;
            }
            case 'Privat verksamhet': {
                agareform = 'Privat';
                agarekod = 1004;
                break;
            }
        }
        form.controls.agarform.setValue(agareform);
        form.controls.agarkod.setValue(agarekod);
        if (agareform === 'Privat') {
            Object.keys(agarForm.controls).forEach(function (key) {
                agarForm.controls[key].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                agarForm.controls[key].updateValueAndValidity();
            });
        }
        else {
            Object.keys(agarForm.controls).forEach(function (key) {
                agarForm.controls[key].setValidators(null);
                agarForm.controls[key].updateValueAndValidity();
            });
        }
    };
    ExamplesListwithcardsComponent.prototype.agareChanged = function () {
        var _this = this;
        var agareControl = this.editUnitForm.get('agare');
        agareControl.valueChanges.subscribe(function (value) { return _this.updateAgarDetaljerForm(value, _this.editUnitForm, _this.editprivateOwnerForm); });
        var nyAgareControl = this.agarOwnerForm.get('agare');
        nyAgareControl.valueChanges.subscribe(function (value) { return _this.updateAgarDetaljerForm(value, _this.newUnitForm, _this.privateOwnerForm); });
    };
    ExamplesListwithcardsComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    ExamplesListwithcardsComponent.prototype.initExampleData = function () {
        var items = [];
        var exampleNames = ['Offentlig verksamhet Mellerud', 'Offentlig verksamhet Lunden', 'Offentlig verksamhet Kungälv',
            'Offentlig verksamhet för mödravård', 'Mottagningen Östra', 'Kalle Karlssons Enhet',
            'Offentlig verksamhet mottagning', 'Offentlig verksamhet Kristinedal', 'Janne Karlssons Specialist',
            'Privat verksamhet Mölndal', 'Privat verksamhet Göteborg', 'Privat verksamhet Alingsås',
            'Mottagningen Hemma'];
        var examplehsaid = 'SE2329999131-E000000011';
        var examplehenhetskod = [832203, 693305, 673203, 673303, 627641, 432338, 438900, 936600, 899500, 678599, 998700, 648220, 809999];
        var item;
        for (var i = 1; i <= 200; i++) {
            var indexForNames = this.getRandomInt(0, 12);
            var indexForAgare = this.getRandomInt(0, 4);
            var indexForEnhetskod = this.getRandomInt(0, 12);
            var indexForNamnd = this.getRandomInt(0, 4);
            var isActive = void 0;
            var year = void 0;
            var details = Object.create(this.exampleDetail);
            details.enhet = 'copy';
            details.versions = [1, 2, 3];
            if (1 === this.getRandomInt(0, 3)) {
                isActive = false;
                year = (new Date().getFullYear() - 1);
            }
            else {
                isActive = true;
                year = (new Date().getFullYear());
            }
            if (1 === this.getRandomInt(1, 20)) {
                details.medverkanfamiljecentral = '';
            }
            details.avtalsperiod_start = new Date(year, 0, 1);
            details.avtalsperiod_slut = new Date(year, 11, 0);
            item = {
                vald: false,
                id: i,
                enhet: exampleNames[indexForNames] + ' ' + i.toString(),
                hsaid: examplehsaid + (200 + i).toString(),
                agare: this.exampleagare[indexForAgare].displayName,
                enhetskod: examplehenhetskod[indexForEnhetskod],
                namnd: this.examplenamnd[indexForNamnd].displayName,
                isActive: isActive,
                details: details
            };
            this.setAgareDetaljer(item);
            items.push(item);
        }
        this.exampleData = items.map(function (x) { return new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["ExpandableRow"](x); });
        this.exampleData.forEach(function (element) {
            if (element.previewObject.details.medverkanfamiljecentral === '') {
                element.setNotification('Information saknas, medverkan i något register ej ifylld', 'vgr-icon-exclamation--red');
            }
        });
    };
    ExamplesListwithcardsComponent.prototype.onSelectedChangedVersion = function (selectedItem, row) {
        if (this.saveCancelComponent) {
            if (selectedItem === (row.details.versions.length).toString()) {
                this.saveCancelComponent.hideLock = false;
            }
            else {
                this.saveCancelComponent.hideLock = true;
            }
        }
    };
    ExamplesListwithcardsComponent.prototype.onSelectedChangedUnit = function (selectedItem) {
        this.itemSelected = true;
        this.selectedUnit = this.newUnits.find(function (u) { return u.value === selectedItem; }).displayName;
    };
    ExamplesListwithcardsComponent.prototype.onExpandedChanged = function (expanded, item) {
        if (expanded && !item.previewObject.vald) {
            item.previewObject.vald = true;
            this.updateCardDropdowns(item.previewObject);
            this.updateCardForm(item.previewObject);
        }
        else {
            item.previewObject.vald = false;
            this.cardLocked = true;
            this.submitted = false;
        }
        this.changeDetector.detectChanges();
    };
    ExamplesListwithcardsComponent.prototype.updateRowValues = function (row) {
        row.previewObject.agare = this.editUnitForm.controls.agare.value;
        row.previewObject.details.avtalskod = this.editUnitForm.controls.avtalskod.value;
        row.previewObject.enhetskod = this.editUnitForm.controls.enhetskod.value;
        row.previewObject.namnd = this.editUnitForm.controls.namnd.value;
        row.previewObject.details.avtalsperiod_start = this.editUnitForm.controls.avtalsperiod_start.value;
        row.previewObject.details.avtalsperiod_slut = this.editUnitForm.controls.avtalsperiod_slut.value;
        row.previewObject.details.enhetschef = this.editUnitForm.controls.enhetschef.value;
        row.previewObject.details.enhetschef_telefon = this.editUnitForm.controls.enhetschef_telefon.value;
        row.previewObject.details.enhetschef_epost = this.editUnitForm.controls.enhetschef_epost.value;
        row.previewObject.details.agare_kod = this.editUnitForm.controls.agarkod.value;
        row.previewObject.details.agare_form = this.editUnitForm.controls.agarform.value;
        row.previewObject.details.regionsovergripandegrupper = this.editUnitForm.controls.regionsovergripandegrupper.value;
        row.previewObject.details.medverkanfamiljecentral = this.editUnitForm.controls.medverkanIFamiljecentral.value;
        row.previewObject.details.kundreferens = this.editUnitForm.controls.kundreferens.value;
        row.previewObject.details.leverantorsid_RD = this.editUnitForm.controls.leverantorsid.value;
        if (row.previewObject.details.agare_form === 'Privat') {
            row.previewObject.details.organisationsnummer = this.editprivateOwnerForm.controls.organisationsnummer.value;
            row.previewObject.details.utbetalningsssätt = this.editprivateOwnerForm.controls.utbetalningssatt.value;
            row.previewObject.details.kontonummer = this.editprivateOwnerForm.controls.kontonummer.value;
        }
        else {
            row.previewObject.details.organisationsnummer = '';
            row.previewObject.details.utbetalningsssätt = '';
            row.previewObject.details.kontonummer = '';
        }
        // Öka versionen
        row.previewObject.details.versions.push(row.previewObject.details.versions.length + 1);
    };
    ExamplesListwithcardsComponent.prototype.updateCardForm = function (item) {
        var _this = this;
        if (!item.vald) {
            return;
        }
        this.editUnitForm.reset();
        this.editUnitForm.setValue({
            hsaid: item.hsaid,
            avtalskod: item.details.avtalskod,
            enhetskod: item.enhetskod,
            namnd: item.namnd,
            avtalsperiod_start: item.details.avtalsperiod_start,
            avtalsperiod_slut: item.details.avtalsperiod_slut,
            enhetschef: item.details.enhetschef,
            leverantorsid: item.details.leverantorsid_RD,
            enhetschef_telefon: item.details.enhetschef_telefon ? item.details.enhetschef_telefon : '',
            enhetschef_epost: item.details.enhetschef_epost ? item.details.enhetschef_epost : '',
            agare: item.agare,
            agarkod: item.details.agare_kod,
            agarform: item.details.agare_form,
            kundreferens: item.details.kundreferens ? item.details.kundreferens : '',
            regionsovergripandegrupper: item.details.regionsovergripandegrupper ? item.details.regionsovergripandegrupper : '',
            medverkanIFamiljecentral: item.details.medverkanfamiljecentral ? item.details.medverkanfamiljecentral : ''
        });
        if (item.details.agare_form === 'Privat') {
            this.editprivateOwnerForm.controls.organisationsnummer.setValue(item.details.organisationsnummer);
            this.editprivateOwnerForm.controls.utbetalningssatt.setValue(item.details.utbetalningsssätt);
            this.editprivateOwnerForm.controls.kontonummer.setValue(item.details.kontonummer);
            Object.keys(this.editprivateOwnerForm.controls).forEach(function (key) {
                _this.editprivateOwnerForm.controls[key].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                _this.editprivateOwnerForm.controls[key].updateValueAndValidity();
            });
        }
        else {
            Object.keys(this.editprivateOwnerForm.controls).forEach(function (key) {
                _this.editprivateOwnerForm.controls[key].setValidators(null);
                _this.editprivateOwnerForm.controls[key].updateValueAndValidity();
            });
        }
        this.editUnitForm.updateValueAndValidity();
    };
    ExamplesListwithcardsComponent.prototype.updateNewCardForm = function () {
        var _this = this;
        var agare = this.newUnit.agare ? this.newUnit.agare : '';
        this.agarOwnerForm.controls.agare.setValue(agare);
        this.newUnitForm.setValue({
            hsaid: this.newUnit.hsaid,
            avtalskod: this.newUnit.details.avtalskod ? this.newUnit.details.avtalskod : '',
            enhetskod: this.newUnit.enhetskod ? this.newUnit.enhetskod : '',
            enhetschef: this.newUnit.details.enhetschef ? this.newUnit.details.enhetschef : '',
            leverantorsid: this.newUnit.details.leverantorsid_RD ? this.newUnit.details.leverantorsid_RD : '',
            enhetschef_telefon: this.newUnit.details.enhetschef_telefon ? this.newUnit.details.enhetschef_telefon : '',
            enhetschef_epost: this.newUnit.details.enhetschef_epost ? this.newUnit.details.enhetschef_epost : '',
            agarkod: this.newUnit.details.agare_kod ? this.newUnit.details.agare_kod : '',
            agarform: this.newUnit.details.agare_form ? this.newUnit.details.agare_form : '',
            kundreferens: this.newUnit.details.kundreferens ? this.newUnit.details.kundreferens : '',
            regionsovergripandegrupper: this.newUnit.details.regionsovergripandegrupper ? this.newUnit.details.regionsovergripandegrupper : '',
            medverkanIFamiljecentral: this.newUnit.details.medverkanfamiljecentral ? this.newUnit.details.medverkanfamiljecentral : ''
        });
        this.onChangeForm.setValue({
            namnd: this.newUnit.namnd ? this.newUnit.namnd : '',
            avtalsperiod_start: this.newUnit.details.avtalsperiod_start ? this.newUnit.details.avtalsperiod_start : '',
            avtalsperiod_slut: this.newUnit.details.avtalsperiod_slut ? this.newUnit.details.avtalsperiod_slut : '',
        });
        if (this.newUnit.details.agare_form === 'Privat') {
            this.privateOwnerForm.controls.organisationsnummer.setValue(this.newUnit.details.organisationsnummer);
            this.privateOwnerForm.controls.utbetalningssatt.setValue(this.newUnit.details.utbetalningsssätt);
            this.privateOwnerForm.controls.kontonummer.setValue(this.newUnit.details.kontonummer);
            Object.keys(this.privateOwnerForm.controls).forEach(function (key) {
                _this.privateOwnerForm.controls[key].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                _this.privateOwnerForm.controls[key].updateValueAndValidity();
            });
        }
        else {
            Object.keys(this.privateOwnerForm.controls).forEach(function (key) {
                _this.privateOwnerForm.controls[key].setValidators(null);
                _this.privateOwnerForm.controls[key].updateValueAndValidity();
            });
            this.newUnitForm.updateValueAndValidity();
        }
    };
    ExamplesListwithcardsComponent.prototype.updateCardDropdowns = function (item) {
        var _this = this;
        this.exempelVersions = [];
        item.details.versions.forEach(function (x) {
            _this.exempelVersions.push({
                displayName: x.toString(),
                value: x.toString(),
                marked: x === item.details.versions.length,
                selected: x === item.details.versions.length
            });
        });
        this.changeDetector.detectChanges();
    };
    ExamplesListwithcardsComponent.prototype.onCardCancel = function (row) {
        this.cardLocked = true;
        row.notifyOnCollapse('Redigering av ' + row.previewObject.enhet + ' avbröts', 'vgr-icon-exclamation');
    };
    ExamplesListwithcardsComponent.prototype.onCardSave = function (event, row) {
        this.submitted = true;
        if (!this.editprivateOwnerForm.valid || !this.editUnitForm.valid) {
            this.saveCancelComponent.locked = false;
            return;
        }
        this.updateRowValues(row);
        this.cardLocked = true;
        row.notifyOnCollapse(row.previewObject.enhet + ' sparades', 'vgr-icon-ok-check-green', true);
    };
    ExamplesListwithcardsComponent.prototype.removeNotification = function (event, row) {
        if (event === null) {
            row.removeNotification();
        }
    };
    ExamplesListwithcardsComponent.prototype.onCardUnlocked = function () {
        this.cardLocked = false;
        this.changeDetector.detectChanges();
        if (this.unitVersions) {
            this.unitVersions.readonly = true;
        }
    };
    ExamplesListwithcardsComponent.prototype.openActionPanel = function () {
        this.showActionPanel = true;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    ExamplesListwithcardsComponent.prototype.onNewUnitClick = function () {
        var _this = this;
        this.addNewUnit = true;
        this.newUnit = {
            hsaid: this.newUnits.find(function (u) { return u.displayName === _this.selectedUnit; }).value,
            details: {
                enhet: this.selectedUnit,
                postadress_stad: 'Vänersborg',
                postadress_gata: 'Regeringsgatan 12',
                postadress_postnummer: '12345',
                besoksadress_stad: 'Göteborg',
                besoksadress_gata: 'Torgatan',
                besoksadress_postnummer: '32133',
                geokod: 'x:6471784 y:6471784',
                kommun: 'Mölndal', kommunkod: 123,
            }
        };
        this.newCardLocked = false;
        this.updateNewCardForm();
    };
    ExamplesListwithcardsComponent.prototype.onNewUnitCancel = function () {
        this.actionPanelClose();
        this.newCardLocked = true;
        this.newUnit = null;
    };
    ExamplesListwithcardsComponent.prototype.onNewUnitSave = function () {
        this.submitted = true;
        if (!this.privateOwnerForm.valid || !this.newUnitForm.valid) {
            return;
        }
        this.newUnit.details.avtalskod = this.newUnitForm.controls.avtalskod.value;
        this.newUnit.namnd = this.onChangeForm.controls.namnd.value;
        this.newUnit.details.avtalsperiod_slut = this.onChangeForm.controls.avtalsperiod_slut.value;
        this.newUnit.details.avtalsperiod_start = this.onChangeForm.controls.avtalsperiod_start.value;
        this.newUnit.agare = this.agarOwnerForm.controls.agare.value;
        this.newUnit.details.agare_kod = this.newUnitForm.controls.agarkod.value;
        this.newUnit.details.agare_form = this.newUnitForm.controls.agarform.value;
        if (this.newUnit.details.agare_form === 'Privat') {
            this.newUnit.details.organisationsnummer = this.privateOwnerForm.controls.organisationsnummer.value;
            this.newUnit.details.kontonummer = this.privateOwnerForm.controls.kontonummer.value;
            this.newUnit.details.utbetalningsssätt = this.privateOwnerForm.controls.utbetalningssatt.value;
        }
        this.newUnit.details.leverantorsid_RD = this.newUnitForm.controls.leverantorsid.value;
        this.newUnit.enhetskod = this.newUnitForm.controls.enhetskod.value;
        this.newUnit.enhet = this.selectedUnit;
        this.newUnit.details.enhetschef = this.newUnitForm.controls.enhetschef.value;
        this.newUnit.details.medverkanfamiljecentral = this.newUnitForm.controls.medverkanIFamiljecentral.value;
        this.newUnit.details.versions = [1];
        this.newUnit.isActive = true;
        var newRow = new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["ExpandableRow"](this.newUnit);
        newRow.notifyOnCollapse(newRow.previewObject.enhet + ' sparades', 'vgr-icon-ok-check-green');
        this.exampleData.unshift(newRow);
        this.actionPanelClose();
        this.newUnit = null;
        this.listComponent.animateHeader();
    };
    ExamplesListwithcardsComponent.prototype.onActionPanelClose = function () {
        this.actionPanelClose();
    };
    ExamplesListwithcardsComponent.prototype.actionPanelClose = function () {
        var _this = this;
        this.showActionPanel = false;
        this.newUnits.forEach(function (u) { return u.selected = false; });
        this.itemSelected = false;
        this.newCardLocked = true;
        this.newUnitForm.reset();
        this.onChangeForm.reset();
        this.privateOwnerForm.reset();
        this.agarOwnerForm.reset();
        this.submitted = false;
        setTimeout(function () {
            _this.addNewUnit = false;
        }, 1100);
    };
    ExamplesListwithcardsComponent.prototype.onPanelExpandedChanged = function (expanded) {
        if (!expanded) {
            this.actionPanelClose();
        }
    };
    ExamplesListwithcardsComponent.prototype.onSortChanged = function (event) {
        this.exampleData = this.exampleData.sort(function (row1, row2) {
            return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].Ascending ? 1 : -1) :
                row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].Ascending ? -1 : 1) : 0;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["SaveCancelComponent"]),
        __metadata("design:type", vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["SaveCancelComponent"])
    ], ExamplesListwithcardsComponent.prototype, "saveCancelComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]),
        __metadata("design:type", vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["ListComponent"])
    ], ExamplesListwithcardsComponent.prototype, "listComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('unitVersions'),
        __metadata("design:type", vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["DropdownComponent"])
    ], ExamplesListwithcardsComponent.prototype, "unitVersions", void 0);
    ExamplesListwithcardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examples-listwithcards',
            template: __webpack_require__(/*! ./examples-listwithcards.component.html */ "./src/app/examples-listwithcards/examples-listwithcards.component.html"),
            styles: [__webpack_require__(/*! ./examples-listwithcards.component.scss */ "./src/app/examples-listwithcards/examples-listwithcards.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ExamplesListwithcardsComponent);
    return ExamplesListwithcardsComponent;
}());



/***/ }),

/***/ "./src/app/examples-listwithcards/unitfilterpipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/examples-listwithcards/unitfilterpipe.ts ***!
  \**********************************************************/
/*! exports provided: UnitFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFilterPipe", function() { return UnitFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnitFilterPipe = /** @class */ (function () {
    function UnitFilterPipe() {
    }
    UnitFilterPipe.prototype.transform = function (items, searchword, includeInactiveUnits) {
        if (!items) {
            return items;
        }
        if (!includeInactiveUnits) {
            items = items.filter(function (x) { return x.previewObject.isActive; });
        }
        return items.filter(function (item) { return (item.previewObject.enhet.toLowerCase().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.previewObject.hsaid.toLowerCase().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.previewObject.agare.toLowerCase().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.previewObject.enhetskod.toString().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.previewObject.namnd.toLowerCase().indexOf(searchword.toLowerCase()) !== -1); });
    };
    UnitFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'unitfilter',
            pure: false
        })
    ], UnitFilterPipe);
    return UnitFilterPipe;
}());



/***/ }),

/***/ "./src/app/examples-listwithlists/examples-listwithlists.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/examples-listwithlists/examples-listwithlists.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Enheter'\">\r\n\r\n    <div class=\"column-layout column-layout--pull-left\">\r\n      <h3>Sök enheter</h3>\r\n      <div class=\"row-layout\">\r\n        <div class=\"row-layout\">\r\n          <vgr-filter-textbox (keyup.enter)=\"searchForUnits()\" (valueChanged)=\"filtertext = $event;noSearchResult = false;\" (focusin)=\"noSearchResult = false\"></vgr-filter-textbox>\r\n          <vgr-button (click)=\"searchForUnits()\">Sök</vgr-button>\r\n        </div>\r\n        <div class=\"row-layout action-panel-buttons\">\r\n          <vgr-button [disabled]=\"selectedRows.length === 0\" (click)=\"modalService.openDialog('printModal')\">Skriv ut</vgr-button>\r\n          <vgr-button [disabled]=\"selectedRows.length === 0\" (click)=\"removeSelectedRows()\">Arkivera</vgr-button>\r\n        </div>\r\n      </div>\r\n      <vgr-checkbox (checkedChanged)=\"includeInactiveUnits = $event\" [checked]=\"includeInactiveUnits\" [label]=\"'Inkludera stängda enheter'\"></vgr-checkbox>\r\n    </div>\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list (sortChanged)=\"onSortChanged($event)\" *ngIf=\"loading || noSearchResult\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header width=\"10\" sortKey=\"enhet\" [sortDirection]=\"sortDirections.Ascending\">Enhet</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" align=\"left\" sortKey=\"hsaid\">HSA-id</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"3\" align=\"right\" sortKey=\"belopp\">Belopp</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"1\" align=\"center\"></vgr-list-column-header>\r\n          <vgr-list-column-header-checkbox width=\"1\" align=\"center\" [checked]=\"false\"></vgr-list-column-header-checkbox>\r\n        </vgr-list-header>\r\n      </vgr-list>\r\n      <div class=\"loader-container\" *ngIf=\"loading\">\r\n        <vgr-loader [active]=\"loading\"></vgr-loader>\r\n      </div>\r\n      <div class=\"loader-container\" *ngIf=\"noSearchResult\">\r\n        <p>Inga resultat hittades för '{{ filtertext }}'</p>\r\n      </div>\r\n      <vgr-list (sortChanged)=\"onSortChanged($event)\" *ngIf=\"!loading && !noSearchResult\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header width=\"10\" sortKey=\"enhet\" [sortDirection]=\"sortDirections.Ascending\">Enhet</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" align=\"left\" sortKey=\"hsaid\">HSA-id</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"3\" align=\"right\" sortKey=\"belopp\">Belopp</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"1\" align=\"center\"></vgr-list-column-header>\r\n          <vgr-list-column-header-checkbox width=\"1\" align=\"center\" [checked]=\"allChecked\" (checkedChanged)=\"onListCheckedChanged($event)\"></vgr-list-column-header-checkbox>\r\n        </vgr-list-header>\r\n        <vgr-list-item *ngFor=\"let row of listData | unitfilter2: includeInactiveUnits\" [expanded]=\"row.expanded\" [notification]=\"row.notification\"\r\n          (deleted)=\"removeDataFromList(row)\">\r\n          <vgr-list-item-header>\r\n            <vgr-list-column width=\"10\">{{row.previewObject.enhet}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.previewObject.hsaid}}</vgr-list-column>\r\n            <vgr-list-column width=\"3\" align=\"right\">{{row.previewObject.belopp | number : '1.2-2'}}</vgr-list-column>\r\n            <vgr-list-column-trashcan width=\"1\" align=\"center\" [disabled]=\"row.previewObject.deleted\" (delete)=\"onDeleteRow(row)\"></vgr-list-column-trashcan>\r\n            <vgr-list-column-checkbox width=\"1\" align=\"center\" [disabled]=\"row.previewObject.deleted\" [checked]=\"row.previewObject.vald\"\r\n              (checkedChanged)=\"onSelectRowChanged(row, $event)\"></vgr-list-column-checkbox>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content [indentContent]=\"false\">\r\n            <div class=\"button-container\">\r\n              <vgr-button [secondary]=\"true\">Text</vgr-button>\r\n              <span class=\"vgr-icon-calendar--green\"></span>\r\n            </div>\r\n            <vgr-table *ngIf=\"row.expanded\">\r\n              <vgr-table-header>\r\n                <vgr-table-header-column [width]=\"10\">Header Column 1\r\n                  <span class=\"vgr-icon-help\"></span>\r\n                  <span class=\"vgr-icon-calendar-border\"></span>\r\n                </vgr-table-header-column>\r\n                <vgr-table-header-column [width]=\"5\">Header Column 2</vgr-table-header-column>\r\n                <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Header Column3</vgr-table-header-column>\r\n              </vgr-table-header>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n              </vgr-table-row>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n              </vgr-table-row>\r\n              <vgr-table>\r\n                <vgr-table-header>\r\n                  <vgr-table-header-column [width]=\"10\">Row Column\r\n                    <span class=\"vgr-icon-calendar-border\"></span>\r\n                  </vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                </vgr-table-header>\r\n                <vgr-table-row>\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n                <vgr-table-row>\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n                <vgr-table>\r\n                  <vgr-table-header>\r\n                    <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                    <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                    <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                  </vgr-table-header>\r\n                  <vgr-table-row>\r\n                    <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"5\"> Donec eu est eros. Suspendisse eget dolor porta, volutpat ligula a, euismod tellus. Quisque posuere nisi\r\n                      vitae nisi commodo mollis. Vivamus interdum dolor at neque blandit sollicitudin. Pellentesque ac ornare</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                  </vgr-table-row>\r\n                  <vgr-table-row>\r\n                    <vgr-table-row-column [width]=\"10\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante ac tortor ornare efficitur non a\r\n                      nisi. Donec turpis sapien, semper a posuere ac, luctus et urna.</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                  </vgr-table-row>\r\n                  <vgr-table>\r\n                    <vgr-table-header>\r\n                      <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                      <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                      <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                    </vgr-table-header>\r\n                    <vgr-table-row>\r\n                      <vgr-table-row-column [width]=\"7\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                    </vgr-table-row>\r\n                    <vgr-table-row>\r\n                      <vgr-table-row-column [width]=\"7\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                    </vgr-table-row>\r\n                    <vgr-table>\r\n                      <vgr-table-header>\r\n                        <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                        <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                        <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                      </vgr-table-header>\r\n                      <vgr-table-row>\r\n                        <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                      </vgr-table-row>\r\n                      <vgr-table-row>\r\n                        <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                      </vgr-table-row>\r\n                      <vgr-table>\r\n                        <vgr-table-header>\r\n                          <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                          <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                          <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                        </vgr-table-header>\r\n                        <vgr-table-row>\r\n                          <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                        </vgr-table-row>\r\n                        <vgr-table-row>\r\n                          <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                        </vgr-table-row>\r\n                      </vgr-table>\r\n                    </vgr-table>\r\n                  </vgr-table>\r\n                </vgr-table>\r\n              </vgr-table>\r\n            </vgr-table>\r\n            <vgr-table>\r\n              <vgr-table-header>\r\n                <vgr-table-header-column [width]=\"10\">Header Column 1</vgr-table-header-column>\r\n                <vgr-table-header-column [width]=\"5\">Header Column 2</vgr-table-header-column>\r\n                <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Header Column3</vgr-table-header-column>\r\n              </vgr-table-header>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n              </vgr-table-row>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n              </vgr-table-row>\r\n              <vgr-table>\r\n                <vgr-table-header>\r\n                  <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                </vgr-table-header>\r\n                <vgr-table-row>\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n                <vgr-table-row>\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n              </vgr-table>\r\n            </vgr-table>\r\n            <vgr-table>\r\n              <vgr-table-header>\r\n                <vgr-table-header-column [width]=\"10\">Header Column 1</vgr-table-header-column>\r\n                <vgr-table-header-column [width]=\"5\">Header Column 2</vgr-table-header-column>\r\n                <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Header Column3</vgr-table-header-column>\r\n              </vgr-table-header>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n              </vgr-table-row>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n              </vgr-table-row>\r\n              <vgr-table>\r\n                <vgr-table-header>\r\n                  <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                </vgr-table-header>\r\n                <vgr-table-row>\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n                <vgr-table-row>\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n              </vgr-table>\r\n            </vgr-table>\r\n            <vgr-table>\r\n              <vgr-table-header>\r\n                <vgr-table-row-column [width]=\"20\">Hej expandera mig!</vgr-table-row-column>\r\n              </vgr-table-header>\r\n              <vgr-table-row>\r\n                <vgr-table-row-column [width]=\"20\">Lite kul content</vgr-table-row-column>\r\n              </vgr-table-row>\r\n            </vgr-table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n<vgr-modal id=\"printModal\">\r\n  <vgr-modal-header>Skriv ut</vgr-modal-header>\r\n  <vgr-modal-content>Vill du skriva ut {{getPrintText()}}?</vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('printModal')\">Avbryt</vgr-button>\r\n    <vgr-button [secondary]=\"true\" (click)=\"printSelectedRows()\">Skriv ut</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"deleteRowModal\">\r\n  <vgr-modal-header>Ta bort enheten</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p *ngIf=\"rowToRemove\">Vill du verkligen ta bort {{rowToRemove.previewObject.enhet}}?</p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"removeSelectedRow()\">Ja</vgr-button>\r\n    <vgr-button [secondary]=\"true\" default=\"true\" (click)=\"closeModal('deleteRowModal')\">Nej</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n"

/***/ }),

/***/ "./src/app/examples-listwithlists/examples-listwithlists.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/examples-listwithlists/examples-listwithlists.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------*\\\r\n  #Margins\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Borders\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Components\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Misc\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #LAYERS\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #SMALL\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #MEDIUM\r\n\\*------------------------------------*/\n.loader-container {\n  padding-top: 20px;\n  display: flex;\n  justify-content: center; }\n.loader-container[hidden] {\n    display: none !important; }\n.action-panel-buttons {\n  position: absolute;\n  right: 10px; }\n.button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-right: 10px;\n  padding-bottom: 10px; }\n@media screen and (min-width: 1459px) {\n  .loader-container {\n    padding-top: 40px; }\n  .button-container {\n    padding-right: 20px;\n    padding-bottom: 20px; }\n  .action-panel-buttons {\n    right: 20px; } }\n"

/***/ }),

/***/ "./src/app/examples-listwithlists/examples-listwithlists.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/examples-listwithlists/examples-listwithlists.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExamplesListwithlistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesListwithlistsComponent", function() { return ExamplesListwithlistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _unitService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitService */ "./src/app/examples-listwithlists/unitService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamplesListwithlistsComponent = /** @class */ (function () {
    function ExamplesListwithlistsComponent(changeDetector, unitService, modalService) {
        this.changeDetector = changeDetector;
        this.unitService = unitService;
        this.modalService = modalService;
        this.sortDirections = vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"];
        this.items = [];
        this.listData = [];
        this.filtertext = '';
        this.itemSelected = false;
        this.selectedUnit = '';
        this.loading = false;
        this.noSearchResult = false;
        this.includeInactiveUnits = false;
        this.includeInactiveUnits = false;
        this.items = Array(3).fill(0).map(function (x, i) { return i; });
    }
    ExamplesListwithlistsComponent.prototype.ngOnInit = function () {
        // this.searchForUnits();
    };
    Object.defineProperty(ExamplesListwithlistsComponent.prototype, "allChecked", {
        get: function () {
            var _this = this;
            if (this.listData.length === 0 || this.listData.every(function (r) { return r.previewObject.deleted; })) {
                return false;
            }
            return !this.listData.filter(function (r) { return !r.previewObject.deleted && _this.includeInactiveUnits ? true : r.previewObject.isActive; }).find(function (x) { return !x.previewObject.vald; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListwithlistsComponent.prototype, "selectedRows", {
        get: function () {
            return this.listData.filter(function (r) { return r.previewObject.vald; });
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListwithlistsComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    ExamplesListwithlistsComponent.prototype.searchForUnits = function () {
        var _this = this;
        this.loading = true;
        this.noSearchResult = false;
        this.unitService.getUnits(this.filtertext)
            .subscribe(function (units) {
            if (units.length > 0) {
                _this.mapToListItems(units);
                _this.sortlistData('enhet', vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending);
            }
            else {
                _this.listData = [];
                _this.noSearchResult = true;
            }
            setTimeout(function () {
                _this.loading = false;
            }, 400);
        });
    };
    ExamplesListwithlistsComponent.prototype.mapToListItems = function (enheter) {
        this.listData = enheter.filter(function (x) { return !x.deleted; }).map(function (x) { return new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["ExpandableRow"](x); });
        this.listData.forEach(function (element) {
            // if (this.getRandomInt(0, 5) === 2) {
            //   element.setNotification('Meddelande om denna rad som ligger permanent', 'vgr-icon-exclamation');
            // }
        });
    };
    ExamplesListwithlistsComponent.prototype.onListCheckedChanged = function (event) {
        var _this = this;
        if (this.listData) {
            this.listData.filter(function (r) { return (!r.previewObject.deleted && _this.includeInactiveUnits ? true : r.previewObject.isActive); }).forEach(function (element) { return element.previewObject.vald = event; });
        }
    };
    ExamplesListwithlistsComponent.prototype.onSelectRowChanged = function (row, checked) {
        row.previewObject.vald = checked;
    };
    ExamplesListwithlistsComponent.prototype.onSelectedChangedUnit = function (selectedItem) {
        this.itemSelected = true;
    };
    ExamplesListwithlistsComponent.prototype.onDeleteRow = function (row) {
        this.removeRow(row);
    };
    ExamplesListwithlistsComponent.prototype.removeRow = function (row) {
        this.rowToRemove = row;
        this.modalService.openDialog('deleteRowModal');
    };
    ExamplesListwithlistsComponent.prototype.getPrintText = function () {
        var result;
        if (this.allChecked) {
            return 'alla enheter';
        }
        else if (this.selectedRows.length < 10) {
            result = this.selectedRows.map(function (u) { return u.previewObject.enhet; });
            if (result.length === 1) {
                return result;
            }
            else {
                return [result.slice(0, -1).join(', '), result.slice(-1)[0]].join(result.length < 2 ? ', ' : ' och ');
            }
        }
        else {
            return 'valda enheter';
        }
    };
    ExamplesListwithlistsComponent.prototype.removeSelectedRow = function () {
        this.rowToRemove.notifyOnRemove(this.rowToRemove.previewObject.enhet + ' togs bort', 'vgr-icon-ok-check');
        this.rowToRemove.previewObject.vald = false;
        this.rowToRemove.previewObject.deleted = true;
        this.modalService.closeDialog('deleteRowModal');
    };
    ExamplesListwithlistsComponent.prototype.removeSelectedRows = function () {
        this.selectedRows.forEach(function (x) {
            x.notifyOnRemove(x.previewObject.enhet + ' togs bort', 'vgr-icon-ok-check');
            x.previewObject.vald = false;
            x.previewObject.deleted = true;
        });
    };
    ExamplesListwithlistsComponent.prototype.printSelectedRows = function () {
        this.listData.forEach(function (element) { return element.previewObject.vald = false; });
        this.modalService.closeDialog('printModal');
    };
    ExamplesListwithlistsComponent.prototype.closeModal = function (modalId) {
        this.modalService.closeDialog(modalId);
    };
    ExamplesListwithlistsComponent.prototype.onSortChanged = function (event) {
        this.sortlistData(event.key, event.direction);
    };
    ExamplesListwithlistsComponent.prototype.sortlistData = function (key, direction) {
        this.listData = this.listData.sort(function (row1, row2) {
            return row1.previewObject[key] > row2.previewObject[key] ? (direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? 1 : -1) :
                row1.previewObject[key] < row2.previewObject[key] ? (direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? -1 : 1) : 0;
        });
    };
    ExamplesListwithlistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examples-listwithlists',
            template: __webpack_require__(/*! ./examples-listwithlists.component.html */ "./src/app/examples-listwithlists/examples-listwithlists.component.html"),
            styles: [__webpack_require__(/*! ./examples-listwithlists.component.scss */ "./src/app/examples-listwithlists/examples-listwithlists.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _unitService__WEBPACK_IMPORTED_MODULE_2__["UnitService"], vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ExamplesListwithlistsComponent);
    return ExamplesListwithlistsComponent;
}());



/***/ }),

/***/ "./src/app/examples-listwithlists/unitService.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples-listwithlists/unitService.ts ***!
  \*******************************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitService = /** @class */ (function () {
    function UnitService() {
        this.items = [];
        this.createExampleData();
    }
    UnitService.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    UnitService.prototype.createExampleData = function () {
        var exampleNames = ['Offentlig verksamhet Mellerud', 'Offentlig verksamhet Lunden', 'Offentlig verksamhet Kungälv',
            'Offentlig verksamhet för mödravård', 'Mottagningen Östra', 'Kalle Karlssons Enhet',
            'Offentlig verksamhet mottagning', 'Offentlig verksamhet Kristinedal', 'Janne Karlssons Specialist',
            'Privat verksamhet Mölndal', 'Privat verksamhet Göteborg', 'Privat verksamhet Alingsås',
            'Mottagningen Hemma'];
        var examplehsaid = 'SE2329999131-E000000011';
        var item;
        for (var i = 1; i <= 104; i++) {
            var indexForNames = this.getRandomInt(0, 12);
            var isActive = Math.random() >= 0.5;
            var amout = this.getRandomInt(1, 99) * 100;
            item = {
                vald: false,
                id: i,
                enhet: exampleNames[indexForNames] + ' ' + i.toString(),
                hsaid: examplehsaid + (200 + i + 1).toString(),
                belopp: amout,
                isActive: isActive,
            };
            this.items.push(item);
        }
    };
    UnitService.prototype.getUnits = function (searchString) {
        searchString = searchString.toLowerCase();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.items.filter(function (item) {
            return ((item.enhet.toLowerCase().indexOf(searchString) !== -1 ||
                item.hsaid.toLowerCase().indexOf(searchString) !== -1 ||
                item.belopp.toString().indexOf(searchString) !== -1));
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0));
    };
    UnitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UnitService);
    return UnitService;
}());



/***/ }),

/***/ "./src/app/examples-listwithlists/unitfilterpipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/examples-listwithlists/unitfilterpipe.ts ***!
  \**********************************************************/
/*! exports provided: UnitFilter2Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFilter2Pipe", function() { return UnitFilter2Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnitFilter2Pipe = /** @class */ (function () {
    function UnitFilter2Pipe() {
    }
    UnitFilter2Pipe.prototype.transform = function (items, includeInactiveUnits) {
        if (!items) {
            return items;
        }
        if (!includeInactiveUnits) {
            items = items.filter(function (x) { return x.previewObject.isActive; });
        }
        return items;
    };
    UnitFilter2Pipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'unitfilter2',
            pure: false
        })
    ], UnitFilter2Pipe);
    return UnitFilter2Pipe;
}());



/***/ }),

/***/ "./src/app/expandable-div/expandable-div.component.html":
/*!**************************************************************!*\
  !*** ./src/app/expandable-div/expandable-div.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'expandable div'\">\r\n  <div class=\" docs__overview \">\r\n    <p>\r\n      <code> &lt;vgr-expandable-div&gt;</code> är en sektion/div med innehåll som kan öppnas och stängas.\r\n    </p>\r\n    <br>\r\n    <strong>OBS!</strong>\r\n    <p>Denna komponent har ingen vgr-specifik styling, utan ska ses som en stödkomponent.</p>\r\n    <br>\r\n    <p>\r\n      <a href=\"../listexample-expandable-div\">Här</a> kan du se exempel på användning i en lista.</p>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>ja</strong> (headerns bakgrundsfärg vid hover)\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples \">\r\n    <h2>HTML</h2>\r\n    <section [innerHTML]=\"exampleCodeMarkup\" highlight-js-content=\".highlight\"></section>\r\n    <h2>Resultat</h2>\r\n    <vgr-expandable-div [expanded]=\"false\" (expandedChanged)=\"onExpandedChanged($event)\">\r\n      <vgr-expandable-div-header>\r\n        <p>Denna div är collapsed från början</p>\r\n      </vgr-expandable-div-header>\r\n      <vgr-expandable-div-content>\r\n        <p>Lite innehåll</p>\r\n        <p>Mer innehåll</p>\r\n      </vgr-expandable-div-content>\r\n    </vgr-expandable-div>\r\n  </div>\r\n  <div class=\"docs__api \">\r\n    <!-- API -->\r\n    <h3>Templatestruktur</h3>\r\n    <ul>\r\n      <li>\r\n        <code>&lt;vgr-expandable-div&gt;</code>, första elementet som representerar hela containern</li>\r\n      <li>\r\n        <code>&lt;vgr-expandable-div-header&gt;</code>, ger headeryta på diven som är klickbar och är alltid synlig.</li>\r\n      <li>\r\n        <code>&lt;vgr-expandable-div-content&gt;</code>, innehåll som kan döljas och visas när man klickar på headern.\r\n      </li>\r\n    </ul>\r\n    <br>\r\n    <strong>OBS!</strong> API nedan avser\r\n    <code>&lt;vgr-expandable-div&gt;</code>\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>expanded: boolean</td>\r\n        <td>Anger om sektionen är expanderad eller ej</td>\r\n        <td>[expanded]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>expandedChanged: EventEmitter&lt;boolean&gt;\r\n        </td>\r\n        <td>Event som triggras när sektionen expanderas/kollapsas.</td>\r\n        <td>(expandedChanged)=\"onExpandedChanged($event)</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag \">\r\n    <i>Under utveckling</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/expandable-div/expandable-div.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/expandable-div/expandable-div.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/expandable-div/expandable-div.component.ts":
/*!************************************************************!*\
  !*** ./src/app/expandable-div/expandable-div.component.ts ***!
  \************************************************************/
/*! exports provided: ExpandableDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableDivComponent", function() { return ExpandableDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpandableDivComponent = /** @class */ (function () {
    function ExpandableDivComponent(htmlEncoder) {
        this.exampleCode = "<vgr-expandable-div [expanded]=\"false\" (expandedChanged)=\"onExpandedChanged($event)\">\n  <vgr-expandable-div-header>\n    <p>Denna div \u00E4r collapsed fr\u00E5n b\u00F6rjan</p>\n  </vgr-expandable-div-header>\n  <vgr-expandable-div-content>\n    <p>Lite inneh\u00E5ll</p>\n    <p>Mer inneh\u00E5ll</p>\n  </vgr-expandable-div-content>\n</vgr-expandable-div>";
        this.exampleCodeMarkup =
            htmlEncoder.prepareHighlightedSection(this.exampleCode, 'HTML');
    }
    ExpandableDivComponent.prototype.ngOnInit = function () {
    };
    ExpandableDivComponent.prototype.onExpandedChanged = function (flag) { };
    ExpandableDivComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expandable-div',
            template: __webpack_require__(/*! ./expandable-div.component.html */ "./src/app/expandable-div/expandable-div.component.html"),
            styles: [__webpack_require__(/*! ./expandable-div.component.scss */ "./src/app/expandable-div/expandable-div.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], ExpandableDivComponent);
    return ExpandableDivComponent;
}());



/***/ }),

/***/ "./src/app/filter-tag/filter-tag.component.html":
/*!******************************************************!*\
  !*** ./src/app/filter-tag/filter-tag.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Filter tag'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>&lt;vgr-filter-tag&gt;</code> är avsedd att användas för att representera filter i en sökning. I kombination med\r\n      <code>&lt;vgr-filter-tag-group&gt;</code> kan filtren navigeras med piltangenterna.\r\n    </p>\r\n    <br>\r\n    <vgr-filter-tag>Filter</vgr-filter-tag>\r\n    <br>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div style=\"margin-bottom: 20px\">\r\n      <div><span style=\"font-weight: bold\">Enkelt exempel</span> - den filtrerade texten finns i För- eller Efternamn.</div>\r\n      <vgr-input [small]=\"true\" style=\"display: inline-block; \" #filterInput></vgr-input>\r\n      <vgr-button (click)=\"addFilter(filterInput.value)\">Lägg till filter</vgr-button>\r\n      <vgr-button (click)=\"removeAllFilters()\" style=\"margin-left: 20px;\">Ta bort alla filter</vgr-button>\r\n      <vgr-button (click)=\"disableFilters()\" style=\"margin-left: 20px;\">{{disabled ? 'Aktivera' : 'Inaktivera'}} filtertaggar</vgr-button>\r\n    </div>\r\n    <div style=\"margin-bottom: 20px\" *ngIf=\"filters.length\">\r\n      <vgr-filter-tag-group>\r\n        <vgr-filter-tag *ngFor=\"let filter of filters\" (remove)=\"removeFilter(filter)\" [disabled]=\"filter.disabled\">{{filter.text}}</vgr-filter-tag>\r\n      </vgr-filter-tag-group>\r\n    </div>\r\n    <ul>\r\n      <div *ngIf=\"filteredValues.length > 0\" class=\"list-row\">\r\n        <div class=\"list-column list-header\">Förnamn</div>\r\n        <div class=\"list-column list-header\">Efternamn</div>\r\n      </div>\r\n      <li *ngFor=\"let value of filteredValues\">\r\n        <div class=\"list-row\">\r\n          <div class=\"list-column\">{{value.firstName}}</div>\r\n          <div class=\"list-column\">{{value.surname}}</div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <br>\r\n    <div><span style=\"font-weight: bold\">Avancerat exempel</span> - Filtrera på Namn (För- eller Efternamn) samt möjlighet att filtrera på minimiålder och kön.</div>\r\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"extendedFilter()\" novalidate>\r\n      <div style=\"margin-bottom: 20px\">\r\n        <div style=\"display: flex; align-items: flex-end\">\r\n          <div>\r\n            <div>Namn:</div>\r\n            <div>\r\n              <vgr-input formControlName=\"name\"></vgr-input>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div>Minimiålder:</div>\r\n            <div>\r\n              <vgr-input formControlName=\"minimumAge\" [small]=\"true\"></vgr-input>\r\n            </div>\r\n          </div>\r\n          <div>            \r\n            <vgr-checkbox formControlName=\"women\" [label]=\"'Kvinnor'\" style=\"display: inline-block;\"></vgr-checkbox>\r\n            <vgr-checkbox formControlName=\"men\" [label]=\"'Män'\" style=\"display: inline-block; margin-left: 10px;\"></vgr-checkbox>\r\n          </div>\r\n          <vgr-button (click)=\"extendedFilter()\" style=\"margin-left: 20px;\">Filtrera</vgr-button>\r\n          <vgr-button (click)=\"removeAllExtendedFilters()\" style=\"margin-left: 20px;\">Ta bort alla filter</vgr-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div style=\"margin-bottom: 20px\" *ngIf=\"extendedFilters.length\">\r\n      <vgr-filter-tag-group>\r\n        <vgr-filter-tag *ngFor=\"let filter of extendedFilters\" (remove)=\"filter.remove()\">{{filter.text}}</vgr-filter-tag>\r\n      </vgr-filter-tag-group>\r\n    </div>\r\n    <ul style=\"margin-bottom: 20px;\">\r\n      <div *ngIf=\"extendedFilteredValues.length > 0\" class=\"list-row\">\r\n        <div class=\"list-column list-header\">Förnamn</div>\r\n        <div class=\"list-column list-header\">Efternamn</div>\r\n        <div class=\"list-column list-header\">Ålder</div>\r\n      </div>\r\n      <li *ngFor=\"let value of extendedFilteredValues\">\r\n        <div class=\"list-row\">\r\n          <div class=\"list-column\">{{value.firstName}}</div>\r\n          <div class=\"list-column\">{{value.surname}}</div>\r\n          <div class=\"list-column\">{{value.age}}</div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled: boolean</td>\r\n        <td>Inaktivera filter tag. Förvalt värde är\r\n          <code>false</code>.</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>ariaLabel: string</td>\r\n        <td>Värde för\r\n          <code>aria-label</code>. Förvalt värde är \"Ta bort filtrering [text]\", där [text] är text content för\r\n          <code>&lt;vgr-filter-tag&gt;</code>.</td>\r\n        <td>[ariaLabel]=\"En alternativ beskrivning.\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>remove: EventEmitter</td>\r\n        <td>Event som triggas efter att animationen för bortagning av filter är klar. Bör kopplas till uppdatering av tillstånd\r\n          för den bakomliggande filtreringen.</td>\r\n        <td>(remove)=\"removeFilter()\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      <code>&lt;vgr-filter-tag&gt;</code> har ett intern element av typen button och har alla dess WCAG egenskaper. \r\n      Default sätts <code>attr.aria-label</code> till \"Ta bort filtrering [text]\", där [text] är content för <code>&lt;vgr-filter-tag&gt;</code>. \r\n      Om input variabeln [disabled] sätts till <code>true</code> sätts även <code> aria.aria-disabled</code> till <code>true</code>\r\n    </p>\r\n  </div>\r\n</app-component-docs>"

/***/ }),

/***/ "./src/app/filter-tag/filter-tag.component.scss":
/*!******************************************************!*\
  !*** ./src/app/filter-tag/filter-tag.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-row {\n  width: 500px;\n  display: flex; }\n\n.list-column {\n  width: 120px; }\n\n.list-header {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/filter-tag/filter-tag.component.ts":
/*!****************************************************!*\
  !*** ./src/app/filter-tag/filter-tag.component.ts ***!
  \****************************************************/
/*! exports provided: FilterTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTagComponent", function() { return FilterTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterTagComponent = /** @class */ (function () {
    function FilterTagComponent() {
        this.values = [
            { 'firstName': 'Johanna', 'surname': 'Andersson' },
            { 'firstName': 'Anders', 'surname': 'Johansson' },
            { 'firstName': 'Elsa', 'surname': 'Andreasson' },
            { 'firstName': 'Kurt', 'surname': 'Olsson' },
            { 'firstName': 'John', 'surname': 'Stark' },
            { 'firstName': 'Lisa', 'surname': 'Lindgren' }
        ];
        this.filteredValues = this.values.slice();
        this.filters = [];
        this.disabled = false;
        this.extendedValues = [
            { 'firstName': 'Johanna', 'surname': 'Andersson', 'age': 25, 'gender': 'w' },
            { 'firstName': 'Anders', 'surname': 'Johansson', 'age': 51, 'gender': 'm' },
            { 'firstName': 'Elsa', 'surname': 'Andreasson', 'age': 15, 'gender': 'w' },
            { 'firstName': 'Kurt', 'surname': 'Olsson', 'age': 75, 'gender': 'm' },
            { 'firstName': 'John', 'surname': 'Stark', 'age': 30, 'gender': 'm' },
            { 'firstName': 'Lisa', 'surname': 'Lindgren', 'age': 19, 'gender': 'w' }
        ];
        this.extendedFilteredValues = this.extendedValues.slice();
        this.extendedFilters = [];
    }
    FilterTagComponent.prototype.ngOnInit = function () {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            minimumAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            women: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            men: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        }, { updateOn: 'blur' });
    };
    FilterTagComponent.prototype.addFilter = function (filterName) {
        var name = filterName;
        if (name) {
            var tag = {
                id: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid(),
                text: "" + name
            };
            this.filters.push(tag);
        }
        this.filterValues();
    };
    FilterTagComponent.prototype.removeFilter = function (filter) {
        this.filters.splice(this.filters.indexOf(filter), 1);
        this.filterValues();
    };
    FilterTagComponent.prototype.removeAllFilters = function () {
        this.filters = [];
        this.filteredValues = this.values.slice();
    };
    FilterTagComponent.prototype.filterValues = function () {
        var _this = this;
        if (this.filters.length) {
            this.filteredValues = this.values.filter(function (x) {
                return _this.filters.some(function (y) { return x.firstName.toLowerCase().includes(y.text.toLocaleLowerCase()); })
                    || _this.filters.some(function (y) { return x.surname.toLowerCase().includes(y.text.toLocaleLowerCase()); });
            });
        }
        else {
            this.filteredValues = this.values.slice();
        }
    };
    FilterTagComponent.prototype.disableFilters = function () {
        var _this = this;
        this.disabled = !this.disabled;
        this.filters.forEach(function (x) { return x.disabled = _this.disabled; });
    };
    FilterTagComponent.prototype.extendedFilter = function () {
        var _this = this;
        this.extendedFilters = [];
        var name = this.searchForm.get('name');
        if (name.value) {
            var tag = {
                id: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid(),
                text: "" + name.value,
                remove: function () { return _this.removeExtendedFilter(name); }
            };
            this.extendedFilters.push(tag);
        }
        var minimumAge = this.searchForm.get('minimumAge');
        if (minimumAge.value) {
            var tag = {
                id: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid(),
                text: "\u00C5lder > " + minimumAge.value,
                remove: function () { return _this.removeExtendedFilter(minimumAge); }
            };
            this.extendedFilters.push(tag);
        }
        var women = this.searchForm.get('women');
        if (women.value) {
            if (women.value) {
                var tag = {
                    id: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid(),
                    text: 'Kvinnor',
                    remove: function () { return _this.removeExtendedFilter(women); }
                };
                this.extendedFilters.push(tag);
            }
        }
        var men = this.searchForm.get('men');
        if (men.value) {
            if (men.value) {
                var tag = {
                    id: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["Guid"].newGuid(),
                    text: 'Män',
                    remove: function () { return _this.removeExtendedFilter(men); }
                };
                this.extendedFilters.push(tag);
            }
        }
        if (this.extendedFilters.length) {
            this.extendedFilteredValues = this.extendedValues.filter(function (x) {
                return (minimumAge.value ? x.age >= minimumAge.value : true) &&
                    (name.value ? x.firstName.toLowerCase().includes(name.value.toLowerCase())
                        || x.surname.toLowerCase().includes(name.value.toLowerCase()) : true) &&
                    (women.value && !men.value ? x.gender === 'w' : true) &&
                    (men.value && !women.value ? x.gender === 'm' : true);
            });
        }
        else {
            this.extendedFilteredValues = this.extendedValues.slice();
        }
    };
    FilterTagComponent.prototype.removeExtendedFilter = function (control) {
        control.reset();
        this.extendedFilter();
    };
    FilterTagComponent.prototype.removeAllExtendedFilters = function () {
        this.searchForm.reset();
        this.extendedFilter();
    };
    FilterTagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-tag',
            template: __webpack_require__(/*! ./filter-tag.component.html */ "./src/app/filter-tag/filter-tag.component.html"),
            styles: [__webpack_require__(/*! ./filter-tag.component.scss */ "./src/app/filter-tag/filter-tag.component.scss")]
        })
    ], FilterTagComponent);
    return FilterTagComponent;
}());



/***/ }),

/***/ "./src/app/filtertexbox/filtertexbox.component.html":
/*!**********************************************************!*\
  !*** ./src/app/filtertexbox/filtertexbox.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'filter textbox'\">\r\n  <div class=\" docs__overview \">\r\n    <p>\r\n      <code> &lt;vgr-filter-textbox&gt;</code> är ett fält som används för sökning/filtrering. Notera att fältet enbart håller värde\r\n      och notifierar när det ändras. Sökning/filtrering hanteras externt.\r\n    </p>\r\n    <br>\r\n    <vgr-filter-textbox></vgr-filter-textbox>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples \">\r\n    <vgr-filter-textbox (valueChanged)=\"searchvalue = $event\"></vgr-filter-textbox>\r\n    <p>Sökning: {{searchvalue}}</p>\r\n  </div>\r\n  <div class=\"docs__api \">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>value: string</td>\r\n        <td>Värde att binda till</td>\r\n        <td>[value]=\"FörIFyllt\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>valueChanged: EventEmitter &lt;string&gt;\r\n        </td>\r\n        <td>Event när värdet ändras. Triggras varje gång ett tecken matas in.</td>\r\n        <td> (valueChanged)=\"searchvalue = $event\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag \">\r\n    <i>Under utveckling</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/filtertexbox/filtertexbox.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/filtertexbox/filtertexbox.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filtertexbox/filtertexbox.component.ts":
/*!********************************************************!*\
  !*** ./src/app/filtertexbox/filtertexbox.component.ts ***!
  \********************************************************/
/*! exports provided: FiltertexboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltertexboxComponent", function() { return FiltertexboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiltertexboxComponent = /** @class */ (function () {
    function FiltertexboxComponent() {
    }
    FiltertexboxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], FiltertexboxComponent.prototype, "searchvalue", void 0);
    FiltertexboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filtertexbox',
            template: __webpack_require__(/*! ./filtertexbox.component.html */ "./src/app/filtertexbox/filtertexbox.component.html"),
            styles: [__webpack_require__(/*! ./filtertexbox.component.scss */ "./src/app/filtertexbox/filtertexbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FiltertexboxComponent);
    return FiltertexboxComponent;
}());



/***/ }),

/***/ "./src/app/formattemplate/formattemplate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/formattemplate/formattemplate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n    <vgr-page-header [title]=\"'Formatmall'\">\r\n    </vgr-page-header>\r\n\r\n    <vgr-page-body>\r\n        <vgr-page-block>\r\n            <div class=\"column-layout\">\r\n                <span>Fonten som används är\r\n        <strong>Calibri</strong>. Storlek på brödtext och rubriker anpassas efter fönstrets bredd i två steg.\r\n        <br/> Liten storlek är\r\n        <strong>1366px - 1458px</strong>. Stor storlek\r\n        <strong>1459px</strong> och större.</span>\r\n                <h1 class=\"font-example\"></h1>\r\n                <h2 class=\"font-example\"></h2>\r\n                <h3 class=\"font-example\"></h3>\r\n                <h4 class=\"font-example\"></h4>\r\n                <div class=\"font-example\"></div>\r\n                <div class=\"font-example text--white\"></div>\r\n                <div>\r\n                    <strong class=\"font-example\"></strong>\r\n                </div>\r\n            </div>\r\n        </vgr-page-block>\r\n    </vgr-page-body>\r\n</vgr-page>"

/***/ }),

/***/ "./src/app/formattemplate/formattemplate.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/formattemplate/formattemplate.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formattemplate/formattemplate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/formattemplate/formattemplate.component.ts ***!
  \************************************************************/
/*! exports provided: FormattemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattemplateComponent", function() { return FormattemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormattemplateComponent = /** @class */ (function () {
    function FormattemplateComponent() {
    }
    FormattemplateComponent.prototype.ngOnInit = function () {
    };
    FormattemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formattemplate',
            template: __webpack_require__(/*! ./formattemplate.component.html */ "./src/app/formattemplate/formattemplate.component.html"),
            styles: [__webpack_require__(/*! ./formattemplate.component.scss */ "./src/app/formattemplate/formattemplate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormattemplateComponent);
    return FormattemplateComponent;
}());



/***/ }),

/***/ "./src/app/headers/headers.component.html":
/*!************************************************!*\
  !*** ./src/app/headers/headers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'header/header menu'\">\r\n  <div class=\"docs__overview\" style=\"height:420px\">\r\n    <code>&lt;vgr-header&gt;</code> är en komponent som skall användas i huvudet på sidorna och ligga där fast när användaren navigerar\r\n    i systemet.\r\n    <br> Färgen kan sättas beroende på vilket system som är aktivt. I portalen beror färgen på om användaren har ett eller flera\r\n    system. Om bara ett system finns, är det den färgen som gäller. Headern innehåller en transparent bild som gör att man\r\n    bara behöver sätta headerns bakgrundsfärg genom rätt klassnamn på headern eller på ett föräldraelement. I det \"neutrala\"\r\n    läget skall inte den transparenta bilden synas. Headern kan visas i olika utföranden, man kan ha den med eller utan användarinformation\r\n    samt med eller utan meny och olika kombinationer av dessa. I exemplet kan man se de olika vyerna.\r\n    <br>\r\n    <br> På headern kan man även lägga till en kontextmeny (\r\n    <code>&lt;vgr-header-menu&gt;</code>). Den menyn kan endast bo i headern.\r\n    <br>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <vgr-header class=\"header--inline\" [userName]=\"'Neo Åhn'\" [headerMenu]=\"headerMenu\"></vgr-header>\r\n    </div>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div class=\"column-layout\">\r\n      <h3>Header med user och meny (temad grön)</h3>\r\n      <vgr-header class=\"header--inline theme--green\" [userName]=\"'Nova Audit'\" [headerMenu]=\"simpleHeaderMenu\"></vgr-header>\r\n      <div>\r\n        <h3>Markup för en menyn i exemplet ovan, tryck på pilen i headern så ser du kontextmenyn</h3>\r\n        <section [innerHTML]=\"exampleCodeSimpleMenyMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <h3>Header med user utan meny (temad röd)</h3>\r\n      <vgr-header class=\"header--inline theme--red\" [userName]=\"'Nils Åstrand'\"></vgr-header>\r\n      <h3>Header utan user och meny (temad blå)</h3>\r\n      <vgr-header class=\"header--inline theme--blue\"></vgr-header>\r\n      <h3>Header utan user och meny (Standard)</h3>\r\n      <vgr-header class=\"header--inline\"></vgr-header>\r\n      <h3>Header med systeminformation</h3>\r\n      <vgr-header [systemText]=\"'Development'\" class=\"header--inline\"></vgr-header>\r\n      <h3>Header utan user och \"swosh\" (temad röd)</h3>\r\n      <vgr-header class=\"header--inline theme--red\" hideSwosh=\"true\"></vgr-header>\r\n      <h3>Header med egen logotyp utan \"swosh\" (temad grön)</h3>\r\n      <vgr-header class=\"header--inline theme--green\" hideSwosh=\"true\" logoImage=\"/assets/images/Annanlogotyp.svg\"></vgr-header>\r\n    </div>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <h3>Properties vgr-header</h3>\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>headerMenu : IHeaderMenu</td>\r\n        <td>Menyn man vill visa (IHeaderMenu)</td>\r\n        <td>[headerMenu]=\"contextMenu\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>userName : string</td>\r\n        <td>Sätter namnet på texten för den som är inloggad. Intialerna för cirkeln är default först bokstaven i första och sista\r\n          namnet. Exemepel: \"Göte Borg\" får initialerna GB, och \"Göte Borg Stad\" får GS</td>\r\n        <td>[userName]=\"signedInUser\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>initials : string</td>\r\n        <td>Skriver över initialerna med egna initialer</td>\r\n        <td>[initials]=\"'GB'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>textColor : string</td>\r\n        <td>Färgen på texten i ringen. Accepterar html-kompatibla färgväden (HEX eller färgnamn)</td>\r\n        <td>[textColor]=\"'white'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>circleColor : string</td>\r\n        <td>Färgen på cirkeln. Accepterar html-kompatibla färgväden (HEX eller färgnamn)</td>\r\n        <td>[circleColor]=\"'#f9dede'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>systemText : string</td>\r\n        <td>Text för att påvisa vilken miljö man befinner sig i. Ska inte visas i produktion. Upp till immplementatören. </td>\r\n        <td>[systemtext]=\"'development'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>hideSwosh : boolean</td>\r\n        <td>Möjlighet att dölja \"swoshen\" som ligger till höger bakom informationen om vem som är inloggad.</td>\r\n        <td>hideSwosh=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>logoImage : string</td>\r\n        <td>Möjlighet att välja en egen logotyp genom att skicka in en URL till en bildfil.</td>\r\n        <td>logoImage=\"http://url.to/logo.png\"</td>\r\n      </tr>\r\n    </table>\r\n    <br>\r\n    <h3>IHeaderMenu</h3>\r\n    <table class=\"property-table\" style=\"margin-bottom: 20px\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>menuItems: IHeaderMenuItem[]</td>\r\n        <td>menyalternativ.\r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table>\r\n    <h3>IHeaderMenuItem</h3>\r\n    <table class=\"property-table\" style=\"margin-bottom: 20px\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>displayName: string</td>\r\n        <td>Menyalternativets rubrik</td>\r\n        <td>displayName: 'Min sida'</td>\r\n      </tr>\r\n      <tr>\r\n        <td>url: string</td>\r\n        <td>Länk att följa vid klick på länken.</td>\r\n        <td>url: \"/my-route\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>isInternalLink: boolean</td>\r\n        <td>Anger om alternativet skall öppnas i ett nytt fönster eller ej.</td>\r\n        <td>isInternalLink: true</td>\r\n      </tr>\r\n      <tr>\r\n        <td>isSeparator: boolean</td>\r\n        <td>Anger om alternativet är en horisontell linje eller ej.</td>\r\n        <td>isSeparator: true</td>\r\n      </tr>\r\n      <tr>\r\n        <td>menuItems: IHeaderMenuItem[]</td>\r\n        <td>Eventuella underalternativ för menyalternativet.\r\n          <strong>OBS!</strong> endast en undernivå är möjlig</td>\r\n        <td></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <i>Under utveckling</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/headers/headers.component.scss":
/*!************************************************!*\
  !*** ./src/app/headers/headers.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/headers/headers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/headers/headers.component.ts ***!
  \**********************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadersComponent = /** @class */ (function () {
    function HeadersComponent(htmlEncoder) {
        this.exampleCodeHeaderMenu = "    this.headerMenu = {\n    menuItems: [\n      {\n        displayName: 'Internt menyval',\n        url: '/minsida',\n        isInternalLink: true\n      },\n      {\n        isSeparator: true\n      },\n      {\n        displayName: 'Externt menyval',\n        menuItems: [\n          {\n            displayName: 'Submenyval vgregion',\n            url: 'http://www.vgregion.se',\n            isInternalLink: false\n          }\n        ] as IHeaderMenuItem[]\n      }\n    ] as IHeaderMenuItem[]\n  } as IHeaderMenu;";
        this.exampleCodeSimpleMenyMarkup = htmlEncoder.prepareHighlightedSection(this.exampleCodeHeaderMenu, 'typescript');
        this.setMenuItems();
    }
    HeadersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.headerComponent.toggleHeaderMenu(new Event(null));
        }, 200);
    };
    HeadersComponent.prototype.setMenuItems = function () {
        this.simpleHeaderMenu = {
            menuItems: [
                {
                    displayName: 'Internt menyval',
                    url: '/minsida',
                    isInternalLink: true
                },
                {
                    isSeparator: true
                },
                {
                    displayName: 'Externt menyval',
                    menuItems: [
                        {
                            displayName: 'Submenyval vgregion',
                            url: 'http://www.vgregion.se',
                            isInternalLink: false
                        }
                    ]
                }
            ]
        };
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
                            url: "http://www.vgregion.se/halsa-och-vard/vardgivarwebben/uppdrag-och-avtal/vardval-vg-primarvard/krav--och-kvalitetsbok-vg-primarvard/",
                            isInternalLink: false
                        },
                        {
                            displayName: 'Rehab',
                            url: 'http://www.vgregion.se/halsa-och-vard/vardgivarwebben/uppdrag-och-avtal/vardval-rehab/krav--och-kvalitetsbok/',
                            isInternalLink: false
                        }
                    ]
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
                    ]
                },
                {
                    displayName: 'Kontakt',
                    url: 'http://www.vgregion.se/halsa-och-vard/vardgivarwebben/it/it-system/it-stod-for-vardval-rehab/kontaktpersoner/',
                    isInternalLink: false
                }
            ]
        };
    };
    HeadersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]),
        __metadata("design:type", vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"])
    ], HeadersComponent.prototype, "headerComponent", void 0);
    HeadersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__(/*! ./headers.component.html */ "./src/app/headers/headers.component.html"),
            styles: [__webpack_require__(/*! ./headers.component.scss */ "./src/app/headers/headers.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_2__["HtmlEncodeService"]])
    ], HeadersComponent);
    return HeadersComponent;
}());



/***/ }),

/***/ "./src/app/html-encode.service.ts":
/*!****************************************!*\
  !*** ./src/app/html-encode.service.ts ***!
  \****************************************/
/*! exports provided: HtmlEncodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlEncodeService", function() { return HtmlEncodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HtmlEncodeService = /** @class */ (function () {
    function HtmlEncodeService() {
    }
    HtmlEncodeService.prototype.escape = function (string) {
        return string
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    HtmlEncodeService.prototype.prepareHighlightedSection = function (htmlCode, language) {
        if (language === void 0) { language = 'html'; }
        return '<pre><code class="highlight ' + language + '">' + this.escape(htmlCode) + '</code></pre>';
    };
    HtmlEncodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HtmlEncodeService);
    return HtmlEncodeService;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.html":
/*!********************************************!*\
  !*** ./src/app/icons/icons.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Ikoner'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h2>Dokumentation för tillgängliga ikoner i komponentkartan</h2>\r\n      <p>För att kunna använda sig utav de ikoner (svg-bilder) som finns i komponentkartan, så finns deras klassnamn representerade\r\n        i tabellen nedanför.\r\n        <br>\r\n        <br>Svg-bilderna är kopplade till en background-image för samtliga klasser i komponentkartans ikon-bibliotek.\r\n      </p>\r\n      <br>\r\n      <br>\r\n      <table class=\"property-table\" style=\"width:50%\">\r\n        <tr>\r\n          <th>Namn</th>\r\n          <th>Ikon</th>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-plus\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-plus\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-minus\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-minus\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-edit\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-edit\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-message\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-message\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-trashcan\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-trashcan\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-ok-check-green\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-ok-check-green\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-ok-check\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-ok-check\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-question\r\n          </td>\r\n          <td>\r\n            <span class=\"vgr-icon-question\"></span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-exclamation\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-exclamation\"></div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            vgr-icon-exclamation--red\r\n          </td>\r\n          <td>\r\n            <div class=\"vgr-icon-exclamation--red\"></div>\r\n          </td>\r\n        </tr>\r\n\r\n      </table>\r\n      <br>\r\n      <h2>Exempel</h2>\r\n      <br> Lägga till en ikon i html:\r\n      <section style=\"width:50%\" [innerHTML]=\"iconExamplesHTML\" highlight-js-content=\".highlight\"></section>\r\n\r\n      <br> Skapa en notifiering i typescript:\r\n      <br>\r\n      <section style=\"width:70%\" [innerHTML]=\"iconExamplesTS2\" highlight-js-content=\".highlight\"></section>\r\n\r\n\r\n\r\n      <br> När man vill skicka med en ikon till en notifiering i typescript:\r\n      <br>\r\n      <section style=\"width:70%\" [innerHTML]=\"iconExamplesTS\" highlight-js-content=\".highlight\"></section>\r\n\r\n\r\n\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n\r\n</vgr-page>"

/***/ }),

/***/ "./src/app/icons/icons.component.scss":
/*!********************************************!*\
  !*** ./src/app/icons/icons.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  vertical-align: middle;\n  padding-right: 0; }\n\nvgr-icon-question {\n  width: 60px !important; }\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = /** @class */ (function () {
    function IconsComponent(htmlEncoder) {
        this.html = "<div class=\"vgr-icon-edit\"></div>";
        this.code = "row.notifyOnCollapse(row.previewObject.enhet + ' sparades', 'vgr-icon-ok-check-green');";
        this.code2 = "this.row.notification = {\n  message: 'Ett meddelande', icon: 'vgr-icon-message',\n  type: NotificationType.Permanent\n} as RowNotification;";
        this.iconExamplesTS = htmlEncoder.prepareHighlightedSection(this.code, 'typescript');
        this.iconExamplesTS2 = htmlEncoder.prepareHighlightedSection(this.code2, 'typescript');
        this.iconExamplesHTML = htmlEncoder.prepareHighlightedSection(this.html, 'html');
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/inputfields/cityservice.ts":
/*!********************************************!*\
  !*** ./src/app/inputfields/cityservice.ts ***!
  \********************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CityService = /** @class */ (function () {
    function CityService() {
        this.cities = [
            {
                'city': 'New York',
                'growth_from_2000_to_2013': '4.8%',
                'latitude': 40.7127837,
                'longitude': -74.0059413,
                'population': '8405837',
                'rank': '1',
                'state': 'New York'
            },
            {
                'city': 'Los Angeles',
                'growth_from_2000_to_2013': '4.8%',
                'latitude': 34.0522342,
                'longitude': -118.2436849,
                'population': '3884307',
                'rank': '2',
                'state': 'California'
            },
            {
                'city': 'Chicago',
                'growth_from_2000_to_2013': '-6.1%',
                'latitude': 41.8781136,
                'longitude': -87.6297982,
                'population': '2718782',
                'rank': '3',
                'state': 'Illinois'
            },
            {
                'city': 'Houston',
                'growth_from_2000_to_2013': '11.0%',
                'latitude': 29.7604267,
                'longitude': -95.3698028,
                'population': '2195914',
                'rank': '4',
                'state': 'Texas'
            },
            {
                'city': 'Philadelphia',
                'growth_from_2000_to_2013': '2.6%',
                'latitude': 39.9525839,
                'longitude': -75.1652215,
                'population': '1553165',
                'rank': '5',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Phoenix',
                'growth_from_2000_to_2013': '14.0%',
                'latitude': 33.4483771,
                'longitude': -112.0740373,
                'population': '1513367',
                'rank': '6',
                'state': 'Arizona'
            },
            {
                'city': 'San Antonio',
                'growth_from_2000_to_2013': '21.0%',
                'latitude': 29.4241219,
                'longitude': -98.49362819999999,
                'population': '1409019',
                'rank': '7',
                'state': 'Texas'
            },
            {
                'city': 'San Diego',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 32.715738,
                'longitude': -117.1610838,
                'population': '1355896',
                'rank': '8',
                'state': 'California'
            },
            {
                'city': 'Dallas',
                'growth_from_2000_to_2013': '5.6%',
                'latitude': 32.7766642,
                'longitude': -96.79698789999999,
                'population': '1257676',
                'rank': '9',
                'state': 'Texas'
            },
            {
                'city': 'San Jose',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 37.3382082,
                'longitude': -121.8863286,
                'population': '998537',
                'rank': '10',
                'state': 'California'
            },
            {
                'city': 'Austin',
                'growth_from_2000_to_2013': '31.7%',
                'latitude': 30.267153,
                'longitude': -97.7430608,
                'population': '885400',
                'rank': '11',
                'state': 'Texas'
            },
            {
                'city': 'Indianapolis',
                'growth_from_2000_to_2013': '7.8%',
                'latitude': 39.768403,
                'longitude': -86.158068,
                'population': '843393',
                'rank': '12',
                'state': 'Indiana'
            },
            {
                'city': 'Jacksonville',
                'growth_from_2000_to_2013': '14.3%',
                'latitude': 30.3321838,
                'longitude': -81.65565099999999,
                'population': '842583',
                'rank': '13',
                'state': 'Florida'
            },
            {
                'city': 'San Francisco',
                'growth_from_2000_to_2013': '7.7%',
                'latitude': 37.7749295,
                'longitude': -122.4194155,
                'population': '837442',
                'rank': '14',
                'state': 'California'
            },
            {
                'city': 'Columbus',
                'growth_from_2000_to_2013': '14.8%',
                'latitude': 39.9611755,
                'longitude': -82.99879419999999,
                'population': '822553',
                'rank': '15',
                'state': 'Ohio'
            },
            {
                'city': 'Charlotte',
                'growth_from_2000_to_2013': '39.1%',
                'latitude': 35.2270869,
                'longitude': -80.8431267,
                'population': '792862',
                'rank': '16',
                'state': 'North Carolina'
            },
            {
                'city': 'Fort Worth',
                'growth_from_2000_to_2013': '45.1%',
                'latitude': 32.7554883,
                'longitude': -97.3307658,
                'population': '792727',
                'rank': '17',
                'state': 'Texas'
            },
            {
                'city': 'Detroit',
                'growth_from_2000_to_2013': '-27.1%',
                'latitude': 42.331427,
                'longitude': -83.0457538,
                'population': '688701',
                'rank': '18',
                'state': 'Michigan'
            },
            {
                'city': 'El Paso',
                'growth_from_2000_to_2013': '19.4%',
                'latitude': 31.7775757,
                'longitude': -106.4424559,
                'population': '674433',
                'rank': '19',
                'state': 'Texas'
            },
            {
                'city': 'Memphis',
                'growth_from_2000_to_2013': '-5.3%',
                'latitude': 35.1495343,
                'longitude': -90.0489801,
                'population': '653450',
                'rank': '20',
                'state': 'Tennessee'
            },
            {
                'city': 'Seattle',
                'growth_from_2000_to_2013': '15.6%',
                'latitude': 47.6062095,
                'longitude': -122.3320708,
                'population': '652405',
                'rank': '21',
                'state': 'Washington'
            },
            {
                'city': 'Denver',
                'growth_from_2000_to_2013': '16.7%',
                'latitude': 39.7392358,
                'longitude': -104.990251,
                'population': '649495',
                'rank': '22',
                'state': 'Colorado'
            },
            {
                'city': 'Washington',
                'growth_from_2000_to_2013': '13.0%',
                'latitude': 38.9071923,
                'longitude': -77.0368707,
                'population': '646449',
                'rank': '23',
                'state': 'District of Columbia'
            },
            {
                'city': 'Boston',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 42.3600825,
                'longitude': -71.0588801,
                'population': '645966',
                'rank': '24',
                'state': 'Massachusetts'
            },
            {
                'city': 'Nashville-Davidson',
                'growth_from_2000_to_2013': '16.2%',
                'latitude': 36.1626638,
                'longitude': -86.7816016,
                'population': '634464',
                'rank': '25',
                'state': 'Tennessee'
            },
            {
                'city': 'Baltimore',
                'growth_from_2000_to_2013': '-4.0%',
                'latitude': 39.2903848,
                'longitude': -76.6121893,
                'population': '622104',
                'rank': '26',
                'state': 'Maryland'
            },
            {
                'city': 'Oklahoma City',
                'growth_from_2000_to_2013': '20.2%',
                'latitude': 35.4675602,
                'longitude': -97.5164276,
                'population': '610613',
                'rank': '27',
                'state': 'Oklahoma'
            },
            {
                'city': 'Louisville/Jefferson County',
                'growth_from_2000_to_2013': '10.0%',
                'latitude': 38.2526647,
                'longitude': -85.7584557,
                'population': '609893',
                'rank': '28',
                'state': 'Kentucky'
            },
            {
                'city': 'Portland',
                'growth_from_2000_to_2013': '15.0%',
                'latitude': 45.5230622,
                'longitude': -122.6764816,
                'population': '609456',
                'rank': '29',
                'state': 'Oregon'
            },
            {
                'city': 'Las Vegas',
                'growth_from_2000_to_2013': '24.5%',
                'latitude': 36.1699412,
                'longitude': -115.1398296,
                'population': '603488',
                'rank': '30',
                'state': 'Nevada'
            },
            {
                'city': 'Milwaukee',
                'growth_from_2000_to_2013': '0.3%',
                'latitude': 43.0389025,
                'longitude': -87.9064736,
                'population': '599164',
                'rank': '31',
                'state': 'Wisconsin'
            },
            {
                'city': 'Albuquerque',
                'growth_from_2000_to_2013': '23.5%',
                'latitude': 35.0853336,
                'longitude': -106.6055534,
                'population': '556495',
                'rank': '32',
                'state': 'New Mexico'
            },
            {
                'city': 'Tucson',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 32.2217429,
                'longitude': -110.926479,
                'population': '526116',
                'rank': '33',
                'state': 'Arizona'
            },
            {
                'city': 'Fresno',
                'growth_from_2000_to_2013': '18.3%',
                'latitude': 36.7468422,
                'longitude': -119.7725868,
                'population': '509924',
                'rank': '34',
                'state': 'California'
            },
            {
                'city': 'Sacramento',
                'growth_from_2000_to_2013': '17.2%',
                'latitude': 38.5815719,
                'longitude': -121.4943996,
                'population': '479686',
                'rank': '35',
                'state': 'California'
            },
            {
                'city': 'Long Beach',
                'growth_from_2000_to_2013': '1.5%',
                'latitude': 33.7700504,
                'longitude': -118.1937395,
                'population': '469428',
                'rank': '36',
                'state': 'California'
            },
            {
                'city': 'Kansas City',
                'growth_from_2000_to_2013': '5.5%',
                'latitude': 39.0997265,
                'longitude': -94.5785667,
                'population': '467007',
                'rank': '37',
                'state': 'Missouri'
            },
            {
                'city': 'Mesa',
                'growth_from_2000_to_2013': '13.5%',
                'latitude': 33.4151843,
                'longitude': -111.8314724,
                'population': '457587',
                'rank': '38',
                'state': 'Arizona'
            },
            {
                'city': 'Virginia Beach',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 36.8529263,
                'longitude': -75.97798499999999,
                'population': '448479',
                'rank': '39',
                'state': 'Virginia'
            },
            {
                'city': 'Atlanta',
                'growth_from_2000_to_2013': '6.2%',
                'latitude': 33.7489954,
                'longitude': -84.3879824,
                'population': '447841',
                'rank': '40',
                'state': 'Georgia'
            },
            {
                'city': 'Colorado Springs',
                'growth_from_2000_to_2013': '21.4%',
                'latitude': 38.8338816,
                'longitude': -104.8213634,
                'population': '439886',
                'rank': '41',
                'state': 'Colorado'
            },
            {
                'city': 'Omaha',
                'growth_from_2000_to_2013': '5.9%',
                'latitude': 41.2523634,
                'longitude': -95.99798829999999,
                'population': '434353',
                'rank': '42',
                'state': 'Nebraska'
            },
            {
                'city': 'Raleigh',
                'growth_from_2000_to_2013': '48.7%',
                'latitude': 35.7795897,
                'longitude': -78.6381787,
                'population': '431746',
                'rank': '43',
                'state': 'North Carolina'
            },
            {
                'city': 'Miami',
                'growth_from_2000_to_2013': '14.9%',
                'latitude': 25.7616798,
                'longitude': -80.1917902,
                'population': '417650',
                'rank': '44',
                'state': 'Florida'
            },
            {
                'city': 'Oakland',
                'growth_from_2000_to_2013': '1.3%',
                'latitude': 37.8043637,
                'longitude': -122.2711137,
                'population': '406253',
                'rank': '45',
                'state': 'California'
            },
            {
                'city': 'Minneapolis',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 44.977753,
                'longitude': -93.2650108,
                'population': '400070',
                'rank': '46',
                'state': 'Minnesota'
            },
            {
                'city': 'Tulsa',
                'growth_from_2000_to_2013': '1.3%',
                'latitude': 36.1539816,
                'longitude': -95.99277500000001,
                'population': '398121',
                'rank': '47',
                'state': 'Oklahoma'
            },
            {
                'city': 'Cleveland',
                'growth_from_2000_to_2013': '-18.1%',
                'latitude': 41.49932,
                'longitude': -81.6943605,
                'population': '390113',
                'rank': '48',
                'state': 'Ohio'
            },
            {
                'city': 'Wichita',
                'growth_from_2000_to_2013': '9.7%',
                'latitude': 37.688889,
                'longitude': -97.336111,
                'population': '386552',
                'rank': '49',
                'state': 'Kansas'
            },
            {
                'city': 'Arlington',
                'growth_from_2000_to_2013': '13.3%',
                'latitude': 32.735687,
                'longitude': -97.10806559999999,
                'population': '379577',
                'rank': '50',
                'state': 'Texas'
            },
            {
                'city': 'New Orleans',
                'growth_from_2000_to_2013': '-21.6%',
                'latitude': 29.95106579999999,
                'longitude': -90.0715323,
                'population': '378715',
                'rank': '51',
                'state': 'Louisiana'
            },
            {
                'city': 'Bakersfield',
                'growth_from_2000_to_2013': '48.4%',
                'latitude': 35.3732921,
                'longitude': -119.0187125,
                'population': '363630',
                'rank': '52',
                'state': 'California'
            },
            {
                'city': 'Tampa',
                'growth_from_2000_to_2013': '16.0%',
                'latitude': 27.950575,
                'longitude': -82.4571776,
                'population': '352957',
                'rank': '53',
                'state': 'Florida'
            },
            {
                'city': 'Honolulu',
                'growth_from_2000_to_2013': '-6.2%',
                'latitude': 21.3069444,
                'longitude': -157.8583333,
                'population': '347884',
                'rank': '54',
                'state': 'Hawaii'
            },
            {
                'city': 'Aurora',
                'growth_from_2000_to_2013': '24.4%',
                'latitude': 39.7294319,
                'longitude': -104.8319195,
                'population': '345803',
                'rank': '55',
                'state': 'Colorado'
            },
            {
                'city': 'Anaheim',
                'growth_from_2000_to_2013': '4.7%',
                'latitude': 33.8352932,
                'longitude': -117.9145036,
                'population': '345012',
                'rank': '56',
                'state': 'California'
            },
            {
                'city': 'Santa Ana',
                'growth_from_2000_to_2013': '-1.2%',
                'latitude': 33.7455731,
                'longitude': -117.8678338,
                'population': '334227',
                'rank': '57',
                'state': 'California'
            },
            {
                'city': 'St. Louis',
                'growth_from_2000_to_2013': '-8.2%',
                'latitude': 38.6270025,
                'longitude': -90.19940419999999,
                'population': '318416',
                'rank': '58',
                'state': 'Missouri'
            },
            {
                'city': 'Riverside',
                'growth_from_2000_to_2013': '22.5%',
                'latitude': 33.9533487,
                'longitude': -117.3961564,
                'population': '316619',
                'rank': '59',
                'state': 'California'
            },
            {
                'city': 'Corpus Christi',
                'growth_from_2000_to_2013': '14.1%',
                'latitude': 27.8005828,
                'longitude': -97.39638099999999,
                'population': '316381',
                'rank': '60',
                'state': 'Texas'
            },
            {
                'city': 'Lexington-Fayette',
                'growth_from_2000_to_2013': '18.0%',
                'latitude': 38.0405837,
                'longitude': -84.5037164,
                'population': '308428',
                'rank': '61',
                'state': 'Kentucky'
            },
            {
                'city': 'Pittsburgh',
                'growth_from_2000_to_2013': '-8.3%',
                'latitude': 40.44062479999999,
                'longitude': -79.9958864,
                'population': '305841',
                'rank': '62',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Anchorage',
                'growth_from_2000_to_2013': '15.4%',
                'latitude': 61.2180556,
                'longitude': -149.9002778,
                'population': '300950',
                'rank': '63',
                'state': 'Alaska'
            },
            {
                'city': 'Stockton',
                'growth_from_2000_to_2013': '21.8%',
                'latitude': 37.9577016,
                'longitude': -121.2907796,
                'population': '298118',
                'rank': '64',
                'state': 'California'
            },
            {
                'city': 'Cincinnati',
                'growth_from_2000_to_2013': '-10.1%',
                'latitude': 39.1031182,
                'longitude': -84.5120196,
                'population': '297517',
                'rank': '65',
                'state': 'Ohio'
            },
            {
                'city': 'St. Paul',
                'growth_from_2000_to_2013': '2.8%',
                'latitude': 44.9537029,
                'longitude': -93.0899578,
                'population': '294873',
                'rank': '66',
                'state': 'Minnesota'
            },
            {
                'city': 'Toledo',
                'growth_from_2000_to_2013': '-10.0%',
                'latitude': 41.6639383,
                'longitude': -83.55521200000001,
                'population': '282313',
                'rank': '67',
                'state': 'Ohio'
            },
            {
                'city': 'Greensboro',
                'growth_from_2000_to_2013': '22.3%',
                'latitude': 36.0726354,
                'longitude': -79.7919754,
                'population': '279639',
                'rank': '68',
                'state': 'North Carolina'
            },
            {
                'city': 'Newark',
                'growth_from_2000_to_2013': '2.1%',
                'latitude': 40.735657,
                'longitude': -74.1723667,
                'population': '278427',
                'rank': '69',
                'state': 'New Jersey'
            },
            {
                'city': 'Plano',
                'growth_from_2000_to_2013': '22.4%',
                'latitude': 33.0198431,
                'longitude': -96.6988856,
                'population': '274409',
                'rank': '70',
                'state': 'Texas'
            },
            {
                'city': 'Henderson',
                'growth_from_2000_to_2013': '51.0%',
                'latitude': 36.0395247,
                'longitude': -114.9817213,
                'population': '270811',
                'rank': '71',
                'state': 'Nevada'
            },
            {
                'city': 'Lincoln',
                'growth_from_2000_to_2013': '18.0%',
                'latitude': 40.8257625,
                'longitude': -96.6851982,
                'population': '268738',
                'rank': '72',
                'state': 'Nebraska'
            },
            {
                'city': 'Buffalo',
                'growth_from_2000_to_2013': '-11.3%',
                'latitude': 42.88644679999999,
                'longitude': -78.8783689,
                'population': '258959',
                'rank': '73',
                'state': 'New York'
            },
            {
                'city': 'Jersey City',
                'growth_from_2000_to_2013': '7.2%',
                'latitude': 40.72815749999999,
                'longitude': -74.0776417,
                'population': '257342',
                'rank': '74',
                'state': 'New Jersey'
            },
            {
                'city': 'Chula Vista',
                'growth_from_2000_to_2013': '46.2%',
                'latitude': 32.6400541,
                'longitude': -117.0841955,
                'population': '256780',
                'rank': '75',
                'state': 'California'
            },
            {
                'city': 'Fort Wayne',
                'growth_from_2000_to_2013': '1.0%',
                'latitude': 41.079273,
                'longitude': -85.1393513,
                'population': '256496',
                'rank': '76',
                'state': 'Indiana'
            },
            {
                'city': 'Orlando',
                'growth_from_2000_to_2013': '31.2%',
                'latitude': 28.5383355,
                'longitude': -81.3792365,
                'population': '255483',
                'rank': '77',
                'state': 'Florida'
            },
            {
                'city': 'St. Petersburg',
                'growth_from_2000_to_2013': '0.3%',
                'latitude': 27.773056,
                'longitude': -82.64,
                'population': '249688',
                'rank': '78',
                'state': 'Florida'
            },
            {
                'city': 'Chandler',
                'growth_from_2000_to_2013': '38.7%',
                'latitude': 33.3061605,
                'longitude': -111.8412502,
                'population': '249146',
                'rank': '79',
                'state': 'Arizona'
            },
            {
                'city': 'Laredo',
                'growth_from_2000_to_2013': '38.2%',
                'latitude': 27.5305671,
                'longitude': -99.48032409999999,
                'population': '248142',
                'rank': '80',
                'state': 'Texas'
            },
            {
                'city': 'Norfolk',
                'growth_from_2000_to_2013': '5.0%',
                'latitude': 36.8507689,
                'longitude': -76.28587259999999,
                'population': '246139',
                'rank': '81',
                'state': 'Virginia'
            },
            {
                'city': 'Durham',
                'growth_from_2000_to_2013': '29.9%',
                'latitude': 35.9940329,
                'longitude': -78.898619,
                'population': '245475',
                'rank': '82',
                'state': 'North Carolina'
            },
            {
                'city': 'Madison',
                'growth_from_2000_to_2013': '15.8%',
                'latitude': 43.0730517,
                'longitude': -89.4012302,
                'population': '243344',
                'rank': '83',
                'state': 'Wisconsin'
            },
            {
                'city': 'Lubbock',
                'growth_from_2000_to_2013': '19.6%',
                'latitude': 33.5778631,
                'longitude': -101.8551665,
                'population': '239538',
                'rank': '84',
                'state': 'Texas'
            },
            {
                'city': 'Irvine',
                'growth_from_2000_to_2013': '61.3%',
                'latitude': 33.6839473,
                'longitude': -117.7946942,
                'population': '236716',
                'rank': '85',
                'state': 'California'
            },
            {
                'city': 'Winston-Salem',
                'growth_from_2000_to_2013': '16.9%',
                'latitude': 36.09985959999999,
                'longitude': -80.244216,
                'population': '236441',
                'rank': '86',
                'state': 'North Carolina'
            },
            {
                'city': 'Glendale',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 33.5386523,
                'longitude': -112.1859866,
                'population': '234632',
                'rank': '87',
                'state': 'Arizona'
            },
            {
                'city': 'Garland',
                'growth_from_2000_to_2013': '8.5%',
                'latitude': 32.912624,
                'longitude': -96.63888329999999,
                'population': '234566',
                'rank': '88',
                'state': 'Texas'
            },
            {
                'city': 'Hialeah',
                'growth_from_2000_to_2013': '3.2%',
                'latitude': 25.8575963,
                'longitude': -80.2781057,
                'population': '233394',
                'rank': '89',
                'state': 'Florida'
            },
            {
                'city': 'Reno',
                'growth_from_2000_to_2013': '26.8%',
                'latitude': 39.5296329,
                'longitude': -119.8138027,
                'population': '233294',
                'rank': '90',
                'state': 'Nevada'
            },
            {
                'city': 'Chesapeake',
                'growth_from_2000_to_2013': '15.1%',
                'latitude': 36.7682088,
                'longitude': -76.2874927,
                'population': '230571',
                'rank': '91',
                'state': 'Virginia'
            },
            {
                'city': 'Gilbert',
                'growth_from_2000_to_2013': '96.0%',
                'latitude': 33.3528264,
                'longitude': -111.789027,
                'population': '229972',
                'rank': '92',
                'state': 'Arizona'
            },
            {
                'city': 'Baton Rouge',
                'growth_from_2000_to_2013': '0.4%',
                'latitude': 30.4582829,
                'longitude': -91.1403196,
                'population': '229426',
                'rank': '93',
                'state': 'Louisiana'
            },
            {
                'city': 'Irving',
                'growth_from_2000_to_2013': '19.1%',
                'latitude': 32.8140177,
                'longitude': -96.9488945,
                'population': '228653',
                'rank': '94',
                'state': 'Texas'
            },
            {
                'city': 'Scottsdale',
                'growth_from_2000_to_2013': '11.0%',
                'latitude': 33.4941704,
                'longitude': -111.9260519,
                'population': '226918',
                'rank': '95',
                'state': 'Arizona'
            },
            {
                'city': 'North Las Vegas',
                'growth_from_2000_to_2013': '92.2%',
                'latitude': 36.1988592,
                'longitude': -115.1175013,
                'population': '226877',
                'rank': '96',
                'state': 'Nevada'
            },
            {
                'city': 'Fremont',
                'growth_from_2000_to_2013': '10.0%',
                'latitude': 37.5482697,
                'longitude': -121.9885719,
                'population': '224922',
                'rank': '97',
                'state': 'California'
            },
            {
                'city': 'Boise City',
                'growth_from_2000_to_2013': '9.5%',
                'latitude': 43.6187102,
                'longitude': -116.2146068,
                'population': '214237',
                'rank': '98',
                'state': 'Idaho'
            },
            {
                'city': 'Richmond',
                'growth_from_2000_to_2013': '8.2%',
                'latitude': 37.5407246,
                'longitude': -77.4360481,
                'population': '214114',
                'rank': '99',
                'state': 'Virginia'
            },
            {
                'city': 'San Bernardino',
                'growth_from_2000_to_2013': '13.0%',
                'latitude': 34.1083449,
                'longitude': -117.2897652,
                'population': '213708',
                'rank': '100',
                'state': 'California'
            },
            {
                'city': 'Birmingham',
                'growth_from_2000_to_2013': '-12.3%',
                'latitude': 33.5206608,
                'longitude': -86.80248999999999,
                'population': '212113',
                'rank': '101',
                'state': 'Alabama'
            },
            {
                'city': 'Spokane',
                'growth_from_2000_to_2013': '7.0%',
                'latitude': 47.6587802,
                'longitude': -117.4260466,
                'population': '210721',
                'rank': '102',
                'state': 'Washington'
            },
            {
                'city': 'Rochester',
                'growth_from_2000_to_2013': '-4.1%',
                'latitude': 43.16103,
                'longitude': -77.6109219,
                'population': '210358',
                'rank': '103',
                'state': 'New York'
            },
            {
                'city': 'Des Moines',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 41.6005448,
                'longitude': -93.6091064,
                'population': '207510',
                'rank': '104',
                'state': 'Iowa'
            },
            {
                'city': 'Modesto',
                'growth_from_2000_to_2013': '7.7%',
                'latitude': 37.63909719999999,
                'longitude': -120.9968782,
                'population': '204933',
                'rank': '105',
                'state': 'California'
            },
            {
                'city': 'Fayetteville',
                'growth_from_2000_to_2013': '2.4%',
                'latitude': 35.0526641,
                'longitude': -78.87835849999999,
                'population': '204408',
                'rank': '106',
                'state': 'North Carolina'
            },
            {
                'city': 'Tacoma',
                'growth_from_2000_to_2013': '4.9%',
                'latitude': 47.2528768,
                'longitude': -122.4442906,
                'population': '203446',
                'rank': '107',
                'state': 'Washington'
            },
            {
                'city': 'Oxnard',
                'growth_from_2000_to_2013': '18.2%',
                'latitude': 34.1975048,
                'longitude': -119.1770516,
                'population': '203007',
                'rank': '108',
                'state': 'California'
            },
            {
                'city': 'Fontana',
                'growth_from_2000_to_2013': '38.3%',
                'latitude': 34.0922335,
                'longitude': -117.435048,
                'population': '203003',
                'rank': '109',
                'state': 'California'
            },
            {
                'city': 'Columbus',
                'growth_from_2000_to_2013': '8.7%',
                'latitude': 32.4609764,
                'longitude': -84.9877094,
                'population': '202824',
                'rank': '110',
                'state': 'Georgia'
            },
            {
                'city': 'Montgomery',
                'growth_from_2000_to_2013': '-0.1%',
                'latitude': 32.3668052,
                'longitude': -86.2999689,
                'population': '201332',
                'rank': '111',
                'state': 'Alabama'
            },
            {
                'city': 'Moreno Valley',
                'growth_from_2000_to_2013': '40.4%',
                'latitude': 33.9424658,
                'longitude': -117.2296717,
                'population': '201175',
                'rank': '112',
                'state': 'California'
            },
            {
                'city': 'Shreveport',
                'growth_from_2000_to_2013': '-0.1%',
                'latitude': 32.5251516,
                'longitude': -93.7501789,
                'population': '200327',
                'rank': '113',
                'state': 'Louisiana'
            },
            {
                'city': 'Aurora',
                'growth_from_2000_to_2013': '38.4%',
                'latitude': 41.7605849,
                'longitude': -88.32007150000001,
                'population': '199963',
                'rank': '114',
                'state': 'Illinois'
            },
            {
                'city': 'Yonkers',
                'growth_from_2000_to_2013': '1.8%',
                'latitude': 40.9312099,
                'longitude': -73.89874689999999,
                'population': '199766',
                'rank': '115',
                'state': 'New York'
            },
            {
                'city': 'Akron',
                'growth_from_2000_to_2013': '-8.6%',
                'latitude': 41.0814447,
                'longitude': -81.51900529999999,
                'population': '198100',
                'rank': '116',
                'state': 'Ohio'
            },
            {
                'city': 'Huntington Beach',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 33.660297,
                'longitude': -117.9992265,
                'population': '197575',
                'rank': '117',
                'state': 'California'
            },
            {
                'city': 'Little Rock',
                'growth_from_2000_to_2013': '7.6%',
                'latitude': 34.7464809,
                'longitude': -92.28959479999999,
                'population': '197357',
                'rank': '118',
                'state': 'Arkansas'
            },
            {
                'city': 'Augusta-Richmond County',
                'growth_from_2000_to_2013': '1.1%',
                'latitude': 33.4734978,
                'longitude': -82.0105148,
                'population': '197350',
                'rank': '119',
                'state': 'Georgia'
            },
            {
                'city': 'Amarillo',
                'growth_from_2000_to_2013': '12.8%',
                'latitude': 35.2219971,
                'longitude': -101.8312969,
                'population': '196429',
                'rank': '120',
                'state': 'Texas'
            },
            {
                'city': 'Glendale',
                'growth_from_2000_to_2013': '0.3%',
                'latitude': 34.1425078,
                'longitude': -118.255075,
                'population': '196021',
                'rank': '121',
                'state': 'California'
            },
            {
                'city': 'Mobile',
                'growth_from_2000_to_2013': '-1.9%',
                'latitude': 30.6953657,
                'longitude': -88.0398912,
                'population': '194899',
                'rank': '122',
                'state': 'Alabama'
            },
            {
                'city': 'Grand Rapids',
                'growth_from_2000_to_2013': '-2.8%',
                'latitude': 42.9633599,
                'longitude': -85.6680863,
                'population': '192294',
                'rank': '123',
                'state': 'Michigan'
            },
            {
                'city': 'Salt Lake City',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 40.7607793,
                'longitude': -111.8910474,
                'population': '191180',
                'rank': '124',
                'state': 'Utah'
            },
            {
                'city': 'Tallahassee',
                'growth_from_2000_to_2013': '21.8%',
                'latitude': 30.4382559,
                'longitude': -84.28073289999999,
                'population': '186411',
                'rank': '125',
                'state': 'Florida'
            },
            {
                'city': 'Huntsville',
                'growth_from_2000_to_2013': '16.3%',
                'latitude': 34.7303688,
                'longitude': -86.5861037,
                'population': '186254',
                'rank': '126',
                'state': 'Alabama'
            },
            {
                'city': 'Grand Prairie',
                'growth_from_2000_to_2013': '43.1%',
                'latitude': 32.7459645,
                'longitude': -96.99778459999999,
                'population': '183372',
                'rank': '127',
                'state': 'Texas'
            },
            {
                'city': 'Knoxville',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 35.9606384,
                'longitude': -83.9207392,
                'population': '183270',
                'rank': '128',
                'state': 'Tennessee'
            },
            {
                'city': 'Worcester',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 42.2625932,
                'longitude': -71.8022934,
                'population': '182544',
                'rank': '129',
                'state': 'Massachusetts'
            },
            {
                'city': 'Newport News',
                'growth_from_2000_to_2013': '0.9%',
                'latitude': 37.0870821,
                'longitude': -76.4730122,
                'population': '182020',
                'rank': '130',
                'state': 'Virginia'
            },
            {
                'city': 'Brownsville',
                'growth_from_2000_to_2013': '26.8%',
                'latitude': 25.9017472,
                'longitude': -97.4974838,
                'population': '181860',
                'rank': '131',
                'state': 'Texas'
            },
            {
                'city': 'Overland Park',
                'growth_from_2000_to_2013': '19.4%',
                'latitude': 38.9822282,
                'longitude': -94.6707917,
                'population': '181260',
                'rank': '132',
                'state': 'Kansas'
            },
            {
                'city': 'Santa Clarita',
                'growth_from_2000_to_2013': '15.3%',
                'latitude': 34.3916641,
                'longitude': -118.542586,
                'population': '179590',
                'rank': '133',
                'state': 'California'
            },
            {
                'city': 'Providence',
                'growth_from_2000_to_2013': '2.3%',
                'latitude': 41.8239891,
                'longitude': -71.4128343,
                'population': '177994',
                'rank': '134',
                'state': 'Rhode Island'
            },
            {
                'city': 'Garden Grove',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 33.7739053,
                'longitude': -117.9414477,
                'population': '175140',
                'rank': '135',
                'state': 'California'
            },
            {
                'city': 'Chattanooga',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 35.0456297,
                'longitude': -85.3096801,
                'population': '173366',
                'rank': '136',
                'state': 'Tennessee'
            },
            {
                'city': 'Oceanside',
                'growth_from_2000_to_2013': '6.6%',
                'latitude': 33.1958696,
                'longitude': -117.3794834,
                'population': '172794',
                'rank': '137',
                'state': 'California'
            },
            {
                'city': 'Jackson',
                'growth_from_2000_to_2013': '-6.8%',
                'latitude': 32.2987573,
                'longitude': -90.1848103,
                'population': '172638',
                'rank': '138',
                'state': 'Mississippi'
            },
            {
                'city': 'Fort Lauderdale',
                'growth_from_2000_to_2013': '0.7%',
                'latitude': 26.1224386,
                'longitude': -80.13731740000001,
                'population': '172389',
                'rank': '139',
                'state': 'Florida'
            },
            {
                'city': 'Santa Rosa',
                'growth_from_2000_to_2013': '15.2%',
                'latitude': 38.440429,
                'longitude': -122.7140548,
                'population': '171990',
                'rank': '140',
                'state': 'California'
            },
            {
                'city': 'Rancho Cucamonga',
                'growth_from_2000_to_2013': '32.7%',
                'latitude': 34.10639889999999,
                'longitude': -117.5931084,
                'population': '171386',
                'rank': '141',
                'state': 'California'
            },
            {
                'city': 'Port St. Lucie',
                'growth_from_2000_to_2013': '91.7%',
                'latitude': 27.2730492,
                'longitude': -80.3582261,
                'population': '171016',
                'rank': '142',
                'state': 'Florida'
            },
            {
                'city': 'Tempe',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 33.4255104,
                'longitude': -111.9400054,
                'population': '168228',
                'rank': '143',
                'state': 'Arizona'
            },
            {
                'city': 'Ontario',
                'growth_from_2000_to_2013': '5.5%',
                'latitude': 34.0633443,
                'longitude': -117.6508876,
                'population': '167500',
                'rank': '144',
                'state': 'California'
            },
            {
                'city': 'Vancouver',
                'growth_from_2000_to_2013': '14.2%',
                'latitude': 45.6387281,
                'longitude': -122.6614861,
                'population': '167405',
                'rank': '145',
                'state': 'Washington'
            },
            {
                'city': 'Cape Coral',
                'growth_from_2000_to_2013': '60.4%',
                'latitude': 26.5628537,
                'longitude': -81.9495331,
                'population': '165831',
                'rank': '146',
                'state': 'Florida'
            },
            {
                'city': 'Sioux Falls',
                'growth_from_2000_to_2013': '31.1%',
                'latitude': 43.5445959,
                'longitude': -96.73110340000001,
                'population': '164676',
                'rank': '147',
                'state': 'South Dakota'
            },
            {
                'city': 'Springfield',
                'growth_from_2000_to_2013': '7.8%',
                'latitude': 37.2089572,
                'longitude': -93.29229889999999,
                'population': '164122',
                'rank': '148',
                'state': 'Missouri'
            },
            {
                'city': 'Peoria',
                'growth_from_2000_to_2013': '46.5%',
                'latitude': 33.5805955,
                'longitude': -112.2373779,
                'population': '162592',
                'rank': '149',
                'state': 'Arizona'
            },
            {
                'city': 'Pembroke Pines',
                'growth_from_2000_to_2013': '17.4%',
                'latitude': 26.007765,
                'longitude': -80.2962555,
                'population': '162329',
                'rank': '150',
                'state': 'Florida'
            },
            {
                'city': 'Elk Grove',
                'growth_from_2000_to_2013': '97.1%',
                'latitude': 38.4087993,
                'longitude': -121.3716178,
                'population': '161007',
                'rank': '151',
                'state': 'California'
            },
            {
                'city': 'Salem',
                'growth_from_2000_to_2013': '16.4%',
                'latitude': 44.9428975,
                'longitude': -123.0350963,
                'population': '160614',
                'rank': '152',
                'state': 'Oregon'
            },
            {
                'city': 'Lancaster',
                'growth_from_2000_to_2013': '33.8%',
                'latitude': 34.6867846,
                'longitude': -118.1541632,
                'population': '159523',
                'rank': '153',
                'state': 'California'
            },
            {
                'city': 'Corona',
                'growth_from_2000_to_2013': '23.6%',
                'latitude': 33.8752935,
                'longitude': -117.5664384,
                'population': '159503',
                'rank': '154',
                'state': 'California'
            },
            {
                'city': 'Eugene',
                'growth_from_2000_to_2013': '14.4%',
                'latitude': 44.0520691,
                'longitude': -123.0867536,
                'population': '159190',
                'rank': '155',
                'state': 'Oregon'
            },
            {
                'city': 'Palmdale',
                'growth_from_2000_to_2013': '33.7%',
                'latitude': 34.5794343,
                'longitude': -118.1164613,
                'population': '157161',
                'rank': '156',
                'state': 'California'
            },
            {
                'city': 'Salinas',
                'growth_from_2000_to_2013': '8.4%',
                'latitude': 36.6777372,
                'longitude': -121.6555013,
                'population': '155662',
                'rank': '157',
                'state': 'California'
            },
            {
                'city': 'Springfield',
                'growth_from_2000_to_2013': '1.1%',
                'latitude': 42.1014831,
                'longitude': -72.589811,
                'population': '153703',
                'rank': '158',
                'state': 'Massachusetts'
            },
            {
                'city': 'Pasadena',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 29.6910625,
                'longitude': -95.2091006,
                'population': '152735',
                'rank': '159',
                'state': 'Texas'
            },
            {
                'city': 'Fort Collins',
                'growth_from_2000_to_2013': '26.6%',
                'latitude': 40.5852602,
                'longitude': -105.084423,
                'population': '152061',
                'rank': '160',
                'state': 'Colorado'
            },
            {
                'city': 'Hayward',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 37.6688205,
                'longitude': -122.0807964,
                'population': '151574',
                'rank': '161',
                'state': 'California'
            },
            {
                'city': 'Pomona',
                'growth_from_2000_to_2013': '2.1%',
                'latitude': 34.055103,
                'longitude': -117.7499909,
                'population': '151348',
                'rank': '162',
                'state': 'California'
            },
            {
                'city': 'Cary',
                'growth_from_2000_to_2013': '55.1%',
                'latitude': 35.79154,
                'longitude': -78.7811169,
                'population': '151088',
                'rank': '163',
                'state': 'North Carolina'
            },
            {
                'city': 'Rockford',
                'growth_from_2000_to_2013': '-1.0%',
                'latitude': 42.2711311,
                'longitude': -89.0939952,
                'population': '150251',
                'rank': '164',
                'state': 'Illinois'
            },
            {
                'city': 'Alexandria',
                'growth_from_2000_to_2013': '15.0%',
                'latitude': 38.8048355,
                'longitude': -77.0469214,
                'population': '148892',
                'rank': '165',
                'state': 'Virginia'
            },
            {
                'city': 'Escondido',
                'growth_from_2000_to_2013': '10.7%',
                'latitude': 33.1192068,
                'longitude': -117.086421,
                'population': '148738',
                'rank': '166',
                'state': 'California'
            },
            {
                'city': 'McKinney',
                'growth_from_2000_to_2013': '165.3%',
                'latitude': 33.1972465,
                'longitude': -96.6397822,
                'population': '148559',
                'rank': '167',
                'state': 'Texas'
            },
            {
                'city': 'Kansas City',
                'growth_from_2000_to_2013': '1.1%',
                'latitude': 39.114053,
                'longitude': -94.6274636,
                'population': '148483',
                'rank': '168',
                'state': 'Kansas'
            },
            {
                'city': 'Joliet',
                'growth_from_2000_to_2013': '36.5%',
                'latitude': 41.525031,
                'longitude': -88.0817251,
                'population': '147806',
                'rank': '169',
                'state': 'Illinois'
            },
            {
                'city': 'Sunnyvale',
                'growth_from_2000_to_2013': '11.9%',
                'latitude': 37.36883,
                'longitude': -122.0363496,
                'population': '147559',
                'rank': '170',
                'state': 'California'
            },
            {
                'city': 'Torrance',
                'growth_from_2000_to_2013': '6.6%',
                'latitude': 33.8358492,
                'longitude': -118.3406288,
                'population': '147478',
                'rank': '171',
                'state': 'California'
            },
            {
                'city': 'Bridgeport',
                'growth_from_2000_to_2013': '5.4%',
                'latitude': 41.1865478,
                'longitude': -73.19517669999999,
                'population': '147216',
                'rank': '172',
                'state': 'Connecticut'
            },
            {
                'city': 'Lakewood',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 39.7047095,
                'longitude': -105.0813734,
                'population': '147214',
                'rank': '173',
                'state': 'Colorado'
            },
            {
                'city': 'Hollywood',
                'growth_from_2000_to_2013': '4.8%',
                'latitude': 26.0112014,
                'longitude': -80.1494901,
                'population': '146526',
                'rank': '174',
                'state': 'Florida'
            },
            {
                'city': 'Paterson',
                'growth_from_2000_to_2013': '-2.2%',
                'latitude': 40.9167654,
                'longitude': -74.17181099999999,
                'population': '145948',
                'rank': '175',
                'state': 'New Jersey'
            },
            {
                'city': 'Naperville',
                'growth_from_2000_to_2013': '12.0%',
                'latitude': 41.7508391,
                'longitude': -88.1535352,
                'population': '144864',
                'rank': '176',
                'state': 'Illinois'
            },
            {
                'city': 'Syracuse',
                'growth_from_2000_to_2013': '-0.9%',
                'latitude': 43.0481221,
                'longitude': -76.14742439999999,
                'population': '144669',
                'rank': '177',
                'state': 'New York'
            },
            {
                'city': 'Mesquite',
                'growth_from_2000_to_2013': '14.7%',
                'latitude': 32.76679550000001,
                'longitude': -96.5991593,
                'population': '143484',
                'rank': '178',
                'state': 'Texas'
            },
            {
                'city': 'Dayton',
                'growth_from_2000_to_2013': '-13.5%',
                'latitude': 39.7589478,
                'longitude': -84.1916069,
                'population': '143355',
                'rank': '179',
                'state': 'Ohio'
            },
            {
                'city': 'Savannah',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 32.0835407,
                'longitude': -81.09983419999999,
                'population': '142772',
                'rank': '180',
                'state': 'Georgia'
            },
            {
                'city': 'Clarksville',
                'growth_from_2000_to_2013': '36.9%',
                'latitude': 36.5297706,
                'longitude': -87.3594528,
                'population': '142357',
                'rank': '181',
                'state': 'Tennessee'
            },
            {
                'city': 'Orange',
                'growth_from_2000_to_2013': '7.7%',
                'latitude': 33.7877944,
                'longitude': -117.8531119,
                'population': '139969',
                'rank': '182',
                'state': 'California'
            },
            {
                'city': 'Pasadena',
                'growth_from_2000_to_2013': '3.8%',
                'latitude': 34.1477849,
                'longitude': -118.1445155,
                'population': '139731',
                'rank': '183',
                'state': 'California'
            },
            {
                'city': 'Fullerton',
                'growth_from_2000_to_2013': '9.8%',
                'latitude': 33.8703596,
                'longitude': -117.9242966,
                'population': '138981',
                'rank': '184',
                'state': 'California'
            },
            {
                'city': 'Killeen',
                'growth_from_2000_to_2013': '52.1%',
                'latitude': 31.1171194,
                'longitude': -97.72779589999999,
                'population': '137147',
                'rank': '185',
                'state': 'Texas'
            },
            {
                'city': 'Frisco',
                'growth_from_2000_to_2013': '287.7%',
                'latitude': 33.1506744,
                'longitude': -96.82361159999999,
                'population': '136791',
                'rank': '186',
                'state': 'Texas'
            },
            {
                'city': 'Hampton',
                'growth_from_2000_to_2013': '-6.6%',
                'latitude': 37.0298687,
                'longitude': -76.34522179999999,
                'population': '136699',
                'rank': '187',
                'state': 'Virginia'
            },
            {
                'city': 'McAllen',
                'growth_from_2000_to_2013': '27.6%',
                'latitude': 26.2034071,
                'longitude': -98.23001239999999,
                'population': '136639',
                'rank': '188',
                'state': 'Texas'
            },
            {
                'city': 'Warren',
                'growth_from_2000_to_2013': '-2.3%',
                'latitude': 42.5144566,
                'longitude': -83.01465259999999,
                'population': '134873',
                'rank': '189',
                'state': 'Michigan'
            },
            {
                'city': 'Bellevue',
                'growth_from_2000_to_2013': '19.1%',
                'latitude': 47.610377,
                'longitude': -122.2006786,
                'population': '133992',
                'rank': '190',
                'state': 'Washington'
            },
            {
                'city': 'West Valley City',
                'growth_from_2000_to_2013': '22.2%',
                'latitude': 40.6916132,
                'longitude': -112.0010501,
                'population': '133579',
                'rank': '191',
                'state': 'Utah'
            },
            {
                'city': 'Columbia',
                'growth_from_2000_to_2013': '11.7%',
                'latitude': 34.0007104,
                'longitude': -81.0348144,
                'population': '133358',
                'rank': '192',
                'state': 'South Carolina'
            },
            {
                'city': 'Olathe',
                'growth_from_2000_to_2013': '40.4%',
                'latitude': 38.8813958,
                'longitude': -94.81912849999999,
                'population': '131885',
                'rank': '193',
                'state': 'Kansas'
            },
            {
                'city': 'Sterling Heights',
                'growth_from_2000_to_2013': '5.2%',
                'latitude': 42.5803122,
                'longitude': -83.0302033,
                'population': '131224',
                'rank': '194',
                'state': 'Michigan'
            },
            {
                'city': 'New Haven',
                'growth_from_2000_to_2013': '5.5%',
                'latitude': 41.308274,
                'longitude': -72.9278835,
                'population': '130660',
                'rank': '195',
                'state': 'Connecticut'
            },
            {
                'city': 'Miramar',
                'growth_from_2000_to_2013': '74.7%',
                'latitude': 25.9860762,
                'longitude': -80.30356019999999,
                'population': '130288',
                'rank': '196',
                'state': 'Florida'
            },
            {
                'city': 'Waco',
                'growth_from_2000_to_2013': '12.5%',
                'latitude': 31.549333,
                'longitude': -97.1466695,
                'population': '129030',
                'rank': '197',
                'state': 'Texas'
            },
            {
                'city': 'Thousand Oaks',
                'growth_from_2000_to_2013': '9.5%',
                'latitude': 34.1705609,
                'longitude': -118.8375937,
                'population': '128731',
                'rank': '198',
                'state': 'California'
            },
            {
                'city': 'Cedar Rapids',
                'growth_from_2000_to_2013': '5.4%',
                'latitude': 41.9778795,
                'longitude': -91.6656232,
                'population': '128429',
                'rank': '199',
                'state': 'Iowa'
            },
            {
                'city': 'Charleston',
                'growth_from_2000_to_2013': '29.2%',
                'latitude': 32.7764749,
                'longitude': -79.93105120000001,
                'population': '127999',
                'rank': '200',
                'state': 'South Carolina'
            },
            {
                'city': 'Visalia',
                'growth_from_2000_to_2013': '33.6%',
                'latitude': 36.3302284,
                'longitude': -119.2920585,
                'population': '127763',
                'rank': '201',
                'state': 'California'
            },
            {
                'city': 'Topeka',
                'growth_from_2000_to_2013': '3.4%',
                'latitude': 39.0558235,
                'longitude': -95.68901849999999,
                'population': '127679',
                'rank': '202',
                'state': 'Kansas'
            },
            {
                'city': 'Elizabeth',
                'growth_from_2000_to_2013': '5.5%',
                'latitude': 40.6639916,
                'longitude': -74.2107006,
                'population': '127558',
                'rank': '203',
                'state': 'New Jersey'
            },
            {
                'city': 'Gainesville',
                'growth_from_2000_to_2013': '12.8%',
                'latitude': 29.6516344,
                'longitude': -82.32482619999999,
                'population': '127488',
                'rank': '204',
                'state': 'Florida'
            },
            {
                'city': 'Thornton',
                'growth_from_2000_to_2013': '52.9%',
                'latitude': 39.8680412,
                'longitude': -104.9719243,
                'population': '127359',
                'rank': '205',
                'state': 'Colorado'
            },
            {
                'city': 'Roseville',
                'growth_from_2000_to_2013': '56.2%',
                'latitude': 38.7521235,
                'longitude': -121.2880059,
                'population': '127035',
                'rank': '206',
                'state': 'California'
            },
            {
                'city': 'Carrollton',
                'growth_from_2000_to_2013': '14.9%',
                'latitude': 32.9756415,
                'longitude': -96.8899636,
                'population': '126700',
                'rank': '207',
                'state': 'Texas'
            },
            {
                'city': 'Coral Springs',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 26.271192,
                'longitude': -80.2706044,
                'population': '126604',
                'rank': '208',
                'state': 'Florida'
            },
            {
                'city': 'Stamford',
                'growth_from_2000_to_2013': '7.6%',
                'latitude': 41.0534302,
                'longitude': -73.5387341,
                'population': '126456',
                'rank': '209',
                'state': 'Connecticut'
            },
            {
                'city': 'Simi Valley',
                'growth_from_2000_to_2013': '12.6%',
                'latitude': 34.2694474,
                'longitude': -118.781482,
                'population': '126181',
                'rank': '210',
                'state': 'California'
            },
            {
                'city': 'Concord',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 37.9779776,
                'longitude': -122.0310733,
                'population': '125880',
                'rank': '211',
                'state': 'California'
            },
            {
                'city': 'Hartford',
                'growth_from_2000_to_2013': '0.6%',
                'latitude': 41.76371109999999,
                'longitude': -72.6850932,
                'population': '125017',
                'rank': '212',
                'state': 'Connecticut'
            },
            {
                'city': 'Kent',
                'growth_from_2000_to_2013': '54.3%',
                'latitude': 47.3809335,
                'longitude': -122.2348431,
                'population': '124435',
                'rank': '213',
                'state': 'Washington'
            },
            {
                'city': 'Lafayette',
                'growth_from_2000_to_2013': '11.0%',
                'latitude': 30.2240897,
                'longitude': -92.0198427,
                'population': '124276',
                'rank': '214',
                'state': 'Louisiana'
            },
            {
                'city': 'Midland',
                'growth_from_2000_to_2013': '30.4%',
                'latitude': 31.9973456,
                'longitude': -102.0779146,
                'population': '123933',
                'rank': '215',
                'state': 'Texas'
            },
            {
                'city': 'Surprise',
                'growth_from_2000_to_2013': '281.9%',
                'latitude': 33.6292337,
                'longitude': -112.3679279,
                'population': '123546',
                'rank': '216',
                'state': 'Arizona'
            },
            {
                'city': 'Denton',
                'growth_from_2000_to_2013': '47.1%',
                'latitude': 33.2148412,
                'longitude': -97.13306829999999,
                'population': '123099',
                'rank': '217',
                'state': 'Texas'
            },
            {
                'city': 'Victorville',
                'growth_from_2000_to_2013': '87.6%',
                'latitude': 34.5362184,
                'longitude': -117.2927641,
                'population': '121096',
                'rank': '218',
                'state': 'California'
            },
            {
                'city': 'Evansville',
                'growth_from_2000_to_2013': '-0.8%',
                'latitude': 37.9715592,
                'longitude': -87.5710898,
                'population': '120310',
                'rank': '219',
                'state': 'Indiana'
            },
            {
                'city': 'Santa Clara',
                'growth_from_2000_to_2013': '17.4%',
                'latitude': 37.3541079,
                'longitude': -121.9552356,
                'population': '120245',
                'rank': '220',
                'state': 'California'
            },
            {
                'city': 'Abilene',
                'growth_from_2000_to_2013': '3.6%',
                'latitude': 32.4487364,
                'longitude': -99.73314390000002,
                'population': '120099',
                'rank': '221',
                'state': 'Texas'
            },
            {
                'city': 'Athens-Clarke County',
                'growth_from_2000_to_2013': '19.0%',
                'latitude': 33.9519347,
                'longitude': -83.357567,
                'population': '119980',
                'rank': '222',
                'state': 'Georgia'
            },
            {
                'city': 'Vallejo',
                'growth_from_2000_to_2013': '1.2%',
                'latitude': 38.1040864,
                'longitude': -122.2566367,
                'population': '118837',
                'rank': '223',
                'state': 'California'
            },
            {
                'city': 'Allentown',
                'growth_from_2000_to_2013': '11.2%',
                'latitude': 40.6084305,
                'longitude': -75.4901833,
                'population': '118577',
                'rank': '224',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Norman',
                'growth_from_2000_to_2013': '22.0%',
                'latitude': 35.2225668,
                'longitude': -97.4394777,
                'population': '118197',
                'rank': '225',
                'state': 'Oklahoma'
            },
            {
                'city': 'Beaumont',
                'growth_from_2000_to_2013': '3.7%',
                'latitude': 30.080174,
                'longitude': -94.1265562,
                'population': '117796',
                'rank': '226',
                'state': 'Texas'
            },
            {
                'city': 'Independence',
                'growth_from_2000_to_2013': '3.2%',
                'latitude': 39.0911161,
                'longitude': -94.41550679999999,
                'population': '117240',
                'rank': '227',
                'state': 'Missouri'
            },
            {
                'city': 'Murfreesboro',
                'growth_from_2000_to_2013': '65.1%',
                'latitude': 35.8456213,
                'longitude': -86.39027,
                'population': '117044',
                'rank': '228',
                'state': 'Tennessee'
            },
            {
                'city': 'Ann Arbor',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 42.2808256,
                'longitude': -83.7430378,
                'population': '117025',
                'rank': '229',
                'state': 'Michigan'
            },
            {
                'city': 'Springfield',
                'growth_from_2000_to_2013': '4.2%',
                'latitude': 39.78172130000001,
                'longitude': -89.6501481,
                'population': '117006',
                'rank': '230',
                'state': 'Illinois'
            },
            {
                'city': 'Berkeley',
                'growth_from_2000_to_2013': '13.3%',
                'latitude': 37.8715926,
                'longitude': -122.272747,
                'population': '116768',
                'rank': '231',
                'state': 'California'
            },
            {
                'city': 'Peoria',
                'growth_from_2000_to_2013': '3.0%',
                'latitude': 40.6936488,
                'longitude': -89.5889864,
                'population': '116513',
                'rank': '232',
                'state': 'Illinois'
            },
            {
                'city': 'Provo',
                'growth_from_2000_to_2013': '10.0%',
                'latitude': 40.2338438,
                'longitude': -111.6585337,
                'population': '116288',
                'rank': '233',
                'state': 'Utah'
            },
            {
                'city': 'El Monte',
                'growth_from_2000_to_2013': '-0.4%',
                'latitude': 34.0686206,
                'longitude': -118.0275667,
                'population': '115708',
                'rank': '234',
                'state': 'California'
            },
            {
                'city': 'Columbia',
                'growth_from_2000_to_2013': '34.0%',
                'latitude': 38.9517053,
                'longitude': -92.3340724,
                'population': '115276',
                'rank': '235',
                'state': 'Missouri'
            },
            {
                'city': 'Lansing',
                'growth_from_2000_to_2013': '-4.4%',
                'latitude': 42.732535,
                'longitude': -84.5555347,
                'population': '113972',
                'rank': '236',
                'state': 'Michigan'
            },
            {
                'city': 'Fargo',
                'growth_from_2000_to_2013': '24.9%',
                'latitude': 46.8771863,
                'longitude': -96.7898034,
                'population': '113658',
                'rank': '237',
                'state': 'North Dakota'
            },
            {
                'city': 'Downey',
                'growth_from_2000_to_2013': '5.3%',
                'latitude': 33.9401088,
                'longitude': -118.1331593,
                'population': '113242',
                'rank': '238',
                'state': 'California'
            },
            {
                'city': 'Costa Mesa',
                'growth_from_2000_to_2013': '2.4%',
                'latitude': 33.6411316,
                'longitude': -117.9186689,
                'population': '112174',
                'rank': '239',
                'state': 'California'
            },
            {
                'city': 'Wilmington',
                'growth_from_2000_to_2013': '24.8%',
                'latitude': 34.2257255,
                'longitude': -77.9447102,
                'population': '112067',
                'rank': '240',
                'state': 'North Carolina'
            },
            {
                'city': 'Arvada',
                'growth_from_2000_to_2013': '9.2%',
                'latitude': 39.8027644,
                'longitude': -105.0874842,
                'population': '111707',
                'rank': '241',
                'state': 'Colorado'
            },
            {
                'city': 'Inglewood',
                'growth_from_2000_to_2013': '-1.0%',
                'latitude': 33.9616801,
                'longitude': -118.3531311,
                'population': '111542',
                'rank': '242',
                'state': 'California'
            },
            {
                'city': 'Miami Gardens',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 25.9420377,
                'longitude': -80.2456045,
                'population': '111378',
                'rank': '243',
                'state': 'Florida'
            },
            {
                'city': 'Carlsbad',
                'growth_from_2000_to_2013': '39.7%',
                'latitude': 33.1580933,
                'longitude': -117.3505939,
                'population': '110972',
                'rank': '244',
                'state': 'California'
            },
            {
                'city': 'Westminster',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 39.8366528,
                'longitude': -105.0372046,
                'population': '110945',
                'rank': '245',
                'state': 'Colorado'
            },
            {
                'city': 'Rochester',
                'growth_from_2000_to_2013': '23.9%',
                'latitude': 44.0121221,
                'longitude': -92.4801989,
                'population': '110742',
                'rank': '246',
                'state': 'Minnesota'
            },
            {
                'city': 'Odessa',
                'growth_from_2000_to_2013': '22.3%',
                'latitude': 31.8456816,
                'longitude': -102.3676431,
                'population': '110720',
                'rank': '247',
                'state': 'Texas'
            },
            {
                'city': 'Manchester',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 42.9956397,
                'longitude': -71.4547891,
                'population': '110378',
                'rank': '248',
                'state': 'New Hampshire'
            },
            {
                'city': 'Elgin',
                'growth_from_2000_to_2013': '16.0%',
                'latitude': 42.0354084,
                'longitude': -88.2825668,
                'population': '110145',
                'rank': '249',
                'state': 'Illinois'
            },
            {
                'city': 'West Jordan',
                'growth_from_2000_to_2013': '38.4%',
                'latitude': 40.6096698,
                'longitude': -111.9391031,
                'population': '110077',
                'rank': '250',
                'state': 'Utah'
            },
            {
                'city': 'Round Rock',
                'growth_from_2000_to_2013': '81.0%',
                'latitude': 30.5082551,
                'longitude': -97.678896,
                'population': '109821',
                'rank': '251',
                'state': 'Texas'
            },
            {
                'city': 'Clearwater',
                'growth_from_2000_to_2013': '0.1%',
                'latitude': 27.9658533,
                'longitude': -82.8001026,
                'population': '109703',
                'rank': '252',
                'state': 'Florida'
            },
            {
                'city': 'Waterbury',
                'growth_from_2000_to_2013': '2.2%',
                'latitude': 41.5581525,
                'longitude': -73.0514965,
                'population': '109676',
                'rank': '253',
                'state': 'Connecticut'
            },
            {
                'city': 'Gresham',
                'growth_from_2000_to_2013': '20.7%',
                'latitude': 45.5001357,
                'longitude': -122.4302013,
                'population': '109397',
                'rank': '254',
                'state': 'Oregon'
            },
            {
                'city': 'Fairfield',
                'growth_from_2000_to_2013': '12.8%',
                'latitude': 38.24935809999999,
                'longitude': -122.0399663,
                'population': '109320',
                'rank': '255',
                'state': 'California'
            },
            {
                'city': 'Billings',
                'growth_from_2000_to_2013': '18.6%',
                'latitude': 45.7832856,
                'longitude': -108.5006904,
                'population': '109059',
                'rank': '256',
                'state': 'Montana'
            },
            {
                'city': 'Lowell',
                'growth_from_2000_to_2013': '3.4%',
                'latitude': 42.6334247,
                'longitude': -71.31617179999999,
                'population': '108861',
                'rank': '257',
                'state': 'Massachusetts'
            },
            {
                'city': 'San Buenaventura (Ventura)',
                'growth_from_2000_to_2013': '7.4%',
                'latitude': 34.274646,
                'longitude': -119.2290316,
                'population': '108817',
                'rank': '258',
                'state': 'California'
            },
            {
                'city': 'Pueblo',
                'growth_from_2000_to_2013': '5.9%',
                'latitude': 38.2544472,
                'longitude': -104.6091409,
                'population': '108249',
                'rank': '259',
                'state': 'Colorado'
            },
            {
                'city': 'High Point',
                'growth_from_2000_to_2013': '24.3%',
                'latitude': 35.9556923,
                'longitude': -80.0053176,
                'population': '107741',
                'rank': '260',
                'state': 'North Carolina'
            },
            {
                'city': 'West Covina',
                'growth_from_2000_to_2013': '2.3%',
                'latitude': 34.0686208,
                'longitude': -117.9389526,
                'population': '107740',
                'rank': '261',
                'state': 'California'
            },
            {
                'city': 'Richmond',
                'growth_from_2000_to_2013': '7.9%',
                'latitude': 37.9357576,
                'longitude': -122.3477486,
                'population': '107571',
                'rank': '262',
                'state': 'California'
            },
            {
                'city': 'Murrieta',
                'growth_from_2000_to_2013': '107.4%',
                'latitude': 33.5539143,
                'longitude': -117.2139232,
                'population': '107479',
                'rank': '263',
                'state': 'California'
            },
            {
                'city': 'Cambridge',
                'growth_from_2000_to_2013': '5.5%',
                'latitude': 42.3736158,
                'longitude': -71.10973349999999,
                'population': '107289',
                'rank': '264',
                'state': 'Massachusetts'
            },
            {
                'city': 'Antioch',
                'growth_from_2000_to_2013': '16.9%',
                'latitude': 38.0049214,
                'longitude': -121.805789,
                'population': '107100',
                'rank': '265',
                'state': 'California'
            },
            {
                'city': 'Temecula',
                'growth_from_2000_to_2013': '55.4%',
                'latitude': 33.4936391,
                'longitude': -117.1483648,
                'population': '106780',
                'rank': '266',
                'state': 'California'
            },
            {
                'city': 'Norwalk',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 33.9022367,
                'longitude': -118.081733,
                'population': '106589',
                'rank': '267',
                'state': 'California'
            },
            {
                'city': 'Centennial',
                'growth_from_2000_to_2013': '3.5%',
                'latitude': 39.5807452,
                'longitude': -104.8771726,
                'population': '106114',
                'rank': '268',
                'state': 'Colorado'
            },
            {
                'city': 'Everett',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 47.9789848,
                'longitude': -122.2020794,
                'population': '105370',
                'rank': '269',
                'state': 'Washington'
            },
            {
                'city': 'Palm Bay',
                'growth_from_2000_to_2013': '31.7%',
                'latitude': 28.0344621,
                'longitude': -80.5886646,
                'population': '104898',
                'rank': '270',
                'state': 'Florida'
            },
            {
                'city': 'Wichita Falls',
                'growth_from_2000_to_2013': '0.7%',
                'latitude': 33.9137085,
                'longitude': -98.4933873,
                'population': '104898',
                'rank': '271',
                'state': 'Texas'
            },
            {
                'city': 'Green Bay',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 44.51915899999999,
                'longitude': -88.019826,
                'population': '104779',
                'rank': '272',
                'state': 'Wisconsin'
            },
            {
                'city': 'Daly City',
                'growth_from_2000_to_2013': '1.0%',
                'latitude': 37.6879241,
                'longitude': -122.4702079,
                'population': '104739',
                'rank': '273',
                'state': 'California'
            },
            {
                'city': 'Burbank',
                'growth_from_2000_to_2013': '4.2%',
                'latitude': 34.1808392,
                'longitude': -118.3089661,
                'population': '104709',
                'rank': '274',
                'state': 'California'
            },
            {
                'city': 'Richardson',
                'growth_from_2000_to_2013': '13.2%',
                'latitude': 32.9483335,
                'longitude': -96.7298519,
                'population': '104475',
                'rank': '275',
                'state': 'Texas'
            },
            {
                'city': 'Pompano Beach',
                'growth_from_2000_to_2013': '4.0%',
                'latitude': 26.2378597,
                'longitude': -80.1247667,
                'population': '104410',
                'rank': '276',
                'state': 'Florida'
            },
            {
                'city': 'North Charleston',
                'growth_from_2000_to_2013': '27.4%',
                'latitude': 32.8546197,
                'longitude': -79.9748103,
                'population': '104054',
                'rank': '277',
                'state': 'South Carolina'
            },
            {
                'city': 'Broken Arrow',
                'growth_from_2000_to_2013': '28.2%',
                'latitude': 36.060949,
                'longitude': -95.7974526,
                'population': '103500',
                'rank': '278',
                'state': 'Oklahoma'
            },
            {
                'city': 'Boulder',
                'growth_from_2000_to_2013': '9.0%',
                'latitude': 40.0149856,
                'longitude': -105.2705456,
                'population': '103166',
                'rank': '279',
                'state': 'Colorado'
            },
            {
                'city': 'West Palm Beach',
                'growth_from_2000_to_2013': '23.5%',
                'latitude': 26.7153424,
                'longitude': -80.0533746,
                'population': '102436',
                'rank': '280',
                'state': 'Florida'
            },
            {
                'city': 'Santa Maria',
                'growth_from_2000_to_2013': '30.9%',
                'latitude': 34.9530337,
                'longitude': -120.4357191,
                'population': '102216',
                'rank': '281',
                'state': 'California'
            },
            {
                'city': 'El Cajon',
                'growth_from_2000_to_2013': '7.4%',
                'latitude': 32.7947731,
                'longitude': -116.9625269,
                'population': '102211',
                'rank': '282',
                'state': 'California'
            },
            {
                'city': 'Davenport',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 41.5236437,
                'longitude': -90.5776367,
                'population': '102157',
                'rank': '283',
                'state': 'Iowa'
            },
            {
                'city': 'Rialto',
                'growth_from_2000_to_2013': '9.8%',
                'latitude': 34.1064001,
                'longitude': -117.3703235,
                'population': '101910',
                'rank': '284',
                'state': 'California'
            },
            {
                'city': 'Las Cruces',
                'growth_from_2000_to_2013': '37.6%',
                'latitude': 32.3199396,
                'longitude': -106.7636538,
                'population': '101324',
                'rank': '285',
                'state': 'New Mexico'
            },
            {
                'city': 'San Mateo',
                'growth_from_2000_to_2013': '9.0%',
                'latitude': 37.5629917,
                'longitude': -122.3255254,
                'population': '101128',
                'rank': '286',
                'state': 'California'
            },
            {
                'city': 'Lewisville',
                'growth_from_2000_to_2013': '28.9%',
                'latitude': 33.046233,
                'longitude': -96.994174,
                'population': '101074',
                'rank': '287',
                'state': 'Texas'
            },
            {
                'city': 'South Bend',
                'growth_from_2000_to_2013': '-6.8%',
                'latitude': 41.6763545,
                'longitude': -86.25198979999999,
                'population': '100886',
                'rank': '288',
                'state': 'Indiana'
            },
            {
                'city': 'Lakeland',
                'growth_from_2000_to_2013': '18.3%',
                'latitude': 28.0394654,
                'longitude': -81.9498042,
                'population': '100710',
                'rank': '289',
                'state': 'Florida'
            },
            {
                'city': 'Erie',
                'growth_from_2000_to_2013': '-2.8%',
                'latitude': 42.12922409999999,
                'longitude': -80.085059,
                'population': '100671',
                'rank': '290',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Tyler',
                'growth_from_2000_to_2013': '18.6%',
                'latitude': 32.3512601,
                'longitude': -95.30106239999999,
                'population': '100223',
                'rank': '291',
                'state': 'Texas'
            },
            {
                'city': 'Pearland',
                'growth_from_2000_to_2013': '117.2%',
                'latitude': 29.5635666,
                'longitude': -95.2860474,
                'population': '100065',
                'rank': '292',
                'state': 'Texas'
            },
            {
                'city': 'College Station',
                'growth_from_2000_to_2013': '45.2%',
                'latitude': 30.627977,
                'longitude': -96.3344068,
                'population': '100050',
                'rank': '293',
                'state': 'Texas'
            },
            {
                'city': 'Kenosha',
                'growth_from_2000_to_2013': '9.5%',
                'latitude': 42.5847425,
                'longitude': -87.82118539999999,
                'population': '99889',
                'rank': '294',
                'state': 'Wisconsin'
            },
            {
                'city': 'Sandy Springs',
                'growth_from_2000_to_2013': '17.4%',
                'latitude': 33.9304352,
                'longitude': -84.3733147,
                'population': '99770',
                'rank': '295',
                'state': 'Georgia'
            },
            {
                'city': 'Clovis',
                'growth_from_2000_to_2013': '42.6%',
                'latitude': 36.8252277,
                'longitude': -119.7029194,
                'population': '99769',
                'rank': '296',
                'state': 'California'
            },
            {
                'city': 'Flint',
                'growth_from_2000_to_2013': '-20.0%',
                'latitude': 43.0125274,
                'longitude': -83.6874562,
                'population': '99763',
                'rank': '297',
                'state': 'Michigan'
            },
            {
                'city': 'Roanoke',
                'growth_from_2000_to_2013': '3.8%',
                'latitude': 37.2709704,
                'longitude': -79.9414266,
                'population': '98465',
                'rank': '298',
                'state': 'Virginia'
            },
            {
                'city': 'Albany',
                'growth_from_2000_to_2013': '4.1%',
                'latitude': 42.6525793,
                'longitude': -73.7562317,
                'population': '98424',
                'rank': '299',
                'state': 'New York'
            },
            {
                'city': 'Jurupa Valley',
                'growth_from_2000_to_2013': '',
                'latitude': 33.9971974,
                'longitude': -117.4854802,
                'population': '98030',
                'rank': '300',
                'state': 'California'
            },
            {
                'city': 'Compton',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 33.8958492,
                'longitude': -118.2200712,
                'population': '97877',
                'rank': '301',
                'state': 'California'
            },
            {
                'city': 'San Angelo',
                'growth_from_2000_to_2013': '10.2%',
                'latitude': 31.4637723,
                'longitude': -100.4370375,
                'population': '97492',
                'rank': '302',
                'state': 'Texas'
            },
            {
                'city': 'Hillsboro',
                'growth_from_2000_to_2013': '36.4%',
                'latitude': 45.5228939,
                'longitude': -122.989827,
                'population': '97368',
                'rank': '303',
                'state': 'Oregon'
            },
            {
                'city': 'Lawton',
                'growth_from_2000_to_2013': '4.9%',
                'latitude': 34.6035669,
                'longitude': -98.39592909999999,
                'population': '97151',
                'rank': '304',
                'state': 'Oklahoma'
            },
            {
                'city': 'Renton',
                'growth_from_2000_to_2013': '88.4%',
                'latitude': 47.48287759999999,
                'longitude': -122.2170661,
                'population': '97003',
                'rank': '305',
                'state': 'Washington'
            },
            {
                'city': 'Vista',
                'growth_from_2000_to_2013': '7.7%',
                'latitude': 33.2000368,
                'longitude': -117.2425355,
                'population': '96929',
                'rank': '306',
                'state': 'California'
            },
            {
                'city': 'Davie',
                'growth_from_2000_to_2013': '17.7%',
                'latitude': 26.0764783,
                'longitude': -80.25211569999999,
                'population': '96830',
                'rank': '307',
                'state': 'Florida'
            },
            {
                'city': 'Greeley',
                'growth_from_2000_to_2013': '23.1%',
                'latitude': 40.4233142,
                'longitude': -104.7091322,
                'population': '96539',
                'rank': '308',
                'state': 'Colorado'
            },
            {
                'city': 'Mission Viejo',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 33.6000232,
                'longitude': -117.6719953,
                'population': '96346',
                'rank': '309',
                'state': 'California'
            },
            {
                'city': 'Portsmouth',
                'growth_from_2000_to_2013': '-4.2%',
                'latitude': 36.8354258,
                'longitude': -76.2982742,
                'population': '96205',
                'rank': '310',
                'state': 'Virginia'
            },
            {
                'city': 'Dearborn',
                'growth_from_2000_to_2013': '-2.0%',
                'latitude': 42.3222599,
                'longitude': -83.17631449999999,
                'population': '95884',
                'rank': '311',
                'state': 'Michigan'
            },
            {
                'city': 'South Gate',
                'growth_from_2000_to_2013': '-0.8%',
                'latitude': 33.954737,
                'longitude': -118.2120161,
                'population': '95677',
                'rank': '312',
                'state': 'California'
            },
            {
                'city': 'Tuscaloosa',
                'growth_from_2000_to_2013': '21.1%',
                'latitude': 33.2098407,
                'longitude': -87.56917349999999,
                'population': '95334',
                'rank': '313',
                'state': 'Alabama'
            },
            {
                'city': 'Livonia',
                'growth_from_2000_to_2013': '-5.4%',
                'latitude': 42.36837,
                'longitude': -83.35270969999999,
                'population': '95208',
                'rank': '314',
                'state': 'Michigan'
            },
            {
                'city': 'New Bedford',
                'growth_from_2000_to_2013': '1.2%',
                'latitude': 41.6362152,
                'longitude': -70.93420499999999,
                'population': '95078',
                'rank': '315',
                'state': 'Massachusetts'
            },
            {
                'city': 'Vacaville',
                'growth_from_2000_to_2013': '5.4%',
                'latitude': 38.3565773,
                'longitude': -121.9877444,
                'population': '94275',
                'rank': '316',
                'state': 'California'
            },
            {
                'city': 'Brockton',
                'growth_from_2000_to_2013': '-0.3%',
                'latitude': 42.0834335,
                'longitude': -71.0183787,
                'population': '94089',
                'rank': '317',
                'state': 'Massachusetts'
            },
            {
                'city': 'Roswell',
                'growth_from_2000_to_2013': '15.2%',
                'latitude': 34.0232431,
                'longitude': -84.3615555,
                'population': '94034',
                'rank': '318',
                'state': 'Georgia'
            },
            {
                'city': 'Beaverton',
                'growth_from_2000_to_2013': '17.0%',
                'latitude': 45.48706199999999,
                'longitude': -122.8037102,
                'population': '93542',
                'rank': '319',
                'state': 'Oregon'
            },
            {
                'city': 'Quincy',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 42.2528772,
                'longitude': -71.0022705,
                'population': '93494',
                'rank': '320',
                'state': 'Massachusetts'
            },
            {
                'city': 'Sparks',
                'growth_from_2000_to_2013': '39.4%',
                'latitude': 39.5349112,
                'longitude': -119.7526886,
                'population': '93282',
                'rank': '321',
                'state': 'Nevada'
            },
            {
                'city': 'Yakima',
                'growth_from_2000_to_2013': '11.7%',
                'latitude': 46.6020711,
                'longitude': -120.5058987,
                'population': '93257',
                'rank': '322',
                'state': 'Washington'
            },
            {
                'city': 'Federal Way',
                'growth_from_2000_to_2013': '8.8%',
                'latitude': 47.3223221,
                'longitude': -122.3126222,
                'population': '92734',
                'rank': '324',
                'state': 'Washington'
            },
            {
                'city': 'Carson',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 33.8316745,
                'longitude': -118.281693,
                'population': '92599',
                'rank': '325',
                'state': 'California'
            },
            {
                'city': 'Santa Monica',
                'growth_from_2000_to_2013': '9.6%',
                'latitude': 34.0194543,
                'longitude': -118.4911912,
                'population': '92472',
                'rank': '326',
                'state': 'California'
            },
            {
                'city': 'Hesperia',
                'growth_from_2000_to_2013': '46.1%',
                'latitude': 34.4263886,
                'longitude': -117.3008784,
                'population': '92147',
                'rank': '327',
                'state': 'California'
            },
            {
                'city': 'Allen',
                'growth_from_2000_to_2013': '104.0%',
                'latitude': 33.1031744,
                'longitude': -96.67055030000002,
                'population': '92020',
                'rank': '328',
                'state': 'Texas'
            },
            {
                'city': 'Rio Rancho',
                'growth_from_2000_to_2013': '74.4%',
                'latitude': 35.2327544,
                'longitude': -106.6630437,
                'population': '91956',
                'rank': '329',
                'state': 'New Mexico'
            },
            {
                'city': 'Yuma',
                'growth_from_2000_to_2013': '16.2%',
                'latitude': 32.6926512,
                'longitude': -114.6276916,
                'population': '91923',
                'rank': '330',
                'state': 'Arizona'
            },
            {
                'city': 'Westminster',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 33.7513419,
                'longitude': -117.9939921,
                'population': '91739',
                'rank': '331',
                'state': 'California'
            },
            {
                'city': 'Orem',
                'growth_from_2000_to_2013': '8.5%',
                'latitude': 40.2968979,
                'longitude': -111.6946475,
                'population': '91648',
                'rank': '332',
                'state': 'Utah'
            },
            {
                'city': 'Lynn',
                'growth_from_2000_to_2013': '2.6%',
                'latitude': 42.46676300000001,
                'longitude': -70.9494938,
                'population': '91589',
                'rank': '333',
                'state': 'Massachusetts'
            },
            {
                'city': 'Redding',
                'growth_from_2000_to_2013': '11.9%',
                'latitude': 40.5865396,
                'longitude': -122.3916754,
                'population': '91119',
                'rank': '334',
                'state': 'California'
            },
            {
                'city': 'Spokane Valley',
                'growth_from_2000_to_2013': '12.6%',
                'latitude': 47.6732281,
                'longitude': -117.2393748,
                'population': '91113',
                'rank': '335',
                'state': 'Washington'
            },
            {
                'city': 'Miami Beach',
                'growth_from_2000_to_2013': '3.3%',
                'latitude': 25.790654,
                'longitude': -80.1300455,
                'population': '91026',
                'rank': '336',
                'state': 'Florida'
            },
            {
                'city': 'League City',
                'growth_from_2000_to_2013': '98.3%',
                'latitude': 29.5074538,
                'longitude': -95.0949303,
                'population': '90983',
                'rank': '337',
                'state': 'Texas'
            },
            {
                'city': 'Lawrence',
                'growth_from_2000_to_2013': '12.7%',
                'latitude': 38.9716689,
                'longitude': -95.2352501,
                'population': '90811',
                'rank': '338',
                'state': 'Kansas'
            },
            {
                'city': 'Santa Barbara',
                'growth_from_2000_to_2013': '0.9%',
                'latitude': 34.4208305,
                'longitude': -119.6981901,
                'population': '90412',
                'rank': '339',
                'state': 'California'
            },
            {
                'city': 'Plantation',
                'growth_from_2000_to_2013': '8.6%',
                'latitude': 26.1275862,
                'longitude': -80.23310359999999,
                'population': '90268',
                'rank': '340',
                'state': 'Florida'
            },
            {
                'city': 'Sandy',
                'growth_from_2000_to_2013': '1.3%',
                'latitude': 40.5649781,
                'longitude': -111.8389726,
                'population': '90231',
                'rank': '341',
                'state': 'Utah'
            },
            {
                'city': 'Sunrise',
                'growth_from_2000_to_2013': '4.6%',
                'latitude': 26.1669711,
                'longitude': -80.25659499999999,
                'population': '90116',
                'rank': '342',
                'state': 'Florida'
            },
            {
                'city': 'Macon',
                'growth_from_2000_to_2013': '-7.3%',
                'latitude': 32.8406946,
                'longitude': -83.6324022,
                'population': '89981',
                'rank': '343',
                'state': 'Georgia'
            },
            {
                'city': 'Longmont',
                'growth_from_2000_to_2013': '24.4%',
                'latitude': 40.1672068,
                'longitude': -105.1019275,
                'population': '89919',
                'rank': '344',
                'state': 'Colorado'
            },
            {
                'city': 'Boca Raton',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 26.3683064,
                'longitude': -80.1289321,
                'population': '89407',
                'rank': '345',
                'state': 'Florida'
            },
            {
                'city': 'San Marcos',
                'growth_from_2000_to_2013': '60.0%',
                'latitude': 33.1433723,
                'longitude': -117.1661449,
                'population': '89387',
                'rank': '346',
                'state': 'California'
            },
            {
                'city': 'Greenville',
                'growth_from_2000_to_2013': '41.9%',
                'latitude': 35.612661,
                'longitude': -77.3663538,
                'population': '89130',
                'rank': '347',
                'state': 'North Carolina'
            },
            {
                'city': 'Waukegan',
                'growth_from_2000_to_2013': '0.5%',
                'latitude': 42.3636331,
                'longitude': -87.84479379999999,
                'population': '88826',
                'rank': '348',
                'state': 'Illinois'
            },
            {
                'city': 'Fall River',
                'growth_from_2000_to_2013': '-3.7%',
                'latitude': 41.7014912,
                'longitude': -71.1550451,
                'population': '88697',
                'rank': '349',
                'state': 'Massachusetts'
            },
            {
                'city': 'Chico',
                'growth_from_2000_to_2013': '14.2%',
                'latitude': 39.7284944,
                'longitude': -121.8374777,
                'population': '88077',
                'rank': '350',
                'state': 'California'
            },
            {
                'city': 'Newton',
                'growth_from_2000_to_2013': '4.9%',
                'latitude': 42.3370413,
                'longitude': -71.20922139999999,
                'population': '87971',
                'rank': '351',
                'state': 'Massachusetts'
            },
            {
                'city': 'San Leandro',
                'growth_from_2000_to_2013': '10.3%',
                'latitude': 37.7249296,
                'longitude': -122.1560768,
                'population': '87965',
                'rank': '352',
                'state': 'California'
            },
            {
                'city': 'Reading',
                'growth_from_2000_to_2013': '8.0%',
                'latitude': 40.3356483,
                'longitude': -75.9268747,
                'population': '87893',
                'rank': '353',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Norwalk',
                'growth_from_2000_to_2013': '5.6%',
                'latitude': 41.11774399999999,
                'longitude': -73.4081575,
                'population': '87776',
                'rank': '354',
                'state': 'Connecticut'
            },
            {
                'city': 'Fort Smith',
                'growth_from_2000_to_2013': '8.6%',
                'latitude': 35.3859242,
                'longitude': -94.39854749999999,
                'population': '87650',
                'rank': '355',
                'state': 'Arkansas'
            },
            {
                'city': 'Newport Beach',
                'growth_from_2000_to_2013': '10.4%',
                'latitude': 33.6189101,
                'longitude': -117.9289469,
                'population': '87273',
                'rank': '356',
                'state': 'California'
            },
            {
                'city': 'Asheville',
                'growth_from_2000_to_2013': '19.6%',
                'latitude': 35.5950581,
                'longitude': -82.5514869,
                'population': '87236',
                'rank': '357',
                'state': 'North Carolina'
            },
            {
                'city': 'Nashua',
                'growth_from_2000_to_2013': '0.4%',
                'latitude': 42.7653662,
                'longitude': -71.46756599999999,
                'population': '87137',
                'rank': '358',
                'state': 'New Hampshire'
            },
            {
                'city': 'Edmond',
                'growth_from_2000_to_2013': '26.9%',
                'latitude': 35.6528323,
                'longitude': -97.47809540000002,
                'population': '87004',
                'rank': '359',
                'state': 'Oklahoma'
            },
            {
                'city': 'Whittier',
                'growth_from_2000_to_2013': '3.3%',
                'latitude': 33.9791793,
                'longitude': -118.032844,
                'population': '86635',
                'rank': '360',
                'state': 'California'
            },
            {
                'city': 'Nampa',
                'growth_from_2000_to_2013': '57.9%',
                'latitude': 43.5407172,
                'longitude': -116.5634624,
                'population': '86518',
                'rank': '361',
                'state': 'Idaho'
            },
            {
                'city': 'Bloomington',
                'growth_from_2000_to_2013': '1.3%',
                'latitude': 44.840798,
                'longitude': -93.2982799,
                'population': '86319',
                'rank': '362',
                'state': 'Minnesota'
            },
            {
                'city': 'Deltona',
                'growth_from_2000_to_2013': '23.1%',
                'latitude': 28.9005446,
                'longitude': -81.26367379999999,
                'population': '86290',
                'rank': '363',
                'state': 'Florida'
            },
            {
                'city': 'Hawthorne',
                'growth_from_2000_to_2013': '2.3%',
                'latitude': 33.9164032,
                'longitude': -118.3525748,
                'population': '86199',
                'rank': '364',
                'state': 'California'
            },
            {
                'city': 'Duluth',
                'growth_from_2000_to_2013': '-0.1%',
                'latitude': 46.78667189999999,
                'longitude': -92.1004852,
                'population': '86128',
                'rank': '365',
                'state': 'Minnesota'
            },
            {
                'city': 'Carmel',
                'growth_from_2000_to_2013': '60.4%',
                'latitude': 39.978371,
                'longitude': -86.1180435,
                'population': '85927',
                'rank': '366',
                'state': 'Indiana'
            },
            {
                'city': 'Suffolk',
                'growth_from_2000_to_2013': '33.5%',
                'latitude': 36.7282054,
                'longitude': -76.5835621,
                'population': '85728',
                'rank': '367',
                'state': 'Virginia'
            },
            {
                'city': 'Clifton',
                'growth_from_2000_to_2013': '7.9%',
                'latitude': 40.8584328,
                'longitude': -74.16375529999999,
                'population': '85390',
                'rank': '368',
                'state': 'New Jersey'
            },
            {
                'city': 'Citrus Heights',
                'growth_from_2000_to_2013': '-0.1%',
                'latitude': 38.7071247,
                'longitude': -121.2810611,
                'population': '85285',
                'rank': '369',
                'state': 'California'
            },
            {
                'city': 'Livermore',
                'growth_from_2000_to_2013': '15.1%',
                'latitude': 37.6818745,
                'longitude': -121.7680088,
                'population': '85156',
                'rank': '370',
                'state': 'California'
            },
            {
                'city': 'Tracy',
                'growth_from_2000_to_2013': '45.9%',
                'latitude': 37.7396513,
                'longitude': -121.4252227,
                'population': '84691',
                'rank': '371',
                'state': 'California'
            },
            {
                'city': 'Alhambra',
                'growth_from_2000_to_2013': '-0.7%',
                'latitude': 34.095287,
                'longitude': -118.1270146,
                'population': '84577',
                'rank': '372',
                'state': 'California'
            },
            {
                'city': 'Kirkland',
                'growth_from_2000_to_2013': '87.5%',
                'latitude': 47.6814875,
                'longitude': -122.2087353,
                'population': '84430',
                'rank': '373',
                'state': 'Washington'
            },
            {
                'city': 'Trenton',
                'growth_from_2000_to_2013': '-1.2%',
                'latitude': 40.2170534,
                'longitude': -74.7429384,
                'population': '84349',
                'rank': '374',
                'state': 'New Jersey'
            },
            {
                'city': 'Ogden',
                'growth_from_2000_to_2013': '8.6%',
                'latitude': 41.223,
                'longitude': -111.9738304,
                'population': '84249',
                'rank': '375',
                'state': 'Utah'
            },
            {
                'city': 'Hoover',
                'growth_from_2000_to_2013': '32.7%',
                'latitude': 33.4053867,
                'longitude': -86.8113781,
                'population': '84126',
                'rank': '376',
                'state': 'Alabama'
            },
            {
                'city': 'Cicero',
                'growth_from_2000_to_2013': '-1.6%',
                'latitude': 41.8455877,
                'longitude': -87.7539448,
                'population': '84103',
                'rank': '377',
                'state': 'Illinois'
            },
            {
                'city': 'Fishers',
                'growth_from_2000_to_2013': '114.8%',
                'latitude': 39.9567548,
                'longitude': -86.01335,
                'population': '83891',
                'rank': '378',
                'state': 'Indiana'
            },
            {
                'city': 'Sugar Land',
                'growth_from_2000_to_2013': '29.1%',
                'latitude': 29.6196787,
                'longitude': -95.6349463,
                'population': '83860',
                'rank': '379',
                'state': 'Texas'
            },
            {
                'city': 'Danbury',
                'growth_from_2000_to_2013': '11.4%',
                'latitude': 41.394817,
                'longitude': -73.4540111,
                'population': '83684',
                'rank': '380',
                'state': 'Connecticut'
            },
            {
                'city': 'Meridian',
                'growth_from_2000_to_2013': '127.6%',
                'latitude': 43.6121087,
                'longitude': -116.3915131,
                'population': '83596',
                'rank': '381',
                'state': 'Idaho'
            },
            {
                'city': 'Indio',
                'growth_from_2000_to_2013': '66.0%',
                'latitude': 33.7205771,
                'longitude': -116.2155619,
                'population': '83539',
                'rank': '382',
                'state': 'California'
            },
            {
                'city': 'Concord',
                'growth_from_2000_to_2013': '47.4%',
                'latitude': 35.4087517,
                'longitude': -80.579511,
                'population': '83506',
                'rank': '383',
                'state': 'North Carolina'
            },
            {
                'city': 'Menifee',
                'growth_from_2000_to_2013': '95.0%',
                'latitude': 33.6971468,
                'longitude': -117.185294,
                'population': '83447',
                'rank': '384',
                'state': 'California'
            },
            {
                'city': 'Champaign',
                'growth_from_2000_to_2013': '18.3%',
                'latitude': 40.1164204,
                'longitude': -88.2433829,
                'population': '83424',
                'rank': '385',
                'state': 'Illinois'
            },
            {
                'city': 'Buena Park',
                'growth_from_2000_to_2013': '6.1%',
                'latitude': 33.8675143,
                'longitude': -117.9981181,
                'population': '82882',
                'rank': '386',
                'state': 'California'
            },
            {
                'city': 'Troy',
                'growth_from_2000_to_2013': '2.2%',
                'latitude': 42.6064095,
                'longitude': -83.1497751,
                'population': '82821',
                'rank': '387',
                'state': 'Michigan'
            },
            {
                'city': 'Johns Creek',
                'growth_from_2000_to_2013': '36.5%',
                'latitude': 34.0289259,
                'longitude': -84.198579,
                'population': '82788',
                'rank': '389',
                'state': 'Georgia'
            },
            {
                'city': 'Bellingham',
                'growth_from_2000_to_2013': '21.8%',
                'latitude': 48.74908,
                'longitude': -122.4781473,
                'population': '82631',
                'rank': '390',
                'state': 'Washington'
            },
            {
                'city': 'Westland',
                'growth_from_2000_to_2013': '-4.7%',
                'latitude': 42.32420399999999,
                'longitude': -83.400211,
                'population': '82578',
                'rank': '391',
                'state': 'Michigan'
            },
            {
                'city': 'Bloomington',
                'growth_from_2000_to_2013': '16.1%',
                'latitude': 39.165325,
                'longitude': -86.52638569999999,
                'population': '82575',
                'rank': '392',
                'state': 'Indiana'
            },
            {
                'city': 'Sioux City',
                'growth_from_2000_to_2013': '-2.9%',
                'latitude': 42.4999942,
                'longitude': -96.40030689999999,
                'population': '82459',
                'rank': '393',
                'state': 'Iowa'
            },
            {
                'city': 'Warwick',
                'growth_from_2000_to_2013': '-4.6%',
                'latitude': 41.7001009,
                'longitude': -71.4161671,
                'population': '81971',
                'rank': '394',
                'state': 'Rhode Island'
            },
            {
                'city': 'Hemet',
                'growth_from_2000_to_2013': '37.6%',
                'latitude': 33.7475203,
                'longitude': -116.9719684,
                'population': '81750',
                'rank': '395',
                'state': 'California'
            },
            {
                'city': 'Longview',
                'growth_from_2000_to_2013': '11.6%',
                'latitude': 32.5007037,
                'longitude': -94.74048909999999,
                'population': '81443',
                'rank': '396',
                'state': 'Texas'
            },
            {
                'city': 'Farmington Hills',
                'growth_from_2000_to_2013': '-0.9%',
                'latitude': 42.4989936,
                'longitude': -83.3677168,
                'population': '81295',
                'rank': '397',
                'state': 'Michigan'
            },
            {
                'city': 'Bend',
                'growth_from_2000_to_2013': '54.3%',
                'latitude': 44.0581728,
                'longitude': -121.3153096,
                'population': '81236',
                'rank': '398',
                'state': 'Oregon'
            },
            {
                'city': 'Lakewood',
                'growth_from_2000_to_2013': '2.1%',
                'latitude': 33.8536269,
                'longitude': -118.1339563,
                'population': '81121',
                'rank': '399',
                'state': 'California'
            },
            {
                'city': 'Merced',
                'growth_from_2000_to_2013': '25.4%',
                'latitude': 37.3021632,
                'longitude': -120.4829677,
                'population': '81102',
                'rank': '400',
                'state': 'California'
            },
            {
                'city': 'Mission',
                'growth_from_2000_to_2013': '74.5%',
                'latitude': 26.2159066,
                'longitude': -98.32529319999999,
                'population': '81050',
                'rank': '401',
                'state': 'Texas'
            },
            {
                'city': 'Chino',
                'growth_from_2000_to_2013': '15.6%',
                'latitude': 34.0122346,
                'longitude': -117.688944,
                'population': '80988',
                'rank': '402',
                'state': 'California'
            },
            {
                'city': 'Redwood City',
                'growth_from_2000_to_2013': '7.1%',
                'latitude': 37.48521520000001,
                'longitude': -122.2363548,
                'population': '80872',
                'rank': '403',
                'state': 'California'
            },
            {
                'city': 'Edinburg',
                'growth_from_2000_to_2013': '65.1%',
                'latitude': 26.3017374,
                'longitude': -98.1633432,
                'population': '80836',
                'rank': '404',
                'state': 'Texas'
            },
            {
                'city': 'Cranston',
                'growth_from_2000_to_2013': '1.4%',
                'latitude': 41.7798226,
                'longitude': -71.4372796,
                'population': '80566',
                'rank': '405',
                'state': 'Rhode Island'
            },
            {
                'city': 'Parma',
                'growth_from_2000_to_2013': '-5.9%',
                'latitude': 41.4047742,
                'longitude': -81.7229086,
                'population': '80429',
                'rank': '406',
                'state': 'Ohio'
            },
            {
                'city': 'New Rochelle',
                'growth_from_2000_to_2013': '9.9%',
                'latitude': 40.9114882,
                'longitude': -73.7823549,
                'population': '79446',
                'rank': '407',
                'state': 'New York'
            },
            {
                'city': 'Lake Forest',
                'growth_from_2000_to_2013': '4.2%',
                'latitude': 33.6469661,
                'longitude': -117.689218,
                'population': '79312',
                'rank': '408',
                'state': 'California'
            },
            {
                'city': 'Napa',
                'growth_from_2000_to_2013': '8.4%',
                'latitude': 38.2975381,
                'longitude': -122.286865,
                'population': '79068',
                'rank': '409',
                'state': 'California'
            },
            {
                'city': 'Hammond',
                'growth_from_2000_to_2013': '-4.6%',
                'latitude': 41.5833688,
                'longitude': -87.5000412,
                'population': '78967',
                'rank': '410',
                'state': 'Indiana'
            },
            {
                'city': 'Fayetteville',
                'growth_from_2000_to_2013': '32.9%',
                'latitude': 36.0625795,
                'longitude': -94.1574263,
                'population': '78960',
                'rank': '411',
                'state': 'Arkansas'
            },
            {
                'city': 'Bloomington',
                'growth_from_2000_to_2013': '20.1%',
                'latitude': 40.4842027,
                'longitude': -88.99368729999999,
                'population': '78902',
                'rank': '412',
                'state': 'Illinois'
            },
            {
                'city': 'Avondale',
                'growth_from_2000_to_2013': '111.5%',
                'latitude': 33.4355977,
                'longitude': -112.3496021,
                'population': '78822',
                'rank': '413',
                'state': 'Arizona'
            },
            {
                'city': 'Somerville',
                'growth_from_2000_to_2013': '1.6%',
                'latitude': 42.3875968,
                'longitude': -71.0994968,
                'population': '78804',
                'rank': '414',
                'state': 'Massachusetts'
            },
            {
                'city': 'Palm Coast',
                'growth_from_2000_to_2013': '137.2%',
                'latitude': 29.5844524,
                'longitude': -81.20786989999999,
                'population': '78740',
                'rank': '415',
                'state': 'Florida'
            },
            {
                'city': 'Bryan',
                'growth_from_2000_to_2013': '19.3%',
                'latitude': 30.6743643,
                'longitude': -96.3699632,
                'population': '78709',
                'rank': '416',
                'state': 'Texas'
            },
            {
                'city': 'Gary',
                'growth_from_2000_to_2013': '-23.4%',
                'latitude': 41.5933696,
                'longitude': -87.3464271,
                'population': '78450',
                'rank': '417',
                'state': 'Indiana'
            },
            {
                'city': 'Largo',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 27.9094665,
                'longitude': -82.7873244,
                'population': '78409',
                'rank': '418',
                'state': 'Florida'
            },
            {
                'city': 'Brooklyn Park',
                'growth_from_2000_to_2013': '16.0%',
                'latitude': 45.0941315,
                'longitude': -93.3563405,
                'population': '78373',
                'rank': '419',
                'state': 'Minnesota'
            },
            {
                'city': 'Tustin',
                'growth_from_2000_to_2013': '15.6%',
                'latitude': 33.7458511,
                'longitude': -117.826166,
                'population': '78327',
                'rank': '420',
                'state': 'California'
            },
            {
                'city': 'Racine',
                'growth_from_2000_to_2013': '-4.4%',
                'latitude': 42.7261309,
                'longitude': -87.78285230000002,
                'population': '78199',
                'rank': '421',
                'state': 'Wisconsin'
            },
            {
                'city': 'Deerfield Beach',
                'growth_from_2000_to_2013': '4.8%',
                'latitude': 26.3184123,
                'longitude': -80.09976569999999,
                'population': '78041',
                'rank': '422',
                'state': 'Florida'
            },
            {
                'city': 'Lynchburg',
                'growth_from_2000_to_2013': '19.5%',
                'latitude': 37.4137536,
                'longitude': -79.14224639999999,
                'population': '78014',
                'rank': '423',
                'state': 'Virginia'
            },
            {
                'city': 'Mountain View',
                'growth_from_2000_to_2013': '10.1%',
                'latitude': 37.3860517,
                'longitude': -122.0838511,
                'population': '77846',
                'rank': '424',
                'state': 'California'
            },
            {
                'city': 'Medford',
                'growth_from_2000_to_2013': '17.1%',
                'latitude': 42.3265152,
                'longitude': -122.8755949,
                'population': '77677',
                'rank': '425',
                'state': 'Oregon'
            },
            {
                'city': 'Lawrence',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 42.7070354,
                'longitude': -71.1631137,
                'population': '77657',
                'rank': '426',
                'state': 'Massachusetts'
            },
            {
                'city': 'Bellflower',
                'growth_from_2000_to_2013': '6.3%',
                'latitude': 33.8816818,
                'longitude': -118.1170117,
                'population': '77593',
                'rank': '427',
                'state': 'California'
            },
            {
                'city': 'Melbourne',
                'growth_from_2000_to_2013': '5.9%',
                'latitude': 28.0836269,
                'longitude': -80.60810889999999,
                'population': '77508',
                'rank': '428',
                'state': 'Florida'
            },
            {
                'city': 'St. Joseph',
                'growth_from_2000_to_2013': '4.1%',
                'latitude': 39.7674578,
                'longitude': -94.84668099999999,
                'population': '77147',
                'rank': '429',
                'state': 'Missouri'
            },
            {
                'city': 'Camden',
                'growth_from_2000_to_2013': '-3.6%',
                'latitude': 39.9259463,
                'longitude': -75.1196199,
                'population': '76903',
                'rank': '430',
                'state': 'New Jersey'
            },
            {
                'city': 'St. George',
                'growth_from_2000_to_2013': '53.1%',
                'latitude': 37.0965278,
                'longitude': -113.5684164,
                'population': '76817',
                'rank': '431',
                'state': 'Utah'
            },
            {
                'city': 'Kennewick',
                'growth_from_2000_to_2013': '29.1%',
                'latitude': 46.2112458,
                'longitude': -119.1372338,
                'population': '76762',
                'rank': '432',
                'state': 'Washington'
            },
            {
                'city': 'Baldwin Park',
                'growth_from_2000_to_2013': '0.8%',
                'latitude': 34.0852868,
                'longitude': -117.9608978,
                'population': '76635',
                'rank': '433',
                'state': 'California'
            },
            {
                'city': 'Chino Hills',
                'growth_from_2000_to_2013': '13.6%',
                'latitude': 33.9898188,
                'longitude': -117.7325848,
                'population': '76572',
                'rank': '434',
                'state': 'California'
            },
            {
                'city': 'Alameda',
                'growth_from_2000_to_2013': '5.4%',
                'latitude': 37.7652065,
                'longitude': -122.2416355,
                'population': '76419',
                'rank': '435',
                'state': 'California'
            },
            {
                'city': 'Albany',
                'growth_from_2000_to_2013': '-0.6%',
                'latitude': 31.5785074,
                'longitude': -84.15574099999999,
                'population': '76185',
                'rank': '436',
                'state': 'Georgia'
            },
            {
                'city': 'Arlington Heights',
                'growth_from_2000_to_2013': '-0.6%',
                'latitude': 42.0883603,
                'longitude': -87.98062650000001,
                'population': '75994',
                'rank': '437',
                'state': 'Illinois'
            },
            {
                'city': 'Scranton',
                'growth_from_2000_to_2013': '0.0%',
                'latitude': 41.408969,
                'longitude': -75.66241219999999,
                'population': '75806',
                'rank': '438',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Evanston',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 42.0450722,
                'longitude': -87.68769689999999,
                'population': '75570',
                'rank': '439',
                'state': 'Illinois'
            },
            {
                'city': 'Kalamazoo',
                'growth_from_2000_to_2013': '-1.9%',
                'latitude': 42.2917069,
                'longitude': -85.5872286,
                'population': '75548',
                'rank': '440',
                'state': 'Michigan'
            },
            {
                'city': 'Baytown',
                'growth_from_2000_to_2013': '13.1%',
                'latitude': 29.7355047,
                'longitude': -94.97742740000001,
                'population': '75418',
                'rank': '441',
                'state': 'Texas'
            },
            {
                'city': 'Upland',
                'growth_from_2000_to_2013': '9.5%',
                'latitude': 34.09751,
                'longitude': -117.6483876,
                'population': '75413',
                'rank': '442',
                'state': 'California'
            },
            {
                'city': 'Springdale',
                'growth_from_2000_to_2013': '57.1%',
                'latitude': 36.18674420000001,
                'longitude': -94.1288141,
                'population': '75229',
                'rank': '443',
                'state': 'Arkansas'
            },
            {
                'city': 'Bethlehem',
                'growth_from_2000_to_2013': '5.2%',
                'latitude': 40.6259316,
                'longitude': -75.37045789999999,
                'population': '75018',
                'rank': '444',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Schaumburg',
                'growth_from_2000_to_2013': '-0.5%',
                'latitude': 42.0333607,
                'longitude': -88.0834059,
                'population': '74907',
                'rank': '445',
                'state': 'Illinois'
            },
            {
                'city': 'Mount Pleasant',
                'growth_from_2000_to_2013': '53.2%',
                'latitude': 32.8323225,
                'longitude': -79.82842579999999,
                'population': '74885',
                'rank': '446',
                'state': 'South Carolina'
            },
            {
                'city': 'Auburn',
                'growth_from_2000_to_2013': '34.9%',
                'latitude': 47.30732279999999,
                'longitude': -122.2284532,
                'population': '74860',
                'rank': '447',
                'state': 'Washington'
            },
            {
                'city': 'Decatur',
                'growth_from_2000_to_2013': '-8.7%',
                'latitude': 39.8403147,
                'longitude': -88.9548001,
                'population': '74710',
                'rank': '448',
                'state': 'Illinois'
            },
            {
                'city': 'San Ramon',
                'growth_from_2000_to_2013': '65.8%',
                'latitude': 37.7799273,
                'longitude': -121.9780153,
                'population': '74513',
                'rank': '449',
                'state': 'California'
            },
            {
                'city': 'Pleasanton',
                'growth_from_2000_to_2013': '15.2%',
                'latitude': 37.6624312,
                'longitude': -121.8746789,
                'population': '74110',
                'rank': '450',
                'state': 'California'
            },
            {
                'city': 'Wyoming',
                'growth_from_2000_to_2013': '6.5%',
                'latitude': 42.9133602,
                'longitude': -85.7053085,
                'population': '74100',
                'rank': '451',
                'state': 'Michigan'
            },
            {
                'city': 'Lake Charles',
                'growth_from_2000_to_2013': '3.0%',
                'latitude': 30.2265949,
                'longitude': -93.2173758,
                'population': '74024',
                'rank': '452',
                'state': 'Louisiana'
            },
            {
                'city': 'Plymouth',
                'growth_from_2000_to_2013': '12.0%',
                'latitude': 45.0105194,
                'longitude': -93.4555093,
                'population': '73987',
                'rank': '453',
                'state': 'Minnesota'
            },
            {
                'city': 'Bolingbrook',
                'growth_from_2000_to_2013': '29.7%',
                'latitude': 41.69864159999999,
                'longitude': -88.0683955,
                'population': '73936',
                'rank': '454',
                'state': 'Illinois'
            },
            {
                'city': 'Pharr',
                'growth_from_2000_to_2013': '55.7%',
                'latitude': 26.1947962,
                'longitude': -98.1836216,
                'population': '73790',
                'rank': '455',
                'state': 'Texas'
            },
            {
                'city': 'Appleton',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 44.2619309,
                'longitude': -88.41538469999999,
                'population': '73596',
                'rank': '456',
                'state': 'Wisconsin'
            },
            {
                'city': 'Gastonia',
                'growth_from_2000_to_2013': '8.2%',
                'latitude': 35.262082,
                'longitude': -81.18730049999999,
                'population': '73209',
                'rank': '457',
                'state': 'North Carolina'
            },
            {
                'city': 'Folsom',
                'growth_from_2000_to_2013': '38.6%',
                'latitude': 38.6779591,
                'longitude': -121.1760583,
                'population': '73098',
                'rank': '458',
                'state': 'California'
            },
            {
                'city': 'Southfield',
                'growth_from_2000_to_2013': '-6.7%',
                'latitude': 42.4733688,
                'longitude': -83.2218731,
                'population': '73006',
                'rank': '459',
                'state': 'Michigan'
            },
            {
                'city': 'Rochester Hills',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 42.65836609999999,
                'longitude': -83.1499322,
                'population': '72952',
                'rank': '460',
                'state': 'Michigan'
            },
            {
                'city': 'New Britain',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 41.6612104,
                'longitude': -72.7795419,
                'population': '72939',
                'rank': '461',
                'state': 'Connecticut'
            },
            {
                'city': 'Goodyear',
                'growth_from_2000_to_2013': '271.0%',
                'latitude': 33.4353394,
                'longitude': -112.3576567,
                'population': '72864',
                'rank': '462',
                'state': 'Arizona'
            },
            {
                'city': 'Canton',
                'growth_from_2000_to_2013': '-10.3%',
                'latitude': 40.79894729999999,
                'longitude': -81.378447,
                'population': '72535',
                'rank': '463',
                'state': 'Ohio'
            },
            {
                'city': 'Warner Robins',
                'growth_from_2000_to_2013': '45.7%',
                'latitude': 32.6130007,
                'longitude': -83.624201,
                'population': '72531',
                'rank': '464',
                'state': 'Georgia'
            },
            {
                'city': 'Union City',
                'growth_from_2000_to_2013': '7.4%',
                'latitude': 37.5933918,
                'longitude': -122.0438298,
                'population': '72528',
                'rank': '465',
                'state': 'California'
            },
            {
                'city': 'Perris',
                'growth_from_2000_to_2013': '98.7%',
                'latitude': 33.7825194,
                'longitude': -117.2286478,
                'population': '72326',
                'rank': '466',
                'state': 'California'
            },
            {
                'city': 'Manteca',
                'growth_from_2000_to_2013': '42.7%',
                'latitude': 37.7974273,
                'longitude': -121.2160526,
                'population': '71948',
                'rank': '467',
                'state': 'California'
            },
            {
                'city': 'Iowa City',
                'growth_from_2000_to_2013': '13.8%',
                'latitude': 41.6611277,
                'longitude': -91.5301683,
                'population': '71591',
                'rank': '468',
                'state': 'Iowa'
            },
            {
                'city': 'Jonesboro',
                'growth_from_2000_to_2013': '28.3%',
                'latitude': 35.84229670000001,
                'longitude': -90.704279,
                'population': '71551',
                'rank': '469',
                'state': 'Arkansas'
            },
            {
                'city': 'Wilmington',
                'growth_from_2000_to_2013': '-1.6%',
                'latitude': 39.7390721,
                'longitude': -75.5397878,
                'population': '71525',
                'rank': '470',
                'state': 'Delaware'
            },
            {
                'city': 'Lynwood',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 33.930293,
                'longitude': -118.2114603,
                'population': '71371',
                'rank': '471',
                'state': 'California'
            },
            {
                'city': 'Loveland',
                'growth_from_2000_to_2013': '37.4%',
                'latitude': 40.3977612,
                'longitude': -105.0749801,
                'population': '71334',
                'rank': '472',
                'state': 'Colorado'
            },
            {
                'city': 'Pawtucket',
                'growth_from_2000_to_2013': '-2.5%',
                'latitude': 41.878711,
                'longitude': -71.38255579999999,
                'population': '71172',
                'rank': '473',
                'state': 'Rhode Island'
            },
            {
                'city': 'Boynton Beach',
                'growth_from_2000_to_2013': '17.3%',
                'latitude': 26.5317866,
                'longitude': -80.0905465,
                'population': '71097',
                'rank': '474',
                'state': 'Florida'
            },
            {
                'city': 'Waukesha',
                'growth_from_2000_to_2013': '8.0%',
                'latitude': 43.0116784,
                'longitude': -88.2314813,
                'population': '71016',
                'rank': '475',
                'state': 'Wisconsin'
            },
            {
                'city': 'Gulfport',
                'growth_from_2000_to_2013': '-0.6%',
                'latitude': 30.3674198,
                'longitude': -89.0928155,
                'population': '71012',
                'rank': '476',
                'state': 'Mississippi'
            },
            {
                'city': 'Apple Valley',
                'growth_from_2000_to_2013': '29.9%',
                'latitude': 34.5008311,
                'longitude': -117.1858759,
                'population': '70924',
                'rank': '477',
                'state': 'California'
            },
            {
                'city': 'Passaic',
                'growth_from_2000_to_2013': '4.3%',
                'latitude': 40.8567662,
                'longitude': -74.1284764,
                'population': '70868',
                'rank': '478',
                'state': 'New Jersey'
            },
            {
                'city': 'Rapid City',
                'growth_from_2000_to_2013': '17.9%',
                'latitude': 44.0805434,
                'longitude': -103.2310149,
                'population': '70812',
                'rank': '479',
                'state': 'South Dakota'
            },
            {
                'city': 'Layton',
                'growth_from_2000_to_2013': '20.2%',
                'latitude': 41.0602216,
                'longitude': -111.9710529,
                'population': '70790',
                'rank': '480',
                'state': 'Utah'
            },
            {
                'city': 'Lafayette',
                'growth_from_2000_to_2013': '14.5%',
                'latitude': 40.4167022,
                'longitude': -86.87528689999999,
                'population': '70373',
                'rank': '481',
                'state': 'Indiana'
            },
            {
                'city': 'Turlock',
                'growth_from_2000_to_2013': '23.5%',
                'latitude': 37.4946568,
                'longitude': -120.8465941,
                'population': '70365',
                'rank': '482',
                'state': 'California'
            },
            {
                'city': 'Muncie',
                'growth_from_2000_to_2013': '-0.7%',
                'latitude': 40.1933767,
                'longitude': -85.3863599,
                'population': '70316',
                'rank': '483',
                'state': 'Indiana'
            },
            {
                'city': 'Temple',
                'growth_from_2000_to_2013': '27.1%',
                'latitude': 31.0982344,
                'longitude': -97.342782,
                'population': '70190',
                'rank': '484',
                'state': 'Texas'
            },
            {
                'city': 'Missouri City',
                'growth_from_2000_to_2013': '31.1%',
                'latitude': 29.6185669,
                'longitude': -95.5377215,
                'population': '70185',
                'rank': '485',
                'state': 'Texas'
            },
            {
                'city': 'Redlands',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 34.0555693,
                'longitude': -117.1825381,
                'population': '69999',
                'rank': '486',
                'state': 'California'
            },
            {
                'city': 'Santa Fe',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 35.6869752,
                'longitude': -105.937799,
                'population': '69976',
                'rank': '487',
                'state': 'New Mexico'
            },
            {
                'city': 'Lauderhill',
                'growth_from_2000_to_2013': '4.2%',
                'latitude': 26.1403635,
                'longitude': -80.2133808,
                'population': '69813',
                'rank': '488',
                'state': 'Florida'
            },
            {
                'city': 'Milpitas',
                'growth_from_2000_to_2013': '11.0%',
                'latitude': 37.4323341,
                'longitude': -121.8995741,
                'population': '69783',
                'rank': '489',
                'state': 'California'
            },
            {
                'city': 'Palatine',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 42.1103041,
                'longitude': -88.03424000000001,
                'population': '69350',
                'rank': '490',
                'state': 'Illinois'
            },
            {
                'city': 'Missoula',
                'growth_from_2000_to_2013': '19.7%',
                'latitude': 46.87871759999999,
                'longitude': -113.996586,
                'population': '69122',
                'rank': '491',
                'state': 'Montana'
            },
            {
                'city': 'Rock Hill',
                'growth_from_2000_to_2013': '36.0%',
                'latitude': 34.9248667,
                'longitude': -81.02507840000001,
                'population': '69103',
                'rank': '492',
                'state': 'South Carolina'
            },
            {
                'city': 'Jacksonville',
                'growth_from_2000_to_2013': '5.0%',
                'latitude': 34.7540524,
                'longitude': -77.4302414,
                'population': '69079',
                'rank': '493',
                'state': 'North Carolina'
            },
            {
                'city': 'Franklin',
                'growth_from_2000_to_2013': '48.5%',
                'latitude': 35.9250637,
                'longitude': -86.8688899,
                'population': '68886',
                'rank': '494',
                'state': 'Tennessee'
            },
            {
                'city': 'Flagstaff',
                'growth_from_2000_to_2013': '29.3%',
                'latitude': 35.1982836,
                'longitude': -111.651302,
                'population': '68667',
                'rank': '495',
                'state': 'Arizona'
            },
            {
                'city': 'Flower Mound',
                'growth_from_2000_to_2013': '32.5%',
                'latitude': 33.0145673,
                'longitude': -97.0969552,
                'population': '68609',
                'rank': '496',
                'state': 'Texas'
            },
            {
                'city': 'Weston',
                'growth_from_2000_to_2013': '34.5%',
                'latitude': 26.1003654,
                'longitude': -80.3997748,
                'population': '68388',
                'rank': '497',
                'state': 'Florida'
            },
            {
                'city': 'Waterloo',
                'growth_from_2000_to_2013': '-0.5%',
                'latitude': 42.492786,
                'longitude': -92.34257749999999,
                'population': '68366',
                'rank': '498',
                'state': 'Iowa'
            },
            {
                'city': 'Union City',
                'growth_from_2000_to_2013': '1.7%',
                'latitude': 40.6975898,
                'longitude': -74.26316349999999,
                'population': '68247',
                'rank': '499',
                'state': 'New Jersey'
            },
            {
                'city': 'Mount Vernon',
                'growth_from_2000_to_2013': '-0.2%',
                'latitude': 40.9125992,
                'longitude': -73.8370786,
                'population': '68224',
                'rank': '500',
                'state': 'New York'
            },
            {
                'city': 'Fort Myers',
                'growth_from_2000_to_2013': '31.2%',
                'latitude': 26.640628,
                'longitude': -81.8723084,
                'population': '68190',
                'rank': '501',
                'state': 'Florida'
            },
            {
                'city': 'Dothan',
                'growth_from_2000_to_2013': '16.6%',
                'latitude': 31.2232313,
                'longitude': -85.3904888,
                'population': '68001',
                'rank': '502',
                'state': 'Alabama'
            },
            {
                'city': 'Rancho Cordova',
                'growth_from_2000_to_2013': '26.4%',
                'latitude': 38.5890723,
                'longitude': -121.302728,
                'population': '67911',
                'rank': '503',
                'state': 'California'
            },
            {
                'city': 'Redondo Beach',
                'growth_from_2000_to_2013': '6.7%',
                'latitude': 33.8491816,
                'longitude': -118.3884078,
                'population': '67815',
                'rank': '504',
                'state': 'California'
            },
            {
                'city': 'Jackson',
                'growth_from_2000_to_2013': '12.9%',
                'latitude': 35.6145169,
                'longitude': -88.81394689999999,
                'population': '67685',
                'rank': '505',
                'state': 'Tennessee'
            },
            {
                'city': 'Pasco',
                'growth_from_2000_to_2013': '98.5%',
                'latitude': 46.2395793,
                'longitude': -119.1005657,
                'population': '67599',
                'rank': '506',
                'state': 'Washington'
            },
            {
                'city': 'St. Charles',
                'growth_from_2000_to_2013': '11.3%',
                'latitude': 38.7881062,
                'longitude': -90.4974359,
                'population': '67569',
                'rank': '507',
                'state': 'Missouri'
            },
            {
                'city': 'Eau Claire',
                'growth_from_2000_to_2013': '8.7%',
                'latitude': 44.811349,
                'longitude': -91.4984941,
                'population': '67545',
                'rank': '508',
                'state': 'Wisconsin'
            },
            {
                'city': 'North Richland Hills',
                'growth_from_2000_to_2013': '20.2%',
                'latitude': 32.8342952,
                'longitude': -97.2289029,
                'population': '67317',
                'rank': '509',
                'state': 'Texas'
            },
            {
                'city': 'Bismarck',
                'growth_from_2000_to_2013': '20.1%',
                'latitude': 46.8083268,
                'longitude': -100.7837392,
                'population': '67034',
                'rank': '510',
                'state': 'North Dakota'
            },
            {
                'city': 'Yorba Linda',
                'growth_from_2000_to_2013': '13.4%',
                'latitude': 33.8886259,
                'longitude': -117.8131125,
                'population': '67032',
                'rank': '511',
                'state': 'California'
            },
            {
                'city': 'Kenner',
                'growth_from_2000_to_2013': '-4.8%',
                'latitude': 29.9940924,
                'longitude': -90.2417434,
                'population': '66975',
                'rank': '512',
                'state': 'Louisiana'
            },
            {
                'city': 'Walnut Creek',
                'growth_from_2000_to_2013': '3.5%',
                'latitude': 37.9100783,
                'longitude': -122.0651819,
                'population': '66900',
                'rank': '513',
                'state': 'California'
            },
            {
                'city': 'Frederick',
                'growth_from_2000_to_2013': '25.9%',
                'latitude': 39.41426879999999,
                'longitude': -77.4105409,
                'population': '66893',
                'rank': '514',
                'state': 'Maryland'
            },
            {
                'city': 'Oshkosh',
                'growth_from_2000_to_2013': '5.3%',
                'latitude': 44.0247062,
                'longitude': -88.5426136,
                'population': '66778',
                'rank': '515',
                'state': 'Wisconsin'
            },
            {
                'city': 'Pittsburg',
                'growth_from_2000_to_2013': '16.6%',
                'latitude': 38.0279762,
                'longitude': -121.8846806,
                'population': '66695',
                'rank': '516',
                'state': 'California'
            },
            {
                'city': 'Palo Alto',
                'growth_from_2000_to_2013': '13.7%',
                'latitude': 37.4418834,
                'longitude': -122.1430195,
                'population': '66642',
                'rank': '517',
                'state': 'California'
            },
            {
                'city': 'Bossier City',
                'growth_from_2000_to_2013': '17.4%',
                'latitude': 32.5159852,
                'longitude': -93.7321228,
                'population': '66333',
                'rank': '518',
                'state': 'Louisiana'
            },
            {
                'city': 'Portland',
                'growth_from_2000_to_2013': '3.2%',
                'latitude': 43.66147100000001,
                'longitude': -70.2553259,
                'population': '66318',
                'rank': '519',
                'state': 'Maine'
            },
            {
                'city': 'St. Cloud',
                'growth_from_2000_to_2013': '10.9%',
                'latitude': 45.5579451,
                'longitude': -94.16324039999999,
                'population': '66297',
                'rank': '520',
                'state': 'Minnesota'
            },
            {
                'city': 'Davis',
                'growth_from_2000_to_2013': '11.9%',
                'latitude': 38.5449065,
                'longitude': -121.7405167,
                'population': '66205',
                'rank': '521',
                'state': 'California'
            },
            {
                'city': 'South San Francisco',
                'growth_from_2000_to_2013': '9.1%',
                'latitude': 37.654656,
                'longitude': -122.4077498,
                'population': '66174',
                'rank': '522',
                'state': 'California'
            },
            {
                'city': 'Camarillo',
                'growth_from_2000_to_2013': '14.9%',
                'latitude': 34.2163937,
                'longitude': -119.0376023,
                'population': '66086',
                'rank': '523',
                'state': 'California'
            },
            {
                'city': 'North Little Rock',
                'growth_from_2000_to_2013': '9.0%',
                'latitude': 34.769536,
                'longitude': -92.2670941,
                'population': '66075',
                'rank': '524',
                'state': 'Arkansas'
            },
            {
                'city': 'Schenectady',
                'growth_from_2000_to_2013': '6.7%',
                'latitude': 42.8142432,
                'longitude': -73.9395687,
                'population': '65902',
                'rank': '525',
                'state': 'New York'
            },
            {
                'city': 'Gaithersburg',
                'growth_from_2000_to_2013': '24.2%',
                'latitude': 39.1434406,
                'longitude': -77.2013705,
                'population': '65690',
                'rank': '526',
                'state': 'Maryland'
            },
            {
                'city': 'Harlingen',
                'growth_from_2000_to_2013': '11.6%',
                'latitude': 26.1906306,
                'longitude': -97.69610259999999,
                'population': '65665',
                'rank': '527',
                'state': 'Texas'
            },
            {
                'city': 'Woodbury',
                'growth_from_2000_to_2013': '39.8%',
                'latitude': 44.9238552,
                'longitude': -92.9593797,
                'population': '65656',
                'rank': '528',
                'state': 'Minnesota'
            },
            {
                'city': 'Eagan',
                'growth_from_2000_to_2013': '2.6%',
                'latitude': 44.8041322,
                'longitude': -93.1668858,
                'population': '65453',
                'rank': '529',
                'state': 'Minnesota'
            },
            {
                'city': 'Yuba City',
                'growth_from_2000_to_2013': '27.9%',
                'latitude': 39.1404477,
                'longitude': -121.6169108,
                'population': '65416',
                'rank': '530',
                'state': 'California'
            },
            {
                'city': 'Maple Grove',
                'growth_from_2000_to_2013': '27.3%',
                'latitude': 45.0724642,
                'longitude': -93.4557877,
                'population': '65415',
                'rank': '531',
                'state': 'Minnesota'
            },
            {
                'city': 'Youngstown',
                'growth_from_2000_to_2013': '-20.2%',
                'latitude': 41.0997803,
                'longitude': -80.6495194,
                'population': '65184',
                'rank': '532',
                'state': 'Ohio'
            },
            {
                'city': 'Skokie',
                'growth_from_2000_to_2013': '2.8%',
                'latitude': 42.0324025,
                'longitude': -87.7416246,
                'population': '65176',
                'rank': '533',
                'state': 'Illinois'
            },
            {
                'city': 'Kissimmee',
                'growth_from_2000_to_2013': '32.6%',
                'latitude': 28.2919557,
                'longitude': -81.40757099999999,
                'population': '65173',
                'rank': '534',
                'state': 'Florida'
            },
            {
                'city': 'Johnson City',
                'growth_from_2000_to_2013': '16.2%',
                'latitude': 36.3134397,
                'longitude': -82.3534727,
                'population': '65123',
                'rank': '535',
                'state': 'Tennessee'
            },
            {
                'city': 'Victoria',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 28.8052674,
                'longitude': -97.0035982,
                'population': '65098',
                'rank': '536',
                'state': 'Texas'
            },
            {
                'city': 'San Clemente',
                'growth_from_2000_to_2013': '28.6%',
                'latitude': 33.4269728,
                'longitude': -117.6119925,
                'population': '65040',
                'rank': '537',
                'state': 'California'
            },
            {
                'city': 'Bayonne',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 40.6687141,
                'longitude': -74.1143091,
                'population': '65028',
                'rank': '538',
                'state': 'New Jersey'
            },
            {
                'city': 'Laguna Niguel',
                'growth_from_2000_to_2013': '2.8%',
                'latitude': 33.5225261,
                'longitude': -117.7075526,
                'population': '64652',
                'rank': '539',
                'state': 'California'
            },
            {
                'city': 'East Orange',
                'growth_from_2000_to_2013': '-7.4%',
                'latitude': 40.767323,
                'longitude': -74.2048677,
                'population': '64544',
                'rank': '540',
                'state': 'New Jersey'
            },
            {
                'city': 'Shawnee',
                'growth_from_2000_to_2013': '32.2%',
                'latitude': 39.02284849999999,
                'longitude': -94.7151865,
                'population': '64323',
                'rank': '541',
                'state': 'Kansas'
            },
            {
                'city': 'Homestead',
                'growth_from_2000_to_2013': '100.7%',
                'latitude': 25.4687224,
                'longitude': -80.4775569,
                'population': '64079',
                'rank': '542',
                'state': 'Florida'
            },
            {
                'city': 'Rockville',
                'growth_from_2000_to_2013': '34.0%',
                'latitude': 39.0839973,
                'longitude': -77.1527578,
                'population': '64072',
                'rank': '544',
                'state': 'Maryland'
            },
            {
                'city': 'Delray Beach',
                'growth_from_2000_to_2013': '6.1%',
                'latitude': 26.4614625,
                'longitude': -80.0728201,
                'population': '64072',
                'rank': '543',
                'state': 'Florida'
            },
            {
                'city': 'Janesville',
                'growth_from_2000_to_2013': '5.6%',
                'latitude': 42.6827885,
                'longitude': -89.0187222,
                'population': '63820',
                'rank': '545',
                'state': 'Wisconsin'
            },
            {
                'city': 'Conway',
                'growth_from_2000_to_2013': '46.1%',
                'latitude': 35.0886963,
                'longitude': -92.4421011,
                'population': '63816',
                'rank': '546',
                'state': 'Arkansas'
            },
            {
                'city': 'Pico Rivera',
                'growth_from_2000_to_2013': '0.4%',
                'latitude': 33.9830688,
                'longitude': -118.096735,
                'population': '63771',
                'rank': '547',
                'state': 'California'
            },
            {
                'city': 'Lorain',
                'growth_from_2000_to_2013': '-7.2%',
                'latitude': 41.452819,
                'longitude': -82.1823746,
                'population': '63710',
                'rank': '548',
                'state': 'Ohio'
            },
            {
                'city': 'Montebello',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 34.0165053,
                'longitude': -118.1137535,
                'population': '63495',
                'rank': '549',
                'state': 'California'
            },
            {
                'city': 'Lodi',
                'growth_from_2000_to_2013': '10.1%',
                'latitude': 38.1341477,
                'longitude': -121.2722194,
                'population': '63338',
                'rank': '550',
                'state': 'California'
            },
            {
                'city': 'New Braunfels',
                'growth_from_2000_to_2013': '64.0%',
                'latitude': 29.7030024,
                'longitude': -98.1244531,
                'population': '63279',
                'rank': '551',
                'state': 'Texas'
            },
            {
                'city': 'Marysville',
                'growth_from_2000_to_2013': '115.7%',
                'latitude': 48.0517637,
                'longitude': -122.1770818,
                'population': '63269',
                'rank': '552',
                'state': 'Washington'
            },
            {
                'city': 'Tamarac',
                'growth_from_2000_to_2013': '12.9%',
                'latitude': 26.2128609,
                'longitude': -80.2497707,
                'population': '63155',
                'rank': '553',
                'state': 'Florida'
            },
            {
                'city': 'Madera',
                'growth_from_2000_to_2013': '44.4%',
                'latitude': 36.9613356,
                'longitude': -120.0607176,
                'population': '63105',
                'rank': '554',
                'state': 'California'
            },
            {
                'city': 'Conroe',
                'growth_from_2000_to_2013': '61.9%',
                'latitude': 30.3118769,
                'longitude': -95.45605119999999,
                'population': '63032',
                'rank': '555',
                'state': 'Texas'
            },
            {
                'city': 'Santa Cruz',
                'growth_from_2000_to_2013': '12.5%',
                'latitude': 36.9741171,
                'longitude': -122.0307963,
                'population': '62864',
                'rank': '556',
                'state': 'California'
            },
            {
                'city': 'Eden Prairie',
                'growth_from_2000_to_2013': '13.3%',
                'latitude': 44.8546856,
                'longitude': -93.47078599999999,
                'population': '62603',
                'rank': '557',
                'state': 'Minnesota'
            },
            {
                'city': 'Cheyenne',
                'growth_from_2000_to_2013': '16.9%',
                'latitude': 41.1399814,
                'longitude': -104.8202462,
                'population': '62448',
                'rank': '558',
                'state': 'Wyoming'
            },
            {
                'city': 'Daytona Beach',
                'growth_from_2000_to_2013': '-2.3%',
                'latitude': 29.2108147,
                'longitude': -81.0228331,
                'population': '62316',
                'rank': '559',
                'state': 'Florida'
            },
            {
                'city': 'Alpharetta',
                'growth_from_2000_to_2013': '33.6%',
                'latitude': 34.0753762,
                'longitude': -84.2940899,
                'population': '62298',
                'rank': '560',
                'state': 'Georgia'
            },
            {
                'city': 'Hamilton',
                'growth_from_2000_to_2013': '2.7%',
                'latitude': 39.3995008,
                'longitude': -84.5613355,
                'population': '62258',
                'rank': '561',
                'state': 'Ohio'
            },
            {
                'city': 'Waltham',
                'growth_from_2000_to_2013': '5.0%',
                'latitude': 42.3764852,
                'longitude': -71.2356113,
                'population': '62227',
                'rank': '562',
                'state': 'Massachusetts'
            },
            {
                'city': 'Coon Rapids',
                'growth_from_2000_to_2013': '0.6%',
                'latitude': 45.1732394,
                'longitude': -93.30300629999999,
                'population': '62103',
                'rank': '563',
                'state': 'Minnesota'
            },
            {
                'city': 'Haverhill',
                'growth_from_2000_to_2013': '5.0%',
                'latitude': 42.7762015,
                'longitude': -71.0772796,
                'population': '62088',
                'rank': '564',
                'state': 'Massachusetts'
            },
            {
                'city': 'Council Bluffs',
                'growth_from_2000_to_2013': '6.2%',
                'latitude': 41.2619444,
                'longitude': -95.8608333,
                'population': '61969',
                'rank': '565',
                'state': 'Iowa'
            },
            {
                'city': 'Taylor',
                'growth_from_2000_to_2013': '-6.3%',
                'latitude': 42.240872,
                'longitude': -83.2696509,
                'population': '61817',
                'rank': '566',
                'state': 'Michigan'
            },
            {
                'city': 'Utica',
                'growth_from_2000_to_2013': '2.2%',
                'latitude': 43.100903,
                'longitude': -75.232664,
                'population': '61808',
                'rank': '567',
                'state': 'New York'
            },
            {
                'city': 'Ames',
                'growth_from_2000_to_2013': '21.3%',
                'latitude': 42.034722,
                'longitude': -93.61999999999999,
                'population': '61792',
                'rank': '568',
                'state': 'Iowa'
            },
            {
                'city': 'La Habra',
                'growth_from_2000_to_2013': '3.6%',
                'latitude': 33.9319578,
                'longitude': -117.9461734,
                'population': '61653',
                'rank': '569',
                'state': 'California'
            },
            {
                'city': 'Encinitas',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 33.0369867,
                'longitude': -117.2919818,
                'population': '61588',
                'rank': '570',
                'state': 'California'
            },
            {
                'city': 'Bowling Green',
                'growth_from_2000_to_2013': '24.1%',
                'latitude': 36.9685219,
                'longitude': -86.4808043,
                'population': '61488',
                'rank': '571',
                'state': 'Kentucky'
            },
            {
                'city': 'Burnsville',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 44.7677424,
                'longitude': -93.27772259999999,
                'population': '61434',
                'rank': '572',
                'state': 'Minnesota'
            },
            {
                'city': 'Greenville',
                'growth_from_2000_to_2013': '8.2%',
                'latitude': 34.85261759999999,
                'longitude': -82.3940104,
                'population': '61397',
                'rank': '573',
                'state': 'South Carolina'
            },
            {
                'city': 'West Des Moines',
                'growth_from_2000_to_2013': '29.8%',
                'latitude': 41.5772115,
                'longitude': -93.711332,
                'population': '61255',
                'rank': '574',
                'state': 'Iowa'
            },
            {
                'city': 'Cedar Park',
                'growth_from_2000_to_2013': '134.3%',
                'latitude': 30.505198,
                'longitude': -97.8202888,
                'population': '61238',
                'rank': '575',
                'state': 'Texas'
            },
            {
                'city': 'Tulare',
                'growth_from_2000_to_2013': '33.3%',
                'latitude': 36.2077288,
                'longitude': -119.3473379,
                'population': '61170',
                'rank': '576',
                'state': 'California'
            },
            {
                'city': 'Monterey Park',
                'growth_from_2000_to_2013': '1.5%',
                'latitude': 34.0625106,
                'longitude': -118.1228476,
                'population': '61085',
                'rank': '577',
                'state': 'California'
            },
            {
                'city': 'Vineland',
                'growth_from_2000_to_2013': '9.3%',
                'latitude': 39.4863773,
                'longitude': -75.02596369999999,
                'population': '61050',
                'rank': '578',
                'state': 'New Jersey'
            },
            {
                'city': 'Terre Haute',
                'growth_from_2000_to_2013': '2.5%',
                'latitude': 39.4667034,
                'longitude': -87.41390919999999,
                'population': '61025',
                'rank': '579',
                'state': 'Indiana'
            },
            {
                'city': 'North Miami',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 25.8900949,
                'longitude': -80.1867138,
                'population': '61007',
                'rank': '580',
                'state': 'Florida'
            },
            {
                'city': 'Mansfield',
                'growth_from_2000_to_2013': '114.2%',
                'latitude': 32.5631924,
                'longitude': -97.1416768,
                'population': '60872',
                'rank': '581',
                'state': 'Texas'
            },
            {
                'city': 'West Allis',
                'growth_from_2000_to_2013': '-0.6%',
                'latitude': 43.0166806,
                'longitude': -88.0070315,
                'population': '60697',
                'rank': '582',
                'state': 'Wisconsin'
            },
            {
                'city': 'Bristol',
                'growth_from_2000_to_2013': '0.4%',
                'latitude': 41.67176480000001,
                'longitude': -72.9492703,
                'population': '60568',
                'rank': '583',
                'state': 'Connecticut'
            },
            {
                'city': 'Taylorsville',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 40.66772479999999,
                'longitude': -111.9388258,
                'population': '60519',
                'rank': '584',
                'state': 'Utah'
            },
            {
                'city': 'Malden',
                'growth_from_2000_to_2013': '7.4%',
                'latitude': 42.4250964,
                'longitude': -71.066163,
                'population': '60509',
                'rank': '585',
                'state': 'Massachusetts'
            },
            {
                'city': 'Meriden',
                'growth_from_2000_to_2013': '3.7%',
                'latitude': 41.5381535,
                'longitude': -72.80704349999999,
                'population': '60456',
                'rank': '586',
                'state': 'Connecticut'
            },
            {
                'city': 'Blaine',
                'growth_from_2000_to_2013': '32.8%',
                'latitude': 45.1607987,
                'longitude': -93.23494889999999,
                'population': '60407',
                'rank': '587',
                'state': 'Minnesota'
            },
            {
                'city': 'Wellington',
                'growth_from_2000_to_2013': '55.0%',
                'latitude': 26.6617635,
                'longitude': -80.2683571,
                'population': '60202',
                'rank': '588',
                'state': 'Florida'
            },
            {
                'city': 'Cupertino',
                'growth_from_2000_to_2013': '14.3%',
                'latitude': 37.3229978,
                'longitude': -122.0321823,
                'population': '60189',
                'rank': '589',
                'state': 'California'
            },
            {
                'city': 'Springfield',
                'growth_from_2000_to_2013': '12.4%',
                'latitude': 44.0462362,
                'longitude': -123.0220289,
                'population': '60177',
                'rank': '590',
                'state': 'Oregon'
            },
            {
                'city': 'Rogers',
                'growth_from_2000_to_2013': '50.6%',
                'latitude': 36.3320196,
                'longitude': -94.1185366,
                'population': '60112',
                'rank': '591',
                'state': 'Arkansas'
            },
            {
                'city': 'St. Clair Shores',
                'growth_from_2000_to_2013': '-4.6%',
                'latitude': 42.4974085,
                'longitude': -82.89636039999999,
                'population': '60070',
                'rank': '592',
                'state': 'Michigan'
            },
            {
                'city': 'Gardena',
                'growth_from_2000_to_2013': '3.4%',
                'latitude': 33.8883487,
                'longitude': -118.3089624,
                'population': '59957',
                'rank': '593',
                'state': 'California'
            },
            {
                'city': 'Pontiac',
                'growth_from_2000_to_2013': '-11.4%',
                'latitude': 42.6389216,
                'longitude': -83.29104679999999,
                'population': '59887',
                'rank': '594',
                'state': 'Michigan'
            },
            {
                'city': 'National City',
                'growth_from_2000_to_2013': '10.1%',
                'latitude': 32.6781085,
                'longitude': -117.0991967,
                'population': '59834',
                'rank': '595',
                'state': 'California'
            },
            {
                'city': 'Grand Junction',
                'growth_from_2000_to_2013': '30.9%',
                'latitude': 39.0638705,
                'longitude': -108.5506486,
                'population': '59778',
                'rank': '596',
                'state': 'Colorado'
            },
            {
                'city': 'Rocklin',
                'growth_from_2000_to_2013': '60.3%',
                'latitude': 38.7907339,
                'longitude': -121.2357828,
                'population': '59738',
                'rank': '597',
                'state': 'California'
            },
            {
                'city': 'Chapel Hill',
                'growth_from_2000_to_2013': '24.1%',
                'latitude': 35.9131996,
                'longitude': -79.0558445,
                'population': '59635',
                'rank': '598',
                'state': 'North Carolina'
            },
            {
                'city': 'Casper',
                'growth_from_2000_to_2013': '19.9%',
                'latitude': 42.866632,
                'longitude': -106.313081,
                'population': '59628',
                'rank': '599',
                'state': 'Wyoming'
            },
            {
                'city': 'Broomfield',
                'growth_from_2000_to_2013': '50.3%',
                'latitude': 39.9205411,
                'longitude': -105.0866504,
                'population': '59471',
                'rank': '600',
                'state': 'Colorado'
            },
            {
                'city': 'Petaluma',
                'growth_from_2000_to_2013': '8.4%',
                'latitude': 38.232417,
                'longitude': -122.6366524,
                'population': '59440',
                'rank': '601',
                'state': 'California'
            },
            {
                'city': 'South Jordan',
                'growth_from_2000_to_2013': '100.1%',
                'latitude': 40.5621704,
                'longitude': -111.929658,
                'population': '59366',
                'rank': '602',
                'state': 'Utah'
            },
            {
                'city': 'Springfield',
                'growth_from_2000_to_2013': '-9.8%',
                'latitude': 39.9242266,
                'longitude': -83.8088171,
                'population': '59357',
                'rank': '603',
                'state': 'Ohio'
            },
            {
                'city': 'Great Falls',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 47.4941836,
                'longitude': -111.2833449,
                'population': '59351',
                'rank': '604',
                'state': 'Montana'
            },
            {
                'city': 'Lancaster',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 40.0378755,
                'longitude': -76.3055144,
                'population': '59325',
                'rank': '605',
                'state': 'Pennsylvania'
            },
            {
                'city': 'North Port',
                'growth_from_2000_to_2013': '154.6%',
                'latitude': 27.044224,
                'longitude': -82.2359254,
                'population': '59212',
                'rank': '606',
                'state': 'Florida'
            },
            {
                'city': 'Lakewood',
                'growth_from_2000_to_2013': '1.1%',
                'latitude': 47.1717649,
                'longitude': -122.518458,
                'population': '59097',
                'rank': '607',
                'state': 'Washington'
            },
            {
                'city': 'Marietta',
                'growth_from_2000_to_2013': '-3.8%',
                'latitude': 33.95260200000001,
                'longitude': -84.5499327,
                'population': '59089',
                'rank': '608',
                'state': 'Georgia'
            },
            {
                'city': 'San Rafael',
                'growth_from_2000_to_2013': '5.0%',
                'latitude': 37.9735346,
                'longitude': -122.5310874,
                'population': '58994',
                'rank': '609',
                'state': 'California'
            },
            {
                'city': 'Royal Oak',
                'growth_from_2000_to_2013': '-1.7%',
                'latitude': 42.4894801,
                'longitude': -83.1446485,
                'population': '58946',
                'rank': '610',
                'state': 'Michigan'
            },
            {
                'city': 'Des Plaines',
                'growth_from_2000_to_2013': '3.2%',
                'latitude': 42.0333623,
                'longitude': -87.88339909999999,
                'population': '58918',
                'rank': '611',
                'state': 'Illinois'
            },
            {
                'city': 'Huntington Park',
                'growth_from_2000_to_2013': '-4.1%',
                'latitude': 33.9816812,
                'longitude': -118.2250725,
                'population': '58879',
                'rank': '612',
                'state': 'California'
            },
            {
                'city': 'La Mesa',
                'growth_from_2000_to_2013': '6.9%',
                'latitude': 32.7678287,
                'longitude': -117.0230839,
                'population': '58642',
                'rank': '613',
                'state': 'California'
            },
            {
                'city': 'Orland Park',
                'growth_from_2000_to_2013': '13.9%',
                'latitude': 41.6303103,
                'longitude': -87.85394250000002,
                'population': '58590',
                'rank': '614',
                'state': 'Illinois'
            },
            {
                'city': 'Auburn',
                'growth_from_2000_to_2013': '26.4%',
                'latitude': 32.6098566,
                'longitude': -85.48078249999999,
                'population': '58582',
                'rank': '615',
                'state': 'Alabama'
            },
            {
                'city': 'Lakeville',
                'growth_from_2000_to_2013': '34.3%',
                'latitude': 44.6496868,
                'longitude': -93.24271999999999,
                'population': '58562',
                'rank': '616',
                'state': 'Minnesota'
            },
            {
                'city': 'Owensboro',
                'growth_from_2000_to_2013': '7.7%',
                'latitude': 37.7719074,
                'longitude': -87.1111676,
                'population': '58416',
                'rank': '617',
                'state': 'Kentucky'
            },
            {
                'city': 'Moore',
                'growth_from_2000_to_2013': '41.5%',
                'latitude': 35.3395079,
                'longitude': -97.48670279999999,
                'population': '58414',
                'rank': '618',
                'state': 'Oklahoma'
            },
            {
                'city': 'Jupiter',
                'growth_from_2000_to_2013': '46.2%',
                'latitude': 26.9342246,
                'longitude': -80.0942087,
                'population': '58298',
                'rank': '619',
                'state': 'Florida'
            },
            {
                'city': 'Idaho Falls',
                'growth_from_2000_to_2013': '14.0%',
                'latitude': 43.49165139999999,
                'longitude': -112.0339645,
                'population': '58292',
                'rank': '620',
                'state': 'Idaho'
            },
            {
                'city': 'Dubuque',
                'growth_from_2000_to_2013': '0.9%',
                'latitude': 42.5005583,
                'longitude': -90.66457179999999,
                'population': '58253',
                'rank': '621',
                'state': 'Iowa'
            },
            {
                'city': 'Bartlett',
                'growth_from_2000_to_2013': '31.7%',
                'latitude': 35.2045328,
                'longitude': -89.8739753,
                'population': '58226',
                'rank': '622',
                'state': 'Tennessee'
            },
            {
                'city': 'Rowlett',
                'growth_from_2000_to_2013': '28.6%',
                'latitude': 32.9029017,
                'longitude': -96.56388,
                'population': '58043',
                'rank': '623',
                'state': 'Texas'
            },
            {
                'city': 'Novi',
                'growth_from_2000_to_2013': '22.0%',
                'latitude': 42.48059,
                'longitude': -83.4754913,
                'population': '57960',
                'rank': '624',
                'state': 'Michigan'
            },
            {
                'city': 'White Plains',
                'growth_from_2000_to_2013': '8.5%',
                'latitude': 41.03398620000001,
                'longitude': -73.7629097,
                'population': '57866',
                'rank': '625',
                'state': 'New York'
            },
            {
                'city': 'Arcadia',
                'growth_from_2000_to_2013': '8.3%',
                'latitude': 34.1397292,
                'longitude': -118.0353449,
                'population': '57639',
                'rank': '626',
                'state': 'California'
            },
            {
                'city': 'Redmond',
                'growth_from_2000_to_2013': '26.0%',
                'latitude': 47.6739881,
                'longitude': -122.121512,
                'population': '57530',
                'rank': '627',
                'state': 'Washington'
            },
            {
                'city': 'Lake Elsinore',
                'growth_from_2000_to_2013': '96.5%',
                'latitude': 33.6680772,
                'longitude': -117.3272615,
                'population': '57525',
                'rank': '628',
                'state': 'California'
            },
            {
                'city': 'Ocala',
                'growth_from_2000_to_2013': '20.8%',
                'latitude': 29.1871986,
                'longitude': -82.14009229999999,
                'population': '57468',
                'rank': '629',
                'state': 'Florida'
            },
            {
                'city': 'Tinley Park',
                'growth_from_2000_to_2013': '16.3%',
                'latitude': 41.5731442,
                'longitude': -87.7932939,
                'population': '57282',
                'rank': '630',
                'state': 'Illinois'
            },
            {
                'city': 'Port Orange',
                'growth_from_2000_to_2013': '22.8%',
                'latitude': 29.1383165,
                'longitude': -80.9956105,
                'population': '57203',
                'rank': '631',
                'state': 'Florida'
            },
            {
                'city': 'Medford',
                'growth_from_2000_to_2013': '2.7%',
                'latitude': 42.4184296,
                'longitude': -71.1061639,
                'population': '57170',
                'rank': '632',
                'state': 'Massachusetts'
            },
            {
                'city': 'Oak Lawn',
                'growth_from_2000_to_2013': '3.3%',
                'latitude': 41.719978,
                'longitude': -87.7479528,
                'population': '57073',
                'rank': '633',
                'state': 'Illinois'
            },
            {
                'city': 'Rocky Mount',
                'growth_from_2000_to_2013': '-3.1%',
                'latitude': 35.9382103,
                'longitude': -77.7905339,
                'population': '56954',
                'rank': '634',
                'state': 'North Carolina'
            },
            {
                'city': 'Kokomo',
                'growth_from_2000_to_2013': '21.3%',
                'latitude': 40.486427,
                'longitude': -86.13360329999999,
                'population': '56895',
                'rank': '635',
                'state': 'Indiana'
            },
            {
                'city': 'Coconut Creek',
                'growth_from_2000_to_2013': '28.4%',
                'latitude': 26.2517482,
                'longitude': -80.17893509999999,
                'population': '56792',
                'rank': '636',
                'state': 'Florida'
            },
            {
                'city': 'Bowie',
                'growth_from_2000_to_2013': '8.6%',
                'latitude': 39.0067768,
                'longitude': -76.77913649999999,
                'population': '56759',
                'rank': '637',
                'state': 'Maryland'
            },
            {
                'city': 'Berwyn',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 41.85058739999999,
                'longitude': -87.7936685,
                'population': '56758',
                'rank': '638',
                'state': 'Illinois'
            },
            {
                'city': 'Midwest City',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 35.4495065,
                'longitude': -97.3967019,
                'population': '56756',
                'rank': '639',
                'state': 'Oklahoma'
            },
            {
                'city': 'Fountain Valley',
                'growth_from_2000_to_2013': '3.0%',
                'latitude': 33.7091847,
                'longitude': -117.9536697,
                'population': '56707',
                'rank': '640',
                'state': 'California'
            },
            {
                'city': 'Buckeye',
                'growth_from_2000_to_2013': '480.9%',
                'latitude': 33.3703197,
                'longitude': -112.5837766,
                'population': '56683',
                'rank': '641',
                'state': 'Arizona'
            },
            {
                'city': 'Dearborn Heights',
                'growth_from_2000_to_2013': '-3.0%',
                'latitude': 42.3369816,
                'longitude': -83.27326269999999,
                'population': '56620',
                'rank': '642',
                'state': 'Michigan'
            },
            {
                'city': 'Woodland',
                'growth_from_2000_to_2013': '13.8%',
                'latitude': 38.67851570000001,
                'longitude': -121.7732971,
                'population': '56590',
                'rank': '643',
                'state': 'California'
            },
            {
                'city': 'Noblesville',
                'growth_from_2000_to_2013': '88.1%',
                'latitude': 40.0455917,
                'longitude': -86.0085955,
                'population': '56540',
                'rank': '644',
                'state': 'Indiana'
            },
            {
                'city': 'Valdosta',
                'growth_from_2000_to_2013': '22.3%',
                'latitude': 30.8327022,
                'longitude': -83.2784851,
                'population': '56481',
                'rank': '645',
                'state': 'Georgia'
            },
            {
                'city': 'Diamond Bar',
                'growth_from_2000_to_2013': '0.1%',
                'latitude': 34.0286226,
                'longitude': -117.8103367,
                'population': '56449',
                'rank': '646',
                'state': 'California'
            },
            {
                'city': 'Manhattan',
                'growth_from_2000_to_2013': '22.8%',
                'latitude': 39.18360819999999,
                'longitude': -96.57166939999999,
                'population': '56143',
                'rank': '647',
                'state': 'Kansas'
            },
            {
                'city': 'Santee',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 32.8383828,
                'longitude': -116.9739167,
                'population': '56105',
                'rank': '648',
                'state': 'California'
            },
            {
                'city': 'Taunton',
                'growth_from_2000_to_2013': '0.0%',
                'latitude': 41.900101,
                'longitude': -71.0897674,
                'population': '56069',
                'rank': '649',
                'state': 'Massachusetts'
            },
            {
                'city': 'Sanford',
                'growth_from_2000_to_2013': '42.8%',
                'latitude': 28.8028612,
                'longitude': -81.269453,
                'population': '56002',
                'rank': '650',
                'state': 'Florida'
            },
            {
                'city': 'Kettering',
                'growth_from_2000_to_2013': '-3.1%',
                'latitude': 39.68950359999999,
                'longitude': -84.1688274,
                'population': '55870',
                'rank': '651',
                'state': 'Ohio'
            },
            {
                'city': 'New Brunswick',
                'growth_from_2000_to_2013': '15.5%',
                'latitude': 40.4862157,
                'longitude': -74.4518188,
                'population': '55831',
                'rank': '652',
                'state': 'New Jersey'
            },
            {
                'city': 'Decatur',
                'growth_from_2000_to_2013': '3.1%',
                'latitude': 34.6059253,
                'longitude': -86.9833417,
                'population': '55816',
                'rank': '653',
                'state': 'Alabama'
            },
            {
                'city': 'Chicopee',
                'growth_from_2000_to_2013': '1.7%',
                'latitude': 42.1487043,
                'longitude': -72.6078672,
                'population': '55717',
                'rank': '654',
                'state': 'Massachusetts'
            },
            {
                'city': 'Anderson',
                'growth_from_2000_to_2013': '-6.6%',
                'latitude': 40.1053196,
                'longitude': -85.6802541,
                'population': '55670',
                'rank': '655',
                'state': 'Indiana'
            },
            {
                'city': 'Margate',
                'growth_from_2000_to_2013': '2.7%',
                'latitude': 26.2445263,
                'longitude': -80.206436,
                'population': '55456',
                'rank': '656',
                'state': 'Florida'
            },
            {
                'city': 'Weymouth Town',
                'growth_from_2000_to_2013': '',
                'latitude': 42.2180724,
                'longitude': -70.94103559999999,
                'population': '55419',
                'rank': '657',
                'state': 'Massachusetts'
            },
            {
                'city': 'Hempstead',
                'growth_from_2000_to_2013': '4.0%',
                'latitude': 40.7062128,
                'longitude': -73.6187397,
                'population': '55361',
                'rank': '658',
                'state': 'New York'
            },
            {
                'city': 'Corvallis',
                'growth_from_2000_to_2013': '11.8%',
                'latitude': 44.5645659,
                'longitude': -123.2620435,
                'population': '55298',
                'rank': '659',
                'state': 'Oregon'
            },
            {
                'city': 'Eastvale',
                'growth_from_2000_to_2013': '',
                'latitude': 33.952463,
                'longitude': -117.5848025,
                'population': '55191',
                'rank': '660',
                'state': 'California'
            },
            {
                'city': 'Porterville',
                'growth_from_2000_to_2013': '20.1%',
                'latitude': 36.06523,
                'longitude': -119.0167679,
                'population': '55174',
                'rank': '661',
                'state': 'California'
            },
            {
                'city': 'West Haven',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 41.2705484,
                'longitude': -72.9469711,
                'population': '55046',
                'rank': '662',
                'state': 'Connecticut'
            },
            {
                'city': 'Brentwood',
                'growth_from_2000_to_2013': '122.3%',
                'latitude': 37.931868,
                'longitude': -121.6957863,
                'population': '55000',
                'rank': '663',
                'state': 'California'
            },
            {
                'city': 'Paramount',
                'growth_from_2000_to_2013': '-0.7%',
                'latitude': 33.8894598,
                'longitude': -118.1597911,
                'population': '54980',
                'rank': '664',
                'state': 'California'
            },
            {
                'city': 'Grand Forks',
                'growth_from_2000_to_2013': '11.5%',
                'latitude': 47.9252568,
                'longitude': -97.0328547,
                'population': '54932',
                'rank': '665',
                'state': 'North Dakota'
            },
            {
                'city': 'Georgetown',
                'growth_from_2000_to_2013': '91.9%',
                'latitude': 30.6332618,
                'longitude': -97.6779842,
                'population': '54898',
                'rank': '666',
                'state': 'Texas'
            },
            {
                'city': 'St. Peters',
                'growth_from_2000_to_2013': '6.5%',
                'latitude': 38.7874699,
                'longitude': -90.6298922,
                'population': '54842',
                'rank': '667',
                'state': 'Missouri'
            },
            {
                'city': 'Shoreline',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 47.7556531,
                'longitude': -122.3415178,
                'population': '54790',
                'rank': '668',
                'state': 'Washington'
            },
            {
                'city': 'Mount Prospect',
                'growth_from_2000_to_2013': '-2.5%',
                'latitude': 42.0664167,
                'longitude': -87.9372908,
                'population': '54771',
                'rank': '669',
                'state': 'Illinois'
            },
            {
                'city': 'Hanford',
                'growth_from_2000_to_2013': '30.3%',
                'latitude': 36.3274502,
                'longitude': -119.6456844,
                'population': '54686',
                'rank': '670',
                'state': 'California'
            },
            {
                'city': 'Normal',
                'growth_from_2000_to_2013': '19.7%',
                'latitude': 40.5142026,
                'longitude': -88.9906312,
                'population': '54664',
                'rank': '671',
                'state': 'Illinois'
            },
            {
                'city': 'Rosemead',
                'growth_from_2000_to_2013': '1.7%',
                'latitude': 34.0805651,
                'longitude': -118.072846,
                'population': '54561',
                'rank': '672',
                'state': 'California'
            },
            {
                'city': 'Lehi',
                'growth_from_2000_to_2013': '176.3%',
                'latitude': 40.3916172,
                'longitude': -111.8507662,
                'population': '54382',
                'rank': '673',
                'state': 'Utah'
            },
            {
                'city': 'Pocatello',
                'growth_from_2000_to_2013': '5.4%',
                'latitude': 42.8713032,
                'longitude': -112.4455344,
                'population': '54350',
                'rank': '674',
                'state': 'Idaho'
            },
            {
                'city': 'Highland',
                'growth_from_2000_to_2013': '21.0%',
                'latitude': 34.1283442,
                'longitude': -117.2086513,
                'population': '54291',
                'rank': '675',
                'state': 'California'
            },
            {
                'city': 'Novato',
                'growth_from_2000_to_2013': '13.3%',
                'latitude': 38.1074198,
                'longitude': -122.5697032,
                'population': '54194',
                'rank': '676',
                'state': 'California'
            },
            {
                'city': 'Port Arthur',
                'growth_from_2000_to_2013': '-6.0%',
                'latitude': 29.8849504,
                'longitude': -93.93994699999999,
                'population': '54135',
                'rank': '677',
                'state': 'Texas'
            },
            {
                'city': 'Carson City',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 39.1637984,
                'longitude': -119.7674034,
                'population': '54080',
                'rank': '678',
                'state': 'Nevada'
            },
            {
                'city': 'San Marcos',
                'growth_from_2000_to_2013': '48.5%',
                'latitude': 29.8832749,
                'longitude': -97.9413941,
                'population': '54076',
                'rank': '679',
                'state': 'Texas'
            },
            {
                'city': 'Hendersonville',
                'growth_from_2000_to_2013': '31.7%',
                'latitude': 36.3047735,
                'longitude': -86.6199957,
                'population': '54068',
                'rank': '680',
                'state': 'Tennessee'
            },
            {
                'city': 'Elyria',
                'growth_from_2000_to_2013': '-3.7%',
                'latitude': 41.3683798,
                'longitude': -82.10764859999999,
                'population': '53956',
                'rank': '681',
                'state': 'Ohio'
            },
            {
                'city': 'Revere',
                'growth_from_2000_to_2013': '13.4%',
                'latitude': 42.4084302,
                'longitude': -71.0119948,
                'population': '53756',
                'rank': '682',
                'state': 'Massachusetts'
            },
            {
                'city': 'Pflugerville',
                'growth_from_2000_to_2013': '123.4%',
                'latitude': 30.4393696,
                'longitude': -97.62000429999999,
                'population': '53752',
                'rank': '683',
                'state': 'Texas'
            },
            {
                'city': 'Greenwood',
                'growth_from_2000_to_2013': '46.0%',
                'latitude': 39.6136578,
                'longitude': -86.10665259999999,
                'population': '53665',
                'rank': '684',
                'state': 'Indiana'
            },
            {
                'city': 'Bellevue',
                'growth_from_2000_to_2013': '20.5%',
                'latitude': 41.1543623,
                'longitude': -95.9145568,
                'population': '53663',
                'rank': '685',
                'state': 'Nebraska'
            },
            {
                'city': 'Wheaton',
                'growth_from_2000_to_2013': '-3.4%',
                'latitude': 41.8661403,
                'longitude': -88.1070127,
                'population': '53648',
                'rank': '686',
                'state': 'Illinois'
            },
            {
                'city': 'Smyrna',
                'growth_from_2000_to_2013': '20.0%',
                'latitude': 33.8839926,
                'longitude': -84.51437609999999,
                'population': '53438',
                'rank': '687',
                'state': 'Georgia'
            },
            {
                'city': 'Sarasota',
                'growth_from_2000_to_2013': '1.4%',
                'latitude': 27.3364347,
                'longitude': -82.53065269999999,
                'population': '53326',
                'rank': '688',
                'state': 'Florida'
            },
            {
                'city': 'Blue Springs',
                'growth_from_2000_to_2013': '9.9%',
                'latitude': 39.0169509,
                'longitude': -94.2816148,
                'population': '53294',
                'rank': '689',
                'state': 'Missouri'
            },
            {
                'city': 'Colton',
                'growth_from_2000_to_2013': '10.8%',
                'latitude': 34.0739016,
                'longitude': -117.3136547,
                'population': '53243',
                'rank': '690',
                'state': 'California'
            },
            {
                'city': 'Euless',
                'growth_from_2000_to_2013': '15.1%',
                'latitude': 32.8370727,
                'longitude': -97.08195409999999,
                'population': '53224',
                'rank': '691',
                'state': 'Texas'
            },
            {
                'city': 'Castle Rock',
                'growth_from_2000_to_2013': '153.5%',
                'latitude': 39.3722121,
                'longitude': -104.8560902,
                'population': '53063',
                'rank': '692',
                'state': 'Colorado'
            },
            {
                'city': 'Cathedral City',
                'growth_from_2000_to_2013': '23.2%',
                'latitude': 33.7805388,
                'longitude': -116.4668036,
                'population': '52977',
                'rank': '693',
                'state': 'California'
            },
            {
                'city': 'Kingsport',
                'growth_from_2000_to_2013': '16.7%',
                'latitude': 36.548434,
                'longitude': -82.5618186,
                'population': '52962',
                'rank': '694',
                'state': 'Tennessee'
            },
            {
                'city': 'Lake Havasu City',
                'growth_from_2000_to_2013': '24.6%',
                'latitude': 34.483901,
                'longitude': -114.3224548,
                'population': '52844',
                'rank': '695',
                'state': 'Arizona'
            },
            {
                'city': 'Pensacola',
                'growth_from_2000_to_2013': '-6.0%',
                'latitude': 30.42130899999999,
                'longitude': -87.2169149,
                'population': '52703',
                'rank': '696',
                'state': 'Florida'
            },
            {
                'city': 'Hoboken',
                'growth_from_2000_to_2013': '35.8%',
                'latitude': 40.7439905,
                'longitude': -74.0323626,
                'population': '52575',
                'rank': '697',
                'state': 'New Jersey'
            },
            {
                'city': 'Yucaipa',
                'growth_from_2000_to_2013': '26.8%',
                'latitude': 34.033625,
                'longitude': -117.0430865,
                'population': '52536',
                'rank': '698',
                'state': 'California'
            },
            {
                'city': 'Watsonville',
                'growth_from_2000_to_2013': '12.7%',
                'latitude': 36.910231,
                'longitude': -121.7568946,
                'population': '52477',
                'rank': '699',
                'state': 'California'
            },
            {
                'city': 'Richland',
                'growth_from_2000_to_2013': '34.6%',
                'latitude': 46.2856907,
                'longitude': -119.2844621,
                'population': '52413',
                'rank': '700',
                'state': 'Washington'
            },
            {
                'city': 'Delano',
                'growth_from_2000_to_2013': '31.8%',
                'latitude': 35.7688425,
                'longitude': -119.2470536,
                'population': '52403',
                'rank': '701',
                'state': 'California'
            },
            {
                'city': 'Hoffman Estates',
                'growth_from_2000_to_2013': '5.4%',
                'latitude': 42.0629915,
                'longitude': -88.12271989999999,
                'population': '52398',
                'rank': '702',
                'state': 'Illinois'
            },
            {
                'city': 'Florissant',
                'growth_from_2000_to_2013': '-2.8%',
                'latitude': 38.789217,
                'longitude': -90.322614,
                'population': '52363',
                'rank': '703',
                'state': 'Missouri'
            },
            {
                'city': 'Placentia',
                'growth_from_2000_to_2013': '11.8%',
                'latitude': 33.8722371,
                'longitude': -117.8703363,
                'population': '52206',
                'rank': '704',
                'state': 'California'
            },
            {
                'city': 'West New York',
                'growth_from_2000_to_2013': '13.3%',
                'latitude': 40.7878788,
                'longitude': -74.0143064,
                'population': '52122',
                'rank': '705',
                'state': 'New Jersey'
            },
            {
                'city': 'Dublin',
                'growth_from_2000_to_2013': '70.0%',
                'latitude': 37.7021521,
                'longitude': -121.9357918,
                'population': '52105',
                'rank': '706',
                'state': 'California'
            },
            {
                'city': 'Oak Park',
                'growth_from_2000_to_2013': '-0.8%',
                'latitude': 41.8850317,
                'longitude': -87.7845025,
                'population': '52066',
                'rank': '707',
                'state': 'Illinois'
            },
            {
                'city': 'Peabody',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 42.5278731,
                'longitude': -70.9286609,
                'population': '52044',
                'rank': '708',
                'state': 'Massachusetts'
            },
            {
                'city': 'Perth Amboy',
                'growth_from_2000_to_2013': '9.7%',
                'latitude': 40.5067723,
                'longitude': -74.2654234,
                'population': '51982',
                'rank': '709',
                'state': 'New Jersey'
            },
            {
                'city': 'Battle Creek',
                'growth_from_2000_to_2013': '-2.8%',
                'latitude': 42.3211522,
                'longitude': -85.17971419999999,
                'population': '51848',
                'rank': '710',
                'state': 'Michigan'
            },
            {
                'city': 'Bradenton',
                'growth_from_2000_to_2013': '3.4%',
                'latitude': 27.4989278,
                'longitude': -82.5748194,
                'population': '51763',
                'rank': '711',
                'state': 'Florida'
            },
            {
                'city': 'Gilroy',
                'growth_from_2000_to_2013': '23.9%',
                'latitude': 37.0057816,
                'longitude': -121.5682751,
                'population': '51701',
                'rank': '712',
                'state': 'California'
            },
            {
                'city': 'Milford',
                'growth_from_2000_to_2013': '1.8%',
                'latitude': 41.2306979,
                'longitude': -73.064036,
                'population': '51644',
                'rank': '713',
                'state': 'Connecticut'
            },
            {
                'city': 'Albany',
                'growth_from_2000_to_2013': '25.5%',
                'latitude': 44.6365107,
                'longitude': -123.1059282,
                'population': '51583',
                'rank': '714',
                'state': 'Oregon'
            },
            {
                'city': 'Ankeny',
                'growth_from_2000_to_2013': '86.9%',
                'latitude': 41.7317884,
                'longitude': -93.6001278,
                'population': '51567',
                'rank': '715',
                'state': 'Iowa'
            },
            {
                'city': 'La Crosse',
                'growth_from_2000_to_2013': '-0.8%',
                'latitude': 43.8013556,
                'longitude': -91.23958069999999,
                'population': '51522',
                'rank': '716',
                'state': 'Wisconsin'
            },
            {
                'city': 'Burlington',
                'growth_from_2000_to_2013': '12.1%',
                'latitude': 36.0956918,
                'longitude': -79.43779909999999,
                'population': '51510',
                'rank': '717',
                'state': 'North Carolina'
            },
            {
                'city': 'DeSoto',
                'growth_from_2000_to_2013': '36.0%',
                'latitude': 32.5896998,
                'longitude': -96.8570738,
                'population': '51483',
                'rank': '718',
                'state': 'Texas'
            },
            {
                'city': 'Harrisonburg',
                'growth_from_2000_to_2013': '27.1%',
                'latitude': 38.4495688,
                'longitude': -78.8689155,
                'population': '51395',
                'rank': '719',
                'state': 'Virginia'
            },
            {
                'city': 'Minnetonka',
                'growth_from_2000_to_2013': '0.4%',
                'latitude': 44.9211836,
                'longitude': -93.4687489,
                'population': '51368',
                'rank': '720',
                'state': 'Minnesota'
            },
            {
                'city': 'Elkhart',
                'growth_from_2000_to_2013': '-2.5%',
                'latitude': 41.6819935,
                'longitude': -85.9766671,
                'population': '51265',
                'rank': '721',
                'state': 'Indiana'
            },
            {
                'city': 'Lakewood',
                'growth_from_2000_to_2013': '-9.4%',
                'latitude': 41.4819932,
                'longitude': -81.7981908,
                'population': '51143',
                'rank': '722',
                'state': 'Ohio'
            },
            {
                'city': 'Glendora',
                'growth_from_2000_to_2013': '3.1%',
                'latitude': 34.1361187,
                'longitude': -117.865339,
                'population': '51074',
                'rank': '723',
                'state': 'California'
            },
            {
                'city': 'Southaven',
                'growth_from_2000_to_2013': '72.8%',
                'latitude': 34.9889818,
                'longitude': -90.0125913,
                'population': '50997',
                'rank': '724',
                'state': 'Mississippi'
            },
            {
                'city': 'Charleston',
                'growth_from_2000_to_2013': '-4.7%',
                'latitude': 38.3498195,
                'longitude': -81.6326234,
                'population': '50821',
                'rank': '725',
                'state': 'West Virginia'
            },
            {
                'city': 'Joplin',
                'growth_from_2000_to_2013': '11.2%',
                'latitude': 37.08422710000001,
                'longitude': -94.51328099999999,
                'population': '50789',
                'rank': '726',
                'state': 'Missouri'
            },
            {
                'city': 'Enid',
                'growth_from_2000_to_2013': '8.1%',
                'latitude': 36.3955891,
                'longitude': -97.8783911,
                'population': '50725',
                'rank': '727',
                'state': 'Oklahoma'
            },
            {
                'city': 'Palm Beach Gardens',
                'growth_from_2000_to_2013': '39.6%',
                'latitude': 26.8233946,
                'longitude': -80.13865469999999,
                'population': '50699',
                'rank': '728',
                'state': 'Florida'
            },
            {
                'city': 'Brookhaven',
                'growth_from_2000_to_2013': '',
                'latitude': 33.8651033,
                'longitude': -84.3365917,
                'population': '50603',
                'rank': '729',
                'state': 'Georgia'
            },
            {
                'city': 'Plainfield',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 40.6337136,
                'longitude': -74.4073736,
                'population': '50588',
                'rank': '730',
                'state': 'New Jersey'
            },
            {
                'city': 'Grand Island',
                'growth_from_2000_to_2013': '16.0%',
                'latitude': 40.9263957,
                'longitude': -98.3420118,
                'population': '50550',
                'rank': '731',
                'state': 'Nebraska'
            },
            {
                'city': 'Palm Desert',
                'growth_from_2000_to_2013': '13.2%',
                'latitude': 33.7222445,
                'longitude': -116.3744556,
                'population': '50508',
                'rank': '732',
                'state': 'California'
            },
            {
                'city': 'Huntersville',
                'growth_from_2000_to_2013': '92.9%',
                'latitude': 35.410694,
                'longitude': -80.84285040000002,
                'population': '50458',
                'rank': '733',
                'state': 'North Carolina'
            },
            {
                'city': 'Tigard',
                'growth_from_2000_to_2013': '17.8%',
                'latitude': 45.4312294,
                'longitude': -122.7714861,
                'population': '50444',
                'rank': '734',
                'state': 'Oregon'
            },
            {
                'city': 'Lenexa',
                'growth_from_2000_to_2013': '24.6%',
                'latitude': 38.9536174,
                'longitude': -94.73357089999999,
                'population': '50344',
                'rank': '735',
                'state': 'Kansas'
            },
            {
                'city': 'Saginaw',
                'growth_from_2000_to_2013': '-18.2%',
                'latitude': 43.4194699,
                'longitude': -83.9508068,
                'population': '50303',
                'rank': '736',
                'state': 'Michigan'
            },
            {
                'city': 'Kentwood',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 42.8694731,
                'longitude': -85.64474919999999,
                'population': '50233',
                'rank': '737',
                'state': 'Michigan'
            },
            {
                'city': 'Doral',
                'growth_from_2000_to_2013': '137.6%',
                'latitude': 25.8195424,
                'longitude': -80.3553302,
                'population': '50213',
                'rank': '738',
                'state': 'Florida'
            },
            {
                'city': 'Apple Valley',
                'growth_from_2000_to_2013': '9.2%',
                'latitude': 44.7319094,
                'longitude': -93.21772000000001,
                'population': '50201',
                'rank': '739',
                'state': 'Minnesota'
            },
            {
                'city': 'Grapevine',
                'growth_from_2000_to_2013': '17.6%',
                'latitude': 32.9342919,
                'longitude': -97.0780654,
                'population': '50195',
                'rank': '740',
                'state': 'Texas'
            },
            {
                'city': 'Aliso Viejo',
                'growth_from_2000_to_2013': '25.4%',
                'latitude': 33.5676842,
                'longitude': -117.7256083,
                'population': '50175',
                'rank': '741',
                'state': 'California'
            },
            {
                'city': 'Sammamish',
                'growth_from_2000_to_2013': '44.1%',
                'latitude': 47.61626829999999,
                'longitude': -122.0355736,
                'population': '50169',
                'rank': '742',
                'state': 'Washington'
            },
            {
                'city': 'Casa Grande',
                'growth_from_2000_to_2013': '86.0%',
                'latitude': 32.8795022,
                'longitude': -111.7573521,
                'population': '50111',
                'rank': '743',
                'state': 'Arizona'
            },
            {
                'city': 'Pinellas Park',
                'growth_from_2000_to_2013': '5.9%',
                'latitude': 27.8428025,
                'longitude': -82.6995443,
                'population': '49998',
                'rank': '744',
                'state': 'Florida'
            },
            {
                'city': 'Troy',
                'growth_from_2000_to_2013': '1.5%',
                'latitude': 42.7284117,
                'longitude': -73.69178509999999,
                'population': '49974',
                'rank': '745',
                'state': 'New York'
            },
            {
                'city': 'West Sacramento',
                'growth_from_2000_to_2013': '55.6%',
                'latitude': 38.5804609,
                'longitude': -121.530234,
                'population': '49891',
                'rank': '746',
                'state': 'California'
            },
            {
                'city': 'Burien',
                'growth_from_2000_to_2013': '56.7%',
                'latitude': 47.4703767,
                'longitude': -122.3467918,
                'population': '49858',
                'rank': '747',
                'state': 'Washington'
            },
            {
                'city': 'Commerce City',
                'growth_from_2000_to_2013': '135.4%',
                'latitude': 39.8083196,
                'longitude': -104.9338675,
                'population': '49799',
                'rank': '748',
                'state': 'Colorado'
            },
            {
                'city': 'Monroe',
                'growth_from_2000_to_2013': '-6.1%',
                'latitude': 32.5093109,
                'longitude': -92.1193012,
                'population': '49761',
                'rank': '749',
                'state': 'Louisiana'
            },
            {
                'city': 'Cerritos',
                'growth_from_2000_to_2013': '-3.6%',
                'latitude': 33.8583483,
                'longitude': -118.0647871,
                'population': '49707',
                'rank': '750',
                'state': 'California'
            },
            {
                'city': 'Downers Grove',
                'growth_from_2000_to_2013': '0.0%',
                'latitude': 41.8089191,
                'longitude': -88.01117459999999,
                'population': '49670',
                'rank': '751',
                'state': 'Illinois'
            },
            {
                'city': 'Coral Gables',
                'growth_from_2000_to_2013': '16.1%',
                'latitude': 25.72149,
                'longitude': -80.2683838,
                'population': '49631',
                'rank': '752',
                'state': 'Florida'
            },
            {
                'city': 'Wilson',
                'growth_from_2000_to_2013': '10.1%',
                'latitude': 35.7212689,
                'longitude': -77.9155395,
                'population': '49628',
                'rank': '753',
                'state': 'North Carolina'
            },
            {
                'city': 'Niagara Falls',
                'growth_from_2000_to_2013': '-10.8%',
                'latitude': 43.0962143,
                'longitude': -79.0377388,
                'population': '49468',
                'rank': '754',
                'state': 'New York'
            },
            {
                'city': 'Poway',
                'growth_from_2000_to_2013': '2.4%',
                'latitude': 32.9628232,
                'longitude': -117.0358646,
                'population': '49417',
                'rank': '755',
                'state': 'California'
            },
            {
                'city': 'Edina',
                'growth_from_2000_to_2013': '4.1%',
                'latitude': 44.8896866,
                'longitude': -93.3499489,
                'population': '49376',
                'rank': '756',
                'state': 'Minnesota'
            },
            {
                'city': 'Cuyahoga Falls',
                'growth_from_2000_to_2013': '-0.2%',
                'latitude': 41.1339449,
                'longitude': -81.48455849999999,
                'population': '49267',
                'rank': '757',
                'state': 'Ohio'
            },
            {
                'city': 'Rancho Santa Margarita',
                'growth_from_2000_to_2013': '4.6%',
                'latitude': 33.640855,
                'longitude': -117.603104,
                'population': '49228',
                'rank': '758',
                'state': 'California'
            },
            {
                'city': 'Harrisburg',
                'growth_from_2000_to_2013': '0.6%',
                'latitude': 40.2731911,
                'longitude': -76.8867008,
                'population': '49188',
                'rank': '759',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Huntington',
                'growth_from_2000_to_2013': '-5.0%',
                'latitude': 38.4192496,
                'longitude': -82.44515400000002,
                'population': '49177',
                'rank': '760',
                'state': 'West Virginia'
            },
            {
                'city': 'La Mirada',
                'growth_from_2000_to_2013': '4.6%',
                'latitude': 33.9172357,
                'longitude': -118.0120086,
                'population': '49133',
                'rank': '761',
                'state': 'California'
            },
            {
                'city': 'Cypress',
                'growth_from_2000_to_2013': '5.3%',
                'latitude': 33.8169599,
                'longitude': -118.0372852,
                'population': '49087',
                'rank': '762',
                'state': 'California'
            },
            {
                'city': 'Caldwell',
                'growth_from_2000_to_2013': '77.1%',
                'latitude': 43.66293839999999,
                'longitude': -116.6873596,
                'population': '48957',
                'rank': '763',
                'state': 'Idaho'
            },
            {
                'city': 'Logan',
                'growth_from_2000_to_2013': '14.5%',
                'latitude': 41.7369803,
                'longitude': -111.8338359,
                'population': '48913',
                'rank': '764',
                'state': 'Utah'
            },
            {
                'city': 'Galveston',
                'growth_from_2000_to_2013': '-15.2%',
                'latitude': 29.3013479,
                'longitude': -94.7976958,
                'population': '48733',
                'rank': '765',
                'state': 'Texas'
            },
            {
                'city': 'Sheboygan',
                'growth_from_2000_to_2013': '-3.9%',
                'latitude': 43.7508284,
                'longitude': -87.71453,
                'population': '48725',
                'rank': '766',
                'state': 'Wisconsin'
            },
            {
                'city': 'Middletown',
                'growth_from_2000_to_2013': '-5.7%',
                'latitude': 39.5150576,
                'longitude': -84.39827629999999,
                'population': '48630',
                'rank': '767',
                'state': 'Ohio'
            },
            {
                'city': 'Murray',
                'growth_from_2000_to_2013': '6.6%',
                'latitude': 40.6668916,
                'longitude': -111.8879909,
                'population': '48612',
                'rank': '768',
                'state': 'Utah'
            },
            {
                'city': 'Roswell',
                'growth_from_2000_to_2013': '7.5%',
                'latitude': 33.3942655,
                'longitude': -104.5230242,
                'population': '48611',
                'rank': '769',
                'state': 'New Mexico'
            },
            {
                'city': 'Parker',
                'growth_from_2000_to_2013': '96.4%',
                'latitude': 39.5186002,
                'longitude': -104.7613633,
                'population': '48608',
                'rank': '770',
                'state': 'Colorado'
            },
            {
                'city': 'Bedford',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 32.844017,
                'longitude': -97.1430671,
                'population': '48592',
                'rank': '771',
                'state': 'Texas'
            },
            {
                'city': 'East Lansing',
                'growth_from_2000_to_2013': '4.2%',
                'latitude': 42.7369792,
                'longitude': -84.48386540000001,
                'population': '48554',
                'rank': '772',
                'state': 'Michigan'
            },
            {
                'city': 'Methuen',
                'growth_from_2000_to_2013': '10.3%',
                'latitude': 42.7262016,
                'longitude': -71.1908924,
                'population': '48514',
                'rank': '773',
                'state': 'Massachusetts'
            },
            {
                'city': 'Covina',
                'growth_from_2000_to_2013': '3.3%',
                'latitude': 34.0900091,
                'longitude': -117.8903397,
                'population': '48508',
                'rank': '774',
                'state': 'California'
            },
            {
                'city': 'Alexandria',
                'growth_from_2000_to_2013': '4.1%',
                'latitude': 31.3112936,
                'longitude': -92.4451371,
                'population': '48426',
                'rank': '775',
                'state': 'Louisiana'
            },
            {
                'city': 'Olympia',
                'growth_from_2000_to_2013': '12.1%',
                'latitude': 47.0378741,
                'longitude': -122.9006951,
                'population': '48338',
                'rank': '776',
                'state': 'Washington'
            },
            {
                'city': 'Euclid',
                'growth_from_2000_to_2013': '-8.4%',
                'latitude': 41.5931049,
                'longitude': -81.5267873,
                'population': '48139',
                'rank': '777',
                'state': 'Ohio'
            },
            {
                'city': 'Mishawaka',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 41.6619927,
                'longitude': -86.15861559999999,
                'population': '47989',
                'rank': '778',
                'state': 'Indiana'
            },
            {
                'city': 'Salina',
                'growth_from_2000_to_2013': '4.5%',
                'latitude': 38.8402805,
                'longitude': -97.61142369999999,
                'population': '47846',
                'rank': '779',
                'state': 'Kansas'
            },
            {
                'city': 'Azusa',
                'growth_from_2000_to_2013': '6.7%',
                'latitude': 34.1336186,
                'longitude': -117.9075627,
                'population': '47842',
                'rank': '780',
                'state': 'California'
            },
            {
                'city': 'Newark',
                'growth_from_2000_to_2013': '3.1%',
                'latitude': 40.0581205,
                'longitude': -82.4012642,
                'population': '47777',
                'rank': '781',
                'state': 'Ohio'
            },
            {
                'city': 'Chesterfield',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 38.6631083,
                'longitude': -90.5770675,
                'population': '47749',
                'rank': '782',
                'state': 'Missouri'
            },
            {
                'city': 'Leesburg',
                'growth_from_2000_to_2013': '66.0%',
                'latitude': 39.1156615,
                'longitude': -77.56360149999999,
                'population': '47673',
                'rank': '783',
                'state': 'Virginia'
            },
            {
                'city': 'Dunwoody',
                'growth_from_2000_to_2013': '',
                'latitude': 33.9462125,
                'longitude': -84.3346473,
                'population': '47591',
                'rank': '784',
                'state': 'Georgia'
            },
            {
                'city': 'Hattiesburg',
                'growth_from_2000_to_2013': '3.1%',
                'latitude': 31.3271189,
                'longitude': -89.29033919999999,
                'population': '47556',
                'rank': '785',
                'state': 'Mississippi'
            },
            {
                'city': 'Roseville',
                'growth_from_2000_to_2013': '-1.0%',
                'latitude': 42.4972583,
                'longitude': -82.9371409,
                'population': '47555',
                'rank': '786',
                'state': 'Michigan'
            },
            {
                'city': 'Bonita Springs',
                'growth_from_2000_to_2013': '43.8%',
                'latitude': 26.339806,
                'longitude': -81.7786972,
                'population': '47547',
                'rank': '787',
                'state': 'Florida'
            },
            {
                'city': 'Portage',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 42.2011538,
                'longitude': -85.5800022,
                'population': '47523',
                'rank': '788',
                'state': 'Michigan'
            },
            {
                'city': 'St. Louis Park',
                'growth_from_2000_to_2013': '7.3%',
                'latitude': 44.9597376,
                'longitude': -93.3702186,
                'population': '47411',
                'rank': '789',
                'state': 'Minnesota'
            },
            {
                'city': 'Collierville',
                'growth_from_2000_to_2013': '43.4%',
                'latitude': 35.042036,
                'longitude': -89.6645266,
                'population': '47333',
                'rank': '790',
                'state': 'Tennessee'
            },
            {
                'city': 'Middletown',
                'growth_from_2000_to_2013': '3.6%',
                'latitude': 41.5623209,
                'longitude': -72.6506488,
                'population': '47333',
                'rank': '791',
                'state': 'Connecticut'
            },
            {
                'city': 'Stillwater',
                'growth_from_2000_to_2013': '20.1%',
                'latitude': 36.1156071,
                'longitude': -97.0583681,
                'population': '47186',
                'rank': '792',
                'state': 'Oklahoma'
            },
            {
                'city': 'East Providence',
                'growth_from_2000_to_2013': '-3.3%',
                'latitude': 41.8137116,
                'longitude': -71.3700545,
                'population': '47149',
                'rank': '793',
                'state': 'Rhode Island'
            },
            {
                'city': 'Lawrence',
                'growth_from_2000_to_2013': '20.5%',
                'latitude': 39.8386516,
                'longitude': -86.0252612,
                'population': '47135',
                'rank': '794',
                'state': 'Indiana'
            },
            {
                'city': 'Wauwatosa',
                'growth_from_2000_to_2013': '0.0%',
                'latitude': 43.0494572,
                'longitude': -88.0075875,
                'population': '47134',
                'rank': '795',
                'state': 'Wisconsin'
            },
            {
                'city': 'Mentor',
                'growth_from_2000_to_2013': '-6.6%',
                'latitude': 41.6661573,
                'longitude': -81.339552,
                'population': '46979',
                'rank': '796',
                'state': 'Ohio'
            },
            {
                'city': 'Ceres',
                'growth_from_2000_to_2013': '34.0%',
                'latitude': 37.5949316,
                'longitude': -120.9577098,
                'population': '46714',
                'rank': '797',
                'state': 'California'
            },
            {
                'city': 'Cedar Hill',
                'growth_from_2000_to_2013': '42.4%',
                'latitude': 32.5884689,
                'longitude': -96.9561152,
                'population': '46663',
                'rank': '798',
                'state': 'Texas'
            },
            {
                'city': 'Mansfield',
                'growth_from_2000_to_2013': '-10.1%',
                'latitude': 40.75839,
                'longitude': -82.5154471,
                'population': '46454',
                'rank': '799',
                'state': 'Ohio'
            },
            {
                'city': 'Binghamton',
                'growth_from_2000_to_2013': '-1.7%',
                'latitude': 42.09868669999999,
                'longitude': -75.91797380000001,
                'population': '46444',
                'rank': '800',
                'state': 'New York'
            },
            {
                'city': 'San Luis Obispo',
                'growth_from_2000_to_2013': '4.4%',
                'latitude': 35.2827524,
                'longitude': -120.6596156,
                'population': '46377',
                'rank': '802',
                'state': 'California'
            },
            {
                'city': 'Minot',
                'growth_from_2000_to_2013': '26.6%',
                'latitude': 48.2329668,
                'longitude': -101.2922906,
                'population': '46321',
                'rank': '803',
                'state': 'North Dakota'
            },
            {
                'city': 'Palm Springs',
                'growth_from_2000_to_2013': '7.7%',
                'latitude': 33.8302961,
                'longitude': -116.5452921,
                'population': '46281',
                'rank': '804',
                'state': 'California'
            },
            {
                'city': 'Pine Bluff',
                'growth_from_2000_to_2013': '-16.2%',
                'latitude': 34.2284312,
                'longitude': -92.00319549999999,
                'population': '46094',
                'rank': '805',
                'state': 'Arkansas'
            },
            {
                'city': 'Texas City',
                'growth_from_2000_to_2013': '10.3%',
                'latitude': 29.383845,
                'longitude': -94.9027002,
                'population': '46081',
                'rank': '806',
                'state': 'Texas'
            },
            {
                'city': 'Summerville',
                'growth_from_2000_to_2013': '62.9%',
                'latitude': 33.0185039,
                'longitude': -80.17564809999999,
                'population': '46074',
                'rank': '807',
                'state': 'South Carolina'
            },
            {
                'city': 'Twin Falls',
                'growth_from_2000_to_2013': '31.5%',
                'latitude': 42.5629668,
                'longitude': -114.4608711,
                'population': '45981',
                'rank': '808',
                'state': 'Idaho'
            },
            {
                'city': 'Jeffersonville',
                'growth_from_2000_to_2013': '53.3%',
                'latitude': 38.2775702,
                'longitude': -85.7371847,
                'population': '45929',
                'rank': '809',
                'state': 'Indiana'
            },
            {
                'city': 'San Jacinto',
                'growth_from_2000_to_2013': '91.8%',
                'latitude': 33.7839084,
                'longitude': -116.958635,
                'population': '45851',
                'rank': '810',
                'state': 'California'
            },
            {
                'city': 'Madison',
                'growth_from_2000_to_2013': '53.7%',
                'latitude': 34.6992579,
                'longitude': -86.74833180000002,
                'population': '45799',
                'rank': '811',
                'state': 'Alabama'
            },
            {
                'city': 'Altoona',
                'growth_from_2000_to_2013': '-7.3%',
                'latitude': 40.5186809,
                'longitude': -78.3947359,
                'population': '45796',
                'rank': '812',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Columbus',
                'growth_from_2000_to_2013': '16.4%',
                'latitude': 39.2014404,
                'longitude': -85.9213796,
                'population': '45775',
                'rank': '813',
                'state': 'Indiana'
            },
            {
                'city': 'Beavercreek',
                'growth_from_2000_to_2013': '19.0%',
                'latitude': 39.7092262,
                'longitude': -84.06326849999999,
                'population': '45712',
                'rank': '814',
                'state': 'Ohio'
            },
            {
                'city': 'Apopka',
                'growth_from_2000_to_2013': '63.9%',
                'latitude': 28.6934076,
                'longitude': -81.5322149,
                'population': '45587',
                'rank': '815',
                'state': 'Florida'
            },
            {
                'city': 'Elmhurst',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 41.8994744,
                'longitude': -87.9403418,
                'population': '45556',
                'rank': '816',
                'state': 'Illinois'
            },
            {
                'city': 'Maricopa',
                'growth_from_2000_to_2013': '2503.4%',
                'latitude': 33.0581063,
                'longitude': -112.0476423,
                'population': '45508',
                'rank': '817',
                'state': 'Arizona'
            },
            {
                'city': 'Farmington',
                'growth_from_2000_to_2013': '18.1%',
                'latitude': 36.72805830000001,
                'longitude': -108.2186856,
                'population': '45426',
                'rank': '818',
                'state': 'New Mexico'
            },
            {
                'city': 'Glenview',
                'growth_from_2000_to_2013': '5.2%',
                'latitude': 42.0697509,
                'longitude': -87.7878408,
                'population': '45417',
                'rank': '819',
                'state': 'Illinois'
            },
            {
                'city': 'Cleveland Heights',
                'growth_from_2000_to_2013': '-10.3%',
                'latitude': 41.5200518,
                'longitude': -81.556235,
                'population': '45394',
                'rank': '820',
                'state': 'Ohio'
            },
            {
                'city': 'Draper',
                'growth_from_2000_to_2013': '77.4%',
                'latitude': 40.5246711,
                'longitude': -111.8638226,
                'population': '45285',
                'rank': '821',
                'state': 'Utah'
            },
            {
                'city': 'Lincoln',
                'growth_from_2000_to_2013': '285.2%',
                'latitude': 38.891565,
                'longitude': -121.2930079,
                'population': '45237',
                'rank': '822',
                'state': 'California'
            },
            {
                'city': 'Sierra Vista',
                'growth_from_2000_to_2013': '19.3%',
                'latitude': 31.5455001,
                'longitude': -110.2772856,
                'population': '45129',
                'rank': '823',
                'state': 'Arizona'
            },
            {
                'city': 'Lacey',
                'growth_from_2000_to_2013': '41.7%',
                'latitude': 47.03426289999999,
                'longitude': -122.8231915,
                'population': '44919',
                'rank': '824',
                'state': 'Washington'
            },
            {
                'city': 'Biloxi',
                'growth_from_2000_to_2013': '-11.5%',
                'latitude': 30.3960318,
                'longitude': -88.88530779999999,
                'population': '44820',
                'rank': '825',
                'state': 'Mississippi'
            },
            {
                'city': 'Strongsville',
                'growth_from_2000_to_2013': '1.9%',
                'latitude': 41.3144966,
                'longitude': -81.83569,
                'population': '44730',
                'rank': '826',
                'state': 'Ohio'
            },
            {
                'city': 'Barnstable Town',
                'growth_from_2000_to_2013': '-7.1%',
                'latitude': 41.7003208,
                'longitude': -70.3002024,
                'population': '44641',
                'rank': '827',
                'state': 'Massachusetts'
            },
            {
                'city': 'Wylie',
                'growth_from_2000_to_2013': '185.2%',
                'latitude': 33.0151201,
                'longitude': -96.5388789,
                'population': '44575',
                'rank': '828',
                'state': 'Texas'
            },
            {
                'city': 'Sayreville',
                'growth_from_2000_to_2013': '9.6%',
                'latitude': 40.45940210000001,
                'longitude': -74.360846,
                'population': '44412',
                'rank': '829',
                'state': 'New Jersey'
            },
            {
                'city': 'Kannapolis',
                'growth_from_2000_to_2013': '18.6%',
                'latitude': 35.4873613,
                'longitude': -80.6217341,
                'population': '44359',
                'rank': '830',
                'state': 'North Carolina'
            },
            {
                'city': 'Charlottesville',
                'growth_from_2000_to_2013': '10.5%',
                'latitude': 38.0293059,
                'longitude': -78.47667810000002,
                'population': '44349',
                'rank': '831',
                'state': 'Virginia'
            },
            {
                'city': 'Littleton',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 39.613321,
                'longitude': -105.0166498,
                'population': '44275',
                'rank': '832',
                'state': 'Colorado'
            },
            {
                'city': 'Titusville',
                'growth_from_2000_to_2013': '7.8%',
                'latitude': 28.6122187,
                'longitude': -80.8075537,
                'population': '44206',
                'rank': '833',
                'state': 'Florida'
            },
            {
                'city': 'Hackensack',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 40.8859325,
                'longitude': -74.0434736,
                'population': '44113',
                'rank': '834',
                'state': 'New Jersey'
            },
            {
                'city': 'Newark',
                'growth_from_2000_to_2013': '3.3%',
                'latitude': 37.5296593,
                'longitude': -122.0402399,
                'population': '44096',
                'rank': '835',
                'state': 'California'
            },
            {
                'city': 'Pittsfield',
                'growth_from_2000_to_2013': '-3.6%',
                'latitude': 42.4500845,
                'longitude': -73.2453824,
                'population': '44057',
                'rank': '836',
                'state': 'Massachusetts'
            },
            {
                'city': 'York',
                'growth_from_2000_to_2013': '6.4%',
                'latitude': 39.9625984,
                'longitude': -76.727745,
                'population': '43935',
                'rank': '837',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Lombard',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 41.8800296,
                'longitude': -88.00784349999999,
                'population': '43907',
                'rank': '838',
                'state': 'Illinois'
            },
            {
                'city': 'Attleboro',
                'growth_from_2000_to_2013': '4.6%',
                'latitude': 41.94454409999999,
                'longitude': -71.2856082,
                'population': '43886',
                'rank': '839',
                'state': 'Massachusetts'
            },
            {
                'city': 'DeKalb',
                'growth_from_2000_to_2013': '11.8%',
                'latitude': 41.9294736,
                'longitude': -88.75036469999999,
                'population': '43849',
                'rank': '840',
                'state': 'Illinois'
            },
            {
                'city': 'Blacksburg',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 37.2295733,
                'longitude': -80.4139393,
                'population': '43609',
                'rank': '841',
                'state': 'Virginia'
            },
            {
                'city': 'Dublin',
                'growth_from_2000_to_2013': '37.6%',
                'latitude': 40.0992294,
                'longitude': -83.1140771,
                'population': '43607',
                'rank': '842',
                'state': 'Ohio'
            },
            {
                'city': 'Haltom City',
                'growth_from_2000_to_2013': '11.4%',
                'latitude': 32.7995738,
                'longitude': -97.26918169999999,
                'population': '43580',
                'rank': '843',
                'state': 'Texas'
            },
            {
                'city': 'Lompoc',
                'growth_from_2000_to_2013': '5.5%',
                'latitude': 34.6391501,
                'longitude': -120.4579409,
                'population': '43509',
                'rank': '844',
                'state': 'California'
            },
            {
                'city': 'El Centro',
                'growth_from_2000_to_2013': '13.7%',
                'latitude': 32.792,
                'longitude': -115.5630514,
                'population': '43363',
                'rank': '845',
                'state': 'California'
            },
            {
                'city': 'Danville',
                'growth_from_2000_to_2013': '3.7%',
                'latitude': 37.8215929,
                'longitude': -121.9999606,
                'population': '43341',
                'rank': '846',
                'state': 'California'
            },
            {
                'city': 'Jefferson City',
                'growth_from_2000_to_2013': '6.7%',
                'latitude': 38.57670170000001,
                'longitude': -92.1735164,
                'population': '43330',
                'rank': '847',
                'state': 'Missouri'
            },
            {
                'city': 'Cutler Bay',
                'growth_from_2000_to_2013': '42.9%',
                'latitude': 25.5808323,
                'longitude': -80.34685929999999,
                'population': '43328',
                'rank': '848',
                'state': 'Florida'
            },
            {
                'city': 'Oakland Park',
                'growth_from_2000_to_2013': '2.7%',
                'latitude': 26.1723065,
                'longitude': -80.1319893,
                'population': '43286',
                'rank': '849',
                'state': 'Florida'
            },
            {
                'city': 'North Miami Beach',
                'growth_from_2000_to_2013': '3.6%',
                'latitude': 25.9331488,
                'longitude': -80.1625463,
                'population': '43250',
                'rank': '850',
                'state': 'Florida'
            },
            {
                'city': 'Freeport',
                'growth_from_2000_to_2013': '-1.4%',
                'latitude': 40.6576022,
                'longitude': -73.58318349999999,
                'population': '43167',
                'rank': '851',
                'state': 'New York'
            },
            {
                'city': 'Moline',
                'growth_from_2000_to_2013': '-1.9%',
                'latitude': 41.5067003,
                'longitude': -90.51513419999999,
                'population': '43116',
                'rank': '852',
                'state': 'Illinois'
            },
            {
                'city': 'Coachella',
                'growth_from_2000_to_2013': '88.4%',
                'latitude': 33.6803003,
                'longitude': -116.173894,
                'population': '43092',
                'rank': '853',
                'state': 'California'
            },
            {
                'city': 'Fort Pierce',
                'growth_from_2000_to_2013': '6.9%',
                'latitude': 27.4467056,
                'longitude': -80.3256056,
                'population': '43074',
                'rank': '854',
                'state': 'Florida'
            },
            {
                'city': 'Smyrna',
                'growth_from_2000_to_2013': '54.9%',
                'latitude': 35.9828412,
                'longitude': -86.5186045,
                'population': '43060',
                'rank': '855',
                'state': 'Tennessee'
            },
            {
                'city': 'Bountiful',
                'growth_from_2000_to_2013': '3.9%',
                'latitude': 40.8893895,
                'longitude': -111.880771,
                'population': '43023',
                'rank': '856',
                'state': 'Utah'
            },
            {
                'city': 'Fond du Lac',
                'growth_from_2000_to_2013': '1.7%',
                'latitude': 43.7730448,
                'longitude': -88.4470508,
                'population': '42970',
                'rank': '857',
                'state': 'Wisconsin'
            },
            {
                'city': 'Everett',
                'growth_from_2000_to_2013': '12.1%',
                'latitude': 42.40843,
                'longitude': -71.0536625,
                'population': '42935',
                'rank': '858',
                'state': 'Massachusetts'
            },
            {
                'city': 'Danville',
                'growth_from_2000_to_2013': '-11.0%',
                'latitude': 36.5859718,
                'longitude': -79.39502279999999,
                'population': '42907',
                'rank': '859',
                'state': 'Virginia'
            },
            {
                'city': 'Keller',
                'growth_from_2000_to_2013': '53.3%',
                'latitude': 32.9341893,
                'longitude': -97.229298,
                'population': '42907',
                'rank': '860',
                'state': 'Texas'
            },
            {
                'city': 'Belleville',
                'growth_from_2000_to_2013': '1.2%',
                'latitude': 38.5200504,
                'longitude': -89.9839935,
                'population': '42895',
                'rank': '861',
                'state': 'Illinois'
            },
            {
                'city': 'Bell Gardens',
                'growth_from_2000_to_2013': '-2.7%',
                'latitude': 33.9652918,
                'longitude': -118.1514588,
                'population': '42889',
                'rank': '862',
                'state': 'California'
            },
            {
                'city': 'Cleveland',
                'growth_from_2000_to_2013': '14.1%',
                'latitude': 35.1595182,
                'longitude': -84.8766115,
                'population': '42774',
                'rank': '863',
                'state': 'Tennessee'
            },
            {
                'city': 'North Lauderdale',
                'growth_from_2000_to_2013': '10.8%',
                'latitude': 26.217305,
                'longitude': -80.2258811,
                'population': '42757',
                'rank': '864',
                'state': 'Florida'
            },
            {
                'city': 'Fairfield',
                'growth_from_2000_to_2013': '1.2%',
                'latitude': 39.3454673,
                'longitude': -84.5603187,
                'population': '42635',
                'rank': '865',
                'state': 'Ohio'
            },
            {
                'city': 'Salem',
                'growth_from_2000_to_2013': '5.1%',
                'latitude': 42.51954,
                'longitude': -70.8967155,
                'population': '42544',
                'rank': '866',
                'state': 'Massachusetts'
            },
            {
                'city': 'Rancho Palos Verdes',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 33.7444613,
                'longitude': -118.3870173,
                'population': '42448',
                'rank': '867',
                'state': 'California'
            },
            {
                'city': 'San Bruno',
                'growth_from_2000_to_2013': '5.6%',
                'latitude': 37.6304904,
                'longitude': -122.4110835,
                'population': '42443',
                'rank': '868',
                'state': 'California'
            },
            {
                'city': 'Concord',
                'growth_from_2000_to_2013': '4.1%',
                'latitude': 43.2081366,
                'longitude': -71.5375718,
                'population': '42419',
                'rank': '869',
                'state': 'New Hampshire'
            },
            {
                'city': 'Burlington',
                'growth_from_2000_to_2013': '6.1%',
                'latitude': 44.4758825,
                'longitude': -73.21207199999999,
                'population': '42284',
                'rank': '870',
                'state': 'Vermont'
            },
            {
                'city': 'Apex',
                'growth_from_2000_to_2013': '98.8%',
                'latitude': 35.732652,
                'longitude': -78.85028559999999,
                'population': '42214',
                'rank': '871',
                'state': 'North Carolina'
            },
            {
                'city': 'Midland',
                'growth_from_2000_to_2013': '0.9%',
                'latitude': 43.6155825,
                'longitude': -84.2472116,
                'population': '42181',
                'rank': '872',
                'state': 'Michigan'
            },
            {
                'city': 'Altamonte Springs',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 28.6611089,
                'longitude': -81.3656242,
                'population': '42150',
                'rank': '873',
                'state': 'Florida'
            },
            {
                'city': 'Hutchinson',
                'growth_from_2000_to_2013': '0.1%',
                'latitude': 38.0608445,
                'longitude': -97.92977429999999,
                'population': '41889',
                'rank': '874',
                'state': 'Kansas'
            },
            {
                'city': 'Buffalo Grove',
                'growth_from_2000_to_2013': '-3.4%',
                'latitude': 42.1662831,
                'longitude': -87.9631308,
                'population': '41778',
                'rank': '875',
                'state': 'Illinois'
            },
            {
                'city': 'Urbandale',
                'growth_from_2000_to_2013': '41.5%',
                'latitude': 41.6266555,
                'longitude': -93.71216559999999,
                'population': '41776',
                'rank': '876',
                'state': 'Iowa'
            },
            {
                'city': 'State College',
                'growth_from_2000_to_2013': '8.7%',
                'latitude': 40.7933949,
                'longitude': -77.8600012,
                'population': '41757',
                'rank': '877',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Urbana',
                'growth_from_2000_to_2013': '10.3%',
                'latitude': 40.1105875,
                'longitude': -88.2072697,
                'population': '41752',
                'rank': '878',
                'state': 'Illinois'
            },
            {
                'city': 'Plainfield',
                'growth_from_2000_to_2013': '203.6%',
                'latitude': 41.632223,
                'longitude': -88.2120315,
                'population': '41734',
                'rank': '879',
                'state': 'Illinois'
            },
            {
                'city': 'Manassas',
                'growth_from_2000_to_2013': '19.5%',
                'latitude': 38.7509488,
                'longitude': -77.47526669999999,
                'population': '41705',
                'rank': '880',
                'state': 'Virginia'
            },
            {
                'city': 'Bartlett',
                'growth_from_2000_to_2013': '13.1%',
                'latitude': 41.9950276,
                'longitude': -88.1856301,
                'population': '41679',
                'rank': '881',
                'state': 'Illinois'
            },
            {
                'city': 'Kearny',
                'growth_from_2000_to_2013': '2.8%',
                'latitude': 40.7684342,
                'longitude': -74.1454214,
                'population': '41664',
                'rank': '882',
                'state': 'New Jersey'
            },
            {
                'city': 'Oro Valley',
                'growth_from_2000_to_2013': '27.0%',
                'latitude': 32.3909071,
                'longitude': -110.966488,
                'population': '41627',
                'rank': '883',
                'state': 'Arizona'
            },
            {
                'city': 'Findlay',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 41.04422,
                'longitude': -83.6499321,
                'population': '41512',
                'rank': '884',
                'state': 'Ohio'
            },
            {
                'city': 'Rohnert Park',
                'growth_from_2000_to_2013': '0.0%',
                'latitude': 38.3396367,
                'longitude': -122.7010984,
                'population': '41398',
                'rank': '885',
                'state': 'California'
            },
            {
                'city': 'Westfield',
                'growth_from_2000_to_2013': '3.0%',
                'latitude': 42.1250929,
                'longitude': -72.749538,
                'population': '41301',
                'rank': '887',
                'state': 'Massachusetts'
            },
            {
                'city': 'Linden',
                'growth_from_2000_to_2013': '4.7%',
                'latitude': 40.6220478,
                'longitude': -74.24459019999999,
                'population': '41301',
                'rank': '886',
                'state': 'New Jersey'
            },
            {
                'city': 'Sumter',
                'growth_from_2000_to_2013': '1.3%',
                'latitude': 33.9204354,
                'longitude': -80.3414693,
                'population': '41190',
                'rank': '888',
                'state': 'South Carolina'
            },
            {
                'city': 'Wilkes-Barre',
                'growth_from_2000_to_2013': '-4.3%',
                'latitude': 41.2459149,
                'longitude': -75.88130749999999,
                'population': '41108',
                'rank': '889',
                'state': 'Pennsylvania'
            },
            {
                'city': 'Woonsocket',
                'growth_from_2000_to_2013': '-5.2%',
                'latitude': 42.00287609999999,
                'longitude': -71.51478390000001,
                'population': '41026',
                'rank': '890',
                'state': 'Rhode Island'
            },
            {
                'city': 'Leominster',
                'growth_from_2000_to_2013': '-1.1%',
                'latitude': 42.5250906,
                'longitude': -71.759794,
                'population': '41002',
                'rank': '891',
                'state': 'Massachusetts'
            },
            {
                'city': 'Shelton',
                'growth_from_2000_to_2013': '7.3%',
                'latitude': 41.3164856,
                'longitude': -73.0931641,
                'population': '40999',
                'rank': '892',
                'state': 'Connecticut'
            },
            {
                'city': 'Brea',
                'growth_from_2000_to_2013': '15.2%',
                'latitude': 33.9166805,
                'longitude': -117.9000604,
                'population': '40963',
                'rank': '893',
                'state': 'California'
            },
            {
                'city': 'Covington',
                'growth_from_2000_to_2013': '-4.7%',
                'latitude': 39.0836712,
                'longitude': -84.5085536,
                'population': '40956',
                'rank': '894',
                'state': 'Kentucky'
            },
            {
                'city': 'Rockwall',
                'growth_from_2000_to_2013': '117.2%',
                'latitude': 32.93123360000001,
                'longitude': -96.4597089,
                'population': '40922',
                'rank': '895',
                'state': 'Texas'
            },
            {
                'city': 'Meridian',
                'growth_from_2000_to_2013': '-0.9%',
                'latitude': 32.3643098,
                'longitude': -88.703656,
                'population': '40921',
                'rank': '896',
                'state': 'Mississippi'
            },
            {
                'city': 'Riverton',
                'growth_from_2000_to_2013': '61.6%',
                'latitude': 40.521893,
                'longitude': -111.9391023,
                'population': '40921',
                'rank': '897',
                'state': 'Utah'
            },
            {
                'city': 'St. Cloud',
                'growth_from_2000_to_2013': '86.2%',
                'latitude': 28.2489016,
                'longitude': -81.2811801,
                'population': '40918',
                'rank': '898',
                'state': 'Florida'
            },
            {
                'city': 'Quincy',
                'growth_from_2000_to_2013': '0.5%',
                'latitude': 39.9356016,
                'longitude': -91.4098726,
                'population': '40915',
                'rank': '899',
                'state': 'Illinois'
            },
            {
                'city': 'Morgan Hill',
                'growth_from_2000_to_2013': '19.5%',
                'latitude': 37.1305012,
                'longitude': -121.6543901,
                'population': '40836',
                'rank': '900',
                'state': 'California'
            },
            {
                'city': 'Warren',
                'growth_from_2000_to_2013': '-15.2%',
                'latitude': 41.2375569,
                'longitude': -80.81841659999999,
                'population': '40768',
                'rank': '901',
                'state': 'Ohio'
            },
            {
                'city': 'Edmonds',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 47.8106521,
                'longitude': -122.3773552,
                'population': '40727',
                'rank': '902',
                'state': 'Washington'
            },
            {
                'city': 'Burleson',
                'growth_from_2000_to_2013': '85.3%',
                'latitude': 32.5420821,
                'longitude': -97.3208492,
                'population': '40714',
                'rank': '903',
                'state': 'Texas'
            },
            {
                'city': 'Beverly',
                'growth_from_2000_to_2013': '2.0%',
                'latitude': 42.5584283,
                'longitude': -70.880049,
                'population': '40664',
                'rank': '904',
                'state': 'Massachusetts'
            },
            {
                'city': 'Mankato',
                'growth_from_2000_to_2013': '24.7%',
                'latitude': 44.1635775,
                'longitude': -93.99939959999999,
                'population': '40641',
                'rank': '905',
                'state': 'Minnesota'
            },
            {
                'city': 'Hagerstown',
                'growth_from_2000_to_2013': '10.4%',
                'latitude': 39.6417629,
                'longitude': -77.71999319999999,
                'population': '40612',
                'rank': '906',
                'state': 'Maryland'
            },
            {
                'city': 'Prescott',
                'growth_from_2000_to_2013': '18.1%',
                'latitude': 34.5400242,
                'longitude': -112.4685025,
                'population': '40590',
                'rank': '907',
                'state': 'Arizona'
            },
            {
                'city': 'Campbell',
                'growth_from_2000_to_2013': '4.2%',
                'latitude': 37.2871651,
                'longitude': -121.9499568,
                'population': '40584',
                'rank': '908',
                'state': 'California'
            },
            {
                'city': 'Cedar Falls',
                'growth_from_2000_to_2013': '12.0%',
                'latitude': 42.5348993,
                'longitude': -92.4453161,
                'population': '40566',
                'rank': '909',
                'state': 'Iowa'
            },
            {
                'city': 'Beaumont',
                'growth_from_2000_to_2013': '254.5%',
                'latitude': 33.9294606,
                'longitude': -116.977248,
                'population': '40481',
                'rank': '910',
                'state': 'California'
            },
            {
                'city': 'La Puente',
                'growth_from_2000_to_2013': '-1.6%',
                'latitude': 34.0200114,
                'longitude': -117.9495083,
                'population': '40435',
                'rank': '911',
                'state': 'California'
            },
            {
                'city': 'Crystal Lake',
                'growth_from_2000_to_2013': '5.3%',
                'latitude': 42.2411344,
                'longitude': -88.31619649999999,
                'population': '40388',
                'rank': '912',
                'state': 'Illinois'
            },
            {
                'city': 'Fitchburg',
                'growth_from_2000_to_2013': '3.5%',
                'latitude': 42.5834228,
                'longitude': -71.8022955,
                'population': '40383',
                'rank': '913',
                'state': 'Massachusetts'
            },
            {
                'city': 'Carol Stream',
                'growth_from_2000_to_2013': '-0.2%',
                'latitude': 41.91252859999999,
                'longitude': -88.13479269999999,
                'population': '40379',
                'rank': '914',
                'state': 'Illinois'
            },
            {
                'city': 'Hickory',
                'growth_from_2000_to_2013': '7.0%',
                'latitude': 35.7344538,
                'longitude': -81.3444573,
                'population': '40361',
                'rank': '915',
                'state': 'North Carolina'
            },
            {
                'city': 'Streamwood',
                'growth_from_2000_to_2013': '10.1%',
                'latitude': 42.0255827,
                'longitude': -88.17840849999999,
                'population': '40351',
                'rank': '916',
                'state': 'Illinois'
            },
            {
                'city': 'Norwich',
                'growth_from_2000_to_2013': '11.6%',
                'latitude': 41.5242649,
                'longitude': -72.07591049999999,
                'population': '40347',
                'rank': '917',
                'state': 'Connecticut'
            },
            {
                'city': 'Coppell',
                'growth_from_2000_to_2013': '10.3%',
                'latitude': 32.9545687,
                'longitude': -97.01500779999999,
                'population': '40342',
                'rank': '918',
                'state': 'Texas'
            },
            {
                'city': 'San Gabriel',
                'growth_from_2000_to_2013': '0.9%',
                'latitude': 34.09611110000001,
                'longitude': -118.1058333,
                'population': '40275',
                'rank': '919',
                'state': 'California'
            },
            {
                'city': 'Holyoke',
                'growth_from_2000_to_2013': '0.9%',
                'latitude': 42.2042586,
                'longitude': -72.6162009,
                'population': '40249',
                'rank': '920',
                'state': 'Massachusetts'
            },
            {
                'city': 'Bentonville',
                'growth_from_2000_to_2013': '97.7%',
                'latitude': 36.3728538,
                'longitude': -94.2088172,
                'population': '40167',
                'rank': '921',
                'state': 'Arkansas'
            },
            {
                'city': 'Florence',
                'growth_from_2000_to_2013': '10.2%',
                'latitude': 34.79981,
                'longitude': -87.677251,
                'population': '40059',
                'rank': '922',
                'state': 'Alabama'
            },
            {
                'city': 'Peachtree Corners',
                'growth_from_2000_to_2013': '',
                'latitude': 33.9698929,
                'longitude': -84.2214551,
                'population': '40059',
                'rank': '923',
                'state': 'Georgia'
            },
            {
                'city': 'Brentwood',
                'growth_from_2000_to_2013': '51.9%',
                'latitude': 36.0331164,
                'longitude': -86.78277720000001,
                'population': '40021',
                'rank': '924',
                'state': 'Tennessee'
            },
            {
                'city': 'Bozeman',
                'growth_from_2000_to_2013': '41.9%',
                'latitude': 45.6769979,
                'longitude': -111.0429339,
                'population': '39860',
                'rank': '925',
                'state': 'Montana'
            },
            {
                'city': 'New Berlin',
                'growth_from_2000_to_2013': '3.6%',
                'latitude': 42.9764027,
                'longitude': -88.1084224,
                'population': '39834',
                'rank': '926',
                'state': 'Wisconsin'
            },
            {
                'city': 'Goose Creek',
                'growth_from_2000_to_2013': '26.1%',
                'latitude': 32.9810059,
                'longitude': -80.03258670000001,
                'population': '39823',
                'rank': '927',
                'state': 'South Carolina'
            },
            {
                'city': 'Huntsville',
                'growth_from_2000_to_2013': '13.2%',
                'latitude': 30.7235263,
                'longitude': -95.55077709999999,
                'population': '39795',
                'rank': '928',
                'state': 'Texas'
            },
            {
                'city': 'Prescott Valley',
                'growth_from_2000_to_2013': '62.9%',
                'latitude': 34.6100243,
                'longitude': -112.315721,
                'population': '39791',
                'rank': '929',
                'state': 'Arizona'
            },
            {
                'city': 'Maplewood',
                'growth_from_2000_to_2013': '12.3%',
                'latitude': 44.9530215,
                'longitude': -92.9952153,
                'population': '39765',
                'rank': '930',
                'state': 'Minnesota'
            },
            {
                'city': 'Romeoville',
                'growth_from_2000_to_2013': '79.5%',
                'latitude': 41.6475306,
                'longitude': -88.0895061,
                'population': '39650',
                'rank': '931',
                'state': 'Illinois'
            },
            {
                'city': 'Duncanville',
                'growth_from_2000_to_2013': '9.7%',
                'latitude': 32.6518004,
                'longitude': -96.9083366,
                'population': '39605',
                'rank': '932',
                'state': 'Texas'
            },
            {
                'city': 'Atlantic City',
                'growth_from_2000_to_2013': '-2.2%',
                'latitude': 39.3642834,
                'longitude': -74.4229266,
                'population': '39551',
                'rank': '933',
                'state': 'New Jersey'
            },
            {
                'city': 'Clovis',
                'growth_from_2000_to_2013': '21.3%',
                'latitude': 34.4047987,
                'longitude': -103.2052272,
                'population': '39508',
                'rank': '934',
                'state': 'New Mexico'
            },
            {
                'city': 'The Colony',
                'growth_from_2000_to_2013': '45.7%',
                'latitude': 33.0806083,
                'longitude': -96.89283089999999,
                'population': '39458',
                'rank': '935',
                'state': 'Texas'
            },
            {
                'city': 'Culver City',
                'growth_from_2000_to_2013': '1.3%',
                'latitude': 34.0211224,
                'longitude': -118.3964665,
                'population': '39428',
                'rank': '936',
                'state': 'California'
            },
            {
                'city': 'Marlborough',
                'growth_from_2000_to_2013': '7.6%',
                'latitude': 42.3459271,
                'longitude': -71.5522874,
                'population': '39414',
                'rank': '937',
                'state': 'Massachusetts'
            },
            {
                'city': 'Hilton Head Island',
                'growth_from_2000_to_2013': '16.0%',
                'latitude': 32.216316,
                'longitude': -80.752608,
                'population': '39412',
                'rank': '938',
                'state': 'South Carolina'
            },
            {
                'city': 'Moorhead',
                'growth_from_2000_to_2013': '21.3%',
                'latitude': 46.8737648,
                'longitude': -96.76780389999999,
                'population': '39398',
                'rank': '939',
                'state': 'Minnesota'
            },
            {
                'city': 'Calexico',
                'growth_from_2000_to_2013': '44.0%',
                'latitude': 32.6789476,
                'longitude': -115.4988834,
                'population': '39389',
                'rank': '940',
                'state': 'California'
            },
            {
                'city': 'Bullhead City',
                'growth_from_2000_to_2013': '15.9%',
                'latitude': 35.1359386,
                'longitude': -114.5285981,
                'population': '39383',
                'rank': '941',
                'state': 'Arizona'
            },
            {
                'city': 'Germantown',
                'growth_from_2000_to_2013': '4.1%',
                'latitude': 35.0867577,
                'longitude': -89.8100858,
                'population': '39375',
                'rank': '942',
                'state': 'Tennessee'
            },
            {
                'city': 'La Quinta',
                'growth_from_2000_to_2013': '59.9%',
                'latitude': 33.6633573,
                'longitude': -116.3100095,
                'population': '39331',
                'rank': '943',
                'state': 'California'
            },
            {
                'city': 'Lancaster',
                'growth_from_2000_to_2013': '10.7%',
                'latitude': 39.7136754,
                'longitude': -82.5993294,
                'population': '39325',
                'rank': '944',
                'state': 'Ohio'
            },
            {
                'city': 'Wausau',
                'growth_from_2000_to_2013': '1.7%',
                'latitude': 44.9591352,
                'longitude': -89.6301221,
                'population': '39309',
                'rank': '945',
                'state': 'Wisconsin'
            },
            {
                'city': 'Sherman',
                'growth_from_2000_to_2013': '11.6%',
                'latitude': 33.6356618,
                'longitude': -96.6088805,
                'population': '39296',
                'rank': '946',
                'state': 'Texas'
            },
            {
                'city': 'Ocoee',
                'growth_from_2000_to_2013': '57.9%',
                'latitude': 28.5691677,
                'longitude': -81.5439619,
                'population': '39172',
                'rank': '947',
                'state': 'Florida'
            },
            {
                'city': 'Shakopee',
                'growth_from_2000_to_2013': '85.7%',
                'latitude': 44.7973962,
                'longitude': -93.5272861,
                'population': '39167',
                'rank': '948',
                'state': 'Minnesota'
            },
            {
                'city': 'Woburn',
                'growth_from_2000_to_2013': '4.4%',
                'latitude': 42.4792618,
                'longitude': -71.1522765,
                'population': '39083',
                'rank': '949',
                'state': 'Massachusetts'
            },
            {
                'city': 'Bremerton',
                'growth_from_2000_to_2013': '4.9%',
                'latitude': 47.5673202,
                'longitude': -122.6329356,
                'population': '39056',
                'rank': '950',
                'state': 'Washington'
            },
            {
                'city': 'Rock Island',
                'growth_from_2000_to_2013': '-1.9%',
                'latitude': 41.5094771,
                'longitude': -90.5787476,
                'population': '38877',
                'rank': '951',
                'state': 'Illinois'
            },
            {
                'city': 'Muskogee',
                'growth_from_2000_to_2013': '-0.7%',
                'latitude': 35.7478769,
                'longitude': -95.3696909,
                'population': '38863',
                'rank': '952',
                'state': 'Oklahoma'
            },
            {
                'city': 'Cape Girardeau',
                'growth_from_2000_to_2013': '9.4%',
                'latitude': 37.3058839,
                'longitude': -89.51814759999999,
                'population': '38816',
                'rank': '953',
                'state': 'Missouri'
            },
            {
                'city': 'Annapolis',
                'growth_from_2000_to_2013': '7.6%',
                'latitude': 38.9784453,
                'longitude': -76.4921829,
                'population': '38722',
                'rank': '954',
                'state': 'Maryland'
            },
            {
                'city': 'Greenacres',
                'growth_from_2000_to_2013': '35.5%',
                'latitude': 26.6276276,
                'longitude': -80.1353896,
                'population': '38696',
                'rank': '955',
                'state': 'Florida'
            },
            {
                'city': 'Ormond Beach',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 29.2858129,
                'longitude': -81.0558894,
                'population': '38661',
                'rank': '956',
                'state': 'Florida'
            },
            {
                'city': 'Hallandale Beach',
                'growth_from_2000_to_2013': '12.4%',
                'latitude': 25.9812024,
                'longitude': -80.14837899999999,
                'population': '38632',
                'rank': '957',
                'state': 'Florida'
            },
            {
                'city': 'Stanton',
                'growth_from_2000_to_2013': '2.8%',
                'latitude': 33.8025155,
                'longitude': -117.9931165,
                'population': '38623',
                'rank': '958',
                'state': 'California'
            },
            {
                'city': 'Puyallup',
                'growth_from_2000_to_2013': '11.8%',
                'latitude': 47.1853785,
                'longitude': -122.2928974,
                'population': '38609',
                'rank': '959',
                'state': 'Washington'
            },
            {
                'city': 'Pacifica',
                'growth_from_2000_to_2013': '0.5%',
                'latitude': 37.6138253,
                'longitude': -122.4869194,
                'population': '38606',
                'rank': '960',
                'state': 'California'
            },
            {
                'city': 'Hanover Park',
                'growth_from_2000_to_2013': '0.6%',
                'latitude': 41.9994722,
                'longitude': -88.1450735,
                'population': '38510',
                'rank': '961',
                'state': 'Illinois'
            },
            {
                'city': 'Hurst',
                'growth_from_2000_to_2013': '5.8%',
                'latitude': 32.8234621,
                'longitude': -97.1705678,
                'population': '38448',
                'rank': '962',
                'state': 'Texas'
            },
            {
                'city': 'Lima',
                'growth_from_2000_to_2013': '-8.1%',
                'latitude': 40.742551,
                'longitude': -84.1052256,
                'population': '38355',
                'rank': '963',
                'state': 'Ohio'
            },
            {
                'city': 'Marana',
                'growth_from_2000_to_2013': '166.2%',
                'latitude': 32.436381,
                'longitude': -111.2224422,
                'population': '38290',
                'rank': '964',
                'state': 'Arizona'
            },
            {
                'city': 'Carpentersville',
                'growth_from_2000_to_2013': '22.8%',
                'latitude': 42.1211364,
                'longitude': -88.2578582,
                'population': '38241',
                'rank': '965',
                'state': 'Illinois'
            },
            {
                'city': 'Oakley',
                'growth_from_2000_to_2013': '47.7%',
                'latitude': 37.9974219,
                'longitude': -121.7124536,
                'population': '38194',
                'rank': '966',
                'state': 'California'
            },
            {
                'city': 'Huber Heights',
                'growth_from_2000_to_2013': '-0.2%',
                'latitude': 39.843947,
                'longitude': -84.12466080000002,
                'population': '38142',
                'rank': '967',
                'state': 'Ohio'
            },
            {
                'city': 'Lancaster',
                'growth_from_2000_to_2013': '46.4%',
                'latitude': 32.5920798,
                'longitude': -96.7561082,
                'population': '38071',
                'rank': '968',
                'state': 'Texas'
            },
            {
                'city': 'Montclair',
                'growth_from_2000_to_2013': '12.1%',
                'latitude': 34.0775104,
                'longitude': -117.6897776,
                'population': '38027',
                'rank': '969',
                'state': 'California'
            },
            {
                'city': 'Wheeling',
                'growth_from_2000_to_2013': '4.8%',
                'latitude': 42.1391927,
                'longitude': -87.9289591,
                'population': '38015',
                'rank': '970',
                'state': 'Illinois'
            },
            {
                'city': 'Brookfield',
                'growth_from_2000_to_2013': '-1.9%',
                'latitude': 43.0605671,
                'longitude': -88.1064787,
                'population': '37999',
                'rank': '971',
                'state': 'Wisconsin'
            },
            {
                'city': 'Park Ridge',
                'growth_from_2000_to_2013': '0.1%',
                'latitude': 42.0111412,
                'longitude': -87.84061919999999,
                'population': '37839',
                'rank': '972',
                'state': 'Illinois'
            },
            {
                'city': 'Florence',
                'growth_from_2000_to_2013': '19.8%',
                'latitude': 34.1954331,
                'longitude': -79.7625625,
                'population': '37792',
                'rank': '973',
                'state': 'South Carolina'
            },
            {
                'city': 'Roy',
                'growth_from_2000_to_2013': '13.3%',
                'latitude': 41.1616108,
                'longitude': -112.0263313,
                'population': '37733',
                'rank': '974',
                'state': 'Utah'
            },
            {
                'city': 'Winter Garden',
                'growth_from_2000_to_2013': '142.5%',
                'latitude': 28.5652787,
                'longitude': -81.58618469999999,
                'population': '37711',
                'rank': '975',
                'state': 'Florida'
            },
            {
                'city': 'Chelsea',
                'growth_from_2000_to_2013': '7.3%',
                'latitude': 42.3917638,
                'longitude': -71.0328284,
                'population': '37670',
                'rank': '976',
                'state': 'Massachusetts'
            },
            {
                'city': 'Valley Stream',
                'growth_from_2000_to_2013': '3.6%',
                'latitude': 40.6642699,
                'longitude': -73.70846449999999,
                'population': '37659',
                'rank': '977',
                'state': 'New York'
            },
            {
                'city': 'Spartanburg',
                'growth_from_2000_to_2013': '-6.2%',
                'latitude': 34.9495672,
                'longitude': -81.9320482,
                'population': '37647',
                'rank': '978',
                'state': 'South Carolina'
            },
            {
                'city': 'Lake Oswego',
                'growth_from_2000_to_2013': '5.3%',
                'latitude': 45.42067489999999,
                'longitude': -122.6706498,
                'population': '37610',
                'rank': '979',
                'state': 'Oregon'
            },
            {
                'city': 'Friendswood',
                'growth_from_2000_to_2013': '28.6%',
                'latitude': 29.5293998,
                'longitude': -95.2010447,
                'population': '37587',
                'rank': '980',
                'state': 'Texas'
            },
            {
                'city': 'Westerville',
                'growth_from_2000_to_2013': '5.7%',
                'latitude': 40.1261743,
                'longitude': -82.92906959999999,
                'population': '37530',
                'rank': '981',
                'state': 'Ohio'
            },
            {
                'city': 'Northglenn',
                'growth_from_2000_to_2013': '15.5%',
                'latitude': 39.8961821,
                'longitude': -104.9811468,
                'population': '37499',
                'rank': '982',
                'state': 'Colorado'
            },
            {
                'city': 'Phenix City',
                'growth_from_2000_to_2013': '31.9%',
                'latitude': 32.4709761,
                'longitude': -85.0007653,
                'population': '37498',
                'rank': '983',
                'state': 'Alabama'
            },
            {
                'city': 'Grove City',
                'growth_from_2000_to_2013': '35.6%',
                'latitude': 39.88145189999999,
                'longitude': -83.0929644,
                'population': '37490',
                'rank': '984',
                'state': 'Ohio'
            },
            {
                'city': 'Texarkana',
                'growth_from_2000_to_2013': '7.4%',
                'latitude': 33.425125,
                'longitude': -94.04768820000001,
                'population': '37442',
                'rank': '985',
                'state': 'Texas'
            },
            {
                'city': 'Addison',
                'growth_from_2000_to_2013': '2.6%',
                'latitude': 41.931696,
                'longitude': -87.9889556,
                'population': '37385',
                'rank': '986',
                'state': 'Illinois'
            },
            {
                'city': 'Dover',
                'growth_from_2000_to_2013': '16.0%',
                'latitude': 39.158168,
                'longitude': -75.5243682,
                'population': '37366',
                'rank': '987',
                'state': 'Delaware'
            },
            {
                'city': 'Lincoln Park',
                'growth_from_2000_to_2013': '-6.7%',
                'latitude': 42.2505943,
                'longitude': -83.1785361,
                'population': '37313',
                'rank': '988',
                'state': 'Michigan'
            },
            {
                'city': 'Calumet City',
                'growth_from_2000_to_2013': '-4.5%',
                'latitude': 41.6155909,
                'longitude': -87.5294871,
                'population': '37240',
                'rank': '989',
                'state': 'Illinois'
            },
            {
                'city': 'Muskegon',
                'growth_from_2000_to_2013': '-7.1%',
                'latitude': 43.2341813,
                'longitude': -86.24839209999999,
                'population': '37213',
                'rank': '990',
                'state': 'Michigan'
            },
            {
                'city': 'Aventura',
                'growth_from_2000_to_2013': '47.2%',
                'latitude': 25.9564812,
                'longitude': -80.1392121,
                'population': '37199',
                'rank': '991',
                'state': 'Florida'
            },
            {
                'city': 'Martinez',
                'growth_from_2000_to_2013': '3.4%',
                'latitude': 38.0193657,
                'longitude': -122.1341321,
                'population': '37165',
                'rank': '992',
                'state': 'California'
            },
            {
                'city': 'Greenfield',
                'growth_from_2000_to_2013': '4.8%',
                'latitude': 42.9614039,
                'longitude': -88.0125865,
                'population': '37159',
                'rank': '993',
                'state': 'Wisconsin'
            },
            {
                'city': 'Apache Junction',
                'growth_from_2000_to_2013': '15.7%',
                'latitude': 33.4150485,
                'longitude': -111.5495777,
                'population': '37130',
                'rank': '994',
                'state': 'Arizona'
            },
            {
                'city': 'Monrovia',
                'growth_from_2000_to_2013': '0.2%',
                'latitude': 34.1442616,
                'longitude': -118.0019482,
                'population': '37101',
                'rank': '995',
                'state': 'California'
            },
            {
                'city': 'Weslaco',
                'growth_from_2000_to_2013': '28.8%',
                'latitude': 26.1595194,
                'longitude': -97.9908366,
                'population': '37093',
                'rank': '996',
                'state': 'Texas'
            },
            {
                'city': 'Keizer',
                'growth_from_2000_to_2013': '14.4%',
                'latitude': 44.9901194,
                'longitude': -123.0262077,
                'population': '37064',
                'rank': '997',
                'state': 'Oregon'
            },
            {
                'city': 'Spanish Fork',
                'growth_from_2000_to_2013': '78.1%',
                'latitude': 40.114955,
                'longitude': -111.654923,
                'population': '36956',
                'rank': '998',
                'state': 'Utah'
            },
            {
                'city': 'Beloit',
                'growth_from_2000_to_2013': '2.9%',
                'latitude': 42.5083482,
                'longitude': -89.03177649999999,
                'population': '36888',
                'rank': '999',
                'state': 'Wisconsin'
            },
            {
                'city': 'Panama City',
                'growth_from_2000_to_2013': '0.1%',
                'latitude': 30.1588129,
                'longitude': -85.6602058,
                'population': '36877',
                'rank': '1000',
                'state': 'Florida'
            }
        ];
    }
    CityService.prototype.getCities = function () {
        return this.cities;
    };
    CityService.prototype.getAsyncCities = function () {
        var _this = this;
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.cities);
                observer.complete();
            }, 2000);
        });
        return observable;
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/inputfields/inputfields.component.html":
/*!********************************************************!*\
  !*** ./src/app/inputfields/inputfields.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Input'\">\r\n\r\n\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-input&gt; </code> är ett fält för inmatning utav värden i t.ex. ett formulär. Sen har den även följande funktioner\r\n      implementerade:\r\n      <br> - Två olika fasta storlekar på fältet (liten och stor).\r\n      <br> - Visar suffix.\r\n    </p>\r\n    <br>\r\n    <vgr-input></vgr-input>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"docs__examples\">\r\n    <p>Ändra storleken på inputfälten:</p>\r\n    <vgr-radio-group [options]=\"[{value:'Stor', displayName:'Stor', selected:true},{value:'Liten', displayName:'Liten'}]\" (selectedChanged)=\"toggleInputType($event)\">\r\n    </vgr-radio-group>\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"row-layout\">\r\n        <div class=\"one-third\">\r\n          <div>\r\n            Belopp 1 (2 decimaler)\r\n            <vgr-input formControlName=\"control1\" [formatNumber]=\"true\" [nrOfDecimals]=\"2\" [suffix]=\"'kr'\" [alignRight]=\"true\" [small]=\"isSmall\"\r\n              [errorMessage]=\"validationMessages.control1\" [showValidation]=\"form.controls.control1.touched\"></vgr-input>\r\n            <span>Belopp 1: </span>\r\n            <span>{{formatNumericValue(form.controls.control1.value)}}</span>\r\n          </div>\r\n          <div>\r\n            Belopp 2 (2 decimaler)\r\n            <vgr-input formControlName=\"control2\" [formatNumber]=\"true\" [nrOfDecimals]=\"2\" [suffix]=\"'kr'\" [alignRight]=\"true\" [small]=\"isSmall\"\r\n              [errorMessage]=\"validationMessages.control2\" [showValidation]=\"form.controls.control2.touched\"></vgr-input>\r\n            <span>Belopp 2: </span>\r\n            <span>{{formatNumericValue(form.controls.control2.value)}}</span>\r\n          </div>\r\n          <div>\r\n            Procent (2 decimaler)\r\n            <vgr-input formControlName=\"control3\" [formatNumber]=\"true\" [nrOfDecimals]=\"2\" [suffix]=\"'%'\" [alignRight]=\"true\" [small]=\"isSmall\"\r\n              [errorMessage]=\"validationMessages.control3\" [showValidation]=\"form.controls.control3.touched\"></vgr-input>\r\n            <span>Procent: </span>\r\n            <span>{{formatNumericValue(form.controls.control3.value)}}</span>\r\n          </div>\r\n          <div>\r\n            Km (inga decimaler)\r\n            <vgr-input formControlName=\"control4\" [formatNumber]=\"true\" [nrOfDecimals]=\"0\" [suffix]=\"'km'\" [alignRight]=\"true\" [small]=\"isSmall\"\r\n              [errorMessage]=\"validationMessages.control4\" [showValidation]=\"form.controls.control4.touched\"></vgr-input>\r\n            <span>Km: </span>\r\n            <span>{{formatNumericValue(form.controls.control4.value)}}</span>\r\n          </div>\r\n          <div>\r\n            Numeriskt värde utan enhet\r\n            <vgr-input formControlName=\"control5\" [formatNumber]=\"true\" [alignRight]=\"true\" [small]=\"isSmall\" [errorMessage]=\"validationMessages.control5\"\r\n              [showValidation]=\"form.controls.control5.touched\"></vgr-input>\r\n            <span>Värde: </span>\r\n            <span>{{formatNumericValue(form.controls.control5.value)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"one-third\">\r\n          <div>\r\n            Max-längd 5 tecken\r\n            <vgr-input formControlName=\"control6\" [maxlength]=5 [small]=\"isSmall\" [showValidation]=\"form.controls.control6.touched\"></vgr-input>\r\n          </div>\r\n          <div>\r\n            Exakt 3 VERSALER (validera vid initiering)\r\n            <vgr-input formControlName=\"control7\" [errorMessage]=\"validationMessages.control7\" [maxlength]=\"3\" [small]=\"isSmall\" [showValidation]=\"true\"></vgr-input>\r\n            <span>Värde: </span>\r\n            <span>{{form.controls.control7.value}}</span>\r\n          </div>\r\n          <div>\r\n            Mellan 2 och 6 tecken\r\n            <vgr-input formControlName=\"control8\" [maxlength]=6 [errorMessage]=\"validationMessages.control8\" [small]=\"isSmall\" [showValidation]=\"form.controls.control8.touched\"></vgr-input>\r\n          </div>\r\n          <div>\r\n            Heltal med enhet\r\n            <vgr-input formControlName=\"control9\" [formatNumber]=\"true\" [nrOfDecimals]=\"0\" [suffix]=\"'st'\" [errorMessage]=\"validationMessages.control9\"\r\n              [alignRight]=\"true\" [small]=\"isSmall\"></vgr-input>\r\n            <span>Antal: </span>\r\n            <span>{{intValue + 0}}</span>\r\n          </div>\r\n          <div>\r\n            Långa felmeddelanden\r\n            <vgr-input formControlName=\"control10\" [errorMessage]=\"validationMessages.control10\" [small]=\"isSmall\" [showValidation]=\"form.controls.control10.touched\"></vgr-input>\r\n          </div>\r\n          <div>\r\n            Readonly fält\r\n            <vgr-input formControlName=\"control11\" [readonly]=\"true\" [small]=\"isSmall\" [showValidation]=\"form.controls.control11.touched\"></vgr-input>\r\n          </div>\r\n          <div>\r\n            Ingen validering\r\n            <vgr-input formControlName=\"control12\" [small]=\"isSmall\"></vgr-input>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"one-third\">\r\n          <div>\r\n            Ange en storstad i USA (validera vid initiering)\r\n            <vgr-input formControlName=\"control13\" [small]=\"isSmall\" [errorMessage]=\"validationMessages.control13\" [showValidation]=\"true\"></vgr-input>\r\n            <span>Din stad: {{form.controls.control13.value}}</span>\r\n          </div>\r\n          <div>\r\n            E-postadress\r\n            <vgr-input formControlName=\"control14\" [small]=\"isSmall\" [errorMessage]=\"validationMessages.control14\" [showValidation]=\"form.controls.control14.touched\"></vgr-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row-layout\">\r\n      <div class=\"full\">\r\n        <h2>Notera</h2>\r\n        <ul>\r\n          <li>\r\n            För validering så använder vi Reactive Forms för att hantera detta. Validering kan ske på blur, change och submit.\r\n          </li>\r\n        </ul>\r\n        Under \"kodexempel\" finns exempel på hur input-komponenten kan användas i Angular Reactive Forms:\r\n        <br>\r\n        <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Property</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>value: string</td>\r\n        <td>Värde att binda till</td>\r\n        <td>[value]=\"person.lastName\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>showValidation: boolean</td>\r\n        <td>Anger om valideringsfel ska visas eller ej. Default = true.</td>\r\n        <td>[showValidation]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>maxlength: string</td>\r\n        <td>Max antal tecken. Begränsar antalet möjliga tecken att mata in. Default = obegränsat.</td>\r\n        <td>[maxlength]=\"5\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>errorMessage: string</td>\r\n        <td>Text som visas vid valideringsfel</td>\r\n        <td>[errorMessage]=\"'Ange ett värde mellan 1-10'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>suffix: string</td>\r\n        <td>Text som visas till höger om fältet, som t.ex en enhet (km, m, kg, kr mm)</td>\r\n        <td>[suffix]=\"'kg'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>alignRight: boolean</td>\r\n        <td>Om true, högerställ innehållet i fältet. Default är False.</td>\r\n        <td>[alignRight]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>formatNumber: boolean</td>\r\n        <td>Om värdet som visas ska formateras, dvs '.' visas som ',' och mellanslag läggs mellan 1000-tal.</td>\r\n        <td>[formatNumber]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>nrOfDecimals: number</td>\r\n        <td>Antal decimaler som det inmatade värdet ska avrundas till.</td>\r\n        <td>[nrOfDecimals]=\"2\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>small: boolean</td>\r\n        <td>Gör inputfälten till en mindre storlek.</td>\r\n        <td>[small]=\"true\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      Stöds ej.\r\n    </p>\r\n  </div>\r\n\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/inputfields/inputfields.component.scss":
/*!********************************************************!*\
  !*** ./src/app/inputfields/inputfields.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inputfields/inputfields.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inputfields/inputfields.component.ts ***!
  \******************************************************/
/*! exports provided: InputfieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputfieldsComponent", function() { return InputfieldsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cityservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cityservice */ "./src/app/inputfields/cityservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputfieldsComponent = /** @class */ (function () {
    function InputfieldsComponent(fb, errorHandler) {
        this.fb = fb;
        this.errorHandler = errorHandler;
        this.value = 81273128739;
        this.formErrors = {
            'control1': '',
            'control2': '',
            'control3': '',
            'control4': '',
            'control5': '',
            'control7': '',
            'control8': '',
            'control9': '',
            'control10': '',
            'control13': '',
            'control14': ''
        };
        this.validationMessages = {
            control1: {
                'invalidNumber': 'Ange ett nummer!',
            },
            control2: {
                'invalidNumber': 'Minst 3 siffror tack!',
                'minlength': 'Minst 3 siffror tack!'
            },
            control3: {
                'invalidNumber': 'Ange ett nummer!',
            },
            control4: {
                'invalidNumber': 'Ange ett nummer!',
            },
            control5: {
                'invalidNumber': 'Ange ett nummer!',
            },
            control7: {
                'pattern': 'Ange exakt tre VERSALER.',
            },
            control8: {
                'pattern': ' Ange mellan 2-6 tecken.'
            },
            control9: {
                'invalidNumber': 'Ange ett giltigt heltal.'
            },
            control10: {
                'required': 'Detta är ett längre meddelande som visas när något blir väldigt väldigt fel'
            },
            control13: {
                'invalidCity': 'Felaktig stad',
            },
            control14: {
                'email': 'Felaktig e-post'
            }
        };
        this.cityName = 'Houstons';
        this.amount1 = 15000;
        this.amount2 = -25.5;
        this.percentValue = 0.02;
        this.kmValue = 11;
        this.intValue = 0;
        this.isSmall = false;
    }
    InputfieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        var validateOnInit = true;
        this.isSmall = true;
        if (validateOnInit) {
            this.errorHandler.getErrorMessagesReactiveForms(this.formErrors, this.validationMessages, this.form, this.isSmall);
        }
        this.form.valueChanges
            .subscribe(function (data) {
            _this.errorHandler.getErrorMessagesReactiveForms(_this.formErrors, _this.validationMessages, _this.form, _this.isSmall);
        });
    };
    InputfieldsComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            control1: [this.amount1, validateNumber],
            control2: [this.amount2, [validateNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            control3: [this.percentValue, validateNumber],
            control4: [this.kmValue, validateNumber],
            control5: [this.numericValue, validateNumber],
            control6: [],
            control7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z,Å,Ä,Ö]{3}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            control8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^.{2,6}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            control9: [this.intValue, validateNumber],
            control10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            control11: ['Visar värdet utan ram'],
            control12: [],
            control13: [this.cityName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, validateAsyncCityName()],
            control14: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
        });
    };
    InputfieldsComponent.prototype.formatNumericValue = function (value) {
        return isNaN(value) ? 'Inget' : value;
    };
    InputfieldsComponent.prototype.toggleInputType = function (value) {
        console.log(value);
        if (value === 'Stor') {
            this.isSmall = false;
        }
        else {
            this.isSmall = true;
        }
    };
    InputfieldsComponent.prototype.validateNumberControl1 = function (value) {
        var pattern = '^[-,−]{0,1}(\\d{1,3}([,\\s.]\\d{3})*|\\d+)([.,]\\d+)?$';
        var regexp = new RegExp(pattern);
        if (regexp.test(value)) {
            return true;
        }
        return false;
    };
    InputfieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inputfields',
            template: __webpack_require__(/*! ./inputfields.component.html */ "./src/app/inputfields/inputfields.component.html"),
            styles: [__webpack_require__(/*! ./inputfields.component.scss */ "./src/app/inputfields/inputfields.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], InputfieldsComponent);
    return InputfieldsComponent;
}());

function validateAsyncCityName() {
    var service = new _cityservice__WEBPACK_IMPORTED_MODULE_4__["CityService"]();
    return function (control) {
        return service.getAsyncCities().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (cities) {
            return cities.filter(function (x) { return x.city === control.value; }).length > 0 ? null : { 'invalidCity': { value: control.value } };
        }));
    };
}
function validateCityName(control) {
    var service = new _cityservice__WEBPACK_IMPORTED_MODULE_4__["CityService"]();
    var allCities = service.getCities();
    if (allCities.filter(function (x) { return x.city === control.value; }).length > 0) {
        return null;
    }
    return { invalidCity: true };
}
function validateNumber(control) {
    var pattern = '^[-,−]{0,1}(\\d{1,3}([,\\s.]\\d{3})*|\\d+)([.,]\\d+)?$';
    var regexp = new RegExp(pattern);
    if (regexp.test(control.value)) {
        return null;
    }
    return { invalidNumber: true };
}


/***/ }),

/***/ "./src/app/lists/examples/examples.ts":
/*!********************************************!*\
  !*** ./src/app/lists/examples/examples.ts ***!
  \********************************************/
/*! exports provided: Examples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examples", function() { return Examples; });
var Examples = /** @class */ (function () {
    function Examples() {
        this.htmlBasicListStructureMarkup = "\n  <vgr-list\">\n  <!-- Rootelementet -->\n  <vgr-list-header>\n  <!-- Header kan inheh\u00E5lla flera kolumn-headers -->\n    <vgr-list-column-header>\n    <!-- L\u00E4gg rubriktext i kolumn-header h\u00E4r -->\n    </vgr-list-column-header>\n  </vgr-list-header>\n  <vgr-list-item>\n  <!-- Motsvarar en rad -->\n    <vgr-list-item-header>\n    <!-- List-item-header-element f\u00F6r ett list-item, kan inneh\u00E5lla flera kolumner med rubrik  -->\n      <vgr-list-column></vgr-list-column>\n      <!-- Anger rubrik f\u00F6r list-item-kolumnen -->\n    </vgr-list-item-header>\n    <vgr-list-item-content>\n    <!-- Inneh\u00E5ll f\u00F6r ett list-item -->\n    </vgr-list-item-content>\n  </vgr-list-item>\n</vgr-list>";
        this.typeScriptListWithExpandableDiv = "import { Component, OnInit } from '@angular/core';\n  import {\n      SortDirection,  // Enum f\u00F6r vilket h\u00E5ll sorteringen skall ske.\n      SortChangedArgs // Args n\u00E4r sorteringordningen \u00E4ndras.\n  } from 'vgr-komponentkartan';\n\n  @Component({\n      selector: 'app-listexamplewithexpandablediv',\n      templateUrl: './listexamplewithexpandablediv.component.html',\n      styleUrls: ['./listexamplewithexpandablediv.component.scss']\n  })\n  export class ListexamplewithexpandabledivComponent implements OnInit {\n\n      public peopleRowsSimpleList: ExamplePerson[];\n      sortDirections = SortDirection; // Fix f\u00F6r att kunna anv\u00E4nda sig utav enum.\n      examples: Examples = new Examples();\n      onSortChanged(event: SortChangedArgs) {\n          this.peopleRowsSimpleList = this.peopleRowsSimpleList.sort((row1, row2) => {\n              return row1[event.key] > row2[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :\n                  row1[event.key] < row2[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;\n          });\n      }\n      ngOnInit() {\n          this.initExampleData();\n      }\n\n      initExampleData() {\n          this.peopleRowsSimpleList = [\n              {\n                  id: '1', firstName: 'Git', lastName: 'Hubsson', occupation: 'Ninja codewarrior', income: 300000,\n                  children: [\n                      { firstName: 'Lena', lastName: 'Hubsson' } as ExamplePerson,\n                      { firstName: 'Signe', lastName: 'Hubsson' } as ExamplePerson]\n              } as ExamplePerson,\n              {\n                  id: '2', firstName: 'Stud', lastName: 'Visualizer', occupation: 'Black Dragon', income: 450000,\n                  children: [\n                      { firstName: 'Kalle', lastName: 'Visualizer' } as ExamplePerson,\n                      { firstName: 'Oskar', lastName: 'Visualizer' } as ExamplePerson]\n              } as ExamplePerson,\n              {\n                  id: '3', firstName: 'See', lastName: 'Charper', occupation: 'Chrome wizard', income: 230000,\n                  children: [\n                      { firstName: 'Eva', lastName: 'Charper' } as ExamplePerson,\n                      { firstName: 'Lars', lastName: 'Charper' } as ExamplePerson]\n              } as ExamplePerson,\n              {\n                  id: '3', firstName: 'IT-Lasse', lastName: 'Andersson', occupation: 'Data', income: 600000,\n                  children: [\n                      { firstName: 'Siv', lastName: 'Andersson' } as ExamplePerson,\n                      { firstName: 'Erik', lastName: 'Andersson' } as ExamplePerson]\n              } as ExamplePerson\n          ];\n      }\n\n      constructor() { }\n  }\n  export interface ExamplePerson {\n      id: string;\n      firstName: string;\n      lastName: string;\n      occupation: string;\n      income: number;\n      children: ExamplePerson[];\n  }";
        this.htmlListWithExpandableDiv = "<vgr-list [flexibleHeader]=\"true\" (sortChanged)=\"onSortChanged($event)\">\n  <vgr-list-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"firstName\" [sortDirection]=\"sortDirections.Ascending\">F\u00F6rnamn</vgr-list-column-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"lastName\">Efternamn</vgr-list-column-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"occupation\">Yrke</vgr-list-column-header>\n    <vgr-list-column-header align=\"right\" width=\"5\" sortKey=\"income\">Inkomst</vgr-list-column-header>\n  </vgr-list-header>\n  <vgr-list-item *ngFor=\"let row of peopleRowsSimpleList\">\n    <vgr-list-item-header>\n      <vgr-list-column width=\"5\">{{row.firstName}}</vgr-list-column>\n      <vgr-list-column width=\"5\">{{row.lastName}}</vgr-list-column>\n      <vgr-list-column width=\"5\">{{row.occupation}}</vgr-list-column>\n      <vgr-list-column width=\"5\" align=\"right\">{{row.income | number:'2.2-2':'sv-SE'}}</vgr-list-column>\n    </vgr-list-item-header>\n    <vgr-list-item-content [indentContent]=\"false\">\n      <vgr-expandable-div *ngFor=\"let row of row.children\" [expanded]=\"false\">\n        <vgr-expandable-div-header>\n          <h2>Barn</h2>\n        </vgr-expandable-div-header>\n        <vgr-expandable-div-content>\n          <span>F\u00F6rnamn: {{row.firstName}}</span>\n          <br>\n          <span>Efternamn: {{row.lastName}}</span>\n        </vgr-expandable-div-content>\n      </vgr-expandable-div>\n    </vgr-list-item-content>\n  </vgr-list-item>\n</vgr-list>";
        this.typeScriptSimpleListMarkup = "import { Component, OnInit } from '@angular/core';\n    import {\n      SortDirection,  // Enum f\u00F6r vilket h\u00E5ll sorteringen skall ske.\n      SortChangedArgs // Args n\u00E4r sorteringordningen \u00E4ndras.\n    } from 'vgr-komponentkartan/';\n\n    @Component({\n      selector: 'app-listcodeexample',\n      templateUrl: './listcodeexample.component.html',\n      styleUrls: ['./listcodeexample.component.scss']\n    })\n    export class ListcodeexampleComponent implements OnInit {\n      public peopleRowsSimpleList: ExamplePerson[];\n\n      sortDirections = SortDirection; // Fix f\u00F6r att kunna anv\u00E4nda sig utav enum.\n      constructor() {\n        this.peopleRowsSimpleList = [\n          { id: '1', firstName: 'Git', lastName: 'Hubsson', occupation: 'Ninja codewarrior', income: 300000 } as ExamplePerson,\n          { id: '2', firstName: 'Stud', lastName: 'Visualizer', occupation: 'Black Dragon', income: 450000 } as ExamplePerson,\n          { id: '3', firstName: 'See', lastName: 'Charper', occupation: 'Chrome wizard', income: 230000 } as ExamplePerson,\n          { id: '3', firstName: 'IT-Lasse', lastName: 'Andersson', occupation: 'Data', income: 600000 } as ExamplePerson\n        ];\n      }\n\n      onSortChanged(event: SortChangedArgs) {\n        this.peopleRowsSimpleList = this.peopleRowsSimpleList.sort((row1, row2) => {\n          return row1[event.key] > row2[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :\n            row1[event.key] < row2[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;\n        });\n      }\n      ngOnInit() {\n      }\n    }\n    export interface ExamplePerson {\n      id: string;\n      firstName: string;\n      lastName: string;\n      occupation: string;\n      income: number;\n    }";
        this.htmltSimpleListMarkup = " <vgr-list [flexibleHeader]=\"true\" (sortChanged)=\"onSortChanged($event)\">\n  <vgr-list-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"firstName\" [sortDirection]=\"sortDirections.Ascending\">F\u00F6rnamn</vgr-list-column-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"lastName\">Efternamn</vgr-list-column-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"occupation\">Yrke</vgr-list-column-header>\n    <vgr-list-column-header align=\"right\" width=\"5\" sortKey=\"income\">Inkomst</vgr-list-column-header>\n  </vgr-list-header>\n  <vgr-list-item *ngFor=\"let row of peopleRowsSimpleList\">\n    <vgr-list-item-header>\n      <vgr-list-column width=\"5\">{{row.firstName}}</vgr-list-column>\n      <vgr-list-column width=\"5\">{{row.lastName}}</vgr-list-column>\n      <vgr-list-column width=\"5\">{{row.occupation}}</vgr-list-column>\n      <vgr-list-column width=\"5\" align=\"right\">{{row.income | number:'2.2-2':'sv-SE'}}</vgr-list-column>\n    </vgr-list-item-header>\n    <vgr-list-item-content>\n        <span>F\u00F6rnamn: {{row.firstName}}</span>\n        <br>\n        <span>Efternamn: {{row.lastName}}</span>\n        <br>\n        <span>Yrke: {{row.occupation}}</span>\n        <br>\n        <span>Inkomst: {{row.income | currency : 'SEK'}}</span>\n    </vgr-list-item-content>\n  </vgr-list-item>\n</vgr-list>";
        this.typeScriptAdvancedListMarkup = "import { Component, OnInit } from '@angular/core';\n  import {\n    ExpandableRow, RowNotification, NotificationType, ModalService,\n    SortChangedArgs, ListHeaderComponent, SortDirection\n  } from 'vgr-komponentkartan';\n  import { Examples } from '../examples';\n  import { HtmlEncodeService } from '../../../html-encode.service';\n\n  @Component({\n    selector: 'app-listexample',\n    templateUrl: './listexample.component.html',\n    styleUrls: ['./listexample.component.scss']\n  })\n  export class ListexampleComponent {\n    sortDirections = SortDirection;\n    public peopleRows: ExpandableRow<ExamplePerson, ExamplePerson>[];\n    examplePeople: ExamplePerson[];\n    typeScriptAdvancedListMarkup: string;\n    htmlAdvancedListMarkup: string;\n    examples: Examples = new Examples();\n    readOnly = true;\n    actionsVisible: boolean;\n    readonly: boolean;\n\n    constructor(htmlEncoder: HtmlEncodeService) {\n      this.typeScriptAdvancedListMarkup =\n        htmlEncoder.prepareHighlightedSection(this.examples.typeScriptAdvancedListMarkup, 'typescript');\n      this.htmlAdvancedListMarkup =\n        htmlEncoder.prepareHighlightedSection(this.examples.htmlAdvancedListMarkup);\n      this.examplePeople = [\n        { id: '1', firstName: 'Adam', lastName: 'Andersson' } as ExamplePerson,\n        { id: '2', firstName: 'Bjarne', lastName: 'Bengtsson' } as ExamplePerson,\n        { id: '3', firstName: 'Carola', lastName: 'Claesson' } as ExamplePerson,\n        { id: '4', firstName: 'Daniella', lastName: 'Di Maria Marquez ' } as ExamplePerson,\n        { id: '5', firstName: 'Erik', lastName: '' } as ExamplePerson,\n      ];\n\n      this.peopleRows = this.examplePeople.map(x => new ExpandableRow<ExamplePerson, ExamplePerson>(x));\n\n      this.peopleRows[0].setNotification('Meddelande: Text', 'vgr-icon-message');\n      this.peopleRows[4].setNotification('Personen \u00E4r inaktiv', 'vgr-icon-exclamation--red');\n    }\n\n    deleteRow(row: ExpandableRow<ExamplePerson, ExamplePerson>) {\n      // Remove visually.\n      row.notifyOnRemove(row.previewObject.firstName + ' togs bort och kommer inte l\u00E4ngre att kunna logga in', 'vgr-icon-ok-check');\n    }\n\n    updateRow(row: ExpandableRow<ExamplePerson, ExamplePerson>) {\n      row.notifyOnCollapse(row.previewObject.firstName + ' sparades', 'vgr-icon-ok-check-green');\n    }\n\n    updateRow2(row: ExpandableRow<ExamplePerson, ExamplePerson>) {\n      row.notifyOnCollapse(row.previewObject.firstName + ' sparades', 'vgr-icon-ok-check-green', true);\n    }\n\n    onSortChanged(event: SortChangedArgs) {\n      this.peopleRows = this.peopleRows.sort((row1, row2) => {\n        return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? 1 : -1) :\n          row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === SortDirection.Ascending ? -1 : 1) : 0;\n      });\n    }\n  }\n\n  export interface ExamplePerson {\n    id: string;\n    firstName: string;\n    lastName: string;\n  }\n  ";
        this.htmlAdvancedListMarkup = "<vgr-list [flexibleHeader]=\"true\" [allowMultipleExpandedItems]=\"false\" (sortChanged)=\"onSortChanged($event)\">\n  <vgr-list-header>\n    <vgr-list-column-header [width]=\"10\" [sortKey]=\"'firstName'\" [sortDirection]=\"sortDirections.Ascending\">F\u00F6rnamn</vgr-list-column-header>\n    <vgr-list-column-header [width]=\"10\" [sortKey]=\"'lastName'\">Efternamn</vgr-list-column-header>\n  </vgr-list-header>\n  <vgr-list-item *ngFor=\"let row of peopleRows\" [notification]=\"row.notification\" [expanded]=\"row.expanded\">\n    <vgr-list-item-header>\n      <vgr-list-column [width]=\"10\">{{row.previewObject.firstName}}</vgr-list-column>\n      <vgr-list-column [width]=\"10\">{{row.previewObject.lastName}}</vgr-list-column>\n    </vgr-list-item-header>\n    <vgr-list-item-content>\n      <vgr-button [secondary]=\"true\" (click)=\"updateRow(row)\">Uppdatera</vgr-button>\n      <vgr-button [secondary]=\"true\" (click)=\"updateRow2(row)\">Uppdatera och rensa meddelande</vgr-button>\n      <vgr-button [secondary]=\"true\" (click)=\"deleteRow(row)\">Ta bort</vgr-button>\n    </vgr-list-item-content>\n  </vgr-list-item>\n</vgr-list>";
        this.htmlActionButtonsListMarkup = "<vgr-list [flexibleHeader]=\"true\" (sortChanged)=\"onSortChanged($event)\">\n  <vgr-list-header>\n    <vgr-list-column-header width=\"8\" sortKey=\"firstName\" [sortDirection]=\"sortDirections.Ascending\">F\u00F6rnamn</vgr-list-column-header>\n    <vgr-list-column-header width=\"5\" sortKey=\"lastName\">Efternamn</vgr-list-column-header>\n    <vgr-list-column-header width=\"3\" sortKey=\"amount\">\u00C5rsbelopp</vgr-list-column-header>\n    <vgr-list-column-header width=\"1\"></vgr-list-column-header>\n    <vgr-list-column-header-checkbox width=\"3\" text=\"Markera alla\" [checked]=\"allChecked\" (checkedChanged)=\"onSelectAllChanged($event)\"></vgr-list-column-header-checkbox>\n  </vgr-list-header>\n  <vgr-list-item *ngFor=\"let row of peopleRows\" [notification]=\"row.notification\" (deleted)=\"notifyOnDelete(row)\">\n    <vgr-list-item-header>\n      <vgr-list-column width=\"5\">{{row.firstName}}</vgr-list-column>\n      <vgr-list-column width=\"5\">{{row.lastName}}</vgr-list-column>\n      <vgr-list-column width=\"5\" align=\"right\">{{row.income | number:'2.2-2':'sv-SE'}}</vgr-list-column>\n      <vgr-list-column-trashcan [disabled]=\"row.previewObject.deleted\" (delete)=\"onDeleteRow(row)\" width=\"1\"></vgr-list-column-trashcan>\n      <vgr-list-column-checkbox [disabled]=\"row.previewObject.deleted\" [checked]=\"row.previewObject.selected\" (checkedChanged)=\"onSelectRowChanged(row, $event)\"\n        width=\"3\"></vgr-list-column-checkbox>\n    </vgr-list-item-header>\n    <vgr-list-item-content>\n      <span>Mer information</span>\n    </vgr-list-item-content>\n  </vgr-list-item>\n</vgr-list>\n<br>\n<p>Du har valt {{ getSelectedRows() }} rader</p>\n\n<vgr-modal id=\"notifyDeleteModal\">\n  <vgr-modal-header>Info</vgr-modal-header>\n  <vgr-modal-content>\n    <p>Du tog bort detta objektet {{removedObjectString}}</p>\n  </vgr-modal-content>\n  <vgr-modal-footer>\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('notifyDeleteModal')\">St\u00E4ng</vgr-button>\n  </vgr-modal-footer>\n</vgr-modal>\n<vgr-modal id=\"removeRowModal\">\n  <vgr-modal-header>Ta bort raden</vgr-modal-header>\n  <vgr-modal-content>\n    <p>Vill du verkligen ta bort {{!rowToRemove || rowToRemove.previewObject.firstName}}?</p>\n  </vgr-modal-content>\n  <vgr-modal-footer>\n    <vgr-button (click)=\"removeSelectedRow()\">Ja</vgr-button>\n    <vgr-button (click)=\"closeModal('removeRowModal')\">Nej</vgr-button>\n  </vgr-modal-footer>\n</vgr-modal>\n";
        this.typeScriptActionButtonsListMarkup = "import { Component } from '@angular/core';\n    import { HtmlEncodeService } from '../../../html-encode.service';\n    import { Examples } from '../examples';\n    import {\n        ModalService, ExpandableRow,\n        SortDirection, SortChangedArgs\n    } from 'vgr-komponentkartan/';\n\n    @Component({\n        selector: 'app-listexamplewithactionbuttons',\n        templateUrl: './listexamplewithactionbuttons.component.html',\n        styleUrls: ['./listexamplewithactionbuttons.component.scss']\n    })\n    export class ListExampleWithActionButtonsComponent {\n\n        public peopleRows: ExpandableRow<ExamplePerson, any>[];\n\n        createExampleList(): ExpandableRow<ExamplePerson, any>[] {\n            return [\n                new ExpandableRow<ExamplePerson, any>({ id: '1', firstName: 'Git', lastName: 'Hubsson', amount: 125000 }),\n                new ExpandableRow<ExamplePerson, any>({ id: '2', firstName: 'Adam', lastName: 'Lind', amount: 235000 }),\n                new ExpandableRow<ExamplePerson, any>({ id: '3', firstName: 'Bjarne', lastName: 'Chi', amount: 25000 }),\n                new ExpandableRow<ExamplePerson, any>({ id: '4', firstName: 'Carola', lastName: 'Bengtsson', amount: 720000 }),\n                new ExpandableRow<ExamplePerson, any>({ id: '5', firstName: 'Erik', lastName: 'Karlsson', amount: 401200 }),\n            ];\n        }\n\n        get allChecked() {\n            return this.peopleRows && !this.peopleRows.filter(r => !r.previewObject.deleted).find(x => !x.previewObject.selected);\n        }\n\n        loadData() {\n            this.peopleRows = this.createExampleList();\n        }\n\n        onSelectRowChanged(row: any, checked: boolean) {\n            row.previewObject.selected = checked;\n        }\n\n        onSelectAllChanged(checked: boolean) {\n            if (this.peopleRows) {\n                this.peopleRows.filter(r => !r.previewObject.deleted).forEach(x => x.previewObject.selected = checked);\n            }\n        }\n\n        onDeleteRow(row: any) {\n            this.removeRow(row);\n        }\n\n        notifyOnDelete(row: any) {\n          this.removedObjectString = JSON.stringify(row);\n          this.peopleRows = this.peopleRows.filter(i => i !== row);\n          this.modalService.openDialog('notifyDeleteModal');\n        }\n\n        removeRow(row: ExpandableRow<ExamplePerson, any>) {\n            this.rowToRemove = row;\n            this.modalService.openDialog('removeRowModal');\n        }\n\n        removeSelectedRow() {\n            this.rowToRemove.notifyOnRemove(this.rowToRemove.previewObject.firstName + ' togs bort', 'vgr-icon-ok-check');\n            this.rowToRemove.previewObject.selected = false;\n            this.rowToRemove.previewObject.deleted = true;\n            /*\n              Remove for real...\n            */\n            this.modalService.closeDialog('removeRowModal');\n        }\n\n        getSelectedRows(): number {\n            return this.peopleRows && this.peopleRows.filter(r => r.previewObject.selected).length;\n        }\n\n        closeModal(modalId: string) {\n          this.modalService.closeDialog(modalId);\n        }\n\n        onSortChanged(event: SortChangedArgs) {\n\n            if (event.key === 'selected') {\n                if (event.direction === SortDirection.Ascending) {\n                    this.peopleRows = this.peopleRows.sort(function (x, y) {\n                        return (x.previewObject.selected === y.previewObject.selected) ? 0 : x.previewObject.selected ? -1 : 1;\n                    });\n                } else {\n                    this.peopleRows = this.peopleRows.sort(function (x, y) {\n                        return (x.previewObject.selected === y.previewObject.selected) ? 0 : y.previewObject.selected ? -1 : 1;\n                    });\n                }\n            } else {\n                this.peopleRows = this.peopleRows.sort((row1, row2) => {\n                    return row1.previewObject[event.key] > row2.previewObject[event.key] ?\n                        (event.direction === SortDirection.Ascending ? 1 : -1) :\n                        row1.previewObject[event.key] < row2.previewObject[event.key] ?\n                            (event.direction === SortDirection.Ascending ? -1 : 1) : 0;\n                });\n            }\n        }\n\n\n        constructor(private modalService: ModalService) {}\n\n    }\n\n    export interface ExamplePerson {\n        id: string;\n        firstName: string;\n        lastName: string;\n        amount: number;\n        selected?: boolean;\n        deleted?: boolean;\n    }\n\n    ";
        this.htmlListNotificationMarkup = "\n      <vgr-list [flexibleHeader]=\"true\" [allowMultipleExpandedItems]=\"false\" [notification]=\"listNotification\">\n        <vgr-list-header>\n          <vgr-list-column-header [width]=\"10\" [sortKey]=\"'firstName'\" >F\u00F6rnamn</vgr-list-column-header>\n          <vgr-list-column-header [width]=\"10\" [sortKey]=\"'lastName'\">Efternamn</vgr-list-column-header>\n        </vgr-list-header>\n      </vgr-list>\n    ";
        this.typescriptListNotificationMarkup = "\n    import { Component, OnInit } from '@angular/core';\n    import {\n      ExpandableRow, RowNotification, NotificationType, ModalService,\n      SortChangedArgs, ListHeaderComponent, SortDirection, Notification\n    } from 'vgr-komponentkartan';\n    import { Examples } from '../examples';\n    import { HtmlEncodeService } from '../../../html-encode.service';\n\n    @Component({\n      selector: 'app-listexample',\n      templateUrl: './listexample.component.html',\n      styleUrls: ['./listexample.component.scss']\n    })\n    export class ListexampleComponent {\n      typeScriptAdvancedListMarkup: string;\n      htmlAdvancedListMarkup: string;\n      examples: Examples = new Examples();\n      panelNotification: RowNotification;\n      listNotification: Notification;\n\n      constructor(htmlEncoder: HtmlEncodeService) {\n        this.typeScriptAdvancedListMarkup =\n          htmlEncoder.prepareHighlightedSection(this.examples.typeScriptAdvancedListMarkup, 'typescript');\n        this.htmlAdvancedListMarkup =\n          htmlEncoder.prepareHighlightedSection(this.examples.htmlListNotificationMarkup);\n\n        this.listNotification = {\n          message: 'H\u00E4r \u00E4r ett exempel p\u00E5 en list-notifikation. De kan anv\u00E4ndas om det t.ex. blir n\u00E5got fel n\u00E4r man h\u00E4mtar datan fr\u00E5n servicen.',\n          icon: 'vgr-icon-exclamation--red'\n        };\n\n      }\n    }\n    ";
    }
    return Examples;
}());



/***/ }),

/***/ "./src/app/lists/examples/simple/listcodeexample.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/lists/examples/simple/listcodeexample.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Kodexempel enkel lista'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h2>Enkel lista</h2>\r\n      <p>Här har vi exempel på en enkel lista med endast sortering implementerat och innehåll när man expanderar en rad. Observera\r\n        även bredden på kolumnerna är satta. För att se dokumentationen på komponenten, klicka\r\n        <a href=\"/lists\">här.</a>\r\n      </p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <vgr-list [flexibleHeader]=\"true\" (sortChanged)=\"onSortChanged($event)\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"firstName\" [sortDirection]=\"sortDirections.Ascending\">Förnamn</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"lastName\">Efternamn</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"occupation\">Yrke</vgr-list-column-header>\r\n          <vgr-list-column-header align=\"right\" width=\"5\" sortKey=\"income\">Inkomst</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item *ngFor=\"let row of peopleRowsSimpleList\">\r\n          <vgr-list-item-header>\r\n            <vgr-list-column width=\"5\"><span title=\"Detta är ett förnamn\">{{row.firstName}}</span></vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.lastName}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.occupation}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\" align=\"right\">{{row.income| number:'2.2-2':'sv-SE'}}</vgr-list-column>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <span>Förnamn: {{row.firstName}}</span>\r\n            <br>\r\n            <span>Efternamn: {{row.lastName}}</span>\r\n            <br>\r\n            <span>Yrke: {{row.occupation}}</span>\r\n            <br>\r\n            <span>Inkomst: {{row.income | currency : 'SEK'}}</span>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML</h3>\r\n        <section [innerHTML]=\"htmlSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <br>\r\n      <div>\r\n        <h3>Typescript</h3>\r\n        <section [innerHTML]=\"typeScriptSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/lists/examples/simple/listcodeexample.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/lists/examples/simple/listcodeexample.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/examples/simple/listcodeexample.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lists/examples/simple/listcodeexample.component.ts ***!
  \********************************************************************/
/*! exports provided: ListcodeexampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcodeexampleComponent", function() { return ListcodeexampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../examples */ "./src/app/lists/examples/examples.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListcodeexampleComponent = /** @class */ (function () {
    function ListcodeexampleComponent(htmlEncoder) {
        this.sortDirections = vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"]; // Fix för att kunna använda sig utav enum.
        this.examples = new _examples__WEBPACK_IMPORTED_MODULE_3__["Examples"]();
        this.typeScriptSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptSimpleListMarkup, 'typescript');
        this.htmlSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmltSimpleListMarkup);
    }
    ListcodeexampleComponent.prototype.onSortChanged = function (event) {
        this.peopleRowsSimpleList = this.peopleRowsSimpleList.sort(function (row1, row2) {
            return row1[event.key] > row2[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? 1 : -1) :
                row1[event.key] < row2[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? -1 : 1) : 0;
        });
    };
    ListcodeexampleComponent.prototype.ngOnInit = function () {
        this.initExampleData();
    };
    ListcodeexampleComponent.prototype.initExampleData = function () {
        this.peopleRowsSimpleList = [
            { id: '1', firstName: 'Git', lastName: 'Hubsson', occupation: 'Ninja codewarrior', income: 300000 },
            { id: '2', firstName: 'Stud', lastName: 'Visualizer', occupation: 'Black Dragon', income: 450000 },
            { id: '3', firstName: 'See', lastName: 'Charper', occupation: 'Chrome wizard', income: 230000 },
            { id: '3', firstName: 'IT-Lasse', lastName: 'Andersson', occupation: 'Data', income: 600000 }
        ];
    };
    ListcodeexampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listcodeexample',
            template: __webpack_require__(/*! ./listcodeexample.component.html */ "./src/app/lists/examples/simple/listcodeexample.component.html"),
            styles: [__webpack_require__(/*! ./listcodeexample.component.scss */ "./src/app/lists/examples/simple/listcodeexample.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_2__["HtmlEncodeService"]])
    ], ListcodeexampleComponent);
    return ListcodeexampleComponent;
}());



/***/ }),

/***/ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Kodexempel enkel lista'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h2>Lista med papperskorg och checkbox</h2>\r\n        <p>Här har vi exempel på en lista med kolumner för papperskorg och checkbox. I listan visas vänstersortering -\r\n          <code>align=\"left\"</code>, högerjustering -\r\n          <code>align=\"right\"</code> samt centerjustering -\r\n          <code>align=\"center\"</code>. För att se dokumentationen på komponenten, klicka\r\n          <a href=\"/lists\">här.</a>\r\n        </p>\r\n        <br>\r\n        <vgr-button (click)=\"loadData()\">Ladda data</vgr-button>\r\n      </div>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <vgr-list [flexibleHeader]=\"true\" (sortChanged)=\"onSortChanged($event)\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header width=\"8\" sortKey=\"firstName\">Förnamn</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"lastName\">Efternamn</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"3\" align=\"right\" sortKey=\"amount\">Årsbelopp</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"1\"></vgr-list-column-header>\r\n          <vgr-list-column-header-checkbox width=\"3\" text=\"Markera alla\" [checked]=\"allChecked\" (checkedChanged)=\"onSelectAllChanged($event)\"></vgr-list-column-header-checkbox>\r\n        </vgr-list-header>\r\n        <vgr-list-item *ngFor=\"let row of peopleRows\" [notification]=\"row.notification\" (deleted)=\"notifyOnDelete(row)\">\r\n          <vgr-list-item-header>\r\n            <vgr-list-column width=\"8\">{{row.previewObject.firstName}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.previewObject.lastName}}</vgr-list-column>\r\n            <vgr-list-column width=\"3\" align=\"right\">{{row.previewObject.amount | number:'2.2-2':'sv'}}</vgr-list-column>\r\n            <vgr-list-column-trashcan [disabled]=\"row.previewObject.deleted\" (delete)=\"onDeleteRow(row)\" width=\"1\"></vgr-list-column-trashcan>\r\n            <vgr-list-column-checkbox [disabled]=\"row.previewObject.deleted\" [checked]=\"row.previewObject.selected\" (checkedChanged)=\"onSelectRowChanged(row, $event)\"\r\n              width=\"3\"></vgr-list-column-checkbox>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <span>Mer information</span>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n      <br>\r\n      <p>Du har valt {{ getSelectedRows() }} rader</p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML</h3>\r\n        <section [innerHTML]=\"htmlSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <br>\r\n      <div>\r\n        <h3>Typescript</h3>\r\n        <section [innerHTML]=\"typeScriptSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <br>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n<vgr-modal id=\"notifyDeleteModal\">\r\n  <vgr-modal-header>Info</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Du tog bort detta objektet {{removedObjectString}}</p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('notifyDeleteModal')\">Stäng</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"removeRowModal\">\r\n  <vgr-modal-header>Ta bort raden</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p *ngIf=\"rowToRemove\">Vill du verkligen ta bort {{rowToRemove.previewObject.firstName}}?</p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button (click)=\"removeSelectedRow()\">Ja</vgr-button>\r\n    <vgr-button (click)=\"closeModal('removeRowModal')\">Nej</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n"

/***/ }),

/***/ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ListExampleWithActionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExampleWithActionButtonsComponent", function() { return ListExampleWithActionButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examples */ "./src/app/lists/examples/examples.ts");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListExampleWithActionButtonsComponent = /** @class */ (function () {
    function ListExampleWithActionButtonsComponent(htmlEncoder, modalService) {
        this.modalService = modalService;
        this.examples = new _examples__WEBPACK_IMPORTED_MODULE_2__["Examples"]();
        this.typeScriptSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptActionButtonsListMarkup, 'typescript');
        this.htmlSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlActionButtonsListMarkup);
    }
    Object.defineProperty(ListExampleWithActionButtonsComponent.prototype, "allChecked", {
        get: function () {
            return this.peopleRows && !this.peopleRows.filter(function (r) { return !r.previewObject.deleted; }).find(function (x) { return !x.previewObject.selected; });
        },
        enumerable: true,
        configurable: true
    });
    ListExampleWithActionButtonsComponent.prototype.loadData = function () {
        this.peopleRows = [
            new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["ExpandableRow"]({ id: '1', firstName: 'Git', lastName: 'Hubsson', amount: 125000 }),
            new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["ExpandableRow"]({ id: '2', firstName: 'Adam', lastName: 'Lind', amount: 235000 }),
            new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["ExpandableRow"]({ id: '3', firstName: 'Bjarne', lastName: 'Chi', amount: 25000 }),
            new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["ExpandableRow"]({ id: '4', firstName: 'Carola', lastName: 'Bengtsson', amount: 720000 }),
            new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["ExpandableRow"]({ id: '5', firstName: 'Erik', lastName: 'Karlsson', amount: 401200 }),
        ];
    };
    ListExampleWithActionButtonsComponent.prototype.onSelectRowChanged = function (row, checked) {
        row.previewObject.selected = checked;
    };
    ListExampleWithActionButtonsComponent.prototype.onSelectAllChanged = function (checked) {
        if (this.peopleRows) {
            this.peopleRows.filter(function (r) { return !r.previewObject.deleted; }).forEach(function (x) { return x.previewObject.selected = checked; });
        }
    };
    ListExampleWithActionButtonsComponent.prototype.onDeleteRow = function (row) {
        this.removeRow(row);
    };
    ListExampleWithActionButtonsComponent.prototype.notifyOnDelete = function (row) {
        this.removedObjectString = JSON.stringify(row, null, '\t');
        this.peopleRows = this.peopleRows.filter(function (i) { return i !== row; });
        this.modalService.openDialog('notifyDeleteModal');
    };
    ListExampleWithActionButtonsComponent.prototype.removeRow = function (row) {
        this.rowToRemove = row;
        this.modalService.openDialog('removeRowModal');
    };
    ListExampleWithActionButtonsComponent.prototype.getSelectedRows = function () {
        if (!this.peopleRows) {
            return 0;
        }
        else {
            return this.peopleRows && this.peopleRows.filter(function (r) { return r.previewObject.selected; }).length;
        }
    };
    ListExampleWithActionButtonsComponent.prototype.removeSelectedRow = function () {
        this.rowToRemove.notifyOnRemove(this.rowToRemove.previewObject.firstName + ' togs bort', 'vgr-icon-ok-check');
        this.rowToRemove.previewObject.selected = false;
        this.rowToRemove.previewObject.deleted = true;
        /*
          Remove for real...
        */
        this.modalService.closeDialog('removeRowModal');
    };
    ListExampleWithActionButtonsComponent.prototype.onSortChanged = function (event) {
        if (event.key === 'selected') {
            if (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].Ascending) {
                this.peopleRows = this.peopleRows.sort(function (x, y) {
                    return (x.previewObject.selected === y.previewObject.selected) ? 0 : x.previewObject.selected ? -1 : 1;
                });
            }
            else {
                this.peopleRows = this.peopleRows.sort(function (x, y) {
                    return (x.previewObject.selected === y.previewObject.selected) ? 0 : y.previewObject.selected ? -1 : 1;
                });
            }
        }
        else {
            this.peopleRows = this.peopleRows.sort(function (row1, row2) {
                return row1.previewObject[event.key] > row2.previewObject[event.key] ?
                    (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].Ascending ? 1 : -1) :
                    row1.previewObject[event.key] < row2.previewObject[event.key] ?
                        (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].Ascending ? -1 : 1) : 0;
            });
        }
    };
    ListExampleWithActionButtonsComponent.prototype.closeModal = function (modalId) {
        this.modalService.closeDialog(modalId);
    };
    ListExampleWithActionButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listexamplewithactionbuttons',
            template: __webpack_require__(/*! ./listexamplewithactionbuttons.component.html */ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.html"),
            styles: [__webpack_require__(/*! ./listexamplewithactionbuttons.component.scss */ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"], vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], ListExampleWithActionButtonsComponent);
    return ListExampleWithActionButtonsComponent;
}());



/***/ }),

/***/ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Kodexempel lista med expandable div'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h2>Lista med expandable divs</h2>\r\n      <p>Här har vi exempel på en lista med endast sortering implementerat och innehåll som ligger i en expandible div när man\r\n        expanderar en rad. Observera även bredden på kolumnerna är satta. För att se dokumentationen på vgr-list, klicka\r\n        <a href=\"/lists\">här</a> och för expandable div, klicka\r\n        <a href=\"/expandablediv\">här.</a>\r\n      </p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <vgr-list [flexibleHeader]=\"true\" (sortChanged)=\"onSortChanged($event)\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"firstName\" [sortDirection]=\"sortDirections.Ascending\">Förnamn</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"lastName\">Efternamn</vgr-list-column-header>\r\n          <vgr-list-column-header width=\"5\" sortKey=\"occupation\">Yrke</vgr-list-column-header>\r\n          <vgr-list-column-header align=\"right\" width=\"5\" sortKey=\"income\">Inkomst</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item *ngFor=\"let row of peopleRowsSimpleList\">\r\n          <vgr-list-item-header>\r\n            <vgr-list-column width=\"5\">{{row.firstName}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.lastName}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\">{{row.occupation}}</vgr-list-column>\r\n            <vgr-list-column width=\"5\" align=\"right\">{{row.income | number:'2.2-2':'sv-SE'}}</vgr-list-column>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content [indentContent]=\"false\">\r\n            <vgr-expandable-div *ngFor=\"let row of row.children\" [expanded]=\"false\">\r\n              <vgr-expandable-div-header>\r\n                <h2>Barn</h2>\r\n              </vgr-expandable-div-header>\r\n              <vgr-expandable-div-content>\r\n                <span>Förnamn: {{row.firstName}}</span>\r\n                <br>\r\n                <span>Efternamn: {{row.lastName}}</span>\r\n              </vgr-expandable-div-content>\r\n            </vgr-expandable-div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML</h3>\r\n        <section [innerHTML]=\"htmlSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <br>\r\n      <div>\r\n        <h3>Typescript</h3>\r\n        <section [innerHTML]=\"typeScriptSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ListexamplewithexpandabledivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListexamplewithexpandabledivComponent", function() { return ListexamplewithexpandabledivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../examples */ "./src/app/lists/examples/examples.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListexamplewithexpandabledivComponent = /** @class */ (function () {
    function ListexamplewithexpandabledivComponent(htmlEncoder) {
        this.sortDirections = vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"]; // Fix för att kunna använda sig utav enum.
        this.examples = new _examples__WEBPACK_IMPORTED_MODULE_3__["Examples"]();
        this.typeScriptSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptListWithExpandableDiv, 'typescript');
        this.htmlSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlListWithExpandableDiv);
    }
    ListexamplewithexpandabledivComponent.prototype.onSortChanged = function (event) {
        this.peopleRowsSimpleList = this.peopleRowsSimpleList.sort(function (row1, row2) {
            return row1[event.key] > row2[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? 1 : -1) :
                row1[event.key] < row2[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? -1 : 1) : 0;
        });
    };
    ListexamplewithexpandabledivComponent.prototype.ngOnInit = function () {
        this.initExampleData();
    };
    ListexamplewithexpandabledivComponent.prototype.initExampleData = function () {
        this.peopleRowsSimpleList = [
            {
                id: '1', firstName: 'Git', lastName: 'Hubsson', occupation: 'Ninja codewarrior', income: 300000,
                children: [{ firstName: 'Lena', lastName: 'Hubsson' },
                    { firstName: 'Signe', lastName: 'Hubsson' }]
            },
            {
                id: '2', firstName: 'Stud', lastName: 'Visualizer', occupation: 'Black Dragon', income: 450000, children: [{ firstName: 'Kalle', lastName: 'Visualizer' },
                    { firstName: 'Oskar', lastName: 'Visualizer' }]
            },
            {
                id: '3', firstName: 'See', lastName: 'Charper', occupation: 'Chrome wizard', income: 230000, children: [{ firstName: 'Eva', lastName: 'Charper' },
                    { firstName: 'Lars', lastName: 'Charper' }]
            },
            {
                id: '3', firstName: 'IT-Lasse', lastName: 'Andersson', occupation: 'Data', income: 600000, children: [{ firstName: 'Siv', lastName: 'Andersson' },
                    { firstName: 'Erik', lastName: 'Andersson' }]
            }
        ];
    };
    ListexamplewithexpandabledivComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listexamplewithexpandablediv',
            template: __webpack_require__(/*! ./listexamplewithexpandablediv.component.html */ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.html"),
            styles: [__webpack_require__(/*! ./listexamplewithexpandablediv.component.scss */ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_2__["HtmlEncodeService"]])
    ], ListexamplewithexpandabledivComponent);
    return ListexamplewithexpandabledivComponent;
}());



/***/ }),

/***/ "./src/app/lists/examples/withnotification/listexample.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/lists/examples/withnotification/listexample.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Kodexempel lista med notifiering'\"></vgr-page-header>\r\n\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h2>Lista med notifiering</h2>\r\n      <p>Här har vi exempel på en lista med notifiering. För att se dokumentationen på\r\n        komponenten, klicka\r\n        <a href=\"/lists\">här.</a>\r\n      </p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <vgr-list [flexibleHeader]=\"true\" [allowMultipleExpandedItems]=\"false\" [notification]=\"listNotification\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header [width]=\"10\" [sortKey]=\"'firstName'\">Förnamn</vgr-list-column-header>\r\n          <vgr-list-column-header [width]=\"10\" [sortKey]=\"'lastName'\">Efternamn</vgr-list-column-header>\r\n        </vgr-list-header>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML</h3>\r\n        <section [innerHTML]=\"htmlAdvancedListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <br>\r\n      <div>\r\n        <h3>Typescript</h3>\r\n        <section [innerHTML]=\"typeScriptAdvancedListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/lists/examples/withnotification/listexample.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/lists/examples/withnotification/listexample.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/examples/withnotification/listexample.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/lists/examples/withnotification/listexample.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListexampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListexampleComponent", function() { return ListexampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examples */ "./src/app/lists/examples/examples.ts");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListexampleComponent = /** @class */ (function () {
    function ListexampleComponent(htmlEncoder) {
        this.examples = new _examples__WEBPACK_IMPORTED_MODULE_1__["Examples"]();
        this.typeScriptAdvancedListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typescriptListNotificationMarkup, 'typescript');
        this.htmlAdvancedListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlListNotificationMarkup);
        this.listNotification = {
            message: 'Här är ett exempel på en list-notifikation. De kan användas om det t.ex. blir något fel när man hämtar datan från servicen.',
            icon: 'vgr-icon-exclamation--red'
        };
    }
    ListexampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listexample',
            template: __webpack_require__(/*! ./listexample.component.html */ "./src/app/lists/examples/withnotification/listexample.component.html"),
            styles: [__webpack_require__(/*! ./listexample.component.scss */ "./src/app/lists/examples/withnotification/listexample.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_2__["HtmlEncodeService"]])
    ], ListexampleComponent);
    return ListexampleComponent;
}());



/***/ }),

/***/ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Kodexempel lista med notifieringar'\">\r\n\r\n    <vgr-button (click)=\"actionsVisible = true\">Öppna panel</vgr-button>\r\n  </vgr-page-header>\r\n  <vgr-action-panel [expanded]=\"actionsVisible\" [title]=\"'Action-panel'\" [notification]=\"panelNotification\">\r\n\r\n    <vgr-card>\r\n      <vgr-card-header>\r\n        <div class=\"flex-right\">\r\n          <vgr-button [secondary]=\"true\" (click)=\"actionsVisible=false\">Stäng</vgr-button>\r\n        </div>\r\n      </vgr-card-header>\r\n      <vgr-card-column>\r\n        <vgr-card-section [title]=\" 'Information' \" expanded=\"true\" [readonly]=\"readonly\">\r\n          <vgr-title-value-layout>\r\n            <vgr-title-value [title]=\" 'Id' \" [slim]=\"readonly\">\r\n              <span>123456789-1234-546</span>\r\n            </vgr-title-value>\r\n            <vgr-title-value title=\"Kod* \" [slim]=\"readonly\">\r\n              <vgr-input></vgr-input>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Nämnd*' \" [slim]=\"readonly\">\r\n              <vgr-dropdown [values]=\"['Nämnd 1', 'Nämnd 2', 'Nämnd 3', 'Nämnd 4', 'Nämnd 5', 'Nämnd 6', 'Nämnd 7']\" [noItemSelectedLabel]=\" 'Välj nämnd' \"></vgr-dropdown>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Datum*' \" [slim]=\"readonly\">\r\n              <div class=\"row-layout \">\r\n                <vgr-monthpicker></vgr-monthpicker>\r\n                <vgr-monthpicker></vgr-monthpicker>\r\n              </div>\r\n            </vgr-title-value>\r\n          </vgr-title-value-layout>\r\n        </vgr-card-section>\r\n\r\n      </vgr-card-column>\r\n      <vgr-card-column>\r\n        <vgr-card-section [title]=\" 'Ersättningsgrundande information' \" [readonly]=\"readonly \" [expanded]=\"false \">\r\n          <vgr-title-value-layout>\r\n            <vgr-title-value [title]=\" 'Medverkan i familjecentral' \" [slim]=\"readonly\">\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\" 'Regionsövergripande grupper (kr/månad)' \" [slim]=\"readonly\">\r\n              <vgr-input></vgr-input>\r\n            </vgr-title-value>\r\n          </vgr-title-value-layout>\r\n        </vgr-card-section>\r\n      </vgr-card-column>\r\n    </vgr-card>\r\n\r\n  </vgr-action-panel>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h2>Lista med notifieringar</h2>\r\n      <p>Här har vi exempel på en lista med notifieringar. även bredden på kolumnerna är satta. För att se dokumentationen på\r\n        komponenten, klicka\r\n        <a href=\"/lists\">här.</a>\r\n      </p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <vgr-list [flexibleHeader]=\"true\" [allowMultipleExpandedItems]=\"false\" (sortChanged)=\"onSortChanged($event)\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header [width]=\"10\" [sortKey]=\"'firstName'\" [sortDirection]=\"sortDirections.Ascending\">Förnamn</vgr-list-column-header>\r\n          <vgr-list-column-header [width]=\"10\" [sortKey]=\"'lastName'\">Efternamn</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item *ngFor=\"let row of peopleRows\" [notification]=\"row.notification\" [expanded]=\"row.expanded\">\r\n          <vgr-list-item-header>\r\n            <vgr-list-column [width]=\"10\">{{row.previewObject.firstName}}</vgr-list-column>\r\n            <vgr-list-column [width]=\"10\">{{row.previewObject.lastName}}</vgr-list-column>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <vgr-button [secondary]=\"true\" (click)=\"updateRow(row)\">Uppdatera</vgr-button>\r\n            <vgr-button [secondary]=\"true\" (click)=\"updateRow2(row)\">Uppdatera och rensa meddelande</vgr-button>\r\n            <vgr-button [secondary]=\"true\" (click)=\"deleteRow(row)\">Ta bort</vgr-button>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML</h3>\r\n        <section [innerHTML]=\"htmlAdvancedListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n      <br>\r\n      <div>\r\n        <h3>Typescript</h3>\r\n        <section [innerHTML]=\"typeScriptAdvancedListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListexamplewithrownotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListexamplewithrownotificationComponent", function() { return ListexamplewithrownotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examples */ "./src/app/lists/examples/examples.ts");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListexamplewithrownotificationComponent = /** @class */ (function () {
    function ListexamplewithrownotificationComponent(htmlEncoder) {
        this.sortDirections = vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"];
        this.examples = new _examples__WEBPACK_IMPORTED_MODULE_2__["Examples"]();
        this.readOnly = true;
        this.typeScriptAdvancedListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptAdvancedListMarkup, 'typescript');
        this.htmlAdvancedListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlAdvancedListMarkup);
        this.panelNotification = {
            message: 'Panelinformation', icon: 'vgr-icon-message',
            type: vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Permanent
        };
        this.examplePeople = [
            { id: '1', firstName: 'Adam', lastName: 'Andersson' },
            { id: '2', firstName: 'Bjarne', lastName: 'Bengtsson' },
            { id: '3', firstName: 'Carola', lastName: 'Claesson' },
            { id: '4', firstName: 'Daniella', lastName: 'Di Maria Marquez ' },
            { id: '5', firstName: 'Erik', lastName: '' },
        ];
        this.peopleRows = this.examplePeople.map(function (x) { return new vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["ExpandableRow"](x); });
        this.peopleRows[0].setNotification('Meddelande: Text', 'vgr-icon-message');
        this.peopleRows[4].setNotification('Personen är inaktiv', 'vgr-icon-exclamation--red');
    }
    ListexamplewithrownotificationComponent.prototype.deleteRow = function (row) {
        // Remove visually.
        row.notifyOnRemove(row.previewObject.firstName + ' togs bort och kommer inte längre att kunna logga in', 'vgr-icon-ok-check');
        /*
         Remove for real...
        */
    };
    ListexamplewithrownotificationComponent.prototype.updateRow = function (row) {
        row.notifyOnCollapse(row.previewObject.firstName + ' sparades', 'vgr-icon-ok-check-green');
    };
    ListexamplewithrownotificationComponent.prototype.updateRow2 = function (row) {
        row.notifyOnCollapse(row.previewObject.firstName + ' sparades', 'vgr-icon-ok-check-green', true);
    };
    ListexamplewithrownotificationComponent.prototype.onSortChanged = function (event) {
        this.peopleRows = this.peopleRows.sort(function (row1, row2) {
            return row1.previewObject[event.key] > row2.previewObject[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? 1 : -1) :
                row1.previewObject[event.key] < row2.previewObject[event.key] ? (event.direction === vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Ascending ? -1 : 1) : 0;
        });
    };
    ListexamplewithrownotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listexample',
            template: __webpack_require__(/*! ./listexamplewithrownotification.component.html */ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.html"),
            styles: [__webpack_require__(/*! ./listexamplewithrownotification.component.scss */ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_3__["HtmlEncodeService"]])
    ], ListexamplewithrownotificationComponent);
    return ListexamplewithrownotificationComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page class=\"no-sort\">\r\n  <vgr-page-header [title]=\"'List'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list [allowMultipleExpandedItems]=\"true\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header [width]=\"20\">Dokumentation för list</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item [expanded]=\"true\">\r\n          <vgr-list-item-header>\r\n            <h4>Översikt</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"content-overview\">\r\n              <p>\r\n                <code>&lt;vgr-list&gt;</code> är en lista bestående av\r\n                <code>&lt;vgr-list-item&gt;</code>. En lista med header och expanderbara rader, som används till ex. listor av\r\n                kort. Rubrikraden är fast positionerad och kan inte scrollas bort.\r\n              </p>\r\n              <br>\r\n              <p> Förändras med tema:\r\n                <strong>nej</strong>\r\n              </p>\r\n            </div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel</h4>\r\n          </vgr-list-item-header>\r\n\r\n\r\n          <vgr-list-item-content>\r\n            <section [innerHTML]=\"htmlBasicListStructureMarkup\" highlight-js-content=\".highlight\"></section>\r\n            <br> Under \"kodexempel\" finns flera exempel på listor:\r\n            <br>\r\n            <a href=\"/listexample-simple\">Enkel lista</a>\r\n            <br>\r\n            <a href=\"/listexample-notifications\">Lista med notifieringar</a>\r\n            <br>\r\n\r\n            <a href=\"/listexample-actionbuttons\">Lista med checkbox och papperskorg</a>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>allowMultipleExpandedItems : boolean</td>\r\n                <td>Om flera rader skall kunna vara expanderade samtidigt, default är false.</td>\r\n                <td>[allowMultipleExpandedItems]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>flexibleHeader : boolean</td>\r\n                <td>Kan man sätta om headern skall följa med i scrollningen, default är false.</td>\r\n                <td>[flexibleHeader]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>notification : Notification</td>\r\n                <td>Sätter man om man vill visa en notifiering, t.ex. när listan ej kan laddas, default visas inget meddelande.</td>\r\n                <td>[notification]=\"{{'{'}} message: 'Här är texten i notifikationen', icon: 'vgr-icon-message'{{'}'}}\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-item</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>expanded : boolean</td>\r\n                <td>Anger om raden skall vara expanderad eller inte.</td>\r\n                <td>[expanded]=\"false\"</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>notification : RowNotification</td>\r\n                <td>Ger möjligheten att lägga en notifiering på raden. En\r\n                  <code>RowNotification</code> har en icon property (string), removeWhenDone property (boolean) och en typ.\r\n                  <br>\r\n                  <i>-Icon</i> finns angivna på sidan för\r\n                  <a href=\"/icons\">ikoner</a>\r\n                  <br>\r\n                  <i>-RemoveWhenDone</i> anger om notifieringen ska försvinna efter kollapsanimationen för notifiering är klar.\r\n                  Default är att notifieringen som är permanent är kvar efter att en annan notifering visats.\r\n                  <br>\r\n                  <i>-Notification.Type</i> att välja på är:\r\n                  <code>NotificationType.Permanent</code>, visas i samband med att raden minimeras -\r\n                  <code>NotificationType.ShowOnCollapse</code> eller när raden tas bort -\r\n                  <code>NotificationType.ShowOnRemove</code>\r\n                </td>\r\n                <td>[notification]=\"{{'{'}} message: 'Personen är inaktiv', icon: 'vgr-icon-message', type: notificationTypes.Permanent{{'}'}}\"\r\n                  <strong>OBS!</strong> För att binda till enums i html, måste en rad till i .ts-filen som deklarerar enum som en\r\n                  property. T.ex:\r\n                  <code>notificationTypes = NotificationType</code>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>expandedChanged : EventEmitter&lt;boolean&gt;</td>\r\n                <td>Event som triggas när raden expanderar</td>\r\n                <td>(expandedChanged)=\"onExpandedChanged($event)\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>notificationChanged : EventEmitter&lt;RowNotification&gt;</td>\r\n                <td>Event som triggas när notifiering ändras</td>\r\n                <td>(notificationChanged)=\"onNotificationChanged($event)\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>deleted : EventEmitter&lt;any&gt;</td>\r\n                <td>Event som triggas när item har tagits bort (visuellt)</td>\r\n                <td>(deleted)=\"onDeleted()\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-item-header</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Behållare för att ange header-rubrik i ett list-item. Har inga properties.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-item-content</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n              </tr>\r\n              <tr>\r\n                <td>indentContent: boolean</td>\r\n                <td>Anger om innehållet ska vara indenterat eller inte. Default är true.</td>\r\n                <td>[indentContent]=\"false\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-column-header</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <p>Kan innehålla valfritt innehåll.</p>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>sortDirection : SortDirection</td>\r\n                <td>Anger åt vilket håll kolumnen sorteras vid initiering\r\n                  <code>SortDirection.None</code>, default - ingen sortering\r\n                  <code>SortDirection.Ascending</code> sortera stigande\r\n                  <code>SortDirection.Descending</code> sortera fallande\r\n                </td>\r\n                <td>[sortDirection]=\"sortDirection.Ascending\"\r\n                  <strong>OBS!</strong> För att binda till enums i html, måste en rad till i .ts-filen som deklarerar enum som en\r\n                  property. T.ex:\r\n                  <code>sortDirection = SortDirection</code>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>sortKey : string</td>\r\n                <td>Nyckel som används för att identifiera kolumnen vid sorteringsevent.</td>\r\n                <td>[sortKey]=\"'firstName'\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>width : number</td>\r\n                <td>vgr-list är baserad på en 20 kolumns layout. Varje kolumn måste ha en width satt och summan av width ska\r\n                  vara 20 för vgr-list.\r\n                </td>\r\n                <td>\r\n                  [width]=\"20\"\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>align : string</td>\r\n                <td>Man kan sätta en alignment på kolumnerna. Defaultvärde är left. Giltiga värden är right, left och center.\r\n                  <br>Om man sätter ett felaktigt värde så sätts defaultvärdet\r\n                </td>\r\n                <td>\r\n                  [align]=\"'right'\"\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>sortChanged : EventEmitter&lt;SortDirection&gt;</td>\r\n                <td>Event som triggas när sortering sker i kolumnen</td>\r\n                <td>(sortChanged)=\"onSortChanged($event)\"</td>\r\n              </tr>\r\n\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-column-header-checkbox</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            En variant av vgr-list-column-header som innehåller en checkbox.\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>disabled : boolean</td>\r\n                <td>Inaktiverar checkboxen, den blir utgråad.</td>\r\n                <td>[disabled]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>checked : boolean</td>\r\n                <td>Markerar checkboxen.</td>\r\n                <td>[checked]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>checkedChanged : EventEmitter&lt;boolean&gt;</td>\r\n                <td>Event som triggas då användaren trycker på checkboxen.</td>\r\n                <td>(checkedChanged)=\"onCheckChanged($event)\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-header</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            Innehåller ett antal vgr-list-column-header element och utför vissa åtgärder på dem.\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>sortChanged : EventEmitter&lt;SortChangedArgs&gt;</td>\r\n                <td>Event som triggas när sortering sker i någon av headerns kolumner</td>\r\n                <td>(sortChanged)=\"onSortChanged($event)\"</td>\r\n              </tr>\r\n\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-column</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <p>Kan innehålla valfritt innehåll.</p>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>width : number</td>\r\n                <td>vgr-list är baserad på en 20 kolumns layout. Varje kolumn måste ha en width satt och summan av width ska\r\n                  vara 20 för vgr-list.\r\n                </td>\r\n                <td>\r\n                  [width]=\"20\"\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>align : string</td>\r\n                <td>Man kan sätta en alignment på kolumnerna. Defaultvärde är left. Giltiga värden är right, left och center.\r\n                  <br>Om man sätter ett felaktigt värde så sätts defaultvärdet\r\n                </td>\r\n                <td>\r\n                  [align]=\"'right'\"\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-column-trashcan</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            En variant av vgr-list-column som innehåller en papperskorg.\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>disabled : boolean</td>\r\n                <td>Inaktiverar papperskorgen, den blir utgråad.</td>\r\n                <td>[disabled]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>delete : EventEmitter</td>\r\n                <td>Event som triggas då användaren trycker på papperskorgen.</td>\r\n                <td>(delete)=\"onDelete()\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-list-column-checkbox</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            En variant av vgr-list-column som innehåller en vgr-checkbox.\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>disabled : boolean</td>\r\n                <td>Inaktiverar checkboxen, den blir utgråad.</td>\r\n                <td>[disabled]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>checked : boolean</td>\r\n                <td>Markerar checkboxen.</td>\r\n                <td>[checked]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>checkedChanged : EventEmitter&lt;boolean&gt;</td>\r\n                <td>Event som triggas då användaren trycker på checkboxen.</td>\r\n                <td>(checkedChanged)=\"onCheckChanged($event)\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Tillgänglighet</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <p>\r\n              Navigering i listan:\r\n              <br>\r\n              <br> - Enter och Space: När fokus är på listradens header togglas listraden expanderad / kollapsad.\r\n              <br> - Nedåtpil: Om fokus ligger på en listrad flyttar fokus till raden nedanför. Om fokus ligger på den sista\r\n              raden flyttas fokus till den första raden.\r\n              <br> - Uppåtpil: Om fokus ligger på en listrad, flyttar fokus till raden ovanför. Om fokus ligger på första raden,\r\n              flyttas fokus till den sista raden.\r\n              <br> - Home: När fokus ligger på en listrad, flyttar fokus till första raden.\r\n              <br> - End: När fokus ligger på en rad flyttar fokus till sista raden.\r\n              <br> - Ctrl + Page Down: Om fokus ligger inuti en rad eller på en rad, flyttar fokus till nästa rad. Om fokus ligger\r\n              i den sista raden eller i raden, flytta fokus till första raden.\r\n              <br> - Ctrl + Page Up: Om fokus ligger inuti en rad flyttar fokus till huvudet för aktiv rad. Om fokus ligger på\r\n              en rad, flyttas fokus till föregående rad. Om fokus ligger på första raden, flytta fokus till sista raden.\r\n            </p>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/lists/lists.component.scss":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/examples */ "./src/app/lists/examples/examples.ts");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListsComponent = /** @class */ (function () {
    function ListsComponent(htmlEncoder) {
        this.examples = new _examples_examples__WEBPACK_IMPORTED_MODULE_1__["Examples"]();
        this.htmlBasicListStructureMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlBasicListStructureMarkup);
    }
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/lists/lists.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_2__["HtmlEncodeService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Loader'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-loader&gt;</code> används för att visa att en åtgärd pågår. Loader går alltid fulla varv innan stopp. Den\r\n      finns i två olika storlekar, den sätts av via\r\n      <code>small</code> och är default false.\r\n      <br>\r\n      <br>\r\n      <vgr-loader [active]=\"true\"></vgr-loader>\r\n    </p>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div class=\"row-layout\">\r\n      <div style=\"align-self:middle\">\r\n        <span>Stor storlek</span>\r\n        <vgr-loader [active]=\"actionInProgress\"></vgr-loader>\r\n      </div>\r\n      <div style=\"align-self:middle\">\r\n        <span>Liten storlek</span>\r\n        <vgr-loader [active]=\"actionInProgress\" [small]=\"true\"></vgr-loader>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div style=\"height:50px\">\r\n      <vgr-button (click)=\"actionInProgress=!actionInProgress\">{{buttonText}}</vgr-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table \">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>active : boolean</td>\r\n        <td>Anger om loader snurrar eller ej. Minsta tid som loader visas är 1 sekund. Inaktivering kan därför fördröjas.</td>\r\n        <td>[active]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>small : boolean</td>\r\n        <td>Visar loadern i liten storlek</td>\r\n        <td>[small]=\"true\"</td>\r\n      </tr>\r\n\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <i>Under utveckling</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.title = 'app';
        this.actionInProgress = false;
    }
    Object.defineProperty(LoaderComponent.prototype, "buttonText", {
        get: function () {
            if (!this.actionInProgress) {
                return 'Start';
            }
            else {
                return 'Stop';
            }
        },
        enumerable: true,
        configurable: true
    });
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-laddningssnurra',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html")
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/lockbutton/lockbutton.component.html":
/*!******************************************************!*\
  !*** ./src/app/lockbutton/lockbutton.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'lock button'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-lock-button&gt;</code>\r\n    </p>\r\n    <br>\r\n    <p>Låsknappen är en \"toggle-knapp\", som kan vara låst eller upplåst.\r\n\r\n    </p>\r\n    <div style=\"height:35px; margin-top:20px; margin-bottom:20px\">\r\n      <vgr-lock-button></vgr-lock-button>\r\n    </div>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong> (bakgrundsfärg)\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <vgr-lock-button (lockChanged)=\"lockMessage='Lås 1 ' + ($event ? 'låst':'upplåst')\"></vgr-lock-button>\r\n    <vgr-lock-button [locked]=\"false\" (lockChanged)=\"lockMessage='Lås 2 ' + ($event ? 'låst':'upplåst')\"></vgr-lock-button>\r\n    <vgr-lock-button [disabled]=\"true\"></vgr-lock-button>\r\n    <vgr-lock-button [disabled]=\"true\" [locked]=\"false\"></vgr-lock-button>\r\n    <br>\r\n    <br>\r\n    <span>Senaste händelse:&nbsp;\r\n      <strong>{{lockMessage}}</strong>\r\n    </span>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>locked : boolean</td>\r\n        <td>Om knappen ska vara låst eller upplåst. Default är true.</td>\r\n        <td>[locked]=\"false\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled : boolean</td>\r\n        <td>Om knappen ska vara inaktiverad.</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>onLockChanged : EventEmitter&lt;boolean&gt;</td>\r\n        <td>Event som triggas när knappen låses eller låses upp.\r\n          <code>true</code> innebär låst,\r\n          <code>false</code> upplåst.</td>\r\n        <td></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <code>&lt;vgr-lock-button &gt;</code> har en intern div vars roll är satt till button. Förutom rollen så används attributen:\r\n    aria-disabled (inaktiv/aktiv), aria-label (lås/lås upp). Läs mer om hur fokus ska flyttas efter knappaktivering på dokumentationssidan\r\n    för\r\n    <a href=\"../textbuttons\">buttons</a> under Tillgänglighet.\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/lockbutton/lockbutton.component.scss":
/*!******************************************************!*\
  !*** ./src/app/lockbutton/lockbutton.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lockbutton/lockbutton.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lockbutton/lockbutton.component.ts ***!
  \****************************************************/
/*! exports provided: LockbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockbuttonComponent", function() { return LockbuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockbuttonComponent = /** @class */ (function () {
    function LockbuttonComponent() {
    }
    LockbuttonComponent.prototype.ngOnInit = function () {
    };
    LockbuttonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lockbutton',
            template: __webpack_require__(/*! ./lockbutton.component.html */ "./src/app/lockbutton/lockbutton.component.html"),
            styles: [__webpack_require__(/*! ./lockbutton.component.scss */ "./src/app/lockbutton/lockbutton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockbuttonComponent);
    return LockbuttonComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page class=\"no-sort\">\r\n  <vgr-page-header [title]=\"'List'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list [allowMultipleExpandedItems]=\"true\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header [width]=\"20\">Dokumentation för menu</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item [expanded]=\"true\">\r\n          <vgr-list-item-header>\r\n            <h4>Översikt</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"content-overview\">\r\n              <p>\r\n                <code>&lt;vgr-menu&gt;</code> är en meny bestående av\r\n                <code>&lt;vgr-menu-item&gt;</code> och\r\n                <code>&lt;vgr-submenu&gt;</code>.\r\n                <br> Menyval kan grupperas med hjälp av\r\n                <code>&lt;vgr-menu-separator&gt;</code>.\r\n                <br> En\r\n                <code>&lt;vgr-menu&gt;</code> kan placeras i en\r\n                <code>&lt;vgr-sidebar-menu&gt;</code> för att placeras i en fixed position till vänster i applikationen.\r\n              </p>\r\n              <br>\r\n              <p> Förändras med tema:\r\n                <strong>ja</strong>\r\n              </p>\r\n            </div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"row-layout\">\r\n              <div class=\"menu-container\">\r\n                <vgr-menu title=\"Meny\">\r\n                  <vgr-menu-item link=\"#\" text=\"Menu item 1\"></vgr-menu-item>\r\n                  <vgr-menu-item link=\"#\" text=\"Menu item 2\"></vgr-menu-item>\r\n                  <vgr-menu-separator></vgr-menu-separator>\r\n                  <vgr-menu-item link=\"#\" text=\"Menu item 3 med extra långt namn\"></vgr-menu-item>\r\n                  <vgr-menu-item link=\"/menu\" text=\"Menu item 4\" notification=\"422\" notificationTooltip=\"Detta är en tooltip\" notificationColor=\"default\"></vgr-menu-item>\r\n                  <vgr-menu-item link=\"#\" text=\"Menu item 5\" [disabled]=\"!browserIsIE\" disabledTooltip=\"Endast tillgängligt i IE\"></vgr-menu-item>\r\n                  <vgr-menu-item link=\"#\" text=\"Menu item 6\" collapsable=\"true\"></vgr-menu-item>\r\n                  <vgr-menu-item link=\"/dummy\" text=\"Menu item 7\" [disabled]=\"true\" disabledTooltip=\"Alltid inaktivt\" notification=\"12\" notificationTooltip=\"Detta är ytterligare en tooltip\"\r\n                    notificationColor=\"error\"></vgr-menu-item>\r\n                  <vgr-menu-separator></vgr-menu-separator>\r\n                  <vgr-submenu text=\"Submenu\">\r\n                    <vgr-menu-item link=\"#\" text=\"Sub menu item 1\"></vgr-menu-item>\r\n                    <vgr-menu-item link=\"#\" text=\" Sub menu item 2 \"></vgr-menu-item>\r\n                    <vgr-menu-item link=\"# \" text=\"Sub menu item 3 \"></vgr-menu-item>\r\n                  </vgr-submenu>\r\n                </vgr-menu>\r\n              </div>\r\n              <div class=\"code-container\">\r\n                <h3>HTML</h3>\r\n                <section [innerHTML]=\"htmlMenuMarkup\" highlight-js-content=\".highlight\"></section>\r\n                <h3>Typescript</h3>\r\n                <section [innerHTML]=\"typeScriptMenuMarkup\" highlight-js-content=\".highlight\"></section>\r\n              </div>\r\n            </div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-menu</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>title : string</td>\r\n                <td>Sätter menyns titel.</td>\r\n                <td>[title]=\"Meny1\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-menu-item</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>text : string</td>\r\n                <td>Sätter namnet på menyvalet som kommer visas i menyn.</td>\r\n                <td>[text]=\"Menu item 1\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>link : string</td>\r\n                <td>Sätter länken till menynalternativet.</td>\r\n                <td>[link]=\"/start\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>disabled : boolean</td>\r\n                <td>Sätter om menyvalet ska vara inaktivt. Default är false.</td>\r\n                <td>[disabled]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>disabledTooltip : string</td>\r\n                <td>Sätter tooltip som visas vid inaktivt menyval.</td>\r\n                <td>[disabledTooltip]=\"Detta alternativ är inte tillgängligt i denna webbläsare\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>notification : string</td>\r\n                <td>Sätter notifieringstext. Om texten är längre än 2 tecken kommer den bytas ut mot '!'.</td>\r\n                <td>[notification]=\"66\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>notificationColor : string</td>\r\n                <td>Sätter färgen på notifieringen. Tillgängliga färger: red/green/blue/default/error/success</td>\r\n                <td>[notificationColor]=\"green\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>notificationTooltip : string</td>\r\n                <td>Sätter tooltip som visas för notifieringen.</td>\r\n                <td>[notificationTooltip]=\"Detta är en tooltip\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-menu-separator</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Beskrivning</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Avdelare i form av en linje som kan användas för att separera menyval i en meny. Har inga properties.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-submenu</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>text : string</td>\r\n                <td>Sätter namnet på undermenyn som kommer visas i menyn.</td>\r\n                <td>[text]=\"Sub menu 1\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>expanded : boolean</td>\r\n                <td>Sätter huruvida undermenygruppen ska vara expanderad eller ej. Obs! Om ett menyval i undermenyn är aktivt\r\n                  kommer den att expandera automatiskt.</td>\r\n                <td>[expanded]=\"true\"</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-sidebar-menu</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Beskrivning</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Container som placerar menyn till fixed till vänster i applikationen. Lägger även till en scrollbar om menyn blir högre än\r\n                  fönsterhöjden.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  min-width: 220px;\n  border-right: solid 1px #87939f; }\n\n.code-container {\n  width: 800px; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(htmlEncoder) {
        this.typeScriptMenuMarkup = "\n    import { Component, OnInit } from '@angular/core';\n    import { detect } from 'detect-browser';\n\n    @Component({\n        selector: 'app-menu',\n        templateUrl: './menu.component.html',\n    })\n    export class MenuComponent implements OnInit {\n        browserIsIE: boolean;\n\n        constructor() {}\n\n        ngOnInit() {\n            const browser = window.navigator.userAgent;\n            if (browser && browser.indexOf('MSIE ')) {\n                this.browserIsIE = true;\n            }\n        }\n    }";
        this.htmlMenuMarkup = "\n    <vgr-menu title=\"Meny\">\n        <vgr-menu-item link=\"#\" text=\"Menu item 1\"></vgr-menu-item>\n        <vgr-menu-item link=\"#\" text=\"Menu item 2\"></vgr-menu-item>\n        <vgr-menu-separator></vgr-menu-separator>\n        <vgr-menu-item link=\"#\" text=\"Menu item 3 med extra l\u00E5ngt namn\"></vgr-menu-item>\n        <vgr-menu-item link=\"/menu\" text=\"Menu item 4\" notification=\"422\"\n            notificationTooltip=\"Detta \u00E4r en tooltip\" notificationColor=\"default\"></vgr-menu-item>\n        <vgr-menu-item link=\"#\" text=\"Menu item 5\" [disabled]=\"!browserIsIE\"\n            disabledTooltip=\"Endast tillg\u00E4ngligt i IE\"></vgr-menu-item>\n        <vgr-menu-item link=\"#\" text=\"Menu item 6\" collapsable=\"true\"></vgr-menu-item>\n        <vgr-menu-item link=\"#\" text=\"Menu item 7\" [disabled]=\"true\"\n            [disabledTooltip]=\"Alltid inaktivt\" notification=\"12\" notificationTooltip=\"Detta \u00E4r ytterligare en tooltip\"\n        notificationColor=\"error\"></vgr-menu-item>\n        <vgr-menu-separator></vgr-menu-separator>\n        <vgr-submenu text=\"Submenu\">\n            <vgr-menu-item link=\"#\" text=\"Sub menu item 1\"></vgr-menu-item>\n            <vgr-menu-item link=\"#\" text=\" Sub menu item 2 \"></vgr-menu-item>\n            <vgr-menu-item link=\"# \" text=\"Sub menu item 3 \"></vgr-menu-item>\n        </vgr-submenu>\n    </vgr-menu>";
        this.typeScriptMenuMarkup =
            htmlEncoder.prepareHighlightedSection(this.typeScriptMenuMarkup, 'typescript');
        this.htmlMenuMarkup =
            htmlEncoder.prepareHighlightedSection(this.htmlMenuMarkup);
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.browserIsIE = this.detectIE() < 0 ? false : true;
    };
    MenuComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return -1;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/modaldialog/modaldialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/modaldialog/modaldialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Modal dialog'\">\r\n  <div class=\"docs__overview\">\r\n    <code>&lt;vgr-modal&gt;</code>\r\n    <p>En modal dialog visar ett meddelande för användaren och inväntar svar / kvittering. Under tiden som meddelandet\r\n      visas\r\n      är resten av applikationen inaktiverad.\r\n    </p>\r\n\r\n    <div style=\"margin-top: 20px;height:35px;\">\r\n      <vgr-button (click)=\"showOneButtonModalOverview()\">Visa dialog!</vgr-button>\r\n    </div>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong> (Knappar)\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div class=\"row-layout\">\r\n      <div>\r\n        <vgr-button (click)=\"showOneButtonModal()\">En knapp</vgr-button>\r\n      </div>\r\n      <div>\r\n        <vgr-button (click)=\"showTwoButtonModal()\">Två knappar med lång text</vgr-button>\r\n      </div>\r\n      <div>\r\n        <vgr-button (click)=\"showThreeButtonModal()\">Tre knappar</vgr-button>\r\n      </div>\r\n      <div class=\"column-layout\">\r\n        <vgr-button (click)=\"showSaveDontSaveCancelModal()\">Spara-SparaInte-Avbryt</vgr-button>\r\n        Modal där avbryt är defaultknapp\r\n      </div>\r\n    </div>\r\n    <div class=\"row-layout\">\r\n      <div>\r\n        <vgr-button (click)=\"showCommentAnswerWithTextModal()\">Kommentar 1</vgr-button>\r\n      </div>\r\n      <div>\r\n        <vgr-button (click)=\"showCommentAnswerWithoutTextModal()\">Kommentar 2</vgr-button>\r\n      </div>\r\n      <div>\r\n        <vgr-button (click)=\"showCommentModal()\">Kommentar 3</vgr-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row-layout\" style=\"margin-top: 10px;\">\r\n      <div>\r\n        <vgr-button (click)=\"showChooseVardvalWithTextModal()\">Vårdval 1</vgr-button>\r\n      </div>\r\n      <div>\r\n        Du valde: {{vardval1Answer}}\r\n      </div>\r\n    </div>\r\n    <div class=\"row-layout\" style=\"margin-top: 10px;\">\r\n      <div>\r\n        <vgr-button (click)=\"showChooseVardvalWithoutTextModal()\">Vårdval 2</vgr-button>\r\n      </div>\r\n      <div>\r\n        Du valde: {{vardval2Answer}}\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h2>HTML</h2>\r\n    <section [innerHTML]=\"exampleCodeMarkup\" highlight-js-content=\".highlight\"></section>\r\n    <h2>TypeScript</h2>\r\n    <section [innerHTML]=\"exampleCodeTypescript\" highlight-js-content=\".highlight\"></section>\r\n    <h2>Resultat</h2>\r\n    <vgr-button (click)=\"modalService.openDialog('myModalId')\">Open Modal</vgr-button>\r\n    <br>\r\n\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    Modal består av två delar. En komponent som läggs ytterst i DOM, med\r\n    <code>&lt;vgr-modal&gt;</code>. Detta är en placeholder för det innehåll som sedan visas över applikationen. Den\r\n    består i sin\r\n    tur av tre delar,\r\n    <code>&lt;vgr-modal-header&gt;</code>,\r\n    <code>&lt;vgr-modal-content&gt;</code>\r\n    och\r\n    <code>&lt;vgr-modal-footer&gt;</code>. Den andra delen är en\r\n    <code>modalService</code> som injectas i de komponenter som vill visa en dialog. För att visa en dialog, använd\r\n    <code>modalService.openDialog()</code> och för att stänga dialogen, använd\r\n    <code>modalService.closeDialog()</code>. Se nedan.\r\n    <br>\r\n    <table class=\"property-table\" style=\"margin-bottom: 20px\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>openDialog(elementId: string)</td>\r\n        <td>Öppnar den modal dialog som har det element id som skickats in -\r\n          <code>elementId</code>.\r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td>closeDialog(elementId: string)</td>\r\n        <td>Stänger den modal dialog som har det element id som skickats in -\r\n          <code>elementId</code>.\r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    Dialogen följer WCAG genom att man inte kan tabba ur dialogen utan att stänga den först. Som default läggs fokus på\r\n    den första\r\n    knappen, eller element inne i modalen. Om fokus ska läggas på en annan knapp, sätt attributet default=true på den\r\n    knapp\r\n    där fokus önskas.\r\n    <br> Tänk på följande riktlinjer vid implementation av en modal:\r\n    <br>\r\n    <br> If content is large enough that focusing the first interactive element could cause the beginning of content to\r\n    scroll\r\n    out of view, it is advisable to add tabindex=-1 to a static element at the top of the dialog, such as the dialog\r\n    title\r\n    or first paragraph, and initially focus that element.\r\n    <ul>\r\n      <li>If a dialog contains the final step in a process that is not easily reversible, such as deleting data or\r\n        completing\r\n        a financial transaction, it may be advisable to set focus on the least destructive action, especially if\r\n        undoing\r\n        the action is difficult or impossible. The Alert Dialog Pattern is often employed in such circumstances.</li>\r\n      <li>If a dialog is limited to interactions that either provide additional information or continue processing, it\r\n        may be\r\n        advisable to set focus to the element that is likely to be most frequently used, such as an OK or Continue\r\n        button.</li>\r\n    </ul>\r\n    <br> When a dialog closes, focus returns to the element that invoked the dialog unless either: The invoking element\r\n    no longer\r\n    exists. Then, focus is set on another element that provides logical work flow.\r\n    <br>\r\n    <ul>\r\n      The work flow design includes the following conditions that can occasionally make focusing a different element a\r\n      more logical\r\n      choice:\r\n      <li>It is very unlikely users need to immediately re-invoke the dialog.</li>\r\n      <li>The task completed in the dialog is directly related to a subsequent step in the work flow.</li>\r\n      <li>For example, a grid has an associated toolbar with a button for adding rows. The Add Rows button opens a\r\n        dialog that\r\n        prompts for the number of rows. After the dialog closes, focus is placed in the first cell of the first new\r\n        row.</li>\r\n    </ul>\r\n    <br> It is strongly recommended that the tab sequence of all dialogs include a visible element with role button\r\n    that closes\r\n    the dialog, such as a close icon or cancel button.\r\n\r\n  </div>\r\n</app-component-docs>\r\n<vgr-modal id=\"modal1\">\r\n  <vgr-modal-header>Välj i dropdown</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Här kan du välja i en fin dropdownlista.</p>\r\n    <br />\r\n    <h3 style=\"margin-bottom: 10px;\">Välj här nedan</h3>\r\n    <vgr-dropdown [values]=\"['hej', 'på', 'dig', 'din', 'kodapa', ':)']\"></vgr-dropdown>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('modal1')\">Knapp</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"modal2\">\r\n  <vgr-modal-header>Här kan du trycka på knappar om du gillar det.</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <vgr-button>Hahahah!</vgr-button>\r\n    <vgr-button>Hohohoho!</vgr-button>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('modal2')\">Knapp 1</vgr-button>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('modal2')\">Knapp 2</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"modal3\">\r\n  <vgr-modal-header tabindex=\"0\">Här kan du se en lång text</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Denna fil innehåller personnummer på de personer som valt er vårdcentral tom 2017-01-31. För nedladdning av\r\n      filen gäller\r\n      följande villkor 1. Innehållet i filen får inte behandlas i strid med personuppgiftslagen (PuL) och\r\n      patient-datalagen\r\n      (PdL). Informationen får därför inte användas för annat ändamål än det för vilket uppgifterna samlats in (9 §\r\n      punkt\r\n      c och d PuL och 2 kap. 4 § PdL). Detta innebär bland annat att uppgifterna inte får användas för massutskick\r\n      eller\r\n      marknadsföring. 2. Verksamhetschefen ansvarar för att endast den senaste månadens fil används för eventuell\r\n      bearbetning\r\n      av informationen. För att acceptera båda villkoren ovan, tryck [Jag accepterar] annars tryck [Avbryt] Notera att\r\n      systemet\r\n      bokför vem som accepterat villkoren och tidpunkten för detta. Notera även att alla register i verksamheten ska\r\n      vara\r\n      anmälda till utsett personuppgiftsombud eller Datainspektionen.\r\n    </p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('modal3')\">Jag accepterar</vgr-button>\r\n    <vgr-button [secondary]=\"true\" default=\"true\" (click)=\"closeModal('modal3')\">Avbryt</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"modal4\">\r\n  <vgr-modal-header>En header från app</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Ändringarna går förlorade om du inte sparar dem</p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('modal4')\">Spara</vgr-button>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('modal4')\">Spara inte</vgr-button>\r\n    <vgr-button [secondary]=\"true\" default=\"true\" (click)=\"closeModal('modal4')\">Avbryt</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<form [formGroup]=\"vardvalForm\">\r\n  <vgr-modal id=\"vardvalWithTextModal\">\r\n    <vgr-modal-header>Välj vårdcentral</vgr-modal-header>\r\n    <vgr-modal-content>\r\n      <p>Du har behörighet att registrera vårdval på flera olika vårdcentraler</p>\r\n      <br />\r\n      <p>För att vårdvalet skall bli rätt för invånaren så måste du ange vilken vårdcentral som invånaren har valt.</p>\r\n      <br />\r\n      <h3 style=\"margin-bottom: 10px;\">Välj vårdcentral</h3>\r\n      <vgr-dropdown formControlName=\"vardval\" [showValidation]=\"false\" [items]=\"dropdownItems\"></vgr-dropdown>\r\n    </vgr-modal-content>\r\n    <vgr-modal-footer>\r\n      <vgr-button [secondary]=\"true\" (click)=\"closeSelectVardval1()\">Avbryt</vgr-button>\r\n      <vgr-button [secondary]=\"true\" [disabled]=\"vardvalForm.invalid\" (click)=\"selectVardval1()\">Skriv ut</vgr-button>\r\n    </vgr-modal-footer>\r\n  </vgr-modal>\r\n</form>\r\n<form [formGroup]=\"vardvalForm2\">\r\n\r\n  <vgr-modal id=\"vardvalWithoutTextModal\">\r\n    <vgr-modal-header>Välj vårdcentral</vgr-modal-header>\r\n    <vgr-modal-content>\r\n      <h3 style=\"margin-bottom: 10px;\">Välj vårdcentral</h3>\r\n      <vgr-dropdown formControlName=\"vardval\" [showValidation]=\"false\" [items]=\"dropdownItems\"></vgr-dropdown>\r\n    </vgr-modal-content>\r\n    <vgr-modal-footer>\r\n      <vgr-button [secondary]=\"true\" (click)=\"closeSelectVardval2()\">Avbryt</vgr-button>\r\n      <vgr-button [secondary]=\"true\" [disabled]=\"vardvalForm2.invalid\" (click)=\"selectVardval2()\">Skriv ut</vgr-button>\r\n    </vgr-modal-footer>\r\n  </vgr-modal>\r\n</form>\r\n<vgr-modal id=\"commentAnswerWithTextModal\">\r\n  <vgr-modal-header>Ann-Christin Berglund har skrivit en kommentar på utbetalningsunderlaget</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Kommentar:\r\n      <br /> I beräkningssteg x har vi inte fått tillräcklig ersättning. Vi bör ha ersättning för 4 besök och inte 2.\r\n    </p>\r\n    <br />\r\n    <p>Ditt svar:</p>\r\n    <vgr-textarea></vgr-textarea>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('commentAnswerWithTextModal')\">Avbryt</vgr-button>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('commentAnswerWithTextModal')\">Svara</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"commentAnswerWithoutTextModal\">\r\n\r\n  <vgr-modal-header>Ann-Christin Berglund har skrivit en kommentar på utbetalningsunderlaget</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Ditt svar:</p>\r\n    <form [formGroup]=\"form\">\r\n      <vgr-textarea formControlName=\"textarea\" [showValidation]=\"form.controls.textarea.touched && validateOnSubmit\"></vgr-textarea>\r\n    </form>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModalCancel('commentAnswerWithoutTextModal')\">Avbryt</vgr-button>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModalSave('commentAnswerWithoutTextModal')\">Svara</vgr-button>\r\n  </vgr-modal-footer>\r\n\r\n</vgr-modal>\r\n<vgr-modal id=\"commentModal\">\r\n  <vgr-modal-header>Ann-Christin Berglund har skrivit en kommentar på utbetalningsunderlaget</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Kommentar:\r\n      <br /> I beräkningssteg x har vi inte fått tillräcklig ersättning. Vi bör ha ersättning för 4 besök och inte 2.\r\n    </p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('commentModal')\">Avbryt</vgr-button>\r\n    <vgr-button [secondary]=\"true\" (click)=\"closeModal('commentModal')\">Spara</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n<vgr-modal id=\"myModalId\">\r\n  <vgr-modal-header>En header från app</vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Ändringarna går förlorade om du inte sparar dem</p>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\">Spara</vgr-button>\r\n    <vgr-button [secondary]=\"true\" default=\"true\" (click)=\"modalService.closeDialog('myModalId')\">Avbryt</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n"

/***/ }),

/***/ "./src/app/modaldialog/modaldialog.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modaldialog/modaldialog.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content__content h3 {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/modaldialog/modaldialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modaldialog/modaldialog.component.ts ***!
  \******************************************************/
/*! exports provided: ModaldialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaldialogComponent", function() { return ModaldialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModaldialogComponent = /** @class */ (function () {
    function ModaldialogComponent(modalService, htmlEncoder) {
        this.modalService = modalService;
        this.dropdownItems = [];
        this.exampleCodeHtml = "\n  <vgr-button (click)=\"modalService.openDialog('myModalId')\">Open Modal</vgr-button>\n\n  <vgr-modal id=\"myModalId\">\n  <vgr-modal-header>En header fr\u00E5n app</vgr-modal-header>\n  <vgr-modal-content>\n    <p>\u00C4ndringarna g\u00E5r f\u00F6rlorade om du inte sparar dem</p>\n  </vgr-modal-content>\n  <vgr-modal-footer>\n    <vgr-button [secondary]=\"true\" >Spara</vgr-button>\n    <vgr-button [secondary]=\"true\" default=\"true\" (click)=\"modalService.closeDialog('myModalId')\">Avbryt</vgr-button>\n  </vgr-modal-footer>\n</vgr-modal>";
        this.exampleCodeTs = "\n  import { Component } from '@angular/core';\n  import { ModalService } from 'vgr-komponentkartan';\n\n  constructor(modalService: ModalService) {}\n";
        this.dropdownItems = [
            { displayName: 'Vårdcentral 1', value: '1' },
            { displayName: 'Vårdcentral 2', value: '2' },
            { displayName: 'Vårdcentral 3', value: '3' }
        ];
        this.exampleCodeMarkup =
            htmlEncoder.prepareHighlightedSection(this.exampleCodeHtml, 'HTML');
        this.exampleCodeTypescript =
            htmlEncoder.prepareHighlightedSection(this.exampleCodeTs, 'typescript');
    }
    ModaldialogComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    ModaldialogComponent.prototype.showOneButtonModal = function () {
        this.modalService.openDialog('modal1');
    };
    ModaldialogComponent.prototype.showOneButtonModalOverview = function () {
        this.modalService.openDialog('modal2');
    };
    ModaldialogComponent.prototype.showTwoButtonModal = function () {
        this.modalService.openDialog('modal3');
    };
    ModaldialogComponent.prototype.showThreeButtonModal = function () {
        this.modalService.openDialog('modal4');
    };
    ModaldialogComponent.prototype.showSaveDontSaveCancelModal = function () {
        this.modalService.openDialog('modal4');
    };
    ModaldialogComponent.prototype.showChooseVardvalWithTextModal = function () {
        this.modalService.openDialog('vardvalWithTextModal');
    };
    ModaldialogComponent.prototype.showChooseVardvalWithoutTextModal = function () {
        this.modalService.openDialog('vardvalWithoutTextModal');
    };
    ModaldialogComponent.prototype.showCommentAnswerWithTextModal = function () {
        this.modalService.openDialog('commentAnswerWithTextModal');
    };
    ModaldialogComponent.prototype.showCommentAnswerWithoutTextModal = function () {
        this.modalService.openDialog('commentAnswerWithoutTextModal');
    };
    ModaldialogComponent.prototype.showCommentModal = function () {
        this.modalService.openDialog('commentModal');
    };
    ModaldialogComponent.prototype.createForms = function () {
        this.vardvalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            vardval: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        }, { updateOn: 'change' });
        this.vardvalForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            vardval: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        }, { updateOn: 'change' });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            textarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] })
        }, { updateOn: 'blur' });
    };
    ModaldialogComponent.prototype.selectVardval1 = function () {
        var index = this.vardvalForm.controls.vardval.value - 1;
        this.vardval1Answer = this.dropdownItems[index] ? this.dropdownItems[index].displayName : '';
        this.modalService.closeDialog('vardvalWithTextModal');
        this.vardvalForm.reset();
    };
    ModaldialogComponent.prototype.selectVardval2 = function () {
        var index = this.vardvalForm2.controls.vardval.value - 1;
        this.vardval2Answer = this.dropdownItems[index] ? this.dropdownItems[index].displayName : '';
        this.modalService.closeDialog('vardvalWithoutTextModal');
        this.vardvalForm2.reset();
    };
    ModaldialogComponent.prototype.closeSelectVardval1 = function () {
        this.modalService.closeDialog('vardvalWithTextModal');
        this.vardval1Answer = '';
        this.vardvalForm.reset();
    };
    ModaldialogComponent.prototype.closeSelectVardval2 = function () {
        this.modalService.closeDialog('vardvalWithoutTextModal');
        this.vardval2Answer = '';
        this.vardvalForm2.reset();
    };
    ModaldialogComponent.prototype.closeModal = function (elementId) {
        this.modalService.closeDialog(elementId);
    };
    ModaldialogComponent.prototype.closeModalSave = function (elementId) {
        this.validateOnSubmit = true;
        if (this.form.valid) {
            this.modalService.closeDialog(elementId);
            this.validateOnSubmit = false;
        }
    };
    ModaldialogComponent.prototype.closeModalCancel = function (elementId) {
        this.form.reset();
        this.modalService.closeDialog(elementId);
    };
    ModaldialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modaldialog',
            template: __webpack_require__(/*! ./modaldialog.component.html */ "./src/app/modaldialog/modaldialog.component.html"),
            styles: [__webpack_require__(/*! ./modaldialog.component.scss */ "./src/app/modaldialog/modaldialog.component.scss")]
        }),
        __metadata("design:paramtypes", [vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], ModaldialogComponent);
    return ModaldialogComponent;
}());



/***/ }),

/***/ "./src/app/monthpicker/monthpicker.component.html":
/*!********************************************************!*\
  !*** ./src/app/monthpicker/monthpicker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Monthpicker'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-monthpicker&gt;</code>\r\n    </p>\r\n    <br>\r\n    <p>Ger möjlighet att välja år och månad. Ställs in med min/maxdatum som kan vara hela eller del av år.\r\n    </p>\r\n    <div>\r\n      <vgr-monthpicker></vgr-monthpicker>\r\n    </div>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong> (Knapp, header samt markering av månad)\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Default datumformat</p>\r\n\r\n          <vgr-monthpicker (selectedDateChanged)=\"lastSelectedDate=$event\" noMonthSelectedLabel=\"Välj en bra period\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Med defaultinställningar sätts min- och maxdatum till innevarande år.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>MMMM</p>\r\n\r\n          <vgr-monthpicker [selectedDateFormat]=\"'MMMM'\" [selectedDate]=\"preselectedDate\" (selectedDateChanged)=\"lastSelectedDate=$event\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är\r\n            <code>selectedDate</code> från 2015.\r\n            <code>minDate</code> blir då default 2015,\r\n            <code>maxDate</code> blir innevarande år.\r\n            <br> DatumFormat: MMMM\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Med min- och maxdatum</p>\r\n\r\n          <vgr-monthpicker [minDate]=\"firstOfMay2015\" [maxDate]=\"lastOfMarch2016\" (selectedDateChanged)=\"lastSelectedDate=$event\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är\r\n            <code>minDate</code> satt till 2015-05-01 och\r\n            <code>maxDate</code> är 2016-03-31. Från 2015 och fram till nuvarande år så visas samtliga månader, men endast månaderna\r\n            mellan maj 2015 - mars 2016 är valbara.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Disabled</p>\r\n          <vgr-monthpicker style=\"margin-top: 20px\" [disabled]=\"isReadonlyAndDisabled\" [selectedDate]=\"preselectedDate\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i disable-läge och\r\n            <code>selectedDate</code> satt till 2015-01-13.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Readonly</p>\r\n          <vgr-monthpicker [selectedDate]=\"preselectedDate\" [readonly]=\"isReadonlyAndDisabled\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i readonly-läge och\r\n            <code>selectedDate</code> satt till 2015-01-13.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Disabled inget valt datum</p>\r\n          <vgr-monthpicker style=\"margin-top: 20px\" [disabled]=\"isReadonlyAndDisabled\" [selectedDate]=\"\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i disable-läge och inget datum valt</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"column-layout\">\r\n      <div class=\"row-layout\">\r\n        <div style=\"width:200px\">\r\n          <p>Readonly</p>\r\n          <vgr-monthpicker [selectedDate]=\"\" [readonly]=\"isReadonlyAndDisabled\"></vgr-monthpicker>\r\n        </div>\r\n        <div>\r\n          <p>Här är kalendern satt i readonly-läge och inget datum valt</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <br>\r\n      <p>Växla readonly och disabled</p>\r\n      <vgr-lock-button (lockChanged)=\"isReadonlyAndDisabled = !isReadonlyAndDisabled;\"></vgr-lock-button>\r\n    </div>\r\n\r\n    <br>\r\n    <div style=\"margin-top:20px\">\r\n      <span>Senast valt datum: </span>\r\n      <span>{{lastSelectedDate | date : 'yyyy MMM'}}</span>\r\n    </div>\r\n    <br>\r\n    <br> Under \"kodexempel\" finns exempel på hur monthpicker-komponenten kan användas i Angular Reactive Forms:\r\n    <br>\r\n    <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\" style=\"margin-bottom: 20px\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>selectedDateFormat : string</td>\r\n        <td>defaultvärde: 'MMM yyyy', här kan man sätta hur datumet skall presenteras i dropdownen</td>\r\n        <td>[selectedDateFormat]=\"'MM yyyy'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>toolTipDateFormat : string</td>\r\n        <td>defaultvärde: 'MMMM yyyy', här kan man sätta hur datumet skall presenteras när man hovrar över det</td>\r\n        <td>[toolTipDateFormat]=\"'MMMM'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>minDate : Date</td>\r\n        <td>Defaultvärdet är innevarande år. Om man förvalt ett datum innan dagens år så sätts minDate till det förvalda året.\r\n          Om man satt ett förvalt datum som är efter dagens år så sätts dagens år till minDate</td>\r\n        <td>[minDate]=\"minDate\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>maxDate : Date</td>\r\n        <td>Defaultvärdet är innevarande år. Om man förvalt ett datum innan dagens år så sätts maxDate till det innevarande året.\r\n          Om man satt ett förvalt datum som är efter dagens år så sätts det förvalda året till maxDate.</td>\r\n        <td>[maxDate]=\"maxDate\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>selectedDate : Date</td>\r\n        <td>Property för att kunna skicka in ett förvalt datum till komponenten</td>\r\n        <td>[selectedDate]=\"forvaltDatum\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled : boolean</td>\r\n        <td>true/false, defaultvärde: false. Möjlighet att sätta disabled på månadskalendern</td>\r\n        <td>[disabled]=true</td>\r\n      </tr>\r\n      <tr>\r\n        <td>selectedDateChanged : EventEmitter&lt;Date&gt;\r\n        </td>\r\n        <td>Event som triggas när man väljer ett nytt datum</td>\r\n        <td>(selectedDateChanged)=onselectedDateChanged($event)</td>\r\n      </tr>\r\n      <tr>\r\n        <td>readonly: boolean\r\n        </td>\r\n        <td>Om monthpicker är satt som readonly så ska bara textfält med datum visas. Om datum är förvalt så visas det som är\r\n          satt i\r\n          <code>selectedDate</code> annars visas ingenting. Datumet är formaterat på\r\n          <code>selectedDateFormat</code>.</td>\r\n        <td>\r\n          [readonly]=\"true/false\"\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>showValidation: boolean</td>\r\n        <td>Anger om valideringsfel ska visas eller ej. Default = true.</td>\r\n        <td>[showValidation]=\"true\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <i>Under utveckling</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/monthpicker/monthpicker.component.scss":
/*!********************************************************!*\
  !*** ./src/app/monthpicker/monthpicker.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monthpicker/monthpicker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/monthpicker/monthpicker.component.ts ***!
  \******************************************************/
/*! exports provided: MonthpickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthpickerComponent", function() { return MonthpickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonthpickerComponent = /** @class */ (function () {
    function MonthpickerComponent() {
        this.preselectedDate = new Date(2015, 0, 13);
        this.maxDate = new Date(2018, 7, 1);
        this.firstOfMay2015 = new Date();
        this.lastOfMarch2016 = new Date();
        this.minDate20160515 = new Date(2016, 4, 15);
        this.maxDate20170326 = new Date(2017, 2, 25);
        this.isReadonlyAndDisabled = true;
    }
    MonthpickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.firstOfMay2015 = new Date(2015, 4, 1);
            _this.lastOfMarch2016 = new Date(2016, 2, 31);
        }, 5000);
    };
    MonthpickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthpicker',
            template: __webpack_require__(/*! ./monthpicker.component.html */ "./src/app/monthpicker/monthpicker.component.html"),
            styles: [__webpack_require__(/*! ./monthpicker.component.scss */ "./src/app/monthpicker/monthpicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MonthpickerComponent);
    return MonthpickerComponent;
}());



/***/ }),

/***/ "./src/app/page-structure/page-structure.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-structure/page-structure.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Sidhantering'\">\r\n  </vgr-page-header>\r\n\r\n  <vgr-page-body>\r\n    <!-- Färger -->\r\n    <vgr-page-block class=\"column-layout\">\r\n      <h2>Dokumentation för Sidhantering</h2>\r\n      <p>En sida i komponentkartan är utrymmet \"i mitten av applikationen\". En applikation består av en\r\n        <a href=\"./menu\">meny</a>, en\r\n        <a href=\"./headers\">header</a> och ett antal sidor. Sidor har ett antal obligatoriska och valbara element.\r\n      </p>\r\n      <ul>\r\n        <h3>Obligatoriska element</h3>\r\n        <li>\r\n          <strong>vgr-page</strong> är rotelement, som rymmer hela sidans innehåll.\r\n        </li>\r\n        <li>\r\n          <strong>vgr-page-header</strong> är sidans header\r\n        </li>\r\n        <li>\r\n          <strong>vgr-page-body</strong> är en container för sidans block\r\n        </li>\r\n        <li>\r\n          <strong>vgr-page-block</strong> definierar sidans block. En sida kan innehålla ett eller flera block, som placeras under\r\n          varandra.\r\n        </li>\r\n        <br>\r\n        <h3>Valbara element</h3>\r\n        <li>\r\n          <strong>vgr-action-panel</strong> är en panel, som kan expanderas från headern.</li>\r\n      </ul>\r\n      <h2>Exempel</h2>\r\n      <section [innerHTML]=\"samplePageStructure\" highlight-js-content=\".highlight\">\r\n      </section>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/page-structure/page-structure.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-structure/page-structure.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: disc;\n  list-style-position: inside; }\n"

/***/ }),

/***/ "./src/app/page-structure/page-structure.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-structure/page-structure.component.ts ***!
  \************************************************************/
/*! exports provided: PageStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageStructureComponent", function() { return PageStructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageStructureComponent = /** @class */ (function () {
    function PageStructureComponent(htmlEncoder) {
        this.htmlEncoder = htmlEncoder;
        this.samplePage = "\n  <vgr-page>\n    <vgr-page-header>\n      <!-- L\u00E4gg inneh\u00E5ll i header h\u00E4r -->\n    </vgr-page-header>\n    <vgr-action-panel [expanded]=\"actionPanelVisible\">\n      <!--\n          Om sidan skall ha en action-panel, som kan \u00F6ppnas fr\u00E5n header, definiera dess inneh\u00E5ll h\u00E4r.\n          \u00D6ppna genom att s\u00E4tta expanded = true\n      -->\n    </vgr-action-panel>\n    <vgr-page-body>\n      <!--Detta \u00E4r en container f\u00F6r sidans olika block -->\n      <vgr-page-block>\n        <!--Sidans f\u00F6rsta block-->\n      </vgr-page-block>\n      <vgr-page-block>\n        <!--Sidans andra block-->\n      </vgr-page-block>\n      <vgr-page-block>\n        <!--Sidans n:te block -->\n      </vgr-page-block>\n    </vgr-page-body>\n  </vgr-page>";
        this.samplePageStructure = htmlEncoder.prepareHighlightedSection(this.samplePage);
    }
    PageStructureComponent.prototype.ngOnInit = function () {
    };
    PageStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-structure',
            template: __webpack_require__(/*! ./page-structure.component.html */ "./src/app/page-structure/page-structure.component.html"),
            styles: [__webpack_require__(/*! ./page-structure.component.scss */ "./src/app/page-structure/page-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], PageStructureComponent);
    return PageStructureComponent;
}());



/***/ }),

/***/ "./src/app/panels/panels.component.html":
/*!**********************************************!*\
  !*** ./src/app/panels/panels.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Panel/Dashboard'\">\r\n  <div class=\"docs__overview\">\r\n    <div class=\"content-overview\">\r\n      <p>\r\n        <code>&lt;vgr-panel&gt;</code> är en panel som kan innehålla valfritt innehåll. Den har en fast höjd och kan visas med\r\n        eller utan ram. Paneler ska placeras i en\r\n        <code>&lt;vgr-panel-container&gt;</code>.\r\n      </p>\r\n      <br>\r\n      <vgr-panel-container>\r\n        <vgr-panel>\r\n          <p>Panel som tar upp hela bredden på sidan och är färgad utifrån temat.</p>\r\n        </vgr-panel>\r\n      </vgr-panel-container>\r\n    </div>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong> Översta ramen färgas med tema, men går att sätta till en specifik tema-färg. Övriga delen utav ramen färgas\r\n      inte med tema utan är alltid neutral färg.\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples \">\r\n    <vgr-panel-container>\r\n      <vgr-panel width=\"4\" themecolor=\"green\">\r\n        <div class=\"row-layout panel-heading\">\r\n          <div class=\"groncirkel\"></div>\r\n          <div class=\"file-info-text\">\r\n            <strong>2 / 3 filuppladdningar</strong>\r\n          </div>\r\n        </div>\r\n        <p>Antal enheter som laddat upp A eller C-fil denna månaden i\r\n          <a>Rehab.</a>\r\n        </p>\r\n      </vgr-panel>\r\n      <vgr-panel width=\"8\" themecolor=\"green\">\r\n        <div class=\"row-layout\">\r\n          <div>\r\n            <div class=\"row-layout panel-heading\">\r\n              <div class=\"stetoskop\"></div>\r\n              <div class=\"file-info-text\">\r\n                <p>Genomsnitt 3 442 besök/månad</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"panel-statistics-text\">\r\n              <p>Genomsnitt på antal besök per månad beräknat på alla enheter de senaste två åren,\r\n                <a>läs mer om besöksstatistik</a>.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"statistik\"></div>\r\n        </div>\r\n      </vgr-panel>\r\n    </vgr-panel-container>\r\n    <vgr-panel-container>\r\n      <vgr-panel width=\"4\" noborder=\"true\">\r\n        <div class=\"row-layout\">\r\n          <div class=\"panel-file-upload-text\">\r\n            <h2>Filuppladdningar</h2>\r\n            <p>antal enheter som laddat upp A, B eller C-fil denna månaden i\r\n            </p>\r\n            <a>Vårdval vårdcentral</a>.\r\n          </div>\r\n          <div class=\"rodcirkel\">\r\n          </div>\r\n        </div>\r\n      </vgr-panel>\r\n      <vgr-panel width=\"8\" themecolor=\"red\">\r\n        <div class=\"listings\">\r\n          <h1>\r\n            <strong>+89</strong> Nya listningar denna månad\r\n          </h1>\r\n          <span class=\"line\"></span>\r\n        </div>\r\n        <p class=\"details\">Antal nya listningar denna månad sammanställt på alla dina enheter i\r\n          <a>VGPV</a>.\r\n        </p>\r\n      </vgr-panel>\r\n    </vgr-panel-container>\r\n    <vgr-panel-container>\r\n      <vgr-panel width=\"6\">\r\n        <div class=\"listings\">\r\n          <h1>\r\n            <strong>+154</strong> Nya listningar denna månad\r\n          </h1>\r\n          <span class=\"line\"></span>\r\n        </div>\r\n        <p class=\"details\">Antal nya listningar denna månad sammanställt på alla dina enheter i\r\n          <a>VGPV</a>.\r\n        </p>\r\n      </vgr-panel>\r\n      <vgr-panel width=\"6\">\r\n        <div class=\"listings\">\r\n          <h1>\r\n            <strong>+59</strong> Nya listningar denna månad\r\n          </h1>\r\n          <span class=\"line\"></span>\r\n        </div>\r\n        <p class=\"details\">Antal nya listningar denna månad sammanställt på alla dina enheter i\r\n          <a>Köpt vård</a>.\r\n        </p>\r\n      </vgr-panel>\r\n    </vgr-panel-container>\r\n    <vgr-panel-container>\r\n      <vgr-panel width=\"4\" themecolor=\"green\">\r\n        <div class=\"row-layout panel-heading\">\r\n          <div class=\"groncirkel\"></div>\r\n          <div class=\"file-info-text\">\r\n            <strong>2 / 3 filuppladdningar</strong>\r\n          </div>\r\n        </div>\r\n        <p>Antal enheter som laddat upp A eller C-fil denna månaden i\r\n          <a>Rehab.</a>\r\n        </p>\r\n      </vgr-panel>\r\n      <vgr-panel width=\"4\" themecolor=\"green\">\r\n        <div class=\"row-layout panel-heading\">\r\n          <div class=\"groncirkel\"></div>\r\n          <div class=\"file-info-text\">\r\n            <strong>2 / 3 filuppladdningar</strong>\r\n          </div>\r\n        </div>\r\n        <p>Antal enheter som laddat upp A eller C-fil denna månaden i\r\n          <a>Rehab.</a>\r\n        </p>\r\n      </vgr-panel>\r\n      <vgr-panel width=\"4\" themecolor=\"green\">\r\n        <div class=\"row-layout panel-heading\">\r\n          <div class=\"groncirkel\"></div>\r\n          <div class=\"file-info-text\">\r\n            <strong>2 / 3 filuppladdningar</strong>\r\n          </div>\r\n        </div>\r\n        <p>Antal enheter som laddat upp A eller C-fil denna månaden i\r\n          <a>Rehab.</a>\r\n        </p>\r\n      </vgr-panel>\r\n    </vgr-panel-container>\r\n    <section [innerHTML]=\"htmlMarkup\" highlight-js-content=\".highlight\"></section>\r\n  </div>\r\n  <div class=\"docs__api \">\r\n    <table class=\"property-table \">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>width : number</td>\r\n        <td>vgr-panel-container är baserad på en 12-kolumnslayout. Default-bredden för en panel är 4 kolumner.</td>\r\n        <td>[width]=\"8\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>themecolor : string</td>\r\n        <td>Bestämmer vilken färg panelen ska ha på ramen. Tillgängliga färger är red, green, blue, neutral. Default är att färgen\r\n          följer temat.</td>\r\n        <td>[themecolor]=\"green\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>noborder : boolean</td>\r\n        <td>Gör det möjligt att skapa en panel som inte har någon ram. Default är false.</td>\r\n        <td>[noborder]=\"true\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag \">\r\n    <i>Ej aktuellt, då detta enbart en yta med en ram.</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/panels/panels.component.scss":
/*!**********************************************!*\
  !*** ./src/app/panels/panels.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-heading {\n  height: 50px; }\n  .panel-heading h1 {\n    line-height: 2em; }\n  .listings {\n  padding-top: 10px;\n  padding-bottom: 20px; }\n  .listings h1 {\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1.2em; }\n  .listings h1 strong {\n      font-size: 68px;\n      font-weight: normal; }\n  .listings .line {\n    position: relative; }\n  .listings .line::after {\n      content: \"\";\n      display: block;\n      width: 248px;\n      border-bottom: 1px solid #151515;\n      position: absolute;\n      top: 10px; }\n  .details {\n  max-width: 350px; }\n  .file-info-text {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 37px;\n  font-size: 24px; }\n  .panel-statistics-text {\n  max-width: 430px; }\n  .panel-file-upload-text {\n  max-width: 184px; }\n  .stetoskop {\n  width: 39px;\n  height: 40px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAYAAAB99ePgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAARvSURBVFhH7Zj5U1NXFMf7b2mXqW1tO11GaxVbsWqpjjgFVBRZZNMKSK1WMEBUEOJaFdSpWlwq1FoFGSk1JoBIBYXKgMhiWEPC8Z6T80JuEpZ7CdP+0M/MnXl8733f9+W+d7e8Bv9hpg3X1dMBqYdjYHnqu5BaGEN/G0xVFwqmDOd0OSHJvAEWxc/zFgxhgNe+dQkFkTA4PMC1sydouKGRQSi+bILw9Pelh2PBXjLAa//6sOQFUHQpB0bHRrmVPgHh+hw9EPNjuPQw34dP1XMr0hfC4vj5dL39YBS4XGPcUo+AcBmWbWQetS8cmtsboRO/KxEi2HcVrO7vfx5CROYi8jh9o5hb6iGFe/zskacH0hbCi/7nrKpjb7lPPuHpH8Coc4RVdaRwJ68Xkmnhz/tZ0SfOtJa8ah9Ws6KOFM54pXceVLKiz/GrB8nrxLVDrKgjhYvPX0+GDa0PWNGnsracvPaeSmNFHSlcbG4EGT5qa2BFn7qmGvLCSVoXKVxc3joybHxiY0Wfxqc28sJvTxcpXPKhaDK833yPFX1wGkKv2NyvWVFHCpd1NIEMq2y/saJPk/g00Gur6RtW1JHCFZzfQ4blVedY0cfaXEteKaH65soqj5JhyS95rOhzs+4qeYVstN613yLDnUdiWdHn2BUzeZ28dpgVdaRwPS+7yRCXHbfbxaoexpx51/47K+pI4ZBoseCjqXUWI7bX8QI+T3oLliS9CQNDL1lVJyDc6V+PUDgcubqUiL0gemSUbGNFj4BwvWI/tyz5bTKvqb/F6sxpaqv37gHtLX+xqkdAOORshYXMw1IWgO1xHavT0/TUDqt2fkT35pzZxao+QcO53W7vDmVxwnwwlWZRj4yPu7nFBDhw6lutYCrbLdq+TvckFmyAEecwt9AnaDhkTBxuzBd+EA/zbLuxrNzxIWzOXQNphRvF5BoNG/d/JbbmE+cM/EfyyrJDEgyZNJwBrpFmsXKs3b3EG8K/RO4Jg6KLObSTDiXThvOlu78Lvt37JQUqrz4PLR3NNIBmSr3Yvuefy4ZNOatFr68Ci1iJBocdXBuIUjhk9a6PKZzKGQM3r8ak7F+2HIgA55iTW8ooh1u23TPNzOTg4hjqhwOlmaK957vFbxaXMzyhNYhBtD57KemXbp/lO2SUw32W+AYZuqZZ3qpsN0Uvf0JtcbWwlOeLw7r8a8BtawXV4y8FwVAOh/89GvYN9LIig0vX9ydSqA2WRHMktHW1cu0E7V1P4LvirdQGR3nWsUTSfFEOF5fnOfL96Xfkw7nxSvUF2jRg/fKUd+DynVIxN45ziwkwhO8UZBTUfAMqh/uJ1178gadf9B721PWaixC1b4X3IelFm6Gz5xnfEQj2ErbbIbZmz/s6qeA1alhnoBzOIXYZazI+9QbxLevEXPiH9Qa3nJwvUt+j9hjKAK9RwzoD5XBIR3c7ZFri6TVgwdWiQpxTJ5sS/JnTcLNlzl5rKJizAREqMAT2Er5GLHjtGwz518LNhP/D6QHwCgioXIuCTNT3AAAAAElFTkSuQmCC); }\n  .statistik {\n  width: 210px;\n  height: 102px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABmCAYAAAC+ws8hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAABHbSURBVHhe7Z2JWxTHFsXzb70kZs9LYp6JuzEGt7jHuD4VEDfcd1wRRUVBQVTcIuKKioq7qKDiggIiiqDsi4r1+ly65jVDzdAzPUszc3/fdz6ZquqZtrpPV9Wt6u5PBMMwlmEjMYwPYCN5yfsP70V9U53+iQlHcPxxHgA2kpegEmdsHC1+nfEvVpgKx19eTNlIFlBVLiu8JGEjWUBVsazwkoSNZAFVxbrS6KV9xbZ/1tK/+NxzxqdiZepcEv52Ls/qGpKwkSygqliVBs75XrysekHblL0upTQYSHLg3C4xaO4PHbZj2V8SNpIFVBXrrJjN40V13RvR0FRP26iMlF+UJ6pqKsXkNUM7bM+ytyRsJAuoKtaoPtFfiFdvXoi5Wyd32rVbmhItnr543OE7WPaWhI1kAVXFGhW7faq49fCqMk+l0opnYmJchDKvq+qfi3vF+bxTyrxQkISNZAFVxRq1+dAqcSgnTZmn0unrmSJuT6wyz1PBkGgBU08mihW7Z1Pr6Fxm/MrfReKROLH7xBatRZwpekd186qMKw2Y9a1obmkSiYfjlPmDY7uL1dr/Fy22Kl9qxOJeVC5q01hlfjAlYSNZQFWxRiVnbRJ7Tm1T5ql04NxusfXIGmWeJ0LworX1g3hYck8UlhSIjx8/at3GR6JfzFeOMvvPplD6qzflouLtS/r/PHle6HEZd4rbM1980PZj8Pyflfk7MjfS90NLkqOUZaBn5U9E68dWUV5VpswPpiRsJAuoKtYomCJDO6lVeSqln94udhzbqMzzRAlaSyjHYvIzMLZ2yVkJYsraYY7P+7J3UpmEgys8KuNOeY+uiev3LynzoJTjCbTEpqAoj8qqyiBYAxPdfHiFxpuqMsGUhI1kAVXFGrVu3yJx/MohZZ5K+7KTRdLR9co8Kxq34jfaX3ffPUozHjhyIV2ZD5kpIzV80a9aq9gqlu+apcyHpJHQcqFVGr2sX4cyF+9ki5uFl0Vm7v4ORho07wexOm0edTs3HVje7uIBRcaPJkXM+1EkZW6g4yHzZm+ZIHZqFy10W0cu6dNuO08kYSNZQFWxRsVs/ls7Ca4o81Q6efUIjQVUeVa0RRujgOkbRinzoanrhlMZnFyqfMhMGSl02xDyd9cNlEbqH/O1VrZO60omt8sftvAX8UHLX7QzsoORJqyOEE0tjaL4ZZHIzT8ryl6XiHfvW0T0pnGOMufzTogbhbmirKJEvK2tEtX1byn96KX9tEYu+2aWln+ZtpXbeCoJG8kCqoo1auiCHuJt3RtlnkqPSu+LaetHKPM81aq0uRRsOKudLDUN1WL70XXKclJoZdCCjF3eX5kPmSkjhRP85LUjyjwpaST8fSw3g+bbjEGRNG18WVldIXpHfd7BSGjx0NrIzwiCPK8oFhfunHGkwUgg6/JB0TPyM/qefjO/onHbmvQFjnKDtBZL/u2pJGwkC6gq1lkYKP93/Z/KPKNw9a2trxa9tIOtyvdUl+6eFQ+K88Wb2kq6EuMq/Nvsb5VlJ8UNoRP6UE6qMh8yU0YKE8tgZsJfynwpo5EwFgPLdsXQ597R3WjfU09upc+qrp2zzt06QcEV+RlGevXmZTtzwlB1jbXicv55rT6+c6R7KwkbyQKqinVWwqGV4uq9HGWeUSeuHqbBvCrPqjDpi6vw+byTHfKGLPiZInL3nt2hq7VzvtkyRiHkjxO4szWERiNBRS8eOYIOGFthn9Hy4LPKSFHxY0T2jSwyT3nlc9HY3CAeP3/gyIeRHpbea7cNtCBpGpkJ3Tu0skNcRBXNSMJGsoCqYp3Vd+YXdKBxwPrO/FKR/6XIOJuitVyPxcA51q+QroQTtOVdc7s0rAF8/LyQukR/uOjemCljFLpPGI+kn0lS5hvlbCRcdBB0GLOsvygouqWNfc458pyNNCdxEhkNpo3UDPX36kHaBeuCKSNBaJ03HVwhKmsq6CLhqrXuTBI2kgVUFasSTkD03TEGOHvrOEXnYB7M+Ndo3a6c26fF4Pndldv6SjAzThj5GQP8e09vaydnufhzcc92ZT0p46zYbVOobv5aMVCZb5SzkX6f+28yO0LmwDhR62wkBGbQCsnPEOrWrJGkpm8YSb81M2G8Mr8zSdhIFlBVrDvhZFy9Zx514wqLC7Qu1xxtbNRDWdZboQUpLMkXq9LmUTh57IoBFA0DcrwB4eqNKzquyjhhpWYnTnR0ycyUcRa6j52dvFLORoJgBlBeWaaNZ/7/G85GQjcYgQ9ERtGaYBUJInydGWli3GD63eHamBS9gZTjm+n/+OcicxcKZ0nYSBZQVawZrdu7iMykypMaMOsbmvi8/iBX06V2E6PuhJMvMzeDwsmSem08gLkWYyCjvlH9vAmcnBGxP5kuYxQG781ai4KT2jlPpZ3H4qm8MW1mwjjq3m13mvNC1/hFZdvKeQhzSGgt5f7cfnSdJr+NwQaEt+8X33V8hmAYRBQltQ3V7SJ4nkrCRrKAqmLNCKsX0k+7HkOs3buQIlYXte7ggqTpNGH5Rht3oLVRlVepV+Rn1AIOXfAfZb4/hP1GC6MymUpo1VRrAFVjSVwgVOv8ImK7U5eQymjfh2ifzMOFw9XaQAQYsIYP9aTKNysJG8kCqoo1ox2ZG2g5kHM6ViDkP7lFYespa9vfm4RwNhaNGtPspjuPb1B3UJUXqpKwkSygqlgzWpIcLa4YQuLo4+89k0TBCIxHjGMDCFdtRLCybx5TXsHtoo0Zy8TfqwYp80JVEjaSBVQVa0YY/yAShnES1uIhcnfq2j8uu2GI+OFKDxln7lnBl4SNZAFVxZrV0IU9aMEkFluir64qI4WJRgzkIfytKsMKjiRsJAuoKtYf4hbJvpKwkSygqlh/COMiRMQgO4+RwlESNpIFVBXLCi9J2Ehews/+ZvGzv30AJh5lJYY6dY01pldWoBzKhwM4/jgPABuJMQXMMbUTMyE/XEzkDBuJMQ3u4XFlpjYT1eolww82EuMRKjOFu4kAG4nxGKOZ2ERtsJEYr4B58HgrNlEbbCSG8QFsJIbxAWwkhvEBbCTGNM9ePqEV6+NX/S4GzP6WhL+RhrxwJqhGan7XRCuaD5zfTcLfSGPsxbsP7+j5Ee5uy0YeyqBsOBIUI+HhFgdzUh332huFNOShDBN8YAw8qcf5OLnSLK1sOJop4EaCQfBcatVBMApl2EzBx+wrXIzCNuFGwI2E1sZY6Xj2GvrYkPNrPVCWCR4Y9zh358YuH0APYmlsrifhb6QZy2CbcBszBdRIGP8Yu3Nr9i4QLe9b9FxBfyNN5qMsj5mCBy5u8lhAMIxqAhZpzmbCtuFEQI2EYIKsaLQ+RhNJkGZsmbANExwQkZPHAULr4wrkGcti23AioEZCZE5WtLsrlvFKiG2Y4IDwtjwOELpyrkCesSy2DSdsb6SDbKSgYcVIeFZfOMFdO8Yl3LUzT8CDDca3pHGwwd4YewYQBxtcEzAjYZIOL/HFqweNFY7WB5UOGVsiiMPfwYXD3+YJiJGKtUqdtGaIo5LxdmxjxavEE7L2gCdkzeFXI3382CoOnk91vKZj9LK+4v6zO2QQV0uEpC4XnNe/hQkmvETIHH4zEl6zGGN4neCG/UtEU3OjntsGxj8IJhgXrR44t4vKj1rah16DyASfstclLt8zJIWeBi9a9THZN445XoqFFzpdu39Rz+kcvIZwYlwEbZt2aqueygSLRu3iJ48HXvePsSwicnwbRXt8aqSa+mqxNCXacZVavDNKVNe/1XPNk190i7bvF/MVvTeUCQ7omi/aMYOOBV6ChldoMmp8ZqQbDy453u+DEPfp60f1HO9Ymdq2Qnzxzkg9hQk0eMcrjsGguT9o3btSPZVRYdlITS1NIj5jGVU4FL1pnE9akaqa146Z9VsPr+ipTKA4ezOL6r531Of0omPGPR2MpAoAuJoUxbtOxyzvTxWO143grdKtWnfAV2ScS6HvRrfifRcaxHpSh3YEx1VGWvFafqZzHEZyF5JGGvLkvA4eHL7rxGbH6+YxGH1a/pjyfAl+BybCb2ScTdFT7YsndWhXEG0donfR8T5bxhxkJBxcs3etlrx66ngzAVYpJGVuEO/e+6+1QLcOv4VuXmVNhZ5qPzypQ7uaqVnrpk/WJ85nb5kgPuhvWmA6h4yEK6XxYLtbtiNboZFL+oiCojz6En+zODmKfnNl6hw9xX54UocoazdgbrxtHfs3Vuuuh+tbJbzlE/TdjV2RzhaSQqv3xIoGN0vqfQ3eAI5QOH4boXG74Wkdoqzdxkwpxze37duc78XzimI9lTHLJxgIywOMK6fxBJAgzXhVxTaBJu3UNvrtCasjaNLWTnSVOnTF+byTtE/obXCE1Ds+QVRJHlx0Q1yBPFkO2wSalnctYtTSvvT7Ry7u1VPtQVepQxUPS+85WvsjF9P1VMZTvDJSsO5avXIvh34fXaPqujd6avDpSnVopLK6Qgxb2IP2Z0PGUj2V8YYu07WTxG6bQvuwdu8iPSX4dMWuXfO7ZsftLFhDJ9+FyniHx8GGYA+UsRIZk789Iz8VhSUFempw8bQOMW2AlRvBAhG65btm0b7g1pbahmo9h/EWj8Pfdgjd7sxqWwOGK6ovV1JYYV/2znb15K4OoWELf/FoVbwvST21lfZh4OzvaF6QsY7HE7J2mExsamkUwxf9Svt04sohPTV4NDY3iBkbR3WoL5WWJEeJ6Yaycenzlc9B8BcX75wRPWd8SvcPXX9wSU9lrOLVEiE7kHP7FO1bROxPQZ08xKJdLNTFvoxY0ouu9p3VIVpR3Dkso2UY8AdizPT4+QPRP+Zr+k38PuM7HEaSoL+Pg4pIFIS/7TZ5KInZ3HYHbrCeEYABu7wNGy1keVWZnm6uDjHei4wfTdtDq9NitfGKfy4KVbWVjlZ87d6FeirjKzoYqStR/LKIlvmjm1JU9lBPDQwIIMxJnEQn5lCtRfH2fh20Todz0hwtBe7p8vXzKnDL/rT1I+j7o+LHhu3t4P6kSxsJJB5ZQydIZPyYgHU9sUg3dvtU+l3cSl9a8UzP8Z4XlaVaF3EsfSeEdYW+iKahTuRNkiOX9PbqjmWmc7q8kRqa6uhkxomSfTNLT/UfmG9ZuGM6/R7GZ2gVfQVu7caqjf6z2lon/L8u5bt+uqkZ0s8k0Xdh9fyz8vB+roI/6fJGAqdvZNLJgm6Ru+dTWwW3FcgV0n/M+1E8LX+k5/iW8srnNEmK34FW7J4taly0JO7GY7n552i+DfNWSGf8R0gYCd0XGVLednSdnupbsFBWTmIiAvekrFDP8Q/4Px29tE8MmPUN/ebg+d3FxbvZem7nUVY8b0Fuu78L3BTZ1QkJIwGEdhF06B3dzeeTjK2trY55toFzvqOFnoHiZVWZIzoJLdsVQ+sMzcz7QXF75uvfxPiTkDESiD/Q9hAW3N3pKzBuWasv78GrSu4X39VzAgdan2O5GY6Hwcj5Jyl3qyjw3AvG/4SUkRDlwtgFJ5CxG+QtOIHxhFh8H7pJBU8Dc0ewK/B0JmPrBNl9bWS4EFJGAlmXD9AJNGJxT3oGgbfARHj4B74LLcCdJzf0nOByVb+VBELrYzSRBGnGlokDDf4n5IyE8cyUtUPpBEo5nqCnes6Ww233DuGxVHmPruqpwQeROWkQdOVcgTxZDtsw/iXkjAQwjsHCTJgAoWRP2X50PZ2AuF3jxoNcPdUeeGMkfn2o/wlJI4G49LZxwoKkaXqKOZKzNtF2faK72bJLhH2SBuGunX0IWSO9ra2iUDVOJNz3Y2YhaerJRCqP9XuYzLQj2Gfj3BEHG+xByBoJHM7ZQycTbqJzNXEpb22QS2nwJJ0Lt0/r32BPsM/G/wdaH3TlIGNLBKEs439C2khYFydbJXeavKYtOIEJ3XO3jutb2xcYvyvdiBkOhLSRPLlyY03ameuZ+pb2BwZxt0RItrRMYAhZI3k6lsCEa1ccS2CfOxv7Mf4nZI2EE0qaBK2P0UQSpBlbJmzDMN4QskbyZr4F2zCMN7CRDEbiiUvGW7hrx107xgdwsEHPR1kepDPeErJGAjxxyQSKkDYST1wygSKkjQR44pIJBCFvJAlPXDL+JGyMxDD+hI3EMJYR4n8L4rkUESIQBgAAAABJRU5ErkJggg==); }\n  .rodcirkel {\n  width: 135px;\n  height: 130px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACCCAYAAABsKtu5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAABd/SURBVHhe7V2JW1XV2v/+lKvd+prrfoWZlpllk1lZeW85pVnpNTVzaDDLTNOyMi2VyQERFHFChBBHRHECERHQABGQSURGmURd3/4t1oZ99ln77LWncw5wfs/ze3w4e691fPb6nbXe9a73fff/kAAC0EBAHAFoos+Jo6Ojg7S1tZGbN2+SxsZGUl9fT2pra8mNGzcolcjbmUAKD6WS8sxs0nTtOrl79y670jfQa8Vx+/ZtKgAMeGVlJSkpKSGFhYWkoKDAI5VY+48nXRj64DMkavhokvDxbHJmVRgpOJBCGquq2d29D71GHBADZoJr166R4uJi7sCLUAm1OLQYMfh1cmDuIpK3K5HOML0FPVocWCLq6urI1atXuQNthkrwhKDLfkFk25sTyNnQSFJXcpX11DPR48Rx584d0tDQYKsglFSCO/gGGfvWByQnZjdpv9nMeu056DHiuHXrFqmuriaXL1/mDqpdVII32GYZ9tAQcuSbpaTm8hXWu//D78WBnQUMSt5AOkEleINsmf2DSOLUeaTi3AX2Lf4LvxVHe3s7qaio4A6gk1SCO7g2cu/kWeT6pUL2bf4HvxMHdh3YcfAGzhtUgjegtrP/AGmn8z1p8sMtsd+IAw4m7Dyctin0qAR3MB1i2MPPkayIGHJXMrj9BX4hDiwhpaWl3MFygkVFRfT7YMtgloKhe/36dVJTU8P+R51I+HgO2f7uZOrHCL5nAHdQ7WbsG+NJdV4++x/4Fj4VB2YLuK5FPJdmiH7LysrooDc1NdEdj1kX+J2ODnLjcjHJ/+sgOfVbMImbMJ2EPzqUO8BWGXLvQJIRGulzd73PxAEHFgaON6hWiBkBLnPscpx+uFgCsOvIWLuRxI6aSB1gvME2y91jppKmymvs27wPn4ijpaWFTu28wTVDCAL2CmYGX6KpspraDTEjxnIH2ww3PPkSKc/IYt/gXXhdHDgF5Q2wUWLJqKqqIq2traxn/0LVhTxyeP5SEnr/YO6gG2GwtMxkR+1gPXsPXhMHpngYfbyBNkLsZrBsYMvbE9BcU0tOSjZK+GPPcwfeCFMW/SotZd6zQ7wiDgjDqpcTMwXE1VNEoUZrQyNJW77a8kySNGM+ue2l5dNxcUAY5eXl3AEXJZYPX9sTdqFRMjCTZy3gDrwo48Z/Sm61OL+cOioOnKBa2ZEgLgPGa29E8fHTZPPQUdzBF2HcuGmkQ9qROQnHxGF1xoBjCuLqzcCvP2XhcmkLzBeAHuMnzSS3252bUR0RhxUbA1vc5uaeF/tgBVeOppH1TwznCkCPf037kj5vJ+CIOOCR5A28HuGvgHOsL6KhoorEvjmBKwA9pi5dyXqxF7aLA25q3sDrETNNb19G9AAbYv+chVwB6PG8A34QW8UBl7WZcxJ1SkBfR9ova7gC8MTgfz5FytLPsR7sgW3igP/BTNQ3PKYBuCNzwxbDZzUbn3qF3Lxu3w/NNnGY2ZngPCQAbZyL3GZ4J4Mtrl0xIbaIw8x5CY7qA9BH5vporgg8MT1kE2ttDZbFgd2F0eitgI1hDEZtkJD/HURqCopYa/OwLA6jywl2JQEYxN27ZN/M+VwhaDH2rYmWlxdL4kD6IU8AWoQfo69vV82io62dJkjxhKDFzA3RrLU5mBYHdidGAnaw9PSWwzNfoaGsgqx7fBhXCDyGPzJU2r24xsUagWlxGE0f6GsucadQdPiYoS3uwXmLWEvjMCUORIvzBKBFHKIFYB8OL1jGFQKX/QeQ6kuuKReiMCUOI5loV65cCdgZNgNJ2ZueHckXA4cJn8xhLY3BsDjgIueJQIsooBKA/ShNO8MVghYrsozn5hoWh5GjeERwBeAckqZ/zRUCj4lT5rJW4jAkDiO2Bg7g+urxu7fQUF5JQh94hisGN/YPoklZRmBIHEaix9WphWZBE4cyzpOTv6wlSdO+Ijve/Yhsefk9+m/yZ9+SC9E7SWt9A7vbGJzsWwuX9x+lGXPHFv9OTixfQy5E7SRtDY3sqnEc/+kPvhg4RH0QIxAWB4xKUTc57rNqhCL87fymbWTj0yPI6n8EeWTIg0NI+poNwh5BJ/v2hLzYeO53ZIZGsjuMo6WuXjgtEwVkjFQYEhaHkcM1q2cn+CXFvDaW+yA98cCc76mr2ROc7NsT8L3rn3iJ2/fZ4Ah2lzkgL4YnBh4vbNnJWulDWByiNbhga1jNLcndFufy8MIff4Ec+mIxObcuWpqWU+iv/uCcRWTNPQNd7gMvxSWxXvhwsm9PSP3+165+gu8b5NKvVXHcrLlBQgTzYVDMThRC4oDbmycEHu1weGVtjKEPbf2TL0tr8g7NHI3q3L/JhqdedXnQW18dw67y4WTfWrh+qcBFbCdXhLj0a1UcwMGvlnDFwGNdsViVQyFxIPaCJwQe4QexiurcS9JUGULaGpvYJ9ooSDzg8qDBZg/RUE72zYW0FO16b0pX+/iJM8m17IsufdohjsoLeVwh8Ji+egNr5RlC4hBdUnCftwFDMeSBZ10edmVWDrtqDXb0/feefV1t1947iNQVlTgiDiBm5HiuGNSMeX0sa+EZuuKA/cATAo++igfFdK982HaJA7DSN3YGGwe+1tU27efV9HOnxHEOcaccMbixXxC5Wa3vatAVBwrC8oTAo6+SnDcNecvlYbdK2zu7YKXvtJ/+7Gq3ceAIcottI50SB/JwcdDGFYSKObF7WCtt6IoDLnCeENRETqwv0FhWSVZLvwT5Qa8PeoVdsQ4rfdddLpaWkae72ubHJ7MrzokDiH17ElcMaiZ/toC10IauOHCqyhODmr6IJEca4N5Js1wedMaajeyqNVjte88HM7rawSBV+kicFAccdjwxqBkxeARroQ2P4sDZCE8IPNqxSzGCjtZWcmzJSpeHHPH067bUGLfaN/wlcjtsYWtU8RROisPIrqWxwvPBqEdx4LidJwQ1ES7oFDBQ2HaC9aVlpDj1JMkMj3JzfUcNe4c0XK1grcTgRN8drW1k07NvdrWF80sNJ8WBHZaoOx2VET3BozhEE6IR/OMEruflcz2VSka9+G/6+gqjB2RO9X16ZVhXe7jLeYdqTooD2D1hOlcMap7+PZS14MOjOEQjvpzKQylIPOjyEN3YbwDZ9uYHJHXRb9SjaQRO9N1wtZwE3/9MVx+5sfHsiiucFgcGnScGNfd+9DlrwYdHceDVVzwxqOlUtBem8ojBI0n4v16kVDuklFwjbeGOL11Fbre3s9ae4UTfiVPmdbWJHTVJmuL5B3VOiyM/6RBXDGpuHvY2a8GHpjhgrYtmzHsz5aDlRh2pOp9Hcrbupok7yocMxkq/drPVbqz0XSLZK/J9ENO187nsijucFseNK6VcMaiJzDhPhV80xSG6U4GAnKosowd8b/bmHZLt8JTLwz7561p2h3kY6RvV/aJeeLfrnsNf/8iu8OG0OO503KYlGXiCUBNFY7SgKQ7RQGKUXfA1MkI2uTxsGJpY/+2ASN/n1m/puh7+2At0BvIEp8UBRAhGp+O1qFrQFIfoNtZXnlEl8MtFXIbygWdHxrKr1iDS95ZX3u+6FvncKBpi6InxH8x06Q/BR/K1Q18uJk06/gcRxL7zIVcMauL1p1rQFIdoHqy/JEbHT/zM5YGn/biKXbEOvb7DHhvmct0q7ZhJEqbM5YpBzZxtcayFOzTFIRoW6C/ZbAkfzXF5wCeXr2FXrEOvb+x6lNetMmfLLtazeRz6ajFXDGqe27iVtXCHpjhEA3zsijK3CqVXEjwfsY1dsQ69vq+mpdPXaogy5bvlLv3FT5jRdQ3BxnZEvB9Z8BNXDGp6mqU0xQHHFk8MavqDOK5dkAw8xekpiNA8O+BE394wSFO//4UrBjXTV4WxFu7wO3HcvHadxL41ieTG7qFvR9LDreYWEv3iaJeHDQORByf7NgJviOP44hVcMaiZviqctXCHZXEg0clOVJzN7npomM5P/R5KapGppfKlYHD/3pNMIga97vKgwZJjp9hdrnCybyPwhjhOLBNLdkr/cx1r4Q7LNofdBmnt5RKXBycTyUXRL71Hdo+ZRjY//w5Z+0/+oVn6n+tZT+5wsm8j8KeZ46xk52hBUxyiuxUUcbEbKQt+pgdfygeoRwxwzpbdrAdtONm3KLwhjv2zvuWKQU28dkwLmuLwtZ+j7kopPeyKHv5vN4NQyYjBb5CTvwYbemmvk32LAN+vDCHM3aYfz2kUceM+5YpBzdyde1kLd2iKQ9RDiiJwTqOlppaUnzlHCpIO00MxZJ4Vp5wgTRXWZy0n+/aEWy0tpLG8krTZnKgtY+ur73PFoKYpD6no2YqTUWABmAey9XhiULPCQ6qFpjiM5Kv46lQ2AD5wHiR6KtvkIX9FUxyAP8ZzBKCPqgsXuUJQ03Q8ByAaCYZ3rATgP8jdsZcrBjWjJIPcEzyKQ7T+l7+crwTQibQfV3LFoGbi1HmsBR8exSHqJfWHmI4AurFrzFSuGNQ8vdJC9LnodtaXoYIBuAKu/7CHh3DFoKanbSzgURxGdizezngLgI+SE+lcIfDYVO35XMyjOADRV3M5lbsSgDGcWL6aKwQ1I54ZyVpoQ1ccogXwveEpDUAfW159jysGNQ/M1S+YrysOI+9U8Za/A3UvkEBUfiaTfdKJnOhd5K//fkld4lrICN5Ekmd9y/5yBewmpBXs//w7LlFRUO4bFXrwt9s9sxeS1jpXlzhc8WlLV5G48TPIzv98Qo4vWUmaBYqnGAWtzyH4Tri8XQmslTZ0xWHE7vBGGQYUO5MPrPZ+OIt92oncmM5KgagIyAOKw+GEFeUReECGWuybE+mBnJphjzxP+67J7zwuuLgrkf4d9cJoWthW5tbXxrjUDavKyiHhjw2jtT2OzF9KkmcuoOWfNj3zhm4Kg1FkBEdwheDG/kFC72HRFQcgWhPMG0sLEpXX3jeYJHw0m8ZdKGcJJC2vvW8Q2Tn6Y/aJKwr+OkQH9OJO/V+NEkgSQhAxEpfkXZksDr0ZAGILe3SYy8muXIgOFYztxOaho/hiUDF21ETWwjOExIEZgScGHltb+aUbbYE0MJuHvk0SP55Lio+k0QesDvZN/GQejdfgnarumz6fJjq3NxnL7c1P2E+/K3vzdvaJmDja6hvpPYe+XMI+6QTKJGx8+nU669iFq6fPcoXAI2YYEQiJw0gRFyfflFCZ2Rnml793P93Pr/u/4fSXqUQ+y55H0VklUIsDSwpqnBsF8mbx60dMqQwRcdwoKKL3nFj2J/ukG3snfU7W9H/KdF6vGgdEX3PeL4jUlYg5LYXEAXizgrEWENKPAZYHKeXbn+nDry3qTslE8ZTQh4fSQGIlCpMO03sLk4+wT8RQnpFF2x1XJTLJ4kBOC4zjowt/oTaPMhMfMxSCiXaPncY+6QaMWbRv9mA8iwJvoQ4VrGC8/Z0PWSt9CIujwUBVQSd8Hrdvdc4UyTO+YZ9IA5d+jj7gUytC2CedkB98Q2l3Tus+qV3Yo8+T221iJRpk/DX1C5pMra7sg5KTceOm05lo7+TZNA0S3xk55C2XMo5J076knx9d9BspTUsnlw8cJak/rOgq+YCIeKs4tuR3rhB4xJsgRCEsDqNvTbB79ig6mEofZpH0cGXAOIShiAFRuu+Lj3aWQzgrbVsBOps89BytcW4E9dL0i6kfAtEDvv/cus6EauS8ykCCEsSK2QzXUPd813tTyXZpZsPfWuW1RQEhhj4gNmuEPfycM29NABBpzhMDj3anLCR9+jV9mDA4YVjKjBjUmYpYnp7F7uzcXaC2ecyIcfTvwn1H6D2lx8/Qv0UhF7Mvk4w9Uax7YjgVrBsk8bTU1lFjFNjzwUxqlFpF6g+/cYXAY8p3P7NWYjAkDiMF8mF72OUUa29soruMzUPfkdb3L1wYP6kzyfnIN8vY3Z2ADYDP4ayCb2HDgFfJ3dvi70zBtjjkoSE0A94IMOCR0o7KE2CLwG+C/5cVwOkl+rYE+DZqCo2FdBoSB+CLd7whOhsDzTUmpV9kpLS/R5kEpeVfwXY2eAsTlpRj0jpvBGdZXY687drR2WrQ1EmpTfLMbruIh7Rlf9D7ENhsBYjH4AqBQ73YDR4Mi0M08FhmS0v39s8sdr8/la7ZeGU3DzBI1eKBDQBbBA4zXKvK0i7DpMYdyfhFuUlUA+QZsOg76sXR9O0DJamnSNmpTJK1YQv1goY9MpSWrZSRsTaC/B2fTKqy8+iOCfYI/j9HF7mXoDSCwv0pXBFosdJDGSotGBYH4M33yuKcAjW2Ds77gX3ijtrCYmo44lxDCbnsI0pGGoFso5z5QztVEGcwoZKBh/tAeGvjJ80iNX8Xsjs6cfCLH1ySqCC67Mjt0hJn3mBvk5YlFNzniYDHvZNdjxlEYUocRt9IbTUrDha9VmU+GdiRYLurBorR3zE4EJgZlA4vLWCAUQIK5z2eErNRBBcOMbteJnhEMix5IuBS+mFVX/TiG6mBwLvsfQP4SYy8yx6eU7MwLQ74MUT9HiCSnwLvmbWG2iulJFyyaXgi4DFcWvaaLDjZTIsDMHIgB+LUNvBee3Nolwz7rS//hysCLaLKoRVYEgfWZtEzF5n+UmCup2HfrAVcAWgxduR4w7aWGpbEAcA4Fc2MkxmINzWGY0vF8lBkhtw70G3XZAaWxQEYeXukTF+9D66n4eRKsSL3Sp5ZbU+RGVvEAZSXl3NF4Im+eLtTT0JGWCR38D1x95ipXec3VmGbOLATwY6EJwJPxKwTgDsy10cLBwvL3PDEcEu7EzVsEwcAVzlPAHoM2CDdwK8+RbBMpJIouVB2Svz0WAS2igMQrSWmJnYxfX2b297cTBImf84dfD1mR3XHt9oF28UBIJaDJwA9ouRDX6310VBeRWJGjOUOvB5TFi5nvdgLR8QBGDnaVxJe177makd0+7rHnucOvB6TPv3KNgNUDcfEAQeZmR2MTESd9fZlprWhkeDlv7xBF2HcuGm2Ra/z4Jg4AAgEtTt4gy9CHPc79f44X6P0RDqJeHoEd9BFuHvsfy3Hn+rBUXEA+PVbmUFALFG95dAOh2eJU+aS4HsHSjuMgdyB12Pc+GnklpPJYwyOiwPADGLWBpEJFz3KS/XUpaalvoGkLl5BRSEPcuiDz7oMugiTpn/t6FKihFfEAUAgGFzewBshDFb4RZxKnLIbCAI+vmwVCXvkOffB7hdEQgTTCsCURb/Q5+gteE0cMlB50OhBHY/oA0arv1YUqrxwkeyfvdBlpuAx5P5BJPieAdxrMtFHdvQO1rP34HVxADjJFa0YJELEicD55uvZpP5qOU1SjjYYdxH6kPbysiHoJctR6mbhE3EAGEirhiqPiC/BgZ63ZhTEjp5eFUbLGhgJ31MSrm8UjFV/njBlDrlpQy6tWfhMHDLwizcSbmiEOAhEpDxsFGyJ4X01u2ajHdpjWYQHuEORML1pkPktqUzl7BH20BBywcNbG70Fn4sDwDbVSLqDFcJWwZIG/wt2ULBbMNgwlvEviM8QQI3rWLJ4p81NDd2R5Mkz5rsMtFlCIDtGTyZ1JVdZz76FX4hDBuqPmTn29wWvSwKSgTJTvME2wnWPDyNZm2Mdc4WbgV+JA4AtYjTtwRcskZZCGdU5l7gDLkLsRI7+8CtpqfO/yDi/E4cM7Gi8tdSYIZYn+VeOQN5wwarBSiZ8PJvcUBSe8Tf4rThkYNdh1bvqFJsUO4k9gq/Nws5k32ffkKrcS6yl/8LvxSEDMwmMRad2NmZYe6NbHGd0AoGxA0ldsoLUl7lWCPJn9BhxyMDZCkpQGc2XcYKl+d3h/6XHTrkJAp7Pne9PITmxe2jyc09DjxOHEvA7IEDZV0K5nJ/P/ifSzCYNPnWD9wsiMSPHkcx1UaSxytmXCDqNHi0OJbDLwYyCgjGIA+ENphNsru1Oryg6kkZLO/UW9BpxqAHHGryi8I5i14P4VKsHfmiPfmAgy15XvGyvt6LXioMHuMAhGuyAMLBwusF9j6UJgy0Tf+NzXEc8K+7vKSECdqJPiSMAYwiIIwBNBMQRgCYC4ghAEwFxBKABQv4fW7Rk98I3IHkAAAAASUVORK5CYII=); }\n  .groncirkel {\n  width: 42px;\n  height: 41px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAASnSURBVFhHzZj5UxNnGMf7b/WwttPp5dgpIDoVtTil1U5p1Y51KKFySItEBW07tAiMvbDWsSJUx9qhYgGbQpQjjqEG0kC4kpCDkPvk6T6vu7ALzyabYzv9zHx/yb7HJ/vuvsc+Af9jVldXWZLJJOQsig2Fw2Hwer3gcrn4XwEavquA1mun4abuKjyaeQjxeIy/opycRbFyIBAAm80GZrMZpqam1iLwesWTkuz65Hlo+rEWRh/pufpJvlRqshbFSisrKzAzMyORE0dgo6g45Wd2g954l7WXiqxEo9EozM7OknLiCFCCG1PdfhgcHjtfYzMZi/p8vk1DLBcBSozKvrpXYXzyPl9LSkaibrebFJKLACUll8LKZ6B3+Dpfcx3Fokol8W4vLCyA0+nkawL06q9D529tUN12CIqrtpKC4hRxsoNjt/naj1Ek6vf7SSlxrFYre7mwoVQEQj5umuqCtxoKSEkh+IeM/xj4WgpEY7FYymcSry0vL7NGMiEai0LnrfNQ8PHTpCjmoHYnhMJBVj6tKA4jJYixWCxsBsiFUdMw7K5+kRTFnO9qZuVSigaDQVIQMz09ze52PpiYNsDOqudIUXxe5+zW1KKp5kpcKvPJwPjvpCim5YpWXjQSiZCCGJwB1KDxBw0pikuu2+uiRZeWlkhJHHKsoAZ29wIUyrxcv+q6aVG5NRzfcDU5dfE4KVrX/tFm0Xg8Tkpi8JqaDBsHSdHSuu2sb4mo3NuOk7rahKMh2bnV4bJJRXGFoUTtdvndTT7BiZ4SNZoNUlGPx0OKitdvNdG0vkeKDj0YUCYqPl6oSXXHYVJUZ+iXiuKbTYnilPVfcPTLMlL0nvEvqShujinR+fl5voS67K17hRQ1W01SUVwexYK4Q8LDWygU4kuox6JrjpQsqtwCPr9PKooTK8rhWo+PQSKR4K+oz+Xb35Ci5adKmIdEFNm4fTPNGuGrLi30DFzmf8k/eIPwVEqJfv3zaXoJRbx+D3QPXIL3m/esVXjzxDYI8pvZfHNn9JZETpyRiSFa1LI4CUWaLWSl9u7P+VL5IxQJwv5Pt5P9HWgsZntfUpQNQ1MJWbGg4inQPfiDL5k7yWQC6r89RvaFuXbnEvORHfqhh/1kRcwbx1+AMZOeL5k92HnL1UayD0zZZwXcLBRKLYrUtNOrBGaH5lnuDH6DNZANvuAKnLhwlGxbyOBYHyubVtTpdUBJzUtkI0JqOz6EeYfynVWCG2p8ccrSHJnPdNas3YS0osj4pJ59waAaE4ITcv2FY9A/1steDIpF1zw3vf0EB7TFZBviHGreB8HQejuKRJG+kZspz+DiYLl3Tu6AipaDUNVaDkfO7Yc9tS+TZam8q90FTo+D7/kxikWRQe6kWKxJ/0kmlxw5WwpLxFe9jESRqbm/ubtVRHaSa5ou1nLDHeB7kpKxKILHhbaes+y5pDrMNG83FMLd8T4mIkdWogKLzjn44kqD7FeOdMEjxy/c3iESjfAtypOTqAB+oevV34CT31dCaf1rpBQGR+CDpr3Q0XMODJMjrFOl5EV0I17/MpisE3B/Qgd6458wbroHVptF0Z2TQxVRNVgXTcK/dHRLXB6aQxIAAAAASUVORK5CYII=); }\n"

/***/ }),

/***/ "./src/app/panels/panels.component.ts":
/*!********************************************!*\
  !*** ./src/app/panels/panels.component.ts ***!
  \********************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var htmlMarkup = "\n<vgr-panel-container>\n  <vgr-panel width=\"4\" themecolor=\"green\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n  <vgr-panel width=\"8\" themecolor=\"green\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n</vgr-panel-container>\n<vgr-panel-container>\n  <vgr-panel width=\"4\" noborder=\"true\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n  <vgr-panel width=\"8\" themecolor=\"red\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n</vgr-panel-container>\n<vgr-panel-container>\n  <vgr-panel width=\"6\" >\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n  <vgr-panel width=\"6\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n</vgr-panel-container>\n<vgr-panel-container>\n  <vgr-panel width=\"4\" themecolor=\"green\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n  <vgr-panel width=\"4\" themecolor=\"green\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n  <vgr-panel width=\"4\" themecolor=\"green\">\n    <!-- html f\u00F6r panel-inneh\u00E5ll -->\n  </vgr-panel>\n</vgr-panel-container>";
var PanelsComponent = /** @class */ (function () {
    function PanelsComponent(htmlEncoder) {
        this.htmlMarkup =
            htmlEncoder.prepareHighlightedSection(htmlMarkup);
    }
    PanelsComponent.prototype.ngOnInit = function () {
    };
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/panels/panels.component.html"),
            styles: [__webpack_require__(/*! ./panels.component.scss */ "./src/app/panels/panels.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/radiobuttons/radiobuttons.component.html":
/*!**********************************************************!*\
  !*** ./src/app/radiobuttons/radiobuttons.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Radio group'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-radio-group&gt;</code>\r\n    </p>\r\n    <br>\r\n    <p>En radiogroup innehåller flera radioknappar, där bara ett alternativ är valt åt gången, val kan vara förvalda och/eller\r\n      inaktiva. Vid val av alternativ triggas eventet\r\n      <code>selectedChanged</code>. Valbara items är av typen\r\n      <code>SelectableItem</code>. Det är genom att sätta properties på dessa objekt som man styr beteendet.\r\n      <br>\r\n      <vgr-radio-group [options]=\"[{value:'1', displayName:'Alternativ 1', selected:true},{value:'2', displayName:'Alternativ 2'}]\">\r\n      </vgr-radio-group>\r\n    </p>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div>\r\n      <vgr-radio-group [options]=\"[{value:'Förvald', displayName:'Förvald', selected:true},{value:'Ej förvald', displayName:'Ej förvald'}, {value:'3Inaktiv', displayName:'Inaktiv', disabled:true}]\"\r\n        (selectedChanged)=\"onSelectedRadioOptionChanged($event)\">\r\n      </vgr-radio-group>\r\n\r\n      <br>\r\n      <br>\r\n      <br>\r\n\r\n\r\n      <vgr-radio-group [options]=\"options\" (selectedChanged)=\"onSelectedRadioOptionChanged($event)\">\r\n      </vgr-radio-group>\r\n\r\n      <vgr-button (click)=\"rensaVal()\">Rensa alternativ</vgr-button>\r\n      <br>\r\n      <br>\r\n      <h2>Vertikal radiogroup</h2>\r\n      <vgr-radio-group style=\"max-width: 200px;\" [options]=\"options2\" [vertical]=\"true\" (selectedChanged)=\"onSelectedRadioOptionChanged($event)\">\r\n      </vgr-radio-group>\r\n\r\n      <br>\r\n      <h2>Horisontell radiogroup</h2>\r\n      <vgr-radio-group [options]=\"options\" (selectedChanged)=\"onSelectedRadioOptionChanged($event)\">\r\n      </vgr-radio-group>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div>Du har valt alternativ: {{selectedOption}}</div>\r\n\r\n\r\n    </div>\r\n    <br>\r\n    <br> Under \"kodexempel\" finns exempel på hur radiogroup-komponenten kan användas i Angular Reactive Forms:\r\n    <br>\r\n    <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n\r\n          options : SelectableItem[]\r\n        </td>\r\n        <td>Samling av\r\n          <code>SelectableItem</code> som utgör valbara alternativ</td>\r\n        <td>[options]=\"[item1, item2, ...]\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          disabled : boolean\r\n        </td>\r\n        <td>Defaultvärde false. Sätter hela gruppen till disabled</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          vertical : boolean\r\n        </td>\r\n        <td>Anger om radiogruppen ska ha horisontell eller vertikal layout. Defaultvärde false (horisontellt).</td>\r\n        <td>[vertical]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td> selectedChanged : EventEmitter&lt;SelectableItem&gt;</td>\r\n        <td>Event som triggas när man väljer ett nytt alternativ i radiogruppen</td>\r\n        <td>(selectedChanged)=\"onSelectedRadioOptionChanged($event)\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      <code>&lt;vgr-radiogroup&gt;</code> har en intern div vars roll är satt till radiogroup respektive radio för radioknapparna.\r\n      Förutom rollen så används attributen: attr.aria-checked (kryssad/ej ikryssad) och attr.aria-labelledby (pekning till\r\n      interna label i\r\n      <code>&lt;vgr-radiogroup&gt;</code>)\r\n\r\n    </p>\r\n    <br>\r\n    <p>\r\n      Vid tab in till radiogruppen så gäller nedan regler:\r\n      <br> - Om ingen av radioknapparna är valda så ställs in fokus på den första radioknappen i gruppen\r\n      <br> - Om en radioknapp är vald ställs fokus på den valda knappen\r\n    </p>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/radiobuttons/radiobuttons.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/radiobuttons/radiobuttons.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/radiobuttons/radiobuttons.component.ts":
/*!********************************************************!*\
  !*** ./src/app/radiobuttons/radiobuttons.component.ts ***!
  \********************************************************/
/*! exports provided: RadiobuttonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonsComponent", function() { return RadiobuttonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadiobuttonsComponent = /** @class */ (function () {
    function RadiobuttonsComponent() {
        this.notificationTypes = vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["NotificationType"];
        this.options = [];
        this.options2 = [];
    }
    RadiobuttonsComponent.prototype.ngOnInit = function () {
        this.options = [{ value: 'Val 1', displayName: 'Val 1' }, { value: 'Val 2', displayName: 'Val 2' }, { value: 'Val 3', displayName: 'Val 3' }];
        this.options2 = [{ value: 'Val 1', displayName: 'Val 1 med  väldigt lång label' }, { value: 'Val 2', displayName: 'Val 2' }, { value: 'Val 3', displayName: 'Val 3' }];
    };
    RadiobuttonsComponent.prototype.onSelectedRadioOptionChanged = function (option) {
        this.selectedOption = option;
    };
    RadiobuttonsComponent.prototype.rensaVal = function () {
        this.options.forEach(function (o) { return o.selected = false; });
    };
    RadiobuttonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radiobuttons',
            template: __webpack_require__(/*! ./radiobuttons.component.html */ "./src/app/radiobuttons/radiobuttons.component.html"),
            styles: [__webpack_require__(/*! ./radiobuttons.component.scss */ "./src/app/radiobuttons/radiobuttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RadiobuttonsComponent);
    return RadiobuttonsComponent;
}());



/***/ }),

/***/ "./src/app/reactiveforms-example/code-example.ts":
/*!*******************************************************!*\
  !*** ./src/app/reactiveforms-example/code-example.ts ***!
  \*******************************************************/
/*! exports provided: Examples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examples", function() { return Examples; });
var Examples = /** @class */ (function () {
    function Examples() {
        this.htmlOnChangeFormMarkup = "\n    <h1>On Change</h1>\n    <form [formGroup]=\"updateOnChangeForm\">\n      <vgr-title-value-layout>\n        <vgr-title-value title=\"F\u00F6rnamn\">\n          <vgr-input formControlName=\"firstname\" [showValidation]=\"updateOnChangeForm.controls.firstname.dirty\" [errorMessage]=\"validationMessages.firstname\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Efternamn\">\n          <vgr-input formControlName=\"lastname\" [showValidation]=\"updateOnChangeForm.controls.lastname.dirty\" [errorMessage]=\"validationMessages.lastname\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"\u00C5lder\">\n          <vgr-input formControlName=\"age\" [showValidation]=\"updateOnChangeForm.controls.age.dirty\" [alignRight]=\"true\" [suffix]=\"'\u00E5r'\"\n            [errorMessage]=\"validationMessages.age\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"E-post\">\n          <vgr-input formControlName=\"email\" [showValidation]=\"updateOnChangeForm.controls.email.dirty\" [errorMessage]=\"validationMessages.email\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Inkomst\">\n          <vgr-input formControlName=\"salary\" [showValidation]=\"updateOnChangeForm.controls.salary.dirty\" [errorMessage]=\"validationMessages.salary\"\n            [formatNumber]=\"true\" [nrOfDecimals]=\"0\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Favoritdjur\">\n          <vgr-dropdown formControlName=\"favourite_pet\" [noItemSelectedLabel]=\"'V\u00E4lj djur'\" [showValidation]=\"updateOnChangeForm.controls.favourite_pet.dirty\"\n            [items]=\"dropdownItems\"></vgr-dropdown>\n        </vgr-title-value>\n        <vgr-title-value title=\"Intressen\">\n          <vgr-dropdown-multiselect formControlName=\"interests\" [items]=\"dropdownItemsMulti\" [showValidation]=\"updateOnChangeForm.controls.interests.dirty\"></vgr-dropdown-multiselect>\n        </vgr-title-value>\n        <vgr-title-value title=\"Du m\u00E5ste kryssa i mig!\">\n          <vgr-checkbox formControlName=\"check\" [label]=\" 'Ok!' \"></vgr-checkbox>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj valfri\">\n          <vgr-radio-group formControlName=\"optional\" [options]=\"radioOptions\">\n          </vgr-radio-group>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj M\u00E5nad\">\n          <vgr-monthpicker formControlName=\"monthpicker\" [showValidation]=\"updateOnChangeForm.controls.monthpicker.dirty\" [minDate]=\"minDate\"\n            [maxDate]=\"maxDate\"></vgr-monthpicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj Dag\">\n          <vgr-datepicker formControlName=\"datepicker\" [showValidation]=\"updateOnChangeForm.controls.datepicker.dirty\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"Registreringsdatum\">\n          <vgr-datepicker formControlName=\"datepicker_preselected\" [showValidation]=\"updateOnChangeForm.controls.datepicker_preselected.dirty\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"Kommentar\">\n          <vgr-textarea formControlName=\"textarea\" [showValidation]=\"updateOnChangeForm.controls.textarea.dirty\"></vgr-textarea>\n        </vgr-title-value>\n      </vgr-title-value-layout>\n      <vgr-button (click)=\"onResetUpdateOnChangeForm()\">Reset form</vgr-button>\n      <vgr-button [disabled]=\"false\">Skapa anv\u00E4ndare</vgr-button>\n    </form>";
        this.htmlOnSubmitFormMarkup = " <h1>On Submit</h1>\n    <form [formGroup]=\"updateOnSubmitForm\">\n      <vgr-title-value-layout>\n        <vgr-title-value title=\"F\u00F6rnamn\">\n          <vgr-input formControlName=\"firstname\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.firstname\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Efternamn\">\n          <vgr-input formControlName=\"lastname\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.lastname\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"\u00C5lder\">\n          <vgr-input formControlName=\"age\" [showValidation]=\"formSubmitted\" [alignRight]=\"true\" [suffix]=\"'\u00E5r'\" [errorMessage]=\"validationMessages.age\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"E-post\">\n          <vgr-input formControlName=\"email\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.email\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Inkomst\">\n          <vgr-input formControlName=\"salary\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.salary\" [formatNumber]=\"true\"\n            [nrOfDecimals]=\"0\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Favoritdjur\">\n          <vgr-dropdown formControlName=\"favourite_pet\" [noItemSelectedLabel]=\"'V\u00E4lj djur'\" [showValidation]=\"formSubmitted\" [items]=\"dropdownItems\"></vgr-dropdown>\n        </vgr-title-value>\n        <vgr-title-value title=\"Intressen\">\n          <vgr-dropdown-multiselect formControlName=\"interests\" [items]=\"dropdownItemsMulti\" [showValidation]=\"formSubmitted\"></vgr-dropdown-multiselect>\n        </vgr-title-value>\n        <vgr-title-value title=\"Du m\u00E5ste kryssa i mig!\">\n          <vgr-checkbox formControlName=\"check\" [label]=\" 'Ok!' \"></vgr-checkbox>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj valfri\">\n          <vgr-radio-group formControlName=\"optional\" [options]=\"radioOptions\">\n          </vgr-radio-group>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj M\u00E5nad\">\n          <vgr-monthpicker formControlName=\"monthpicker\" [showValidation]=\"formSubmitted\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"></vgr-monthpicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj Dag\">\n          <vgr-datepicker formControlName=\"datepicker\" [showValidation]=\"formSubmitted\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"Registreringsdatum\">\n          <vgr-datepicker formControlName=\"datepicker_preselected\" [showValidation]=\"formSubmitted\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"Kommentar\">\n          <vgr-textarea formControlName=\"textarea\" [showValidation]=\"formSubmitted\"></vgr-textarea>\n        </vgr-title-value>\n      </vgr-title-value-layout>\n      <vgr-button (click)=\"onResetUpdateOnSubmitForm()\">Reset form</vgr-button>\n      <button type=\"submit\" (click)=\"onSubmit()\">Submit</button>\n    </form>";
        this.htmlOnBlurFormMarkup = "\n    <h1>On Blur</h1>\n    <form [formGroup]=\"updateOnBlurForm\">\n      <vgr-title-value-layout>\n        <vgr-title-value title=\"F\u00F6rnamn\">\n          <vgr-input formControlName=\"firstname\" [showValidation]=\"updateOnBlurForm.controls.firstname.touched\" [errorMessage]=\"validationMessages.firstname\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Efternamn\">\n          <vgr-input formControlName=\"lastname\" [showValidation]=\"updateOnBlurForm.controls.lastname.touched\" [errorMessage]=\"validationMessages.lastname\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"\u00C5lder\">\n          <vgr-input formControlName=\"age\" [showValidation]=\"updateOnBlurForm.controls.age.touched\" [alignRight]=\"true\" [suffix]=\"'\u00E5r'\"\n            [errorMessage]=\"validationMessages.age\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"E-post\">\n          <vgr-input formControlName=\"email\" [showValidation]=\"updateOnBlurForm.controls.email.touched\" [errorMessage]=\"validationMessages.email\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Inkomst\">\n          <vgr-input formControlName=\"salary\" [showValidation]=\"updateOnBlurForm.controls.salary.touched\" [errorMessage]=\"validationMessages.salary\"\n            [formatNumber]=\"true\" [nrOfDecimals]=\"0\"></vgr-input>\n        </vgr-title-value>\n        <vgr-title-value title=\"Favoritdjur\">\n          <vgr-dropdown formControlName=\"favourite_pet\" [noItemSelectedLabel]=\"'V\u00E4lj djur'\" [showValidation]=\"updateOnBlurForm.controls.favourite_pet.touched\"\n            [items]=\"dropdownItems\"></vgr-dropdown>\n        </vgr-title-value>\n        <vgr-title-value title=\"Intressen\">\n          <vgr-dropdown-multiselect formControlName=\"interests\" [items]=\"dropdownItemsMulti\" [showValidation]=\"updateOnBlurForm.controls.interests.touched\"></vgr-dropdown-multiselect>\n        </vgr-title-value>\n        <vgr-title-value title=\"Du m\u00E5ste kryssa i mig!\">\n          <vgr-checkbox formControlName=\"check\" [label]=\" 'Ok!' \"></vgr-checkbox>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj valfri\">\n          <vgr-radio-group formControlName=\"optional\" [options]=\"radioOptions\">\n          </vgr-radio-group>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj M\u00E5nad\">\n          <vgr-monthpicker formControlName=\"monthpicker\" [showValidation]=\"updateOnBlurForm.controls.monthpicker.touched\" [minDate]=\"minDate\"\n            [maxDate]=\"maxDate\"></vgr-monthpicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"V\u00E4lj Dag\">\n          <vgr-datepicker formControlName=\"datepicker\" [showValidation]=\"updateOnBlurForm.controls.datepicker.touched\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"Registreringsdatum\">\n          <vgr-datepicker formControlName=\"datepicker_preselected\" [showValidation]=\"updateOnBlurForm.controls.datepicker_preselected.touched\"></vgr-datepicker>\n        </vgr-title-value>\n        <vgr-title-value title=\"Kommentar\">\n          <vgr-textarea formControlName=\"textarea\" [showValidation]=\"updateOnBlurForm.controls.textarea.touched\"></vgr-textarea>\n        </vgr-title-value>\n      </vgr-title-value-layout>\n      <vgr-button (click)=\"onResetUpdateOnBlurForm()\">Reset form</vgr-button>\n      <vgr-button [disabled]=\"false\">Skapa anv\u00E4ndare</vgr-button>\n    </form>";
        this.typeScriptSimpleFormMarkup = "\n    import { Component, OnInit } from '@angular/core';\nimport { HtmlEncodeService } from '../html-encode.service';\nimport { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';\nimport { SelectableItem, DropdownItem } from 'vgr-komponentkartan';\nimport { Examples } from './code-example';\n\n@Component({\n    selector: 'app-reactiveformscodeexample',\n    templateUrl: './reactiveforms-example.component.html',\n    styleUrls: ['./reactiveforms-example.component.scss']\n})\nexport class ReactiveformsexampleComponent implements OnInit {\n    radioOptions1: SelectableItem<number>[];\n    radioOptions2: SelectableItem<number>[];\n    radioOptions3: SelectableItem<number>[];\n    dropdownItems: DropdownItem<string>[];\n    dropdownItemsMulti: DropdownItem<string>[];\n\n    minDate = new Date('2015');\n    maxDate = new Date('2025');\n\n    updateOnBlurForm: FormGroup;\n    updateOnSubmitForm: FormGroup;\n    updateOnChangeForm: FormGroup;\n\n    formSubmitted: boolean;\n\n    validationMessages = {\n        firstname: {\n            'minlength': 'Namnet m\u00E5ste vara minst 2 tecken',\n        },\n        lastname: {\n            'minlength': 'Namnet m\u00E5ste vara minst 2 tecken',\n        },\n        age: {\n            'invalidNumber': 'Ange en siffra',\n            'min': 'Ange en \u00E5lder p\u00E5 minst 18 \u00E5r',\n            'max': 'Ange en \u00E5lder under 120',\n        },\n        email: {\n            'email': 'Ange en giltig e-post',\n        },\n        salary: {\n            'invalidNumber': 'Ange ett giltigt belopp',\n            'required': 'Detta skriver \u00F6ver default meddelandet f\u00F6r obligatoriska f\u00E4lt'\n        }\n    };\n\n\n    typeScriptSimpleListMarkup: string;\n    htmlOnBlur: string;\n    htmlOnSubmit: string;\n    htmlOnChange: string;\n\n    examples: Examples = new Examples();\n\n    constructor(htmlEncoder: HtmlEncodeService) {\n        this.typeScriptSimpleListMarkup =\n            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptSimpleFormMarkup, 'typescript');\n        this.htmlOnBlur =\n            htmlEncoder.prepareHighlightedSection(this.examples.htmlOnBlurFormMarkup);\n        this.htmlOnSubmit =\n            htmlEncoder.prepareHighlightedSection(this.examples.htmlOnSubmitFormMarkup);\n        this.htmlOnChange =\n            htmlEncoder.prepareHighlightedSection(this.examples.htmlOnChangeFormMarkup);\n\n\n        this.radioOptions1 = [\n            { displayName: 'Ett', value: 1 },\n            { displayName: 'Tv\u00E5', value: 2 },\n            { displayName: 'Tre', value: 3 }\n        ];\n\n        this.radioOptions2 = [\n            { displayName: 'Ett', value: 1 },\n            { displayName: 'Tv\u00E5', value: 2 },\n            { displayName: 'Tre', value: 3 }\n        ];\n\n        this.radioOptions3 = [\n            { displayName: 'Ett', value: 1 },\n            { displayName: 'Tv\u00E5', value: 2 },\n            { displayName: 'Tre', value: 3 }\n        ];\n\n        this.dropdownItems = [\n            { displayName: 'Hund', value: 'Hund' },\n            { displayName: 'Katt', value: 'Katt' },\n            { displayName: 'Guldfisk', value: 'Guldfisk' }\n        ];\n\n        this.dropdownItemsMulti = [\n            { displayName: 'Koda', value: 'Koda' },\n            { displayName: '\u00C4ta', value: '\u00C4ta' },\n            { displayName: 'Sova', value: 'Soa' }\n        ];\n    }\n\n    ngOnInit() {\n        this.createOnBlurForm();\n        this.createOnSubmitForm();\n        this.createUpdateOnChangeForm();\n    }\n\n    createOnBlurForm() {\n        this.updateOnBlurForm = new FormGroup({\n            firstname: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),\n            lastname: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),\n            age: new FormControl('', { validators: [Validators.required, Validators.min(18), Validators.max(120), validateNumber] }),\n            email: new FormControl('', { validators: [Validators.required, Validators.email] }),\n            salary: new FormControl('', { validators: [Validators.required, validateNumber] }),\n            favourite_pet: new FormControl(null, { validators: [Validators.required] }),\n            interests: new FormControl(this.dropdownItemsMulti[0].value, { validators: [Validators.required] }),\n            check: new FormControl(true, { validators: [Validators.pattern('true')] }),\n            optional: new FormControl(1),\n            monthpicker: new FormControl('', { validators: [Validators.required] }),\n            datepicker: new FormControl('', { validators: [Validators.required] }),\n            datepicker_preselected: new FormControl(new Date(), { validators: [Validators.required] }),\n            textarea: new FormControl('', { validators: [Validators.required] })\n        }, { updateOn: 'blur' });\n    }\n\n    createOnSubmitForm() {\n        this.updateOnSubmitForm = new FormGroup({\n            firstname: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),\n            lastname: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),\n            age: new FormControl('', { validators: [Validators.required, Validators.min(18), Validators.max(120), validateNumber] }),\n            email: new FormControl('', { validators: [Validators.required, Validators.email] }),\n            salary: new FormControl('', { validators: [Validators.required, validateNumber] }),\n            favourite_pet: new FormControl(null, { validators: [Validators.required] }),\n            interests: new FormControl(this.dropdownItemsMulti[0].value, { validators: [Validators.required] }),\n            check: new FormControl(true, { validators: [Validators.pattern('true')] }),\n            optional: new FormControl(2),\n            monthpicker: new FormControl('', { validators: [Validators.required] }),\n            datepicker: new FormControl('', { validators: [Validators.required] }),\n            datepicker_preselected: new FormControl(new Date(), { validators: [Validators.required] }),\n            textarea: new FormControl('', { validators: [Validators.required] })\n        }, { updateOn: 'submit' });\n    }\n\n    createUpdateOnChangeForm() {\n        this.updateOnChangeForm = new FormGroup({\n            firstname: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),\n            lastname: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),\n            age: new FormControl('', { validators: [Validators.required, Validators.min(18), Validators.max(120), validateNumber] }),\n            email: new FormControl('', { validators: [Validators.required, Validators.email] }),\n            salary: new FormControl('', { validators: [Validators.required, validateNumber] }),\n            favourite_pet: new FormControl(null, { validators: [Validators.required] }),\n            interests: new FormControl(this.dropdownItemsMulti[0].value, { validators: [Validators.required] }),\n            check: new FormControl(true, { validators: [Validators.pattern('true')] }),\n            optional: new FormControl(3),\n            monthpicker: new FormControl('', { validators: [Validators.required] }),\n            datepicker: new FormControl('', { validators: [Validators.required] }),\n            datepicker_preselected: new FormControl(new Date(), { validators: [Validators.required] }),\n            textarea: new FormControl('', { validators: [Validators.required] })\n        }, { updateOn: 'change' });\n    }\n\n    onSubmit() {\n        this.formSubmitted = true;\n    }\n\n    onResetUpdateOnBlurForm() {\n        this.updateOnBlurForm.reset();\n    }\n\n    onResetUpdateOnSubmitForm() {\n        this.updateOnSubmitForm.reset();\n        this.formSubmitted = false;\n    }\n\n    onResetUpdateOnChangeForm() {\n        this.updateOnChangeForm.reset();\n    }\n\n    onSubmitUpdateOnBlurForm() {\n    }\n}\n\n// Custom validator\nfunction validateNumber(control: AbstractControl) {\n    const pattern = '^[-,\u2212]{0,1}(\\d{1,3}([,\\s.]\\d{3})*|\\d+)([.,]\\d+)?$';\n\n    const regexp = new RegExp(pattern);\n    if (regexp.test(control.value)) {\n        return null;\n    }\n    return { invalidNumber: true };\n}\n\n    \n    ";
    }
    return Examples;
}());



/***/ }),

/***/ "./src/app/reactiveforms-example/reactiveforms-example.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/reactiveforms-example/reactiveforms-example.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Kodexempel Reactive Forms'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-card>\r\n        <vgr-card-column>\r\n          <h1>On Blur</h1>\r\n          <form [formGroup]=\"updateOnBlurForm\">\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value title=\"Förnamn\">\r\n                <vgr-input formControlName=\"firstname\" [showValidation]=\"updateOnBlurForm.controls.firstname.touched\" [errorMessage]=\"validationMessages.firstname\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Efternamn\">\r\n                <vgr-input formControlName=\"lastname\" [showValidation]=\"updateOnBlurForm.controls.lastname.touched\" [errorMessage]=\"validationMessages.lastname\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Ålder\">\r\n                <vgr-input formControlName=\"age\" [showValidation]=\"updateOnBlurForm.controls.age.touched\" [alignRight]=\"true\" [suffix]=\"'år'\"\r\n                  [errorMessage]=\"validationMessages.age\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"E-post\">\r\n                <vgr-input formControlName=\"email\" [showValidation]=\"updateOnBlurForm.controls.email.touched\" [errorMessage]=\"validationMessages.email\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Inkomst\">\r\n                <vgr-input formControlName=\"salary\" [showValidation]=\"updateOnBlurForm.controls.salary.touched\" [errorMessage]=\"validationMessages.salary\"\r\n                  [formatNumber]=\"true\" [nrOfDecimals]=\"0\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Favoritdjur\">\r\n                <vgr-dropdown formControlName=\"favourite_pet\" [noItemSelectedLabel]=\"'Välj djur'\" [showValidation]=\"updateOnBlurForm.controls.favourite_pet.touched\"\r\n                  [items]=\"dropdownItems\"></vgr-dropdown>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Intressen\">\r\n                <vgr-dropdown-multiselect formControlName=\"interests\" [items]=\"dropdownItemsMulti\" [showValidation]=\"updateOnBlurForm.controls.interests.touched\"></vgr-dropdown-multiselect>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Du måste kryssa i mig!\">\r\n                <vgr-checkbox formControlName=\"check\" [label]=\" 'Ok!' \"></vgr-checkbox>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj valfri\">\r\n                <vgr-radio-group formControlName=\"optional\" [options]=\"radioOptions1\">\r\n                </vgr-radio-group>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj Månad\">\r\n                <vgr-monthpicker formControlName=\"monthpicker\" [showValidation]=\"updateOnBlurForm.controls.monthpicker.touched\" [minDate]=\"minDate\"\r\n                  [maxDate]=\"maxDate\"></vgr-monthpicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj Dag\">\r\n                <vgr-datepicker formControlName=\"datepicker\" [showValidation]=\"updateOnBlurForm.controls.datepicker.touched\"></vgr-datepicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Registreringsdatum\">\r\n                <vgr-datepicker formControlName=\"datepicker_preselected\" [showValidation]=\"updateOnBlurForm.controls.datepicker_preselected.touched\"></vgr-datepicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Kommentar\">\r\n                <vgr-textarea formControlName=\"textarea\" [showValidation]=\"updateOnBlurForm.controls.textarea.touched\"></vgr-textarea>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n            <vgr-button (click)=\"onResetUpdateOnBlurForm()\">Reset form</vgr-button>\r\n            <vgr-button (click)=\"onSubmitUpdateOnBlurForm()\" [disabled]=\"false\">Skapa användare</vgr-button>\r\n          </form>\r\n        </vgr-card-column>\r\n        <vgr-card-column>\r\n          <h1>On Submit</h1>\r\n          <form [formGroup]=\"updateOnSubmitForm\">\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value title=\"Förnamn\">\r\n                <vgr-input formControlName=\"firstname\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.firstname\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Efternamn\">\r\n                <vgr-input formControlName=\"lastname\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.lastname\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Ålder\">\r\n                <vgr-input formControlName=\"age\" [showValidation]=\"formSubmitted\" [alignRight]=\"true\" [suffix]=\"'år'\" [errorMessage]=\"validationMessages.age\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"E-post\">\r\n                <vgr-input formControlName=\"email\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.email\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Inkomst\">\r\n                <vgr-input formControlName=\"salary\" [showValidation]=\"formSubmitted\" [errorMessage]=\"validationMessages.salary\" [formatNumber]=\"true\"\r\n                  [nrOfDecimals]=\"0\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Favoritdjur\">\r\n                <vgr-dropdown formControlName=\"favourite_pet\" [noItemSelectedLabel]=\"'Välj djur'\" [showValidation]=\"formSubmitted\" [items]=\"dropdownItems\"></vgr-dropdown>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Intressen\">\r\n                <vgr-dropdown-multiselect formControlName=\"interests\" [items]=\"dropdownItemsMulti\" [showValidation]=\"formSubmitted\"></vgr-dropdown-multiselect>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Du måste kryssa i mig!\">\r\n                <vgr-checkbox formControlName=\"check\" [label]=\" 'Ok!' \"></vgr-checkbox>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj valfri\">\r\n                <vgr-radio-group formControlName=\"optional\" [options]=\"radioOptions2\">\r\n                </vgr-radio-group>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj Månad\">\r\n                <vgr-monthpicker formControlName=\"monthpicker\" [showValidation]=\"formSubmitted\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"></vgr-monthpicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj Dag\">\r\n                <vgr-datepicker formControlName=\"datepicker\" [showValidation]=\"formSubmitted\"></vgr-datepicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Registreringsdatum\">\r\n                <vgr-datepicker formControlName=\"datepicker_preselected\" [showValidation]=\"formSubmitted\"></vgr-datepicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Kommentar\">\r\n                <vgr-textarea formControlName=\"textarea\" [showValidation]=\"formSubmitted\"></vgr-textarea>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n            <vgr-button (click)=\"onResetUpdateOnSubmitForm()\">Reset form</vgr-button>\r\n            <vgr-button type=\"submit\" (click)=\"onSubmit()\">Submit</vgr-button>\r\n          </form>\r\n        </vgr-card-column>\r\n      </vgr-card>\r\n      <vgr-card>\r\n        <vgr-card-column>\r\n          <h1>On Change</h1>\r\n          <form [formGroup]=\"updateOnChangeForm\">\r\n            <vgr-title-value-layout>\r\n              <vgr-title-value title=\"Förnamn\">\r\n                <vgr-input formControlName=\"firstname\" [showValidation]=\"updateOnChangeForm.controls.firstname.dirty\" [errorMessage]=\"validationMessages.firstname\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Efternamn\">\r\n                <vgr-input formControlName=\"lastname\" [showValidation]=\"updateOnChangeForm.controls.lastname.dirty\" [errorMessage]=\"validationMessages.lastname\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Ålder\">\r\n                <vgr-input formControlName=\"age\" [showValidation]=\"updateOnChangeForm.controls.age.dirty\" [alignRight]=\"true\" [suffix]=\"'år'\"\r\n                  [errorMessage]=\"validationMessages.age\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"E-post\">\r\n                <vgr-input formControlName=\"email\" [showValidation]=\"updateOnChangeForm.controls.email.dirty\" [errorMessage]=\"validationMessages.email\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Inkomst\">\r\n                <vgr-input formControlName=\"salary\" [showValidation]=\"updateOnChangeForm.controls.salary.dirty\" [errorMessage]=\"validationMessages.salary\"\r\n                  [formatNumber]=\"true\" [nrOfDecimals]=\"0\"></vgr-input>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Favoritdjur\">\r\n                <vgr-dropdown formControlName=\"favourite_pet\" [noItemSelectedLabel]=\"'Välj djur'\" [showValidation]=\"updateOnChangeForm.controls.favourite_pet.dirty\"\r\n                  [items]=\"dropdownItems\"></vgr-dropdown>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Intressen\">\r\n                <vgr-dropdown-multiselect formControlName=\"interests\" [items]=\"dropdownItemsMulti\" [showValidation]=\"updateOnChangeForm.controls.interests.dirty\">\r\n                </vgr-dropdown-multiselect>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Du måste kryssa i mig!\">\r\n                <vgr-checkbox formControlName=\"check\" [label]=\" 'Ok!' \"></vgr-checkbox>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj valfri\">\r\n                <vgr-radio-group formControlName=\"optional\" [options]=\"radioOptions3\">\r\n                </vgr-radio-group>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj Månad\">\r\n                <vgr-monthpicker formControlName=\"monthpicker\" [showValidation]=\"updateOnChangeForm.controls.monthpicker.dirty\" [minDate]=\"minDate\"\r\n                  [maxDate]=\"maxDate\"></vgr-monthpicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Välj Dag\">\r\n                <vgr-datepicker formControlName=\"datepicker\" [showValidation]=\"updateOnChangeForm.controls.datepicker.dirty\"></vgr-datepicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Registreringsdatum\">\r\n                <vgr-datepicker formControlName=\"datepicker_preselected\" [showValidation]=\"updateOnChangeForm.controls.datepicker_preselected.dirty\"></vgr-datepicker>\r\n              </vgr-title-value>\r\n              <vgr-title-value title=\"Kommentar\">\r\n                <vgr-textarea formControlName=\"textarea\" [showValidation]=\"updateOnChangeForm.controls.textarea.dirty\"></vgr-textarea>\r\n              </vgr-title-value>\r\n            </vgr-title-value-layout>\r\n            <vgr-button (click)=\"onResetUpdateOnChangeForm()\">Reset form</vgr-button>\r\n            <vgr-button [disabled]=\"false\">Skapa användare</vgr-button>\r\n          </form>\r\n        </vgr-card-column>\r\n        <vgr-card-column>\r\n        </vgr-card-column>\r\n      </vgr-card>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML On Blur</h3>\r\n        <section [innerHTML]=\"htmlOnBlur\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML On Submit</h3>\r\n        <section [innerHTML]=\"htmlOnSubmit\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>HTML On Change</h3>\r\n        <section [innerHTML]=\"htmlOnChange\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <div>\r\n        <h3>Typescript samtliga</h3>\r\n        <section [innerHTML]=\"typeScriptSimpleListMarkup\" highlight-js-content=\".highlight\"></section>\r\n      </div>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/reactiveforms-example/reactiveforms-example.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/reactiveforms-example/reactiveforms-example.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "vgr-button {\n  float: right;\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/reactiveforms-example/reactiveforms-example.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/reactiveforms-example/reactiveforms-example.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReactiveformsexampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveformsexampleComponent", function() { return ReactiveformsexampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-example */ "./src/app/reactiveforms-example/code-example.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveformsexampleComponent = /** @class */ (function () {
    function ReactiveformsexampleComponent(htmlEncoder) {
        this.minDate = new Date('2015');
        this.maxDate = new Date('2025');
        this.validationMessages = {
            firstname: {
                'minlength': 'Namnet måste vara minst 2 tecken',
            },
            lastname: {
                'minlength': 'Namnet måste vara minst 2 tecken',
            },
            age: {
                'invalidNumber': 'Ange en siffra',
                'min': 'Ange en ålder på minst 18 år',
                'max': 'Ange en ålder under 120',
            },
            email: {
                'email': 'Ange en giltig e-post',
            },
            salary: {
                'invalidNumber': 'Ange ett giltigt belopp',
                'required': 'Detta skriver över default meddelandet för obligatoriska fält'
            }
        };
        this.examples = new _code_example__WEBPACK_IMPORTED_MODULE_3__["Examples"]();
        this.typeScriptSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptSimpleFormMarkup, 'typescript');
        this.htmlOnBlur =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlOnBlurFormMarkup);
        this.htmlOnSubmit =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlOnSubmitFormMarkup);
        this.htmlOnChange =
            htmlEncoder.prepareHighlightedSection(this.examples.htmlOnChangeFormMarkup);
        this.radioOptions1 = [
            { displayName: 'Ett', value: 1 },
            { displayName: 'Två', value: 2 },
            { displayName: 'Tre', value: 3 }
        ];
        this.radioOptions2 = [
            { displayName: 'Ett', value: 1 },
            { displayName: 'Två', value: 2 },
            { displayName: 'Tre', value: 3 }
        ];
        this.radioOptions3 = [
            { displayName: 'Ett', value: 1 },
            { displayName: 'Två', value: 2 },
            { displayName: 'Tre', value: 3 }
        ];
        this.dropdownItems = [
            { displayName: 'Hund', value: 'Hund' },
            { displayName: 'Katt', value: 'Katt' },
            { displayName: 'Guldfisk', value: 'Guldfisk' }
        ];
        this.dropdownItemsMulti = [
            { displayName: 'Koda', value: 'Koda' },
            { displayName: 'Äta', value: 'Äta' },
            { displayName: 'Sova', value: 'Soa' }
        ];
    }
    ReactiveformsexampleComponent.prototype.ngOnInit = function () {
        this.createOnBlurForm();
        this.createOnSubmitForm();
        this.createUpdateOnChangeForm();
    };
    ReactiveformsexampleComponent.prototype.createOnBlurForm = function () {
        this.updateOnBlurForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)] }),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)] }),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(120), validateNumber] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email] }),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, validateNumber] }),
            favourite_pet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            interests: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([this.dropdownItemsMulti[0].value], { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')] }),
            optional: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1),
            monthpicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            datepicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            datepicker_preselected: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            textarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        }, { updateOn: 'blur' });
    };
    ReactiveformsexampleComponent.prototype.createOnSubmitForm = function () {
        this.updateOnSubmitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)] }),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)] }),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(120), validateNumber] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email] }),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, validateNumber] }),
            favourite_pet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            interests: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dropdownItemsMulti[0].value, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')] }),
            optional: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](2),
            monthpicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            datepicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            datepicker_preselected: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            textarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        }, { updateOn: 'submit' });
    };
    ReactiveformsexampleComponent.prototype.createUpdateOnChangeForm = function () {
        this.updateOnChangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)] }),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)] }),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(120), validateNumber] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email] }),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, validateNumber] }),
            favourite_pet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            interests: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dropdownItemsMulti[0].value, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')] }),
            optional: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](3),
            monthpicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            datepicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            datepicker_preselected: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            textarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        }, { updateOn: 'change' });
    };
    ReactiveformsexampleComponent.prototype.onSubmit = function () {
        this.formSubmitted = true;
    };
    ReactiveformsexampleComponent.prototype.onResetUpdateOnBlurForm = function () {
        this.updateOnBlurForm.reset();
    };
    ReactiveformsexampleComponent.prototype.onResetUpdateOnSubmitForm = function () {
        this.updateOnSubmitForm.reset();
        this.formSubmitted = false;
    };
    ReactiveformsexampleComponent.prototype.onResetUpdateOnChangeForm = function () {
        this.updateOnChangeForm.reset();
    };
    ReactiveformsexampleComponent.prototype.onSubmitUpdateOnBlurForm = function () {
    };
    ReactiveformsexampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reactiveformscodeexample',
            template: __webpack_require__(/*! ./reactiveforms-example.component.html */ "./src/app/reactiveforms-example/reactiveforms-example.component.html"),
            styles: [__webpack_require__(/*! ./reactiveforms-example.component.scss */ "./src/app/reactiveforms-example/reactiveforms-example.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], ReactiveformsexampleComponent);
    return ReactiveformsexampleComponent;
}());

// Custom validator
function validateNumber(control) {
    var pattern = '^[-,−]{0,1}(\\d{1,3}([,\\s.]\\d{3})*|\\d+)([.,]\\d+)?$';
    var regexp = new RegExp(pattern);
    if (regexp.test(control.value)) {
        return null;
    }
    return { invalidNumber: true };
}


/***/ }),

/***/ "./src/app/ring-with-text/ring-with-text.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ring-with-text/ring-with-text.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ring-with-text/ring-with-text.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ring-with-text/ring-with-text.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Ring med text'\">\r\n\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-ring-with-textn&gt; </code> Kan användas tillexempel för att visa upp en inloggad användares initialer. Det går att styra både text, färg och storlek. <br>Här är ett exampel, det går att se fler under exempel här under. <vgr-ring-with-text text=\"NE\" size=\"small\" textColor=\"white\" circleColor=\"#314152\"></vgr-ring-with-text>\r\n      <br>\r\n    </p>\r\n    <p> Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"docs__examples\">\r\n    <div class=\"column-layout\">\r\n      <h2>Lilla storleken</h2>\r\n      <div>\r\n        <vgr-ring-with-text text=\"NE\" size=\"small\" textColor=\"white\" circleColor=\"#9D2235\"></vgr-ring-with-text>\r\n        <vgr-ring-with-text text=\"FP\" size=\"small\" textColor=\"white\" circleColor=\"#7fa276\"></vgr-ring-with-text>\r\n        <vgr-ring-with-text text=\"MW\" size=\"small\" textColor=\"white\" circleColor=\"#006298\"></vgr-ring-with-text>\r\n        <vgr-ring-with-text text=\"G\" size=\"small\" textColor=\"#000\" circleColor=\"#ECF1EB\"></vgr-ring-with-text>\r\n      </div>\r\n      <h2>Stora storleken</h2>\r\n      <div>\r\n        <vgr-ring-with-text text=\"CK\" size=\"large\" textColor=\"white\" circleColor=\"#4A773C\"></vgr-ring-with-text>\r\n        <vgr-ring-with-text text=\"Q\" size=\"large\" textColor=\"white\" circleColor=\"151515\"></vgr-ring-with-text>\r\n        <vgr-ring-with-text text=\"WM\" size=\"large\" textColor=\"black\" circleColor=\"#f9dede\"></vgr-ring-with-text>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table \">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>text : string</td>\r\n        <td>Texten som skall stå i ringen (ett eller två tecken). Skriver man fler tecken så visas endast de två första och skriver man ingen text visas ingen ring.</td>\r\n        <td>text=\"NE\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>size : string</td>\r\n        <td>Storleken på cirkeln. Värdena den accepterar är \"small\" (default) och \"large\".</td>\r\n        <td>size=\"small\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>textColor : string</td>\r\n        <td>Färgen på texten i ringen. Accepterar html-kompatibla färgväden (HEX eller färgnamn)</td>\r\n        <td>textColor=\"white\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>circleColor : string</td>\r\n        <td>Färgen på cirkeln. Accepterar html-kompatibla färgväden (HEX eller färgnamn)</td>\r\n        <td>circleColor=\"#000000\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"docs__wcag\">\r\n    <i>Ej tillgängligt.</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/ring-with-text/ring-with-text.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ring-with-text/ring-with-text.component.ts ***!
  \************************************************************/
/*! exports provided: RingWithTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RingWithTextComponent", function() { return RingWithTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RingWithTextComponent = /** @class */ (function () {
    function RingWithTextComponent() {
    }
    RingWithTextComponent.prototype.ngOnInit = function () {
    };
    RingWithTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ring-with-text',
            template: __webpack_require__(/*! ./ring-with-text.component.html */ "./src/app/ring-with-text/ring-with-text.component.html"),
            styles: [__webpack_require__(/*! ./ring-with-text.component.css */ "./src/app/ring-with-text/ring-with-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RingWithTextComponent);
    return RingWithTextComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _inputfields_inputfields_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputfields/inputfields.component */ "./src/app/inputfields/inputfields.component.ts");
/* harmony import */ var _textareafield_textareafield_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textareafield/textareafield.component */ "./src/app/textareafield/textareafield.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthpicker/monthpicker.component */ "./src/app/monthpicker/monthpicker.component.ts");
/* harmony import */ var _colours_colours_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colours/colours.component */ "./src/app/colours/colours.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/checkbox/checkbox.component.ts");
/* harmony import */ var _dropdownmultiselect_dropdownmultiselect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdownmultiselect/dropdownmultiselect.component */ "./src/app/dropdownmultiselect/dropdownmultiselect.component.ts");
/* harmony import */ var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdowns/dropdowns.component */ "./src/app/dropdowns/dropdowns.component.ts");
/* harmony import */ var _formattemplate_formattemplate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formattemplate/formattemplate.component */ "./src/app/formattemplate/formattemplate.component.ts");
/* harmony import */ var _headers_headers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./headers/headers.component */ "./src/app/headers/headers.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _lockbutton_lockbutton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lockbutton/lockbutton.component */ "./src/app/lockbutton/lockbutton.component.ts");
/* harmony import */ var _closebutton_closebutton_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./closebutton/closebutton.component */ "./src/app/closebutton/closebutton.component.ts");
/* harmony import */ var _modaldialog_modaldialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modaldialog/modaldialog.component */ "./src/app/modaldialog/modaldialog.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/panels/panels.component.ts");
/* harmony import */ var _radiobuttons_radiobuttons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./radiobuttons/radiobuttons.component */ "./src/app/radiobuttons/radiobuttons.component.ts");
/* harmony import */ var _textbuttons_textbuttons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./textbuttons/textbuttons.component */ "./src/app/textbuttons/textbuttons.component.ts");
/* harmony import */ var _savecancel_savecancel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./savecancel/savecancel.component */ "./src/app/savecancel/savecancel.component.ts");
/* harmony import */ var _backtotop_backtotop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./backtotop/backtotop.component */ "./src/app/backtotop/backtotop.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _theming_theming_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theming/theming.component */ "./src/app/theming/theming.component.ts");
/* harmony import */ var _title_value_title_value_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./title-value/title-value.component */ "./src/app/title-value/title-value.component.ts");
/* harmony import */ var _filtertexbox_filtertexbox_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filtertexbox/filtertexbox.component */ "./src/app/filtertexbox/filtertexbox.component.ts");
/* harmony import */ var _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page-structure/page-structure.component */ "./src/app/page-structure/page-structure.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _sizes_sizes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sizes/sizes.component */ "./src/app/sizes/sizes.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _lists_examples_withnotification_listexample_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lists/examples/withnotification/listexample.component */ "./src/app/lists/examples/withnotification/listexample.component.ts");
/* harmony import */ var _lists_examples_withrownotifications_listexamplewithrownotification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lists/examples/withrownotifications/listexamplewithrownotification.component */ "./src/app/lists/examples/withrownotifications/listexamplewithrownotification.component.ts");
/* harmony import */ var _lists_examples_simple_listcodeexample_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lists/examples/simple/listcodeexample.component */ "./src/app/lists/examples/simple/listcodeexample.component.ts");
/* harmony import */ var _lists_examples_withactionbuttons_listexamplewithactionbuttons_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lists/examples/withactionbuttons/listexamplewithactionbuttons.component */ "./src/app/lists/examples/withactionbuttons/listexamplewithactionbuttons.component.ts");
/* harmony import */ var _reactiveforms_example_reactiveforms_example_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./reactiveforms-example/reactiveforms-example.component */ "./src/app/reactiveforms-example/reactiveforms-example.component.ts");
/* harmony import */ var _expandable_div_expandable_div_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./expandable-div/expandable-div.component */ "./src/app/expandable-div/expandable-div.component.ts");
/* harmony import */ var _lists_examples_withexpandablediv_listexamplewithexpandablediv_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lists/examples/withexpandablediv/listexamplewithexpandablediv.component */ "./src/app/lists/examples/withexpandablediv/listexamplewithexpandablediv.component.ts");
/* harmony import */ var _examples_listwithcards_examples_listwithcards_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./examples-listwithcards/examples-listwithcards.component */ "./src/app/examples-listwithcards/examples-listwithcards.component.ts");
/* harmony import */ var _examples_listwithlists_examples_listwithlists_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./examples-listwithlists/examples-listwithlists.component */ "./src/app/examples-listwithlists/examples-listwithlists.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _filter_tag_filter_tag_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filter-tag/filter-tag.component */ "./src/app/filter-tag/filter-tag.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _actionpanels_actionpanels_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./actionpanels/actionpanels.component */ "./src/app/actionpanels/actionpanels.component.ts");
/* harmony import */ var _ring_with_text_ring_with_text_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ring-with-text/ring-with-text.component */ "./src/app/ring-with-text/ring-with-text.component.ts");
/* harmony import */ var _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./toggle-button/toggle-button.component */ "./src/app/toggle-button/toggle-button.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
// Domain












































var appRoutes = [
    { path: 'inputFields', component: _inputfields_inputfields_component__WEBPACK_IMPORTED_MODULE_0__["InputfieldsComponent"] },
    { path: 'textareafield', component: _textareafield_textareafield_component__WEBPACK_IMPORTED_MODULE_1__["TextareafieldComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_39__["IconsComponent"] },
    { path: 'textbuttons', component: _textbuttons_textbuttons_component__WEBPACK_IMPORTED_MODULE_17__["TextbuttonsComponent"] },
    { path: 'radioButtons', component: _radiobuttons_radiobuttons_component__WEBPACK_IMPORTED_MODULE_16__["RadiobuttonsComponent"] },
    { path: 'checkbox', component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"] },
    { path: 'closebutton', component: _closebutton_closebutton_component__WEBPACK_IMPORTED_MODULE_13__["ClosebuttonComponent"] },
    { path: 'colours', component: _colours_colours_component__WEBPACK_IMPORTED_MODULE_4__["ColoursComponent"] },
    { path: 'dropdownmultiselect', component: _dropdownmultiselect_dropdownmultiselect_component__WEBPACK_IMPORTED_MODULE_6__["DropdownmultiselectComponent"] },
    { path: 'dropdowns', component: _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_7__["DropdownsComponent"] },
    { path: 'datepicker', component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_2__["DatepickerComponent"] },
    { path: 'monthpicker', component: _monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_3__["MonthpickerComponent"] },
    { path: 'formattemplate', component: _formattemplate_formattemplate_component__WEBPACK_IMPORTED_MODULE_8__["FormattemplateComponent"] },
    { path: 'headers', component: _headers_headers_component__WEBPACK_IMPORTED_MODULE_9__["HeadersComponent"] },
    { path: 'loader', component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"] },
    { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_10__["ListsComponent"] },
    { path: 'listexample-notification', component: _lists_examples_withnotification_listexample_component__WEBPACK_IMPORTED_MODULE_28__["ListexampleComponent"] },
    { path: 'listexample-notifications', component: _lists_examples_withrownotifications_listexamplewithrownotification_component__WEBPACK_IMPORTED_MODULE_29__["ListexamplewithrownotificationComponent"] },
    { path: 'lockbutton', component: _lockbutton_lockbutton_component__WEBPACK_IMPORTED_MODULE_12__["LockbuttonComponent"] },
    { path: 'panels', component: _panels_panels_component__WEBPACK_IMPORTED_MODULE_15__["PanelsComponent"] },
    { path: 'modaldialog', component: _modaldialog_modaldialog_component__WEBPACK_IMPORTED_MODULE_14__["ModaldialogComponent"] },
    { path: 'savecancel', component: _savecancel_savecancel_component__WEBPACK_IMPORTED_MODULE_18__["SavecancelComponent"] },
    { path: 'backtotop', component: _backtotop_backtotop_component__WEBPACK_IMPORTED_MODULE_19__["BacktotopComponent"] },
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_20__["StartComponent"] },
    { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_37__["TableComponent"] },
    { path: 'theming', component: _theming_theming_component__WEBPACK_IMPORTED_MODULE_21__["ThemingComponent"] },
    { path: 'titlevalue', component: _title_value_title_value_component__WEBPACK_IMPORTED_MODULE_22__["TitleValueComponent"] },
    { path: 'filtertextbox', component: _filtertexbox_filtertexbox_component__WEBPACK_IMPORTED_MODULE_23__["FiltertexboxComponent"] },
    { path: 'pagestructure', component: _page_structure_page_structure_component__WEBPACK_IMPORTED_MODULE_24__["PageStructureComponent"] },
    { path: 'card', component: _card_card_component__WEBPACK_IMPORTED_MODULE_25__["CardComponent"] },
    { path: 'sizes', component: _sizes_sizes_component__WEBPACK_IMPORTED_MODULE_26__["SizesComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_27__["MenuComponent"] },
    { path: 'listexample-simple', component: _lists_examples_simple_listcodeexample_component__WEBPACK_IMPORTED_MODULE_30__["ListcodeexampleComponent"] },
    { path: 'listexample-actionbuttons', component: _lists_examples_withactionbuttons_listexamplewithactionbuttons_component__WEBPACK_IMPORTED_MODULE_31__["ListExampleWithActionButtonsComponent"] },
    { path: 'reactiveformsexample', component: _reactiveforms_example_reactiveforms_example_component__WEBPACK_IMPORTED_MODULE_32__["ReactiveformsexampleComponent"] },
    { path: 'expandablediv', component: _expandable_div_expandable_div_component__WEBPACK_IMPORTED_MODULE_33__["ExpandableDivComponent"] },
    { path: 'listexample-expandable-div', component: _lists_examples_withexpandablediv_listexamplewithexpandablediv_component__WEBPACK_IMPORTED_MODULE_34__["ListexamplewithexpandabledivComponent"] },
    { path: 'examples-listwithcards', component: _examples_listwithcards_examples_listwithcards_component__WEBPACK_IMPORTED_MODULE_35__["ExamplesListwithcardsComponent"] },
    { path: 'examples-listwithlists', component: _examples_listwithlists_examples_listwithlists_component__WEBPACK_IMPORTED_MODULE_36__["ExamplesListwithlistsComponent"] },
    { path: 'actionPanels', component: _actionpanels_actionpanels_component__WEBPACK_IMPORTED_MODULE_40__["ActionPanelsComponent"] },
    { path: 'filter-tag', component: _filter_tag_filter_tag_component__WEBPACK_IMPORTED_MODULE_38__["FilterTagComponent"] },
    { path: 'ring-with-text', component: _ring_with_text_ring_with_text_component__WEBPACK_IMPORTED_MODULE_41__["RingWithTextComponent"] },
    { path: 'togglebutton', component: _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_42__["ToggleButtonComponent"] },
    { path: 'search-result', component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_43__["SearchResultComponent"] },
    { path: '**', redirectTo: '/' }
];


/***/ }),

/***/ "./src/app/savecancel/savecancel.component.html":
/*!******************************************************!*\
  !*** ./src/app/savecancel/savecancel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Save/Cancel'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-save-cancel&gt;</code>\r\n    </p>\r\n    <br>\r\n    <p>En panel som innehåller spara, avbryt samt låsknapp. Spara och avbryt är inaktiverade i låst läge. De kan aktiveras genom\r\n      att låsa upp. När spara eller avbryt sedan trycks ned, låses panelen igen. Låsknappen är inaktiverad när låset är upplåst.\r\n    </p>\r\n    <br>\r\n    <div>\r\n      <vgr-save-cancel (save)=\"saveCancelMessage='Sparade!'\" (cancel)=\"saveCancelMessage='Avbröt.'\"></vgr-save-cancel>\r\n    </div>\r\n    <br>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <div>\r\n      <vgr-save-cancel (save)=\"saveCancelMessage='Sparade!'\" (cancel)=\"saveCancelMessage='Avbröt.'\" (unlock)=\"saveCancelMessage='Låste upp'\"></vgr-save-cancel>\r\n      <br>\r\n      <span>Senaste händelse:&nbsp;\r\n        <strong>{{saveCancelMessage}}</strong>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          locked : boolean\r\n        </td>\r\n        <td><code>true</code> betyder att låset är låst, spara och avbryt är inaktiva. <code>false</code> betyder att låset upplåst, spara och avbryt är aktiva. Default är <code>true</code>.</td>\r\n        <td>[locked]=\"false\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          secondary : boolean\r\n        </td>\r\n        <td>Om knappar ska vara sekundärknappar eller ej. Default är <code>false</code>.</td>\r\n        <td>[secondary]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          cancel : EventEmitter\r\n        </td>\r\n        <td>Triggas då användaren klickar på avbryt</td>\r\n        <td>(cancel)=\"cancel()\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          save : EventEmitter\r\n        </td>\r\n        <td>Triggas då användaren klickar på spara</td>\r\n        <td>(save)=\"save()\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          unlock : EventEmitter\r\n        </td>\r\n        <td>Triggas då användaren låser upp låset</td>\r\n        <td>(unlock)=\"unlock()\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <i>Under utveckling</i>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/savecancel/savecancel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/savecancel/savecancel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/savecancel/savecancel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/savecancel/savecancel.component.ts ***!
  \****************************************************/
/*! exports provided: SavecancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavecancelComponent", function() { return SavecancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SavecancelComponent = /** @class */ (function () {
    function SavecancelComponent() {
    }
    SavecancelComponent.prototype.ngOnInit = function () {
    };
    SavecancelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savecancel',
            template: __webpack_require__(/*! ./savecancel.component.html */ "./src/app/savecancel/savecancel.component.html"),
            styles: [__webpack_require__(/*! ./savecancel.component.scss */ "./src/app/savecancel/savecancel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SavecancelComponent);
    return SavecancelComponent;
}());



/***/ }),

/***/ "./src/app/search-result/search-result.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-result/search-result.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Search results'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>&lt;vgr-search-result&gt;</code> är en sökresultat-lista som går att koppla till en input-komponent. För att den skall\r\n      placera sig rätt behöver man wrappa båda komponenterna i en div med klassen\r\n      <code>search-result-wrapper</code>.\r\n      <br> Man kan skicka med en egen beskrivande text till sökresulatet och det finns också möjlighet att ha en kursiverad andra\r\n      rad i sökresultatet.\r\n      <br>\r\n      <br>Klicka i input-fältet för att visa ett exempel på sökresultatlistan.\r\n    </p>\r\n    <br>\r\n    <div class=\"search-result-wrapper\">\r\n      <vgr-input (click)=\"openDropdown()\"> </vgr-input>\r\n      <p>Event emittat vid klick: {{output | json}}</p>\r\n      <vgr-search-result [items]=\"items\" [(visible)]=\"dropdownVisible\" (itemClick)=\"closeDropdown($event)\"></vgr-search-result>\r\n    </div>\r\n    <br>\r\n    <br>\r\n\r\n    <p> Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n\r\n    <div>\r\n      <p>\r\n        <strong>1.</strong> Exempel på sökning med en filtertextbox och en beskrivning tillagd för sökresultatet samt minskat antal\r\n        maxItems. Sökningen startar efter 3 tecken, testa med att skriva 'min'</p>\r\n      <div class=\"search-result-wrapper\">\r\n        <vgr-filter-textbox (keydown)=\"filterSearch($event)\" [value]=\"filterBoxValue_e1\"></vgr-filter-textbox>\r\n        <vgr-search-result [items]=\"filteredItems\" [(visible)]=\"dropdownVisible_e1\" maxItems=\"15\" [description]=\"searchDescription_e1\"\r\n          (itemClick)=\"setResult($event)\"></vgr-search-result>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <h3>HTML</h3>\r\n      <section [innerHTML]=\"htmlExample1\" highlight-js-content=\".highlight\"></section>\r\n    </div>\r\n    <div>\r\n      <br>\r\n      <br>\r\n      <p>\r\n        <strong>2.</strong> Exempel på sökning med en vgr-input. Sökningen startar då man trycker på knappen sök.</p>\r\n      <div class=\"search-result-wrapper\">\r\n        <vgr-input [(ngModel)]=\"filterBoxValue_e2\" style=\"display: inline-flex;\"></vgr-input>\r\n        <vgr-button (click)=\"filterSearch_e2($event)\">Sök</vgr-button>\r\n        <vgr-search-result [items]=\"filteredItems_e2\" [(visible)]=\"dropdownVisible_e2\" maxItems=\"15\" noResultsText=\"Inga resultat hittades.\"\r\n          (itemClick)=\"setResult_e2($event)\"></vgr-search-result>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <h3>HTML</h3>\r\n      <section [innerHTML]=\"htmlExample2\" highlight-js-content=\".highlight\"></section>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          description : string\r\n        </td>\r\n        <td>\r\n          En text som visas ovanför sökträffarna.\r\n        </td>\r\n        <td>[description]=\"55 träffar i \"VGR\" KIV.\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          noResultsText : string\r\n        </td>\r\n        <td>en text som visas om inga sökträffar hittas.</td>\r\n        <td>[noResultsText]=\"Inga sökträffar hittades.\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          items : array\r\n        </td>\r\n        <td>Listan på sökträffar i rätt format. Formatet definieras i form av ett\r\n          <code>SearchResultItem</code>.\r\n          <code>Displayname</code> kan innehålla flera rader, där används\r\n          <code>secondRowItalic</code>\r\n          används för att definiera om man vill att den skall vara kursiv eller inte.\r\n          <code>secondRowItalic</code> kan uteslutas om den inte behövs\r\n        </td>\r\n        <td>[items]=\"[{{'{'}}displayName: [\"Min mottagning\", \"Stor vårdcentral\"], value: \" Min mottagning\", secondRowItalic:\r\n          true{{'}'}}, ...]\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          maxItems : number\r\n        </td>\r\n        <td>Antalet sökträffar som maximalt skall visas i listan. 25st är default.</td>\r\n        <td>[maxItems]=\"25\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          visible : boolean\r\n        </td>\r\n        <td>Styr hurvida sökresultatet visas eller ej.</td>\r\n        <td>[visible]=\"isListVisible\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          itemClick : event\r\n        </td>\r\n        <td>Event som triggas när man klickar på en listitem, skickar med datan för det listitemet.</td>\r\n        <td>(itemClick)=\"doSomething($event)\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    Man kan navigera i sökresultaten med hjälp av piltangenterna.\r\n    <br>Space och Enter väljer aktuell resultatrad och stänger resulatet.\r\n    <br>Tab stänger resultatet utan att välja något.\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/search-result/search-result.component.scss":
/*!************************************************************!*\
  !*** ./src/app/search-result/search-result.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-result/search-result.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(htmlEncoder) {
        this.items = this.getDemoItems(55);
        this.items_e2 = this.getDemoItems(13, true);
        this.dropdownVisible = false;
        this.dropdownVisible_e1 = false;
        this.dropdownVisible_e2 = false;
        this.searchDescription_e1 = null;
        this.htmlExample1 = htmlEncoder.prepareHighlightedSection("<div class=\"search-result-wrapper\">\n    <vgr-filter-textbox (keydown)=\"filterSearch($event)\" [value]=\"filterBoxValue_e1\"></vgr-filter-textbox>\n    <vgr-search-result [items]=\"filteredItems\" [visible]=\"dropdownVisible_e1\" \n    maxItems=\"15\" [description]=\"searchDescription_e1\" (itemClick)=\"setResult($event)\"></vgr-search-result>\n  </div>", 'html');
        this.htmlExample2 = htmlEncoder.prepareHighlightedSection("<div class=\"search-result-wrapper\">\n  <vgr-input [(ngModel)]=\"filterBoxValue_e2\" style=\"display: inline-flex;\"></vgr-input>\n  <vgr-button (click)=\"filterSearch_e2($event)\">S\u00F6k</vgr-button>\n  <vgr-search-result [items]=\"filteredItems_e2\" [(visible)]=\"dropdownVisible_e2\" maxItems=\"15\" noResultsText=\"Inga resultat hittades.\"\n    (itemClick)=\"setResult_e2($event)\"></vgr-search-result>\n</div>", 'html');
    }
    SearchResultComponent.prototype.getDemoItems = function (numberOfItems, addSecondRow) {
        if (addSecondRow === void 0) { addSecondRow = false; }
        var items = [];
        for (var i = 1; i <= numberOfItems; i++) {
            var name_1 = Math.random() > 0.7 ? i + " - Min mottagning har ett j\u00E4ttel\u00E5ngt namn" : i + " - Min mottagning";
            var displayName = new Array(name_1);
            var item = {};
            if (addSecondRow) {
                displayName.push('Placering');
                item.secondRowItalic = true;
            }
            item.value = name_1;
            item.displayName = displayName;
            items.push(item);
        }
        return items;
    };
    SearchResultComponent.prototype.filterSearch = function (event) {
        var searchText = event.target.value;
        if (!searchText || searchText.length < 3) {
            this.dropdownVisible_e1 = false;
            return;
        }
        this.filteredItems = this.items.filter(function (item) { return item.displayName.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1; });
        this.searchDescription_e1 = this.filteredItems.length + ' träffar i "VGR" KIV.';
        this.dropdownVisible_e1 = true;
    };
    SearchResultComponent.prototype.filterSearch_e2 = function (event) {
        var searchText = this.filterBoxValue_e2;
        this.filteredItems_e2 = this.items_e2.filter(function (item) { return item.displayName.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1; });
        this.dropdownVisible_e2 = true;
    };
    SearchResultComponent.prototype.setResult = function (item) {
        this.filterBoxValue_e1 = item.value;
        this.dropdownVisible_e1 = false;
    };
    SearchResultComponent.prototype.setResult_e2 = function (item) {
        this.filterBoxValue_e2 = item.value;
        this.dropdownVisible_e2 = false;
    };
    SearchResultComponent.prototype.closeDropdown = function (value) {
        this.dropdownVisible = false;
        this.output = value;
    };
    SearchResultComponent.prototype.openDropdown = function () {
        this.dropdownVisible = true;
    };
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.scss */ "./src/app/search-result/search-result.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/sizes/sizes.component.html":
/*!********************************************!*\
  !*** ./src/app/sizes/sizes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Upplösning'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h3>Marginaler & brytgräns</h3>\r\n      <p>Komponenterna är definierade utifrån två fasta bredder. Dessa slår igenom automatiskt med skärmens upplösning, med\r\n        hjälp av CSS media queries. Storleken styr fontstorlekar, marginaler, padding och komponenters storlek. Marginaler\r\n        för den minsta upplösningen är generellt 10 px på och ökar till 20 px på den större storleken. Samma avstånd för\r\n        båda storlekarna är att innehållsdelen är 20 px från header och meny oavsett brytgräns. Headern växer alltid i bredd\r\n        efter webbläsarens fönster medans vänstermeny och innehåll och komponenter har ovan nämnda fasta format att växa\r\n        efter.\r\n        <br>\r\n        <br>\r\n        <p>\r\n          Liten storlek är bredd mellan 1366px och 1458px, stor storlek är bredd över 1458px.\r\n          <br>\r\n          <strong>Minsta upplösning för som stödjs är 1366x768. </strong>\r\n        </p>\r\n\r\n        <br>\r\n        <h3>Styra storlek med CSS media queries</h3>\r\n        <p>Storlekarna finns fördefinierade i komponentkartans css. Dessa går att återanvända i egna komponenter genom att importera\r\n          definitionerna via SASS.\r\n          <code>$desktop-width--small</code> är liten storlek.\r\n          <code>$desktop-width--medium</code> är stor storlek.\r\n        </p>\r\n        <br>\r\n\r\n        <h3>Exempel</h3>\r\n        Innehållet i denna label styrs beroende på aktiv brytgräns.\r\n        <br>\r\n        <span class=\"sizeInfo\">Nuvarande storlek: </span>\r\n        <br>\r\n        <br>\r\n        <section [innerHTML]=\"mediaQueryExample\" highlight-js-content=\".highlight\"></section>\r\n\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/sizes/sizes.component.scss":
/*!********************************************!*\
  !*** ./src/app/sizes/sizes.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------*\\\r\n  #Margins\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Borders\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Components\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Misc\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #LAYERS\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #SMALL\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #MEDIUM\r\n\\*------------------------------------*/\n.sizeInfo:after {\n  content: \"Liten\";\n  height: auto;\n  width: auto;\n  font-weight: bold; }\n@media screen and (min-width: 1459px) {\n  .sizeInfo:after {\n    content: \"Stor\"; } }\n"

/***/ }),

/***/ "./src/app/sizes/sizes.component.ts":
/*!******************************************!*\
  !*** ./src/app/sizes/sizes.component.ts ***!
  \******************************************/
/*! exports provided: SizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizesComponent", function() { return SizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SizesComponent = /** @class */ (function () {
    function SizesComponent(htmlEncoder) {
        this.mediaQueryCode = "\n  // Importera _settings.sizes.scss fr\u00E5n komponentkartan.\n  @import '../../../node_modules/vgr-komponentkartan/assets/partials/_settings.sizes.scss';\n\n  // S\u00E4tt default-storlek utan media query. Detta \u00E4r den lilla storleken.\n  .sizeInfo {\n    &:after {\n      content: \"Liten\";\n      height: auto;\n      width: auto;\n      font-weight: bold;\n    }\n  }\n\n  // Definiera media query baserat p\u00E5 variabel f\u00F6r stor storlek.\n  @media screen and (min-width: $desktop-width--medium) {\n    .sizeInfo {\n      &:after {\n        content: \"Stor\";\n      }\n    }\n  }\n  ";
        this.mediaQueryExample = htmlEncoder.prepareHighlightedSection(this.mediaQueryCode, 'scss');
    }
    SizesComponent.prototype.ngOnInit = function () {
    };
    SizesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sizes',
            template: __webpack_require__(/*! ./sizes.component.html */ "./src/app/sizes/sizes.component.html"),
            styles: [__webpack_require__(/*! ./sizes.component.scss */ "./src/app/sizes/sizes.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], SizesComponent);
    return SizesComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'Välkommen'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <h1>Beskrivning</h1>\r\n      <p>Detta är en komponentkarta av ersättningssystemen i Västra Götalandsregionen. Anledningen till att följa gemensamma\r\n        riktlinjer vid navigation, kontroller och struktur är dels för att skapa en enhetlighet och dels kunna hantera flera\r\n        system för samma inloggning. Innehållet i de olika ersättningssystemen är och kommer fortsättningsvis att vara systemspecifikt.\r\n        Ersättningssystemen med gemensamt inloggning har en gemensam portal med en neutral färg som är skild från den röda,\r\n        gröna och blå färgen. När en användare har behörighet för fler än ett system kommer de gemensamma delarna att visa\r\n        den neutrala färgen.</p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <h2>Utecklingsmiljö för Angular + komponentkartan</h2>\r\n      <ol>\r\n        <li>\r\n          Installera Node\r\n          <a href=\"https://nodejs.org/en/\" target=\"new\"> https://nodejs.org/en/</a>\r\n          <br/>Verifiera att node och npm är installerat genom att köra\r\n          <code>node -v</code> samt\r\n          <code>npm -v</code> i en kommandoprompt (eller terminalen i VS Code).\r\n        </li>\r\n        <li>\r\n          (Rekommenderat) Installera IDE Visual Studio Code.\r\n          <a href=\"https://code.visualstudio.com/\" target=\"new\">https://code.visualstudio.com/</a>\r\n        </li>\r\n        <li>\r\n          Installera angular-cli\r\n          <a href=\"https://cli.angular.io/\" target=\"new\">https://cli.angular.io/</a> globalt på din dator:\r\n          <code>npm i -g @angular/cli</code>.\r\n          <br/>Verifiera installationen genom att köra\r\n          <code>ng -v</code>\r\n        </li>\r\n      </ol>\r\n\r\n      <h2>Följ dessa steg om du sätter upp ett nytt projekt</h2>\r\n      <ol>\r\n        <li>Skapa ett nytt projekt genom\r\n          <code>ng new ProjectName</code>\r\n        </li>\r\n        <li>För att lägga till Komponentkartan i projektet, ställ dig i projektets root. Navigera till\r\n          <a href=\"https://github.com/Vastra-Gotalandsregionen/komponentkartan\">Komponentkartans GitHub-sida</a> i din webbläsare och följ steg 1-2 på den sidan.\r\n          <li>\r\n            Kör\r\n            <code>ng s -o</code> för att köra igång din applikation lokalt och öppna i ett webbläsarfönster.\r\n          </li>\r\n      </ol>\r\n      <p>Nu är det dags att börja bygga din applikation. Alla komponenter som finns i Komponentkartan finns dokumenterade under\r\n        'Komponenter' till vänster. Var noga med att\r\n        <a href=\"./pagestructure\">sidstrukturen</a> blir korrekt när du skapar nya sidor.</p>\r\n\r\n      <h2>Följ dessa steg om du ska börja arbeta i ett befintligt projekt</h2>\r\n      <ol>\r\n        <li>\r\n          Hämta hem projektets repo från\r\n          <a href=\"https://github.com/Vastra-Gotalandsregionen/komponentkartan\">Komponentkartans GitHub-sida</a>\r\n        </li>\r\n        <li>\r\n          Ställ dig i projektets root och kör\r\n          <code>npm i</code> för att installera alla node-paket som projektet behöver.\r\n        </li>\r\n        <li>\r\n          Kör\r\n          <code>ng s -o</code> för att köra igång din applikation lokalt och öppna i ett webbläsarfönster.\r\n        </li>\r\n      </ol>\r\n      <h2>Kör tester för komponentkartan</h2>\r\n      <ol>\r\n        <li>\r\n          Kör kommandot:\r\n          <code>ng test komponentkartan</code>\r\n        </li>\r\n      </ol>\r\n    </vgr-page-block>\r\n\r\n    <vgr-page-block>\r\n      <h1>Versionshantering</h1>\r\n      <p>Versionsnummer för komponentkartan ska anges enligt\r\n        <a href=\"https://semver.org/\">Semantic Versioning</a>\r\n      </p>\r\n      <p>MAJOR: Breaking changes</p>\r\n      <p>MINOR: Features</p>\r\n      <p>PATCH: Buggfixar</p>\r\n      <p>Under arbetetet med en story ska beta-version användas tills dess att storyn är helt klar och godkänd. Då ska en stable\r\n        version releasas.</p>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <h1>Nice to have</h1>\r\n      <h2>Extensions till Visual Studio Code</h2>\r\n      <ul>\r\n        <li>Beautify</li>\r\n        <li>Debugger for Chrome</li>\r\n        <li>TSLint</li>\r\n        <li>SCSS Intellisence</li>\r\n        <li>Wallaby.js</li>\r\n      </ul>\r\n    </vgr-page-block>\r\n    <vgr-page-block>\r\n      <h1>Troubleshooting</h1>\r\n      <p>Problem med npm-paket kan ibland lösas genom att ta bort katalogen node_modules samt package-lock.json och sen köra\r\n        om\r\n        <code>npm i</code>\r\n      </p>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>\r\n"

/***/ }),

/***/ "./src/app/start/start.component.scss":
/*!********************************************!*\
  !*** ./src/app/start/start.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------*\\\r\n  #Margins\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Borders\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Components\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Misc\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #LAYERS\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #SMALL\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #MEDIUM\r\n\\*------------------------------------*/\n.first-input {\n  background-color: #334455;\n  margin-left: 20px; }\n"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page class=\"no-sort\">\r\n  <vgr-page-header [title]=\"'Table'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n      <vgr-list [allowMultipleExpandedItems]=\"true\">\r\n        <vgr-list-header>\r\n          <vgr-list-column-header [width]=\"20\">Dokumentation för table</vgr-list-column-header>\r\n        </vgr-list-header>\r\n        <vgr-list-item [expanded]=\"true\">\r\n          <vgr-list-item-header>\r\n            <h4>Översikt</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <div class=\"content-overview\">\r\n              <p>\r\n                <code>&lt;vgr-table&gt;</code> består av \r\n                <code>&lt;vgr-table-header&gt;</code> och <code>&lt;vgr-table-row&gt;</code>\r\n                Headern är alltid synlig och kan vid klick visa/dölja tabellens rader.\r\n                En vgr-table kan även innehålla en vgr-table i sig.\r\n              </p>\r\n              <br>\r\n              <vgr-table>\r\n                <vgr-table-header>\r\n                  <vgr-table-header-column [width]=\"10\">Header Column 1</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"5\">Header Column 2</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Header Column3</vgr-table-header-column>\r\n                </vgr-table-header>\r\n                <vgr-table-row tabindex=\"0\">\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n                <vgr-table-row tabindex=\"0\">\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n                <vgr-table>\r\n                  <vgr-table-header>\r\n                    <vgr-table-header-column [width]=\"10\">Row Column\r\n                      <span class=\"vgr-icon-calendar-border\"></span>\r\n                    </vgr-table-header-column>\r\n                    <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                    <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                  </vgr-table-header>\r\n                  <vgr-table-row tabindex=\"0\">\r\n                    <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                  </vgr-table-row>\r\n                  <vgr-table-row tabindex=\"0\">\r\n                    <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                    <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                  </vgr-table-row>\r\n                  <vgr-table>\r\n                    <vgr-table-header>\r\n                      <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                      <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                      <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                    </vgr-table-header>\r\n                    <vgr-table-row tabindex=\"0\">\r\n                      <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"5\"> Donec eu est eros. Suspendisse eget dolor porta, volutpat ligula a, euismod tellus. Quisque posuere nisi\r\n                        vitae nisi commodo mollis. Vivamus interdum dolor at neque blandit sollicitudin. Pellentesque ac ornare</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                    </vgr-table-row>\r\n                    <vgr-table-row tabindex=\"0\">\r\n                      <vgr-table-row-column [width]=\"10\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante ac tortor ornare efficitur non a\r\n                        nisi. Donec turpis sapien, semper a posuere ac, luctus et urna.</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                      <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                    </vgr-table-row>\r\n                    <vgr-table>\r\n                      <vgr-table-header>\r\n                        <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                        <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                        <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                      </vgr-table-header>\r\n                      <vgr-table-row tabindex=\"0\">\r\n                        <vgr-table-row-column [width]=\"7\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                      </vgr-table-row>\r\n                      <vgr-table-row tabindex=\"0\">\r\n                        <vgr-table-row-column [width]=\"7\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                        <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                      </vgr-table-row>\r\n                      <vgr-table>\r\n                        <vgr-table-header>\r\n                          <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                          <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                          <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                        </vgr-table-header>\r\n                        <vgr-table-row tabindex=\"0\">\r\n                          <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                        </vgr-table-row>\r\n                        <vgr-table-row tabindex=\"0\">\r\n                          <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                          <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                        </vgr-table-row>\r\n                        <vgr-table>\r\n                          <vgr-table-header>\r\n                            <vgr-table-header-column [width]=\"10\">Row Column</vgr-table-header-column>\r\n                            <vgr-table-header-column [width]=\"5\">Row Colum</vgr-table-header-column>\r\n                            <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-header-column>\r\n                          </vgr-table-header>\r\n                          <vgr-table-row tabindex=\"0\">\r\n                            <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                            <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                            <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                          </vgr-table-row>\r\n                        </vgr-table>\r\n                      </vgr-table>\r\n                    </vgr-table>\r\n                  </vgr-table>\r\n                </vgr-table>\r\n              </vgr-table>\r\n              <vgr-table>\r\n                <vgr-table-header>\r\n                  <vgr-table-header-column [width]=\"10\">Header Column 1</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"5\">Header Column 2</vgr-table-header-column>\r\n                  <vgr-table-header-column [width]=\"3\" [align]=\"'right'\">Header Column3</vgr-table-header-column>\r\n                </vgr-table-header>\r\n                <vgr-table-row tabindex=\"0\">\r\n                  <vgr-table-row-column [width]=\"10\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"5\">Row Column</vgr-table-row-column>\r\n                  <vgr-table-row-column [width]=\"3\" [align]=\"'right'\">Row Column</vgr-table-row-column>\r\n                </vgr-table-row>\r\n              </vgr-table>\r\n              <p> Förändras med tema:\r\n                <strong>ja</strong>\r\n              </p>\r\n            </div>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Exempel</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <section [innerHTML]=\"htmlMarkup\" highlight-js-content=\".highlight\"></section>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-table</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>expanded: boolean</td>\r\n                <td>Anger om sektionen är expanderad eller ej</td>\r\n                <td>[expanded]=\"true\"</td>\r\n              </tr>\r\n              <tr>\r\n                <td>expandedChanged: EventEmitter&lt;boolean&gt;\r\n                </td>\r\n                <td>Event som triggras när sektionen expanderas/kollapsas.</td>\r\n                <td>(expandedChanged)=\"onExpandedChanged($event)</td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-table-header</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Behållare för vgr-table-header-column. Har inga properties.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-table-header-column</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>width : number</td>\r\n                <td>vgr-table är baserad på en 20 kolumns layout. Varje kolumn måste ha en width satt och summan av width ska\r\n                  vara 20 för vgr-table.\r\n                </td>\r\n                <td>\r\n                  [width]=\"20\"\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>align : string</td>\r\n                <td>Man kan sätta en alignment på kolumnerna. Defaultvärde är left. Giltiga värden är right, left och center.\r\n                  <br>Om man sätter ett felaktigt värde så sätts defaultvärdet\r\n                </td>\r\n                <td>\r\n                  [align]=\"'right'\"\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-table-row</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th style=\"width:600px\">Beskrivning</th>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  Behållare för vgr-table-row. Har inga properties.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false \">\r\n          <vgr-list-item-header>\r\n            <h4>API - vgr-table-row-column</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <table class=\"property-table\">\r\n              <tr>\r\n                <th>Namn</th>\r\n                <th>Beskrivning</th>\r\n                <th>Exempel</th>\r\n              </tr>\r\n              <tr>\r\n                <td>width : number</td>\r\n                <td>vgr-table är baserad på en 20 kolumns layout. Varje kolumn måste ha en width satt och summan av width ska\r\n                  vara 20 för vgr-table.\r\n                </td>\r\n                <td>\r\n                  [width]=\"20\"\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>align : string</td>\r\n                <td>Man kan sätta en alignment på kolumnerna. Defaultvärde är left. Giltiga värden är right, left och center.\r\n                  <br>Om man sätter ett felaktigt värde så sätts defaultvärdet\r\n                </td>\r\n                <td>\r\n                  [align]=\"'right'\"\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n        <vgr-list-item [expanded]=\"false\">\r\n          <vgr-list-item-header>\r\n            <h4>Tillgänglighet</h4>\r\n          </vgr-list-item-header>\r\n          <vgr-list-item-content>\r\n            <p>Navigering i tabell:</p>\r\n            <ul>\r\n              <li>- Tab/Shift+Tab - För att hoppa mellan raderna</li>\r\n              <li>- Enter eller Space - För att toggla expanderbara tabellrader mellan expanderat och ihopfällt läge.</li>\r\n              <li>- Implementatören behöver sätta tabindex på sina table rows för att de skall vara möjliga att nå med tab.</li>\r\n            </ul>\r\n          </vgr-list-item-content>\r\n        </vgr-list-item>\r\n      </vgr-list>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n</vgr-page>"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_encode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-encode.service */ "./src/app/html-encode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = /** @class */ (function () {
    function TableComponent(htmlEncoder) {
        this.htmlEncoder = htmlEncoder;
        this.htmlTableStructureMarkup = "\n  <vgr-table>\n  <!-- Rootelementet -->\n   <vgr-table-header>\n   <!-- Header kan inheh\u00E5lla flera kolumn-headers -->\n    <vgr-table-header-column>\n    <!-- L\u00E4gg rubriktext i kolumn-header h\u00E4r -->\n    </vgr-table-header-column>\n   </vgr-table-header>\n   <vgr-table-row>\n   <!-- Motsvarar en rad -->\n    <vgr-table-row-column>\n    <!-- L\u00E4gg kolumntext h\u00E4r -->\n    </vgr-table-row-column>\n   </vgr-table-row>\n  </vgr-table>";
        this.htmlMarkup =
            htmlEncoder.prepareHighlightedSection(this.htmlTableStructureMarkup);
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [_html_encode_service__WEBPACK_IMPORTED_MODULE_1__["HtmlEncodeService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/textareafield/textareafield.component.css":
/*!***********************************************************!*\
  !*** ./src/app/textareafield/textareafield.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/textareafield/textareafield.component.html":
/*!************************************************************!*\
  !*** ./src/app/textareafield/textareafield.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Textarea'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-textarea&gt; </code> är ett fält för inmatning utav värden i t.ex. ett formulär. Sen har den även följande\r\n      funktioner implementerade:\r\n      <br> - Valbara storlekar på textarean, stödjer procent eller pixlar i höjd och bredd.\r\n    </p>\r\n    <br>\r\n    <form [formGroup]=\"form\">\r\n      <vgr-textarea [width]=\"'70%'\" [height]=\"'20px'\" [value]=\"initValue\" [placeholder]=\"'Vänligen fyll i text om du vill'\" [readonly]=\"isReadonly\"></vgr-textarea>\r\n\r\n      <vgr-textarea formControlName=\"control1\"></vgr-textarea>\r\n    </form>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"docs__examples\">\r\n    <form [formGroup]=\"form\">\r\n      <vgr-textarea formControlName=\"control2\" [width]=\"'70%'\" [height]=\"'100px'\" [maxlength]=\"50\" [placeholder]=\"'Vänligen fyll i text'\"\r\n        [readonly]=\"false\"></vgr-textarea>\r\n    </form>\r\n    <br>\r\n    <br>\r\n    <vgr-textarea [width]=\"'70%'\" [height]=\"'130px'\" [value]=\"initValue\" [placeholder]=\"'Vänligen fyll i text om du vill'\" [readonly]=\"isReadonly\"></vgr-textarea>\r\n    <p>Växla readonly</p>\r\n    <vgr-lock-button [locked]=\"false\" (lockChanged)=\"isReadonly = !isReadonly\"></vgr-lock-button>\r\n    <div class=\"row-layout\">\r\n      <div class=\"full\">\r\n        <h2>Notera</h2>\r\n        <ul>\r\n          <li>\r\n            För validering så använder vi Reactive Forms för att hantera detta. Validering kan ske på blur, change och submit.\r\n          </li>\r\n        </ul>\r\n        Under \"kodexempel\" finns exempel på hur input-komponenten kan användas i Angular Reactive Forms:\r\n        <br>\r\n        <a href=\"/reactiveformsexample\">Reactive Forms exempel</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Property</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>width: string</td>\r\n        <td>Bredd i % eller px. Default = 100%</td>\r\n        <td>[width]=\"'45px'\", [width]=\"'45%'\",</td>\r\n      </tr>\r\n      <tr>\r\n        <td>height: string</td>\r\n        <td>Höjd i % eller px. Default = 120px</td>\r\n        <td>[height]=\"'45px'\", [height]=\"'45%'\",</td>\r\n      </tr>\r\n      <tr>\r\n        <td>placeholder: string</td>\r\n        <td>Förvald text. Default = tomt.</td>\r\n        <td>[placeholder]=\"'skriv här'\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>maxlength: string</td>\r\n        <td>Max antal tecken. Begränsar antalet möjliga tecken att mata in. Default = obegränsat.</td>\r\n        <td>[maxlength]=\"50\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>readonly: boolean</td>\r\n        <td>Sätter textfältet i readonly-läge. </td>\r\n        <td>[readonly]=\"true\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      Stöds ej.\r\n    </p>\r\n  </div>\r\n\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/textareafield/textareafield.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/textareafield/textareafield.component.ts ***!
  \**********************************************************/
/*! exports provided: TextareafieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareafieldComponent", function() { return TextareafieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextareafieldComponent = /** @class */ (function () {
    function TextareafieldComponent(fb) {
        this.fb = fb;
        this.isReadonly = true;
        this.initValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in feugiat lorem. Phasellus vel lacus ac dui eleifend condimentum. Nunc et mi in leo vehicula fringilla. Pellentesque luctus tortor nec pharetra condimentum. Aliquam varius iaculis neque, sit amet sollicitudin neque porttitor quis. Phasellus eu placerat felis, sed condimentum lectus. Morbi id interdum mauris, ac gravida lorem.';
    }
    TextareafieldComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            control1: [''],
            control2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    TextareafieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textareafield',
            template: __webpack_require__(/*! ./textareafield.component.html */ "./src/app/textareafield/textareafield.component.html"),
            styles: [__webpack_require__(/*! ./textareafield.component.css */ "./src/app/textareafield/textareafield.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TextareafieldComponent);
    return TextareafieldComponent;
}());



/***/ }),

/***/ "./src/app/textbuttons/textbuttons.component.html":
/*!********************************************************!*\
  !*** ./src/app/textbuttons/textbuttons.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Button'\">\r\n\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>\r\n        &lt;vgr-button&gt; </code> finns i två olika utföranden, primär och sekundär.\r\n      <br>\r\n      <br>\r\n      <vgr-button type=\"submit\" (click)=\"lastButtonPressed = 'Klicka här - primär'\">Klicka här</vgr-button>\r\n      <vgr-button [secondary]=\"true\" (click)=\"lastButtonPressed = 'Klicka här - sekundär'\">Klicka här</vgr-button>\r\n    </p>\r\n    <p> Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"docs__examples\">\r\n    <div class=\"column-layout\">\r\n      <h2>Primärknappar</h2>\r\n      <div>\r\n        <vgr-button (click)=\"lastButtonPressed = 'OK - primär'\">OK</vgr-button>\r\n        <vgr-button (click)=\"buttonDisabled=!buttonDisabled;\">{{buttonDisabled ? 'Aktivera' : 'Inaktivera'}}</vgr-button>\r\n        <vgr-button [disabled]=\"buttonDisabled\">{{buttonDisabled ? 'Inaktiv' : 'Aktiv'}}</vgr-button>\r\n      </div>\r\n      <h2>Sekundärknappar</h2>\r\n      <div>\r\n\r\n        <vgr-button [secondary]=\"true\" (click)=\"lastButtonPressed = 'OK - sekundär'\">OK</vgr-button>\r\n        <vgr-button [secondary]=\"true\" (click)=\"buttonSecondaryDisabled=!buttonSecondaryDisabled\">{{buttonSecondaryDisabled ? 'Aktivera' : 'Inaktivera'}}</vgr-button>\r\n        <vgr-button [secondary]=\"true\" [disabled]=\"buttonSecondaryDisabled\">{{buttonSecondaryDisabled ? 'Inaktiv' : 'Aktiv'}}</vgr-button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div>Senaste knapptryck: {{lastButtonPressed}}</div>\r\n  </div>\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table \">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>secondary : boolean</td>\r\n        <td>Visa sekundärt utseende. Default är false.</td>\r\n        <td>[secondary]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled : boolean</td>\r\n        <td>Inaktivera knapp</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>click = new EventEmitter</td>\r\n        <td>Event när knapp trycks ner</td>\r\n        <td>(click)=\"OnClick()\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"docs__wcag\">\r\n    <p>På <code>&lt;vgr-button&gt;</code> så används attributet:</p>\r\n    <ul class=\"doc-list\">\r\n      <li>aria-disabled, om knappen är inaktiv eller aktiv </li>\r\n    </ul>\r\n    <br>\r\n    <p>Vid knappaktivering flyttas fokus beroende på vilken åtgärd som knappen utför. Till exempel:</p>\r\n    <ul class=\"doc-list\">\r\n      <li>Om knappåtgärden öppnar en dialog, flyttas fokus till inuti dialogrutan.</li>\r\n      <li>Om knappåtgärden stänger en dialog, återgår fokus normalt till den knapp som öppnade dialogen, om inte funktionen som\r\n        utförts i dialogrutan leder till ett annat element. Om du till exempel aktiverar en avbrytningsknapp i en dialogruta\r\n        återgår fokus till knappen som öppnade dialogrutan. Om dialogrutan bekräftade åtgärden att radera den sida från vilken\r\n        den öppnades skulle emellertid fokusen logiskt gå över till ett nytt element.\r\n      </li>\r\n      <li>Om knappåtgärden inte avvisar det aktuella sammanhanget, är fokus normalt kvar på knappen efter aktivering, till exempel\r\n        en 'Tillämpa'-knapp.</li>\r\n      <li>Om knappåtgärden indikerar ett kontextbyte, till exempel att gå till nästa steg i en guide eller lägga till ett annat\r\n        sökkriterium, är det ofta lämpligt att flytta fokus till utgångspunkten för den åtgärden.</li>\r\n      <li>Om knappen aktiveras med ett kortkommando, förblir fokus normalt i det sammanhang som kortkommandot användes. Om till\r\n        exempel Alt + U aktiverar en \"Upp\" -knapp som flyttar det aktuella fokuserade objektet i en lista en position högre\r\n        upp i listan, kommer Alt + U när fokus är i listan inte att flytta fokus från listan.</li>\r\n    </ul>\r\n  </div>\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/textbuttons/textbuttons.component.scss":
/*!********************************************************!*\
  !*** ./src/app/textbuttons/textbuttons.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/textbuttons/textbuttons.component.ts":
/*!******************************************************!*\
  !*** ./src/app/textbuttons/textbuttons.component.ts ***!
  \******************************************************/
/*! exports provided: TextbuttonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextbuttonsComponent", function() { return TextbuttonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextbuttonsComponent = /** @class */ (function () {
    function TextbuttonsComponent() {
        this.buttonDisabled = true;
        this.buttonSecondaryDisabled = true;
        this.lastButtonPressed = '';
    }
    TextbuttonsComponent.prototype.ngOnInit = function () {
    };
    TextbuttonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textbuttons',
            template: __webpack_require__(/*! ./textbuttons.component.html */ "./src/app/textbuttons/textbuttons.component.html"),
            styles: [__webpack_require__(/*! ./textbuttons.component.scss */ "./src/app/textbuttons/textbuttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextbuttonsComponent);
    return TextbuttonsComponent;
}());



/***/ }),

/***/ "./src/app/theming/theming.component.html":
/*!************************************************!*\
  !*** ./src/app/theming/theming.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vgr-page>\r\n  <vgr-page-header [title]=\"'TEMAHANTERING'\">\r\n  </vgr-page-header>\r\n  <vgr-page-body>\r\n    <vgr-page-block>\r\n\r\n\r\n      <h2>Välj nuvarande tema</h2>\r\n      <div class=\"row-layout\">\r\n        <vgr-radio-group [options]=\"themes\" (selectedChanged)=\"themeChanged($event)\"></vgr-radio-group>\r\n      </div>\r\n      <h2>Använda tema från Komponentkartan</h2>\r\n      <p>För att återanvända stilar och teman från komponentkartan används primärt komponentkartans CSS / SASS filer. Importera\r\n        dem i index.html eller angular-cli.json.\r\n      </p>\r\n      <br>\r\n      <code>index.html==> &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/vgr-komponentkartan//Content/komponentkartan.css\"\r\n        &gt;\r\n      </code>\r\n      <br>\r\n      <code>angular-cli.json==> \"styles\": [ \"styles.scss\", \"../node_modules/vgr-komponentkartan//Content/komponentkartan.scss\"\r\n        ],\r\n      </code>\r\n\r\n      <h2>Temadefinierande klasser</h2>\r\n      <p>För att välja tema för applikationen används klasserna\r\n        <i>.theme--neutral</i>,\r\n        <i>.theme--blue</i>,\r\n        <i>.theme--green</i> och\r\n        <i>.theme--red</i>. Sätt temat så högt upp i hierarkin som möjligt (t.ex body, applikation) för att slå igenom på samtliga\r\n        sidor och komponenter. </p>\r\n\r\n      <h2>Klasser som använder tema</h2>\r\n      <p>För att temafärgerna skall få effekt finns en rad klasser i komponentkartan som sätter den valda temafärgen på ett\r\n        element. Dessa följer standarden\r\n        <i>[css-egenskap]</i>--\r\n        <i>[primär/sekundärfärg]</i>. Se exempel nedan.\r\n      </p>\r\n      <br>\r\n      <ul>\r\n        <li>\r\n          <span>Högerkant i primärfärg</span>\r\n          <span class=\"css-classes\">.border-right-color--primary</span>\r\n          <div class=\"example-div-1 border-right-color--primary\"></div>\r\n        </li>\r\n        <li>\r\n          <span>Överkant i primärfärg, bakgrund i sekundärfärg</span>\r\n          <span class=\"css-classes\">.border-top-color--primary .background-color--secondary</span>\r\n          <div class=\"example-div-2 border-top-color--primary background-color--secondary\"></div>\r\n        </li>\r\n      </ul>\r\n      <h2>Använda SASS från komponentkartan</h2>\r\n      <p>Det är också möjligt att använda komponentkartans SASS-filer i applikationen. Man kan då få tillgång till standardfärger,\r\n        storlekar mm som komponentkartan använder.\r\n        <strong>OBS!</strong> Vid import av SASS-filer till egendefinierade SASS/CSS filer så kompileras innehållet utanför komponentkartan.\r\n        Detta kan medföra sidoeffekter så som att temat åsidosätts. Användning av klasser är att föredra.\r\n      </p>\r\n    </vgr-page-block>\r\n  </vgr-page-body>\r\n\r\n</vgr-page>\r\n\r\n\r\n<vgr-modal id=\"myModalId\">\r\n  <vgr-modal-header>\r\n    <h1>Pinkie Mode Activated!!!</h1>\r\n  </vgr-modal-header>\r\n  <vgr-modal-content>\r\n    <p>Grattis du har hittat ett påskägg!</p>\r\n    <i>Aktiverad genom att trycka på \"Rött\" 3 gånger</i>\r\n  </vgr-modal-content>\r\n  <vgr-modal-footer>\r\n    <vgr-button [secondary]=\"true\" default=\"true\" (click)=\"modalService.closeDialog('myModalId')\">Ja, det var ju kul..</vgr-button>\r\n  </vgr-modal-footer>\r\n</vgr-modal>\r\n"

/***/ }),

/***/ "./src/app/theming/theming.component.scss":
/*!************************************************!*\
  !*** ./src/app/theming/theming.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-div-1 {\n  background-color: #f0f0f0;\n  border-right-style: solid;\n  border-right-width: 5px;\n  height: 50px;\n  width: 200px; }\n\n.example-div-2 {\n  border-top-style: solid;\n  border-top-width: 5px;\n  height: 50px;\n  width: 200px; }\n\nh2 {\n  margin-top: 20px; }\n\n.css-classes {\n  font-family: Courier New, Courier, monospace;\n  font-size: 12px;\n  background-color: #f0f0f0;\n  color: #000000;\n  height: 12px;\n  margin-left: 10px; }\n\nli {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/theming/theming.component.ts":
/*!**********************************************!*\
  !*** ./src/app/theming/theming.component.ts ***!
  \**********************************************/
/*! exports provided: ThemingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingComponent", function() { return ThemingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vgr-komponentkartan */ "./node_modules/vgr-komponentkartan/fesm5/vgr-komponentkartan.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemingComponent = /** @class */ (function () {
    function ThemingComponent(modalService) {
        this.modalService = modalService;
        this.pinkieMeter = 0;
        this.themes = [
            { displayName: 'Neutralt', value: 'theme--neutral' },
            { displayName: 'Blått', value: 'theme--blue' },
            { displayName: 'Rött', value: 'theme--red' },
            { displayName: 'Grönt', value: 'theme--green' }
        ];
    }
    ThemingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themes.forEach(function (x) { return x.selected = _this.isThemeActive(x.value); });
    };
    ThemingComponent.prototype.themeChanged = function (theme) {
        document.getElementById('theme-root').classList.remove('theme--neutral');
        document.getElementById('theme-root').classList.remove('theme--blue');
        document.getElementById('theme-root').classList.remove('theme--red');
        document.getElementById('theme-root').classList.remove('theme--green');
        document.getElementById('theme-root').classList.remove('theme--pinkie');
        if (this.isPinkeModeActive(theme)) {
            document.getElementById('theme-root').classList.add('theme--pinkie');
            this.modalService.openDialog('myModalId');
        }
        else {
            document.getElementById('theme-root').classList.add(theme);
        }
    };
    ThemingComponent.prototype.isThemeActive = function (themeName) {
        return document.getElementById('theme-root').classList.contains(themeName);
    };
    ThemingComponent.prototype.isPinkeModeActive = function (theme) {
        if (this.pinkieMeter >= 3) {
            this.pinkieMeter = 0;
        }
        if (theme === 'theme--red') {
            this.pinkieMeter++;
        }
        return this.pinkieMeter === 3;
    };
    ThemingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theming',
            template: __webpack_require__(/*! ./theming.component.html */ "./src/app/theming/theming.component.html"),
            styles: [__webpack_require__(/*! ./theming.component.scss */ "./src/app/theming/theming.component.scss")]
        }),
        __metadata("design:paramtypes", [vgr_komponentkartan__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ThemingComponent);
    return ThemingComponent;
}());



/***/ }),

/***/ "./src/app/title-value/title-value.component.html":
/*!********************************************************!*\
  !*** ./src/app/title-value/title-value.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Title-value'\">\r\n\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code> &lt;vgr-title-value&gt; </code> används för att skapa title-value layouter, t.ex formulär.\r\n      <br> Placera title-value komponenterna i\r\n      <code> &lt;vgr-title-value-layout&gt; </code>.\r\n    </p>\r\n\r\n    <p> Förändras med tema:\r\n      <strong>nej</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <vgr-card>\r\n      <vgr-card-column>\r\n        <vgr-card-section [title]=\"'Belopp readonly (slim)'\" [expanded]=\"true\">\r\n          <vgr-title-value-layout>\r\n            <vgr-title-value [title]=\"'Bruttobelopp'\" [slim]=\"true\">\r\n              <vgr-input [value]=\"1000\" [suffix]=\"'kr'\" [alignRight]=\"true\" [readonly]=\"true\"></vgr-input>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\"'Skattesats'\" [slim]=\"true\">\r\n              <vgr-input [value]=\"32\" [suffix]=\"'%'\" [alignRight]=\"true\" [readonly]=\"true\"></vgr-input>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\"'Nettobelopp'\" [slim]=\"true\">\r\n              <vgr-input [value]=\"32\" [suffix]=\"'kr'\" [alignRight]=\"true\" [readonly]=\"true\"></vgr-input>\r\n            </vgr-title-value>\r\n          </vgr-title-value-layout>\r\n        </vgr-card-section>\r\n      </vgr-card-column>\r\n      <vgr-card-column>\r\n        <vgr-card-section [title]=\"'Belopp'\" [expanded]=\"true\" class=\"card__right\">\r\n          <vgr-title-value-layout>\r\n            <vgr-title-value [title]=\"'Bruttobelopp'\">\r\n              <vgr-input [value]=\"10000\" [suffix]=\"'kr'\" [alignRight]=\"true\"></vgr-input>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\"'Skattesats'\">\r\n              <vgr-input [value]=\"32\" [suffix]=\"'%'\" [alignRight]=\"true\"></vgr-input>\r\n            </vgr-title-value>\r\n            <vgr-title-value [title]=\"'Nettobelopp'\">\r\n              <vgr-input [value]=\"32\" [suffix]=\"'kr'\" [alignRight]=\"true\"></vgr-input>\r\n            </vgr-title-value>\r\n          </vgr-title-value-layout>\r\n        </vgr-card-section>\r\n      </vgr-card-column>\r\n    </vgr-card>\r\n  </div>\r\n\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td>title : string</td>\r\n        <td>Title(label) för title-value-paret.\r\n        </td>\r\n        <td>\r\n          [title]=\"'En titel'\"\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>slim : boolean</td>\r\n        <td>Om title-value är satt som slim så kommer title-value-raden ta så lite plats som möjligt i höjdled.\r\n          <br>Detta ska användas för en title-value komponent som endast visar readonly fält.\r\n        </td>\r\n        <td>\r\n          [readonly]=\"true/false\"\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <br>\r\n    <p>\r\n\r\n      <strong>Tips!</strong> om man vill lägga två komponenter bredvid varandra som värde, lägg dem i en\r\n      <code>&lt;div&gt; class=\"row-layout row-layout--tight row-layout--component\" &lt;/div&gt;</code>\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"docs__wcag\">\r\n    <i>\r\n      Ej aktuellt.</i>\r\n  </div>\r\n\r\n</app-component-docs>\r\n"

/***/ }),

/***/ "./src/app/title-value/title-value.component.scss":
/*!********************************************************!*\
  !*** ./src/app/title-value/title-value.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title-value/title-value.component.ts":
/*!******************************************************!*\
  !*** ./src/app/title-value/title-value.component.ts ***!
  \******************************************************/
/*! exports provided: TitleValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleValueComponent", function() { return TitleValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleValueComponent = /** @class */ (function () {
    function TitleValueComponent() {
    }
    TitleValueComponent.prototype.ngOnInit = function () { };
    TitleValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-value',
            template: __webpack_require__(/*! ./title-value.component.html */ "./src/app/title-value/title-value.component.html"),
            styles: [__webpack_require__(/*! ./title-value.component.scss */ "./src/app/title-value/title-value.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleValueComponent);
    return TitleValueComponent;
}());



/***/ }),

/***/ "./src/app/toggle-button/toggle-button.component.css":
/*!***********************************************************!*\
  !*** ./src/app/toggle-button/toggle-button.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toggle-button/toggle-button.component.html":
/*!************************************************************!*\
  !*** ./src/app/toggle-button/toggle-button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-docs [componentName]=\"'Toggle button'\">\r\n  <div class=\"docs__overview\">\r\n    <p>\r\n      <code>&lt;vgr-toggle-button&gt;</code> är avsedd att användas för att växla mellan olika states.\r\n      <br> I kombination med\r\n      <code>&lt;vgr-toggle-button-group&gt;</code>&nbsp;kan knappsegmenten navigeras med piltangenterna.\r\n    </p>\r\n    <br>\r\n    <vgr-toggle-button-group [width]=\"'200px'\">\r\n      <vgr-toggle-button [pressed]=\"!active\" (click)=\"active=false\">Av</vgr-toggle-button>\r\n      <vgr-toggle-button [pressed]=\"active\" (click)=\"active=true\">På</vgr-toggle-button>\r\n    </vgr-toggle-button-group>\r\n    <br>\r\n    <p>Förändras med tema:\r\n      <strong>ja</strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"docs__examples\">\r\n    <vgr-toggle-button [pressed]=\"state\" [ariaLabel]=\"'Av och på toggle button'\" (click)=\"toggle()\">{{ state ? 'På' : 'Av'}}</vgr-toggle-button>&nbsp;\r\n    <vgr-toggle-button [disabled]=\"true\">Disabled</vgr-toggle-button>\r\n    <br>\r\n    <br>\r\n    <div>\r\n      <vgr-toggle-button-group [width]=\"'400px'\">\r\n        <vgr-toggle-button *ngFor=\"let state of states\" [pressed]=\"state.state\" (click)=\"toggleStates(state)\">{{state.text}}</vgr-toggle-button>\r\n      </vgr-toggle-button-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"docs__api\">\r\n    <table class=\"property-table\">\r\n      <tr>\r\n        <th>Namn</th>\r\n        <th>Beskrivning</th>\r\n        <th>Exempel</th>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"3\">\r\n          <code>&lt;vgr-toggle-button&gt;</code>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>disabled:&nbsp;boolean</td>\r\n        <td>Inaktivera toggle button. Förvalt värde är\r\n          <code>false</code>.</td>\r\n        <td>[disabled]=\"true\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>ariaLabel: string</td>\r\n        <td>Värde för\r\n          <code>aria-label</code>. Förvalt värde är \"[text] toggle button\", där [text] är text content för\r\n          <code>&lt;vgr-toggle-button&gt;</code>.</td>\r\n        <td>[ariaLabel]=\"En alternativ beskrivning.\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td>pressed: boolean</td>\r\n        <td>Värde för <code>pressed</code> (knappens state). Förvalt värde är <code>false</code>.</td>\r\n        <td>[pressed]=\"false\"</td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"3\">\r\n          <code>&lt;vgr-toggle-button-group&gt;</code>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>width:&nbsp;string</td>\r\n        <td>Värde för den totala bredd för alla segment i gruppen. Förvalt värde är \"\" vilket innebär fullbredd.</td>\r\n        <td>[width]=\"'200px'\"</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"docs__wcag\">\r\n    <p>\r\n      <code>&lt;vgr-toggle-button&gt;</code> har ett intern element av typen button och har alla dess WCAG egenskaper.  \r\n      Internt sätts <code>attr.aria-pressed</code> till värdet av input variabeln [pressed]. \r\n      Default sätts <code>attr.aria-label</code> till \"[text] toggle button\", där [text] är content för <code>&lt;vgr-toggle-button&gt;</code>. \r\n      Om input variabeln [disabled] sätts till <code>true</code> sätts även <code> aria.aria-disabled</code> till <code>true</code>\r\n    </p>\r\n  </div>\r\n</app-component-docs>"

/***/ }),

/***/ "./src/app/toggle-button/toggle-button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/toggle-button/toggle-button.component.ts ***!
  \**********************************************************/
/*! exports provided: ToggleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonComponent", function() { return ToggleButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleButtonComponent = /** @class */ (function () {
    function ToggleButtonComponent() {
        this.active = false;
        this.state = false;
        this.states = [
            { 'text': 'Favoriter', 'state': true },
            { 'text': 'Avtal', 'state': false },
            { 'text': 'Valda', 'state': false }
        ];
    }
    ToggleButtonComponent.prototype.ngOnInit = function () {
    };
    ToggleButtonComponent.prototype.toggle = function () {
        this.state = !this.state;
    };
    ToggleButtonComponent.prototype.toggleStates = function (state) {
        this.states.forEach(function (element) {
            element.state = false;
            if (element.text === state.text) {
                element.state = true;
            }
        });
    };
    ToggleButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle-button',
            template: __webpack_require__(/*! ./toggle-button.component.html */ "./src/app/toggle-button/toggle-button.component.html"),
            styles: [__webpack_require__(/*! ./toggle-button.component.css */ "./src/app/toggle-button/toggle-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projekt\komponentkartan-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map