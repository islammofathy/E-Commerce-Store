import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../types/product';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  productList: Product[] = []
  searchQuery = '';

  constructor(
    private productService: ProductsService,
  ) {
    this.productService.getProducts().subscribe(products => this.productList = products)
  }

  filterProducts(): void {
    this.productService.getProducts(this.searchQuery.toLowerCase()).subscribe(products => this.productList = products)
  }

}
