import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

export interface Client {
  name: string;
  phone: string;
  email: string;
  id: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  @Input() client!: Client;
  constructor(private dataService: DataService) { }

  /* Add client variables */
  name!: string;
  email!: string;
  phone!: string;

  /* Get clients variables from parent - Client Management - component */
 
  deleteClient() {
    if (confirm("Confirm here to delete " + this.client.name) == true) {
      this.dataService.deleteClient(this.client).subscribe(response => {
        console.log(response);
        this.dataService.loadInitialData();
      });
    }
    else {
      console.log("Client deletion cancelled");
    }
}

  editClient() {
    console.log("Editing client: " + this.client.name);
    this.dataService.selectedClient.next(this.client)
    this.dataService.openEditClientModal();
    /*this.dataService.editClient(this.client).subscribe(response => {
      console.log("Edit response: " + response);
      this.dataService.loadInitialData();
    });
    error: (error: any) => {
      console.log(error);
    }*/
  }
}