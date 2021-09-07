import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string;
  adminUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:3000/api/public_products/"
    this.adminUrl = "http://localhost:3000/api/products/"
  }

  getAll(): Promise<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<Product> {
    return this.httpClient.get<Product>(this.baseUrl + pId).toPromise();
  }

  getAllAdmin(): Promise<Product[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.get<Product[]>(this.adminUrl + 'v2', httpOptions).toPromise();
  }
}
