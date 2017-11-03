import { Component, OnInit, Input } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  selector: 'app-component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent implements OnInit {
  columnWidth = ColumnWidth;
  @Input() componentName: string;
  constructor() { }

  ngOnInit() {
  }

}
