import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if (productId) {
        this.productService.getProductById(productId).subscribe(product => this.product = product)
      }
    });
  }
  addToCart(product: Product) {
    this.productService.updateCart({ ...product, quantity: 1 });
  }
}