import { CategoryRepository } from 'src/app/model/category.repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  editing: boolean = false;
  category: Category = new Category();
  constructor(private activateRoute: ActivatedRoute, private repository: CategoryRepository,private router: Router) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    if(this.editing){
      this.category = repository.getCategory(activateRoute.snapshot.params['id']);
    }
   }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.repository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');

  }

}
