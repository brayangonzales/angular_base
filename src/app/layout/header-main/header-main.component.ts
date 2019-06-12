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
    $(".dropdown").click(function () {
      $(".dropdown").toggleClass("is-active");
    });
  
    $(".dropdown").blur(function () {
      $(".dropdown").removeClass("is-active");
    });
  }

}
