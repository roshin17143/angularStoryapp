import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-story',
  templateUrl: './show-story.component.html',
  styleUrls: ['./show-story.component.css']
})
export class ShowStoryComponent implements OnInit {

  user: any;
  isAdmin = false;
  isContri = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.user = this.loginService.getUser();
    console.log(this.user);
    if (this.user) {
      if (this.user.isAdmin) {
        this.isAdmin = true;
      }
      else if (this.user.isContri) {
        this.isContri = true;
      }
    } else {
      this.loginService.logout();
    }
  }

}
