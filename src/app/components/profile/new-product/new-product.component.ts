import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  formNewProduct: FormGroup;
  newProduct: Product | undefined;
  oldProduct: Product | undefined;
  btnText: string = "Insertar"
  constructor(
    private productsServices: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formNewProduct = new FormGroup({
      name: new FormControl('', []),
      description: new FormControl('', []),
      price: new FormControl('', []),
      category: new FormControl('', [])
    });
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      if(params.idproduct){
        this.btnText = "Actualizar";
        this.oldProduct = await this.productsServices.getById(Number(params.idproduct))
        this.formNewProduct = new FormGroup({
          id: new FormControl(this.oldProduct.id, []),
          name: new FormControl(this.oldProduct.name, []),
          description: new FormControl(this.oldProduct.description, []),
          price: new FormControl(this.oldProduct.price, []),
          category: new FormControl(this.oldProduct.category, [])
        });
      }
    })
  }

  async onSubmit(){
    this.newProduct = this.formNewProduct.value;
    this.newProduct!.available = 1;
    console.log(this.newProduct)
    if(!this.newProduct?.id)
    {
      const msg = await this.productsServices.create(this.formNewProduct.value);
    }else{
      const msg = await this.productsServices.update(this.formNewProduct.value);
    }

    this.router.navigate(['/profile', 'products'])
  }

}
