import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isMsg: boolean = false;
  msg: string ="";
  arrProducts: Product[] = [];
  constructor(
    private productsService: ProductsService
  ) { }

  async ngOnInit() {
    this.isMsg = false;
    this.arrProducts = await this.productsService.getAllAdmin();

  }

  async saveFile(pId: number) : Promise<any>{
    const msg = await this.productsService.delete(pId);
    if(msg.sucess)
    {
      this.isMsg = true;
      this.msg = msg.sucess;
    }
    if(this.isMsg)
    {
      this.arrProducts = await this.productsService.getAllAdmin();
    }

  }


}
