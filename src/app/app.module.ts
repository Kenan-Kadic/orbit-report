import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { ShouldShowWarningDirective } from './should-show-warning.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    ShouldShowWarningDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
