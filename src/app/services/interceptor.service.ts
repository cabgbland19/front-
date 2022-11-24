import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: any, next: any) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.loginService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
}
