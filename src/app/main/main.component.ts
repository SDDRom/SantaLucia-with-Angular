import { Component, OnInit } from '@angular/core';
import { CartService } from '../Sevices/cart.service';
import { product, shopProduct } from '../interface/add.interface';
import { Product } from '../interface/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private cartSrvice: CartService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  counter:number=1
  Product: Product []=[{
    name: 'Fresh Strawberies',
    price: 1000,
    description:'Get it',
    id:1
  },
  {
    name: ' Strawberies',
    price: 3000,
    description:'Get it for me',
    id:2
  },
  {
    name: ' Sluricane',
    price: 3500,
    description:'Get it for your children',
    id:3
  } 
];

//   Products: Product = 
//   Product3: Product =
  // name:string= this.products.name
  // price:number = this.products.price

  // shopProducts: shopProduct = {
  //   name:'Fresh Strawberies',
  //   price:1000
  // }

  // addCart() {  
  //   this.cartSrvice.addCartItem(this.shopProducts)

  // }

  addToCart(e:any ,p: Product){
    this.cartSrvice.addToCart(p);
  }
  
}

