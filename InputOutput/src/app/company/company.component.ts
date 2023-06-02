import { Employee } from '../employee';
import { Company } from './../company';
import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

 Company:any[]=[
    new Company("infosys"),

 ];

  constructor(){

  }

  company!:Company[]

  @Input() set cName(name:string){
    this.company=[];
    for(var i=0;i<this.Company.length;i++){
      if(this.Company[i]===name)
      this.company.push(this.Company[i]);
    }
  }


  employee!:Employee;
  message!:string;

  empReg(id:number){
    this.message=`employee has been regsitered successfully ${id}`;
    alert(this.message);
    console.log(this.message);

  }















}
