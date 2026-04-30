import { Component } from '@angular/core';
import {UserService} from '../../services/user-service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [
    NgForOf
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
users: any[]=[];
constructor(private userService: UserService){}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
