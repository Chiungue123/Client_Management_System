import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Client } from '../profile/profile.component';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  /* Get clients variables */
  clients: Client[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClients();
  }
  
  getClients() {
    console.log("Getting clients")
    this.dataService.getClients().subscribe(data => {
      this.clients = data
      console.log(this.clients);
    });
  }
}