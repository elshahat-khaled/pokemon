import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';

const routes: Routes = [
  { path: 'pokemon/:id', component: ListaPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
