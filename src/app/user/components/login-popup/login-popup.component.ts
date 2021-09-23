import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
})
export class LoginPopupComponent {
  login: string = '';

  password: string = '';

  isLoginError = false;

  constructor(
    private readonly authService: AuthService,
    private readonly userSevice: UserService,
  ) {}

  get $isRegistration() {
    return this.authService.$isRegistration;
  }

  onGetLoginInputValue(input: HTMLInputElement) {
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

  clearForm(login: HTMLInputElement, password: HTMLInputElement) {
    login.value = '';
    password.value = '';
  }

  async onSubmit(login: HTMLInputElement, password: HTMLInputElement) {
    const response = await this.userSevice.loginUser({
      login: this.login,
      password: this.password,
    }).catch((error) => console.log(error));
    if (response == undefined) {
      this.isLoginError = true;
      this.clearForm(login, password)
    } else {
      this.isLoginError = false;
      this.authService.login(this.login, this.password);
      this.authService.userToken = response.token;
    }
  }
}
