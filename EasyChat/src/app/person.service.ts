import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private nicknameServ: string = '';

  public get nickname() : string{
    return this.nicknameServ;
  }

  public set nickname(nicknameIn: string){
    this.nicknameServ = nicknameIn;
  }

 
}
