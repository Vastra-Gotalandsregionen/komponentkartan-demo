import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent implements OnInit {
    browserIsIE: boolean;
    typeScriptMenuMarkup = `
    import { Component, OnInit } from '@angular/core';
    import { detect } from 'detect-browser';

    @Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
    })
    export class MenuComponent implements OnInit {
        browserIsIE: boolean;

        constructor() {}

        ngOnInit() {
            const browser = window.navigator.userAgent;
            if (browser && browser.indexOf('MSIE ')) {
                this.browserIsIE = true;
            }
        }
    }`;
    htmlMenuMarkup = `
    <vgr-menu title="Meny">
          <vgr-menu-item link="1" text="Menu item 1"></vgr-menu-item>
          <vgr-menu-item link="2" text="Menu item 2"></vgr-menu-item>
          <vgr-menu-separator></vgr-menu-separator>
          <vgr-menu-item link="3" text="Menu item 3 med extra långt namn"></vgr-menu-item>
          <vgr-menu-item link="menu" text="Menu item 4" notification="422" notificationTooltip="Detta är en tooltip"
          notificationColor="default"></vgr-menu-item>
          <vgr-menu-item link="5" text="Menu item 5" [disabled]="!browserIsIE" disabledTooltip="Endast tillgängligt i IE"></vgr-menu-item>
          <vgr-menu-item link="7" text="Menu item 6" collapsable="true"></vgr-menu-item>
          <vgr-menu-item link="7" text="Menu item 7" [disabled]="true" disabledTooltip="Alltid inaktivt"
            notification="12" notificationTooltip="Detta är ytterligare en tooltip" notificationColor="error"></vgr-menu-item>
          <vgr-menu-separator></vgr-menu-separator>
          <vgr-submenu text="Submenu">
            <vgr-menu-item link="submenu1" text="Sub menu item 1"></vgr-menu-item>
            <vgr-menu-item link="submenu2" text=" Sub menu item 2 "></vgr-menu-item>
            <vgr-menu-item link="submenu3 " text="Sub menu item 3 "></vgr-menu-item>
          </vgr-submenu>
        </vgr-menu>`;

    constructor(htmlEncoder: HtmlEncodeService) {
        this.typeScriptMenuMarkup =
            htmlEncoder.prepareHighlightedSection(this.typeScriptMenuMarkup, 'typescript');
        this.htmlMenuMarkup =
            htmlEncoder.prepareHighlightedSection(this.htmlMenuMarkup);
    }

    ngOnInit() {
        this.browserIsIE = this.detectIE() < 0 ? false : true;
    }

    detectIE() {
        const ua = window.navigator.userAgent;

        const msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        const edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return -1;
    }
}
