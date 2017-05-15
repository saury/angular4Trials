import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // prevent error for form's two way bind
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { heroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    heroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
