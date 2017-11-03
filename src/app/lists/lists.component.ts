import { Component } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  columnWidth = ColumnWidth;
}
