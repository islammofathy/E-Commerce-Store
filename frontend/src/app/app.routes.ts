import { Routes } from '@angular/router';
import { HomeComponent } from './../pages/home/home.component'
import { ProfileComponent } from '../pages/profile/profile.component';
import { CartComponent } from '../pages/cart/cart.component';
import { ProductComponent } from '../pages/product/product.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product/:productId', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
];
