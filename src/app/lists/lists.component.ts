import { Component } from '@angular/core';
import { Examples } from './examples/examples';
import { HtmlEncodeService } from '../html-encode.service';
import { RowNotification, NotificationType } from 'vgr-komponentkartan';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  htmlBasicListStructureMarkup: string;
  examples: Examples = new Examples();

  notification: RowNotification = {
    icon: { name: 'exclamation-circle', color: 'error', solid: true },
    type: NotificationType.Permanent,
    message: 'Använd vår nya komponent vgr-grid i stället då vgr- list är deprecated.',
    done: true,
    removeWhenDone: false
  };

  constructor(htmlEncoder: HtmlEncodeService) {

    this.htmlBasicListStructureMarkup =
      htmlEncoder.prepareHighlightedSection(this.examples.htmlBasicListStructureMarkup);
  }
}
