import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product: any;

  // Base de données simulée
  products = [
    { id: 1, name: 'Ordinateur Portable', price: 2500, description: 'PC haute performance',
      stock: 15 },
    { id: 2, name: 'Smartphone', price: 1200, description: 'Dernière génération', stock: 30
    },
    { id: 3, name: 'Tablette', price: 800, description: 'Parfaite pour la lecture', stock:
        20 },
    { id: 4, name: 'Écouteurs', price: 150, description: 'Son de qualité premium', stock:
        50 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Méthode 1 : Snapshot (pour les paramètres qui ne changent pas)
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // Méthode 2 : Observable (pour les paramètres dynamiques)
    // this.route.paramMap.subscribe(params => {
    //   this.productId = Number(params.get('id'));
    //   this.loadProduct();
    // });

    this.loadProduct();
  }

  loadProduct(): void {
    this.product = this.products.find(p => p.id === this.productId);

    // Si le produit n'existe pas, rediriger vers 404
    if (!this.product) {
      this.router.navigate(['/404']);
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}

export class ProductDetail {
}
