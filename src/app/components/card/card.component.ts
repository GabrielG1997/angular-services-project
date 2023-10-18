import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { ServicePokemonService } from 'src/app/services/service-pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData;
  constructor(private service:ServicePokemonService){
    this.pokemon ={
      name:'',
      id:0,
      sprites:{front_default:''},
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon(1);
  }

  getPokemon(searchName:string|number) {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon ={
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types:res.types
          }},
        error: (err) => console.log(err)
      }
    )
    }
}
