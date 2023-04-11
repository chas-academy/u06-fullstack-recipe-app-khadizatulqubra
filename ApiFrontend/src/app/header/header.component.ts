import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { RecipesComponent } from '../recipes/recipes.component';
import { NgModel } from '@angular/forms';
import { LoginComponent } from '../public/login/login.component';
import { UserService } from '../auth/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  localStorage: any;
  isLoggedIn=false;
  logoutUser:any



 logoUrl ='https://1000logos.net/wp-content/uploads/2020/09/Food-Network-Logo.jpg';
 title = 'Recipe';
  constructor( private renderer: Renderer2,private http:HttpClient,private router:Router, public userService: UserService) {}
  ngOnInit(): void {
     }
    


  }
