import { Component, OnInit ,DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy {
data = 'Angular';

ngOnInit() {
    console.log('Init');
}
ngDoCheck(): void {
    console.log('Change detected');
}
ngAfterContentInit(): void {
    console.log('After content init');
}
ngAfterContentChecked(): void {
    console.log('After content checked');
}
ngAfterViewInit(): void {
    console.log('After view init');
}
ngAfterViewChecked(): void {
    console.log('After view checked');
}
ngOnDestroy(): void {
    console.log('Destroy');
}
  title = 'FormPractice';
  show!: boolean;
  name!:string;
  name1!:string;
  employees= [
    { id: 1, name: "gaurav"},
    { id: 2, name: "deepa"},
    { id: 3, name: "omkar"},
    { id: 4, name: "sai"}

  ];

  employee1!:string;
  wish="hello good afternoon how are u";
  message!: string;
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }


}
