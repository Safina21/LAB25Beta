export interface bookData{
    title: string;
    bookId: number;
    category: string;
    price: number;
    author: string;
    coverFileName: any;
}
export interface orderList{
  orderId: number;
  orderDate: Date;
  orderTotal: number;

}
[
  {
    "orderId": "string",
    "orderDetails": [
      {
        "book": {
          "bookId": 0,
          "title": "string",
          "author": "string",
          "category": "string",
          "price": 0,
          "coverFileName": "string"
        },
        "quantity": 0
      }
    ],
    "cartTotal": 0,
    "orderDate": "2023-02-02T16:12:02.564Z"
  }
]
