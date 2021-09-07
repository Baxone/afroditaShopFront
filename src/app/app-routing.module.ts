import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ClientsComponent } from './components/profile/clients/clients.component';
import { ProductsComponent } from './components/profile/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "products-list", component: ProductsListComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "profile", component: ProfileComponent, canActivate: [LoginGuard], children: [
      { path: "products", component: ProductsComponent },
      { path: "clients", component: ClientsComponent },
    ]
  },
  { path: "product/:idproduct", component: DetailProductComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
