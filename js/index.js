// index.js - Hanterar att visa och radera arbeten i listan
import { getWorks, deleteWork } from "./api.js";

// Hämta elementet där arbeten ska visas
const list = document.getElementById("list");

// Funktion för att ladda och visa arbeten
async function load() {
    const data = await getWorks();

    // Rensa listan innan vi lägger till nya element
    list.innerHTML = "";

    // Skapa och lägg till element för varje arbete
    data.forEach(work => {
        const div = document.createElement("div");

        // Lägg till en klass för styling
        div.classList.add("card");

        // Fyll div:en med information om arbetet
        div.innerHTML = `
            <h3>${work.company}</h3>
            <p><b>Roll:</b> ${work.role}</p>
            <p>${work.description}</p>
            <p><b>År:</b> ${work.years}</p>
            <button class="delete">Radera</button>
        `;

        // Lägg till en event listener för radera-knappen
        div.querySelector(".delete").addEventListener("click", async () => {
            // Radera arbetet och ladda om listan
            await deleteWork(work._id);
            load();
        });

        // Lägg till div:en i listan
        list.appendChild(div);
    });
}

// Ladda arbeten när sidan laddas
load();