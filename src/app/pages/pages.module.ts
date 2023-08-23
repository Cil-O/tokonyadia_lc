import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StoreListComponent } from './page/store/store-list/store-list.component';


@NgModule({
  declarations: [
    StoreListComponent,
        StoreListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class PagesModule { }
