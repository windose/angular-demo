import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: {isbn: string}) => {
      this.book$ = this.bookData.getBookByIsbn(params.isbn);
    });
  }

}
