﻿import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core"
import { BrowserModule, Title } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms";

import { KomponentkartanApplicationComponent } from "./app.component"
import { KomponentkartanModule } from "../node_modules/vgr-komponentkartan/component-package/komponentkartan.module";


@NgModule({
    imports: [
        KomponentkartanModule,
        BrowserModule,
        FormsModule
    ],
    providers: [
    ],
    declarations: [
        KomponentkartanApplicationComponent
    ],
    bootstrap: [KomponentkartanApplicationComponent]
})
export class AppModule { }