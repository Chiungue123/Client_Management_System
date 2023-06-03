import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {

  constructor(private dataService: DataService) { }
  clients!: Object;
  getClients() {
    this.dataService.getClients().subscribe(data => {
      this.clients = data
      console.log(this.clients);
    })
  }
}
