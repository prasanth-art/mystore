import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SaleComponent } from './sale/sale.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: SaleComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'add-product/:id', component: AddProductComponent },
  { path: 'ddd', component: DetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SaleComponent,
    FooterComponent,
    AddProductComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
