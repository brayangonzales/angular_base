import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from './menu.service';
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
  constructor(private servivio: MenuService) { }

  ngOnInit() {
    this.jquery_init();
    this.listarMenu();
  }
  listarMenu() {
    this.listaMenu.push("Cierre y apertura de caja  ");
    this.listaMenu.push("Herramientas de venta");
    this.listaMenu.push("Busqueda de recibos");
    this.listaMenu.push("Pagos");
    this.listaMenu.push("Remesas");
    this.listaMenu.push("Reportes Especificos");
    this.listaMenu.push("Reportes Periodicos");
    this.listarUsuario();
    
  }
  listarUsuario(){
    this.servivio.getListar().subscribe(data => {
      console.log();
    });
  }

  evento() {
    console.log("hola soy un evento");
  }
  public jquery_init(): void {
    console.log("hola");
    //$('.ui.sidebar').sidebar('toggle');

    $(document).ready(function () {
      $(".menu-text").click(f => {
        $(".pos-icon-left-menu").removeClass("folder");
        $(".pos-icon-left-menu").addClass("folder open");
      });
      $('.accordion').accordion({
        selector: {
          trigger: '.menu-text '
        }
      });
    });

  }
}
