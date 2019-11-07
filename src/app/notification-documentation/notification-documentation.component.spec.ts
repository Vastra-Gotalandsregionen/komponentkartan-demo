import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDocumentationComponent } from './notification-documentation.component';

describe('NotificationDocumentationComponent', () => {
  let component: NotificationDocumentationComponent;
  let fixture: ComponentFixture<NotificationDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
