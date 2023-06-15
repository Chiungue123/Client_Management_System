import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    AdminNavBarComponent,
    ProfileComponent,
    CreateClientComponent,
    CreateMeetingComponent,
    MeetingComponent,
    EditClientComponent,
    EditMeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }   