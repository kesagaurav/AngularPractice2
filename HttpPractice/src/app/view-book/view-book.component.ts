import { BookserviceService } from './../bookservice.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  public book!:Book;
  public books!: Book[];
  public  message!: string;
  errorMessage!: string;
  msg!:string;
  constructor(private bs:BookserviceService){

  }



  public deleteBook(id:number){
    console.log(`delete the employee ${id}`);
    this.bs.deletebook(id).subscribe((res)=>{
      this.message=`the ${id} is deleted successfully`;
      alert(this.message);
      this.ngOnInit();

    })
  }

  public updateBook(b:Book){
    this.bs.updateBook(b).subscribe(res=>{
      this.book=res;
    })
  }



  getBooks() {
    this.bs.getBooks().subscribe({
      next:data=> this.msg = data ,
      error:error => this.errorMessage = <any>error});
  }
  ngOnInit(): void {
    this.bs.getAllBooks().subscribe({
      //this.books=a;
      next: response=>this.books=response.body??this.books,
      error:error=>this.errorMessage=error
    })
    this.getBooks();

  }
}
