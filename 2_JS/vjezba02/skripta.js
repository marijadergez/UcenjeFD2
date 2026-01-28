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






  






//tipescript
//varijabla je prostor u memoriji   u primjeru gore ime je varijabla 
//tipovi podataka ,  ES6 tri načina definiranja varijabli
//constanta je samo ime govori a varijabla je promjenjiva mutable
//

