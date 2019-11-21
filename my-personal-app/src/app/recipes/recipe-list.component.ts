import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../ingredients/ingredient.model';
import { RecipeService } from './shared/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArray$: Observable<Recipe[]>;
  myIngredients: Ingredient[];
  constructor(private recipeService: RecipeService) { }
  getRecipes() {
    this.recipesArray$ = this.recipeService.getRecipes();

  }

  ngOnInit() {
    this.getRecipes();
  }

}
