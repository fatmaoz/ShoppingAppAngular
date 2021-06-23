import { ProductRepository } from './../../../model/product.repository';
import { Product } from 'src/app/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();
  constructor(private activateRoute: ActivatedRoute, private repository: ProductRepository,private router: Router) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    if(this.editing){
      this.product = repository.getProduct(activateRoute.snapshot.params['id']);
    }
   }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
