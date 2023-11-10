import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { DettagliPokemonComponent } from './dettagli-pokemon/dettagli-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    DettagliPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
