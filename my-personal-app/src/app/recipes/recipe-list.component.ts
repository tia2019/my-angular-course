import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../ingredients/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArray: Recipe[];
  myIngredients: Ingredient[];
  constructor() { }

  ngOnInit() {
    this.myIngredients = [
      {
        id: 1,
        store: "https://www.harristeeter.com/",
        name: "Spaghetti",
        quantity: "1 LB"
      },
      {
        id: 2,
        store: "https://www.harristeeter.com/",
        name: "Ground Beef",
        quantity: "1 Lb"
      }
    ];

    this.recipesArray = [
      {
        id: 1,
        ingredients: this.myIngredients,
        servings: 4,
        prepTime: 40,
        cookTime: 20,
        totalTime: 60,
        name: "Spaghetti and Meatballs",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a55764/best-spaghetti-and-meatballs-recipe/"



      }
    ];
  }

}
