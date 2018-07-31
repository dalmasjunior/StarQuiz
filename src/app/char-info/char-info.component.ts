import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.css']
})
export class CharInfoComponent {
  @Input() character: any;
  @Output() showInfo = new EventEmitter<boolean>();
  constructor(private http: HttpClient) { 
  }

  close() {
    this.showInfo.emit(false);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.character.currentValue.loaded) {
      this.getHomeworld();
      this.getSpecies();
      this.getVehicles();
      this.getStarships();
    }
  }

  getValues(url, next) {
    return this.http.get(url).toPromise().then(res => {
      next(res);
    })
  }

  getHomeworld() {
    this.getValues(this.character.homeworld, res => {
      this.character.homeworld = res["name"];
    });
    this.getFilms();
  }

  getFilms() {
    var films = [];
    for(let i = 0; i < this.character.films.length; i++){
      this.getValues(this.character.films[i], res => {
        films.push(res["title"])
        this.character.films = films.join(',');
      });
    }
  }

  getSpecies() {
    var species = [];
    for(let i = 0; i < this.character.species.length; i++){
      this.getValues(this.character.species[i],res => {
        species.push(res["name"]);
        this.character["species"] = species.join(',');
      });
    }
  }

  getVehicles() {
    var vehicles = [];
    for(let i = 0; i < this.character.vehicles.length; i++){
      this.getValues(this.character.vehicles[i], res => {
        vehicles.push(res["name"]);
        this.character["vehicles"] = vehicles.join(',');
      });
    }
  }

  getStarships() {
    var starships = [];
    for(let i = 0; i < this.character.starships.length; i++){
      this.getValues(this.character.starships[i], res => {
        starships.push(res["name"]);
        this.character["starships"] = starships.join(',');
      });
    }
    this.character.loaded = true;
    
  }

}
