import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-seccion-main',
  templateUrl:'./seccion-main.component.html',
  styles: []
})
export class SeccionMainComponent implements OnInit {
  tabs:any = [];
  constructor() { 
     console.log("hola como ");
  }
  

  ngOnInit() {
    this.jquery_init();
   // this.listar_tabs();
  }
  
  listar_tabs(){
    this.tabs.push({id:1,titulo:"titulo 1"});
    this.tabs.push({id:2,titulo:"titulo 2"});
    this.tabs.push({id:3,titulo:"titulo 3"});
    this.tabs.push({id:4,titulo:"titulo 4"});
    this.tabs.push({id:5,titulo:"titulo 5"});
    this.tabs.push({id:6,titulo:"titulo 6"});
    this.tabs.push({id:7,titulo:"titulo 7"});
    this.tabs.push({id:8,titulo:"titulo 8"});
    this.tabs.push({id:9,titulo:"titulo 9"});
    this.tabs.push({id:10,titulo:"titulo 10"});
    this.tabs.push({id:11,titulo:"titulo 11"});
    this.tabs.push({id:12,titulo:"titulo 12 "});


  }

  public add_tab(tab:any):void{
    this.tabs.push(tab);
  }


  jquery_init(){
    /*$(document).ready(function(){
      $('.tabs-seccion').tabs();
    });*/
  }

}
