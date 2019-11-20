import { Ingredient } from '../ingredients/ingredient.model';

export interface Recipe {
  id: number;
  ingredients: Ingredient[];
  servings: number;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  name: string;
  url?: string;


}
