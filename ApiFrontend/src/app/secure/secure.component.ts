import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',

})
export class SecureComponent implements OnInit {
  message='You are logged in !'
  constructor(private router: Router) {}

  ngOnInit(): void {

    console.log('Secure component initialized');
    console.log(this.message)
  
    //  the router service to navigate to a different page
    //  this.router.navigate(['/secure']);

  }}
