import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn = false;
  message = '';
  data = {
    email: '',
    password: ''
    
  };
  http: any;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router,
    public httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    const data = {
      email: formData.email,
      password: formData.password
    };

    this.http.post('http://127.0.0.1:8000/api/login', data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.access_token);
        this.isLoggedIn = true;
        this.router.navigate(['/secure']);
      
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
