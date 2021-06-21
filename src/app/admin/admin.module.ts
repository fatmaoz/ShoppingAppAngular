import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductListComponent,
    ProductFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    OrderFormComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers:[AuthGuard]
})
export class AdminModule { }
