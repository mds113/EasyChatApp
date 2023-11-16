import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBarComponent } from './content/chat-bar/chat-bar.component';
import { ContentComponent } from './content/content.component';
import { ChatHistoryComponent } from './content/chat-history/chat-history.component';
import { NickNameComponent } from './content/nick-name/nick-name.component'; // Import NickNameComponent

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      ContentComponent,
      ChatBarComponent,
      ChatHistoryComponent,
      NickNameComponent
    ],
  }).compileComponents());

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have as title 'EasyChat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('EasyChat');
  });
});
