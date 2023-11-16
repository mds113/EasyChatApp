import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBarComponent } from './chat-bar.component';
import { FormsModule } from '@angular/forms';

describe('ChatBarComponent', () => {
  let component: ChatBarComponent;
  let fixture: ComponentFixture<ChatBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBarComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(ChatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
