import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {
  email: string = '';

  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onGetEmailInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.email = input.value;
    }
  }

  onGetPasswordInputValue(input: HTMLInputElement) {
    if (input.validity.valid) {
      this.password = input.value;
    }
  }

  onSubmit() {
    //this.userService.login(this.login, this.password);
    //this.router.navigate(['/main']);
  }

}
