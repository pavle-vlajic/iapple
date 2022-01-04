import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  phones: Phone[];

  // for select phone and populate form
  private phoneSource = new BehaviorSubject<Phone>({
    id: null,
    name: null,
    imageUrl: null,
    price: null,
  });
  selectedPhone: Observable<Phone> = this.phoneSource.asObservable();

  // for clear form
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.phones = [
      {
        id: 1,
        name: 'iPhone 1',
        imageUrl: 'assets/img/1.jpg',
        price: 100,
        number: 5,
      },
      {
        id: 2,
        name: 'iPhone 2',
        imageUrl: 'assets/img/2.jpg',
        price: 200,
        number: 3,
      },
      {
        id: 3,
        name: 'iPhone 3',
        imageUrl: 'assets/img/3.jpg',
        price: 300,
        number: 6,
      },
      {
        id: 4,
        name: 'iPhone 4',
        imageUrl: 'assets/img/4.jpg',
        price: 400,
        number: 1,
      },
    ];
  }

  // Pregled soba kroz poglede
  getPhones(): Observable<Phone[]> {
    return of(this.phones);
  }

  addPhone(phone: Phone) {
    this.phones.push(phone);
  }

  updatePhone(phone: Phone) {
    this.phones.forEach((curr, i) => {
      if (phone.id === curr.id) {
        this.phones.splice(i, 1);
      }
    });
    this.phones.unshift(phone);
  }

  deletePhone(phone: Phone) {
    this.phones.forEach((curr, i) => {
      if (phone.id === curr.id) {
        this.phones.splice(i, 1);
      }
    });
  }

  setFormPhone(phone: Phone) {
    this.phoneSource.next(phone);
  }

  clearState() {
    this.stateSource.next(true);
  }

  /**
   * Quantity instead of numberOfNights
   */
  getPrice(quantity: number, phone: Phone) {
    return quantity * phone.price;
  }
}
