import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any;
  public isAdmin = false;
  public isContri = false;
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

  onLogout() {
    this.loginService.logout();
  }

}
