import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listofboxdata:any=["HTML,CSS,Javascript","Node JS,Express JS","Mongodb ","Angular"]
  colours:any=["red","green"]
  dropdownOpen = false;
  myex1function(){
      this.dropdownOpen = !this.dropdownOpen;

  }
}
