import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/myhttp.service';
import { ListItem } from 'src/app/models/ListItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  item:ListItem;

  constructor(private myHttpService: MyHttpService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
    this.myHttpService.getSingolo(Number(params.get("id"))).subscribe(response => {
      this.item=response;
    }, err => {
    });
  })
  }

}
