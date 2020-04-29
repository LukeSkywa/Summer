import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  temaChiaro(){
    document.querySelector('body').style.setProperty('--rgb1', 'rgba(0,212,255,1)');
    document.querySelector('body').style.setProperty('--rgb2', 'rgba(0,212,255,1)');
    document.querySelector('body').style.setProperty('--rgb3', ' rgba(255,255,255,1)');

  }
  temaScuro(){
    document.querySelector('body').style.setProperty('--rgb1', 'rgba(2,0,38,1)');
    document.querySelector('body').style.setProperty('--rgb2', 'rgba(41,80,99,1)');
    document.querySelector('body').style.setProperty('--rgb3', 'rgba(48,127,176,1)');
  }
}
