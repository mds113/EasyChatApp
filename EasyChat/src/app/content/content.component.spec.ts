import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { ContentComponent } from './content.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { NickNameComponent } from './nick-name/nick-name.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent, ChatBarComponent, ChatHistoryComponent, NickNameComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
