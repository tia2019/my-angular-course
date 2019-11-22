import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RecipeListComponent} from "./recipe-list.component";
import {RecipeCardComponent} from "./recipe-card/recipe-card.component";
import { from } from 'rxjs';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [RecipeCardComponent, RecipeListComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
