import { Component, OnInit } from '@angular/core';
import { CartService } from '@tejb/orders';

@Component({
  selector: 'tejb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 press:boolean;
  constructor(private cartService:CartService) { }
  cartCount=0;
  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart)=>{
      this.cartCount= cart?.items.length ?? 0;
    })
    
    this.press=true;
    document.getElementById("inPut").style.visibility = "hidden";
  }


cons(){
  this.press=!this.press;
  
  
    if(this.press){
      document.getElementById("inPut").style.visibility = "hidden";
    }
    else{
      document.getElementById("inPut").style.visibility = "visible";
    }
  
  
}
}
