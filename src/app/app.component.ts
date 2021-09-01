import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog'
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(UserComponent);
  }
}

