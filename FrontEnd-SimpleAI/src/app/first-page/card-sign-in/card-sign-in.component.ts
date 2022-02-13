import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-sign-in',
  templateUrl: './card-sign-in.component.html',
  styleUrls: ['./card-sign-in.component.scss']
})
export class CardSignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
