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
  postClientMeetings(meeting: object) {
    return this.http.post('/clients', meeting);
  }

  getProjects() {
    return this.http.get('/projects');
  }
  postProject(project: object) {
    return this.http.post('/projects', project);
  }

  getClients() {
    return this.http.get("/clients");
  }
  postClients(client: object) {
    return this.http.post('/clients', client);
  }

  getInquiries() {
    return this.http.get("/inquiries");
  }
  postInquiries(inquiry: object) {  
    return this.http.post('/inquiries', inquiry);
  }
}
