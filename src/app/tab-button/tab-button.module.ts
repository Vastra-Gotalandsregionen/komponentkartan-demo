import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Komponentkartan lib
import { KomponentkartanModule } from 'vgr-komponentkartan';
import { TabButtonComponent } from './tab-button.component';
// import { TabbuttonRoutingModule } from './tab-button-routing.module';
import { ValdaComponent } from './pages/valda.component';
import { FavoriterComponent } from './pages/favoriter.component';
import { TabStartComponent } from './pages/tab-start.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TabbuttonRoutingModule } from './tab-button-routing.module';

@NgModule({
  declarations: [
    TabButtonComponent,
    FavoriterComponent,
    ValdaComponent,
    TabStartComponent
  ],
  imports: [
    CommonModule,
    KomponentkartanModule,
    SharedModule,
    TabbuttonRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class TabButtonModule { }
