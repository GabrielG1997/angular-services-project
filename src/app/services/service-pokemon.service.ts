import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment.development'
import {PokemonData} from 'src/app/models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {
  private baseURL:string ="";
  private pokeData: PokemonData | any;
  constructor(private http:HttpClient) {
    this.baseURL = environment.apiPokemon;
  }
  getPokemon(id: string | number):Observable<PokemonData> {
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${id}`)
    return this.pokeData;
  }
}
