import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-meeting-management',
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css']
})
export class ClientMeetingManagementComponent {
  constructor(private dataService: DataService) { }
  http!: any;
  meetings!: Object;

  getMeetings() {
    console.log(this.http.get('/meetings'));
  }
}
