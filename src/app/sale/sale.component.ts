import { Component, OnInit } from '@angular/core';
import {Product} from '../Folder/Product';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myProduct: Array<Product> = [
{
    name: 'Apple',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
    description: '',
    imageAlt: '',
    isAvailable: false,
    price: 40000
},
 {
  name: 'Lenovo',
  image: 'https://rukminim1.flixcart.com/image/312/312/k1zbssw0pkrrdj/computer-refurbished/g/f/x/windows-10-home-8th-gen-81h7009sin-a-8-gb-core-i5-1-tb-130-15ikb-original-imafj9wscwkeyu45.jpeg?q=70',
  description: '<ul><li></li></ul>',
  imageAlt: '',
  isAvailable: true,
  price: 33000
},
{
name: 'Dell',
image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
description: '',
imageAlt: '',
isAvailable: true,
price: 35000
},
{
name: 'Dell',
image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
description: '',
imageAlt: '',
isAvailable: true,
price: 35000
},
{
name: 'Dell',
image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
description: '',
imageAlt: '',
isAvailable: true,
price: 35000
},
{
name: 'Dell',
image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
description: '',
imageAlt: '',
isAvailable: true,
price: 35000
},
{
name: 'Dell',
image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
description: '',
imageAlt: '',
isAvailable: true,
price: 35000
},
{
name: 'Dell',
image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_-qSMjEeZ2W3iN4OwZTU9uAOoQ6Jjp6rIUp5-9cc-jKiDDXMuiuJQTB4e2a2wlrlK-nCdg4uKV2hiVQSuZQQsW-v45FY5Q5cZD9VLZ1fHyfUANSAX0whUog&usqp=CAc',
description: '',
imageAlt: '',
isAvailable: true,
price: 35000
}
];

}
