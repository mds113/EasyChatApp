import { Component, EventEmitter, Output, ɵsetAlternateWeakRefImpl} from '@angular/core';
import { PersonService } from 'src/app/person.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TemplateBindingParseResult } from '@angular/compiler';

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
    let temmdu: string  ='';
    let newLineBlankSpace: string ='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
    //let newLineBlankSpace: string = '                                           ';
    numberOfChars = nicknameLoc.length;
    numberOfChars = this.pService.nickname.length;

    
    alert(numberOfChars);

    for(let i = 0; i < numberOfChars + 2 ; i++){
      blankspaceString += '&nbsp';
    }

    

/*
    for(let i = 0; i < 23 - numberOfChars; i++){
      blankspaceString += ' ';
    }
*/


    modifiedText = message.replace(/[\n\r]+/g, '\n'+ blankspaceString);
    //modifiedText = message.replace(/[\n\r]+/g, '\n');
    this.messages.unshift(nicknameLoc + modifiedText);
    //this.messages.unshift(this.alignChatText(nicknameLoc + '  ' +modifiedText));


    this.currentNickname = this.pService.nickname;
  }

  addNicknametoDisplay(nichnameIn:string){
    this.currentNickname = nichnameIn;
  }



  
  alignChatText(chat: string): string {
    const lines = chat.split('\n');
    if (lines.length < 2) {
      // No alignment needed if there's only one line
      return chat;
    }
  
    // Find the length of the nickname (assumed to be the first word in the first line)
    const nicknameLength = lines[0].split(' ')[0].length;
  
    // Calculate the alignment position
    const alignTo = nicknameLength + 1; // Adding 1 for space after the nickname
  
    // Align the text lines
    const alignedLines = lines.map((line, index) => {
      if (index === 0) {
        // Keep the first line as is (contains the nickname)
        return line;
      } else {
        // Calculate the number of spaces needed to align the text
        const spacesNeeded = alignTo - line.length;
        // Add the required number of spaces before the text
        return ' '.repeat(spacesNeeded) + line;
      }
    });
  
    return alignedLines.join('\n');
  }

}
