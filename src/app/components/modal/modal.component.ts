import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {Customer} from "../../model/customer";

export interface PromptModel {
  title:string;
  question:string;
}

@Component({
  selector: 'prompt',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()">&times;</button>
                     <h4 class="modal-title">{{title || 'Prompt'}}</h4>
                   </div>
                   <div class="modal-body">
                    <label>Customer name: </label><input type="text" class="form-control" [(ngModel)]="name" name="name" >
                    <label>Address: </label><textarea class="form-control" [(ngModel)]="address" name="address" ></textarea>
                    <label>Telephone: </label><input type="tel" class="form-control" [(ngModel)]="phone" name="phone" >
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="apply()">OK</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
                </div>`
})
export class ModalComponent extends DialogComponent<PromptModel, Customer> implements PromptModel {
  title: string;
  question: string;

  // Customer Info
  name: string;
  address: string;
  phone: number;

  customerInfo: Customer = {
    name: '',
    address: '',
    phone: 0
  }

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  apply() {
    this.customerInfo.name = this.name;
    this.customerInfo.address = this.address;
    this.customerInfo.phone = this.phone;

    this.result = this.customerInfo;

    console.log(this.result);
    this.close();
  }
}
