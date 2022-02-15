import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetsKaggleService {

  constructor( private http: HttpClient ) { }


  private BASE_URL = 'http://localhost:5000';
 
   getDatasetsKaggle():Observable<any>{
     return this.http.get(`${this.BASE_URL}/dataset/dataset_kaggle`)
   }
}
