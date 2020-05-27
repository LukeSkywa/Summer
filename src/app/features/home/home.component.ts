import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.temaChiaro();
    
  }
  temaChiaro(){
    document.querySelector('body').style.setProperty('--rgb1', 'rgba(0,212,255,1)');
    document.querySelector('body').style.setProperty('--rgb2', 'rgba(0,212,255,1)');
    document.querySelector('body').style.setProperty('--rgb3', ' rgba(255,255,255,1)');

  }
  
  
}