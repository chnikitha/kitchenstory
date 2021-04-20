import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  searchText: any;  
  products: any[] = [
    {productName:"Spinach",
  productCat : "z",
  productPrice : 11,
  productImg :"/assets/images/s.png"},
  {productName:"Avacado",
  productCat : "y",
  productPrice : 19,
  productImg :"/assets/images/s.png"},
  {productName:"Bread",
  productCat : "x",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  {productName:"Cereals",
  productCat : "a",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  {productName:"Milk",
  productCat : "b",
  productPrice : 9,
  productImg :"/assets/images/s.png"},

  ]
  
  

}
