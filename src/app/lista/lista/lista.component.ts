import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/myhttp.service';
import { ListItem } from 'src/app/models/ListItem';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  lista=[];
  constructor(private myHttpService: MyHttpService) { }

  riempi(){
    this.myHttpService.getCanzoni().subscribe(reponse => {
      this.lista = reponse;
      console.log(this.lista);
    }, err => {
      console.log('error');
    });
  }
  ngOnInit(): void {
    this.riempi();
  }

}
