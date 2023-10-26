import { Component, OnInit } from '@angular/core';

// @ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    customInitFunctions();
    this.getTheme()
  }

  getTheme() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css'
    this.linkTheme?.setAttribute('href', theme)
  }
}
