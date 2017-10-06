// Core
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core'
import { BrowserModule, Title } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Komponentkartan
import { KomponentkartanModule } from 'vgr-komponentkartan/component-package/komponentkartan.module';

// Domain
import { KomponentkartanApplicationComponent } from './app.component';

import { appRoutes } from './routes';
import { InputfieldsComponent } from './inputfields/inputfields.component';
import { Cityservice } from './inputfields/cityservice';
import { CalendarsComponent } from './calendars/calendars.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColoursComponent } from './colours/colours.component';
import { DropdownmultiselectComponent } from './dropdownmultiselect/dropdownmultiselect.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FormattemplateComponent } from './formattemplate/formattemplate.component';
import { HeadersComponent } from './headers/headers.component';
import { ListsComponent } from './lists/lists.component';
import { LoaderComponent } from './loader/loader.component';
import { LockbuttonComponent } from './lockbutton/lockbutton.component';
import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { PanelsComponent } from './panels/panels.component';
import { RadiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import { TextbuttonsComponent } from './textbuttons/textbuttons.component';

@NgModule({
  imports: [
    KomponentkartanModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    KomponentkartanApplicationComponent,
    InputfieldsComponent,
    CalendarsComponent,
    CheckboxComponent,
    ColoursComponent,
    DropdownmultiselectComponent,
    DropdownsComponent,
    FormattemplateComponent,
    HeadersComponent,
    ListsComponent,
    LoaderComponent,
    LockbuttonComponent,
    ModaldialogComponent,
    PanelsComponent,
    RadiobuttonsComponent,
    TextbuttonsComponent
  ],
  providers: [
    Cityservice,
    { provide: LOCALE_ID, useValue: 'sv-SE' }
  ],

  bootstrap: [KomponentkartanApplicationComponent]
})
export class AppModule { }


