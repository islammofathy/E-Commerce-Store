import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: ProductsService) {}

  ngOnInit(): void {
    // Subscribe to the cart observable to get the latest cart data
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.totalPrice = this.cartService.getTotalPrice(); // Update the total price
    });
  }

  // Method to remove an item from the cart
  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  // Method to complete the order (for demonstration purposes)
  completeOrder(): void {
    this.cartService.createOrder(this.cart);
  }

}
