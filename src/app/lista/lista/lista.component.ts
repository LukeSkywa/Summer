import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  lista=[
    {id:1,nome:"prova"}
  ];
  constructor(private myHttpService: MyHttpService) { }

  ngOnInit(): void {
  }

}
