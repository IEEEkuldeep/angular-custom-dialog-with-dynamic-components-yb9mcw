import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from './dialog/dialog.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogTemplateComponent } from './example.component';

@NgModule({
  imports: [BrowserModule, DialogModule],
  declarations: [AppComponent, HelloComponent, DialogTemplateComponent],
  bootstrap: [AppComponent],
  entryComponents: [DialogTemplateComponent],
})
export class AppModule {}
