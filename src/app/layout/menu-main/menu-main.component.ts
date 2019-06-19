import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styles: []
})
export class MenuMainComponent implements OnInit {
  listaMenu: string[] = [];
  constructor() { }

  ngOnInit() {
    this.listarMenu();
    this.jquery_init();
  }
  listarMenu() {
    console.log("jola");
    this.listaMenu.push("Cierre y apertura de boveda  ");
    this.listaMenu.push("Herramientas de venta");
    this.listaMenu.push("Reportes");
    this.listaMenu.push("menu4");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");
    this.listaMenu.push("menu5");

  }
  public jquery_init(): void {
    console.log("hola");
    //$('.ui.sidebar').sidebar('toggle');
    $('a.sidebar-toggle').click(function () {
      $('#sidebar').sidebar('toggle');
    });
  }
}
