import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      subtitle: [''],
      author: [''],
      numPages: [0],
      publisher: this.fb.group({
        name: [''],
        url: ['']
      }),
      isbn: ['', [Validators.required, Validators.minLength(11)]],
      cover: ['']
    })
  }

  onSubmit() {
    const book: Book = this.form.value;
    console.log(this.form.valid)
  }

}
