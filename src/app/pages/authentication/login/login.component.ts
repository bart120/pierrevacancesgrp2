import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formLogin): void {
    if (formLogin.valid) {
      console.log(this.user);
      this.auth.login(this.user.login, this.user.password);
    }
  }
}
