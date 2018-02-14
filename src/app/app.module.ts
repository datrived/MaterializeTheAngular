import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { QuoteComponent } from './Quote/quote.component';
import { QuoteService } from './quote.service';


import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    SkillComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule, 
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
