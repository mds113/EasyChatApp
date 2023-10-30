import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {

  constructor() {}
  

  
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

      if (this.messageText){
        this.chatMessageChange.emit(this.chatMessage);
        this.chatMessage = '';
      }
  }
  
}

