import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRequirementComponent } from './entry-requirement.component';

describe('EntryRequirementComponent', () => {
  let component: EntryRequirementComponent;
  let fixture: ComponentFixture<EntryRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
