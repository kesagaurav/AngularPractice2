import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
   @Input() employee!:{id:number,name:string,salary:number};

   @Input() data!:string;

  }
