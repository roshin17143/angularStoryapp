import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: User | null = null;
  constructor(private http: HttpClient, private router: Router) { }


  login(reqBody: User) {
    const userWithRole: User  = this.setRole(reqBody);
    this.saveUser(userWithRole);
    this.router.navigateByUrl('home');

    // this.http.post('login_api', reqBody).subscribe(function (response) {
    //   console.log(response);
    // });
  }

  logout() {
    this.user = null;
    this.router.navigateByUrl('login');
  }

  setRole(user: User) {
    if(user?.username === 'admin' && user?.password === 'admin') {
      console.log("admin user");
      user.isAdmin = true;
    } else if(user?.username === 'contri' && user?.password === 'contri') {
      user.isContri = true;
    }
    else {
      console.log("normal user");
    }
    return user;
  }

  saveUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}

interface User {
  username: string;
  password: string;
  isAdmin?: boolean;
  isContri?: boolean;
}
