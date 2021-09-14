import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{

loginForm!: FormGroup;

registrationForm!: FormGroup;

username!: string;
email!: string;
password!: string;
result!: string;

constructor (private fb:FormBuilder, private http:HttpClient,){}

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      username:'',
      password:['', Validators.required]
    });

    this.registrationForm = this.fb.group({
      username:['',Validators.minLength(5),],
      email:['',Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  sendData(): void{

    let url = "http://localhost:8080/user"

    const passwordHash = hashPass(this.registrationForm.get("password")?.value);

    this.http.post(url,{
      username:this.registrationForm.get("username")?.value,
      email:this.registrationForm.get("email")?.value,
      password:passwordHash

    }).toPromise().then((data:any) => {
      this.result = JSON.stringify(data.json)
    })
  }
}
function hashPass(password:string):string{

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}
