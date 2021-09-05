import { Author } from './../author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initAuthorData();
  }

  initAuthorData() {
    this.authors = [
      {
        id: 1,
        name: 'Hero 1',
      },
      {
        id: 2,
        name: 'Hero 2',
      },
      {
        id: 3,
        name: 'Hero 3',
      },
    ]
  }

  handelDelete(author: any) {
    console.log(author);
    this.authors = this.authors.filter(e => e.id !== author.id);
  }
}
