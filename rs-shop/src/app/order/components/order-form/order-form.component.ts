import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
      comments: new FormControl('', [Validators.maxLength(250)]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get city() {
    return this.form.get('city');
  }

  get address() {
    return this.form.get('address');
  }

  get phone() {
    return this.form.get('phone');
  }

  get comments() {
    return this.form.get('comments');
  }

  get date() {
    return this.form.get('date');
  }

  get time() {
    return this.form.get('time');
  }

  onConfirmBtnClick() {
    this.router.navigate(['/waiting-list'])
  }

  submit() {
    console.log('Form submitted', this.form);
    const formData = { ...this.form.value };
    console.log('FormData:', formData);
    this.onConfirmBtnClick();
  }
}
