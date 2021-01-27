import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private httpClient:HttpClient) { }

  createEmailContact (createBody){
    return this.httpClient.post('https://kapslock.in/krm/api/send-mail', createBody)
  }
}
