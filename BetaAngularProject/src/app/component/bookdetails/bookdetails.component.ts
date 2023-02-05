import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { HttpapicallService } from 'src/app/service/httpapicall.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit
{
  public bookData : any ;
  public similarBooks: any;
  public cart = faCartShopping;
  public bookId: any;
  public userId: any;
  
  constructor(private activeRoute: ActivatedRoute, 
    private bookService:HttpapicallService,
    private notifyService : NotificationService,){}
 
  ngOnInit(): void
  {
    let bookId = this.activeRoute.snapshot.paramMap.get('bookId');
    this.bookId = bookId;
    this.userId = localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYWZpbmEyMSIsInVzZXJpZCI6IjE5NTkiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiIyM2VlNWIwZC01NzAwLTQ5YjUtOGEzMi0wMTMzZTIzMGUzNTAiLCJleHAiOjE2NzUzMzY5ODcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.UKKEJ8FzHaRFxV8G21bwLQNfaKg3kRC0uuk0OL9t6-8');
    console.log(bookId);
    bookId && this.bookService.getRelatedBook(bookId).subscribe(
      (result: any)=>
      {
      this.bookData = result;
      console.log(this.bookData);
      })
    this.bookService.getSimilarBooks(bookId).subscribe(
      (data: any) =>
      {
      this.similarBooks = data;
      console.log('response', this.similarBooks);
      });
  }
  public addtocart()
  {
    this.bookService.getAddToCart(this.bookId).subscribe();
    this.notifyService.showSuccess("One item added to cart", "")
  }
  delwishlist()
  {
    this.bookService.removeFromWishList(this.bookId).subscribe();
    this.notifyService.showWarning("Item removed from wishlist", "");
  }
}

