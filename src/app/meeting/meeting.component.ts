import { Component, Input } from '@angular/core';
import { Time } from '@angular/common';
import { DataService } from '../data.service';

  /* Add meeting variables */
export interface Meeting {
  clientName: string;
  Date: Date;
  Time: Time;
  clientID: number;
  Agenda: string;
  id: number;
}

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})

export class MeetingComponent {
  /* Get meetings variables from parent component */
  @Input() meeting!: Meeting;
  
  constructor(private dataService: DataService) { }

  clientName!: string;
  Date!: Date;
  Time!: Time;
  clientID!: number;
  Agenda!: string;
  id!: number;

  deleteMeeting() {
    if(confirm("Are you sure you want to delete this meeting with " + this.meeting.clientName + "?")) {
      this.dataService.deleteMeeting(this.meeting).subscribe(response => {
      console.log(response);
      this.dataService.loadInitialData();
      });
    }
    else {
      console.log("Meeting deletion cancelled");
    }
  }

  editMeeting() {
    console.log("edit meeting button clicked")
    this.dataService.selectedMeeting.next(this.meeting)
    this.dataService.openEditMeetingModal();
  }
}