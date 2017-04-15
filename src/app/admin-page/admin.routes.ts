import {Routes} from "@angular/router";
import {ViewCustomersComponent} from "./view-customers/view-customers.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";

export const ADMIN_ROUTES: Routes = [
  { path: '', component: ViewCustomersComponent },
  { path: 'view', component: ViewCustomersComponent },
  { path: 'add', component: AddCustomerComponent }
];


