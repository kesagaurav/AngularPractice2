import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public book:Book;
  public books!: Book[];
  public  message!: string;
  errorMessage!: string;
  msg!:string;
  constructor(private bs:BookserviceService,private router:Router){
    this.book=new Book();
  }

  addBook():void{
    this.bs.CreateBook(this.book).subscribe(a=>{
      this.book=new Book();
      this.router.navigate(['/viewBooks']);
    })
  }




  getBooks() {
    this.bs.getBooks().subscribe({
      next:data=> this.msg = data ,
      error:error => this.errorMessage = <any>error});
  }

  ngOnInit(){
    this.bs.getAllBooks().subscribe({
      //this.books=a;
      next: response=>this.books=response.body??this.books,
      error:error=>this.errorMessage=error
    })
    this.getBooks();

  }



}
