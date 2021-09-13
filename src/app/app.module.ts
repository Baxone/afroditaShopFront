import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//librerias
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/profile/products/products.component';
import { ClientsComponent } from './components/profile/clients/clients.component';
import { NewProductComponent } from './components/profile/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductsListComponent,
    DetailProductComponent,
    Error404Component,
    HeaderComponent,
    CardProductComponent,
    ProfileComponent,
    ProductsComponent,
    ClientsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
