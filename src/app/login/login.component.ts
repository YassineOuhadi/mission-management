import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../auth-service/auth.service';
import { UserType } from '../auth-service/model/enum/UserType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  result: any;

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isloggedin()) {
      this.authService.validateToken().toPromise()
        .then((response: any) => {
          if (response.isValid) {
            const userRole = this.authService.getUserTypeFromCookie();
            if (userRole === 'PROFESSOR') {
              this.router.navigate(['/professor']);
            } else if (userRole === 'SUPERVISOR') {
              this.router.navigate(['/supervisor']);
            } else if (userRole === 'REGISTRAR') {
              this.router.navigate(['/registrar']);
            } else {
              this.router.navigate(['login']);
            }
          }
        })
    }
  }

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin(): void {
    if (this.loginform.valid) {
      this.authService.login(this.loginform.value.email!, this.loginform.value.password!).subscribe(
        (response: any) => {
          this.authService.setTokenInCookie(response.jwt);
          this.authService.setUserTypeInCookie(response.userType);
          const espace: UserType = response.userType as UserType;
          this.router.navigate([espace.toString().toLowerCase()]);
        },
        (error) => {
          if (error.status === 400) {
            this.toastr.error(error ? error.error : 'Invalid credentials');
          } else {
            this.toastr.error('Error during login');
          }
        }
      );
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}
