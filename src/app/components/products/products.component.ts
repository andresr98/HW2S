import { Component, OnInit } from '@angular/core';
import {MercadoLibreService} from '../../services/mercado-libre.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data = {
    query: "",
    flag: false
  }

  listProducts: any;
  products: any = [];
  constructor(private mercadolibreService: MercadoLibreService) {this.data.flag= false;}

  ngOnInit() {
  }

  searchProducts(){
    this.listProducts = {};
    this.products = [];
    this.mercadolibreService.searchProducts(this.data.query).subscribe(data => {
      this.listProducts = data.results;

      this.listProducts.forEach(product => {
        this.mercadolibreService.searchProduct(product.id).subscribe(data => {
          this.products.push(data);
        })
        
      });
    });
    this.data.query = "";
    this.data.flag = true;
  }
}
