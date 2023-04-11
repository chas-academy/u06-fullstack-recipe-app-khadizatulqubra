
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

 export class LogoutComponent implements OnInit {
  loggedIn = false;
  
  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('token') !== null;
    if (this.loggedIn) {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      this.http.post('http://127.0.0.1:8000/api/logout', null, { headers }).subscribe(
        result => {
          console.log(result);
          localStorage.removeItem('token');
        }
      );
    }
  }


  
  
  
  
  
  

  logoutUser() {
    console.log('Logging out user');
    localStorage.removeItem('token');
    // console.log('Token removed from local storage');
    this.router.navigate(['/login']);
  } 
}






 