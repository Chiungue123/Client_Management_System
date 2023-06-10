import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})

export class CreateMeetingComponent {
  isClientModalVisible!: boolean;

  constructor(private dataService: DataService) {
    /* Assigning the visibility to the local variable */
    this.dataService.isClientModalVisible$.subscribe(isVisible => {
      this.isClientModalVisible = isVisible;
    });
   }

   /* Closing the modal */
   closeClientModal(){
      console.log("Closing client modal from CreateMeetingComponent");
      this.isClientModalVisible = false;
   }
  
  /* Get clients variables */
  clientName!: string;
  Date!: Date | undefined; /* Allowing undefined values */
  Time!: Time | undefined; /* Allowing undefined values */
  clientID!: number;
  Agenda!: string;
  id!: number;

  /* Create meeting */
  addClientMeeting() {
    console.log("Creating new meeting")

    const newMeeting = {
      clientName: this.clientName,
      Date: this.Date,
      Time: this.Time,
      clientID: this.clientID,
      Agenda: this.Agenda,
      id: this.id
    }

    console.log("New meeting by: " + newMeeting.clientName + "Date: " + newMeeting.Date + ", Time: " + newMeeting.Time + ", ClientID: " + newMeeting.clientID + ", Agenda: " + newMeeting.Agenda + ", Meeting ID: " + newMeeting.id)

    this.dataService.addClientMeeting(newMeeting).subscribe(response => {
      this.closeClientModal();
      console.log("Response: " + response);
      this.clientName = '';
      this.Date = undefined;
      this.Time = undefined;
      this.clientID = 0;
      this.Agenda = '';
      this.id = 0;
    }, error => {
      console.log(error);
    })
  };
}
