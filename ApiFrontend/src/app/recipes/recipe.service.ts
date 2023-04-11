import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  appid= "5a792188";
  appkey="b1aa541747741aafd2f44cd8947b2e58";
  urlConfig ="https://api.edamam.com/api/recipes/v2?type=public";
  id = "";
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'en'
      })
    }



  constructor(private http:HttpClient) { }

 getRecipes(searchQuery: string): Observable<any> {
    const params = {
      q: searchQuery,
      app_id: this.appid,
      app_key: this.appkey,
      cuisineType: 'American',
      mealType: 'Dinner',
      field: ['label', 'image', 'ingredientLines']
    };
    return this.http.get<any>(this.urlConfig, { params }).pipe(
      catchError(this.handleError)
    );
  } 

  getRecipe(id: string){
    let searchQuery = "https://api.edamam.com/api/recipes/v2/" + id  + "?type=public&app_id=" + this.appid + "&app_key=" + this.appkey + "&field=label&field=image&field=ingredientLines";
   return this.http.get<any>(searchQuery, this.httpOptions);
  } 
  
  
   
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
