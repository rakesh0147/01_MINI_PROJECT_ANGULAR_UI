import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

const routes: Routes = [
  {path:'',redirectTo:'contacts',pathMatch:'full'},
  {path:'create-contact',component:CreatecontactComponent},
  {path:'contacts',component:ContactlistComponent},
  {path:"edit/:id",component:EditcontactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
