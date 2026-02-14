// DOHVAĆANJE ELEMENATA
const btn = document.getElementById("btnUnesi");
const rezultat = document.querySelector(".result");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const selectZadatak = document.querySelector(".form-select"); // select element

// EVENT LISTENER
btn.addEventListener("click", function () {

  const A = Number(inputA.value);
  const B = Number(inputB.value);

  // VALIDACIJA
  if (isNaN(A) || isNaN(B)) {
    rezultat.innerHTML = "Molim - ponovite unos!";
    console.log("Neispravan unos");
    return;
  }

});


    /*default: {
      rezultat.innerHTML = "Zadatak još nije implementiran";
      console.log("Nije odabran implementiran zadatak");
      break
    }  */





  switch (selectZadatak.value) {

    case '1': { 

      // Zadatak 1: Površina pravokutnika u polju A i B
      let A = Number(inputA.value);
      let B = Number(inputB.value);

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
        console.log("" + poruka);
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

      rezultat.innerHTML = 
      "Broj ocjena je: " + inputA.value + 
      " || Prosjek je: " + prosjek.toFixed(2);


      console.log("Broj ocjena je:", inputA.value);
  

      console.log("Polje A unos ukupnog broja ocjena ")

      console.log("Polje B Zbroj svih ocjena iz A ")

      if (!inputA.value || !inputB.value) {  
        rezultat.innerHTML = "Molim -unesite podatke u oba polja!";
        console.log("Obavezan unos u oba polja!");

      break
    }
   }
  }



   
   switch (selectZadatak.value){

    //


    case '5': {

     



      break
    }
   }





   
   switch (selectZadatak.value){

    //Zadatak 6:   string  a rezultat je da  ispisuje taj string naopako (npr. "zdravo" postaje "ovardz")


      case '6': {

        const unos = inputA.value;

        const jePalindrom =
          unos === unos.split("").reverse().join("");

        rezultat.innerHTML = jePalindrom
          ? "Palindrom"
          : "Nije palindrom";

        break;
      }

    }




   switch (selectZadatak.value){




    case '7': {

        //Zadatak 7

  


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

      /*Zdatak 9: program koji deklarira niz, traži od korisnika da unese
       vrijednosti u A polje -niz, a zatim sortira niz uzlazno i ispisuje sortirani niz.*/
 
           const niz = [1,2,3,4,5,6,7];
          const ime = 'Unos';

          let output = "Niz: <br>";
          for (let i = 0; i < niz.length; i++) {
            console.log(niz[i]);
            output += niz[i] + " ";
          }

          output += "<br>======================<br>";

          for (let i = 0; i < ime.length; i++) {
            console.log(ime[i]);
            output += ime[i] + "<br>";
          }

          rezultat.innerHTML = output;  // <- VAŽNO: mora biti rezultatPolje, ne samo rezultat
    

        break;
    }
  }
   







   
   switch (selectZadatak.value){

      //Kalkulator





     
    }
   





   //GENERATORI LOZINKE ZADACI 
   
    // Zadatak 11 - da li lozinka ima 5 karaktera
   
    switch (selectZadatak.value) {

  case '11': {

    const lozinka = inputA.value;
    const duzina = lozinka.length;

    if (!lozinka) {
      rezultat.innerHTML = "Unesite lozinku 5 znakova!";
      console.log("Obavezan unos  5 znakova!");
    } 
    else if (duzina === 5) {
      rezultat.innerHTML = "Lozinka je uredu ✔";
      console.log("Lozinka je uredu ");
    } 
    else {
      rezultat.innerHTML = "Lozinka mora imati točno 5 znakova!";
      console.log("Nema točno 5 znakova!");
    }

    break;
  }

}





        
              
            













   

