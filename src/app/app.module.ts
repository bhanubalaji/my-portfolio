import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MaterialExampleModule} from '../material.module';
// import {ButtonToggleAppearanceExample} from './button-toggle-appearance-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
// import {HttpClientModule} from '  @angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ContactmeComponent } from './contactme/contactme.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule


    // HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
