import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: null,
    firstname: null,
    lastname: null,
    password: null,
    passwordRepeat: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register(id: string) {
    this.http.post(`/api/users/register`, this.user).map((res: any) => {
      return res.json();
    }).subscribe(() => {
      alert("success")
    })
  }

}
