import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjetComponent } from './subjet.component';

describe('SubjetComponent', () => {
  let component: SubjetComponent;
  let fixture: ComponentFixture<SubjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
