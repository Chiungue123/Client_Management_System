import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent {
  isModalVisible!: boolean;
  isClientModalVisible!: boolean;

  constructor (private dataService: DataService) { 

    this.dataService.isModalVisible$.subscribe(isVisible => {
      this.isModalVisible = isVisible; // Assigning the visibility to the local variable
    });
    
    this.dataService.isClientModalVisible$.subscribe(Visible => {
      this.isClientModalVisible = Visible; // Assigning the visibility to the local variable
    });
  }

  openModal() {
    this.dataService.openModal();
  }

  openClientModal() {
    console.log("Opening client modal from NavBar")
    this.dataService.openClientModal();
  }
}
