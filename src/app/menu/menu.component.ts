import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    {id: 1, description: 'Home', url:"/Home"},
    {id: 2, description: 'Lista', url:"/List"},
    {id: 3, description: 'Cards', url:"/Cards"},
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}