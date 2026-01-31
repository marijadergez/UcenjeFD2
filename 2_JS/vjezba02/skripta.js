 

/*profesor na satu tekst sintaksa vježba koju tipkam gore dok gledam predavanje ponovno on line*/
// varijabla je prostor u memoriji u joje se pohranjuju podaci
// može biti različitih tipova podataka   string znakovi a n a    numbers, cijeli brojevi i decimalni
// u JS ES6  ecma script 6 postoji tri načina definiranja varijabli
////garbage collector kad vidi da s evarijabla ne korsiti unisti ju


//tipescript
//kada si definirao varijablu evocirao si prostor u memoriji znaci ili unisti varijablu ili evociraj prostor
/*varijabla je prostor u memoriji   u primjeru gore ime je varijabla 
a smisao joj je da se moze mijenjati a constanta nemoze mijenjat vrijednost
*/
//tipovi podataka ,  ES6 tri načina definiranja varijabli
//constanta je samo ime govori a varijabla je promjenjiva mutable
//

//{} vitičaste su object

// ulaz podatka u program  
// prompt uvijek unosi string!!!!

const ime= prompt ('Unesi svoje ime') /* prvo se izvede prompt pa kad se to 
izvede ubacit ce se u varijablu ime*/


/*varijabla ime je int     int ime= prompt('unesi svoje ime')*/
const ime = 'Tomislav'; // prompt('Unesi svoje ime');
// simuliram da je svaki puta s pomoću prompt uneseno Tomislav
// a to radim da ne moram svaki puta unositi

console.log(typeof ime, ime); //skočni prozor tj prompt  (string)na html koji iskoci prvi

console.log(`Dobar dan ${ime}!`); /*bacticks za više redova,
 kombiniras dobar dan sa neznas sto ce on unijet*/

const unosGodina = '2026'; /* simuliram unos kroz prompt pamti zadnje
 2026 dolje ide plus 1*/


// konverzija podataka
const godina = Number(unosGodina);  //konvertiranje funkcijom number

console.log(typeof godina, godina+1); // ovdje uveća za 1
console.log(typeof unosGodina, unosGodina+1); //  concetinationa -ovdje se stringu 2026 nadoljepilo jo' 1 i dobilo 20261


const cijeliBroj = parseInt('7');  /*funkcija parsInt preskocio sam kroz prompt const 
,trebo sam prvo const da napisem 7 kao gore const*/ 
console.log(typeof cijeliBroj, cijeliBroj);



const decimalniBroj = parseFloat('3.14'); // za decimalni dio se piše točka
//sve sto korisnik unese dolazi kao string const s= 7 
// prvo ide konvertiranje u nesto i onda radis snjim

/*tip podatka float ima određen broj znamenaka i u odnosu gdje se 
nalazi točka koja pluta lijevo desno takav si decimalni broj u
 js je number i fukncija parsefloat */

console.log(typeof decimalniBroj, decimalniBroj);

// logička vrijednost    - bulean ili logička vrijednost tip podatka 0 ili 1 

const logickaVrijednost = true; // ili false

console.log(typeof logickaVrijednost, logickaVrijednost);  /*boolean: true*/
// const se ne može mijenjati
// logickaVrijednost = false; ovo ne može skripta.js:38 Uncaught TypeError: Assignment to constant variable.


// ne može se redeklarirati const   ne mozes imati dvaput isto ime constante
// const logickaVrijednost=false;


// sljedeći način definiranja varijabel - pravi način let

let broj = 7;
console.log(typeof broj, broj);
broj = 8; //da vidim tvoj tip i vrijednost napise 8 to nis,mo sa const mogli
console.log(typeof broj, broj);
// let može promijeniti tip podatka
broj = '7';  //sa dvis enij nu,ber nego string i pise 7
console.log(typeof broj, broj);

// mijenjam te ali ne ne može se redeklarirati
//let broj = true;

// STARO, ne koristiti - što ne znači da ne postoji
var x = 8;
console.log(typeof x, x);
x='8';  //number odlazi na string
console.log(typeof x, x);
var x = true; // može se redeklarirati
console.log(typeof x, x);


const velikiBroj = 45421654654654654654654654n;
console.log(typeof velikiBroj, velikiBroj);

// ne mogu deklarirati konstantu bez vrijednost
//const i;


let i //undefined  ako nedodijelimo vrijednost onda ce biti undefined
console.log(typeof i , i)

i=7
console.log(typeof i , i ) // mjesto i moze pisati itakonesto
let itakonesto;
console.log(typeof itakonesto, itakonesto);

itakonesto=7;
console.log(typeof itakonesto, itakonesto);


let o = null;   // let o je jednako null   o je object
console.log(typeof o, o);
o = 8;
console.log(typeof o, o);  //sad ga sa objekta prebacujem u number

// JSON - JavaScript Object Notation
o = {
    id: 1001,   /* number*/
    ime: 'Pero',  /*string*/
    prezime: 'Perić',
    znaProgramirati: false /*boolean*/
};
console.log(typeof o, o);  /*json table object ispise ovo gore u table*/
console.table(o);

// Array, niz, polje
let niz = [2,2,3,2,2]; // ALTGR+F daje []  
console.log(typeof niz, niz); // json object // kaže da je object
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
console.table(backend);  //backend pošalje u []


// tijelo funckije - stari način
function pozdrav(){
    console.log('Pozdrav 1');
}

console.log(typeof pozdrav, pozdrav);
// poziv funkcije
pozdrav(); //ovo ispise pozdrav 1 je je to pizv na funciju


const pozdravi = () => console.log('Pozdrav 2');
console.log(typeof pozdravi, pozdravi); //pozdravi je varijabla 
pozdravi();

const kompleksnije = (x,y) => {   //funkcija prima dva parametra*/
    x = x + 3; // x = 5   y=2
    y = --y + x; // y = 6    u consoli ispisuje 11
    return x+y; //vraca vrijednosti i ubacis console.log
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

//simbol osigurava da je to vrijednost






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





