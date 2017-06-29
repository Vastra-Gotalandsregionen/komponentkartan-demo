import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core"
import { BrowserModule, Title } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router"
import { appRoutes } from "./routes"

import { KomponentkartanApplicationComponent } from "./app.component"
import { KomponentkartanModule } from "../node_modules/vgr-komponentkartan/component-package/komponentkartan.module";
import { MyComponent } from "./components/myComponent.component";

@NgModule({
    imports: [
        KomponentkartanModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)

    ],
    providers: [
    ],
    declarations: [
        KomponentkartanApplicationComponent,
        MyComponent
    ],
    bootstrap: [KomponentkartanApplicationComponent]
})
export class AppModule { }