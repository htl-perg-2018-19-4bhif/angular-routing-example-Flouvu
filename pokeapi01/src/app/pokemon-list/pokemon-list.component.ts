import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon {
  name: string;
  url: string;
  id: number;
}

interface IPokemons {
  results: IPokemon[];
}


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: IPokemons = { results: [] };

  constructor(private http: HttpClient) {
    this.loadPokemon()
  }

  ngOnInit() {
  }

  //Details-Button nicht verfügbar - Verlinkung auf pokemon-details-list
  async loadPokemon() {
    this.pokemons = await this.http.get<IPokemons>('https://pokeapi.co/api/v2/pokemon?limit=1000').toPromise();
  }
}

