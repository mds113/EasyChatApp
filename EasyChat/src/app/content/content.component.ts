import { Component, EventEmitter, Output} from '@angular/core';
import { PersonService } from 'src/app/person.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor (public pService: PersonService,
    private sanitizer: DomSanitizer) {}

  private messages: string[] = [];
  public currentNickname : string = '';
   

  get getMessages(): string[]{
    return this.messages;
  }
  set setMessages(messages:string[]){
    this.messages = messages;
  }

  

  addMessage(message:string){
    
    let numberOfChars: number = 0;
    let nicknameLoc: string = '<b>'+ this.pService.nickname + '</b>' + ': ';
    let modifiedText: string = '';
    let blankspaceString: string = '';
    let sanitizedMessage: string = '';
    numberOfChars = nicknameLoc.length;

    for(let i = 0; i < 30 - numberOfChars; i++){
      blankspaceString += ' ';
    }

  modifiedText = message.replace(/[\n\r]+/g, '\n'+ '                             ');

    this.messages.unshift(nicknameLoc + blankspaceString + modifiedText);
    this.currentNickname = this.pService.nickname;
  }

  addNicknametoDisplay(nichnameIn:string){
    this.currentNickname = nichnameIn;
  }

  
  sanitizeMessage(textIn: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(textIn);
  }
  

}
