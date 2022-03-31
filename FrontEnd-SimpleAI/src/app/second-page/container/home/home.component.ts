import { Component, OnInit } from '@angular/core';
import { DatasetsKaggle } from 'src/app/modules/datasets-kaggle';
import { DatasetsKaggleService } from 'src/app/services/datasets_kaggle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public data: DatasetsKaggleService  ) { }

  a:any;

  id="";

  getId():void{
    console.log(this.id);
    this.data.id = this.id;
  }

  getNull():void{
    this.id="";
  }

  ngOnInit(): void {
  
  }

}
