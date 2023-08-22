import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(authRequest)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Unauthorized required',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['']);
          }else if (error.status === 404) {
            Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '404',
            showConfirmButton: false,
            timer: 1500
          })
            this.router.navigate(['404']);
          }
          return throwError(error);
        })
      );
  }
}
