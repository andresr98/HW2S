import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {

  siteURL = 'https://api.mercadolibre.com/sites/MCO/';
  itemURL = 'https://api.mercadolibre.com/items/'

  constructor(public http: HttpClient) { }

  searchProducts(param: string){
    return this.http.get<any>(this.siteURL + "search?q=" + param);
  }

  searchProduct(id: string){
    return this.http.get<any>(this.itemURL + id);
  }
}
