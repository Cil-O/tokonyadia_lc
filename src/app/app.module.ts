import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/page/home/home.component';
import { ProductFormComponent } from './pages/page/product/product-form/product-form.component';
import { ProductListComponent } from './pages/page/product/product-list/product-list.component';
import { CustomerFormComponent } from './pages/page/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './pages/page/customer/customer-list/customer-list.component';
import { TransactionFormComponent } from './pages/page/transaction/transaction-form/transaction-form.component';
import { TransactionListComponent } from './pages/page/transaction/transaction-list/transaction-list.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { PageComponent } from './pages/page/page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/interceptor/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductFormComponent,
    ProductListComponent,
    CustomerFormComponent,
    CustomerListComponent,
    TransactionFormComponent,
    TransactionListComponent,
    SidebarComponent,
    NavbarComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
