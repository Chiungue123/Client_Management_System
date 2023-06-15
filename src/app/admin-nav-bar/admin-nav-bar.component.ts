import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent {
  isModalVisible!: boolean;
  isClientModalVisible!: boolean;

  constructor (private dataService: DataService) { }

  openCreateClientModal() {
    this.dataService.openCreateClientModal();
  }
  
  closeModals() {
    this.dataService.closeCreateClientModal();
    this.dataService.closeCreateMeetingModal();
  }

  openCreateMeetingModal() {
    this.dataService.openCreateMeetingModal();
  }
}

/*
Scenario: Creating a Client

Given the user has signed in as admin, navigated to view clients and selected create client on the navigation bar
When the user enters the client data into the client information fields
And the user clicks on the submit button
Then a new client should be created and displayed in the view clients page

Scenario: Scheduling a Client Meeting

Given the user is on the page view client meetings and has selected create meeting on the navigation bar
When the user enters the required information on the meeting form
And the user clicks on the submit button
Then a new meeting should be scheduled for the given client at the specified date and time
And the new meeting should be visible in the client meetings page
*/