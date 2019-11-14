import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() item;
  data: number;
  id: any;
  selectedProduct: any;
  count = 0;
  @Output() isDeleted = new EventEmitter();
  @Output() cartCount = new EventEmitter();
  constructor(private field: ProductService , private route: ActivatedRoute) {
     }

  ngOnInit() {}
  deleted(selectedId) {
  if (confirm('are u sure')) {
    this.field.erase(selectedId).subscribe(Response => {
      this.isDeleted.emit('deleted');
    });
} else {
  alert('cancelled');
}
}
updateCart() {
  this.count++;
  this.cartCount.emit('updateCount(this.count)');
}
  }
