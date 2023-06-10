import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})

export class CreateClientComponent {
  isModalVisible!: boolean;

  constructor(private dataService: DataService) { 
    // Assigning the visibility to the local variable
    this.dataService.isModalVisible$.subscribe(isVisible => {
      this.isModalVisible = isVisible; 
    });
  }

  closeModal() {
    console.log("Closing client modal from CreateClientComponent")
    this.isModalVisible = false;
  }

  /* Add client variables */
  name!: string;
  email!: string;
  phone!: string;

  createClient() {
    console.log("Creating client")
    const newClient = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }

    console.log("New client: " + newClient.name + ", " + newClient.email + ", " + newClient.phone);
    
    this.dataService.addClient(newClient).subscribe(response => {
      console.log(response);
      this.closeModal();
      this.name = '';
      this.phone = '';
      this.email = '';
    }, error => {
        console.log(error);
      }); 
  }
}