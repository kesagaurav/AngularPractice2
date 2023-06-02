import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutput';
  employees=[
    {id:1,name:"gaurav",salary:92000},
    {id:2,name:"sai",salary:93000},
    {id:3,name:"john",salary:94000},
    {id:4,name:"mario",salary:95000}
  ];

  data='Gaurav';
company: any;
}
