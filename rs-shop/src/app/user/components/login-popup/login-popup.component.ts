import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
})
export class LoginPopupComponent implements OnInit {
  login: string = '';

  password: string = '';

  constructor(
    private readonly authService: AuthService,
    private readonly userSevice: UserService,
  ) { }

  ngOnInit(): void { }

  get $isRegistration() {
    return this.authService.$isRegistration;
  }

  onGetEmailInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.login = input.value;
    }
  }

  onGetPasswordInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.password = input.value;
    }
  }

  onCloseItemClick() {
    this.authService.isNotAuthorization();
  }

  onRegistrationBtnClick() {
    this.authService.$isRegistration.next(true);
  }

  async onSubmit() {
    this.authService.login(this.login, this.password);
    const response = await this.userSevice.loginUser({
      login: this.login,
      password: this.password,
    });
    this.authService.userToken = response.token;
    console.log(response.token);
  }
}
