import { Component } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor(private readonly service: ProductServiceService) {}

  products: Product[] = []
  name: string = '';
  // private serv = new TodoService()
  newDescription: string | undefined = '';
  price: number = 0;
  productImg: string = ``;

  ngOnInit(){
    // this.getAllProduct()
  }

  // getAllProduct(){
  //   this.products = this.service.getProduct()
  //   // this.todos = this.serv.getTodos()
  // }

  addProduct(){
    // this.service.addProduct(this.name, this.newDescription, this.price);
  }

}
