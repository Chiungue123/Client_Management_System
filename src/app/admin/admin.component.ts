import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProjects().subscribe({
      next: (project: object) => {
        console.log(project);
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    /* No longer needed, but keeping for reference
    this.dataService.getClients().subscribe({
      next: (client: object) => {
        console.log(client);
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    this.dataService.getClientMeetings().subscribe({
      next: (meeting: object) => {
      console.log(meeting);
    }, 
      error: (error: any) => {
      console.log(error);
      }
    });
    */

    this.dataService.getInquiries().subscribe({
      next: (inquiry: object) => {
        console.log(inquiry);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}