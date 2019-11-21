import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = "http://localhost:5556/recipes";
  constructor(private http: HttpClient) { }
  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url);
  }

}
