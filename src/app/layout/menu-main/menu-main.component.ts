import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styles: []
})
export class MenuMainComponent implements OnInit {
  listaMenu : string[]=[];
  constructor() { }

  ngOnInit() {
    this.listarMenu();
    //this.jquery_init();
  }
  listarMenu(){
    console.log("jola");
    this.listaMenu.push("menu1");
    this.listaMenu.push("menu2");
    this.listaMenu.push("menu3");
    this.listaMenu.push("menu4");
  }
  public jquery_init(event):void{
    console.log("ya cargue mi modulo")
    console.log(event);
    $('[name="menu-item-head"]').click(function(){
      console.log("golas")
        $('[name="sub-menu-item"]').toggleClass("is-hidden");
    });
  }
}
