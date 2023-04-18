import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeService } from './recipes/recipe.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { Component, NgModule } from '@angular/core';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';


const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'recipes/recipe/:id', component: RecipeComponent },
  { path: 'secure', component: SecureComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recipe/:id', component: RecipeComponent },
{path:'login', component:LoginComponent},
{path:'logout',component:LoginComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

