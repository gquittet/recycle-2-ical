import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const fakeRecycle = (req: HttpRequest<any>) => {
  req.headers.append('X-Consumer', 'recycleapp.be');
  req.headers.append('Origin', 'https://api.fostplus.be');
  return req;
};

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  private token: string | undefined;

  private authRequest<T extends HttpRequest<any>>(req: T): T {
    if (!this.token) return req;
    req.headers.append('Authorization', this.token);
    return req;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = this.authRequest(fakeRecycle(req));
    return next.handle(request);
  }
}
