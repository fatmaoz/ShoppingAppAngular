import { CategoryRepository } from './category.repository';
import { RestService } from './rest.service';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
@NgModule({
  imports: [HttpClientModule],
  providers: [RestService,ProductRepository,CategoryRepository,Cart, Order, OrderRepository ]
})
export class ModelModule {

}
