import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Client } from '../profile/profile.component';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})

export class EditClientComponent {
  isEditModalVisible!: boolean;
  client!: Client;

  ngOnInit() {
    this.dataService.selectedClient.subscribe(client => {
      if(client) {
        this.client = client;
        console.log("client after ngOnInit: " + client.name + ", Email: " + client.email + ", Phone: " + client.phone + ", ID: " + client.id);
      }
    });
  }
  
  constructor(private dataService: DataService) { 
    // Assigning the visibility to the local variable
    this.dataService.isEditModalVisible$.subscribe(isVisible => {
      this.isEditModalVisible = isVisible; 
    });
  }

  /* Add client variables */
  name!: string;
  email!: string;
  phone!: string;
  id!: number;

  editClient() {
    console.log("Editing client")
    const updatedClient = {
      name: this.client.name,
      email: this.client.email,
      phone: this.client.phone,
      id: this.client.id
    }

    console.log("Updated client: " + updatedClient.name + ", " + updatedClient.email + ", " + updatedClient.phone);
    
    this.dataService.editClient(updatedClient).subscribe(response => {
      console.log(response);
      this.dataService.loadInitialData();
      this.closeEditModal();
      this.name = '';
      this.phone = '';
      this.email = '';
    }, error => {
        console.log(error);
      }); 
  }

  closeEditModal() {
    console.log("Closing modal EditClientComponent")
    this.isEditModalVisible = false;
  }
}