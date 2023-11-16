// content.component.ts
import { Component } from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(public pService: PersonService) {}

  private messages: string[] = [];
  public currentNickname: string = '';

  get getMessages(): string[] {
    return this.messages;
  }

  set setMessages(messages: string[]) {
    this.messages = messages;
  }

  addMessage(message: string) {
    let displayNickname = true;

    let numberOfChars: number = 0;
    let nicknameLoc: string = '';
    let modifiedText: string = '';
    let blankspaceString: string = '';
    let blankspaceString2: string = '';
    
    // Überprüfe, ob es sich um eine Systemmeldung handelt (beigetreten oder Nickname geändert)
    if (message.includes('ist dem Chat beigetreten.') || message.includes('hat den Nicknamen zu')) {
      displayNickname = false;
    }

    if (displayNickname && this.pService.nickname) {
      numberOfChars = this.pService.nickname.length;
      nicknameLoc = '<b>' + this.pService.nickname + '</b>' +':';
      numberOfChars = this.pService.nickname.length;

      for (let i = 0; i < (25 - numberOfChars); i++) {
        blankspaceString += ' ';
      }


      for (let i = 0; i < 28 ; i++) {
        blankspaceString2 += ' ';
      }

    }

    for (let i = 0; i < 28 ; i++) {
      blankspaceString2 += ' ';
    }

    modifiedText = message.replace(/[\n\r]+/g, '\n' +  blankspaceString2);


    const newMessage = nicknameLoc + blankspaceString + modifiedText;
    this.messages.push(newMessage);
    this.currentNickname = this.pService.nickname;
  }

  addNicknametoDisplay(nicknameIn: string) {
    // Übermittle die Meldung an die ChatHistoryComponent
    this.addMessage(`${nicknameIn}`);
  }

}
