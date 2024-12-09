import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
declare var require: any;

@Component({
    selector: 'app-komponentkartan',
    templateUrl: 'app.component.html',
    standalone: false
})

export class KomponentkartanApplicationComponent implements OnInit {

    komponentkartanVersion: string;
    angularVersion: string;
    angularCliVersion: string;

    userName: string;
    systemText: string;

    constructor(private router: Router) {
        const { dependencies: appVersion } = require('../../package.json');
        this.komponentkartanVersion = appVersion['vgr-komponentkartan'];
        this.komponentkartanVersion = this.komponentkartanVersion.replace('^', '');

        const { version: angularVersion } = require('../../node_modules/@angular/core/package.json');
        this.angularVersion = angularVersion;

        const { devDependencies: cliVersion } = require('../../package.json');
        this.angularCliVersion = cliVersion['@angular/cli'];
        this.angularCliVersion = this.angularCliVersion ? this.angularCliVersion.replace('^', '') : this.angularCliVersion;
    }

    changeTheme(theme) {
        const root = document.getElementById('theme-root');
        const colors = ['neutral', 'blue', 'red', 'green', 'pinkie'];

        colors.map(color => root.classList.remove(`theme--${color}`));

        root.classList.add(`theme--${theme}`);
    }

    ngOnInit() {
        observableOf('Göte Borg').pipe(delay(1000)).subscribe(x => { this.userName = x; });

        this.systemText = `DEMO vgr-komponentkartan version: ${this.komponentkartanVersion}, Angular: ${this.angularVersion} och Angular-Cli: ${this.angularCliVersion}`;

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });

    }

}


