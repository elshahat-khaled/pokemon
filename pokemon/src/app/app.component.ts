import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TypeList } from './typelist.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  pokemonList! : TypeList;
  obs! : Observable <TypeList>;
  constructor(private http : HttpClient)
  {this.obs = this.http.get<TypeList>("https://pokeapi.co/api/v2/type");
  this.obs.subscribe(this.doSomething)
  }
  doSomething = (data : TypeList) => {
    this.pokemonList = data;
  }
  
}
