import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  actionurl: string = environment.baseurl;
  // Products: any;
 constructor(private http: HttpClient) {
  }
      getProducts() {
      return this.http.get(this.actionurl + '/product');
      }
      addProducts(obj) {
        // this.Products.push(obj);
        return this.http.post(this.actionurl + '/product', obj);

      }
      update(id) {
        return this.http.get(this.actionurl + '/product/' + id);
      }

      updatedata(data, id) {
        return this.http.put(this.actionurl + '/product/' + id, data);
      }
      // tslint:disable-next-line: adjacent-overload-signatures
      erase(id) {
        return this.http.delete(this.actionurl + '/product/' + id);
      }
      dele(id) {
          return this.http.delete(this.actionurl + '/product/' + id);
        }
    }

