import { Author } from './../author';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: any = null;
  @Output() deleteAuthor = new EventEmitter<Author>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete() {
    console.log('handleDelete');
    this.deleteAuthor.emit(this.author);
  }
}
