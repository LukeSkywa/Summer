import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListItem } from '../models/ListItem';



@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
   //funzione che filtra
   getFiltra(value: string): Observable<HttpResponse<ListItem[]>> {
    //stringa di comodo
    
    let params: HttpParams;

    if(value==="pref") params = new HttpParams().set('preferito', "true");

    else params = new HttpParams().set('nascosto', "true");

    return this.httpClient.get<ListItem[]>('http://localhost:3000/canzoni', { observe: 'response',  params: params });
  }

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/giochi');
    
  }

}