// add.js - Hanterar formuläret för att lägga till arbetslivserfarenhet
import { addWork } from "./api.js";

// Hämta referenser till formuläret och meddelandeelementet
const form = document.getElementById("form");
const message = document.getElementById("message");

// Lyssna på formulärets submit-event
form.addEventListener("submit", async (e) => {
    // Förhindra att sidan laddas om
    e.preventDefault();

    // Skapa ett arbetslivserfarenhetsobjekt från formulärdata
    const work = {
        // Trimma inmatade värden och konvertera år till ett nummer
        company: form.company.value.trim(),
        role: form.role.value.trim(),
        description: form.description.value.trim(),
        years: Number(form.years.value)
    };

    // Validera inmatade data och samla eventuella felmeddelanden
    let errors = [];

    // Kontrollera att alla fält är ifyllda och att år är ett positivt tal
    if (!work.company) errors.push("Företag saknas");
    if (!work.role) errors.push("Roll saknas");
    if (!work.description) errors.push("Beskrivning saknas");
    if (!work.years || work.years <= 0) errors.push("Ogiltigt antal år");

    // Om det finns fel, visa dem och avbryt processen
    if (errors.length > 0) {
        message.innerHTML = errors.join("<br>");
        message.style.color = "red";
        return;
    }

    // Skicka arbetslivserfarenhetsobjektet till API:et för att spara det
    await addWork(work);

    // Visa ett framgångsmeddelande och återställ formuläret
    message.textContent = "✔ Sparad!";
    message.style.color = "green";

    // Återställ formuläret för att göra det redo för nästa inmatning
    form.reset();
});