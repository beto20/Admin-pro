import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings-services.service';

// @ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor(private readonly settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }


}
