import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export interface Dataset {
  name: string;
}

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  faPlus=faPlus;

  datasets: Dataset[] = [
    {name: 'Education'},
    {name: 'Football'},
    {name: 'Movie'},
    {name: 'Informatique'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
