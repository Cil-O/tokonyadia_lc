import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ResponsePageWrapper} from "../../../../shared/model/page-response-wrapper";
import {Product} from "../../product/model/product.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {


  constructor(private http: HttpClient) { }
  getCustomerPerPage(currentPage: number): Observable<ResponsePageWrapper<Customer>> {
    let token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    })
    const params = new HttpParams()
      .set('page', currentPage);

    return this.http.get<any>('api/customers', {params});
  }
  deleteProduct(index: number) {
    // this.products.splice(index, 1);
  }



  updateProduct(index: number, name: string, description: string | undefined, price:number){
    // if (index >= 0 && index < this.products.length){
    //   this.products[index].name = name;
    //   this.products[index].description = description;
    //   this.products[index].price = price;
    // }
  }
}
