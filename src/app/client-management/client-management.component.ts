import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Client } from '../profile/profile.component'; // Importing the Client interface

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})

export class ClientManagementComponent {
  clients: Client[] = []; // Array of clients

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getClientsData().subscribe(clients => {
      this.clients = clients;
    });
    this.dataService.closeCreateMeetingModal();
    this.dataService.closeEditMeetingModal();
    this.dataService.closeCreateClientModal();
    this.dataService.closeEditClientModal();
  }
}