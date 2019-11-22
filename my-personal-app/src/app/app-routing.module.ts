import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipes/recipe-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SavedComponent } from './saved/saved.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "recipes", component: RecipeListComponent },
  { path: "saved", component: SavedComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
