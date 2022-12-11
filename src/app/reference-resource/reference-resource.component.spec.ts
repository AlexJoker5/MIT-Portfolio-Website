import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceResourceComponent } from './reference-resource.component';

describe('ReferenceResourceComponent', () => {
  let component: ReferenceResourceComponent;
  let fixture: ComponentFixture<ReferenceResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
