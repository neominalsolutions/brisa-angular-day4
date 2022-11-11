import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import { ItalicTextDirective } from './italic-text.directive';
import { BoldTextDirective } from './bold-text.directive';

// Directive,Component ve Pipe declarion kısmında tanımlanırlar.

@NgModule({
  declarations: [
    AppComponent,
    ItalicTextDirective,
    BoldTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    ButtonModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
