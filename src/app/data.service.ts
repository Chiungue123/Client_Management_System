import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get('/clients');
  }

  getProjects() {
    return this.http.get('/projects');
  }

  postClient(client: any) {
    return this.http.post('/clients', client);
  }

  postProject(project: any) {
    return this.http.post('/projects', project);
  }
}
