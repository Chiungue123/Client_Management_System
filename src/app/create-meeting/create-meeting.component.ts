import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Time } from '@angular/common';
import { Client } from '../profile/profile.component';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})

export class CreateMeetingComponent implements OnInit {
  isClientModalVisible!: boolean;
  clients: Client[] = [];

  ngOnInit() {
    this.dataService.getClientsData().subscribe(clients => {
      this.clients = clients;
    });
  }

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

   /* Drop down menu for client name, automatically finds the client ID */
   selectedClient(){
      console.log("Selected client: " + this.clientName + ", ID: " + this.clientID);
  }

  /* Sets the client ID value */
  onClientChange(event: any){
    this.clientID = event.target.value;
    console.log("Client ID: " + this.clientID);
  }
  
  /* Get clients variables */
  clientName!: string;
  Date!: Date | undefined;
  Time!: Time | undefined;
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