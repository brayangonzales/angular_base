import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styles: []
})
export class MenuMainComponent implements OnInit {
  listaMenu: string[] = [];
  @Input()
  set ready(isReady: boolean) {
    if (isReady) console.log("hola");
  }
  constructor() { }

  

  ngOnInit() {
    this.jquery_init();
    this.listarMenu();
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
    $(document).ready(function(){
      $('.accordion').accordion({
        selector: {
          trigger: '.title '
        }
      });
    });
    
  }
}
