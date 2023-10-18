import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  // Die Komponente implementiert OnInit

  constructor() {}
  /* Wenn irgendeine Component myDemoComponent irgendwo
  genutzt wird (…<app-myDemo></app-myDemo>…), dann
  wird der Constructor der Klasse myDemoComponent zur
  Component aufgerufen, der eine Instanz der Klasse
  erzeugt, auf die innerhalb der Klassendefinition mittels
  Verwendung von this zugegriffen werden kann. */

  // Hier werden die Eigenschaften der Komponente deklariert
  inputText: string = ''; // Das Eingabefeld
  // TODO noch unklar was später genau gebraucht wird
  message: string = ''; // Eine Nachricht
  //messages: string[] = []; // Für später, falls Chatverlauf ersichtlich sein soll
  outputText: string = ''; // Ausgabe-Nachricht

  ngOnInit() {
    // Die ngOnInit-Methode wird aufgerufen, wenn die Komponente initialisiert wird
    this.enableButton(); // Initialisierung des Buttons beim Laden der Seite
  }

  // Diese Methode wird aufgerufen, wenn der "Senden"-Button geklickt wird
  // TODO Momentan wird jetzt das versenden von leeren msgs verhindert mit inputText.value.trim().length === 0; vom Kunden gewünscht?
  sendMessage() {
    if (this.inputText.trim() !== '') {
      //this.addMessage(this.inputText); // Nachricht dem Chat-Verlauf Array hinzufügen
      this.message = this.inputText; // Die Ausgabe-Nachricht wird auf den Wert des Eingabefelds gesetzt
      this.inputText = ''; // TODO abklären was geschehen soll, sobald auf senden geklickt wurde: Nachricht löschen aus dem Nachrichtenfeld?
    }
  }
  
  // noch keine Anforderung
  // addMessage(newMessage: string) {
  //   this.messages.push(newMessage); // Fügt neue Nachricht unten im Array hinzu
  //   this.messages.unshift(newMessage); // Fügt neue Nachricht oben im Array hinzu
  // }

  // Diese Methode wird verwendet, um den Status des "Senden"-Buttons zu aktualisieren
  enableButton() {
    const inputText = <HTMLInputElement>document.getElementById('inputText'); // Das Eingabefeld-Element
    const submitButton = <HTMLButtonElement>(
      document.getElementById('submitButton')
    ); // Der "Senden"-Button

    if (inputText && submitButton) {
      // Überprüfen, ob die Elemente existieren
      submitButton.disabled = inputText.value.trim().length === 0; // Deaktivieren des Buttons, wenn das Eingabefeld leer ist
    }
  }
}

