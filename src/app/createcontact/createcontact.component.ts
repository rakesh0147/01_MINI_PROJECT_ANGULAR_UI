import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  contact:Contact=new Contact();

  constructor(private contactService:ContactService,private router:Router){}

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }
  saveContact(){
    this.contactService.createContact(this.contact)
    .subscribe(response=>{
       console.log(response);
       this.redirectToContactList();
    },error=>{
      console.log("FAILED........");
      console.log(error);
    })
  }

  redirectToContactList(){
    this.router.navigate(['/contacts']);
  }

}