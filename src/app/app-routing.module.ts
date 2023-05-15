import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contactme",component:ContactmeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
