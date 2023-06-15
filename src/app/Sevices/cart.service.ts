import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { product, shopProduct } from '../interface/add.interface';
import { Product, ShopProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 items: ShopProduct[]=[];
 item: ShopProduct[]=[];
 counter:number=1
 totalPr =0;
 addedP =0;
 totalCount:number=0;
 totalFee:number=0;
  constructor(private store: LocalStorageService) { }
  
  addToCart(p:Product){
   let currentPro:null|number =null
    // this.items.push(p);
    // this.counter=1
    this.items.forEach((item,index)=>{
      if(item.product.id ==p.id){
        currentPro  =index;
      }
    })
    if(currentPro || currentPro===0){
      this.items[currentPro].counter++
      alert('Product found')
    }
    else{
      this.items.push({
        product:p,
        counter:1
      })
      alert('Item added successfull')
    }
  }
  add(index:number){
    if(this.items[index]){
    this.items[index].counter++;
    // this.getTotalCount()
    }
   };
   subtract(index:number){
    if(this.items[index]){
      this.items[index].counter--
    }
   }
  getItems(){
    // return this.addToCart;

    return this.items;
  }

  clearCart(item:any){
    this.items=[...this.items.slice(0,this.items.indexOf(item)),...this.items.slice(this.items.indexOf(item)+1,this.items.length)]
    return this.items
    // console.log(item);
    
  }
  
  deletePro(){
    this.clearCart(this.item)
    // this.items =
    // if(this.items[index].product){
    //   console.log(this.items[index].product);
      
    // }
  }

  getTotalCount(){
    this.total()
    return this.totalCount;
  }
  getTotalFee(){
    this.totalP()
    return this.totalFee;
  }

  total(){
    let qty=0
    for(let i=0; i<this.items.length; i++){
     qty+= this.items[i].counter ;
    }
    this.totalCount=qty
  }
  totalP(){
    let Total = 0;
    for(let i =0; i<this.items.length; i++){
      Total += (((this.items[i].product.price *this.items[i].counter) * 2/100));
    }
    this.totalFee= Total;
    // return Total
  }
  // totalPFee(){
  //   let Total = 0;
  //   for(let i =0; i<this.items.length; i++){
  //     Total = this.addedP += (((this.items[i].product.price) * 2/100))
  //     this.totalFee= this.addedP;
  //   }
  //   return Total
  // }
  totalCart(){
    let totalCa = 0;
    for(let i =0; i<this.items.length; i++){
      totalCa += (this.items[i].product.price *this.items[i].counter) ;
    //   this.totalPr += this.items[i].product.price
    //   this.addedP + (this.items[i].product.price) + this.totalP()
    //   Total = this.totalPr 
    }
    return totalCa
  }

}

