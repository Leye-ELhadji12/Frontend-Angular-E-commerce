import {Component, signal} from '@angular/core';
import {HomeServiceService} from "../home-service.service";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {
  products = this.homeService.products;
  categories = this.homeService.categories;
  selectedCategory = signal<{ category: string, name: string, description: string, price: number, imageLink: string, color: string, dimensions: string }[] | null>(null)

  constructor(private homeService: HomeServiceService) {}

  // filterProductsByCategory(category: string) {
  //   return this.homeService.filterProductsByCategory(category);
  // }


  onSelectedCategory(category: string) {
    this.selectedCategory.set(this.products().filter((product) => product.category === category));
  }
}
