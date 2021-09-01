import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit{

form!: FormGroup;

registrationForm!: FormGroup;

pw!: string;
repeatPw!: string;

constructor (private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      username:'',
      password:['', Validators.required]
    })
    this.registrationForm = this.fb.group({
      username:['',Validators.minLength(5),],
      email:['',Validators.email],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    })
  }
  isEqual() {
    console.log(this.registrationForm.get("password")?.value ===   this.registrationForm.get("repeatPassword")?.value)
    return this.registrationForm.get("password")?.value ===   this.registrationForm.get("repeatPassword")?.value ? true : false
  }
}