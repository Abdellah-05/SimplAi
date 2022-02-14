import { Component, OnInit } from '@angular/core';
import { DatasetsKaggle } from 'src/app/modules/datasets-kaggle'
import { DatasetsKaggleService } from 'src/app/services/datasets-kaggle.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  DatasetsKaggleArray:DatasetsKaggle[] = [];
  
  constructor( private datasetsKaggleService : DatasetsKaggleService ) { 

  }

  ngOnInit(): void {
    this.datasetsKaggleService.getDatasetsKaggle()
    .subscribe(data=>{
      console.log(data)
      this.DatasetsKaggleArray = data.data;
    },
    error=> console.log(error) 
    );

  }

}
