import { Component,Input,Output,EventEmitter } from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent {

  constructor(public pService: PersonService) {}
  
  private nicknameInput: string = '';


  public get nickname(): string{
    return this.nicknameInput;
  }


  @Output() 
  nicknameChange = new EventEmitter<string>();

  @Input()
  public set nickname(nicknameIn:string){
    this.nicknameInput = nicknameIn;
  }
  
  public setNickname(): void{

    if(!this.CheckInputString(this.nicknameInput)){
      alert('Nur Buchstaben und Zahlen sind zulässig');
      this.nickname = '';
    }else{
      if (this.nicknameInput){
        this.pService.nickname = this.nickname;
        this.nicknameChange.emit(this.pService.nickname);
        this.nickname = '';
      }
    }

    
  }

  public CheckInputString(inputNickname:String): boolean {
      const result = inputNickname.match(/^[a-zA-Z0-9]+$/);

      return result !== null;


  }
}
