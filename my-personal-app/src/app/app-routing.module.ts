import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipes/recipe-list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "recipes", component: RecipeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
