import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  
  book: Book

  private subscription: Subscription

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.params.isbn;
    this.subscription = this.bookData.getBookByIsbn(isbn).subscribe(book => this.book = book);
    /*
    this.route.params.subscribe((params: {isbn: string}) => {
      this.subscription = this.bookData.getBookByIsbn(params.isbn).subscribe(book => this.book = book);
    });
    */
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(value: any) {
    console.log(value);
  }

}
