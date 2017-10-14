import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
 currentUser: User;
  constructor(private userService: UserService,private router :Router) {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
     this.currentUser;
  }
  goToHome(){
    this.router.navigate(['']);
  }
  private loadUser() {
    this.userService.update(this.currentUser).subscribe(updateUser => {this.currentUser = updateUser;});
    }
}
