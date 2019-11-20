import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
