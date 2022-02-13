import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';

@Component({
  selector: 'app-head-one',
  templateUrl: './head-one.component.html',
  styleUrls: ['./head-one.component.scss']
})
export class HeadOneComponent implements OnInit {

  constructor( public dialog : MatDialog ) { }
  

  openDialog(){
    this.dialog.open(DialogRegisterComponent);
  }

  ngOnInit(): void {
  }

}
