import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RegularComponent } from './regular.component';
import { AccordionModule } from "ngx-bootstrap/accordion";
import { StandaloneComponent } from './standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    RegularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    StandaloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
