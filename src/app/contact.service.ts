import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
      return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:'text'});
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  getContactById(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContactById(id:number):Observable<string>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:'text'});
  }
}
