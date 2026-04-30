import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class UserService {
  private users = [
    { id: 1, name: 'Ali', email: 'ali@gmail.com' },
    { id: 2, name: 'Sami', email: 'sami@gmail.com' },
    { id: 3, name: 'Nour', email: 'nour@gmail.com' }
  ];
  constructor() {}
  getUsers() {
    return this.users;
  }
}
