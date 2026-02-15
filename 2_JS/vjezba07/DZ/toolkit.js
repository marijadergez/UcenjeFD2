// ===== MINI TOOLKIT =====
// Funkcija koja vraća vrijednost input polja po id-u
const value = (id) => Number(document.getElementById(id).value); // Number pretvara u broj, koristi za matematičke zadatke
// Ako želiš string, možeš napraviti: const strValue = (id) => document.getElementById(id).value;

// Funkcija koja postavlja tekst u HTML element po id-u
const setText = (id, text) => document.getElementById(id).innerHTML = text;

// Funkcija koja šalje nešto u konzolu (za debug, ali možeš i izostaviti)
const log = (text) => console.log(text);

// ===== PRIMJER SWITCH ZA ZADATKE =====
switch (selectZadatak.value) {

  case '1': // Površina pravokutnika
    const A = value("inputA"); // širina
    const B = value("inputB"); // dužina
    setText("rezultat", "Površina je: " + (A*B)); // ispis u HTML
    log("Površina: " + (A*B)); // ispis u konzolu
    break;

  case '2': // Pozitivan/negativan/nula
    const num = value("inputA");
    setText("rezultat", num > 0 ? "Pozitivan" : num < 0 ? "Negativan" : "Nula");
    log(num > 0 ? "Pozitivan" : num < 0 ? "Negativan" : "Nula");
    break;

  case '4': // Prosjek ocjena
    const brojOcjena = value("inputA");
    const zbrojOcjena = value("inputB");
    const prosjek = zbrojOcjena / brojOcjena;
    setText("rezultat", "Prosjek je: " + prosjek.toFixed(2));
    log("Prosjek: " + prosjek.toFixed(2));
    break;

  case '6': // Ispiši string naopako
    const unos = document.getElementById("inputA").value; // ovdje string, ne broj
    let obrnuto = "";
    for(let i = unos.length-1; i>=0; i--) obrnuto += unos[i];
    setText("rezultat", obrnuto);
    log("Naopako: " + obrnuto);
    break;

  case '11': // Lozinka sa 5 znakova
    const lozinka = document.getElementById("inputA").value;
    setText("rezultat", lozinka.length === 5 ? "Lozinka je uredu ✔" : "Lozinka mora imati 5 znakova!");
    log(lozinka.length === 5 ? "Lozinka je uredu ✔" : "Lozinka mora imati 5 znakova!");
    break;

  /* dodaj case '12', '3', '5' itd.
   na isti način, samo koristi value() i setText()*/
  default:
    setText("rezultat", "Zadatak još nije implementiran");
    log("Nije implementiran zadatak");
}
