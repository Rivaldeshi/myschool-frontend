import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjetComponent } from './create-subjet.component';

describe('CreateSubjetComponent', () => {
  let component: CreateSubjetComponent;
  let fixture: ComponentFixture<CreateSubjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
