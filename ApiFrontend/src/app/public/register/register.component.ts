import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Register } from './register.module';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!:FormGroup
  register = new Register();
  data: any;
  message: any;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(){}

   submit(){
    this.dataService.registerUser(this.register).subscribe(res=>{ 
      this.data = (res);
       this.message = this.data.message;
       this.router.navigate(['/login']);
    })
   }



  }


