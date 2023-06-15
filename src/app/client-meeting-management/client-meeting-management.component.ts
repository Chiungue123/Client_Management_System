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
    this.dataService.getMeetingsData().subscribe(meetings => {
      this.meetings = meetings;
      });
    this.dataService.closeCreateMeetingModal();
    this.dataService.closeEditMeetingModal();
    this.dataService.closeCreateClientModal();
    this.dataService.closeEditClientModal();
  }
}