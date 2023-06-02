import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit{
  registerForm!:FormGroup;
  constructor(private form:FormBuilder){}



  ngOnInit(): void {
    this.form.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });

  }



}
