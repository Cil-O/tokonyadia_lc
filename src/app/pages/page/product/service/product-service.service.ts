import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from "@angular/common/http";
import {ResponsePageWrapper} from "../../../../shared/model/page-response-wrapper";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProductPerPage(currentPage: number): Observable<ResponsePageWrapper<Product>> {
    let token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    })
    const params = new HttpParams()
      .set('page', currentPage);

    return this.http.get<any>('api/products', {params});
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
