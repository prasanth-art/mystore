import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  Products;
  ProductList: ArrayBuffer;
  myForm: any;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(Response => {
      this.Products = Response;
    }
    // this.productService.addProducts(this.myForm.value).subscribe(Response => {
    //   this.ProductList = Response;
    );

  }


  ngOnInit() { }
  }
