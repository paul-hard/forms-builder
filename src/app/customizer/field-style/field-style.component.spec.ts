import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldStyleComponent } from './field-style.component';

describe('FieldStyleComponent', () => {
  let component: FieldStyleComponent;
  let fixture: ComponentFixture<FieldStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
