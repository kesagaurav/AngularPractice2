import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookserviceService } from './bookservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor1 } from './book/book.interceptor.ts.pipe';
import { ViewBookComponent } from './view-book/view-book.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ViewBookComponent,
    LoginComponent,
    Login1Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookserviceService,{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor1,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
