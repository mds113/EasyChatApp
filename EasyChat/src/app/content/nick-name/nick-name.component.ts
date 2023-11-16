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
  
  public setNickname(): void {
    if (!this.CheckInputString(this.nicknameInput)) {
      alert('Nur Buchstaben und Zahlen sind zulässig');
      this.nicknameInput = '';
    } else {
      if (this.nicknameInput !== this.pService.nickname) {
        const previousNickname = this.pService.nickname; // Speichern des vorherigen Nicknamens
        this.pService.nickname = this.nicknameInput;

        if (!previousNickname) {
          // Übermittle die Meldung an ContentComponent, dass der Benutzer dem Chat beigetreten ist
          this.nicknameChange.emit(`${this.pService.nickname} ist dem Chat beigetreten.`);
        } else {
          // Übermittle die Meldung an ContentComponent, dass der Nickname geändert wurde
          this.nicknameChange.emit(`${previousNickname} hat den Nicknamen zu ${this.pService.nickname} geändert.`);
        }
        this.nicknameInput = '';
      } else {
        alert('Der eingegebene Name ist bereits der aktuelle Name.');
        this.nicknameInput = '';
      }
    }
  }

  public CheckInputString(inputNickname:String): boolean {
      const result = inputNickname.match(/^[a-zA-Z0-9]+$/);

      return result !== null;


  }
}
