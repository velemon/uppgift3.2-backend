### Moment 3 - Uppgift 2
Detta repository innehåller frontend-delen av en webbapplikation som konsumerar ett REST-baserat API för att hantera arbetserfarenheter.

Applikationen är byggd med HTML, CSS och JavaScript och använder Fetch API för att kommunicera med den separat byggda backend-tjänsten.

## Syfte
Syftet med uppgiften är att kunna skapa och administrera MongoDB-databaser samt skapa en REST-baserad webbtjänst med NodeJs, Express och MongoDb.

## Funktioner
- Hämtar arbetserfarenheter från API (GET)
- Lägger till nya arbetserfarenheter (POST)
- Raderar arbetserfarenheter (DELETE)
- Validerar formulärdata innan skickning
- Visar data dynamiskt i en lista på startsidan

# API
Applikationen kommunicerar med ett REST API som är byggt med Node.js och Express.

API-endpoint:

http://localhost:5000/api/work

Databas

Backend använder MongoDB som databasserver och hanteras med hjälp av Mongoose. Data lagras som dokument i en collection.

## Kom igång
1. Klona repot
2. Öppna projektet i VS Code
3. Starta frontend med Live Server
4. Kontrollera att backend körs
5. Öppna index.html i webbläsaren
6. Kontrollera att backend körs på: http://localhost:5000/

Backend måste vara igång för att applikationen ska fungera korrekt eftersom all data hämtas via API.