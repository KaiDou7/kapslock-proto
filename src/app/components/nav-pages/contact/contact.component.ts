import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ ContactEmailService } from '../../../services/contact-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactEmailService: ContactEmailService) { }

  ngOnInit(): void {
    const pop = document.querySelector<HTMLElement>(".pop");
    const send = document.querySelector<HTMLElement>(".send");
    const touch = document.querySelector<HTMLElement>(".touch");
    const close = document.querySelector<HTMLElement>(".pop-close");
    const background = document.querySelector<HTMLElement>(".popup-background-black");

    send.addEventListener("click", openPop);
    touch.addEventListener("click", openPop);

    function openPop() {
      //console.log("Hi")
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

  emailContactCreate(emailContact: NgForm){
    console.log("Yo");
    console.log(emailContact);
    console.log("Bro");
    const newFormData = { name:emailContact.value.name, email:emailContact.value.email, message: emailContact.value.message };
    console.log(newFormData);
    this.contactEmailService.createEmailContact(newFormData).subscribe( data => {
      console.log(data);
    });
    emailContact.resetForm();
  }
  phoneContact(phoneContact: NgForm){
    console.log(phoneContact);
  }
}
