import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../shared/user";
import {MatListOption} from "@angular/material/list";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User [] = []
  username: string
  name: string
  role: string
  selectedList: User []
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList()
  }
  search(query: string) {
    this.usersList = this.usersService.findUser(query)
  }
  sort(direction: string) {
    this.usersList = this.usersService.sortUser(direction)
  }

  addUsers() {

      this.usersService.addUser({
      id: Math.floor((Math.random() * 20) + 10),
      name: this.name,
      username: this.username,
      email: "",
      role: this.role,
      phone: "",
      website: ""
    })
    this.usersList = this.usersService.getUsersList()
  }
  selectItem(item: MatListOption []) {
    this.selectedList = []
    item.forEach(element => {
      this.selectedList.push(element.value)
    })
  }
  delUsers() {
    this.usersService.delUser(this.selectedList)

    this.usersList = this.usersService.getUsersList()
  }
  }



