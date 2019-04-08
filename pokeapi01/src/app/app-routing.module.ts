import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from 'src/app/pokemon-list/pokemon-list.component';
import { PokemonDetailsListComponent } from 'src/app/pokemon-details-list/pokemon-details-list.component';

const routes: Routes = [
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemons/:id', component: PokemonDetailsListComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
