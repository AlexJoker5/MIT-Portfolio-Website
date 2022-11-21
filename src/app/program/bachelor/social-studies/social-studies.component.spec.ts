import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStudiesComponent } from './social-studies.component';

describe('SocialStudiesComponent', () => {
  let component: SocialStudiesComponent;
  let fixture: ComponentFixture<SocialStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
