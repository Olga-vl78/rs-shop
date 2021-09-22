import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrls: ['./registration-popup.component.scss'],
})
export class RegistrationPopupComponent {
  login: string = '';

  password: string = '';

  firstName: string = '';

  lastName: string = '';

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  onGetLoginlInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.login = input.value;
    }
  }

  onGetPasswordInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.password = input.value;
    }
  }

  onGetFirstNameInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.firstName = input.value;
    }
  }

  onGetLastNameInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.lastName = input.value;
    }
  }

  onCloseItemClick() {
    this.authService.$isRegistration.next(false);
  }

  async onSubmit() {
    const response = await this.userService.addUser({
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      password: this.password,
    });
    console.log(response.token);
    this.authService.$isRegistration.next(false);
  }
}
