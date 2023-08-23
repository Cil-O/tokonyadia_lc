import { Component } from '@angular/core';
import {ProductServiceService} from "../../product/service/product-service.service";
import {Product} from "../../product/model/product.model";
import {Customer} from "../model/customer.model";
import {CustomerServiceService} from "../service/customer-service.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customer: Customer[] = [];
  selectedProductIndex: number | null = null;

  constructor(private readonly service: CustomerServiceService) {}

  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  totalPagesArray: number[] = [];
  ngOnInit(): void {
    this.getCustomerByPage(this.currentPage);
  }

  onPageButtonClick(pageIndex: number) {
    this.currentPage = pageIndex;
    this.getCustomerByPage(this.currentPage);
  }

  getCustomerByPage(page: number): void {
    this.service.getCustomerPerPage(page)
      .subscribe(data => {
        this.customer = data.data;
        this.totalPages = data.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i);
      });
  }
  deleteProduct(index: number) {
    // this.service.deleteProduct(index)
    // this.serv.deleteTodos(index)
  }

  updateProduct(i: number){
    // this.selectedProductIndex = i;
    // const selectedProduct = this.products[i];
    // this.name = selectedProduct.name;
    // this.newDescription = selectedProduct.description;
    // this.price = selectedProduct.price;
  }

  saveUpdate(){
    // if (this.selectedProductIndex !== null){
    //   this.service.updateProduct(this.selectedProductIndex, this.name, this.newDescription, this.price);
    //   this.clearForm();
    // }
  }

  clearForm(){
    // this.name='';
    // this.newDescription='';
    // this.price=0;
    this.selectedProductIndex = null;
  }

}
