import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Ingredient } from 'src/app/ingredients/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.recipeService.getRecipeById(id).subscribe(
      recipe => {
        this.recipe = recipe;
      },
      error => console.log("Error: ", error)
    );
  }

}
