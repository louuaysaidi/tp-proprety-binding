import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Mock users database
  private validUsers: User[] = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
    { username: 'test', password: 'test123' }
  ];

  authenticate(username: string, password: string): boolean {
    const user = this.validUsers.find(
      u => u.username === username && u.password === password
    );
    return user !== undefined;
  }

  getValidUsers(): User[] {
    return this.validUsers;
  }
}
