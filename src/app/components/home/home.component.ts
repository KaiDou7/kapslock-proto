import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const pop = document.querySelector<HTMLElement>(".pop");
    const download = document.querySelector<HTMLElement>(".download-js");
    const downloadHero = document.querySelector<HTMLElement>(".download-hero-js");
    const close = document.querySelector<HTMLElement>(".pop-close");
    const background = document.querySelector<HTMLElement>(".popup-background-black");

    download.addEventListener("click", openPop);
    downloadHero.addEventListener("click", openPop);

    function openPop() {
      console.log("Hi")
      pop.style.display = "block";
      background.style.display = "block"; 
    }

    close.addEventListener("click", closePop);
    background.addEventListener("click", closePop);
    
    function closePop() {      
      background.style.display = "none";
      pop.style.display = "none";
    }
  }

}
