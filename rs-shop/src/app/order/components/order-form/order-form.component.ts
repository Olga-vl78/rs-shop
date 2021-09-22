import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  form: FormGroup;

  isSubmitted: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly pagesDataService: PagesDataService,
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
      comments: new FormControl('', [Validators.maxLength(250)]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
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

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  getOrderSum() {
    let orderSum: number = 0;
    this.orderedItems.forEach((item) => {
      if (item.amount) orderSum += item?.amount * item.price;
    });
    return orderSum;
  }

  goToWaitingList() {
    this.router.navigate(['/waiting-list']);
  }

  showPopup() {
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
      this.goToWaitingList();
    }, 3000);
  }

  async submit() {
    const formData = { ...this.form.value };
    await this.userService.addOrder({
      items: this.pagesDataService.transformOrderedItems(),
      details: {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        timeToDeliver: `${formData.date} ${formData.time}`,
        comment: formData.comments,
      },
    });
    this.pagesDataService.clearOrderedItems();
    this.showPopup();
  }
}
