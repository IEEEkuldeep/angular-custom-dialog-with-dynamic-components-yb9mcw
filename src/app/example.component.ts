import { Component } from '@angular/core';
import { DialogConfig } from './dialog/dialog-config';
import { DialogRef } from './dialog/dialog-ref';

@Component({
  selector: 'lib-dialog-template',
  templateUrl: `<div class="dialog-container">
  <p class="dialog-content">Dialog content goes here.</p>
</div>`,
  // styleUrls: ['./dialog-template.component.scss'],
})
export class DialogTemplateComponent {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  onClose(): void {
    this.dialog.close('some value');
  }
}
