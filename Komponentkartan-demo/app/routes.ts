
import { MyComponent } from "./components/myComponent.component";

import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: "**", component: MyComponent }
];