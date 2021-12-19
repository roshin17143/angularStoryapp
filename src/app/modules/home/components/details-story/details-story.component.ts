import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-details-story',
  templateUrl: './details-story.component.html',
  styleUrls: ['./details-story.component.css']
})
export class DetailsStoryComponent implements OnInit {

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
