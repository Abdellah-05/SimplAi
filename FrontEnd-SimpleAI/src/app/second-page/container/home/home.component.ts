import { Component, OnInit } from '@angular/core';
import { DatasetsKaggle } from 'src/app/modules/datasets-kaggle';
import { DatasetsKaggleService } from 'src/app/services/datasets_kaggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  a:any; 


  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  constructor( private datasetKaggleService : DatasetsKaggleService ) { }

  datasetsKaggleArray:DatasetsKaggle [] = [];

  ngOnInit(): void {
    this.datasetKaggleService.getDatasetsKaggle().subscribe((data)=>{
        console.log(data)
        this.datasetsKaggleArray = data;
        const NumberResults = this.datasetsKaggleArray.length;
        console.log(NumberResults);
      return this.a = NumberResults;
    },
    error=>console.log(error));
  }

}
