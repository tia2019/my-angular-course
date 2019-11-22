import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeListComponent } from "./recipe-list.component";
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";
import { from } from 'rxjs';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


@NgModule({
  declarations: [RecipeCardComponent, RecipeListComponent, RecipeDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
