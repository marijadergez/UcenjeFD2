// DOHVAĆANJE ELEMENATA
const btn = document.getElementById("btnUnesi");
const rezultatPolje = document.querySelector(".result");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const selectZadatak = document.querySelector(".form-select"); // select element

// EVENT LISTENER
btn.addEventListener("click", function () {

  const A = Number(inputA.value);
  const B = Number(inputB.value);

  // VALIDACIJA
  if (isNaN(A) || isNaN(B)) {
    rezultat.innerHTML = "Molim unesite brojeve!";
    console.log("Neispravan unos");
    return;
  }
  
    /*default: {
      rezultatPolje.innerHTML = "Zadatak još nije implementiran";
      console.log("Nije odabran implementiran zadatak");
      break
    }  */





  switch (selectZadatak.value) {

    case '1': { 

      // Zadatak 1: Površina pravokutnika u polju A i B
      const povrsina = A * B;

      console.log("Površina pravokutnika je: " + povrsina);
      rezultat.innerHTML = "Površina pravokutnika je: " + povrsina;
      break;
    }


  }





   switch (selectZadatak.value) {

      case '2': {

          // Zadatak 2: Provjera je li broj pozitivan, negativan ili nula u polju A
          // CIJELI BROJEVI

        let poruka = "";
        if (A > 0) {
          poruka = "Broj je pozitivan";
        } else if (A < 0) {
          poruka = "Broj je negativan";
        } else {
          poruka = "Broj je nula";
        }

        rezultat.innerHTML = poruka;
        console.log("Broj je: " + poruka);
        break;
      }
   }




   switch (selectZadatak.value){

      case '3': {
          /* Zadatak 3:  program koji deklarira niz, traži od korisnika da unese 
          vrijednosti u niz, a zatim izračunava i ispisuje zbroj svih 
          elemenata niza koji su brojčanog tipa*/



        break
      }


   }





   switch (selectZadatak.value){




    case '4': {

        //Zadatak 4: broj ocjena, a zatim i same ocjene. Program treba izračunati i ispisati prosjek ocjena.


        
      let brojOcjena = Number(inputA.value);
      let zbrojOcjena  = Number(inputB.value);

      const prosjek = brojOcjena/ zbrojOcjena;

      rezultatPolje.textContent = 
      "Broj ocjena je: " + inputA.value + 
      " || Prosjek je: " + prosjek.toFixed(2);


      console.log("Broj ocjena je:", inputA.value);
  

      console.log("U polje A unes brojA ocjena ")

      console.log("U polje B unes ZbrojA ocjena iz A ")
      

     



      break
    }
   }



   
   switch (selectZadatak.value){




    case '5': {





      break
    }
   }





   
   switch (selectZadatak.value){




    case '6': {





      break
    }
   }

   switch (selectZadatak.value){




    case '7': {





      break
    }
   }






   
   switch (selectZadatak.value){




    case '8': {





      break
    }
   }






   
   switch (selectZadatak.value){




    case '9': {





      break
    }
   }






   
   switch (selectZadatak.value){




    case '10': {





      break
    }
   }






   
   switch (selectZadatak.value){




    case '11': {





      break
    }
   }






   
   switch (selectZadatak.value){




    case '12': {





      break
    }
   }








   
   switch (selectZadatak.value){




    case '13': {





      break
    }
   }







   
   switch (selectZadatak.value){




    case '14': {





      break
    }
   }





















});







/*zadaci koji su zakomentirani su iz predhodne zadace broj vjezba 07 i nisu jos rijeseni,
 a ostali su rijeseni i testirani, ali su zakomentirani da se ne bi miješali sa zadacima koji su trenutno aktivni.*/

/*  =================================================
   ZADATAK 1 — Prvi i zadnji element
   - niz se gradi od A i B (plus dv fiksna elementa radi smisla)
   Ulaz primjer: [A, 20, 30, B]
   Izlaz: Prvi: A, Zadnji: B   */

/*

const a =Number(a)
const b =Number(b)
const niz = [a, 20, 30, b];
const prvi = niz[0];
const zadnji = niz.at(-1);

console.log(`Prvi: ${prvi}, Zadnji: ${zadnji}`);
rezultat.textContent = `Prvi: ${prvi}, Zadnji: ${zadnji}`;
*/



/*
=================================================
   ZADATAK 2 — Siguran pristup elementu
   - indeks se računa iz B:
     ako je B broj → index = B
     inače → index = duljina stringa B
   - niz je ["a", A, "c"]
=================================================
   ZADATAK 3 — Zamjena prva dva elementa
   - niz: [A, B, 3]
   - ako ima barem 2 elementa (ima), zamijeni prva dva
=================================================
   ZADATAK 4 — Dodavanje elementa prema duljini
   - niz: [A, B]
   - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
     inače → dodaj "Y" na početak
=================================================
   ZADATAK 5 — Provjera tipa prvog elementa
   - prvi element je A
   - switch prema typeof A
=================================================
   ZADATAK 6 — Ukloni zadnji element bez pop()
   - niz: [A, B, "KRAJ"]
   - ukloni zadnji preko length
=================================================
   ZADATAK 7 — Spoji dva niza bez concat()
   - niz1: [A, 2]
   - niz2: [B, 4]
   - spajanje spreadom
=================================================
   ZADATAK 8 — Provjera rupe u nizu
   - napravimo niz sa "rupom" na indeksu 1:
     z8[0]=A, z8[2]=B
   - provjerimo indeks 1
=================================================
   ZADATAK 9 — Razdvajanje prvog i ostatka
   - niz: [A, B, 7, 6]
   - destructuring [first, ...rest]
=================================================
   ZADATAK 10 — Switch prema duljini niza
   - duljinu određujemo prema A i B:
     Ako je A prazan string ili B prazan string → niz = []
     Inače ako A === B → niz = [A]
     Inače ako je B broj i B === 2 → niz = [A, B]
     Inače → niz = [A, B, "x"]
=================================================
   
   

const poveznica = document.getElementById('poveznica');
poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
document.getElementById('zadatak').addEventListener('change', (event) => {
   switch (event.target.value) {
    case '1':
      poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
    break;
    case '2':
      poveznica.href='https://www.enciklopedija.hr/clanak/savrseni-broj';
    break;
    case '3':
      poveznica.href='https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/';
    break;
    case '4':
      poveznica.href='https://www.enciklopedija.hr/clanak/palindrom';
    break;
    case '5':
      poveznica.href='https://www.coursera.org/articles/what-are-stop-words';
    break;
    case '6':
      poveznica.href='https://enciklopedija.hr/clanak/samoglasnik';
    break;
    case '7':
      poveznica.href='https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D';
    break;
    default:
      poveznica.href='#';
  }
});
   
   */

const stopRijeci = [
  'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo', 
  'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete', 
  'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad', 
  'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao', 
  'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja', 
  'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša', 
  'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko', 
  'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad', 
  'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen', 
  'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj', 
  'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one', 
  'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje', 
  'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije', 
  'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe', 
  'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja', 
  'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to', 
  'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već', 
  'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the', 
  'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
  'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until', 
  'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 
  'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 
  'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 
  'further', 'then', 'once'
];