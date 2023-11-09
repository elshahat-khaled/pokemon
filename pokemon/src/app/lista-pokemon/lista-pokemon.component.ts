import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Location } from '@angular/common'
@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent {
  routepokemon: Observable<ParamMap> | undefined;
    constructor(
      private route: ActivatedRoute,
    ){
      
     }
  
    ngOnInit(): void {
  
      this.routepokemon = this.route.paramMap;
      this.routepokemon.subscribe(this.getRouterParam);
    }
  
    getRouterParam = (params: ParamMap) => {
      console.log(params);
      let itemId = params.get('id');
      console.log(itemId);
      
      
    };
  
  
  

}
