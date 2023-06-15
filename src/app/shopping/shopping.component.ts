import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import { product, shopProduct } from '../interface/add.interface';
import { CartService } from '../Sevices/cart.service';
import { Product, ShopProduct } from '../interface/product';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  constructor(private cartService: CartService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  counter = 1;
  totales:number | undefined;
  totalPs:number | undefined;
  totaleCr:number | undefined;
  parent = false;
  // message = true;
  parentMessage(){
    this.parent=!this.parent
  }
  product: ShopProduct[] =[]
  items = this.cartService.getItems();

  increase(index: number){
    this.cartService.add(index)
  this.total = this.cartService.getTotalCount();
  this.totalP =  this.cartService.getTotalFee();
  this.totalCart = this.cartService.totalCart() + this.totalP

  
  }
  decrease(index:number){
    this.cartService.subtract(index)
  this.total = this.cartService.getTotalCount();
  this.totalP = this.cartService.getTotalFee();
  this.totalCart = this.cartService.totalCart() + this.totalP


    this.items.forEach(aproduct=>{
      if(aproduct.counter <1){
        this.parent=!this.parent
        this.cartService.add(index)
        this.total = this.cartService.getTotalCount();
        this.totalP = this.cartService.getTotalFee();
        this.totalCart = this.cartService.totalCart() + this.totalP

      }
    })
   
  }
  clear(){
    let newI= this.cartService.deletePro()
    // this.items=[...newI]
     
  }
  del(item:any){
    // this.items = this.cartService.clearCart()
    let newItems = this.cartService.clearCart(item)
    this.items = [...newItems]
    this.total = this.cartService.getTotalCount();
    this.totalP = this.cartService.getTotalFee();
    this.totalCart = this.cartService.totalCart() + this.totalP
    // window.location.reload()
  }

  total = this.cartService.getTotalCount();
  totalP = this.cartService.getTotalFee();
  totalCart = this.cartService.totalCart() + this.totalP

}
