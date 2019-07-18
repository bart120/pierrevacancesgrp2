import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pierre & vacances';

  user: any = null;

  logout(): void {
    this.user = null;
  }

}
