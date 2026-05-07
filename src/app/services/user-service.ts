import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class UserService {
  /*private users = [
    { id: 1, name: 'Ali', email: 'ali@gmail.com' },
    { id: 2, name: 'Sami', email: 'sami@gmail.com' },
    { id: 3, name: 'Nour', email: 'nour@gmail.com' }
  ];
  constructor() {}
  getUsers() {
    return this.users;
  }*/
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsersFromApi(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
