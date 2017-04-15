import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import {ModalComponent} from "../../components/modal/modal.component";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  promptMessage;
  customerInfo: Customer;
  customers: Customer[];

  constructor(private dialogService:DialogService) {}

  ngOnInit() {

  }

  openModal() {
    this.dialogService.addDialog(ModalComponent, {
      title:'Name dialog',
      question:'What is your name?: '})
      .subscribe((message)=>{
        //We get dialog result
        this.customerInfo = message;
        console.log(this.customerInfo);
      });
  }

}
