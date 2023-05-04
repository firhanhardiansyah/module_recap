import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items = [
    {test: '1'},
    {test: '2'},
    {test: '2'},
    {test: '2'},
    {test: '2'},
    {test: '2'},
    {test: '2'},
    {test: '2'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
