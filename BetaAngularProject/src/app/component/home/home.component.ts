import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { bookData } from 'src/app/bookdata';
import { HttpapicallService } from 'src/app/service/httpapicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  bookList: any;
  bookDetails: any;
  bookData : any | bookData;
  public books = [];
  public cart = faCartShopping;
  constructor(private apiGetService: HttpapicallService){}
  
  ngOnInit(): void {
 this. getallbooks();
  }
  
  
  public getallbooks(){
    this.apiGetService.getbooks().subscribe({
      next: (response: any) =>{
       
        this.bookList = response;
        console.log(this.bookList);

      },
      error: ( error: any) => {
        console.log("Something went Wrong");
      }
    })
  }
  public viewBooks(bookId: number)
  {
     this.apiGetService.getRelatedBook(bookId).subscribe({
       next: (response: any) =>{
         this.bookDetails = response;
       },
       error: ( error: any) => {
         console.log("Something went Wrong");
       }
     })
  }

}
