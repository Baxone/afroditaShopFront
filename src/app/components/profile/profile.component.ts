import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isAdmin: boolean = false;
  myUser: any;
  constructor(
    private usersServices: UsersService
  ) { }

  async ngOnInit() {
    this.myUser = await this.usersServices.getUser();
    this.isAdmin = (this.myUser.role !== 'A') ? false : true;
  }

}
