import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import { ItalicTextDirective } from './shared/directives/italic-text.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './shared/services/request.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { BoldTextDirective } from './shared/directives/bold-text.directive';


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
