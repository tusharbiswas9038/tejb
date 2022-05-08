import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@tejb/orders';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
// import { Observable } from 'rxjs';
// import { ORDER_STATUS } from '../order.constants';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tejb-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css'],
})

export class OrdersDetailsComponent implements OnInit {
  orders: Order;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedStatus: string;
  updated = false;
  orderStatuses: Status[] = [
    {value: 'pending', viewValue: 'Pending'},
    {value: 'processed', viewValue: 'Processed'},
    {value: 'shipped', viewValue: 'Shipped'},
    {value: 'delivered', viewValue: 'Delivered'},
    {value: 'failed', viewValue: 'Failed'},
  ];
 

  
  constructor(
    private orderService: OrdersService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._getOrder();
     this.selectedStatus='shipped';
  }
  
  

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.orderService.getOrder(params.id).subscribe((orders) => {
          this.orders = orders;
          this.selectedStatus = orders.status;
          
        });
      }
      
    });
    
  }

onStatusChange(e){
  this.orderService
   .updateOrder({ status: e.target.value },  this.orders.id).subscribe((order)=>
   {
    this.updated = true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      timer(2000)
        .toPromise()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_done) => {
          this.location.back();
        });
    console.log(order);
    console.log(e.target.value);
   });
  
}
}

interface Status {
  value: string;
  viewValue: string;
}