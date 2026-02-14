import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosShow } from './eventos-show';

describe('EventosShow', () => {
  let component: EventosShow;
  let fixture: ComponentFixture<EventosShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
