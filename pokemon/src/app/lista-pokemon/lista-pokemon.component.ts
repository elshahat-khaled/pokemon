import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Location } from '@angular/common'
import { TypeList } from '../typelist.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {


  routepokemon: Observable<ParamMap> | undefined;

  obs!: Observable<TypeList>;
  pok : any; 

  genVect!: Observable<TypeList>;


  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    //Gestisce i cambi di route con l'observable paramMap
    //this.route.paramMap.subscribe(this.getRouterParam);
    this.routepokemon = this.route.paramMap;
    this.routepokemon.subscribe(this.getRouterParam);
  }

  ngOnInit(): void {
  }

  getRouterParam = (params: ParamMap) => {

    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log(uri_param); //Stampo su console
   //this.service.getTrack() 
   //if (uri_param == 'fruits') this.genVect = FRUITS;
   //if (uri_param == 'animals') this.genVect = ANIMALS;

    //console.log(params);
    //let itemId = params.get('id');
    //console.log(itemId);
    this.obs = this.http.get<TypeList>("https://pokeapi.co/api/v2/type/"+uri_param);
    console.log("https://pokeapi.co/api/v2/type/"+uri_param);
    this.obs.subscribe((data)=>this.pok= data)
  };

  
}


