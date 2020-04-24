import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    sessionStorage.setItem("immagine",image+"");
    console.log(image.name);
   
    
  
    return this.http.post('http://localhost:3000/immagini',image );
   
  }
}
