import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  //template: `<p *ngFor="let person of receivedMessages" id="allmessages" class="mt-2">{{person}}</p>`,
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  constructor() {}

  private reMessages: string[] = [];
  //private reMessageText: string = '';
  @Input()
  public testvariable : string[] = [];
  
  get receivedMessages(): string[]{
    //alert(this.reMessages);
    
    return this.reMessages;
  }
  @Input()
  set receivedMessages(messages: string[]){
    this.reMessages = messages;
  }


  allMessages():string{
   var returnString:string = '';
   var messageArray:String[] = [];
   messageArray = this.receivedMessages;
   for(var index in messageArray)
   {
    //alert(messageArray[index]);
    returnString += messageArray[index]
   }

   return returnString;

  }

  
  /*
  get receivedMessage(): string{
    return this.reMessageText;
  }


  @Input()
  set receivedMessage(value:string){
    this.reMessageText = value;
  }
 */ 




}
