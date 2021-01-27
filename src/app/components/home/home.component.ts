import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ PortfolioDownloadService } from '../../services/portfolio-download.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private portfolioDownloadService: PortfolioDownloadService) { }

  ngOnInit(): void {
    const pop = document.querySelector<HTMLElement>(".pop");
    const download = document.querySelector<HTMLElement>(".download-js");
    const downloadHero = document.querySelector<HTMLElement>(".download-hero-js");
    const downloadPop = document.querySelector<HTMLElement>(".form-cta");
    const close = document.querySelector<HTMLElement>(".pop-close");
    const background = document.querySelector<HTMLElement>(".popup-background-black");
    const downloadLink = document.querySelector<HTMLElement>(".download-link");

    download.addEventListener("click", openPop);
    downloadHero.addEventListener("click", openPop);

    function openPop() {
      console.log("Hi")
      pop.style.display = "block";
      background.style.display = "block"; 
    }

    close.addEventListener("click", closePop);
    background.addEventListener("click", closePop);
    downloadPop.addEventListener("click", closePop);
    downloadPop.addEventListener("click", downloadPortfolio);

    function closePop() {      
      background.style.display = "none";
      pop.style.display = "none";
    }

    function downloadPortfolio(){
      downloadLink.click();
    }
  }

  download(popUpForm: NgForm){
    console.log(popUpForm);
    const newFormData = { email:popUpForm.value.email, name:popUpForm.value.name};

    this.portfolioDownloadService.createDownloadContact(newFormData).subscribe( data => {
      console.log(data);
    });
    popUpForm.resetForm();
  }

}
