import { Component, Input,Output,EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {

  constructor(public pService: PersonService, private sanitizer: DomSanitizer) {}
  
  private messageText: string = '';

  
  get chatMessage(): string {
    return this.messageText;
  }

@Output() 
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value:string) {
    this.messageText = value;
  }
  
  
  public sendMessage(): void {
    
    this.messageText = this.messageText.trim()
    
    if(this.pService.nickname==''){
      alert('Nickname ist leer.');
    }else{
      if (this.chatMessage){
        this.chatMessageChange.emit(this.chatMessage);
        this.chatMessage = '';
      }
    }
      
  }

  sanitizeInput(inputText: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(inputText);
}

  
}

