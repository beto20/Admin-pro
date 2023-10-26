import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incremental',
  templateUrl: './incremental.component.html',
  styles: [
  ]
})
export class IncrementalComponent implements OnInit{

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('progress_value')
  progress: number = 10;
  @Input()
  btnClass: string = 'btn-primary';

  @Output()
  outputValue: EventEmitter<number> = new EventEmitter();

  get getPercentage() {
    return this.progress + '%';
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && value < 0) {
      this.outputValue.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + value; 
    this.outputValue.emit(this.progress);
    return this.progress;
  }

  onChange(value: number) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value < 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.outputValue.emit(this.progress);
  }

}
