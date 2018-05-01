import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatFormField } from '@angular/material';

import { GeneralServiceService } from '../general-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: GeneralServiceService, public router: Router) { }

  formdata;

  ngOnInit() {
    console.log(this.service.user_type);
    if (this.service.user_type === undefined) {
      this.formdata = new FormGroup({
        username: new FormControl("",
          Validators.compose([
            Validators.required
          ])),
        password: new FormControl("",
          Validators.compose([
            Validators.required
          ]))
      });
    }
    else{
      this.router.navigate(['home']);
    }
  }

  onClickSubmit(data) {
    for (let user of this.service.users){
      if (data.username === user.username && data.password === user.password) {
        if (user.role === "Team Member") {
          this.service.user_type = "Team Member";
          this.router.navigate(['home']);
          }
        else if (user.role === "Project Manager") {
          this.service.user_type = "Project Manager";
          this.router.navigate(['home']);
        }
        else{
          this.service.user_type = "Game Administrator";
          this.router.navigate(['home']);
        }
      }
    }
  }
}