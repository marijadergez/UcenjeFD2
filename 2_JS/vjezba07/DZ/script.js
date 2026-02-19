// -----------------------
// DOHVAT ELEMENTA
// -----------------------
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const selectZadatak = document.querySelector(".form-select");
const btn = document.getElementById("btnUnesi");
const rezultat = document.getElementById("rezultat");
rezultat.textContent = "Rezultat zadatka:";

// Popis zadataka koji rade s tekstom
const tekstualniZadaci = ['6', '9', '11', '12'];

// -----------------------
// CLICK EVENT
// -----------------------
btn.addEventListener("click", () => {
    const zadatak = selectZadatak.value;

    // Dohvat vrijednosti
    const unosA = inputA.value;
    const unosB = inputB.value;

    // VALIDACIJA: samo numerički zadaci zahtijevaju brojeve
    let A = null;
    let B = null;
    if (!tekstualniZadaci.includes(zadatak)) {
        A = Number(unosA);
        B = Number(unosB);
        if (isNaN(A) || (unosB && isNaN(B))) {
            rezultat.textContent= "Molim - ponovite unos!";
            console.log("Neispravan unos");
            return;
        }
    }

    // -----------------------
    // SWITCH ZA ZADATKE
    // -----------------------
    switch (zadatak) {

        // Zadatak 1: Površina pravokutnika
        case '1': {
            const povrsina = A * B;
            rezultat.textContent= "Površina: " + povrsina;
            console.log("Površina:", povrsina);
            break;
        }

        // Zadatak 2: Pozitivan, negativan ili nula
        case '2': {
            let poruka = A > 0 ? "Pozitivan" : (A < 0 ? "Negativan" : "Nula");
            rezultat.textContent= poruka;
            console.log(poruka);
            break;
        }

        // Zadatak 4: Prosjek ocjena
        case '4': {
            const prosjek = B / A;
            rezultat.textContent= "Prosjek: " + prosjek.toFixed(2);
            console.log("Prosjek:", prosjek.toFixed(2));
            break;
        }

        // Zadatak 6: Ispiši string naopako
        case '6': {
            const obrnuto = unosA.split('').reverse().join('');
            rezultat.textContent= obrnuto;
            console.log("Obrnuto:", obrnuto);
            break;
        }

        case '8': { // Pretvorba temperature C → F
            const unosA = inputA.value;          
            const celsius = Number(unosA);       

            // 3. provjera da je broj
            if (isNaN(celsius)) {
                rezultat.textContent = "Molim unesite broj u polje A!";
                console.log("Neispravan unos");
            } else {
                // 4. izračun Farenheita
                const fahrenheit = (celsius * 9/5) + 32;

                
                rezultat.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
                console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
            }

            break;
        }


        // Zadatak 9: Sortiranje stringa ili niza po karakterima
        case '9': {
          const unosA = inputA.value;          
          const niz = unosA.split('');        
          const sortirano = niz.sort();        
          rezultat.textContent= sortirano.join('\n'); 
          console.table(sortirano);
          console.log("Sortirano uzlazno:", sortirano);
          break;
      }

      case '10': {
          const unosB = inputB.value;          
          const niz = unosB.split('');         
          const sortirano = niz.sort().reverse();  
          rezultat.textContent= sortirano.join('\n');
          console.table(sortirano);
          console.log("Sortirano silazno:", sortirano);
          break;
      }

    
    
    
           // Zadatak 11: Ložinka 5 znakova
        case '11': {
            if (!unosA) {
                rezultat.textContent= "Unesite lozinku!";
            } else if (unosA.length === 5) {
                rezultat.textContent= "Lozinka je uredu ✔";
            } else {
                rezultat.textContent= "Lozinka mora imati točno 5 znakova!";
            }
            console.log( rezultat.textContent);
            break;
        }

        // Zadatak 12: Lozinka s velikim/malim slovima
        case '12': {
            if (!unosA) {
                rezultat.textContent= "Unesite lozinku!";
            } else {
                let velikaSlova = /[A-Z]/.test(unosA);
                let malaSlova = /[a-z]/.test(unosA);
                rezultat.textContent= `Velika slova: ${velikaSlova}, Mala slova: ${malaSlova}`;
            }
            console.log(rezultat.innerHtml);
            break;
        }

        default:
            rezultat.textContent= "Zadatak nije definiran!";
            console.log("Nepoznat zadatak");
    }
});
