import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent implements OnInit {
  @Input() componentName: string;
  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-component-docs2',
  templateUrl: './component-docs.component2.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent2 implements OnInit {
  @Input() componentName: string;
  constructor() { }

  ngOnInit() {
  }
}
