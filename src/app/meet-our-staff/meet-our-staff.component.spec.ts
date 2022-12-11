import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurStaffComponent } from './meet-our-staff.component';

describe('MeetOurStaffComponent', () => {
  let component: MeetOurStaffComponent;
  let fixture: ComponentFixture<MeetOurStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetOurStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetOurStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
