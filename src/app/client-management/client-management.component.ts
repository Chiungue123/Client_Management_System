import { Component } from '@angular/core';
import { DataService } from '../data.service';

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
  clients!: Object;
  
  constructor(private dataService: DataService) { }
  getClients() {
    this.dataService.getClients().subscribe(data => {
      this.clients = data
      console.log(this.clients);
    })
  }

  createClient() {
    /*const name = (<HTMLInputElement>document.getElementById('name')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    this.dataService.addClient({ name, email, phone }).subscribe(data) => {
      console.log(data);
    }*/

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
}
