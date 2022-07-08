import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  distance: number;
  distancehome: number;
  price: number;
  retailer: number;
  chip: number;
  pinNumber: number;
  order: number;
  fraud: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {distancehome: 57.877857, distance: 0.311140, price: 1.945940, retailer: 1,chip: 1.0, pinNumber: 0.0, order: 0.0, fraud: 0.0},
  {distancehome: 10.829943, distance: 0.175592, price: 1.294219, retailer: 1,chip: 0.0, pinNumber: 0.0, order: 0.0, fraud: 0.0},
  {distancehome: 5.091079, distance: 0.805153, price: 0.427715, retailer: 1,chip: 0.0, pinNumber: 0.0, order: 1.0, fraud: 0.0},
  {distancehome: 2.247564, distance: 5.600044, price: 0.362663, retailer: 1,chip: 1.0, pinNumber: 0.0, order: 1.0, fraud: 0.0},
  {distancehome: 44.190936, distance: 0.566486, price: 2.222767, retailer: 1,chip: 1.0, pinNumber: 0.0, order: 1.0, fraud: 0.0},
  {distancehome: 5.586408, distance: 13.261073, price: 0.064768, retailer: 1,chip: 0.0, pinNumber: 0.0, order: 0.0, fraud: 0.0},
  {distancehome: 3.724019, distance: 0.956838, price: 0.278465, retailer: 1,chip: 0.0, pinNumber: 0.0, order: 1.0, fraud: 0.0},
];
@Component({
  selector: 'app-try-your-model',
  templateUrl: './try-your-model.component.html',
  styleUrls: ['./try-your-model.component.scss']
})
export class TryYourModelComponent implements OnInit {

  displayedColumns: string[] = ['distancehome', 'distance', 'price', 'retailer','chip', 'pinNumber', 'order', 'fraud'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
