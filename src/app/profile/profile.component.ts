import { Component, Input } from '@angular/core';

export interface Client {
  name: string;
  id: number;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  /* Add client variables */
  name!: string;
  email!: string;
  phone!: string;

  /* Get clients variables from parent component */
  @Input() client!: Client;
} 
