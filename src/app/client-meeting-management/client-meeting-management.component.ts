import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Meeting } from '../meeting/meeting.component';

@Component({
  selector: 'app-client-meeting-management',
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css']
})

export class ClientMeetingManagementComponent {
  meetings: Meeting[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClientMeetings();
  }

  getClientMeetings() {
    this.dataService.getMeetingsData().subscribe(meetings => {
    this.meetings = meetings;
    console.log("Updating meetings: " + this.meetings)
  });
}
}