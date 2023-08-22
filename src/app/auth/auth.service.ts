import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRequest} from "./model/user-request.model";
import {UserResponseWrapper} from "./model/user-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  public login(data: UserRequest): Observable<any>{
    return this.http.post<UserResponseWrapper>('api/auth/login', data);
  }
  public register (data : any) : Observable<any> {
    return this.http.post<UserResponseWrapper>('api/auth/register-admin', data)
  }
}
