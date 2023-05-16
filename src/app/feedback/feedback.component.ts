import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  emojis: string[] = [ '😕', '😐', '🙂', '😄'];
  stars: number[] = [1, 2, 3,4];
  selectedRating:any
  name:any=["ok","good","very good","excellent"]
  inputvalue:any
  message:any
constructor(private http:HttpClient){}
  rate(rating: number): void {
    this.selectedRating = rating;
    console.log( this.selectedRating)
  }

  submit(){
    var rating=this.selectedRating
    console.log(rating)
    console.log(this.inputvalue)
    var x={
      name:this.inputvalue,
      rating:rating
    }
    return this.http.post('http://localhost:3000/api/feedbackdata',{x}).subscribe((res:any)=>{
      console.log(res)
      if(res){
        this.message="YOUR FEEDBACK IS SUBMITTED"
        window.location.reload()
      }
    })
  }
}
