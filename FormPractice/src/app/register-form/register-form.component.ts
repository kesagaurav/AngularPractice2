import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

  registerForm!:FormGroup
  userName!:string;
  password!:string;
  @Input() parentData="";
  ngOnInit(): void {
    this.registerForm=this.form.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
   // alert('ngonit called');
    console.log("ngon it called");
      console.log(this.parentData);

  };

  constructor(private form:FormBuilder){
    //alert('constructor called');
    console.log("constructor caleed");

  }


  onSubmit(){
    this.userName ==="gaurav" && this.password==="gaurav" ? alert('valid'):alert('invalid');
  }

}
