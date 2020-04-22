import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListItem } from '../models/ListItem';



@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  invia(url: string, body: { name: any; replyto: any; message: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {

    return this.httpClient.post(url,body,arg2); 
   }
  
   //funzione che filtra
   getFiltra(value: string): Observable<HttpResponse<ListItem[]>> {
    //stringa di comodo
    
    let params: HttpParams;

    if(value==="pref") params = new HttpParams().set('preferito', "true");

    else params = new HttpParams().set('nascosto', "true");

    return this.httpClient.get<ListItem[]>('http://localhost:3000/canzoni', { observe: 'response',  params: params });
  }
  //funzione che aggiunge ai preferiti
  addPreferiti(id){
    return this.httpClient.patch<ListItem[]>('http://localhost:3000/canzoni/'+id,{preferito:true});
  }
  removePreferiti(id){
    return this.httpClient.patch<ListItem[]>('http://localhost:3000/canzoni/'+id,{preferito:false});
  }
  //funzione che aggiunge a nascosto
  addNascosto(id){
    return this.httpClient.patch<ListItem[]>('http://localhost:3000/canzoni/'+id,{nascosto:true});
  }
  removeNscosto(id){
    return this.httpClient.patch<ListItem[]>('http://localhost:3000/canzoni/'+id,{nascosto:false});
  }

  

  constructor(private httpClient: HttpClient) { }

  getCanzoni(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/canzoni');
  }

  getSingolo(id): Observable<any>{
    return this.httpClient.get('http://localhost:3000/canzoni/'+id);
  }

}