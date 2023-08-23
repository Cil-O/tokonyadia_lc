import { Component } from '@angular/core';
import {Seller} from "../model/seller.model";
import {StoreServiceService} from "../service/store-service.service";
import {Product} from "../../product/model/product.model";
import {ProductServiceService} from "../../product/service/product-service.service";

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  seller: Seller[] = [];
  selectedProductIndex: number | null = null;

  constructor(private readonly service: StoreServiceService) {}

  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];
  ngOnInit(): void {
    this.getStoreByPage(this.currentPage);
  }

  onPageButtonClick(pageIndex: number) {
    this.currentPage = pageIndex;
    this.getStoreByPage(this.currentPage);
  }

  getStoreByPage(page: number): void {
    this.service.getStorePerPage(page)
      .subscribe(data => {
        this.seller = data.data;
        this.totalPages = data.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i);
      });
  }
  deleteProduct(index: number) {
    this.service.deleteProduct(index)
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
