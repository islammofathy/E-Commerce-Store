import { Component } from '@angular/core';
import { Order } from '../../types/order';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../types/user';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  orderList: Order[] = []
  user: User | null = null;

  constructor(
    private productService: ProductsService,
    private authService: AuthService,
  ) {
    const user = this.authService.getUser();
    if (user?._id)
      this.user = user;
      this.productService.getOrders(user._id).subscribe(orders => this.orderList = orders as Order[])
  }

}
