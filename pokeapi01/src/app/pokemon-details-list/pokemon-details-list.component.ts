import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface IPokemonDetails {
  name: string;
  abilities: any[];
  abilitiesList: string[];
}

@Component({
  selector: 'app-pokemon-details-list',
  templateUrl: './pokemon-details-list.component.html',
  styleUrls: ['./pokemon-details-list.component.css']
})
export class PokemonDetailsListComponent implements OnInit {
  pokemonId = "";
  pokemonDetailsAll: IPokemonDetails = { name: "", abilities: [], abilitiesList: [] };

  constructor(private router: ActivatedRoute, private http: HttpClient) {
    router.paramMap.subscribe(map => {
      this.pokemonId = map.get("id");
    })
    this.loadDetails();
  }

  ngOnInit() {
  }

  async loadDetails() {
    this.pokemonDetailsAll = await this.http.get<IPokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`).toPromise();

    this.pokemonDetailsAll.abilitiesList = [];
    for (let x = 0; x < this.pokemonDetailsAll.abilities.length; x++) {
      this.pokemonDetailsAll.abilitiesList.push(this.pokemonDetailsAll.abilities[x].ability.name);
    }
  }
}
