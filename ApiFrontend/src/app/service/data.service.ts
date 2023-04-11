import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../public/register/register.module';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 


  constructor(private httpClient:HttpClient) { }


  registerUser(data: Register){
    return this.httpClient.post('http://127.0.0.1:8000/api/register',data);
  }
  
  
}

  
  
