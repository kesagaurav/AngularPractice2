import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBookComponent } from './view-book/view-book.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'addBook',component:BookComponent},
  {path:'viewBooks',component:ViewBookComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
