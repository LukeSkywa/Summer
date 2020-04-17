import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  selectMenuItem:EventEmitter<number>=new EventEmitter<number>();

  menulist:MenuItem[] =[
    {id:1,description:"Home",selected:true },
    {id:2,description:"Lista",selected:false },
    {id:3,description:"Cards",selected:false },
    {id:4,description:"Feedback",selected:false },
    {id:5,description:"Profilo",selected:false },
    {id:2,description:"Esci",selected:false },
  ]
  selectComponet(id:number){
    this.selectMenuItem.emit(id);
  }

}