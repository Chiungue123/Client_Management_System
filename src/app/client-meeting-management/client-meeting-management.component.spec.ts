import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeetingManagementComponent } from './client-meeting-management.component';

describe('ClientMeetingManagementComponent', () => {
  let component: ClientMeetingManagementComponent;
  let fixture: ComponentFixture<ClientMeetingManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientMeetingManagementComponent]
    });
    fixture = TestBed.createComponent(ClientMeetingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
