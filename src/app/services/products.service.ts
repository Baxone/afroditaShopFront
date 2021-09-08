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

  getAll(pNumberPage: number = 0): Promise<any> {
    if (pNumberPage === 0) {
      return this.httpClient.get<any>(this.baseUrl).toPromise();
    } else {
      return this.httpClient.get<any>(`${this.baseUrl}/?page=${pNumberPage}&limit=6`).toPromise();
    }

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
