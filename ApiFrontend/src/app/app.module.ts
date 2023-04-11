 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './service/data.service';
import { HomeComponent } from './home/home.component';

import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RouterModule} from '@angular/router';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { SecureComponent } from './secure/secure.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeaderComponent,
    HomeComponent,
  
    RecipeComponent,
       PublicComponent,
       LoginComponent,
       RegisterComponent,
       SecureComponent,
       FooterComponent,

    
      
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent,RecipesComponent],
/*   schemas:[CUSTOM_ELEMENTS_SCHEMA] */
})
export class AppModule { }
