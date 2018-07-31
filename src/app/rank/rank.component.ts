import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  score: any = 0;
  game_over: Boolean;
  public name: any;
  ranking: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.score = param["score"];

      this.game_over = this.score >= 0;
      this.showRank()
    });
  }

  onKey(event: KeyboardEvent) { 
    this.name = (<HTMLInputElement>event.target).value;
  }

  submitRank() {
    var rankUnordered:any;
    rankUnordered = this.getRank();

    rankUnordered = JSON.parse(rankUnordered);
    debugger;
    rankUnordered = rankUnordered ? rankUnordered : [];

    rankUnordered.push({name: this.name ? this.name : "Padawan", score: this.score});

    var rank = rankUnordered.sort(function (a, b) {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score < b.score) {
        return -1;
      }
      return 0;
    });

    localStorage.setItem('rank', JSON.stringify(rank));
    this.game_over = false;
    this.showRank();
  }

  showRank() {
    this.ranking = JSON.parse(this.getRank());
  }

  getRank() {
    return localStorage.getItem('rank');
  }

}
