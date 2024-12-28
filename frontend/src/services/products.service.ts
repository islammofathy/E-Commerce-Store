import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrl } from '../constants';
import { Product } from '../types/product';
import { AuthService } from './auth.service';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProducts(search?: string): Observable<any> {
    const params:{search?: string}={}
    if (search) params["search"]=search
    return this.http.get(apiUrl + "/products",{params});
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get(apiUrl + "/products/" + productId);
  }

  createOrder(products: Product[]) {
    const user = this.authService.getUser() as User;
    if(!user){
      alert("Please login first!");
    }
    const payload = {
      userId: user._id,
      products: products,
      totalAmount: this.getTotalPrice(),
      status: 'Completed',
    }
    return this.http.post(apiUrl + "/orders", payload).subscribe(()=> {
      this.clearCart();
      alert("Order is completed");
  });
  }

  getOrders(userId: string) {
    return this.http.get(apiUrl + "/orders/" + userId);
  }

  updateCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    const index = currentCart.findIndex(item => item._id === product._id);

    if (index !== -1) {

      currentCart[index].quantity += product.quantity;
    } else {

      currentCart.push(product);
    }


    this.cartSubject.next([...currentCart]);
  }


  removeFromCart(productId: string): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter(item => item._id !== productId);


    this.cartSubject.next(updatedCart);
  }


  getCart(): Product[] {
    return this.cartSubject.value;
  }

  // calculate total price
  getTotalPrice(): number {
    return this.cartSubject.value.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  getTotalQuantity(): number {
    return this.cartSubject.value.reduce(
      (total, product) => total + product.quantity,
      0
    );
  }


  clearCart(): void {
    this.cartSubject.next([]);
  }

}
