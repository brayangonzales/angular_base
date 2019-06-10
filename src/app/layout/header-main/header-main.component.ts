import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_init(); 
  }

  jquery_init():void{
    console.log("hola soy un dropdown");
    $(".dropdown-trigger").dropdown();
  }

}
