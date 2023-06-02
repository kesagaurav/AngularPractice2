import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-input-practice',
  templateUrl: './input-practice.component.html',
  styleUrls: ['./input-practice.component.css']
})
export class InputPracticeComponent {

  @Input() data!:number;

  course="angular";
  ChangeName(){
    this.course="Typescript";
  }
 @Input()  employees!:
  [ { id: 1, name: "gaurav"},
  { id: 2, name: "deepa"},
  { id: 3, name: "omkar"},
  { id: 4, name: "sai"}]


  employee!:any[];
  @Input() set eName(name:string){
    this.employee=[];
    for(var i=0;i<this.employees.length;i++){
      if(this.employees[i].name===name){
        this.employee.push(this.employees[i]);
      }
    }
  }




//employee!:any[];
//@Input() set empList(name:string){
  //this.employee=[];
  //for(var i=0;i<this.employees.length;i++){
    //if(this.employees[i].name===name)
      //  this.employee.push(this.employees[i]);
  //}
//}

}
