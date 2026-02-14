const btn = document.getElementById("btnUnesi");
btn.addEventListener("click", function () {
  const A = Number(inputA.value);
  const B = Number(inputB.value);
  

  switch (selectZadatak.value) {
    case '1':
      const povrsina = A * B;
      rezultat.innerHTML = "Površina pravokutnika je: " + povrsina;
      console.log("Površina pravokutnika:", povrsina);
      break;

    case '2':
      let poruka = "";
      if (A > 0) poruka = "Broj je pozitivan";
      else if (A < 0) poruka = "Broj je negativan";
      else poruka = "Broj je nula";
      rezultat.innerHTML = poruka;
      console.log(poruka);
      break;

    case '4':
      if (!inputA.value || !inputB.value) {
        rezultat.innerHTML = "Molim unesite podatke u oba polja!";
        console.log("Obavezan unos!");
      } else {
        const brojOcjena = Number(inputA.value);
        const zbrojOcjena = Number(inputB.value);
        const prosjek = zbrojOcjena / brojOcjena;
        rezultat.innerHTML = "Broj ocjena: " + brojOcjena + " || Prosjek: " + prosjek.toFixed(2);
        console.log("Prosjek:", prosjek.toFixed(2));
      }
      break;

    case '6':
      const unos = inputA.value;
      const jePalindrom = unos === unos.split("").reverse().join("");
      rezultat.innerHTML = jePalindrom ? "Palindrom" : "Nije palindrom";
      console.log("Palindrom:", jePalindrom);
      break;

    case '11':
      const lozinka = inputA.value;
      if (!lozinka) {
        rezultat.innerHTML = "Unesite lozinku 5 znakova!";
      } else if (lozinka.length === 5) {
        rezultat.innerHTML = "Lozinka je uredu ✔";
      } else {
        rezultat.innerHTML = "Lozinka mora imati točno 5 znakova!";
      }
      break;

    default:
      rezultat.innerHTML = "Zadatak još nije implementiran";
      console.log("Zadatak nije implementiran");
  }
});






        
              
            













   

