import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-requirementsofyou',
  templateUrl: './requirementsofyou.component.html',
  styleUrls: ['./requirementsofyou.component.css']
})
export class RequirementsofyouComponent {
  formData = {
    name: '',
    email: '',
    phno:'',
    text:''
  };
  message:any

  constructor(private http:HttpClient){}

submitForm(){
var x=this.formData
console.log(x)
return this.http.post('http://localhost:3000/api/requirementdata',{x}).subscribe((res:any)=>{
  if(res){
    this.message="your data is submitted"
    window.location.reload()
  }
})
  }
}
