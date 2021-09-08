import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  arrProducts: Product[] = [];
  next: number = 0;
  prev: number = 0;
  total: number = 0;
  constructor(
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<any> {
    const result = await this.productsService.getAll();
    this.arrProducts = result.data;
    this.next = result.info.next;
    this.prev = result.info.prev;
    this.total = result.info.total;
  }

  async gotoPage(pNumPage: number) {
    console.log(pNumPage);
    const result = await this.productsService.getAll(pNumPage);
    this.arrProducts = result.data;
    this.next = result.info.next;
    this.prev = result.info.prev;
  }

}
