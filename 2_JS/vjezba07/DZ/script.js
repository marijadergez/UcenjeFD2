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

      // ovdje ide case '4', '11', '12', itd.

      default:
        rezultat.innerHTML = "Zadatak još nije implementiran";
        console.log("Nije odabran implementiran zadatak");
    }

  });
});






        
              
            













   

