import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    {id: 1, description: 'Home', url:"/home"},
    {id: 2, description: 'Lista', url:"/lista"},
    {id: 3, description: 'Cards', url:"/cards"},
    {id: 4, description: 'login', url:"/login"},
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}