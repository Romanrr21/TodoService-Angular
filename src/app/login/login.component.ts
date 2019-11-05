import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private userService:UserService ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['av222', Validators.required],
      password: ['r222', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

  
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      response => {
      console.log("success response:",response);
      this.userService.setUserId(response.body.id);
      this.router.navigateByUrl("/todo");
    },
   error => {
     console.log("error:",error);

   }
    
    );
    // this.router.navigateByUrl('/admin');
  }

}
