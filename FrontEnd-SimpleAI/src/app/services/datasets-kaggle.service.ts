import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetsKaggleService {

  private BASE_URL = 'http://localhost:5000';
  constructor( private http: HttpClient ) {

   }
   
   getDatasetsKaggle():Observable<any>{
     return this.http.get(`${this.BASE_URL}/dataset_kaggle`);
   }
}
