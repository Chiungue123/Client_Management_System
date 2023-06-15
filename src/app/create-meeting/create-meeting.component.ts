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
  isCreateMeetingModalVisible!: boolean;
  selectedClient!: number;
  clients: Client[] = [];

  /* Get clients variables */
  client_name!: string;
  date!: Date | undefined;
  time!: Time | undefined;
  client_id!: number;
  agenda!: string;
  id!: number;

  ngOnInit() {
    this.dataService.getClientsData().subscribe(clients => {
      this.clients = clients;
    });
  }

  constructor(private dataService: DataService) {
    this.dataService.isCreateMeetingModalVisible$.subscribe(isVisible => {
      this.isCreateMeetingModalVisible = isVisible;
    });
   }

  onClientChange(event: any) {
    this.client_id = event.target.value;
    console.log("Client ID: " + this.client_id);
  }

  /* Create meeting */
  addClientMeeting() {
    const newMeeting = {
      client_name: this.client_name,
      date: this.date,
      time: this.time,
      client_id: this.client_id,
      agenda: this.agenda,
      id: this.id
    }

    console.log("Selected Client: " + this.client_name + "Date: " + newMeeting.date + ", Time: " + newMeeting.time + ", ClientID: " + newMeeting.client_id + ", Agenda: " + newMeeting.agenda + ", Meeting ID: " + newMeeting.id)

    this.dataService.addClientMeeting(newMeeting).subscribe(response => {
      this.closeCreateMeetingModal();
      console.log("Response: " + response);
      this.client_name = '';
      this.date = undefined;
      this.time = undefined;
      this.client_id = 0;
      this.agenda = '';
      this.id = 0;
    }, error => {
      console.log(error);
    })
  };  

  closeCreateMeetingModal() {
    this.isCreateMeetingModalVisible = false;
  }
}