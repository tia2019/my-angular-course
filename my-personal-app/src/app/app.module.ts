import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SavedComponent } from './saved/saved.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent,
    WelcomeComponent,
    NavbarComponent,
    SavedComponent,
    NotfoundComponent
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
