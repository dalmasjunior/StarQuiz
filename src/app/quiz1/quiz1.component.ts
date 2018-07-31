import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component {
  public character: any = CharModel;
  public data: any = null;
  score: any = 0;
  show_info: Boolean = false;
  answers: any = 0;
  game_over: Boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.getCharacters();

  }

  getCharacters(next = null) {
    this.http.get('https://swapi.co/api/people').subscribe((res) => {
      this.data = res;
    });
  }

  inputValue(i) {
    this.data.results[i].done = this.data.results[i].name == prompt("Who is this character?") ? true : false;
    this.data.results[i].miss = !this.data.results[i].done;

    this.score += this.data.results[i].done ? this.data.results[i].loaded ? 5 : 10 : 0;
    this.answers++;

    this.game_over = this.answers == this.data.results.length;
    
  }

  showInfo(i) {
    this.character = this.data.results[i];
    this.show_info = true;
  }

  closeInfo(close: boolean) {
    this.show_info = close;
  }
  
}

const CharModel: Array<any> = [{
  "name": "",
  "height": "",
  "mass": "",
  "hair_color": "",
  "skin_color": "",
  "eye_color": "",
  "birth_year": "",
  "gender": "",
  "homeworld": "",
  "films": [],
  "species": [],
  "vehicles": [],
  "starships": [],
  "created": "",
  "edited": "",
  "url": ""
}]