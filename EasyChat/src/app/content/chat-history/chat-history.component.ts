import { Component, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements AfterViewChecked {

  constructor(private sanitizer: DomSanitizer) {}

  private reMessages: string[] = [];

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  @Input()
  set receivedMessages(messages: string[]) {
    this.reMessages = messages;
  }

  get receivedMessages(): string[] {
    return this.reMessages;
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  allMessages(): string {
    return this.receivedMessages.join('');
  }

  isSystemMessage(message: string): boolean {
    return message.includes('ist dem Chat beigetreten.') || message.includes('hat den Nicknamen zu');
  }

  sanitizeMessage(message: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(message);
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error(err);
    }
  }
}
