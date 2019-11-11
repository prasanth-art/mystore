import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  Products;

  constructor(private productService: ProductService) {
    this.Products = this.productService.getProducts();
  }


  ngOnInit() { }
  }
