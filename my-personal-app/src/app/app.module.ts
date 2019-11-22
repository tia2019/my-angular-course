import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
