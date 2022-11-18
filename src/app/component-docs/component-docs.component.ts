import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent {
  @Input() componentName: string;
  constructor() { }
}
