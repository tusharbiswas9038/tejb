import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '@tejb/products';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tejb-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product:Product;
  endSub$:Subject<boolean>= new Subject();
  selectedImg:string;
  constructor(
    private productService:ProductsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params.productid){
        this._getProduct(params.productid);
      }
    }
    
    )

  }

  ngOnDestroy(): void {
      this.endSub$.next(true);
      this.endSub$.complete();
  }

onSelect(image:string){
  this.selectedImg=image;
}

  private _getProduct(id: string){
    this.productService.getProduct(id).pipe(takeUntil(this.endSub$)).subscribe(product=>{
      this.product=product;})
  }
}
