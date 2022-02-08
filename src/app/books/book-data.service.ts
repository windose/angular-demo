import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Book } from './book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  private books = [
    {
      "title": "Design Patterns",
      "subtitle": "Elements of Reusable Object-Oriented Software"
    },
    {
      "title": "REST und HTTP",
      "subtitle": "Entwicklung und Integration nach dem Architekturstil des Web"
    },
    {
      "title": "Eloquent JavaScript",
      "subtitle": "A Modern Introduction to Programming"
    }
  ]

  constructor(private http: HttpClient) { }

  /*
  getBooks() {
    return this.books;
  }
  */

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  updateBookByIsbn(isbn: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:4730/books/${isbn}`, book);
  }

}
