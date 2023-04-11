import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent{
  title = 'External API Show';
  searchQuery=""; // provide a default value
  allRecipes: any;

  constructor(private recipeService: RecipeService) {}

 
  getRecipes():void {
    this.recipeService.getRecipes(this.searchQuery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38,70);
        return recipe;
      })
   console.log(result.hits[0]);
   console.log(recipes)

   this.allRecipes = recipes;
    });
   }
}
