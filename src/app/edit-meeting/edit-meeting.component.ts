import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Meeting } from '../meeting/meeting.component';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})

export class EditMeetingComponent {
  meeting!: Meeting;
  isEditMeetingModalVisible!: boolean;

    ngOnInit() {
      this.dataService.selectedMeeting.subscribe(meeting => {
        if(meeting) {
          this.meeting = meeting;
          console.log("Selected Meeting is: " + meeting.client_name + ", Agenda: " + meeting.agenda);
        }
      });
    }

    constructor(private dataService: DataService) {
      this.dataService.isEditMeetingModalVisible$.subscribe(isVisible => {
        this.isEditMeetingModalVisible = isVisible;
      });
    }

    client_name!: string;
    date!: Date | null;
    time!: Date | null;
    client_id!: number;
    agenda!: string;
    id!: number;

    editMeeting() {
      const updatedMeeting = {
        client_name: this.meeting.client_name,
        date: this.meeting.date,
        time: this.meeting.time,
        client_id: this.meeting.client_id,
        agenda: this.meeting.agenda,
        id: this.meeting.id
      }

      this.dataService.editMeeting(updatedMeeting).subscribe(response => {
        console.log(response);
        this.dataService.closeEditMeetingModal();
        this.client_name = "";
        this.date = null;
        this.time = null;
        this.client_id = 0;
        this.agenda = "";
      });
  }

  closeEditMeetingModal() {
    this.dataService.closeEditMeetingModal();
  }
}