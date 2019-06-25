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
    $("#main-head").click(f=>{
      $("#main-icon-head").addClass("teal");
      $("#doc-icon-head").removeClass("teal");
    });
    $("#doc-head").click(f=>{
      $("#main-icon-head").removeClass("teal");
      $("#doc-icon-head").addClass("teal");
    });
    console.log("tab");
    $('.menu .item')
    .tab();
    $('.ui.dropdown').dropdown({keepOnScreen: true});
  }

}
