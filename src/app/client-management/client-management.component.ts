import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Client } from '../profile/profile.component';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  /* Add client variables */
  name!: string;
  email!: string;
  phone!: string;

  /* Get clients variables */
  clients: Client[] = [];

  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClients();
  }
  
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
      this.name = '';
      this.phone = '';
      this.email = '';
    }, error => {
        console.log(error);
      }); 
  }

  getClients() {
    console.log("Getting clients")
    this.dataService.getClients().subscribe(data => {
      this.clients = data
      console.log(this.clients);
    });
  }
}

/*const name = (<HTMLInputElement>document.getElementById('name')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    this.dataService.addClient({ name, email, phone }).subscribe(data) => {
      console.log(data);
    }*/