// api.js - funktioner för att kommunicera med backend-API:et
const BASE_URL = "http://localhost:5000/api/work";

// Funktioner för att hämta, lägga till och ta bort arbetserfarenheter
export async function getWorks() {
    // Hämta alla arbetserfarenheter från backend-API:et
    const res = await fetch(BASE_URL);
    // Returnera den hämtade datan som JSON
    return await res.json();
}

// Funktion för att lägga till en ny arbetserfarenhet
export async function addWork(data) {
    // Skicka en POST-förfrågan till backend-API:et med den nya arbetserfarenheten
    const res = await fetch(BASE_URL, {
        method: "POST",
        // Skicka data som JSON i förfrågan
        headers: {
            "Content-Type": "application/json"
        },
        // Konvertera data till JSON-sträng innan den skickas
        body: JSON.stringify(data)
    });

    // Returnera den skapade arbetserfarenheten som JSON
    return await res.json();
}

// Funktion för att ta bort en arbetserfarenhet baserat på dess ID
export async function deleteWork(id) {
    // Skicka en DELETE-förfrågan till backend-API:et med ID:t för den arbetserfarenhet som ska tas bort
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    // Returnera svaret från backend-API:et som JSON
    return await res.json();
}