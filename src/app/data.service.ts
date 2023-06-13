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
    console.log("loading initial data")
   }

  loadInitialData(){
    this.http.get<Client[]>('http://localhost:3000/clients').subscribe(clients => {
      this.clientsData.next(clients);
    });
    this.http.get<Meeting[]>('http://localhost:3000/meetings').subscribe(meetings => {
      this.meetingsData.next(meetings);
    });
  }

  // These will be used to automatically update the data in the components when the data changes
  clientsData = new BehaviorSubject<Client[]>([]);
  meetingsData = new BehaviorSubject<Meeting[]>([]);
  selectedClient = new BehaviorSubject<Client | null>(null);
  selectedMeeting = new BehaviorSubject<Meeting | null>(null);

  private isEditMeetingModelVisibleSource = new BehaviorSubject<boolean>(false);
  isEditMeetingModalVisible$ = this.isEditMeetingModelVisibleSource.asObservable(); // This is used to share data between components

  openEditMeetingModal() {
    console.log("opening edit meeting modal")
    this.isEditMeetingModelVisibleSource.next(true);
  }
  closeEditMeetingModal() {
    this.isEditMeetingModelVisibleSource.next(false);
  }

  private isModalVisibleSource = new BehaviorSubject<boolean>(false); 
  isModalVisible$ = this.isModalVisibleSource.asObservable(); // This is used to share data between components

  openModal() {
    this.isModalVisibleSource.next(true);
  }
  closeModal() {
    this.isModalVisibleSource.next(false);
  }

  private isClientModalVisibleSource = new BehaviorSubject<boolean>(false);
  isClientModalVisible$ = this.isClientModalVisibleSource.asObservable(); // This is used to share data between components

  openClientModal() {
    this.isClientModalVisibleSource.next(true);
  }
  closeClientModal() {
    this.isClientModalVisibleSource.next(false);
  }

  private isEditModalVisibleSource = new BehaviorSubject<boolean>(false);
  isEditModalVisible$ = this.isEditModalVisibleSource.asObservable(); // This is used to share data between components

  openEditModal() {
    this.isEditModalVisibleSource.next(true);
  }
  closeEditModal() {
    this.isEditModalVisibleSource.next(false);
  }

  getMeetingsData(): Observable<Meeting[]> {
    console.log("Getting meetings data from observable")
    return this.meetingsData.asObservable();
  }
  addClientMeeting(meeting: object) {
    console.log("Adding meeting")
    return this.http.post('http://localhost:3000/meetings', meeting).pipe(
      tap(() => {
        this.loadInitialData();
        console.log("Reloading meetings")
      })
    );
  }

  getProjects() {
    return this.http.get('/projects');
  }
  addProject(project: object) {
    return this.http.post('/projects', project);
  }

  getClientsData(): Observable<Client[]> {
    console.log("Getting clients data from observable")
    return this.clientsData.asObservable();
  }
  addClient(client: object) {
    console.log("Adding client")
    return this.http.post('http://localhost:3000/clients', client).pipe(
      tap(() => {
        this.loadInitialData();
        console.log("Reloading clients")
     })
    );
  }

  getInquiries() {
    return this.http.get("/inquiries");
  }
  addInquiry(inquiry: object) {  
    return this.http.post('/inquiries', inquiry);
  }

  deleteClient(client: Client) {
    /* This is used to delete a client from the database */
    return this.http.delete('http://localhost:3000/clients/' + client.id).pipe(
      tap(() => {
        this.loadInitialData();
        console.log("Reloading clients after delete")
     })
    );
  }

  editClient(client: Client) {
    /* This is used to edit a client in the database */
    return this.http.patch('http://localhost:3000/clients/' + client.id, client).pipe(
      tap(() => {
        this.loadInitialData();
        console.log("Reloading clients after edit")
     })
    );
  }

  editMeeting(meeting: Meeting) {
    /* This is used to edit a meeting in the database */
    return this.http.patch('http://localhost:3000/meetings/' + meeting.id, meeting).pipe(
      tap(() => {
        this.loadInitialData();
        console.log("Reloading meetings after edit")
     })
    );
  }

  deleteMeeting(meeting: Meeting) {
    /* This is used to delete a meeting from the database */
    return this.http.delete('http://localhost:3000/meetings/' + meeting.id).pipe(
      tap(() => {
        this.loadInitialData();
        console.log("Reloading meetings after delete")
     })
    );
  }
}