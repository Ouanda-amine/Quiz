import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private  myurl = "https://opentdb.com/api.php"

  constructor(private http : HttpClient) {

  }
    getquest(categorie : number , difficulte : string) : Observable<any> {

      return this.http.get(`${this.myurl}?amount=8&category=${categorie}&difficulty=${difficulte}&type=multiple`);

    }

    getcat() : Observable<any> {

    return this.http.get('https://opentdb.com/api_category.php');

    }
}
