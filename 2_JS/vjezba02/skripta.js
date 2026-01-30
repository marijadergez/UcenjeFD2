// OPERATORI

// --aritmetički   + - x
const ako=2, b=3 //u jednom retku dvije varijable
let rez //udefined
rez = a + b //algoritam
console.log(rez)  //izlaz   -  ulaz je podatak koji je unio korisnik 




// --modulo operator 
//  PARNI NEPARNI
//ostatak nakon cjelobrojnog djeljenja 9/2 = 4,5  a cjelobrojno 4 i ostao 1
//najednostavniji primjer je 
console.log( 9 % 2 ) // 1       9 modulo 2
console.log(8 % 2) //0         8 modulo 2


//  --operatori dodjele
// = je operator dodjeljivanja desna strana dodjeljuje lijevoj
//prvo računa desnu stranu pa se doda varijabli sa lijeve
//na desnoj strani rez ima vrijhednost 5 i doda mu se dva pa se 7 dodijeli varijabli sa lijeve strane
rez = rez + 2
console.log(rez) //7

// + =

rez += 2
console.log(rez) //9

const x =2

rez -= x
console.log(rez) //7

rez *= x
console.log(rez) //14

rez /= x
console.log(rez) //7


//uvećanje za 1
re = rez + 1 //8
rez += 1 //9
rez ++ // 10  ovako pisati u redu nije dobro ali će napravit posao 
//ak ces nest uvecavat to ce bit za jedan ili umanjiti

// inncrement ++  dekrement --
//korištenje i uvećanje/umanjenje

// koristi pa uveća
console.log(rez++) //ispiše 10 iuveća na 11
console.log(rez)  //11

// uvećati pa korisitti
console.log(++rez)
 //stara vrijednost je 11 pvo je uvećao ++ pa koristio


 //koristiti pa umanjiti
 console.log(rez--)// 12

 //umanjiti pa korisitti
 console.log(--rez)// 10   //
 // jer je koristio 12 pa smanjio na 11 a ovdje -- ga je prvo sa 11 smanjio na 10 i i spisao 10


 //razgovor za posao primjer
 let i =2, j = i
 i = j++ - i
 j += --i ++j
 console.log(i-j)                  // j  je  jot


 // operatori uspoređivanja      true /false
 // == jednako po vrijednosti
 // === po vrijednosti i tipu      /*da je script number...
console.log(5 = 5)  // true
console.log('5' == 5)// string i broj po vrijednosti =true
//da ne ispadne samo true
console.log(3 == 7)// false
console.log('Osijek' === osijek) //false
console.log( 5 === '5') //false  number string
//u drugim jezicima je 2=  dovoljno


//različito  !=
console.log( 3 != 5)// true   BULEAN

//<, >, <=, =>
const.log = 18        //prvi veći od 18 je 19  što bi dalo:
console.log(godine > 18) // false    //dali je godine veće od 18
console.log(godine >= 18) // true

//dva izraza koji mogu biti true ili false
//-- logički operatori 
//bool-ovi operatori : AND   OR   NOT  (tablica online)
console.log(godine>=18) //true
console.log(godine>=21) //false
//punoljetan u svim državama
//logični AND && ->  u JS se ne smije koristiti samo jedan &





/* sljedeće je js tekst iz skole*/



const ime = prompt('Unesi svoje ime');  //skočni prozor stranice umjesto prompt mozes napisat nest drugo

console.log(typeof ime, ime);

console.log(`Dobar dan ${ime}!`) //bacticks altgr7






//somuliram unos prompt:
const unosGodina = '2026' ; //prompt uvijek vraca nazad string 


//konverzija podataka
const godina = Number(unosGodina);

console.log(typeof godina, godina+1); //uveca za jedan
console.log(typeof unosGodina, unosGodina+1); //ako ostane u stringu matematika doljepi a ne zbroji
//ovdje se 2026 plus1 i ispisse na stranici 20261


const cijeliBroj = parseInt('7');
console.log(typeof cijeliBroj, cijeliBroj);

const decimalniBroj = parseFloat('3.14');

const logickaVrijednost = true;

console.log(typeof logickaVrijednost, logickaVrijednost);
//logickaVrijednost = false; skripta.js:28 Uncaught TypeError: Assignment to constant variable.  
//ne moze se re definirati konstanta

let broj = 7;
console.log(typeof broj, broj);
broj = 8;
console.log(typeof broj, broj);


broj ='7';
console.log(typeof broj, broj);

//let broj = true;

//const prebacis u let kad prestanes koristiti const

var x = 8; //var se moze deklariart/
console.log(typeof x, x);
var x = '8'; //var se moze deklariart/
console.log(typeof x, x);
 var x = true;
 console.log(typeof x, x);

 const velikiBroj = 4565454544444464454n;
 console.log(typeof velikiBroj, velikiBroj);

 let itakonesto;
 console.log(typeof itakonesto, itakonesto);

 itakonesto =7;
  console.log(typeof itakonesto, itakonesto);

  let o = null
  console.log(typeof o, o);

  o = 8;
    console.log(typeof o, o);


    o = {
        id: 1001,
        ime: 'Pero',
        prezime: 'Perić',
        znaProgramirati: false
    };

    console.log(typeof o, o);

    console.table(o);

    let niz = [ 2,3,4,5 ]  ;
    console.log(typeof niz, niz);

    console.table(niz);

    const backend = [  //altgr plus f
        {
            id: 2,  //nema ' jer nije string nego number
            ime: 'Marina',
            prezime: 'Generacija',
            znaProgramirati: true
        },
        {
            id: 3,
            ime: 'Karlo',
            prezime: 'Perić',
            znaProgramirati: false
        },
        {
            id: 4,
            ime: 'Maja',
            prezime: ' Katić',
            znaProgramirati: false
        }
    ];

    console.log(typeof backend, backend);
    console.table(backend);

    function pozdrav(){
        console.log('Pozdrav 1');
    }
  
    console.log(typeof pozdrav, pozdrav);
    pozdrav();

    const pozdravi = ()=> console.log('Pozdrav 2');
    console.log(typeof pozdrav, pozdrav);
    pozdravi();

    const id1 = Symbol('edunova'); //edunova je opis a value ne znamo
    const id2 = Symbol('edunova');

    console.log(typeof id1, id2);  


    //operator uredjivanja  poput plus ili =
//== samo po vrijednosti tipa 2 i '2' je isto
// === '2' nije isto sto i 2

console.log(id1 == id2);
console.log(id2 === id2);






  

/*profesor na satu tekst sintaksa vježba koju tipkam gore dok gledam predavanje ponovno on line*/




//tipescript
//varijabla je prostor u memoriji   u primjeru gore ime je varijabla 
//tipovi podataka ,  ES6 tri načina definiranja varijabli
//constanta je samo ime govori a varijabla je promjenjiva mutable
//

// varijabla je prostro u memoriji
// može biti različitih tipova podataka
// u JS ES6 postoji tri načina definiranja varijabli

// ulaz podatka u program
// prompt uvijek unosi string
const ime = 'Tomislav'; // prompt('Unesi svoje ime');
// simuliram da je svaki puta s pomoću prompt uneseno Tomislav
// a to radim da ne moram svaki puta unositi

console.log(typeof ime, ime);

console.log(`Dobar dan ${ime}!`);

const unosGodina = '2026'; // simuliram unos kroz prompt

// konverzija podataka
const godina = Number(unosGodina);

console.log(typeof godina, godina+1); // ovdje uveća za 1
console.log(typeof unosGodina, unosGodina+1); // ovdje se stringu 2026 nadoljepilo jo' 1 i dobilo 20261


const cijeliBroj = parseInt('7');
console.log(typeof cijeliBroj, cijeliBroj);

const decimalniBroj = parseFloat('3.14'); // za decimalni dio se piše .

console.log(typeof decimalniBroj, decimalniBroj);

// logička vrijednost

const logickaVrijednost = true; // ili false

console.log(typeof logickaVrijednost, logickaVrijednost);

// const se ne može mijenjati
// logickaVrijednost = false; ovo ne može skripta.js:38 Uncaught TypeError: Assignment to constant variable.


// ne može se redeklarirati const
// const logickaVrijednost=false;


// sljedeći način definiranja varijabel - pravi način let

let broj = 7;
console.log(typeof broj, broj);
broj = 8;
console.log(typeof broj, broj);
// let može promijeniti tip podatka
broj = '7';
console.log(typeof broj, broj);

// ne može se redeklarirati
//let broj = true;

// STARO, ne koristiti - što ne znači da ne postoji
var x = 8;
console.log(typeof x, x);
x='8';
console.log(typeof x, x);
var x = true; // može se redeklarirati
console.log(typeof x, x);


const velikiBroj = 45421654654654654654654654n;
console.log(typeof velikiBroj, velikiBroj);

// ne mogu deklarirati konstantu bez vrijednost
//const i;

let itakonesto;
console.log(typeof itakonesto, itakonesto);

itakonesto=7;
console.log(typeof itakonesto, itakonesto);


let o = null;
console.log(typeof o, o);
o = 8;
console.log(typeof o, o);

// JSON - JavaScript Object Notation
o = {
    id: 1001,
    ime: 'Pero',
    prezime: 'Perić',
    znaProgramirati: false
};
console.log(typeof o, o);
console.table(o);

// Array, niz, polje
let niz = [2,2,3,2,2]; // ALTGR+F daje [
console.log(typeof niz, niz); // kaže da je object
console.table(niz);

const backend = [
    {
        id: 1,
        ime: 'Marina',
        prezime: 'Generacija',
        znaProgramirati: true
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Perić',
        znaProgramirati: false
    },
    {
        id: 3,
        ime: 'Maja',
        prezime: 'Katić',
        znaProgramirati: false
    }
];
console.log(typeof backend, backend);
console.table(backend);

// tijelo funckije - stari način
function pozdrav(){
    console.log('Pozdrav 1');
}

console.log(typeof pozdrav, pozdrav);
// poziv funkcije
pozdrav();


const pozdravi = () => console.log('Pozdrav 2');
console.log(typeof pozdravi, pozdravi);
pozdravi();

const kompleksnije = (x,y) => {
    x = x + 3; // x = 5
    y = --y + x; // y = 6
    return x+y;
};


console.log(kompleksnije(2,2));


const id1 = Symbol('edunova'); // edunova je opis, ali je vrijednost jedinstvena i mi ju ne znamo
const id2 = Symbol('edunova');


console.log(typeof id1, id2);

// operator uspoređivanja 
// ==    -> provjerava samo po vrijednosti '2' je isto što i 2
// ===   -> provjerava i po tipu i po vrijednosti '2' nije isto što i 2

console.log(id1 == id2);
console.log(id1 === id2);

console.log('2'==2); // true
console.log('2'===2); //false
console.log(2 === 2); //true


