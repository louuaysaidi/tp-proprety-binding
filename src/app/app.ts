import { Component, signal } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FirstComponent} from './first-component/first-component';
import {FormsModule} from '@angular/forms';
import {Directives} from './directives/directives';
import {PipeExemple} from './pipe-exemple/pipe-exemple';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
  name="louay";
  images = [
    { src: 'https://picsum.photos/200/150?random=1', alt: 'Image 1', titre:
        'Paysage' },
    { src: 'https://picsum.photos/200/150?random=2', alt: 'Image 2', titre:
        'Architecture' },
    { src: 'https://picsum.photos/200/150?random=3', alt: 'Image 3', titre:
        'Nature' }
  ];
  imageSelectionnee = this.images[0];
  boutonDesactive = true;

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  onClick() {
    window.alert("test");
  }
  profil = {
    prenom: '',
    nom: '',
    age: 0,
    email: '',
    biographie: '',
    theme: 'clair'
  };
  getInitiales(): string {
    const p = this.profil.prenom ? this.profil.prenom[0] : '?';
    const n = this.profil.nom ? this.profil.nom[0] : '?';
    return (p + n).toUpperCase();
  }

}




