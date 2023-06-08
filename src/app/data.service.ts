import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getClientMeetings() {
    return this.http.get('http://localhost:3000/clients');
  }
  addClientMeeting(meeting: object) {
    return this.http.post('http://localhost:3000/meetings', meeting);
  }

  getProjects() {
    return this.http.get('/projects');
  }
  addProject(project: object) {
    return this.http.post('/projects', project);
  }

  getClients(): Observable<Client[]> { /* Observable is a stream of data */
    return this.http.get<Client[]>('http://localhost:3000/clients'); /* Return an observable of type Client[] */
  }
  addClient(client: object) {
    return this.http.post('http://localhost:3000/clients', client);
  }

  getInquiries() {
    return this.http.get("/inquiries");
  }
  addInquiry(inquiry: object) {  
    return this.http.post('/inquiries', inquiry);
  }
}
