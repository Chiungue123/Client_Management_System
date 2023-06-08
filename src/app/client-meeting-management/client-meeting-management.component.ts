import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-client-meeting-management',
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css']
})
export class ClientMeetingManagementComponent {
  constructor(private dataService: DataService) { }
  meetingDate!: Date | undefined; /* Allowing undefined values */
  meetingTime!: Time | undefined; /* Allowing undefined values */
  clientID!: number;
  meetingAgenda!: string;

  createMeeting() {

    const newMeeting = {
      meetingDate: this.meetingDate,
      meetingTime: this.meetingTime,
      clientID: this.clientID,
      meetingAgenda: this.meetingAgenda
    }

    console.log("New meeting: " + newMeeting.meetingDate + ", Time: " + newMeeting.meetingTime + ", ClientID: " + newMeeting.clientID + ", Agenda: " + newMeeting.meetingAgenda)

    this.dataService.addClientMeeting(newMeeting).subscribe(response => {
      console.log(response);
      this.meetingDate = undefined;
      this.meetingTime = undefined;
      this.clientID = 0;
      this.meetingAgenda = '';
    }, error => {
      console.log(error);
    })
  };
}
