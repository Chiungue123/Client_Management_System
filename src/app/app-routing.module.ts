import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMeetingManagementComponent } from './client-meeting-management/client-meeting-management.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'client-meeting-management', component: ClientMeetingManagementComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'client', component: ClientComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'client', component: ClientComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'edit-client', component: EditClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
   ClientManagementComponent,
   ClientMeetingManagementComponent, 
   SignUpComponent, 
   ForgotPasswordComponent, 
   AdminComponent, 
   LoginComponent, 
   ClientComponent,
   MenuComponent,
   ProfileComponent,
   CreateClientComponent,
   EditClientComponent
  ]