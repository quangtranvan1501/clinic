import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { UserModel } from '../model/user.model';
import { AuthService } from '../model/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login';
  passwordVisible = false;
  isLoading = false;
  inputValue = null;
  username = '';
  password = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    // private notification: NZNotificationService,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
  ) {}

  ngOnInit() {
    //check logged in
    // if (this.authService.isLogin()) {
    //   this.authService.backtoDashboard();
    // }
  }

  submitForm(): void {
    this.authService
      .login(this.username, this.password)
      .subscribe((success) => {
        if (success) {
          console.log(this.username + ' và ' + this.password);
          // Nếu đăng nhập thành công, chuyển hướng đến trang chính (Component B)
          this.router.navigate(['/welcome']);
        } else {
          // Hiển thị thông báo lỗi (ví dụ: alert)
          alert(
            'Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.',
          );
          console.log(this.username + ' và ' + this.password);
        }
      });
  }

  // submitForm(): void {
  //   for (const i in this.loginForm.controls) {
  //     this.loginForm.controls[i].markAsDirty();
  //     this.loginForm.controls[i].updateValueAndValidity();
  //   }

  //   if (!this.loginForm.invalid) {
  //     this.errorMsg = null;
  //     this.isLoading = true;
  //     if (
  //       this.loginForm.get('username').value === 'demo' &&
  //       this.loginForm.get('password').value === 'demo'
  //     ) {
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         this.notification.success(
  //           'Thành công',
  //           'Xin chúc mừng, bạn đã đăng nhập thành công'
  //         );
  //         let userDetail: UserModel = {
  //           name: 'Tùng Hà',
  //           username: 'hadongtung',
  //           email: 'hadongtung@gmail.com',
  //           roleId: 1,
  //           roleName: 'Administrator',
  //           accessToken: 'token here',
  //         };
  //         // this.authService.storeUserDetail(userDetail);
  //         // this.authService.backtoDashboard();
  //       }, 1000);
  //     } else {
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         this.errorMsg = 'Tên đăng nhập hoặc mật khẩu không chính xác';
  //       }, 1000);
  //     }
  //   }
  // }
}
