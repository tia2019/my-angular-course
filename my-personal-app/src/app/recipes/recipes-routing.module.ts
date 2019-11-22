import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list.component';


const routes: Routes = [
  { path: "", pathMatch: "full", component: RecipeListComponent  },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RecipesRoutingModule { }
