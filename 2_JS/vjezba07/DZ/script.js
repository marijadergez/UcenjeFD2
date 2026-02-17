document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnUnesi");
  const rezultat = document.querySelector(".result");
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const selectZadatak = document.querySelector(".form-select");

  btn.addEventListener("click", function () {

    const A = Number(inputA.value);
    const B = Number(inputB.value);
  
    // VALIDACIJA
    if (selectZadatak.value !== '6' && (isNaN(A) || isNaN(B))) {
      rezultat.innerHTML = "Molim - ponovite unos!";
      console.log("Neispravan unos");
      return;
    }

    switch(selectZadatak.value) {
      case '1': // Površina pravokutnika
        const povrsina = A * B;
        rezultat.innerHTML = "Površina pravokutnika je: " + povrsina;
        console.log("Površina pravokutnika je:", povrsina);
        break;

      case '2': // Pozitivan / negativan / nula
        let poruka = A > 0 ? "Broj je pozitivan" :
                      A < 0 ? "Broj je negativan" :
                      "Broj je nula";
        rezultat.innerHTML = poruka;
        console.log(poruka);
        break;

      case '6': // Palindrom / string obrnuto
        const unos = inputA.value;
        const jePalindrom = unos === unos.split("").reverse().join("");
        rezultat.innerHTML = jePalindrom ? "Palindrom" : "Nije palindrom";
        console.log("Ispis:", jePalindrom);
        break;

 



      /*Zadatak 9: napiši program koji deklarira niz, traži od korisnika da unese vrijednosti u niz,
       a zatim sortira niz uzlazno i ispisuje sortirani niz. */

       
       switch (selectZadatak.value) {
       
        case '9': {
          let niz = [inputA];
          console.log(typeof niz, niz); // kaže da je object
          console.table(niz);


      
      break
      
      }




      switch (selectZadatak.value) {

  // ZADATAK 11: Lozinka točno 5 znakova
  case '11': {
    const lozinka = inputA.value;

    if (!lozinka) {
      rezultat.innerHTML = "Unesite lozinku!";
    } else if (lozinka.length === 5) {
      rezultat.innerHTML = "Lozinka je uredu ✔";
    } else {
      rezultat.innerHTML = "Lozinka mora imati točno 5 znakova!";
    }

    check.addEventListener("change", () => {
      inputA.type = check.checked ? "password" : "text";
    });

    break;
  }

    // ZADATAK 12: Lozinka - provjera velikih slova
    case '12': {
      const lozinka = inputA.value;

      if (!lozinka) {
        rezultat.innerHTML = "Unesite lozinku!";
      } else {
        const imaVeliko = /[A-Z]/.test(lozinka);
        rezultat.innerHTML = imaVeliko ? "Lozinka ima veliko slovo ✔" : "Lozinka mora imati barem jedno veliko slovo!";
      }

      check.addEventListener("change", () => {
        inputA.type = check.checked ? "password" : "text";
      });

      break;
    }

    default: {
      rezultat.innerHTML = "Zadatak još nije implementiran";
      break;
    }
  }




      default:
        rezultat.innerHTML = "Zadatak još nije implementiran";
        console.log("Nije odabran implementiran zadatak");
    }

}});
});






        
              
            













   

