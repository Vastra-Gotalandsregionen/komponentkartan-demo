import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
declare var require: any;

@Component({
    selector: 'app-komponentkartan',
    templateUrl: 'app.component.html'
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

    ngOnInit() {
        Observable.of('Göte Borg').delay(1000).subscribe(x => { this.userName = x; });

        this.systemText = `DEMO vgr-komponentkartan version: ${this.komponentkartanVersion}, Angular: ${this.angularVersion} och Angular-Cli: ${this.angularCliVersion}`;

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });

    }

}


