import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  pokemonList : any[] = [];
  obs! : Observable <any[]>;
  constructor(private http : HttpClient)
  {this.obs = this.http.get<any[]>("https://pokeapi.co/api/v2/type");
  this.obs.subscribe(this.doSomething)
  }
  doSomething = (data : any[]) => {
    this.pokemonList = data;
  }
  
}
