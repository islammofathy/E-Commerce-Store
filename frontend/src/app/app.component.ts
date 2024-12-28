import { CommonModule } from '@angular/common'; 
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'A2Z';
  menuOpen = false;
  totalQuantity = 0;
  user = { username: '', password: '' };
  loginFailed = false;
  isModalOpen = false;

  
  constructor(
    private cartService: ProductsService,
    private authService: AuthService,
    
  ) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.totalQuantity = this.cartService.getTotalQuantity();
    });

    
  }

  openLoginModal() {
    this.isModalOpen = true;
  }

  closeLoginModal() {
    this.isModalOpen = false;
    this.loginFailed = false;
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  onLoginSubmit() {
    const { username, password } = this.user;
    if (this.authService.login(username, password)) {
      this.closeLoginModal();
    } else {
      this.loginFailed = true;
    }
  }

  logout() {
    this.authService.logout();
  }
  
}


