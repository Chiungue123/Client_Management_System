import { Component, Input } from '@angular/core';
import { Time } from '@angular/common';

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
  clientName!: string;
  Date!: Date;
  Time!: Time;
  clientID!: number;
  Agenda!: string;
  id!: number;

  /* Get meetings variables from parent component */
  @Input() meeting!: Meeting;
}
