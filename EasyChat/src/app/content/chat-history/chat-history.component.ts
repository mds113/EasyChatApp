import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewChecked, Output} from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  //template: `<p *ngFor="let person of receivedMessages" id="allmessages" class="mt-2">{{person}}</p>`,
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  constructor(public pService: PersonService) {}
 
 
  private reMessages: string[] = [];
  @Output()
  public nickname: string = '';
  
  
  
  get receivedMessages(): string[]{
    
    return this.reMessages;
  }

  @Input()
  set receivedMessages(messages: string[]){
    this.reMessages = messages;
    this.nickname = this.pService.nickname;
  }

  allMessages():string{
   var returnString:string = '';
   var messageArray:String[] = [];
   messageArray = this.receivedMessages;
   for(var index in messageArray)
   {
    alert(messageArray[index]);
    returnString += messageArray[index]
   }
   return returnString;
  }
 
}
