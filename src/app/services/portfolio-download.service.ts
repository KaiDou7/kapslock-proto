import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDownloadService {

  constructor(private httpClient:HttpClient) { }

  createDownloadContact (createBody){
    return this.httpClient.post('https://kapslock.in/krm/api/get-portfolio', createBody);
  }
}
