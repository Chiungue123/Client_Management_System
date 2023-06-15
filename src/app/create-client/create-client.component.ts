import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Client } from '../profile/profile.component';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})

export class CreateClientComponent {
  isCreateClientModalVisible!: boolean;
  client: Client = {name: '', email: '', phone: '', id: 0};

  constructor(private dataService: DataService) { 
    // Assigning the visibility to the local variable
    this.dataService.isCreateClientModalVisible$.subscribe(isVisible => {
      this.isCreateClientModalVisible = isVisible; 
    });
  }

  closeModal() {
    console.log("Closing client modal from CreateClientComponent")
    this.isCreateClientModalVisible = false;
  }

  /* Add client variables */
  name!: string;
  email!: string;
  phone!: string;
  id!: number;

  createClient() {
    console.log("Creating client")
    const newClient = {
      name: this.client.name,
      email: this.client.email,
      phone: this.client.phone
    }

    console.log("New client: " + newClient.name + ", " + newClient.email + ", " + newClient.phone);
    
    this.dataService.addClient(newClient).subscribe(response => {
      console.log(response);
      alert("Client created successfully")
      this.closeModal();
      this.client.name = '';
      this.client.phone = '';
      this.client.email = '';
    }, error => {
        console.log(error);
      }); 
  }
}