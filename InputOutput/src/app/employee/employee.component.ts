import { CompanyComponent } from '../company/company.component';
import { Company } from './../company';
import { Employee } from './../employee';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,AfterViewInit {

  employee!:Employee;
  @ViewChild(CompanyComponent)company1!: CompanyComponent;

  @Output() onRegister=new EventEmitter<Employee>();

  register(employee:Employee){
    this.onRegister.emit(employee);
  }


  @Output() gaurav=new EventEmitter<number>();

  selectUser(id:number){
    this.gaurav.emit(this.employee.id);
  }


  Employee: any[]=[
    new Employee (1,"gaurav",92000),
    new Employee(2,"deepa",930000),
    new Employee(3,"omkar",810010)
  ]
  company!:string;


  constructor(){

  }


  ngAfterViewInit(): void {
    console.log(this.company1.Company);


   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }











}

