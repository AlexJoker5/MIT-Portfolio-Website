import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerStudiesComponent } from './computer-studies.component';

describe('ComputerStudiesComponent', () => {
  let component: ComputerStudiesComponent;
  let fixture: ComponentFixture<ComputerStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
