
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;
    case '4':
      //rješavanje4.zadatak
    const x = Number(a)
    if(!x){
      rezultat.innerHTML= 'Niste unijeli broj'
      return

    }
    
    if(x>100){
      rezultat.innerHTML= 'DA'
    }else{
      rezultat.innerHTML= 'NE'
    }
    rezultat.innerHTML= x>100 ? 'DA' : 'NE' 
    
    break;
    //zadatak
    //5. Za uneseni niz znakova ispisi koliko je zbnakova uneseno
    case '5':

    if(!a){
      rezultat.innerHTML= 'Unesi broj'
      return
    }


    rezultat.innerHTML=a.length
 
    break


    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }


  

   case '6':

 const doBroja = Number(a)
 if(!doBroja){
  rezultat.innerHTML='Nisi unio broj'
 }

  if(doBroja<=1){
  rezultat.innerHTML='Obavezno broj veći od broja 1'
  return
 }
 if(doBroja>10000){
  rezultat.innerHTML='Obavezno manji broj od 10000'
 }


 for(let i=1;i<doBroja;i++){
  //console.log(i + ' ,')
  if(i===doBroja){
    s += i
  }else{

   s += i + ' ,'
  }
  //console.log(s)


 } 
 rezultat.innerHTML= s
  break




  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;


    /* Za uneseno ime namirnice ispisi 
    dali je voće ili meso ili nemozes odrediti */

    case '4':

    if (!a){
      rezultat.innerHTML= 'Unesite namirnicu'
      return
    }


    const aCisto = a.toLowerCase()


    if(aCisto === 'jabuka' || aCisto === 'kruška' || aCisto=== 'banana'){
        rezultat.innerHTML= 'voće'
    }
      
    else if(aCisto === 'janjetina' || aCisto=== 'teletina' || aCisto=== 'prasetina'){
      rezultat.innerHTML= 'meso'
      
    }else {
      rezultat.innerHTML='Ne možemo odrediti'
    }





    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});

const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;


    /* Za uneseno ime namirnice ispisi 
    dali je voće ili meso ili nemozes odrediti */

    case '4':

    if (!a){
      rezultat.innerHTML= 'Unesite namirnicu'
      return
    }


    const aCisto = a.toLowerCase()


    if(aCisto === 'jabuka' || aCisto === 'kruška' || aCisto=== 'banana'){
        rezultat.innerHTML= 'voće'
    }
      
    else if(aCisto === 'janjetina' || aCisto=== 'teletina' || aCisto=== 'prasetina'){
      rezultat.innerHTML= 'meso'
      
    }else {
      rezultat.innerHTML='Ne možemo odrediti'
    }





    break;


    case '5':

    const doBroja = Number(a);
    if(!doBroja){
      rezultat.innerHTML='Nisi unio broj';
      return;
    }

    if(doBroja<=1){
      rezultat.innerHTML='Obavezno broj veći od 1';
      return;
    }

    if(doBroja>10000){
      rezultat.innerHTML='Obavezno broj manji od 10000';
      return;
    }

    let s='';
    for(let i=1;i<=doBroja;i++){
      //console.log(i + ', ');
      if(i===doBroja){
        s += i;
      }else{
        s += i + ', ';
      } 
      //console.log(s);
    }
    rezultat.innerHTML = s;

    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).




 










// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).

//zadatak 4
//4. Za unesni broj ispiši dali je veći od 100 ili ne
//zadatak
//5. Za uneseni niz znakova ispisi koliko je zbnakova uneseno

/*

const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;


  switch (zadatak) {
    // rješavanje 1. zadatak
    case '1': {
      switch (a.toLowerCase()) {
        case "start":
          rezultat.innerHTML = 'Pokretanje programa';
          break;
        case "stop":
          rezultat.innerHTML = 'Zaustavljanje programa';
          break;
        case "pauza":
          rezultat.innerHTML = 'Pauza programa';
          break;
        default:
          rezultat.innerHTML = 'Unos mora biti: start, stop ili pauza.'
          break;
      }
      break;
    }
    // kraj rješavanje 1. zadatak

    // rješavanje 2. zadatak
    case '2': {

      switch (a.toUpperCase()) {
        case "A":
        case "B":
        case "C":
          rezultat.innerHTML = 'Položeno';
          break;

        case "D":
        case "F":
          rezultat.innerHTML = 'Nije položeno';
          break;

        default:
          rezultat.innerHTML = 'Nije ocjena';
          break;
      }
      break;
    }
    // kraj rješavanje 2. zadatak


    // rješavanje 3. zadatak  
    case '3':{
      const bodovi = Number(a);

      switch (true) {
        case bodovi >= 90  && bodovi <= 100:
          rezultat.innerHTML = 'Izvrstan';
          break;

        case bodovi >= 80 && bodovi <= 89:
          rezultat.innerHTML = 'Vrlo dobar';
          break;

        case bodovi >= 65  && bodovi <= 79:
          rezultat.innerHTML = 'Dobar';
          break;

        case bodovi >= 50  && bodovi <= 64:
          rezultat.innerHTML = 'Dovoljan';
          break;

        case bodovi < 50:
          rezultat.innerHTML = 'Nedovoljan'
          break;

        default:
          rezultat.innerHTML = 'Molimo unesite bodove od 0 - 100';
          break;
  }
  break;
}

   case '4':
    const x= Number(a);

    if(!x){
      rezultat.innerHTML='Niste unijeli broj';
      return;
    }

    if(x>100){
      rezultat.innerHTML='Broj je veći od 100';
      return;
    }else{
      rezultat.innerHTML='Broj nije veći od 100';
      return;
    }

    rezultat.innerHTML= x>100 ? 'Broj je veći od 100': 'Broj nije veći od 100';
    break;

    case '5':
    if(!a){
      rezultat.innerHTML='Unesi broj'
      return;
    }

    rezultat.innerHTML= a.length;

    break;


    case '6':
    
    if(!a){
      rezultat.innerHTML= 'Unesite namirnicu'
      return;
    }

    const aCisto = a.toLowerCase()

    
    if(aCisto === 'jabuka' || aCisto === 'kruška' || aCisto === 'banana'){
      rezultat.innerHTML= 'Voće'
    }else if(aCisto === 'janjetina' || aCisto === 'svinjetina' || aCisto === 'piletina'){
      rezultat.innerHTML= 'Meso'
    }else{
      rezultat.innerHTML= 'Ne mogu odrediti'
    }




    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});
// kraj rješavanje 3. zadatak

// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).
*/