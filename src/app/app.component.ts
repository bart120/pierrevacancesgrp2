import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Pierre & vacances';

  user: User = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    console.log('subscribe app');
    this.auth.user.subscribe(
      data => {
        this.user = data;
      }
    );
  }

  logout(): void {
    this.auth.logout();

  }

}
