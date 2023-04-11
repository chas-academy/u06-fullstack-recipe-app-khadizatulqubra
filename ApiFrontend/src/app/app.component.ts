import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { RecipeService } from './recipes/recipe.service';
import { FoodService } from './services/food/food.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiFrontend';

 /*  constructor(public userService: UserService) { }
  logout() {
    this.userService.doLogout()
  } */
}
