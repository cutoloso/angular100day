import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = 'rgb(246, 246, 246)';
  @Input() progressColor: string = 'rgb(40, 84, 233)';
  @Input() progress: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange(changes: SimpleChange) {
    if ('progress' in changes) {
      if (+changes.currentValue['progress'] < 0) {
        this.progress = 0;
      }
      if (+changes.currentValue['progress'] > 100) {
        this.progress = 100;
      }
    }
  }
}
