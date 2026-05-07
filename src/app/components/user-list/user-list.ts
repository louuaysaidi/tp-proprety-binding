import { Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user-service';
import {NgForOf, NgIf} from '@angular/common';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private userService: UserService) {
    console.log('✓ UserList component created');
  }

  ngOnInit(): void {
    console.log('✓ UserList ngOnInit called');
    this.loadUsersFromApi();

    // Set a timeout to fallback to mock data after 5 seconds
    setTimeout(() => {
      if (this.isLoading) {
        console.warn('⚠ API request timed out after 5 seconds, using fallback data...');
        this.isLoading = false;
        this.errorMessage = 'API request timed out - showing test data instead';
        this.users = [
          { id: 1, name: 'Test User 1', email: 'test1@example.com', phone: '123-456-7890' },
          { id: 2, name: 'Test User 2', email: 'test2@example.com', phone: '098-765-4321' },
          { id: 3, name: 'Test User 3', email: 'test3@example.com', phone: '555-555-5555' }
        ];
      }
    }, 5000);
  }

  loadUsersFromApi() {
    console.log('→ Loading users from API...');
    this.isLoading = true;
    this.errorMessage = '';

    this.userService.getUsersFromApi().pipe(
      timeout(8000) // 8 second timeout for the request itself
    ).subscribe({
      next: (data) => {
        console.log('✓ Users loaded successfully!');
        console.log('  Number of users:', data.length);
        console.log('  Data:', data);
        this.users = data;
        this.isLoading = false;
        this.errorMessage = '';
      },
      error: (error) => {
        console.error('✗ Error loading users:', error);
        console.error('  Error type:', error.name);
        console.error('  Error message:', error.message);

        this.isLoading = false;

        // Use mock data as fallback
        console.log('→ Using mock data as fallback...');
        this.users = [
          { id: 1, name: 'Test User 1', email: 'test1@example.com', phone: '123-456-7890' },
          { id: 2, name: 'Test User 2', email: 'test2@example.com', phone: '098-765-4321' },
          { id: 3, name: 'Test User 3', email: 'test3@example.com', phone: '555-555-5555' }
        ];

        if (error.status) {
          this.errorMessage = `HTTP Error ${error.status}: ${error.statusText || error.message}`;
        } else {
          this.errorMessage = `Error: ${error.message || 'Unknown error'}`;
        }
      }
    });
  }
}
