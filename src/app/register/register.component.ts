import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserType } from '../auth-service/model/enum/UserType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  userTypes = Object.values(UserType);

  registerform = this.builder.group({
    email: this.builder.control('', [Validators.required, Validators.email]),
    username: this.builder.control('', [Validators.required, Validators.minLength(5)]),
    password: this.builder.control('', Validators.required),
    userType: this.builder.control('', Validators.required),
    phone: this.builder.control('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
  });

  proceedregister() {
    if (this.registerform.valid) {
      const { email, username, password, phone } = this.registerform.value;
      const userType: UserType = this.registerform.value.userType as UserType;

      this.authService.register(username!, email!, phone!, password!, userType).subscribe(
        (response: any) => {
          this.toastr.success('Registered successfully');
          this.router.navigate(['login']);
        },
        (error) => {
          if (error.status === 400) {
            this.toastr.error(error ? error.error : 'Invalid data');
          } else {
            this.toastr.error('Error during login');
          }
        }
      );

    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
