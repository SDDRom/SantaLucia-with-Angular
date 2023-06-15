import { CurrencyPipe } from "@angular/common";

export interface Product{
    // counter: number;
    name: string;
    price:number;
    description:string;
    id:number;
    // counter?:number;
} 

export interface ShopProduct{
    product:Product;
    counter:number;
}