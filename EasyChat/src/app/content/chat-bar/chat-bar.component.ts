import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit { // Die Komponente implementiert OnInit

  constructor() { } 
  /* Wenn irgendeine Component myDemoComponent irgendwo
  genutzt wird (…<app-myDemo></app-myDemo>…), dann
  wird der Constructor der Klasse myDemoComponent zur
  Component aufgerufen, der eine Instanz der Klasse
  erzeugt, auf die innerhalb der Klassendefinition mittels
  Verwendung von this zugegriffen werden kann. */

  // Hier werden die Eigenschaften der Komponente deklariert
  inputText: string = ''; // Das Eingabefeld
  message: string = ''; // Eine Nachricht
  outputText: string = ''; // Ausgabe-Nachricht

  ngOnInit() { // Die ngOnInit-Methode wird aufgerufen, wenn die Komponente initialisiert wird
    this.enableButton(); // Initialisierung des Buttons beim Laden der Seite
  }

  // Diese Methode wird aufgerufen, wenn der "Senden"-Button geklickt wird
  // TODO Momentan wird jetzt das versenden von leeren msgs verhindert mit inputText.value.trim().length === 0; vom Kunden gewünscht?
  sendMessage() {
    this.outputText = this.inputText; // Die Ausgabe-Nachricht wird auf den Wert des Eingabefelds gesetzt
    this.inputText = ''; // TODO abklären was geschehen soll, sobald auf senden geklickt wurde: Nachricht löschen aus dem Nachrichtenfeld?
  }

  // Diese Methode wird verwendet, um den Status des "Senden"-Buttons zu aktualisieren
  enableButton() {
    const inputText = <HTMLInputElement>document.getElementById("inputText"); // Das Eingabefeld-Element
    const submitButton = <HTMLButtonElement>document.getElementById("submitButton"); // Der "Senden"-Button
      
    if (inputText && submitButton) { // Überprüfen, ob die Elemente existieren
      submitButton.disabled = inputText.value.trim().length === 0; // Deaktivieren des Buttons, wenn das Eingabefeld leer ist
    }
  }
}

