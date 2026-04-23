import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./products.css']
})
export class Products {
  products = [
    { id: 1, name: 'Ordinateur Portable', price: 2500 },
    { id: 2, name: 'Smartphone', price: 1200 },
    { id: 3, name: 'Tablette', price: 800 },
    { id: 4, name: 'Écouteurs', price: 150 }
  ];
}
