import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';
import { Router, NavigationEnd } from '@angular/router';
import { ComunicazioneService } from '../../services/comunicazione.service';
import { LoginService } from 'src/app/services/login/login.service';


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
    {id: 5, description: 'profilo', url:"/profilo"},
    {id: 6, description: 'feedback', url:"/feedback"},
  ];
  user:string;
  ricerca=false;
   
  constructor(router:Router,private comunicazioneService: ComunicazioneService,private loginService : LoginService) {​

    router.events.subscribe(event => {​
  
      if(event instanceof NavigationEnd) {​
        if(event.urlAfterRedirects==="/cards"||event.urlAfterRedirects==="/lista"){
          this.ricerca=true;
        }
        else this.ricerca=false;
      }​
  
  });​
}

  ngOnInit(): void {
    

  }
  cerca(mess){
    this.comunicazioneService.pubblicaNuovoMessaggio(mess);
  }
  loggato(){
    this.user=sessionStorage.getItem("user");
    if(this.user!=null) return true;
    else return false;

  }
  logout(){
    this.loginService.eseguiLogout();
  }

}