import { Component, EventEmitter, Output} from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor (public pService: PersonService) {}

  private messages: string[] = [];
  public currentNickname : string = '';

  get getMessages(): string[]{
    return this.messages;
  }
  set setMessages(messages:string[]){
    this.messages = messages;
  }

  

  addMessage(message:string){
    this.messages.unshift( '<b>'+ this.pService.nickname + '</b>' + ': ' + message);
    this.currentNickname = this.pService.nickname;
  }

  addNicknametoDisplay(nichnameIn:string){
    this.currentNickname = nichnameIn;
  }

}
