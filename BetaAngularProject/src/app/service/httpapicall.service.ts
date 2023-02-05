import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpapicallService {
  bookId: any;
  userId: any;
  
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
    let bookId = this.activeRoute.snapshot.paramMap.get('bookId');
    this.bookId = bookId;
    this.userId = localStorage.getItem('token');
  }
  
  getbooks()
  {
    return this.http.get("https://bookcart.azurewebsites.net/api/book/");
  }

  getRelatedBook(id: any)
  {
    return this.http.get("https://bookcart.azurewebsites.net/api/book/" + id);
  }

getSimilarBooks(id: any)
{
  return this.http.get("https://bookcart.azurewebsites.net/api/book/GetSimilarBooks/" + id);
  
}
getAddToCart(bookId: any)
{
  return this.http.post('https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/'+ this.userId + '/' + bookId, {});
}
removeFromWishList(bookId: any)
{
    return this.http.post('https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/'+ this.userId + '/' + bookId, {});
    
}
}

