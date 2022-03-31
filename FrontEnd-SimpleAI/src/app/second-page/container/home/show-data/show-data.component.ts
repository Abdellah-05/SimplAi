import { Component, OnInit } from '@angular/core';
import { DatasetsKaggle } from 'src/app/modules/datasets-kaggle';
import { DatasetsKaggleService } from 'src/app/services/datasets_kaggle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  constructor( private datasetKaggleService : DatasetsKaggleService , private route:ActivatedRoute ) { }

  a:any; 

  datasetsKaggleArray:DatasetsKaggle [] = [];
  

  ngOnInit(): void {
    this.datasetKaggleService.getDatasetsKaggleBySearching().subscribe((data)=>{
        console.log(data)
        this.datasetsKaggleArray = data;
        const NumberResults = this.datasetsKaggleArray.length;
        console.log(NumberResults);
      return this.a = NumberResults;
    },
    error=>console.log(error));
  }

}
