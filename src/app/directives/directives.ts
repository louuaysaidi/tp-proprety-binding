import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isVisible = true;
  items = ['Angular', 'Laravel', 'Python'];
  isActive = false;
  toggleButton1() {
    this.isVisible = !this.isVisible;
  }
  toggleButton2() {
    this.isActive = !this.isActive;
  }
  color = 'blue';
  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'green';
  }

}
