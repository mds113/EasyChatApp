import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  private messages: string[] = [];

  get getMessages(): string[]{
    return this.messages;
  }
  set setMessages(messages:string[]){
    this.messages = messages;
  }

  

  addMessage(message:string){
    this.messages.push(message);
  }


  /*
  private messages: string[] = [];

  get getMessages(): string[]{
    return this.messages;
  }
  set setMessages(messages:string[]){
    this.messages = messages;
  }

  addMessage(message:string){
    this.messages.push(message);
  }
*/

}
