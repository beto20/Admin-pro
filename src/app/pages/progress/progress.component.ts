import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progressFirst: number = 50;
  progressSecond: number = 80;

  get getProgressFirst(): string {
    return this.progressFirst + '%'
  }

  get getProgressSecond(): string {
    return this.progressSecond + '%'
  }

}
