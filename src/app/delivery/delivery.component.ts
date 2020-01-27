import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.sass']
})
export class DeliveryComponent implements OnInit {
  deliveryCosts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.deliveryCosts = this.cartService.getDeliveryPrices();
  }

}
