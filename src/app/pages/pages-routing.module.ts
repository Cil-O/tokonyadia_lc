import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from "./page/page.component";
import {HomeComponent} from "./page/home/home.component";
import {ProductFormComponent} from "./page/product/product-form/product-form.component";
import {ProductListComponent} from "./page/product/product-list/product-list.component";
import {CustomerFormComponent} from "./page/customer/customer-form/customer-form.component";
import {CustomerListComponent} from "./page/customer/customer-list/customer-list.component";
import {authGuard} from "../auth/auth.guard";
import {StoreListComponent} from "./page/store/store-list/store-list.component";

const routes: Routes = [
  {path: '', component: PageComponent,
  children:[
    { path: '', component: HomeComponent,
      canActivate: [authGuard]},
    { path: 'product-form', component: ProductFormComponent},
    { path: 'product-list', component: ProductListComponent},
    { path: 'customer-form', component: CustomerFormComponent},
    { path: 'customer-list', component: CustomerListComponent},
    { path: 'store-list', component: StoreListComponent},
  ]
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
