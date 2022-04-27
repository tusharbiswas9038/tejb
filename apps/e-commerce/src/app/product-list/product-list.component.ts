import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category, Product, ProductsService } from '@tejb/products';

@Component({
  selector: 'tejb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products: Product [] = [];
   categories: Category []=[];
  constructor(
    private productsService:ProductsService,
    private categoriesService:CategoriesService
  ) { }

  ngOnInit(): void {
    this._categories();
    this._getProducts();
  }



  private _getProducts(selected?:string[]) {
    this.productsService.getProducts(selected).subscribe((products) => {
      this.products = products;
    });
  }

  private _categories(){
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  categoryfilter(){
    const selected=this.categories.filter(categories => categories.checked)
    .map(categories=>categories.id);
    this._getProducts(selected);
  }
}

