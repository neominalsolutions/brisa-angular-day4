import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import { ItalicTextDirective } from './italic-text.directive';
import { BoldTextDirective } from './bold-text.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { HomeComponent } from './home/home.component';

// Directive,Component ve Pipe declarion kısmında tanımlanırlar.

@NgModule({
  declarations: [
    AppComponent,
    ItalicTextDirective,
    BoldTextDirective,
    SpinnerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    ButtonModule,
    BadgeModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
