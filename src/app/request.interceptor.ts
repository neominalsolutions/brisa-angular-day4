import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { SpinnerService } from './spinner/spinner.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private spinnerService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // uygulama genelinde çalışır.
    // request atıırken tüm requestler öncesinde buraya düşer.

    console.log('request', request);

    this.spinnerService.show();
  
    let httpHeader = new HttpHeaders();
    httpHeader = httpHeader.append('lang','en-US').append('Authorization', 'Bearer xzfe9889.sfdsfy65765.kjkasjdf67'); 

    let requestClone = request.clone({
      headers: httpHeader
    })
    

    return next.handle(requestClone).pipe(delay(2000),map(data => {
      this.spinnerService.hide();
      return data;
    }));
  }
}
