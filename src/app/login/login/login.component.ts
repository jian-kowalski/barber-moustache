import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Tic Tac Toe';
  public isAuthenticated = false;

  public logout(): void {
    // todo
  }
  constructor() { }

  ngOnInit(): void {
  }

}
