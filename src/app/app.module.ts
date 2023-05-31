import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMeetingManagementComponent } from './client-meeting-management/client-meeting-management.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'client-meeting-management', component: ClientMeetingManagementComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    ClientMeetingManagementComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }