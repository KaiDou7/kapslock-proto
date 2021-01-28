import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactPhoneService {

  constructor(private httpClient:HttpClient) { }

  createPhoneContact (createBody){
    return this.httpClient.post('https://kapslock.in/krm/api/get-callback', createBody)
  }
}
