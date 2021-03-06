import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  phones: Phone[];

  @Input() phoneName: string; // for search (filter pipe)

  selectedPhone: Phone; // for populating form

  @Output() cleanSearchAfterDelete: EventEmitter<any> = new EventEmitter();

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    console.log('ngOnInit()');
    // for clear
    this.phoneService.stateClear.subscribe((clear) => {
      if (clear) {
        this.selectedPhone = {
          id: null,
          name: null,
          imageUrl: null,
          price: null,
        };
      }
    });

    // Pregled soba kroz poglede
    this.phoneService.getPhones().subscribe((phones) => {
      this.phones = phones;
    });
  }

  onSelect(phone: Phone) {
    this.phoneService.setFormPhone(phone);
    this.selectedPhone = phone;
  }

  onDelete(phone: Phone) {
    if (confirm('Are you sure?')) {
      this.cleanSearchAfterDelete.emit();

      this.phoneService.deletePhone(phone);
    }
  }

  buy(phone: Phone) {
    const quantity: number = +prompt('Quantity:');
    console.log(`Total price: ${this.phoneService.getPrice(quantity, phone)}`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }

  ngDoCheck() {
    console.log('ngDoCheck()');
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }
}
