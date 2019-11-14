import { Injectable } from '@angular/core';
// import {Product} from '../Folder/Product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  delete(id: any) {
    throw new Error("Method not implemented.");
  }
  Products: any;
 constructor(private http: HttpClient) { }
    // private Products: Array<Product> = [
    //   {
    //       name: 'Apple',
    //       // tslint:disable-next-line: max-line-length
    //       image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSmr-VhhTOSn2zACA04YL_3fRmA9xFLH1MsHTDIgzeqqEMGUvFgcR8_QII2JukfWAcoiyoeH398o09LdcmPwYdvFlwvtgsrmxl7S_thfA-Yh0vN4kVAtzEq4YM&usqp=CAE',
    //       description: '',
    //       imageAlt: '',
    //       isAvailable: false,
    //       price: 40000,
    //       // tslint:disable-next-line: max-line-length
    //       visit: ''
    //   },
    //    {
    //     name: 'Asus',
    //     // tslint:disable-next-line: max-line-length
    //     image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-U-_Nd-qkVY_IaJsDZchY-axxn6yMktDNhlG3ap3HBgKxipc-HLeJIIgaEBaSPWgwtR3mA6IRZBNlI5NRkSX3ZrXgJ4JDUPvhlkWd3IC8fygQXq25HDg5&usqp=CAE',
    //     description: '<ul><li></li></ul>',
    //     imageAlt: '',
    //     isAvailable: true,
    //     price: 33000,
    //     // tslint:disable-next-line: max-line-length
    //     visit: ''
    //   },
    //   {
    //   name: 'Dell',
    //   // tslint:disable-next-line: max-line-length
    //   image: 'data:image/webp;base64,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',
    //   description: '',
    //   imageAlt: '',
    //   isAvailable: true,
    //   price: 45000,
    //   visit: ''
    //   },
    //   {
    //   name: 'hp',
    //   // tslint:disable-next-line: max-line-length
    //   image: 'data:image/webp;base64,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',
    //   description: '',
    //   imageAlt: '',
    //   isAvailable: true,
    //   price: 37000,
    //   visit: ''
    //   },
    //   {
    //   name: 'lenovo',
    //   // tslint:disable-next-line: max-line-length
    //   image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGLJEHnNlBrHVU-KLaLvL3rCdsysIUuqq9FkhonCsVUQ8dp_YgYdJI3shfm3lrJE1bTSkYWppI6HbenPGt0tFnK8u-5oSfpe-u5EZKqcmU2hrSGUcb_aYYoA&usqp=CAE',
    //   description: '',
    //   imageAlt: '',
    //   isAvailable: true,
    //   price: 35000,
    //   visit: ''
    //   },
    //   {
    //   name: 'Chromebook',
    //   // tslint:disable-next-line: max-line-length
    //   image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRc758k-lLnFbZxH0BOvFf3i5XfbDW2wH7oxxs_T___eiQmqebYXGuA-tV5xxu6HX-xZOVuPB96SejemjZX4daRJkvxR6ocBHMdBdT-SwUCs09bFxExm_vO&usqp=CAE',
    //   description: '',
    //   imageAlt: '',
    //   isAvailable: true,
    //   price: 66000,
    //   visit: ''
    //   },
    //   {
    //   name: 'asus vivobook',
    //   // tslint:disable-next-line: max-line-length
    //   image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQou5AMowsG2qBT3xgmyzW9crED7itjdl_gAnjSckVBiCWiytmviU7_JsxPk66IvHEvT9lp92e9AOJKbLZiaSP1gWHGmKTghF95EgsGlEebCcKxFUvDHp5h&usqp=CAE',
    //   description: '',
    //   imageAlt: '',
    //   isAvailable: true,
    //   price: 40000,
    //   visit: ''
    //   },
    //   {
    //   name: 'Microsoft',
    //   // tslint:disable-next-line: max-line-length
    //   image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRPSvz5WqkDKrMGM-Lu0Xvgz98lC5HOmjfj0_wCFfWSIwz4cW4hwKV0W9IocAMJS4mmKjpV4l5FADURcVU0a21LdzFGq-nzfRF2XosVjvGKyGvE6Dm9HoVZ&usqp=CAE',
    //   description: '',
    //   imageAlt: '',
    //   isAvailable: true,
    //   price: 75000,
    //   visit: ''
    //   }
    //   ];
    // addProducts() {

    // }
    getProducts() {
      return this.http.get('http://localhost:3000/product');
      }
      addProducts(obj) {
        // this.Products.push(obj);
        return this.http.post('http://localhost:3000/product', obj);

      }
      update(id) {
        return this.http.get('http://localhost:3000/product/' + id);
      }

      updatedata(data, id) {
        return this.http.put('http://localhost:3000/product/' + id, data);
      }
      dele(id) {
        return this.http.delete('http://localhost:3000/product/' + id);
      }
    }

