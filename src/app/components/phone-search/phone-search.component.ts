import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phone-search',
  templateUrl: './phone-search.component.html',
  styleUrls: ['./phone-search.component.css']
})
export class PhoneSearchComponent implements OnInit {

  @Input() phoneName: string; // for search (filter pipe)

  @Output() myChangePhoneName: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.myChangePhoneName.emit({ value: this.phoneName });
  }

}
