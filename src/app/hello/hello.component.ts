import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  user = {
    name: 'Công Thành',
    job_name: 'Developer',
    company_name: 'Halozend',
  }
  constructor() { }

  ngOnInit(): void {
  }

  showContact() {
    alert("Hello, I'm Thanh");
  }
}
