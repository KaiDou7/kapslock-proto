import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  
  
  
  ngOnInit(): void {
    const burger = document.querySelector<HTMLElement>(".menu");
    const close = document.querySelector<HTMLElement>(".close");
    const nav = document.querySelector<HTMLElement>(".nav-list-mobile");
    const background = document.querySelector<HTMLElement>(".mobile-menu-background-black");

    window.onresize = function () {
      if(window.innerWidth>980){
        close.style.display = "none";      
        nav.style.display = "none";      
        background.style.display = "none";
      }
    };

    burger.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
    background.addEventListener("click", closeMenu);
    
    function openMenu() {
      close.style.display = "block";      
      nav.style.display = "block";      
      background.style.display = "block";      
    }
    function closeMenu() {
      close.style.display = "none";      
      nav.style.display = "none";      
      background.style.display = "none";
    }
    
  }

}
