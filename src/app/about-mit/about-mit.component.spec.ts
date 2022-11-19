import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMITComponent } from './about-mit.component';

describe('AboutMITComponent', () => {
  let component: AboutMITComponent;
  let fixture: ComponentFixture<AboutMITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMITComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
