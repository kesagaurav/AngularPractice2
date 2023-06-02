import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpClientModule} from '@angular/common/http';
import { Book } from './book';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  url=""
  private txturl="../assets/samplefile.txt";
  constructor(private http:HttpClient) {
    this.url="http://localhost:9090/book";
   }

   public  CreateBook(b:Book): Observable<Book>{
    return this.http.post<Book>(this.url,b).pipe(catchError(this.handleError));



   }

   public deletebook(id:number) : Observable<any>{
    return this.http.delete(this.url + `/${id}`).pipe(catchError(this.handleError));
   }

   public getAllBooks():Observable<any> {
    return this.http.get<Book[]>(this.url + "s",{observe:'response'}).pipe(tap(users=>console.log("users" + JSON.stringify(users)),catchError(this.handleError)));

   }

   public getBooks():Observable<string>{
    return this.http.get(this.txturl,{responseType:'text'}).pipe(tap(data=>console.log(data.length)),catchError(this.handleError));
   }

   public updateBook(b:Book):Observable<any>{
    return this.http.put<Book>(this.url,b).pipe(tap((_ : any)=>console.log("updated hero is " + `${b.id}`)),catchError(this.handleError));
   }


   private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}


