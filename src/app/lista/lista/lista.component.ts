import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/myhttp.service';
import { Router } from '@angular/router';
import { ComunicazioneService } from 'src/app/services/comunicazione.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  lista=[];

  constructor(private myHttpService: MyHttpService,private router: Router,private comunicazioneService: ComunicazioneService) {
    this.comunicazioneService.messaggio$.subscribe(value=>{
      this.cercaInHttp(value);
    }); 
   }

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
  //aggiorna preferiti
  Preferiti(id,value){
    this.myHttpService.getSingolo(id).subscribe(response => {
      let temp=response;
      if(temp.preferito==true){
        this.myHttpService.removePreferiti(id).subscribe();
        this.filtra(value)
      }
      else {
        this.myHttpService.addPreferiti(id).subscribe();
        this.filtra(value);
      }
    }, err => {
     
    });
  }
  //metodo per cercare
  cercaInHttp(id){
    this.myHttpService.getSingolo(id).subscribe(response =>{
      this.lista=[];
      this.lista.push(response);
    })
  }

  //metodo che da filtra al cambio di select
  filtra(value:string){
    if(value==="all") this.riempi();
    else this.retrieveFilter(value);
  }
  //metodo che quando si clicca su preferiti aggiunge effettivamente
  addPreferiti(id:number,value){
    this.Preferiti(id,value); 
  }
  nascondi(id,value){

    this.myHttpService.getSingolo(id).subscribe(response => {
      let temp=response;
      if(temp.nascosto==true){
      this.myHttpService.removeNscosto(id).subscribe();
      this.filtra(value);
      }
      else{
       this.myHttpService.addNascosto(id).subscribe();
      this.filtra(value);
      }
    }, err => {
     
    });
  }
  apriD(id:number){
    this.router.navigate(['/dettaglio',id]);
  }
  //barra di ricerca
  cerca(nome){
    
  }
  ngOnInit(): void {
    this.riempi();
  }

}
