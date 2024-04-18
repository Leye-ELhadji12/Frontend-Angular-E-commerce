import {Injectable, signal} from '@angular/core';
import {Categories, Products} from "../../data";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  products = signal(Products);
  categories = signal(Categories);
  selectedCategory = signal<{ category: string, name: string, description: string, price: number, imageLink: string, color: string, dimensions: string }[] | null>(null)

  constructor() {}

  // filterProductsByCategory(category: any) {
  //   return this.products.set(this.products().filter((product) => product.category === category));
  // }
  onSelecedCategory(category: any) {
    this.selectedCategory.set(this.products().filter((product) => product.category === category));
  }
}
