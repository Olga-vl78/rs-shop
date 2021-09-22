import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { IUserOrder } from 'src/app/user/models/user-order.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-edit-form-popup',
  templateUrl: './edit-form-popup.component.html',
  styleUrls: ['./edit-form-popup.component.scss']
})
export class EditFormPopupComponent implements OnInit {
  form: FormGroup;

  @Output() submitOrder = new EventEmitter();

  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly userService: UserService
  ) {
    this.form = new FormGroup({
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void { }

  get address() {
    return this.form.get('address');
  }

  get date() {
    return this.form.get('date');
  }

  get time() {
    return this.form.get('time');
  }

  get currentOrder() {
    return this.pagesDataService.currentOrder;
  }

  onCloseItemClick() {
    this.pagesDataService.isEditMode = false;
  }

  async submit(order: IUserOrder | null) {
    this.submitOrder.emit(true);
    const formData = { ...this.form.value };
    if (order) {
      order.details.address = formData.address;
      order.details.timeToDeliver = `${formData.date} ${formData.time}`;
      await this.userService.updateOrder(order);
    }
    this.pagesDataService.isEditMode = false;
  }
}
