import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:3000/api/public_products/"
  }

  getAll(): Promise<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<Product> {
    return this.httpClient.get<Product>(this.baseUrl + pId).toPromise();
  }
}
