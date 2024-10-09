// Core
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './routes';

// Komponentkartan
import { KomponentkartanModule, SelectablelistComponent } from 'vgr-komponentkartan';

// Vendors
// import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

// Domain
import { KomponentkartanApplicationComponent } from './app.component';

import { InputfieldsComponent } from './inputfields/inputfields.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColoursComponent } from './colours/colours.component';
import { FormattemplateComponent } from './formattemplate/formattemplate.component';
import { HeadersComponent } from './headers/headers.component';
import { LockbuttonComponent } from './lockbutton/lockbutton.component';
import { ClosebuttonComponent } from './closebutton/closebutton.component';

import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { PanelsComponent } from './panels/panels.component';

import { TextbuttonsComponent } from './textbuttons/textbuttons.component';
import { SavecancelComponent } from './savecancel/savecancel.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { LoaderComponent } from './loader/loader.component';
import { StartComponent } from './start/start.component';
import { ThemingComponent } from './theming/theming.component';
import { ReactiveformsexampleComponent } from './reactiveforms-example/reactiveforms-example.component';
import { ComponentDocsComponent } from './component-docs/component-docs.component';
import { TitleValueComponent } from './title-value/title-value.component';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { CardComponent } from './card/card.component';
import { HtmlEncodeService } from './html-encode.service';
import { SizesComponent } from './sizes/sizes.component';
import { MenuComponent } from './menu/menu.component';
import { ExpandableDivComponent } from './expandable-div/expandable-div.component';
import { ActionPanelsComponent } from './actionpanels/actionpanels.component';
import { FilterTagComponent } from './filter-tag/filter-tag.component';

import { TextareafieldComponent } from './textareafield/textareafield.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { RingWithTextComponent } from './ring-with-text/ring-with-text.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PageHeaderDocumentationComponent } from './page-header-documentation/page-header-documentation.component';
import { PageBlockDocumentationComponent } from './page-block-documentation/page-block-documentation.component';
import { PageBodyDocumentationComponent } from './page-body-documentation/page-body-documentation.component';
import { PaginationDocumentationComponent } from './pagination-documentation/pagination-documentation.component';
import { DropdownSelectDocumentationComponent } from './dropdown-select-documentation/dropdown-select-documentation.component';
import { IconDocumentationComponent } from './icon-documentation/icon-documentation.component';
import { GridDocumentationComponent } from './grid-documentation/grid-documentation.component';
import { NotificationDocumentationComponent } from './notification-documentation/notification-documentation.component';
import { ComboboxDocumentationComponent } from './combobox-documentation/combobox-documentation.component';
import { TabButtonModule } from './tab-button/tab-button.module';
import { HighlightCodeDirective } from './shared/directives/highlight-code.directive';
import { SharedModule } from './shared/shared.module';
import { EditableTableDocumentationComponent } from './editable-table-documentation/editable-table-documentation.component';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';

// Locale registration
import { registerLocaleData } from '@angular/common';
import localeSv from '@angular/common/locales/sv';
import { SelectablelistDocumentationComponent } from './selectablelist-documentation/selectablelist-documentation.component';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
registerLocaleData(localeSv);

@NgModule({
    declarations: [
        KomponentkartanApplicationComponent,
        InputfieldsComponent,
        DatepickerComponent,
        BacktotopComponent,
        SavecancelComponent,
        CheckboxComponent,
        ColoursComponent,
        FormattemplateComponent,
        HeadersComponent,
        LockbuttonComponent,
        ModaldialogComponent,
        PanelsComponent,
        TextbuttonsComponent,
        LoaderComponent,
        StartComponent,
        ThemingComponent,
        ComponentDocsComponent,
        TitleValueComponent,
        PageStructureComponent,
        CardComponent,
        SizesComponent,
        MenuComponent,
        ReactiveformsexampleComponent,
        ExpandableDivComponent,
        IconsComponent,
        ActionPanelsComponent,
        ClosebuttonComponent,
        TableComponent,
        TextareafieldComponent,
        FilterTagComponent,
        RingWithTextComponent,
        ToggleButtonComponent,
        SearchResultComponent,
        PageHeaderDocumentationComponent,
        PageBlockDocumentationComponent,
        PageBodyDocumentationComponent,
        PaginationDocumentationComponent,
        DropdownSelectDocumentationComponent,
        IconDocumentationComponent,
        GridDocumentationComponent,
        NotificationDocumentationComponent,
        ComboboxDocumentationComponent,
        EditableTableDocumentationComponent,
        ComboboxDocumentationComponent,
        RadiogroupComponent,
        SelectablelistDocumentationComponent,
        PipesDocumentationComponent
    ],
    imports: [
        KomponentkartanModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TabButtonModule,
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        HtmlEncodeService,
        {
            provide: LOCALE_ID, useValue: 'sv-SE'
        },
    ],
    bootstrap: [KomponentkartanApplicationComponent]
})
export class AppModule { }


