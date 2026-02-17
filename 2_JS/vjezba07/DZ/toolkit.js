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


// -----------------------
// MINI TOOLKIT: DOHVAT ELEMENTA
// -----------------------
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const selectZadatak = document.querySelector(".form-select");
const btn = document.getElementById("btnUnesi");
const rezultat = document.getElementById("rezultat");

// Zadaci koji koriste string
const tekstZadaci = ['6','9','11','12'];

// -----------------------
// CLICK EVENT
// -----------------------
btn.addEventListener("click", () => {
  const zadatak = selectZadatak.value;
  const a = inputA.value;
  const b = inputB.value;

  // Pretvaranje u broj samo ako zadatak nije tekstualni
  const A = tekstZadaci.includes(zadatak) ? a : Number(a);
  const B = tekstZadaci.includes(zadatak) ? b : Number(b);

  if (!tekstZadaci.includes(zadatak) && (isNaN(A) || (b && isNaN(B)))) {
    rezultat.textContent = "Molim - ponovite unos!";
    console.log("Neispravan unos");
    return;
  }

  // -----------------------
  // MINI SWITCH / TOOLKIT
  // -----------------------
  switch(zadatak) {

    case '1': rezultat.textContent = "Površina: " + (A*B); break;

    case '2': rezultat.textContent = A>0 ? "Pozitivan" : (A<0 ? "Negativan" : "Nula"); break;

    case '4': rezultat.textContent = "Prosjek: " + (B/A).toFixed(2); break;

    case '6': 
      rezultat.textContent = a.split('').reverse().join(''); 
      break;

    case '9': { // SORTIRANJE UZLAZNO
      const niz = a.split('');        // string u niz po karakterima
      niz.sort();                     // sort uzlazno
      rezultat.textContent = niz.join('\n'); // svaki karakter u novi red
      console.table(niz);
      break;
    }


 

    case '11':
      if(!a) rezultat.textContent = "Unesite lozinku!";
      else if(a.length===5) rezultat.textContent="Lozinka je uredu ✔";
      else rezultat.textContent="Lozinka mora imati točno 5 znakova!";
      break;

    case '12':
      if(!a) rezultat.textContent = "Unesite lozinku!";
      else {
        const velika = /[A-Z]/.test(a);
        const mala = /[a-z]/.test(a);
        rezultat.textContent = `Velika slova: ${velika}, Mala slova: ${mala}`;
      }
      break;

    default: rezultat.textContent = "Zadatak nije definiran!";
  }

  console.log(rezultat.textContent);
});


