import { Component } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  selectedProductIndex: number | null = null;

  constructor(private readonly service: ProductServiceService) {}

  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];
  ngOnInit(): void {
    this.getProductsByPage(this.currentPage);
  }

  onPageButtonClick(pageIndex: number) {
    this.currentPage = pageIndex;
    this.getProductsByPage(this.currentPage);
  }

  getProductsByPage(page: number): void {
    this.service.getProductPerPage(page)
      .subscribe(data => {
        this.products = data.data;
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
