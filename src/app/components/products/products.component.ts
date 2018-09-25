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

  listProduct: any;
  products: any;
  constructor(private mercadolibreService: MercadoLibreService) {this.data.flag= false;}

  ngOnInit() {
  }

  searchProducts(){
    this.mercadolibreService.searchProducts(this.data.query).subscribe(data => {
      this.listProduct = data;
      this.products = this.listProduct.results;
    });
    this.data.query = "";
    this.data.flag = true;
  }
}
