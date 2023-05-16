import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RequirementsofyouComponent } from './requirementsofyou/requirementsofyou.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contactme",component:ContactmeComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"Requirementsofyou",component:RequirementsofyouComponent},
  {path:"about",component:AboutComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
