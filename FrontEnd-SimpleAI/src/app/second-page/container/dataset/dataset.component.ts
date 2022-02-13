import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export interface Dataset {
  name: string;
}

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

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
