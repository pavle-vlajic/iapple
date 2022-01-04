import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-ng-phone-for',
  templateUrl: './ng-phone-for.component.html',
})
export class NgPhoneForDemoComponent implements OnInit {
  phones: Phone[];

  constructor() {}

  ngOnInit(): void {
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
}
