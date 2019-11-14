import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myForm: FormGroup;
  data: any;
  id: number;


  constructor(private Productlist: ProductService, private route: ActivatedRoute, private router: Router ) {
   }
  ngOnInit() {
    this.myForm = new FormGroup({
    // tslint:disable-next-line: max-line-length
    id: new FormControl('', Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    price: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
    imageUrl: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    isAvailable: new FormControl('', [Validators.requiredTrue])
  });
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        this.Productlist.update(this.id).subscribe(response => {
          this.data = response;
          this.myForm.patchValue({
            id: this.data.id,
            title: this.data.title,
            description: this.data.description,
            imageUrl: this.data.imageUrl,
            price: this.data.price,
            isAvailable: this.data.isAvailable
          });
        });
      }
    });
    }

    onSubmit() {
      console.log(this.myForm);
      // console.log(this.myForm.get('id').value;
      if (this.id) {
        this.Productlist.updatedata(this.myForm.value, this.id).subscribe(Response => {
        alert('Product added successfully');
        this.router.navigate(['']);
      });
     } else {
        this.Productlist.addProducts(this.myForm.value).subscribe(Response => {
        alert('Product edited successfully');
        this.router.navigate(['']);
      });
    }
  }
    del() {
      alert('Deleted successfully');
      return this.Productlist.dele(this.id).subscribe(Response => {
        this.router.navigate(['']);
      });
    }
  }
