import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { DialogTemplateComponent } from './example.component';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: DialogService) {
    const ref = this.dialog.open(DialogTemplateComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' },
    });

    ref.afterClosed.subscribe((result) => {
      console.log('Dialog closed', result);
    });
  }
}
