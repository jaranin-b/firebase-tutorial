import {Component, OnInit} from '@angular/core';
import {Customer} from './../../model/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public customer: Customer;

  constructor() {
  }

  ngOnInit() {
    // we will initialize our form here

  }

  save(model: Customer, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}

