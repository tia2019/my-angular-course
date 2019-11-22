import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/ingredients/ingredient.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input()
  recipe: Recipe;
  ingredientsArray: Ingredient[];
  constructor() {

  }

  ngOnInit() {
  this.ingredientsArray = this.recipe.ingredients;
  }

}
