import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuItem: EventEmitter<number> = new EventEmitter();

  menuList: MenuItem[] = [
    {id: 1, description: 'Home', selected: true},
    {id: 2, description: 'Lista', selected: false},
    {id: 3, description: 'Cards', selected: false},
  ];
   
  constructor() { }

  ngOnInit(): void {
  }
  
  slectedComponent(id: number){
    this.selectMenuItem.emit(id);
  }

}
