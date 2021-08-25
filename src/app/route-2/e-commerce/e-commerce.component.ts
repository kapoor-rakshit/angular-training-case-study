import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {

  products: any[] = [];
  originalProducts: any[] = [];
  selectedView: string = "grid";
  priceFilter: string = "none";

  constructor() { }

  ngOnInit(): void {
    let productCount = 40;
    for(let i=0; i<productCount; i++) {
      this.products.push(
        {
          "index": i+1,
          "price": this.getRandomIntInclusive(1000,5000)
        }
      );
    }

    this.originalProducts = [...this.products];
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  changeView(view: any) {
    this.selectedView = view;
  }

  applyFilter() {
    if(this.priceFilter == "lowToHigh") {
      this.products.sort((item1, item2)=> {
        return item1.price - item2.price;
      });
    }
    else if(this.priceFilter == "highToLow") {
      this.products.sort((item1, item2)=> {
        return item2.price - item1.price;
      });
    }
    else {
      this.products = [...this.originalProducts];
    }
  }

}
