import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-main',
  template: `
    <h1>hola soy un h1</h1>
  `,
  styles: []
})
export class SeccionMainComponent implements OnInit {

  constructor() { 

     console.log("hola como ");
  }

  ngOnInit() {
  }

}
