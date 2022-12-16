import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatecontactComponent,
    ContactlistComponent,
    EditcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
