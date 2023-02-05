import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpapicallService } from 'src/app/service/httpapicall.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { bookData } from 'src/app/bookdata';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements  OnInit
{
  public orderList: any;

  constructor(private bookService: HttpapicallService, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.bookService.getbooks().subscribe((orderDetails: any)=>{
    this.orderList = orderDetails;
    console.warn('hello',this.orderList);
  });
    
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
//    public getApiOrders(){
//   let bookId = this.activeRoute.snapshot.paramMap.get('bookId');
//   this.bookService.getRelatedBook(bookId).subscribe();
//  }
}


// function createNewBook(arg0: number) {}
/** Builds and returns a new User. */
// function createNewUser(id: number): bookData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };

// } 
 
 




