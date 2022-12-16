import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit{

  constructor(private contactService:ContactService,private router:Router){}

  contacts:Contact[]=[];

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getContacts()
    .subscribe(contactList=>{
       this.contacts=contactList;
    })
  }
   //remove a contact
   deleteContact(id:number){
    this.contactService.deleteContactById(id).subscribe(
      data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.getAllContacts();
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
    )
   }
   //edit a contact
  editContact(id:number){
    console.log("Edited :: "+id);
    this.router.navigate(['/edit',id]); 
  }

}
