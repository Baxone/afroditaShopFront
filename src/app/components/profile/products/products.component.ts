import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  arrProducts: Product[] = [];
  constructor(
    private productsService: ProductsService
  ) { }

  async ngOnInit() {

    this.arrProducts = await this.productsService.getAllAdmin();

  }

}
