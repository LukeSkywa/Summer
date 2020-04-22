import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/myhttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class cardsComponent implements OnInit {
  cards=[];
  constructor(private myHttpService: MyHttpService,private router: Router) { }

//riempi la cards da db
  riempi(){
    this.myHttpService.getCanzoni().subscribe(reponse => {
      this.cards = reponse;
      console.log(this.cards);
    }, err => {
      console.log('error');
    });
  }
  //riempi cards filtrata
  retrieveFilter(value){
    this.myHttpService.getFiltra(value).subscribe(reponse => {
      this.cards = reponse.body;
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
  ngOnInit(): void {
    this.riempi();
  }

}
