import { Component, Input, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  min: String;
  sec: String;
  countDown: any;
  @Input() game_over: Boolean;
  @Input() score: any;
  constructor(private router: Router) {
    this.countDown = new Date(new Date().getTime() + 120000).getTime();
    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.game_over.currentValue) {
      this.gameOver();
    }
  } 

  startTimer() {
    setInterval(() => {
      var now = new Date().getTime();

      var dist = this.countDown - now;

      if(dist <= 0) {
        this.gameOver();
      }

      var min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      var sec = Math.floor((dist % (1000 * 60)) / 1000);

      this.min = min.toString();
      this.sec = sec.toString();
    }, 1000);
  }

  gameOver(){
    this.router.navigate(['rank'], {queryParams: {score: this.score}});
  }
}
