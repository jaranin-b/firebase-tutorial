import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AF } from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ViewCustomersComponent } from './admin-page/view-customers/view-customers.component';
import {ADMIN_ROUTES} from "./admin-page/admin.routes";
import { AddCustomerComponent } from './admin-page/add-customer/add-customer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

// Must export the config
export const firebaseConfig = {
  apiKey: "",
  authDomain: "fir-crud-57aaf.firebaseapp.com",
  databaseURL: "https://fir-crud-57aaf.firebaseio.com",
  storageBucket: "fir-crud-57aaf.appspot.com",
  messagingSenderId: "612904572355"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'admin', component: AdminPageComponent, children: ADMIN_ROUTES}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    AdminPageComponent,
    ViewCustomersComponent,
    AddCustomerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    BootstrapModalModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
