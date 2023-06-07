import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getClientMeetings() {
    return this.http.get('/meetings');
  }
  addClientMeeting(meeting: object) {
    return this.http.post('/clients', meeting);
  }

  getProjects() {
    return this.http.get('/projects');
  }
  addProject(project: object) {
    return this.http.post('/projects', project);
  }

  getClients() {
    return this.http.get('http://localhost:3000/clients');
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
