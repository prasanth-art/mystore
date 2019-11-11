import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myForm: FormGroup;


  constructor(private Productlist: ProductService) {

   }
  ngOnInit() {
    this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    isAvailable: new FormControl('', Validators.requiredTrue)
  });

  }
  onSubmit() {
    if (this.myForm.valid) {
    this.Productlist.addProducts(this.myForm.value);
    } else {
      alert('Invalid');
    }
  // ngOnChanges() {
  //   console.log ('changes');
  // }
  // ngDoCheck() {
  //   console.log ('check');
  // }
  // ngAfterContentChecked() {
  //   console.log ('checked');
  // }
  }
}
