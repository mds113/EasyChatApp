import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {

  constructor() {}
  

  
  private messageText: string = '';
  //private messages: string[] = [];

  //public message: string = '';

  // @Input()
  // chatMessage: string;
  
  get chatMessage(): string {
    return this.messageText;
  }
  /*
  get chatMessages(): string[] {
    return this.messages;
  }
  */

@Output() 
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value:string) {
    this.messageText = value;
    //this.chatMessageChange.emit(this.messageText);
  }

  /*
  @Input()
  set chatMessages(value:string)
  {
    this.messages.push(value);
  }
  */

  public sendMessage(): void {

      if (this.messageText){
        //this.messages.push(this.messageText + '<br/>');
        this.chatMessageChange.emit(this.chatMessage);
        this.chatMessage = '';
      }
  }
  
}

