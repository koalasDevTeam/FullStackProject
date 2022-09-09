import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserMessageComponent } from './no-user-message.component';

describe('NoUserMessageComponent', () => {
  let component: NoUserMessageComponent;
  let fixture: ComponentFixture<NoUserMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoUserMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
