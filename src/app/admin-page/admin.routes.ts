import {Routes} from "@angular/router";
import {ViewCustomersComponent} from "./view-customers/view-customers.component";

export const ADMIN_ROUTES: Routes = [
  { path: '', component: ViewCustomersComponent },
  { path: 'view', component: ViewCustomersComponent }
];
