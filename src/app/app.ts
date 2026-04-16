import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from './first-component/first-component';
import {FormsModule} from '@angular/forms';
import {Directives} from './directives/directives';
import {PipeExemple} from './pipe-exemple/pipe-exemple';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Directives,
    PipeExemple
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

