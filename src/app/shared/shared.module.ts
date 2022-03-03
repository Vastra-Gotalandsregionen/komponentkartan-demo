import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCodeDirective } from './directives/highlight-code.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightCodeDirective
  ],
  exports: [
    HighlightCodeDirective
  ]
})
export class SharedModule { }
