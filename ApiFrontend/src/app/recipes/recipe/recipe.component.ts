import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
/* import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms'; */



@Component({
   selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  
  title = 'Show one recipe';
  today:number=Date.now();
  id = ""; 
  recipe: any;
  SearchQuery='';
  allRecipes: any;

 


  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params  => {
     console.log(params)
     console.log(params['id'])
     this.id = params ['id'];
 
     this.recipeService.getRecipe(this.id).subscribe(result => {
       this.recipe = result;
       console.log(result)
     })
    });
  }
 
 /* getRecipe(){
  const id = '87c3ae7126fa82bfcd27314b44de3cf4';
  this.recipeService.getRecipe(id).subscribe((result: string) => {
    this.recipe = result;
    console.log(result)
  })
} */ 
}


