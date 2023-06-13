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
          console.log("Selected Meeting is: " + meeting.clientName + ", Agenda: " + meeting.Agenda);
        }
      });
    }

    constructor(private dataService: DataService) {
      this.dataService.isEditMeetingModalVisible$.subscribe(isVisible => {
        this.isEditMeetingModalVisible = isVisible;
      });
    }

    clientName!: string;
    Date!: Date | null;
    Time!: Date | null;
    clientID!: number;
    Agenda!: string;
    id!: number;

    editMeeting() {
      const editedMeeting = {
        clientName: this.meeting.clientName,
        Date: this.meeting.Date,
        Time: this.meeting.Time,
        clientID: this.meeting.clientID,
        Agenda: this.meeting.Agenda,
        id: this.meeting.id
      }

      this.dataService.editMeeting(editedMeeting).subscribe(response => {
        console.log(response);
        this.dataService.closeEditMeetingModal();
        this.clientName = "";
        this.Date = null;
        this.Time = null;
        this.clientID = 0;
        this.Agenda = "";
      });
  }

  closeEditMeetingModal() {
    this.dataService.closeEditMeetingModal();
  }
}