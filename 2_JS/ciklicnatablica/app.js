const rezultatDiv = document.getElementById("rezultat");
rezultatDiv.textContent = "Tablica generirana!";

const tablicaDiv = document.getElementById("tablica");
const tablica = document.createElement("table");
tablica.classList.add("ciklicna-tablica");
let broj = 1;
for (let i = 0; i < 5; i++) {
    const red = document.createElement("tr");   
    for (let j = 0; j < 5; j++) {
        const celija = document.createElement("td");
        celija.textContent = broj;
        red.appendChild(celija);
        broj++;
    }
    tablica.appendChild(red);
}
tablicaDiv.appendChild(tablica);