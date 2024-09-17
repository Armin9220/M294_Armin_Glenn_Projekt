# Kontaktverwaltungsapp

**Projekt:** Kontaktverwaltungsapp  
**Autoren:** Armin Vehapi & Glenn Spirig  
**Lehrperson:** Sven Schirmer  
**Modul:** 294  
**Datum:** 17.09.2024

## Inhaltsverzeichnis

1. [Projektidee](#projektidee)
2. [Anforderungskatalog](#anforderungskatalog)
3. [Komponentendiagramm](#komponentendiagramm)
4. [Storyboard](#storyboard)
5. [REST-Schnittstellen](#rest-schnittstellen)
6. [Testplan für manuelle Tests](#testplan-für-manuale-tests)
7. [Durchführung des Testplans](#durchführung-des-testplans)
8. [Installationsanleitung](#installationsanleitung)
9. [Hilfestellungen](#hilfestellungen)
10. [Fazit](#fazit)

## Projektidee

Die Kontaktverwaltungsapp ermöglicht es Benutzern, ihre persönlichen und beruflichen Kontakte effizient zu organisieren. Mit der App können Benutzer neue Kontakte hinzufügen, bestehende Kontakte bearbeiten, nach Kontakten suchen und diese löschen. Die Anwendung bietet eine benutzerfreundliche Oberfläche, die eine schnelle und einfache Verwaltung der Kontaktinformationen ermöglicht. Ziel ist es, den Alltag der Nutzer durch eine optimierte und intuitive Kontaktverwaltung zu erleichtern.

## Anforderungskatalog

**Kernaufgaben der Applikation:**
- **Erstellen von Kontakten:** Hinzufügen neuer Kontakte mit Name, Telefonnummer, E-Mail und weiteren Details.
- **Bearbeiten von Kontakten:** Aktualisieren oder Korrigieren vorhandener Kontakte.
- **Löschen von Kontakten:** Entfernen irrelevanter oder veralteter Kontakte.
- **Suchen von Kontakten:** Schnelle und einfache Suche nach Kontakten.
- **Sortieren von Kontakten:** Alphabetische Sortierung nach Vor- oder Nachnamen.

**User Stories und Akzeptanzkriterien:**
- **Kontakt erstellen:** Benutzer können neue Kontakte mit einem Formular hinzufügen. Der neue Kontakt erscheint in der Kontaktliste.
- **Kontakt bearbeiten:** Ein „Bearbeiten“-Button führt zu einem Formular zur Bearbeitung von Kontaktinformationen.
- **Kontakt suchen:** Ein Suchfeld zeigt dynamisch Ergebnisse basierend auf der Eingabe des Nutzers.
- **Kontakt löschen:** Der Kontakt wird nach Bestätigung des Löschvorgangs entfernt und ist nicht mehr sichtbar.
- **Kontaktliste sortieren:** Die Liste kann alphabetisch nach Vor- oder Nachnamen sortiert werden.

## Komponentendiagramm

Das Komponentendiagramm zeigt die Beziehungen zwischen den UI-Komponenten der App:

- **App Component:** Hauptkomponente, die alle anderen Komponenten enthält.
- **ContactList Component:** Zeigt die Liste aller Kontakte an.
- **Contact Component:** Stellt einen einzelnen Kontakt dar.
- **ContactForm Component:** Formular zum Erstellen und Bearbeiten von Kontakten.
- **SearchBar Component:** Suchfeld zur schnellen Auffindung von Kontakten.
- **SortButton Component:** Schaltfläche zur Sortierung der Kontaktliste.

Dieses Diagramm visualisiert auch den Einsatz von `useState` und anderen Hooks zur Zustandshandhabung.

## Storyboard

Das Storyboard veranschaulicht den Ablauf und die Benutzeroberfläche der Anwendung:

- **Startseite:** Zeigt die Kontaktliste und bietet Such- und Sortierfunktionen.
- **Neuer Kontakt:** Über einen Button gelangt der Benutzer zum Formular zum Erstellen eines neuen Kontakts.
- **Kontakt bearbeiten:** Klicken auf „Bearbeiten“ öffnet ein Formular zur Änderung des Kontakts.
- **Kontakt löschen:** Klicken auf „Löschen“ entfernt den Kontakt nach Bestätigung dauerhaft.

## REST-Schnittstellen

**GET /contacts:** Gibt alle gespeicherten Kontakte zurück.  
**Beispiel-Antwort:**
```json
[
  {
    "id": 1,
    "name": "Max Mustermann",
    "phone": "0123-456789",
    "email": "max@example.com"
  }
]
POST /contacts: Erstellt einen neuen Kontakt.
Beispiel-Request:

json
{
  "name": "Max Mustermann",
  "phone": "0123-456789",
  "email": "max@example.com"
}
PUT /contacts/:id: Bearbeitet einen vorhandenen Kontakt.
Beispiel-Request:

json
{
  "name": "Max Mustermann",
  "phone": "9876-543210",
  "email": "max.new@example.com"
}
DELETE /contacts/:id: Löscht einen vorhandenen Kontakt.
Beispiel-Request:

json

{
  "id": 1
}


Testplan für manuelle Tests     
Testfall	                    Beschreibung	                                     Erwartetes Ergebnis
Kontakt hinzufügen	            Einen neuen Kontakt erstellen.	                     Kontakt wird erfolgreich zur Liste hinzugefügt.
Kontakt bearbeiten              Einen vorhandenen Kontakt ändern und speichern.	     Änderungen sind nach dem Speichern sichtbar.
Kontakt löschen	                Einen Kontakt löschen und bestätigen.	             Kontakt wird aus der Liste entfernt.
Kontakt suchen	                Einen Kontakt durch Eingabe des Namens suchen.	     Gesuchter Kontakt wird angezeigt.
Kontaktliste sortieren	        Die Liste alphabetisch nach dem Nachnamen sortieren. Kontakte sind korrekt sortiert.

Durchführung des Testplans
Testfall        	    Ergebnis
Kontakt hinzufügen	    Erfolgreich
Kontakt bearbeiten	    Erfolgreich
Kontakt löschen	        Erfolgreich
Kontakt suchen	        Erfolgreich
Kontaktliste sortieren	Erfolgreich

## Installationsanleitung
Voraussetzungen: Node.js und npm müssen installiert sein.

Installation:

Projekt-Repository von GitHub klonen:
git clone [Repository-URL]

In das Projektverzeichnis wechseln:
cd contact-management-app

Abhängigkeiten installieren:
npm install

Anwendung starten:
Applikation starten:
npm run dev

Öffne einen Browser und gehe auf http://localhost:3000, um die Anwendung zu sehen.


## Hilfestellungen
Bei der Entwicklung der Applikation haben wir folgende Quellen genutzt:

Unterstützung durch Mitlernende und Dozenten.
React Dokumentation Stack Overflow für technische Fragen.

##  Fazit
Die Entwicklung der Kontaktverwaltungsapp hat unser Verständnis für die Nutzung von React, REST-Schnittstellen und Zustandshandhabung mit Hooks vertieft. Die Applikation erfüllt alle gestellten Anforderungen und bietet eine intuitive Benutzererfahrung.