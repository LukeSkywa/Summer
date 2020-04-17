import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/myhttp.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  lista=[];
  constructor(private myHttpService: MyHttpService) { }
//riempi la lista da db
  riempi(){
    this.myHttpService.getCanzoni().subscribe(reponse => {
      this.lista = reponse;
      console.log(this.lista);
    }, err => {
      console.log('error');
    });
  }
  //riempi lista filtrata
  retrieveFilter(value){
    this.myHttpService.getFiltra(value).subscribe(reponse => {
      this.lista = reponse.body;
    }, err => {
      console.log('error');
    });
  }
  filtra(value:string){
    if(value==="all") this.riempi();
    else this.retrieveFilter(value);

  }
  ngOnInit(): void {
    this.riempi();
  }

}
