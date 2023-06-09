import { Injectable } from '@angular/core'; // This is used to make the class injectable
import { HttpClient } from '@angular/common/http'; // This is used to make HTTP requests
import { Observable, tap } from 'rxjs'; // This is used to get the Observable interface
import { Client } from './profile/profile.component'; // This is used to get the Client interface
import { BehaviorSubject } from 'rxjs'; // This is used to share data between components
import { Meeting } from './meeting/meeting.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {
    this.loadInitialData(); // This will load the data when the service is created
   }
  // These will be used to automatically update the data in the components when the data changes
  clientsData = new BehaviorSubject<Client[]>([]);
  meetingsData = new BehaviorSubject<Meeting[]>([]);
  selectedClient = new BehaviorSubject<Client | null>(null);
  selectedMeeting = new BehaviorSubject<Meeting | null>(null);

  loadInitialData(){
    this.http.get<Client[]>('http://localhost:3000/clients').subscribe(clients => {
      this.clientsData.next(clients);
    });
    this.http.get<Meeting[]>('http://localhost:3000/meetings').subscribe(meetings => {
      this.meetingsData.next(meetings);
    });
  }

  /* For opening and closing the CREATE CLIENT modal */
  private isCreateClientVisibleSource = new BehaviorSubject<boolean>(false);
  isCreateClientModalVisible$ = this.isCreateClientVisibleSource.asObservable(); // This is used to share data between components
  openCreateClientModal() {
    this.isCreateClientVisibleSource.next(true);
    console.log("Create client button clicked")
  }
  closeCreateClientModal() {
    this.isCreateClientVisibleSource.next(false);
  }

  /* For opening and closing the CREATE MEETING modal */
  private isCreateMeetingModelVisibleSource = new BehaviorSubject<boolean>(false);
  isCreateMeetingModalVisible$ = this.isCreateMeetingModelVisibleSource.asObservable(); // This is used to share data between components

  openCreateMeetingModal() {
    this.isCreateMeetingModelVisibleSource.next(true);
    console.log("Create meeting button clicked")
  }
  closeCreateMeetingModal() {
    this.isCreateMeetingModelVisibleSource.next(false);
  }

  /* For opening and closing the EDIT CLIENT modal*/
  private isEditClientVisibleSource = new BehaviorSubject<boolean>(false); 
  isEditClientModalVisible$ = this.isEditClientVisibleSource.asObservable(); 

  openEditClientModal() {
    this.isEditClientVisibleSource.next(true);
  }
  closeEditClientModal() {
    this.isEditClientVisibleSource.next(false);
  }

  /* For opening and closing the EDIT MEETING modal */
  private isEditMeetingModalVisibleSource = new BehaviorSubject<boolean>(false);
  isEditMeetingModalVisible$ = this.isEditMeetingModalVisibleSource.asObservable(); // This is used to share data between components

  openEditMeetingModal() {
    this.isEditMeetingModalVisibleSource.next(true);
  }
  closeEditMeetingModal() {
    this.isEditMeetingModalVisibleSource.next(false);
  }


  getMeetingsData(): Observable<Meeting[]> {
    return this.meetingsData.asObservable();
  }
  addClientMeeting(meeting: object) {
    return this.http.post('http://localhost:3000/meetings', meeting).pipe(
      tap(() => {
        this.loadInitialData();
      })
    );
  }

  getClientsData(): Observable<Client[]> {
    return this.clientsData.asObservable();
  }
  addClient(client: object) {
    return this.http.post('http://localhost:3000/clients', client).pipe(
      tap(() => {
        this.loadInitialData();
     })
    );
  }

  deleteClient(client: Client) {
    /* This is used to delete a client from the database */
    return this.http.delete('http://localhost:3000/clients/' + client.id).pipe(
      tap(() => {
        this.loadInitialData();
     })
    );
  }

  editClient(client: Client) {
    /* This is used to edit a client in the database */
    return this.http.patch('http://localhost:3000/clients/' + client.id, client).pipe(
      tap(() => {
        this.loadInitialData();
     })
    );
  }

  editMeeting(meeting: Meeting) {
    /* This is used to edit a meeting in the database */
    return this.http.patch('http://localhost:3000/meetings/' + meeting.id, meeting).pipe(
      tap(() => {
        this.loadInitialData();
     })
    );
  }

  deleteMeeting(meeting: Meeting) {
    /* This is used to delete a meeting from the database */
    return this.http.delete('http://localhost:3000/meetings/' + meeting.id).pipe(
      tap(() => {
        this.loadInitialData();
     })
    );
  }
}